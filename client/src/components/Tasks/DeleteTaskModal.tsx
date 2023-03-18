import { useHistory } from "react-router-dom";
import { TasksApi } from "../../services/TasksApi";
import Button from "../Botton/Button";
import { Modal } from "../Modal/Modal";
import { ModalFooter } from "../Modal/ModalFooter";

/**
 * Delete Task Modal.
 */
export const DeleteTaskModal = ({
  isOpen,
  handleClose,
  id,
}: {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
}) => {
  let history = useHistory();

  const handleDelete = async () => {
    await TasksApi.deleteTask(Number(id));
    history.push("/");
  };

  return (
    <Modal title="Delete Task" open={isOpen} onClose={handleClose}>
      <div className="px-3 py-10 text-lg">
        Confirm that you wish to delete this task.
      </div>
      <ModalFooter>
        <Button display="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button display="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
