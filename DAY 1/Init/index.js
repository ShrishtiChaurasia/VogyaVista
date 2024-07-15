const mongoose = require("mongoose");
const Data = require("./data.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/voyagevista";
const Listing = require("../Models/listing.js");

main()
  .then(() => {
    console.log("CONNECT SUCCESS");
  })
  .catch((err) => {
    console.log("error occured", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const InitDB = async () => {
  await Listing.deleteMany();
  const my = await Listing.insertMany(Data.data);
  console.log(my);
  console.log("ho gya initilization");
};

InitDB();
