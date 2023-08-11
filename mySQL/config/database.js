const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

// Connect to DB
exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected");
    })
    .catch((error) => {
      console.log("Error connecting to Database");
      console.log(error);
      process.exit(1);
    });
};
