import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/routes";

const app = express();
const port = process.env.PORT!;

app.use(express.json());
app.use(cors());

app.use('/api/v1/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});