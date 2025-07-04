import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import userRouter from "./src/modules/user/user.controller";

const app = new Hono();

app.use("*", cors());
app.use(logger());
app.get("/", (c) => c.text("oi"));
app.route("/api/users", userRouter);

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
