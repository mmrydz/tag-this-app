const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define itemSchema

const itemSchema = new Schema({
  barcode: { type: String, required: true, unique: true },
  image: { type: String },
  itemName: { type: String },
  price: { type: Number },
  category: { type: String },
  quality: { type: String },
  featured: { type: Boolean, default: false },
  likes: { type: Number },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
