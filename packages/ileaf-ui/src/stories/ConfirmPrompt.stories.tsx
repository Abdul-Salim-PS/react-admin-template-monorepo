import React from "react";
import {
  ConfirmPromptProvider,
  useConfirmPrompt,
} from "../context/ConfirmContext";

const Wrapper = (args) => {
  return (
    <ConfirmPromptProvider>
      <Template {...args} />
    </ConfirmPromptProvider>
  );
};

const Template = () => {
  const { showModal } = useConfirmPrompt();
  const handleShowModal = () => {
    showModal({
      title: "Confirm Action",
      description: "Are you sure you want to proceed?",
      onConfirm: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      },
      onCancel: () => console.log("Cancelled!"),
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      className: "custom-modal-class", // Example of passing a custom class
    });
  };
  return (
    <button
      onClick={handleShowModal}
      className="bg-primary text-white px-5 py-2"
    >
      Click to open modal
    </button>
  );
};

export default {
  title: "Components/ConfirmPrompt",
  component: Wrapper,
};

export const Default = Wrapper.bind({});
Default.args = {
  title: "Confirm Action",
  description: "Are you sure you want to proceed?",
  loading: false,
};
