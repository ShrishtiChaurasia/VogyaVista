const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./Models/listing.js");
const path = require("path");
const MONGO_URL = "mongodb://127.0.0.1:27017/voyagevista";

main()
  .then(() => {
    console.log("DATABASE CONNECT!");
  })
  .catch((err) => {
    console.log("throw error", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/listings", async (req, res) => {
  const allList = await Listing.find({});
  res.render("listings/index.ejs", { allList });
});

// app.get("/main", async (req, res) => {
//   const samplelisting = new Listing({
//     title: "My new villa",
//     description: "This is a beautiful villa in the mountains",
//     price: 1000,
//     location: "Mumbai",
//     country: "India",
//   });
//   await samplelisting.save();
//   console.log("sample saved");
//   res.send("sample saved");
// });

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(8000, () => {
  console.log("SERVER is connected");
});
