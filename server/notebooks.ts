"use server";

import { db } from "@/db/index";
import { InsertNotebook, notebooks, notes } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const createNotebook = async (values: InsertNotebook) => {
  try {
    await db.insert(notebooks).values(values);
    return { success: true, message: "Notebook created successfully" };
  } catch {
    return { success: false, message: "Failed to create notebook" };
  }
};

export const getNotebooks = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user?.id;

    if (!userId) {
      return { success: false, message: "No user found" };
    }

    const notebooksByUser = await db.query.notebooks.findMany({
      where: eq(notebooks.userId, userId),
      with: {
        notes: true
      }
    });

    // const note booksByUser = await db.select().from(notebooks).where(eq(notebooks.userId, userId))

    return { success: true, notebooks: notebooksByUser };
  } catch(error) {
    return { success: false, message: error };
  }
};

export const getNotebookById = async (id: string) => {
  try {
    const notebook = await db.query.notebooks.findFirst({
      where: eq(notebooks.id, id),
      with: {
        notes: true,
      },
    });
    return { success: true, notebook };
  } catch {
    return { success: false, message: "Failed to get notebook" };
  }
};

export const updateNotebook = async (id: string, values: InsertNotebook) => {
  try {
    await db.update(notebooks).set(values).where(eq(notebooks.id, id));
    return { success: true, message: "Notebook updated successfully" };
  } catch {
    return { success: false, message: "Failed to update notebook" };
  }
};

export const deleteNotebook = async (id: string) => {
  try {
    await db.delete(notebooks).where(eq(notebooks.id, id));
    return { success: true, message: "Notebook deleted successfully" };
  } catch {
    return { success: false, message: "Failed to delete notebook" };
  }
};
