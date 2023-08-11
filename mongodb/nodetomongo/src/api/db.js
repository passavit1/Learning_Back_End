const mongoose = require("mongoose");

// Connection URL for MongoDB using Mongoose
const uri =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/connect";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB using Mongoose");
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String },
  token: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
