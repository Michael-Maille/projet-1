import { Router } from "express";
import { postEcho } from "../controllers/echo.controller";
import { validatedMessage } from "../middlewares/validateMessage";

const router = Router ();

router.post("/echo",validatedMessage, postEcho);

export default router;
