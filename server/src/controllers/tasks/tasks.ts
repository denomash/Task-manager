import { Request, Response } from "express";
import { ITask } from "../../models/Tasks/ITask";
import { TaskStatus } from "../../models/Tasks/TaskStatus";
import TaskRepo from "../../repos/TaskRepo";
import { getRandomInt } from "../../util/misc";

/**
 * Check if task exists
 * @param id Task id
 * @param {Response} res
 * @returns Does task exist
 */
const exists = async (id: number, res: Response) => {
  const exists = await TaskRepo.exists(id);

  if (!exists) return res.status(400).json({ message: "Invalid task id" });
};

/**
 * Get list of tasks
 * @param {Request} req
 * @param {Response} res
 * @returns List of tasks
 */
const getTasks = async (req: Request, res: Response) => {
  const list: ITask[] = await TaskRepo.getAll();

  return res.status(200).json(list);
};

/**
 * Get task by id
 * @param {Request} req
 * @param {Response} res
 * @returns Task
 */
const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  await exists(Number(id), res);

  // get task by id
  const task = (await TaskRepo.getOne(Number(id))) as ITask;

  return res.status(200).json(task);
};

/**
 * Add a new task
 * @param {Request} req
 * @param {Response} res
 * @returns The new task
 */
const addTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const id = getRandomInt();

  const newTask: ITask = {
    id,
    title,
    description,
    status: TaskStatus.backlog,
  };

  await TaskRepo.add(newTask);

  return res.status(200).json(newTask);
};

/**
 * Update existing task
 * @param {Request} req
 * @param {Response} res
 * @returns The updated task
 */
const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await exists(Number(id), res);

  // get task by id
  const task = (await TaskRepo.getOne(Number(id))) as ITask;

  // update the task
  const updatedTask = { ...task, title, description };
  await TaskRepo.update(updatedTask);

  return res.status(200).json(updatedTask);
};

/**
 * Delete existing task
 * @param {Request} req
 * @param {Response} res
 * @returns Id of deleted task
 */
const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  await exists(Number(id), res);

  // delete task
  await TaskRepo.delete(Number(id));

  return res.status(204).json();
};

export { getTasks, getTaskById, addTask, updateTask, deleteTask };
