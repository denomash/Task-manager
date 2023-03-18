import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loader } from "../components/Loader/Loader";
import { ViewTask } from "../components/Tasks/ViewTask";
import { ITask } from "../models/Tasks/ITask";
import { TasksApi } from "../services/TasksApi";

/**
 * View Task Page
 * @returns The node to render.
 */
export const ViewTaskPage: FC = () => {
  let { id } = useParams<{ id: string }>();

  const [task, setTask] = useState<ITask>();
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<string>("");

  const getTask = async () => {
    setLoading(true);
    const task = await TasksApi.getTaskById(id);
    setTask(task);
    setLoading(false);
  };

  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  if (loading && !task) return <Loader />;

  console.log({task})

  return <ViewTask task={task as ITask} setRefresh={setRefresh} />;
};
