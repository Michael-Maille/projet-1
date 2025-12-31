import express from "express";

const app = express();
app.use(express.json())

app.get("/health", (req, res) => {
    res.send("le serveur est fonctionnel");
});
    
 
app.post("/echo", (req, res) => {

    if (Object.keys(req.body).length === 0){
        return res.status(400).json({ error: "body vide"});
    }

    if (!req.body.message) {
        return res.status(400).json({ error: "champ 'message' manquant"});
    }

    if (typeof req.body.message !== "string") {
        return res.status(400).json({ error: "'message' doit être une string"});
    }

    if (req.body.message.trim()  === "") {
        return res.status(400).json({ error: "'message' ne doit pas être vide"});
    }

    res.json({ echo: req.body });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000")
});