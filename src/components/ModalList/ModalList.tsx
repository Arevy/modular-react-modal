import React, { useContext } from "react";
import { modalStore } from "../../stores/RootContext";
import { observer } from "mobx-react-lite";
import ModalItem from "../ModalItem/ModalItem";

type ModalListProps = {
  handleEditModal: (index: number) => void;
};

const ModalList: React.FC<ModalListProps> = observer(({ handleEditModal }) => {


  return (
    <div className="modal-list">
      {modalStore.modals.map((modal, index) => (
        <ModalItem
          key={index}
          index={index}
          modal={modal}
          handleEditModal={handleEditModal}
        />
      ))}
    </div>
  );
});

export default ModalList;
