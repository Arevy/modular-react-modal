import React, { useContext, useState } from "react";
import { StoreContext, modalStore } from "./stores/RootContext";
import "./App.scss";
import { observer } from "mobx-react-lite";
import useModal from "./hooks/useModal";
import ModalConfig from "./components/ModalConfig/ModalConfig";
import ModalList from "./components/ModalList/ModalList";

const App: React.FC = observer(() => {
  const modalStore = useContext(StoreContext);
  const [title, setTitle] = useState("Sample Modal");
  const [content, setContent] = useState("This is sample modal content.");
  const [footerButtons, setFooterButtons] = useState<string[]>([
    "Cancel",
    "Save",
  ]);
  const [newButton, setNewButton] = useState<string>("");

  useModal();

  const handleAddModal = () => {
    modalStore.addModal({
      title,
      content,
      footer: footerButtons,
    });
    resetFields();
  };

  const resetFields = () => {
    setTitle("Sample Modal");
    setContent("This is sample modal content.");
    setFooterButtons(["Cancel", "Save"]);
  };

  const handleEditModal = (index: number) => {
    const modal = modalStore.modals[index];
    setTitle(modal.title);
    setContent(modal.content);
    setFooterButtons(modal.footer);
  };

  return (
    <StoreContext.Provider value={modalStore}>
      <div className="App">
        <ModalConfig
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          footerButtons={footerButtons}
          setFooterButtons={setFooterButtons}
          newButton={newButton}
          setNewButton={setNewButton}
          handleAddModal={handleAddModal}
        />
        <ModalList handleEditModal={handleEditModal} />
      </div>
    </StoreContext.Provider>
  );
});

export default App;
