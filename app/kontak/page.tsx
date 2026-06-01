import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Phone, Clock } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata: Metadata = {
  title: "Kontak Giovanni Rent | Sewa Motor Wonosobo Dieng",
  description: "Hubungi Giovanni Rent Wonosobo Dieng 24 jam. Alamat lengkap, WhatsApp, dan panduan lokasi Google Maps.",
};

export default function Kontak() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Hubungi Kami</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Kami siap melayani Anda 24 jam. Jangan ragu untuk bertanya seputar ketersediaan armada, harga, atau tips perjalanan ke Dieng.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-divider mb-16">
          {/* Info Kontak */}
          <div className="lg:w-2/5 bg-navy-border p-10 md:p-12 text-bg-light flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-burnt-orange rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold text-white mb-8">Informasi Kontak</h2>

              <ul className="space-y-8">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-burnt-orange mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Alamat Garasi</h4>
                    <p className="text-bg-light leading-relaxed">
                      Jl. Mayjen Bambang Sugeng No. KM.03, Bumireso, Wonosobo, Jawa Tengah 56351<br />
                      <span className="text-burnt-orange text-sm">(±30m sebelah barat Terminal Mendolo)</span>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-burnt-orange mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">WhatsApp & Telepon</h4>
                    <p className="text-bg-light">0812-9132-1554</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <InstagramIcon className="w-6 h-6 text-burnt-orange mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/sewamotorwonosobo_giovanni" target="_blank" rel="noopener noreferrer" className="text-bg-light hover:text-burnt-orange transition-colors">
                      @sewamotorwonosobo_giovanni
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-burnt-orange mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Jam Operasional</h4>
                    <p className="text-bg-light">Senin - Minggu: 24 Jam</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-bg-light">
              <p className="text-sm text-bg-light">Giovanni Rent - Sahabat Perjalanan Anda</p>
            </div>
          </div>

          {/* Form Chat WA */}
          <div className="lg:w-3/5 p-10 md:p-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Kirim Pesan Langsung</h2>
            <p className="text-text-muted mb-8">Pilih template pesan di bawah ini, kami akan langsung merespon via WhatsApp Anda.</p>

            <div className="space-y-4">
              <a
                href="https://wa.me/6281291321554?text=Halo%20Admin%20Giovanni%20Rent,%20saya%20ingin%20tanya%20ketersediaan%20MOTOR%20untuk%20tanggal..."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-xl border-2 border-divider hover:border-burnt-orange group transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text-primary group-hover:text-burnt-orange">Tanya Ketersediaan Motor</span>
                  <span className="bg-burnt-orange text-burnt-orange px-3 py-1 rounded-full text-xs font-bold">Kirim</span>
                </div>
              </a>
              <a
                href="https://wa.me/6281291321554?text=Halo%20Admin%20Giovanni%20Rent,%20saya%20ingin%20tanya%20ketersediaan%20MOBIL%20untuk%20tanggal..."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-xl border-2 border-divider hover:border-burnt-orange group transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text-primary group-hover:text-burnt-orange">Tanya Ketersediaan Mobil</span>
                  <span className="bg-burnt-orange text-burnt-orange px-3 py-1 rounded-full text-xs font-bold">Kirim</span>
                </div>
              </a>
              <a
                href="https://wa.me/6281291321554?text=Halo%20Admin%20Giovanni%20Rent,%20saya%20sudah%20di%20Terminal%20Mendolo,%20apakah%20bisa%20ambil%20motor%20sekarang?"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-xl border-2 border-divider hover:border-burnt-orange group transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text-primary group-hover:text-burnt-orange">Posisi Sudah di Terminal</span>
                  <span className="bg-burnt-orange text-burnt-orange px-3 py-1 rounded-full text-xs font-bold">Kirim</span>
                </div>
              </a>
              <a
                href="https://wa.me/6281291321554?text=Halo%20Admin,%20saya%20ingin%20tanya-tanya%20dulu%20soal%20rute%20dan%20tips%20ke%20Dieng..."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-xl border-2 border-divider hover:border-burnt-orange group transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-text-primary group-hover:text-burnt-orange">Konsultasi Rute / Umum</span>
                  <span className="bg-burnt-orange text-burnt-orange px-3 py-1 rounded-full text-xs font-bold">Kirim</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-divider">
          <SectionHeader title="Peta Lokasi" centered className="mb-6 mt-4" />
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.963282245785!2d109.89730005!3d-7.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sTerminal%20Mendolo%20Wonosobo!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Giovanni Rent"
              className="filter grayscale-[10%] contrast-110"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
