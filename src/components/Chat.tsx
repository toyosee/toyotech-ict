import { MessageCircle } from 'lucide-react';

const WhatsAppFloatingButton = () => {
  const phoneNumber = "2348069213941"; 
  const siteName = "ToyotechICT Solutions";
  const message = `Hello ${siteName}! I would like to make more inquiry about your services.`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {/* Permanent Label with Site Name */}
      <div className="relative animate-bounce-slow">
        <div className="pointer-events-none rounded-lg bg-[#f26726] px-3 py-2 text-center shadow-xl border border-white/20">
          {/* <p className="text-[10px] uppercase tracking-wider text-white/80 font-bold leading-none">
            {siteName}
          </p> */}
          <p className="text-sm font-semibold text-white whitespace-nowrap">
            Chat with us
          </p>
        </div>
        
        {/* Tooltip Arrow - Centered */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rotate-45 bg-[#f26726] border-r border-b border-white/20"></div>
      </div>

      {/* The WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f26726] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] active:scale-95 sm:h-16 sm:w-16"
        aria-label={`Chat with ${siteName} on WhatsApp`}
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;