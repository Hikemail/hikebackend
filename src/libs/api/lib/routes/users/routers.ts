import { Hono } from "hono";
import pool from "../../../../db/index.js";

export const usersRouter = new Hono()
  .get("/", async (c) => {
    return c.json("Hello!");
  })
  .post("/", async (c) => {
    const { name } = await c.req.parseBody();

    const queryText = "INSERT INTO users(name) VALUES($1) RETURNING *";
    const queryValues = [name];

    const res = await pool.query(queryText, queryValues);
    return c.json(res);
  });
