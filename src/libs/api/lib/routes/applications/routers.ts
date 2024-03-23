import { Hono } from "hono";

export const applicationsRouter = new Hono().get("/", async (c) => {
  return c.json("Hello!");
});
