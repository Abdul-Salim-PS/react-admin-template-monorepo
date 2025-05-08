"use client";

import React, { useEffect, useCallback } from "react";
import { LuX } from "react-icons/lu";
import { PiWarning } from "react-icons/pi";

import Button from "../Button";
import { IconType } from "react-icons";

interface ConfirmModalProps {
  title: string;
  description: string;
  onConfirm: () => Promise<void>;
  onCancel?: () => void;
  hideModal: () => void;
  loading?: boolean;
  Icon?: IconType;
  allowOutsideClick?: boolean;
  iconColor?: string;
  iconContainerColor?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  className?: string;
  error?: string | null;
}

const ConfirmModal: React.FC<ConfirmModalProps> = React.memo(
  ({
    title,
    description,
    onConfirm,
    onCancel,
    hideModal,
    loading,
    Icon = PiWarning,
    allowOutsideClick = true,
    iconColor = "#EA4335",
    iconContainerColor = "#FBD9D7",
    cancelButtonText = "Cancel",
    confirmButtonText = "Yes",
    className = "",
    error = null,
  }) => {
    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "Escape" && !loading) {
          hideModal();
        }
      },
      [hideModal, loading]
    );

    const handleOutsideClick = (event: React.MouseEvent) => {
      if (
        allowOutsideClick &&
        event.target === event.currentTarget &&
        !loading
      ) {
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
        <div
          className={`bg-white shadow-lg shadow-black/10 rounded-lg w-sm relative mx-3 lg:mx-0 ${className}`}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="p-5 pb-0 flex justify-end items-center">
            <button
              disabled={loading}
              className="bg-black disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full cursor-pointer w-8 h-8 flex justify-center items-center"
              onClick={hideModal}
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
            <h2 id="modal-title" className="text-lg font-bold">
              {title ?? "Confirm"}
            </h2>
            {description ? (
              <p id="modal-description" className="text-gray-700">
                {description}
              </p>
            ) : (
              ""
            )}
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
          </div>
          <div className="flex gap-3 p-5 pt-0 w-full">
            <Button
              onClick={onCancel}
              variant="transparent"
              extraClasses="bg-white !w-full px-4 py-2 rounded-lg"
              disabled={loading}
            >
              {cancelButtonText}
            </Button>
            <Button
              onClick={onConfirm}
              loading={loading}
              extraClasses="bg-primary w-full text-white px-4 py-2 rounded-lg"
              loaderColor="#fff"
              disabled={loading}
            >
              {confirmButtonText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default ConfirmModal;
