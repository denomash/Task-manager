import { useState } from "react";
import { useHistory } from "react-router";

import { ITask } from "../../models/Tasks/ITask";
import { TaskStatus } from "../../models/Tasks/TaskStatus";
import Button from "../Botton/Button";
import { AddEditTaskModal } from "./AddEditTaskModal";

/**
 * List Tasks
 * @param props All properties.
 * @param {ITask[]} props.tasks List of tasks.
 * @returns The node to render.
 */
const ListTasks = ({
  tasks,
  setRefresh,
}: {
  tasks: ITask[];
  setRefresh: (refresh: string) => void;
}) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<ITask>();

  /**
   * Close modal.
   */
  const handleClose = () => {
    setIsOpen(!isOpen);
    setTask(undefined);
  };

  const handleEdit = (task: ITask) => {
    setTask(task);
    setIsOpen(!isOpen);
  };

  if (tasks.length === 0) {
    return <h1 className="flex justify-center text-2xl p-8 border rounded shadow">There are no tasks for you! </h1>;
  }

  return (
    <div className="mx-auto">
      <AddEditTaskModal
        task={task}
        isOpen={isOpen}
        handleClose={handleClose}
        handleUpdate={setRefresh}
      />

      {tasks.map(({ id, title, description, status }) => (
        <div key={`task-${id}`} className="border rounded shadow p-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-start">
              <span>{title}</span>
              <span className="text-sm text-slate-400 capitalize">
                {TaskStatus[status]}
              </span>
            </div>
            <div>
              <Button onClick={() => history.push(`/${id}`)}>View</Button>
              <Button
                display="secondary"
                onClick={() => handleEdit({ id, title, description, status })}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTasks;
