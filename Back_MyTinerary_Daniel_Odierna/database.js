import mongoose from "mongoose";

const PORT =process.env['PORT']
const MONGO_URI = process.env['DATABASE_URL']
const TEST_MONGO_URI = process.env['TEST_DATABASE_URL']




mongoose.connect(process.env['DATABASE_URL'])
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("Database connection failed"));

 export default mongoose;


 