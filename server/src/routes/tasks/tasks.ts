import express from "express";
import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../../controllers/tasks";

let tasks = express.Router();

/**
 * Get list of tasks
 */
tasks.get("/", getTasks);

/**
 * Add a new task
 */
tasks.post("/", addTask);

/**
 * Get task by id
 */
tasks.get("/:id", getTaskById);

/**
 * Update existing task
 */
tasks.put("/:id", updateTask);

/**
 * Delete existing task
 */
tasks.delete("/:id", deleteTask);

export default tasks;
