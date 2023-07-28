// dbConnection.js
import mongoose from "mongoose";
import config from "./config.js";

export const dbConnection = async () => {
  try {
    await mongoose.connect(config.mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};
