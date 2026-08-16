"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";

    return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollY);
    };
    }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6" onClick={onClose}>
    <div className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[90dvh] md:rounded-3xl" onClick={(e) => e.stopPropagation()}>
      <div className="hidden w-1/2 shrink-0 bg-cover bg-center md:block" style={{ backgroundImage: "url('/images/onelink-properties.webp')" }} />
        <div className="w-full overflow-y-auto p-5 sm:p-7 md:w-1/2 md:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="font-serif text-xl font-semibold text-gray-900 sm:text-2xl">
              {title}
            </h2>

            <button type="button" onClick={onClose} aria-label="Close modal" className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-xl font-bold leading-none text-gray-500 transition hover:bg-gray-200 hover:text-black sm:h-10 sm:w-10">
              &times;
            </button>
          </div>

          {/* Form */}
          <div className="w-full">
            {children}
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}