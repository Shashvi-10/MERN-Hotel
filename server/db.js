const mongoose = require("mongoose");


/*Sample collecion of database is present in mongodb_collections folder*/
var mongoURL = "mongodb+srv://shashvi:shashvi@cluster0.szvcqtj.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
