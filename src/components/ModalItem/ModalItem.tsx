import React, { useContext } from "react";
import { StoreContext } from "../../stores/RootContext";

type ModalItemProps = {
  index: number;
  modal: {
    title: string;
    content: string;
    footer: string[];
  };
  handleEditModal: (index: number) => void;
};

const ModalItem: React.FC<ModalItemProps> = ({ index, modal, handleEditModal }) => {
  const modalStore = useContext(StoreContext);

  const handleOpenModal = () => {
    modalStore.openModal(index);
  };

  const handleDeleteModal = () => {
    modalStore.deleteModal(index);
  };

  return (
    <div className="modal-item">
      <div>
        <strong>Title:</strong> {modal.title}
      </div>
      <div>
        <strong>Content:</strong> {modal.content}
      </div>
      <div>
        <strong>Footer:</strong> {modal.footer.join(", ")}
      </div>
      <div>
        <strong>Style:</strong> {modalStore.styleOptionA ? "Style A" : "Style B"}
      </div>
      <div className="buttons">
        <button onClick={handleOpenModal}>Execute</button>
        <button onClick={() => handleEditModal(index)}>Edit</button>
        <button onClick={handleDeleteModal}>Delete</button>
      </div>
    </div>
  );
};

export default ModalItem;
