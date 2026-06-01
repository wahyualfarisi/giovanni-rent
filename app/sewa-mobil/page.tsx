import { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";
import SectionHeader from "@/components/SectionHeader";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sewa Mobil Wonosobo Dieng | Giovanni Rent",
  description: "Sewa mobil murah Wonosobo Dieng. Tersedia Avanza, Innova, HiAce. Pilihan lepas kunci atau dengan sopir berpengalaman.",
};

const mobilList = [
  { id: "avanza", name: "Toyota Avanza", type: "Mobil Keluarga", price: 350000, img: "/toyota-avanza.webp", features: { transmission: "Manual", capacity: 7, engine: "1300cc", year: "2021" } },
  { id: "innova", name: "Toyota Innova Reborn", type: "Mobil Keluarga Premium", price: 600000, img: "/toyota-reborn.webp", features: { transmission: "Matic", capacity: 7, engine: "2400cc", year: "2022" } },
  { id: "ertiga", name: "Suzuki Ertiga", type: "Mobil Keluarga", price: 350000, img: "/suzuki-ertiga.jpg", features: { transmission: "Manual", capacity: 7, engine: "1500cc", year: "2020" } },
  { id: "hiace", name: "Toyota HiAce Commuter", type: "Minibus", price: 1100000, img: "/toyota-hiace.webp", features: { transmission: "Manual", capacity: 15, engine: "2500cc", year: "2023" } },
];

export default function SewaMobil() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Sewa Mobil Wonosobo Dieng</h1>
          <p className="text-text-muted text-lg">
            Kenyamanan ekstra untuk liburan rombongan atau keluarga. Tersedia opsi lepas kunci atau layanan plus sopir lokal berpengalaman.
          </p>
        </div>

        {/* Driver Option Banner */}
        <div className="bg-burnt-orange text-white rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading text-2xl font-bold mb-2">Tidak Ingin Repot Menyetir?</h3>
            <p className="text-white/90">Kami menyediakan Sopir + BBM dengan tambahan mulai Rp 200.000/hari. Santai dan nikmati pemandangan.</p>
          </div>
          <a
            href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20tanya%20paket%20sewa%20mobil%20plus%20sopir..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-burnt-orange px-6 py-3 rounded-full font-bold whitespace-nowrap hover:bg-bg-card transition-colors"
          >
            Tanya Harga Paket
          </a>
        </div>

        {/* Grid Mobil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mobilList.map((mobil) => (
            <VehicleCard
              key={mobil.id}
              id={mobil.id}
              name={mobil.name}
              type={mobil.type}
              imageUrl={mobil.img}
              price={mobil.price}
              features={mobil.features}
            />
          ))}
        </div>

        {/* Syarat Lepas Kunci */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-divider mb-20">
          <SectionHeader title="Syarat Sewa Mobil Lepas Kunci" className="mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-text-primary">
            <div className="flex items-start bg-bg-light p-4 rounded-xl">
              <Info className="w-5 h-5 text-burnt-orange mr-3 shrink-0" />
              <span>Menitipkan e-KTP dan 1 identitas lain (KK / ID Card Karyawan)</span>
            </div>
            <div className="flex items-start bg-bg-light p-4 rounded-xl">
              <Info className="w-5 h-5 text-burnt-orange mr-3 shrink-0" />
              <span>Memiliki SIM A yang masih berlaku</span>
            </div>
            <div className="flex items-start bg-bg-light p-4 rounded-xl">
              <Info className="w-5 h-5 text-burnt-orange mr-3 shrink-0" />
              <span>Menitipkan Sepeda Motor + STNK (sebagai jaminan tambahan jika domisili lokal)</span>
            </div>
            <div className="flex items-start bg-bg-light p-4 rounded-xl">
              <Info className="w-5 h-5 text-burnt-orange mr-3 shrink-0" />
              <span>Bersedia disurvei tempat tinggal / penginapan</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-text-muted italic">* Untuk wisatawan luar kota, jaminan bisa disesuaikan dengan kesepakatan (seperti tiket pesawat/kereta pulang pergi).</p>
        </div>
      </div>
    </div>
  );
}
