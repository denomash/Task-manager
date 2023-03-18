import { FC, useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { AddTask } from "../components/Tasks/AddTask";

import ListTasks from "../components/Tasks/ListTasks";
import { ITask } from "../models/Tasks/ITask";
import { TasksApi } from "../services/TasksApi";

/**
 * List Tasks Page
 * @returns The node to render.
 */
export const ListTasksPage: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<string>("");

  const getTasks = async () => {
    setLoading(true);
    const tasks = await TasksApi.getTasksList();
    setTasks(tasks);
    setLoading(false);
  };

  useEffect(() => {
    getTasks();
  }, [refresh]);

  if (loading) return <Loader />;

  return (
    <div className="">
      <AddTask setRefresh={setRefresh}/>
      <ListTasks tasks={tasks} setRefresh={setRefresh} />
    </div>
  );
};
