import { ITask } from "../models/Tasks/ITask";
import { getRandomInt } from "../util/misc";
import orm from "./MockOrm";

/**
 * Get one task.
 */
async function getOne(id: number): Promise<ITask | null> {
  const db = await orm.openDb();
  for (const task of db.tasks) {
    if (task.id === id) {
      return task;
    }
  }
  return null;
}

/**
 * See if a task with the given id exists.
 */
async function exists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const task of db.tasks) {
    if (task.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all tasks.
 */
async function getAll(): Promise<ITask[]> {
  const db = await orm.openDb();
  return db.tasks;
}

/**
 * Add one task.
 */
async function add(task: ITask): Promise<void> {
  const db = await orm.openDb();
  task.id = getRandomInt();
  db.tasks.unshift(task);
  return orm.saveDb(db);
}

/**
 * Update a task.
 */
async function update(task: ITask): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.tasks.length; i++) {
    if (db.tasks[i].id === task.id) {
      db.tasks[i] = task;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.tasks.length; i++) {
    if (db.tasks[i].id === id) {
      db.tasks.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

export default {
  getOne,
  exists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
