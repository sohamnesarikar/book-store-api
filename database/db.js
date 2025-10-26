import mongoose from "mongoose";

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb database connected successfully`);
  } catch (e) {
    console.log(`Mongodb connection failed`, e);
    process.exit(1);
  }
}

export default connectToDB;
