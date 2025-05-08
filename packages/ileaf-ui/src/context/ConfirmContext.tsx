"use client";
import React, { useState, useContext, createContext, ReactNode } from "react";
import ConfirmModal from "../components/confirm/ConfirmModal";
import { IconType } from "react-icons";

interface ConfirmModalProps {
  title: string;
  description: string;
  onConfirm: () => Promise<void>; // Updated to allow promises
  onCancel?: () => void;
  onClose?: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
  Icon?: IconType;
  iconColor?: string;
  iconContainerColor?: string;
  className?: string; // Custom styles
  allowOutsideClick?: boolean; // New prop for outside click behavior
}

interface ModalContextType {
  showModal: (props: ConfirmModalProps) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ConfirmPromptProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalProps, setModalProps] = useState<ConfirmModalProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const showModal = (props: ConfirmModalProps) => {
    setModalProps(props);
    setError(null);
  };

  const hideModal = () => {
    if (modalProps?.onClose) {
      modalProps.onClose();
    }
    setModalProps(null);
  };

  const handleCancel = () => {
    if (modalProps?.onCancel) {
      modalProps.onCancel();
    }
    hideModal();
  };

  const handleConfirm = async () => {
    if (modalProps) {
      setLoading(true);
      try {
        await modalProps.onConfirm();
        hideModal();
      } catch (err) {
        setError("An error occurred while confirming."); // Set error message
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalProps && (
        <ConfirmModal
          {...modalProps}
          hideModal={hideModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          loading={loading}
          error={error}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useConfirmPrompt = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useConfirmModal must be used within a ConfirmPromptProvider"
    );
  }
  return context;
};
