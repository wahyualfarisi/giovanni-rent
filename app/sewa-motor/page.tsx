import { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";
import SectionHeader from "@/components/SectionHeader";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sewa Motor Dieng Wonosobo Murah | Giovanni Rent",
  description: "Sewa motor murah di Dieng dan Wonosobo mulai Rp 120.000/hari. Buka 24 jam, antar-jemput terminal & penginapan. Hubungi Giovanni Rent sekarang.",
};

const motorList = [
  { id: "vario160", name: "Honda Vario 160", type: "Matic", price: 120000, img: "/honda-vario-160.webp", features: { transmission: "Matic", capacity: 2, engine: "160cc", year: "2023" } },
  { id: "nmax", name: "Yamaha NMAX 155", type: "Matic", price: 150000, img: "/yamana-nmax-155.avif", features: { transmission: "Matic", capacity: 2, engine: "155cc", year: "2023" } },
  { id: "beat", name: "Honda Beat", type: "Matic", price: 100000, img: "/honda-beat.webp", features: { transmission: "Matic", capacity: 2, engine: "110cc", year: "2022" } },
  { id: "scoopy", name: "Honda Scoopy", type: "Matic", price: 110000, img: "/honda-scoopy.jpg", features: { transmission: "Matic", capacity: 2, engine: "110cc", year: "2022" } },
  { id: "cb150r", name: "Honda CB150R", type: "Manual", price: 150000, img: "/honda-cbr.webp", features: { transmission: "Manual", capacity: 2, engine: "150cc", year: "2021" } },
  { id: "crf150", name: "Honda CRF150L", type: "Adventure", price: 200000, img: "/honda-crf.webp", features: { transmission: "Manual", capacity: 2, engine: "150cc", year: "2023" } },
  { id: "aerox", name: "Yamaha Aerox", type: "Matic", price: 140000, img: "/yamaba-aerox.avif", features: { transmission: "Matic", capacity: 2, engine: "155cc", year: "2022" } },
  { id: "lexi", name: "Yamaha Lexi", type: "Matic", price: 130000, img: "/yamaha-lexy.png", features: { transmission: "Matic", capacity: 2, engine: "125cc", year: "2022" } },
];

export default function SewaMotor() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Sewa Motor Dieng Wonosobo</h1>
          <p className="text-text-muted text-lg">
            Jelajahi setiap sudut Dieng dengan bebas tanpa macet. Pilih motor favorit Anda dengan kondisi prima, siap tempur menanjak.
          </p>
        </div>

        {/* Filters (Visual Only for Dummy) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Semua", "Matic", "Manual", "Adventure"].map((filter, idx) => (
            <button key={filter} className={`px-5 py-2 rounded-full font-medium transition-colors ${idx === 0 ? "bg-navy-border text-bg-light" : "bg-white text-text-primary hover:bg-divider border border-divider"}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Motor */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {motorList.map((motor) => (
            <VehicleCard
              key={motor.id}
              id={motor.id}
              name={motor.name}
              type={`Motor ${motor.type}`}
              imageUrl={motor.img}
              price={motor.price}
              features={motor.features}
            />
          ))}
        </div>

        {/* Syarat Sewa */}
        <div className="bg-bg-card rounded-3xl p-8 md:p-12 border border-divider mb-20">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <SectionHeader title="Syarat Sewa" className="mb-6" />
              <p className="text-text-muted leading-relaxed">
                Persyaratan sewa motor di Giovanni Rent sangat mudah dan tidak ribet. Siapkan dokumen Anda saat serah terima kendaraan.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "KTP Asli sebagai jaminan (wajib)",
                "Menunjukkan SIM C yang masih aktif",
                "Bukti booking penginapan / tiket kereta",
                "Membayar lunas saat serah terima",
                "Bersedia difoto saat serah terima",
                "Tidak meminjamkan kendaraan ke pihak lain"
              ].map((syarat, i) => (
                <div key={i} className="flex items-start">
                  <Info className="w-5 h-5 text-burnt-orange mr-3 shrink-0 mt-0.5" />
                  <span className="text-text-primary font-medium">{syarat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Pertanyaan Umum" centered />
          <div className="space-y-4 mt-8">
            {[
              { q: "Apakah bisa antar-jemput ke terminal?", a: "Tentu! Kami menyediakan layanan antar-jemput gratis untuk area Terminal Mendolo dan sekitarnya." },
              { q: "Apakah harganya termasuk bensin?", a: "Harga sewa tidak termasuk bensin. Kendaraan akan diserahkan dengan indikator bensin tertentu dan dikembalikan di posisi yang sama." },
              { q: "Bagaimana jika motor mogok?", a: "Motor kami rutin diservis. Namun jika terjadi mogok mesin (bukan karena human error / ban bocor), kami akan mengganti unit dengan yang baru." },
              { q: "Apakah sewa bisa setengah hari?", a: "Minimal penyewaan adalah 1 hari (24 jam). Jika pengembalian kurang dari 24 jam, tetap dihitung tarif 1 hari." },
              { q: "Apakah disediakan jas hujan dan helm?", a: "Ya, setiap penyewaan motor sudah termasuk 2 helm SNI dan 2 jas hujan (ponco/kelelawar)." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white p-5 rounded-xl shadow-sm border border-divider open:border-burnt-orange">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-text-primary group-open:text-burnt-orange">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-muted mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
