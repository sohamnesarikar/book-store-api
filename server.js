import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config();

// database connect
connectToDB();

const app = express();

// parse json body
app.use(express.json());

// book routes
app.use("/api/v1/books", bookRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
