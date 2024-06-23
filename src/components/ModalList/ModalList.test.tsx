import React from "react";
import { render, screen } from "@testing-library/react";
import ModalList from "./ModalList";
import { modalStore, StoreContext } from "../../stores/RootContext";

test("renders ModalList", () => {
  modalStore.addModal({
    title: "Test Modal",
    content: "Test Content",
    footer: ["Cancel", "Save"],
  });

  render(
    <StoreContext.Provider value={modalStore}>
      <ModalList handleEditModal={jest.fn()} />
    </StoreContext.Provider>
  );

  expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
});
