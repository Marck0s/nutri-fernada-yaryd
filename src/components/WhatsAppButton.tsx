"use client";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setShowTooltip(true), 800);
      setTimeout(() => setShowTooltip(false), 4500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] flex items-center gap-3 transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tooltip */}
      <div
        className={`relative bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-xl transition-all duration-300 ease-out whitespace-nowrap ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Agendar consulta
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/5511974848888?text=Olá, vim pelo site e gostaria de agendar uma consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110"
      >
        {/* Ping rings — native Tailwind animation, no custom CSS required */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"
          style={{ animationDelay: "1.25s" }}
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.553 4.104 1.522 5.83L0 24l6.346-1.501A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.38l-.36-.214-3.727.882.897-3.643-.235-.375A9.818 9.818 0 1112 21.818z" />
        </svg>
      </a>
    </div>
  );
}