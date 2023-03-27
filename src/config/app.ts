import express from "express";
import router from "../routes/index";
import middlewares from '../middlewares/index';

const app = express();

// middlewares configuration to use in the application
middlewares(app)

export default app;
