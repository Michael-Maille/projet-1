import express from "express";
import messagesRouter from "../routes/messages.routes.js";
import healthRouter from "../routes/health.routes.js";


const app = express();

app.use(express.json());

app.use(messagesRouter);
app.use(healthRouter);

export default app;