import { makeAutoObservable } from "mobx";

type ModalConfig = {
  title: string;
  content: string;
  footer: string[];
};

export class ModalStore {
  isOpen = false;
  modals: ModalConfig[] = [];
  currentModal: ModalConfig | null = null;
  styleOptionA = true;

  constructor() {
    makeAutoObservable(this);
  }

  addModal(modal: ModalConfig) {
    this.modals.push(modal);
  }

  updateModal(index: number, updatedModal: ModalConfig) {
    this.modals[index] = updatedModal;
  }

  deleteModal(index: number) {
    this.modals.splice(index, 1);
  }

  openModal(index: number) {
    this.currentModal = this.modals[index];
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  };

  toggleStyle() {
    this.styleOptionA = !this.styleOptionA;
  }
}
