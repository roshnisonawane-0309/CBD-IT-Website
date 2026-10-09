import React from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "../data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={companyData.contacts.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="orgo-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <MessageCircle size={22} />
      <span>Chat with us</span>
    </a>
  );
}
