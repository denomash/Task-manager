import { useState } from "react";
import { AddEditTaskModal } from "./AddEditTaskModal";

/**
 * Add a Task
 * @returns The node to render.
 */
export const AddTask = ({
  setRefresh,
}: {
  setRefresh: (refresh: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(!isOpen);

  return (
    <div>
      <AddEditTaskModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleUpdate={setRefresh}
      />

      {/* Add button */}
      <div className="container">
        <div className="text-end">
          <button
            className="text-white bg-blue-600 rounded px-5 py-2.5 mb-3"
            onClick={handleClose}
          >
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};
