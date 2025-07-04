import { Hono } from "hono";
import { logger } from "hono/logger";
import userRouter from "./src/modules/user/user.controller";

const app = new Hono();

app.use(logger());
app.get("/", (c) => c.text("oi"));
app.route("/api/user", userRouter);

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
