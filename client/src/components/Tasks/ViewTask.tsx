import { useState } from "react";

import { ITask } from "../../models/Tasks/ITask";
import Button from "../Botton/Button";
import { DeleteTaskModal } from "./DeleteTaskModal";
import { AddEditTaskModal } from "./AddEditTaskModal";

/**
 * View Task Page
 * @returns The node to render.
 */
export const ViewTask = ({
  task,
  setRefresh,
}: {
  task: ITask;
  setRefresh: (refresh: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const handleClose = () => setIsOpen(!isOpen);

  return (
    <>
      <AddEditTaskModal
        task={task}
        isOpen={isOpen}
        handleClose={handleClose}
        handleUpdate={setRefresh}
      />
      <DeleteTaskModal
        id={task?.id}
        isOpen={isOpenDelete}
        handleClose={() => setIsOpenDelete(!isOpenDelete)}
      />

      <div className="border rounded shadow p-3 mt-16 w-2/6 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className="font-bold text-2xl mb-3">Task Overview</h2>
          {/* task */}
          <div className="flex flex-col items-center w-full">
            {/* Title */}
            <span className="text-xl font-semibold">Title</span>
            <span className=" text-slate-400 mb-4">{task?.title}</span>

            {/* Status */}
            <span className="text-xl font-semibold">Status</span>
            <span className=" text-slate-400  mb-4">{task?.status} </span>

            {/* Description */}
            <span className="text-xl font-semibold">Description</span>
            <span className=" text-slate-400">{task?.description}</span>
          </div>

          {/* actions */}
          <div className="text-start mt-5">
            <Button onClick={handleClose}>Edit</Button>
            <Button
              display="danger"
              onClick={() => setIsOpenDelete(!isOpenDelete)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
