import { render, fireEvent, within, waitFor } from "@testing-library/react";
import App from "./App";
import { modalStore, StoreContext } from "./stores/RootContext";

beforeEach(() => {
  let modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }
});

afterEach(() => {
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot && modalRoot.parentNode) {
    modalRoot.parentNode.removeChild(modalRoot);
  }
});

test("renders Add Modal button and handles modal interactions", async () => {
  const { getByText, queryByRole } = render(
    <StoreContext.Provider value={modalStore}>
      <App />
    </StoreContext.Provider>
  );

  fireEvent.click(getByText("Add Modal"));
  fireEvent.click(getByText("Execute"));

  await waitFor(() => {
    const modalRoot = document.getElementById("modal-root");
    expect(modalRoot).toBeInTheDocument();
    expect(modalRoot?.children.length).toBeGreaterThan(0);
  });

  const modal = await waitFor(() => queryByRole("dialog"));
  expect(modal).toBeInTheDocument();

  if (modal) {
    const saveButton = within(modal).getByText("Save");
    fireEvent.click(saveButton);
  } else {
    console.error("Modal did not render");
  }
});
