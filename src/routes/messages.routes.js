import { Router } from "express";
import { postMessage, getMessages, getMessageByIdController, deleteMessageById } from "../controllers/messages.controller.js";


const router = Router();

router.get("/messages", getMessages);
router.post("/messages", postMessage);

router.get("/messages/:id", getMessageByIdController);
router.delete("/messages/:id", deleteMessageById)

export default router;