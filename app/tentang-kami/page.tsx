import { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, Users, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Giovanni Rent Wonosobo",
  description: "Mengenal lebih dekat Giovanni Rent, penyedia jasa sewa motor dan mobil terpercaya di Wonosobo dan Dieng. Berpengalaman melayani ribuan wisatawan.",
};

export default function TentangKami() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">Tentang Giovanni Rent</h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Lebih dari sekadar tempat sewa motor. Kami adalah teman perjalanan Anda untuk menjelajahi keindahan Dieng Plateau dengan aman dan nyaman.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/team/800/1000"
                alt="Tim Giovanni Rent"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="font-bold text-text-primary text-lg">&quot;Pelayanan ramah, motor terawat. Recommended!&quot;</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Cerita Kami</h2>
            <div className="prose prose-lg prose-stone text-text-muted">
              <p>
                Berawal dari kecintaan kami terhadap keindahan alam Dieng dan Wonosobo, Giovanni Rent didirikan untuk membantu para wisatawan mengeksplorasi setiap sudut kota ini dengan lebih leluasa.
              </p>
              <p>
                Kami menyadari bahwa transportasi umum di kawasan pegunungan memiliki keterbatasan. Banyak wisatawan yang kesulitan menjangkau spot-spot indah seperti Sikunir saat subuh, atau Kawah Sikidang saat sore hari. Dari situlah kami hadir memberikan solusi transportasi yang fleksibel dan terjangkau.
              </p>
              <p>
                Sejak berdiri, kami telah melayani ribuan wisatawan dari berbagai daerah di Indonesia maupun mancanegara. Kepuasan dan keselamatan Anda adalah prioritas utama kami. Oleh karena itu, setiap armada kami selalu mendapat perawatan rutin di bengkel resmi.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-divider text-center">
                <div className="text-4xl font-bold text-burnt-orange mb-2">3+</div>
                <div className="text-text-muted text-sm font-medium">Tahun Berdiri</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-divider text-center">
                <div className="text-4xl font-bold text-burnt-orange mb-2">50+</div>
                <div className="text-text-muted text-sm font-medium">Armada Kendaraan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-navy-border rounded-3xl p-10 md:p-16 text-bg-light">
          <SectionHeader title="Nilai Utama Kami" centered className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: CheckCircle2, title: "Kualitas Armada", desc: "Mesin sehat, ban tebal, rem pakem. Standar wajib untuk menaklukkan tanjakan Dieng." },
              { icon: Users, title: "Pelayanan Sepenuh Hati", desc: "Admin 24 jam siap merespon keluhan dan pertanyaan Anda dengan cepat dan ramah." },
              { icon: MapPin, title: "Lokasi Strategis", desc: "Sangat dekat dengan Terminal Mendolo, memudahkan mobilitas Anda saat tiba di Wonosobo." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-burnt-orange rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-burnt-orange" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{value.title}</h3>
                <p className="text-bg-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
