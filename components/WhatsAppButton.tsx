import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20menyewa%20kendaraan..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat via WhatsApp"
    >
      <Phone className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-text-primary text-sm px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Hubungi Kami
      </span>
    </a>
  );
}
