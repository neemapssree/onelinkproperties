"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsappWidget() {
  const phoneNumber = "9544637350";
  const message = encodeURIComponent("Hello, I have a question.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" className="sm:hidden" />
      <MessageCircle size={28} fill="currentColor" className="hidden sm:block" />
    </a>
  );
}