import { Hono } from "hono";

import { mainRouter } from "./libs/api/index.js";
import { cors } from "hono/cors";

export default new Hono().use("*", cors()).route("/", mainRouter);
