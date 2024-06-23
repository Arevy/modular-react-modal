declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare global {
  interface Window {
    store?: {
        modalStore: ModalStore;
      // Define other stores if needed
    };
  }
}

export {};
