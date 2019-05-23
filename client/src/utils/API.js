import axios from "axios";

export default {
  // Gets all items
  getItems: function () {
    return axios.get("/api/items");
  },
  // Gets all items in a category
  getItemsByCategory: function (category) {
    return axios.get("/api/items/" + category);
  },
  // Gets the item with the given barcode
  getItem: function (barcode) {
    console.log(barcode);
    return axios.get("/api/items/" + barcode);
  },
  // Updates the item with the given barcode
  updateItem: function (barcode, itemData) {
    console.log(barcode);
    return axios.put("/api/items/" + barcode, itemData);
  },
  // Deletes the item with the given barcode
  deleteItem: function (barcode) {
    return axios.delete("/api/items/" + barcode);
  },
  // Saves an item to the database
  saveItem: function (itemData) {
    return axios.post("/api/items", itemData);
  }
};