require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/Image", express.static(path.join(__dirname, "public/uploads/Image")));
app.use("/Pdf", express.static(path.join(__dirname, "public/uploads/Pdf")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/uploads/` + file.fieldname;

    if (file.fieldname === "Image") {
      cb(null, dir);
    } else if (file.fieldname === "Pdf") {
      cb(null, dir);
    }
  },

  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: storage,
});

// mongo db uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sovrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

// stripe test secret API key
const stripe = require("stripe")(process.env.STRIPE_SECRET);

async function run() {
  try {
    const database = client.db("pick-a-book");
    const bookCollection = database.collection("books");
    const retingReviewCollection = database.collection("retingReview");
    const usersCollection = database.collection("users");
    const orderCollection = database.collection("order");

    await client.connect();

    // post new book
    app.post(
      "/add_new_book",
      upload.fields([
        { name: "Image", maxCount: 1 },
        { name: "Pdf", maxCount: 1 },
      ]),
      async (req, res) => {
        const image = `Image/${req.files.Image[0].filename}`;
        const pdf = `Pdf/${req.files.Pdf[0].filename}`;

        const doc = {
          book_name: req.body.Book_Name,
          sub_title: req.body.Sub_Title,
          author_name: req.body.Author_Name,
          price: req.body.Price,
          catagory: req.body.Catagory,
          cover_type: req.body.Cover_Type,
          entry_date: req.body.Entry_date,
          offer_name: req.body.Offer_Name,
          offer_percentage: req.body.Offer_Percentage,
          stock: req.body.Stock,
          publications: req.body.Publication_Name,
          email: req.body.Email,
          discription: req.body.Description,
          image: image,
          pdf: pdf,
        };
        const result = await bookCollection.insertOne(doc);
        res.send(result);
      }
    );

    // get all books
    app.get("/get_all_book", async (req, res) => {
      const result = await bookCollection.find({}).toArray();
      res.send(result);
    });

    // delete book
    app.delete("/delete_book/:id", async (req, res) => {
      const query = { _id: ObjectId(req.params.id) };
      const result = await bookCollection.deleteOne(query);
      res.send(result);
    });

    // get smae catagory all book
    app.get("/catagory", async (req, res) => {
      const query = { catagory: req.query.CATAGORY };
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    // find single book
    app.get("/single/:id", async (req, res) => {
      const quary = { _id: ObjectId(req.params.id) };
      const result = await bookCollection.findOne(quary);
      res.send(result);
    });

    // add review and rating
    app.post("/ratingReview/:id", async (req, res) => {
      const doc = {
        book_id: req.params.id,
        reviewer_name: req.body.reviewer_name,
        reviewer_image: "demo img",
        rating: req.body.RatingValue,
        reaview: req.body.Review,
        date: req.body.date,
      };
      const result = await retingReviewCollection.insertOne(doc);
      res.send(result);
    });

    // find review and reting
    app.get("/ratingReview/:id", async (req, res) => {
      const quary = { book_id: req.params.id };
      const result = await retingReviewCollection.find(quary).toArray();
      res.send(result);
    });

    // post user data
    app.post("/users", async (req, res) => {
      const result = await usersCollection.insertOne(req.body);
      res.send(result);
    });

    // get user email
    app.get("/login/:Email", async (req, res) => {
      const quary = { Email: req.params.Email };
      const result = await usersCollection.findOne(quary);
      res.send(result);
    });

    // post order details
    app.post("/order", async (req, res) => {
      const result = await orderCollection.insertOne(req.body.details);
      res.send(result);
    });

    // stripe payment info
    app.post("/create-payment-intent", async (req, res) => {
      const amount = req.body.price * 100;

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // get order
    app.get("/allOrder/:email", async (req, res) => {
      const result = await orderCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });

    // get all order
    app.get("/adminAllOrder", async (req, res) => {
      const result = await orderCollection.find({}).toArray();
      res.send(result);
    });

    // delete order
    app.delete("/deleteOrder/:id", async (req, res) => {
      const query = { _id: ObjectId(req.params.id) };
      const result = await orderCollection.deleteOne(query);
      res.send(result);
    });

    // update order status
    app.put("/confirmOrder/:id", async (req, res) => {
      const filter = { _id: ObjectId(req.params.id) };

      const options = { upsert: true };

      const updateDoc = {
        $set: {
          status: `Confirmed`,
        },
      };
      const result = await orderCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // get all admin
    app.get("/admin", async (req, res) => {
      const result = await usersCollection.find({ Rool: "Admin" }).toArray();
      res.send(result);
      
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Pick-a-book server running");
});
app.listen(port, () => {
  console.log("Pick-a-book server rning:" + port);
});
