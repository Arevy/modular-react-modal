import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalConfig from "./ModalConfig";
import { modalStore, StoreContext } from "../../stores/RootContext";

test("renders and interacts with ModalConfig", () => {
  render(
    <StoreContext.Provider value={modalStore}>
      <ModalConfig
        title="Test Title"
        setTitle={jest.fn()}
        content="Test Content"
        setContent={jest.fn()}
        footerButtons={["Button1", "Button2"]}
        setFooterButtons={jest.fn()}
        newButton=""
        setNewButton={jest.fn()}
        handleAddModal={jest.fn()}
      />
    </StoreContext.Provider>
  );

  const addButton = screen.getByText(/Add Button/i);
  fireEvent.click(addButton);

  expect(screen.getByPlaceholderText(/New button name/i)).toBeInTheDocument();
});
