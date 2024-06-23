import { useEffect, useContext } from "react";
import Modal from "../components/Modal/Modal";
import { StoreContext } from "../stores/RootContext";
import { createRoot, Root } from "react-dom/client";

const useModal = () => {
  const modalStore = useContext(StoreContext);
  let root: Root | null = null;

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      console.error("Modal root element not found");
      return;
    }

    // Initialize the root if it hasn't been created yet
    if (!root) {
      root = createRoot(modalRoot);
      return;
    }

    const renderModal = () => {
      if (modalStore?.isOpen) {
        const modalElement = (
          <Modal
            title={modalStore.currentModal?.title || ""}
            content={<p>{modalStore.currentModal?.content || ""}</p>}
            footer={
              <>
                {modalStore.currentModal?.footer.map((text, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      text.toLowerCase() === "save"
                        ? alert("Save button clicked!")
                        : modalStore.closeModal()
                    }
                  >
                    {text}
                  </button>
                ))}
              </>
            }
          />
        );
        root?.render(modalElement);
      } else {
        root?.unmount();
      }
    };

    renderModal();

    return () => {
      if (modalStore?.isOpen) {
        root?.unmount();
      }
    };
  }, [modalStore?.isOpen, modalStore.currentModal, modalStore]);
};

export default useModal;
