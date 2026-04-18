import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5511914600243';
  const message = 'Tenho dúvidas sobre o curso';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" className="w-16 h-16 object-contain" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Tire suas dúvidas!
      </span>
    </a>
  );
};

export default WhatsAppButton;
