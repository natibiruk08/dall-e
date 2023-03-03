import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("Database Connection Error: ", error);
    });
};

export default connectDB;
