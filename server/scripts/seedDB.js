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
    category: "Food and Beverages",
    quality: "New",
    featured: "false",
    likes: 0,
    notes: "This is an awesome bottle of pop!",
    createdAt: new Date(Date.now()),
    updatedAt: Date.now()
  },
  {
    barcode: "369852145",
    image:
      "https://3yjh1442i85n19ojee3jlshu-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/huckleberry-canoe-featured-1-1400x934.jpg",
    itemName: "Huckleberry Canoe",
    price: "150",
    category: "Boats",
    quality: "Great",
    featured: "true",
    likes: 0,
    notes: "Gorgeous wodden canoe - almost new condition!",
    createdAt: new Date(Date.now()),
    updatedAt: Date.now()
  },
  {
    barcode: "0789654123",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/MTD_Lawn_Mower.jpg",
    itemName: "Lawnmower",
    price: "15",
    category: "Lawn Tools",
    quality: "Good",
    featured: "false",
    likes: 0,
    notes: "Heavy signs of use",
    createdAt: new Date(Date.now()),
    updatedAt: Date.now()
  },
  {
    barcode: "48159263",
    image:
      "http://buymelah.com/wp-content/uploads/2018/09/Children-Toy-Car-Ride-On-Electric-Kids-Cars-Motorcycle-Toys-for-Children-1-3-Years-Old.jpg",
    itemName: "Ride On Toy",
    price: "15",
    category: "Toys",
    quality: "Great",
    featured: "false",
    likes: 0,
    notes: "Perfect for little ones!",
    createdAt: new Date(Date.now()),
    updatedAt: Date.now()
  },
  {
    barcode: "258147963",
    image:
      "https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_497,q_auto:eco,w_663/https://inews.co.uk/wp-content/uploads/2019/02/Crash-pic.jpg",
    itemName: "Car",
    price: "1",
    category: "Cars",
    quality: "Poor",
    featured: "false",
    likes: 0,
    notes: "Spare parts?",
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
