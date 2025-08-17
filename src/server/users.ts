"use server";
import { db } from "@/db/drizzle";
import { User, waitlistUsers } from "@/db/schema";

export async function getUsers() {
    try {
        const allUsers = await db.select().from(waitlistUsers);
        return allUsers;
    } catch (error) {
        console.error(error);
        throw error
    }
}
export async function createUser(user: Omit<User, "id" | "createdAt" >) {
    try {
        await db.insert(waitlistUsers).values(user);
    } catch (error) {
        console.error(error);
        return { error: "Failed to create user" };
    }
}
