export function validatedMessage(req, res, next) {
    const { message } = req.body ?? {};
}

    // 1) body vide
    if (req.body === null || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "body vide" });
    }

    // 2) champ absent
    if (message === undefined) {
        return res.status(400).json({ error: "champ 'message' manquant" });
    }

    // 3) mauvais type
    if (typeof message !== "string") {
        return res.status(400).json({ error: "'message' doit être une string"});
    }

    // 4) string vide
    if (message.trim().length === 0) {
        return res.status(400).json({ error: "'message' ne doit pas être vide" })
    }

    next ();