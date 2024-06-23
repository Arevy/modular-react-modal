# Modal Management Application

## Overview

This application provides a robust and customizable modal management system using React, MobX, and TypeScript. The application allows users to create, edit, and delete modals with customizable titles, content, and footer actions. The modals are designed to be reusable, accessible, and responsive.

## Features

1. **Component Reusability**: Easily customizable modals with different titles, content, and actions.
2. **Accessibility**: Modals handle focus trapping and provide appropriate ARIA attributes for better accessibility.
3. **Responsiveness**: The modals are designed to be responsive and look good on various screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **MobX**: Simple, scalable state management.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Jest**: JavaScript testing framework.
- **Testing Library**: Testing utilities for React.
- **SCSS**: CSS preprocessor for better styling.

## Prerequisites

- **Node.js**: v16.15.1
- **Yarn**: Package manager

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-repo/modal-management-app.git
   cd modal-management-app
   ```

2. **Install dependencies**:
   ```sh
   yarn install
   ```

## Usage

1. **Start the development server**:

   ```sh
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

2. **Run tests**:
   ```sh
   yarn test
   ```

## Project Structure

src/
│
├── components/
│ ├── Modal/
│ │ ├── Modal.tsx
│ │ ├── Modal.module.scss
│ ├── ModalConfig/
│ │ ├── ModalConfig.tsx
│ │ ├── ModalConfig.test.tsx
│ ├── ModalItem/
│ │ ├── ModalItem.tsx
│ │ ├── ModalItem.test.tsx
│ ├── ModalList/
│ │ ├── ModalList.tsx
│ │ ├── ModalList.test.tsx
│
├── hooks/
│ └── useModal.tsx
│
├── stores/
│ ├── ModalStore.ts
│ ├── RootContext.ts
│
├── App.tsx
├── App.scss
├── App.test.tsx
│
└── global.d.ts

## Description of Core Files

### `src/components/Modal/Modal.tsx`

The `Modal` component is responsible for rendering the modal dialog. It includes the modal's header, content, and footer, and handles interactions such as closing the modal when clicking outside or pressing the Escape key.

### `src/components/ModalConfig/ModalConfig.tsx`

The `ModalConfig` component provides the UI for configuring and adding new modals. It allows setting the title, content, and footer buttons of the modal.

### `src/components/ModalItem/ModalItem.tsx`

The `ModalItem` component represents an individual modal item in the list of modals. It includes options to execute, edit, or delete the modal.

### `src/components/ModalList/ModalList.tsx`

The `ModalList` component renders a list of all created modals using the `ModalItem` component.

### `src/hooks/useModal.tsx`

The `useModal` hook handles the modal's lifecycle, including rendering and unmounting the modal, and ensuring only one root is created for the modal.

### `src/stores/ModalStore.ts`

The `ModalStore` class manages the state of the modals using MobX. It includes methods for adding, updating, deleting, opening, and closing modals, as well as toggling modal styles.

### `src/App.tsx`

The `App` component integrates the modal configuration and list components and provides the main application logic.

## Running Tests

This project uses Jest and Testing Library for testing. Tests are located alongside the components they test. To run the tests, use the following command:

```sh
yarn test

Conclusion
This application demonstrates a modular and scalable approach to managing modals in a React application using MobX for state management. The modals are designed to be reusable, accessible, and responsive, ensuring a high-quality user experience across different devices and use cases.
```
