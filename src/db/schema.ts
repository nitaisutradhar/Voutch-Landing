import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const waitlistUsers = pgTable("waitlist_users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  phone: varchar("phone", { length: 50 }).default(""),
  createdAt: timestamp("created_at").defaultNow(),
});

export type User = typeof waitlistUsers.$inferSelect;