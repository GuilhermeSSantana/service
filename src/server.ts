import dotenv from "dotenv";
import express from "express";
import routes from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na Porta:${port}`);
});
