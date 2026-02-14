import express from "express";
import messagesRouter from "../routes/messages.routes.js"

const app = express();

app.use(express.json());

app.use(messagesRouter);

export default app;