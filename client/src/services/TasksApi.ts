import axios from "axios";
import { ITask } from "../models/Tasks/ITask";

/**
 * Handle tasks API calls.
 */
export class TasksApi {
  /**
   * API endpoint
   */
  private static _enpoint = "http://localhost:8080/api/tasks";

  /**
   * Get List of all Tasks
   */
  public static async getTasksList(): Promise<ITask[]> {
    const tasks: ITask[] = (await axios.get(TasksApi._enpoint)).data;

    return tasks;
  }

  /**
   * Get Task by id
   */
  public static async getTaskById(id: string): Promise<ITask> {
    const task: ITask = (await axios.get(TasksApi._enpoint + "/" + id)).data;

    return task;
  }

  /**
   * Update Task
   */
  public static async updateTask(task: ITask): Promise<ITask> {
    const updatedTask: ITask = (
      await axios.put(TasksApi._enpoint + "/" + task.id, { ...task })
    ).data;

    return updatedTask;
  }

  /**
   * Create Task
   */
  public static async createTask(
    task: Omit<ITask, "id" | "status">
  ): Promise<void> {
    await axios.post(TasksApi._enpoint, { ...task });
  }

  /**
   * Delete Task
   */
  public static async deleteTask(id: number): Promise<void> {
    await axios.delete(TasksApi._enpoint + "/" + id);
  }
}
