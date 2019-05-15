const mongoose = require("mongoose");

const db = require("../server/database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tag-this-app"
);

const userSeed = [
  {
    username: "admin1",
    password: "password1",
  },
  {
    username: "admin2",
    password: "password2",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });