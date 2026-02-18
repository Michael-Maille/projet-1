import { dbPing } from "../data/messages.store.js";

export async function healthCheck(req, res) {
  const dbOk = await dbPing();

  if (dbOk) {
    return res.status(200).json({
      status: "ok",
      database: "up"
    });
  }

  return res.status(503).json({
    status: "degraded",
    database: "down"
  });
}
