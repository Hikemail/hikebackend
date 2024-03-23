import { Hono } from "hono";

export const emailRouter = new Hono().get("/", async (c) => {
  return c.json("Hello!");
});
