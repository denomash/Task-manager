import { ITaskStatus } from "./ITaskStatus";

/**
 * Task interface
 */
export interface ITask {
  /**
   * Task id
   */
  id: number;
  /**
   * Task title
   */
  title: string;
  /**
   * Task description
   */
  description: string;
  /**
   * Task status
   */
  status: ITaskStatus;
}
