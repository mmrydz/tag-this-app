import axios from "axios";

export default {
  // Gets all items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets all items in a category
  getItemsByCategory: function(category) {
    return axios.get("/api/items/" + category);
  },
  // Gets the item with the given barcode
  getItem: function(barcode) {
    return axios.get("/api/items/" + barcode);
  },
  // Deletes the item with the given barcode
  deleteItem: function(barcode) {
    return axios.delete("/api/items/" + barcode);
  },
  // Saves an item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};