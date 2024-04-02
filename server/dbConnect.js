const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUrl =
    "mongodb+srv://nitishkumar7645828185:8i3zuSETprsJTJuH@cluster0.eqoccsk.mongodb.net/";
  try {
    mongoose.connect(mongoUrl, { useNewUrlParser: true });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
``