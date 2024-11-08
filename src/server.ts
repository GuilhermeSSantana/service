import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1818;

app.use(express.json());
// app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
