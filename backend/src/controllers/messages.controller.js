import {
  getAllMessages,
  createMessage,
  getMessageById,
  deleteMessage,
} from "../data/messages.store.js";

function parseId(param) {
  const id = Number(param);
  if (!Number.isInteger(id) || id <= 0) return null;
  return id;
}

// GET /messages
export async function getMessages(_req, res) {
  try {
    const messages = await getAllMessages();
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

// POST /messages
export async function postMessage(req, res) {
  try {
    const { content } = req.body ?? {};

    if (typeof content !== "string" || content.trim() === "") {
      return res.status(400).json({ error: "champ 'content' invalide" });
    }

    const created = await createMessage(content.trim());
    return res.status(201).json(created);
  } catch (err) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

// GET /messages/:id
export async function getMessageByIdController(req, res) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ error: "id invalide" });
    }

    const message = await getMessageById(id);

    if (!message) {
      return res.status(404).json({ error: "message introuvable" });
    }

    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

// DELETE /messages/:id
export async function deleteMessageById(req, res) {
  try {
    const id = parseId(req.params.id);
    if (!id) {
      return res.status(400).json({ error: "id invalide" });
    }

    const deleted = await deleteMessage(id);

    if (!deleted) {
      return res.status(404).json({ error: "message introuvable" });
    }

    // 200 avec la ressource supprimée (simple à tester en front)
    return res.status(200).json(deleted);

    // Alternative REST stricte :
    // return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
