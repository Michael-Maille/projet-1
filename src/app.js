import express from "express";

import healthRoutes from routes/health.routes.js
import echoRoutes from routes/echo.routes.js

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(echoRoutes);

export default app;