"use client";
import React, { useState, useContext, createContext, ReactNode } from "react";
import ConfirmModal from "../components/confirm/ConfirmModal";
import { IconType } from "react-icons";

interface ConfirmModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  loading?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  Icon?: IconType;
  iconColor?: string;
  iconContainerColor?: string;
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

  const showModal = (props: ConfirmModalProps) => {
    setModalProps(props);
  };

  const hideModal = () => {
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
