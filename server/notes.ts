"use server";

import { db } from "@/db";
import { InsertNote, notes } from "@/db/schema";
import { JSONContent } from "@tiptap/react";
import { eq } from "drizzle-orm";


export const createNote = async (values: InsertNote) => {
  try {
    await db.insert(notes).values(values);
    return { success: true, message: "Note created successfully" };
  } catch {
    return { success: false, message: "Failed to create note" };
  }
};

export const getNoteById = async (id: string) => {
  try {
    const note = await db.query.notes.findFirst({
      where: eq(notes.id, id),
      with: {
        notebook: true
      }
    })
    return { success: true, note };
  } catch {
    return { success: false, message: "Failed to get notes" };
  }
};

export const updateNote = async (id: string, content: {content: JSONContent }) => {
  try {
    await db.update(notes).set(content).where(eq(notes.id, id));
    return { success: true, message: "Note updated successfully" };
  } catch {
    return { success: false, message: "Failed to update note" };
  }
};

export const deleteNote = async (id: string) => {
  try {
    await db.delete(notes).where(eq(notes.id, id));
    return { success: true, message: "Note deleted successfully" };
  } catch {
    return { success: false, message: "Failed to delete note" };
  }
};
