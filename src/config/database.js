const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://arvindprince10:u4vax5zakpucDR6N@namastedevcluster.qmvjgfi.mongodb.net/devTinder"
  );
};

module.exports = connectDB;