import express from "express"; 
import cors from "cors"; 
import ProvinceRouter from "./controllers/province-controller.js";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express(); 
const swaggerDocument = JSON.parse(fs.readFileSync('./api-docs.json', 'utf8'));
app.use(cors()); 
app.use(express.json()); 
app.use("/api/province", ProvinceRouter); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

export default app;
