import React, { useContext } from "react";
import { StoreContext } from "../../stores/RootContext";

type ModalConfigProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  footerButtons: string[];
  setFooterButtons: React.Dispatch<React.SetStateAction<string[]>>;
  newButton: string;
  setNewButton: React.Dispatch<React.SetStateAction<string>>;
  handleAddModal: () => void;
};

const ModalConfig: React.FC<ModalConfigProps> = ({
  title,
  setTitle,
  content,
  setContent,
  footerButtons,
  setFooterButtons,
  newButton,
  setNewButton,
  handleAddModal,
}) => {
  const modalStore = useContext(StoreContext);
  const handleAddFooterButton = () => {
    if (newButton.trim()) {
      setFooterButtons([...footerButtons, newButton.trim()]);
      setNewButton("");
    }
  };

  const handleRemoveFooterButton = (index: number) => {
    const updatedButtons = footerButtons.filter((_, i) => i !== index);
    setFooterButtons(updatedButtons);
  };

  return (
    <div className="modal-config">
      <div>
        <label>
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Footer Buttons:
          {footerButtons.map((btn, index) => (
            <div key={index} className="footer-button">
              <span>{btn}</span>
              <button onClick={() => handleRemoveFooterButton(index)}>
                Remove
              </button>
            </div>
          ))}
          <div className="add-footer-button">
            <input
              type="text"
              value={newButton}
              onChange={(e) => setNewButton(e.target.value)}
              placeholder="New button name"
            />
            <button onClick={handleAddFooterButton}>Add Button</button>
          </div>
        </label>
      </div>
      <div>
        <label>
          Style Toggle:
          <input type="checkbox" onChange={() => modalStore.toggleStyle()} />
        </label>
      </div>
      <button onClick={handleAddModal}>Add Modal</button>
    </div>
  );
};

export default ModalConfig;
