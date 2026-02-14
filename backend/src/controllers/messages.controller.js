import { getAllMessages ,createMessage, getMessageById, deleteMessage } from "../data/messages.store.js";

export function getMessages(req, res) {
    const messages = getAllMessages();
    return res.status(200).json(messages);
}

export function postMessage(req, res) {
    const { content } = req.body ?? {};

    if (typeof content !== "string" || content.trim() === "") {
        return res.status(400).json({ error: "champ 'content' invalide"});
    }

    const created = createMessage(content.trim());
    return res.status(201).json(created);
}

export function getMessageByIdController(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: "id invalide"});
    }

    const message = getMessageById(id);

    if (!message) {
        return res.status(404).json({ error: "message introuvable"});
    }

    return res.status(200).json(message);
}

export function deleteMessageById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: "id invalide" });
    }

    const deleted = deleteMessage(id);

    if (!deleted) {
        return res.status(404).json({ error: "message introuvable"});
    }

    return res.sendStatus(204);
}