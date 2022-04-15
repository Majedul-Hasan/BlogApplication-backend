const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`connected successfully with ${db.connection.host}`);
  } catch (error) {
    console.error(`error ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
