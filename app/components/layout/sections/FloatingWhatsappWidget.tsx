"use client"

import { MessageCircle } from "lucide-react";


export default function FloatingWhatsappWidget() {
    const phoneNumber = "9544637350";
    const message = encodeURIComponent("Hello, I have a question.");
    const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;


    return(
        <a href={whatsappUrl}
        target ="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} fill="currentColor" />
        </a>

    )
}