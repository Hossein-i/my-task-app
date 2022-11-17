import Dexie from "dexie";

export const db = new Dexie("TodoAppDB");
db.version(1).stores({
  categories: "++id, name, color",
  tasks:
    "++id, categoryId, title, completed, remindAt, dueDate, repeat, note, createdAt, editedAt",
});
