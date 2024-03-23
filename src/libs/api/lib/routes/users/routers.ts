import { Hono } from "hono";

export const usersRouter = new Hono().get("/", async (c) => {
  return c.json("Hello!");
});
