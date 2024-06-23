import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalItem from "./ModalItem";
import { modalStore, StoreContext } from "../../stores/RootContext";

test("renders and interacts with ModalItem", () => {
  const modal = {
    title: "Test Modal",
    content: "Test Content",
    footer: ["Cancel", "Save"],
  };

  render(
    <StoreContext.Provider value={modalStore}>
      <ModalItem index={0} modal={modal} handleEditModal={jest.fn()} />
    </StoreContext.Provider>
  );

  const executeButton = screen.getByText(/Execute/i);
  fireEvent.click(executeButton);
  expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
});
