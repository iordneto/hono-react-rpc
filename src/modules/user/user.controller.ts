import { eq } from "drizzle-orm";
import { Hono } from "hono";
import db from "../../db";
import { productsTable, usersTable } from "../../db/schema";

const userRouter = new Hono();

userRouter.get("/", async (c) => {
  const users = await db.select().from(usersTable);

  c.json({ users });
});

userRouter.post("/", async (c) => {
  const data: typeof usersTable.$inferInsert = await c.req.json();

  const user = await db.insert(usersTable).values(data).returning();

  c.json({ user });
});

/* Get a user with all own products */
userRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .leftJoin(productsTable, eq(usersTable.id, productsTable.userId));

  if (!user) c.notFound();
  c.json({ user });
});

userRouter.put("/:id", async (c) => {
  const id = c.req.param("id");
  const data: typeof usersTable.$inferInsert = await c.req.json();

  const user = await db.update(usersTable).set(data).returning();

  c.json({ user });
});

userRouter.delete("/:id", async (c) => {
  const id = c.req.param("id");

  const user = await db.delete(usersTable).where(eq(usersTable.id, id));

  c.json({ user });
});

export default userRouter;
