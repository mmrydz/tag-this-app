const mongoose = require("mongoose");
const db = require("../database/models");

// This file will empty the Items collection and replace with the objects below

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/tag-this-db";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const itemSeed = [
  {
    barcode: "0987654321",
    image:
      "https://images.freshop.com/00078000003239/d9ea9075e921030d7df7a41eab2efa12_medium.png",
    itemName: "Diet Dr. Pepper",
    price: "1.99",
    category: "Other",
    quality: "Used",
    featured: "false",
    likes: 0,
    notes: "This is an awesome bottle of pop!",
    createdAt: new Date(Date.now()),
    updatedAt: Date.now()
  }
];

db.Item.remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " ITEMS INSERTED INTO DB!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
