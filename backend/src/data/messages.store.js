import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

function toMessage(row) {
  return {
    id: row.id,
    content: row.content,
    createdAt: row.created_at,
  };
}

export async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT id, content, created_at FROM messages ORDER BY id ASC"
  );
  return rows.map(toMessage);
}

export async function createMessage(content) {
  const { rows } = await pool.query(
    "INSERT INTO messages (content) VALUES ($1) RETURNING id, content, created_at",
    [content]
  );
  return toMessage(rows[0]);
}

export async function getMessageById(id) {
  const { rows } = await pool.query(
    "SELECT id, content, created_at FROM messages WHERE id = $1",
    [id]
  );
  return rows[0] ? toMessage(rows[0]) : null;
}

export async function deleteMessage(id) {
  const { rows } = await pool.query(
    "DELETE FROM messages WHERE id = $1 RETURNING id, content, created_at",
    [id]
  );
  return rows[0] ? toMessage(rows[0]) : null;
}

export async function dbPing() {
  try {
    await pool.query("SELECT 1");
    return true;
  } catch (err) {
    return false;
  }
}

