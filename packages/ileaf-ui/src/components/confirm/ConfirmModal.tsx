"use client";

import React, { useEffect, useCallback } from "react";
import { LuX } from "react-icons/lu";
import { PiWarning } from "react-icons/pi";

import Button from "../Button";
import { IconType } from "react-icons";

interface ConfirmModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  hideModal: () => void;
  loading?: boolean;
  Icon?: IconType;
  allowOutsideClick?: boolean;
  iconColor?: string;
  iconContainerColor?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  description,
  children,
  onConfirm,
  onCancel,
  hideModal,
  loading,
  Icon = PiWarning,
  allowOutsideClick = true,
  iconColor = "#EA4335",
  iconContainerColor = "#FBD9D7",
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && !loading) {
        hideModal();
      }
    },
    [hideModal]
  );

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (allowOutsideClick && event.target === event.currentTarget && !loading) {
      hideModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white shadow-lg shadow-black/10 rounded-lg w-sm relative mx-3 lg:mx-0">
        <div className="p-5 pb-0 flex justify-end items-center">
          <button
            disabled={loading}
            className="bg-black disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full cursor-pointer w-8 h-8 flex justify-center items-center"
            onClick={() => {
              if (!loading) {
                hideModal();
              }
            }}
          >
            <LuX size={20} />
          </button>
        </div>
        <div className="p-5 flex flex-col items-center justify-center">
          <div
            className={`p-5 bg-[${iconContainerColor}] text-[${iconColor}] rounded-full mb-3`}
          >
            <Icon size="40" />
          </div>
          <h2 className="text-lg font-bold">{title ?? "Confirm"}</h2>
          {description ? <p className="text-gray-700">{description}</p> : ""}
          {children && <div className="mt-4">{children}</div>}
        </div>
        <div className="flex gap-3 p-5 pt-0 w-full">
          <Button
            onClick={onCancel}
            variant="transparent"
            extraClasses="bg-white !w-full px-4 py-2 rounded-lg"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            loading={loading}
            extraClasses="bg-primary w-full text-white px-4 py-2 rounded-lg"
            loaderColor="#fff"
            disabled={loading}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
