import React from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "../data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={companyData.contacts.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <MessageCircle size={32} />
    </a>
  );
}
