import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { StoreContext } from "../../stores/RootContext";
import { observer } from "mobx-react-lite";

type ModalProps = {
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
};

const Modal: React.FC<ModalProps> = observer(({ title, content, footer }) => {
  const modalStore = useContext(StoreContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        modalStore.closeModal();
      }
    };

    if (modalStore.isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalStore]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if ((event.target as Element).classList.contains(styles["modal-overlay"])) {
      modalStore.closeModal();
    }
  };

  const handleSaveClick = () => {
    console.log("Save button clicked!"); // Debug log
    alert("Save button clicked!");
  };

  if (!modalStore.isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error("Modal root element not found");
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`${styles["modal-overlay"]} ${
        modalStore.isOpen ? styles.show : ""
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`${styles.modal} ${modalStore.isOpen ? styles.show : ""} ${
          modalStore.styleOptionA ? styles.styleA : styles.styleB
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles["modal-header"]}>
          <h2 className={styles["modal-title"]}>{title}</h2>
          <button
            className={styles["close-button"]}
            onClick={modalStore.closeModal}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className={styles["modal-content"]}>{content}</div>
        <div className={styles["modal-footer"]}>
          {modalStore.currentModal?.footer.map((text, index) => (
            <button
              key={index}
              onClick={() =>
                text.toLowerCase() === "save"
                  ? handleSaveClick()
                  : modalStore.closeModal()
              }
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>,
    modalRoot
  );
});

export default Modal;
