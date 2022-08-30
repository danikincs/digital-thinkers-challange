import express from "express";
import loadJson from "./_helpers/load_json";

import * as dotenv from "dotenv";
dotenv.config();

//Import routers
import router from "./router/drivers.route";

const app = express();

//routers
app.use("/api", router);


export default app;
