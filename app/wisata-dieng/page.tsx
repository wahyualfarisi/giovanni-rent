import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Clock, AlertTriangle, Mountain } from "lucide-react";

export const metadata: Metadata = {
  title: "Wisata Dieng Naik Motor | Panduan Lengkap + Rental Motor",
  description: "Panduan lengkap wisata Dieng Wonosobo. Daftar destinasi wajib, rute motor rekomendasi, dan tips aman berkendara di pegunungan Dieng bersama Giovanni Rent.",
};

const destinasi = [
  { name: "Bukit Sikunir", desc: "Terkenal dengan Golden Sunrise terbaik di Asia Tenggara. Trek pendakian ringan sekitar 30-45 menit.", img: "https://picsum.photos/seed/sikunir2/600/400" },
  { name: "Telaga Warna", desc: "Danau vulkanik yang airnya bisa berubah warna akibat kandungan sulfur tinggi. Terbaik dilihat dari Batu Pandang Ratapan Angin.", img: "https://picsum.photos/seed/telagawarna/600/400" },
  { name: "Kawah Sikidang", desc: "Kawah vulkanik aktif dengan kolam lumpur mendidih. Area ini cukup datar dan mudah dijangkau.", img: "https://picsum.photos/seed/kawahsikidang/600/400" },
  { name: "Candi Arjuna", desc: "Kompleks candi Hindu tertua di Pulau Jawa yang terletak di tengah hamparan lembah hijau Dieng.", img: "https://picsum.photos/seed/arjuna/600/400" },
  { name: "Batu Pandang Ratapan Angin", desc: "Spot foto di atas bukit batu dengan latar belakang view Telaga Warna dan Telaga Pengilon secara utuh.", img: "https://picsum.photos/seed/ratapanangin/600/400" },
  { name: "Kawah Candradimuka", desc: "Kawah yang dipercaya sebagai tempat pemandian Gatotkaca. Suasananya lebih sepi dan alami.", img: "https://picsum.photos/seed/candradimuka/600/400" },
];

export default function WisataDieng() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Panduan Jelajah Wisata Dieng</h1>
          <p className="text-text-muted text-lg">
            Temukan pesona &quot;Negeri di Atas Awan&quot;. Semua yang perlu Anda ketahui untuk liburan tak terlupakan di Dieng Plateau.
          </p>
        </div>

        {/* Hero Article Image */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://picsum.photos/seed/diengplateau/1200/600"
            alt="Dieng Plateau"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 prose prose-lg prose-stone max-w-none">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Tentang Dieng Plateau</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Dieng Plateau, atau Dataran Tinggi Dieng, adalah sebuah kawasan pegunungan vulkanik aktif yang membentang di perbatasan Kabupaten Wonosobo dan Banjarnegara, Jawa Tengah. Berada di ketinggian lebih dari 2.000 meter di atas permukaan laut, Dieng menawarkan perpaduan sempurna antara fenomena alam vulkanik, lanskap pertanian terasering, peninggalan sejarah kuno, dan udara pegunungan yang sejuk.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              Menjelajahi Dieng paling menyenangkan dilakukan menggunakan sepeda motor. Angin segar pegunungan, jalanan berkelok dengan pemandangan menakjubkan di kiri-kanan, membuat perjalanan menuju destinasi sama indahnya dengan destinasi itu sendiri.
            </p>

            <div className="bg-navy-border text-bg-light p-8 rounded-2xl mb-10 shadow-lg my-12">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Butuh Motor Tangguh untuk Keliling Dieng?</h3>
              <p className="mb-6 opacity-80">Giovanni Rent menyewakan motor prima dengan mesin injeksi terbaru. Aman untuk tanjakan Dieng yang curam.</p>
              <Link href="/sewa-motor" className="inline-block bg-burnt-orange text-white px-6 py-3 rounded-full font-bold hover:bg-deep-rust transition-colors">
                Lihat Katalog Motor
              </Link>
            </div>

            <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Rute Motor Rekomendasi (1 Hari)</h2>
            <div className="relative border-l-2 border-burnt-orange pl-8 ml-4 space-y-8 mb-10">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-burnt-orange border-4 border-bg-light top-1.5"></div>
                <h4 className="font-bold text-text-primary text-xl mb-2">04:00 - Sunrise Bukit Sikunir</h4>
                <p className="text-text-muted text-sm">Berangkat dari penginapan sebelum subuh. Motor diparkir di area bawah, dilanjutkan mendaki bukit sekitar 30 menit.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-burnt-orange border-4 border-bg-light top-1.5"></div>
                <h4 className="font-bold text-text-primary text-xl mb-2">07:00 - Sarapan Mie Ongklok</h4>
                <p className="text-text-muted text-sm">Nikmati sarapan khas Wonosobo/Dieng di warung sekitar area parkir Sikunir atau turun menuju arah Telaga Warna.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-burnt-orange border-4 border-bg-light top-1.5"></div>
                <h4 className="font-bold text-text-primary text-xl mb-2">08:30 - Telaga Warna & Ratapan Angin</h4>
                <p className="text-text-muted text-sm">Waktu terbaik melihat warna telaga yang memantulkan cahaya matahari pagi. Naik ke Ratapan Angin untuk foto epik.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-burnt-orange border-4 border-bg-light top-1.5"></div>
                <h4 className="font-bold text-text-primary text-xl mb-2">11:00 - Kawah Sikidang</h4>
                <p className="text-text-muted text-sm">Lihat aktivitas vulkanik dari dekat. Jangan lupa beli telur rebus kawah!</p>
              </div>
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-burnt-orange border-4 border-bg-light top-1.5"></div>
                <h4 className="font-bold text-text-primary text-xl mb-2">13:00 - Kompleks Candi Arjuna</h4>
                <p className="text-text-muted text-sm">Bersantai di padang rumput Candi Arjuna sebelum kabut tebal sore hari turun.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-divider">
                <h3 className="font-bold text-text-primary text-lg mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-burnt-orange mr-2" />
                  Tips Berkendara di Dieng
                </h3>
                <ul className="space-y-4 text-sm text-text-muted">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-divider mt-1.5 mr-2 shrink-0"></span>
                    <span>Gunakan engine brake (gigi rendah) saat turunan panjang untuk mencegah rem blong.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-divider mt-1.5 mr-2 shrink-0"></span>
                    <span>Bawa jaket tebal dan sarung tangan, suhu bisa mencapai 10°C (bahkan minus di musim kemarau).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-divider mt-1.5 mr-2 shrink-0"></span>
                    <span>Sewa motor minimal 125cc (seperti Vario/Lexi) atau 150cc ke atas jika berboncengan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-divider mt-1.5 mr-2 shrink-0"></span>
                    <span>Waspada kabut tebal tiba-tiba setelah jam 2 siang. Nyalakan lampu utama setiap saat.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card p-6 rounded-2xl border border-divider">
                <h3 className="font-bold text-text-primary text-lg mb-4 flex items-center">
                  <Mountain className="w-5 h-5 text-vespa-blue mr-2" />
                  Jarak dari Wonosobo
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  Dari kota Wonosobo (lokasi Giovanni Rent) ke kawasan utama Dieng berjarak sekitar <strong>26 KM</strong>.
                </p>
                <div className="flex items-center text-sm text-text-muted">
                  <Clock className="w-4 h-4 mr-1.5 shrink-0" />
                  Waktu tempuh normal: 45 - 60 Menit
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinasi Grid */}
        <SectionHeader title="Daftar Destinasi Populer" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinasi.map((dest, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-divider group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading text-xl font-bold text-text-primary mb-2">{dest.name}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
