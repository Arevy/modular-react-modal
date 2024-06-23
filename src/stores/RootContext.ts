import { createContext } from "react";
import { ModalStore } from "./ModalStore";

export const modalStore = new ModalStore();
export const StoreContext = createContext(modalStore);
