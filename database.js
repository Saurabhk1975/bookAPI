const mongoose = require("mongoose");
// here nodejstutorial is the name of database which  will be created in database
mongoose
  .connect("mongodb://127.0.0.1:27017/Internship")
  .then(() => {
    console.log("connection established to database");
  })
  .catch((e) => {
    console.log(e);
  });

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  // genre: {
  //   type: String
  // },
  // publicationDate: {
  //   type: Date
  // }
});

// user details is inside the database name of collection
const user = mongoose.model("Book", BookSchema);
module.exports = user;
