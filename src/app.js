import express from "express";
import cors from "cors";
import ProvinceRouter from "./controllers/province-controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/province", ProvinceRouter);

export default app;