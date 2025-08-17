import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { visitors } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  try {
    const existing = await db.select().from(visitors).limit(1);

    if (existing.length === 0) {
      const [newRow] = await db.insert(visitors).values({ count: 1 }).returning();
      return NextResponse.json({ count: newRow.count });
    } else {
      const current = existing[0];
      const newCount = (current.count ?? 0) + 1;

      const [updated] = await db
        .update(visitors)
        .set({ count: newCount })
        .where(eq(visitors.id, current.id))
        .returning();

      return NextResponse.json({ count: updated.count });
    }
  } catch (error) {
    console.error("Visitor counter error:", error);
    return NextResponse.json({ error: "Failed to update counter" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const existing = await db.select().from(visitors).limit(1);
    if (existing.length === 0) {
      return NextResponse.json({ count: 0 });
    }
    return NextResponse.json({ count: existing[0].count });
  } catch (error) {
    console.error("Visitor counter fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch counter" }, { status: 500 });
  }
}
