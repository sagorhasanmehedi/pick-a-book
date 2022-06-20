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

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
// app.use("/pdf", express.static(path.join(__dirname, "public/uploads/pdf")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
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

const uri =
  "mongodb+srv://pick-a-book:hZVOPdNWgw4APfgf@cluster0.sovrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("pick-a-book");
    const bookCollection = database.collection("books");
    const retingReviewCollection = database.collection("retingReview");
    await client.connect();

    // post new book
    app.post(
      "/add_new_book",
      upload.fields([
        { name: "Image", maxCount: 1 },
        { name: "Pdf", maxCount: 1 },
      ]),
      async (req, res) => {
        const image = `http://localhost:7000/uploads/${req.files.Image[0].filename}`;
        const pdf = `http://localhost:7000/pdf/${req.files.Pdf[0].filename}`;

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
        reviewer_name: "Mehedi Hasan",
        reviewer_image: "demo img",
        rating: req.body.RatingValue,
        reaview: req.body.Review,
        date: new Date().toJSON().slice(0,10)
      };
      const result = await retingReviewCollection.insertOne(doc);
      res.send(result);
    });

    // find review and reting
    app.get("/ratingReview/:id",async(req,res)=>{ 
      const quary = {book_id : req.params.id };
      const result = await retingReviewCollection.find(quary).toArray();
      res.send(result);
    })


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
