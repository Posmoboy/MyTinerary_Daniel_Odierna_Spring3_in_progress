import mongoose from "mongoose";

const PORT =process.env['PORT']
const MONGO_URI = process.env['DATABASE_URL']
const TEST_MONGO_URI = process.env['TEST_DATABASE_URL']




mongoose.connect("mongodb+srv://MernTest:K2guMswWO1A8YbtX@cluster0.fg5gk5r.mongodb.net/")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("Database connection failed" + error.message));

 export default mongoose;


 