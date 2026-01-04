import app from "./app.js";

const port = 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});