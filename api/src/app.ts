import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

//Import routers
import router from "./router/drivers.route";
import path from "path";

const app = express();

//provide images in public folder
var dir = path.join(__dirname, 'public');

app.use(express.static(dir));
//routers
app.use("/api", router);


export default app;
