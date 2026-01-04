import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import app from "../app.js";

describe("Messages API", () => {

  it("POST /messages → 201", async () => {
    const res = await request(app)
      .post("/messages")
      .send({ content: "Hello" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.content).toBe("Hello");
  });

  it("POST /messages vide → 400", async () => {
    const res = await request(app)
      .post("/messages")
      .send({ content: "" });

    expect(res.status).toBe(400);
  });

  it("GET /messages → tableau", async () => {
    const res = await request(app).get("/messages");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});

it("GET /messages/:id → 200", async () => {
  // Arrange : créer un message
  const createRes = await request(app)
    .post("/messages")
    .send({ content: "Message unique" });

  const id = createRes.body.id;

  // Act : récupérer le message par id
  const res = await request(app).get(`/messages/${id}`);

  // Assert
  expect(res.status).toBe(200);
  expect(res.body.id).toBe(id);
  expect(res.body.content).toBe("Message unique");
});

it("DELETE /messages/:id → 204", async () => {
  // Arrange
  const createRes = await request(app)
    .post("/messages")
    .send({ content: "À supprimer" });

  const id = createRes.body.id;

  // Act
  const res = await request(app).delete(`/messages/${id}`);

  // Assert
  expect(res.status).toBe(204);

  // Vérification bonus : le message n'existe plus
  const check = await request(app).get(`/messages/${id}`);
  expect(check.status).toBe(404);
});
