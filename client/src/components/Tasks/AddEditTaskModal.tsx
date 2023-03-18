import { useEffect, useState } from "react";
import { ITask } from "../../models/Tasks/ITask";
import { TasksApi } from "../../services/TasksApi";
import Button from "../Botton/Button";
import { Modal } from "../Modal/Modal";
import { ModalFooter } from "../Modal/ModalFooter";

/**
 * Edit Task Modal.
 */
export const AddEditTaskModal = ({
  task,
  isOpen,
  handleClose,
  handleUpdate,
}: {
  task?: ITask;
  isOpen: boolean;
  handleClose: () => void;
  handleUpdate: (refresh: string) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleAddEdit = async () => {
    if (!title)
      return setErrors({ ...errors, title: "This field is required!" });
    if (!description)
      return setErrors({ ...errors, description: "This field is required!" });
    setLoading(true);
    if (task) {
      await TasksApi.updateTask({ ...task, title, description });
    } else {
      await TasksApi.createTask({ title, description });
    }
    handleUpdate(Math.random().toString());

    setLoading(false);
    handleClose();
  };

  return (
    <Modal
      title={`${task ? "Edit" : "Add"} Task`}
      open={isOpen}
      onClose={handleClose}
    >
      {/* Form */}
      <div className="flex flex-col items-center p-3 mb-3">
        <div className="flex flex-col w-10/12 mx-auto text-start">
          <span className="font-semibold mb-1">Title</span>
          <input
            className="border rounded p-2 mb-2"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors({ ...errors, title: "" });
            }}
          />
          {errors.title && <span className="text-red-500">{errors.title}</span>}
          <span className="font-semibold mb-1">Description</span>
          <input
            className="border rounded p-2 mb-2"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErrors({...errors, description:""})

            }}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <ModalFooter>
        <Button onClick={handleAddEdit} disabled={loading}>
          {task ? "Edit" : "Save"}
        </Button>
        <Button display="secondary" disabled={loading} onClick={handleClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
