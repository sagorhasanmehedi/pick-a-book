const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());

// const UPLOADS_FOLDER = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
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
app.use("/images", express.static(path.join(__dirname, "public/images")));


app.post("/add_new_book",upload.single("image"),(req,res)=>{
  console.log("ok");
})


// const uri =
//   "mongodb+srv://pick-a-book:hZVOPdNWgw4APfgf@cluster0.sovrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Pick-a-book server running");
});
app.listen(port, () => {
  console.log("Pick-a-book server rning:" + port);
});

// const database = client.db("pick-a-book");
// const bookCollection = database.collection("books");

// app.post("/add_new_book", async (req, res) => {
//   const pic = req.files.Image.data;
//   const encodedPic = pic.toString("base64");
//   const imageBuffer = Buffer.from(encodedPic, "base64");

//   const doc = {
//     book_name: req.body.Book_Name,
//     author_name: req.body.Author_Name,
//     price: req.body.Price,
//     offer_price: req.body.Offer_Price,
//     catagory: req.body.Catagory,
//     entry_date: req.body.Entry_date,
//     offer_name: req.body.Offer_Name,
//     offer_percentage: req.body.Offer_Percentage,
//     stock: req.body.Stock,
//     publications: req.body.Publication_Name,
//     email: req.body.Email,
//     discription: req.body.Description,
//     image: imageBuffer,
//   };
//   const result = await bookCollection.insertOne(doc);
//   res.send(result);
// });

// app.get("/get_all_book", async (req, res) => {
//   const result = await bookCollection.find({}).toArray();
//   res.send(result);
// });

// app.delete("/delete_book/:id", async (req, res) => {

// const query = { _id: ObjectId(req.params.id) };
// const result = await bookCollection.deleteOne(query);
// res.send(result);
// });
