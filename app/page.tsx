"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Clock, Wrench, MapPin, MessageSquare, Map, ArrowRight, Star, Phone } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/mountain/1600/900"
            alt="Pemandangan Dieng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-border via-navy-border to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-bg-light">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center bg-bg-card border border-divider text-text-primary px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-burnt-orange fill-burnt-orange" />
                  ))}
                </div>
                1000+ Wisatawan
              </div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-burnt-orange" />
                Dekat Terminal Mendolo, Wonosobo
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Sewa Motor Dieng & Wonosobo <br className="hidden md:block" />
              Bebas Jelajah 24 Jam
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-bg-light mb-10 leading-relaxed font-light drop-shadow max-w-2xl mx-auto">
              Sewa motor & mobil 24 jam. Antar-jemput Terminal Mendolo & penginapan. Harga terjangkau mulai Rp 120.000/hari.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <a
                  href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20menyewa%20kendaraan..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-burnt-orange text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-deep-rust transition-transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2 fill-white" />
                  Pesan Sekarang
                </a>
                <Link
                  href="/sewa-motor"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  Lihat Harga
                </Link>
              </div>
              <div className="text-bg-light/90 text-sm flex items-center bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                <span className="font-medium mr-1">WhatsApp Fast Respon:</span> 0812-9132-1554
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USP Strip */}
      <section className="bg-navy-border border-t border-white/10 relative z-20 -mt-2">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-bg-light">
            {[
              { icon: Clock, title: "Buka 24 Jam", desc: "Siap melayani kapan saja" },
              { icon: Wrench, title: "Motor Prima", desc: "Servis rutin terjamin" },
              { icon: MapPin, title: "Antar-Jemput", desc: "Terminal & penginapan" },
              { icon: MessageSquare, title: "Respon Cepat", desc: "Admin ramah & solutif" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <feature.icon className="w-8 h-8 text-burnt-orange mb-3 md:mb-0 md:mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-xs text-bg-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada Unggulan */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Armada Unggulan"
            subtitle="Pilihan kendaraan terpopuler untuk menemani perjalanan Anda menjelajahi keindahan Dieng."
            centered
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <VehicleCard
                id="nmax"
                name="Yamaha NMAX 155"
                type="Motor Matic"
                imageUrl="/yamana-nmax-155.avif"
                price={150000}
                features={{ transmission: "Matic", capacity: 2, engine: "155cc", year: "2023" }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <VehicleCard
                id="vario"
                name="Honda Vario 160"
                type="Motor Matic"
                imageUrl="/honda-vario-160.webp"
                price={120000}
                features={{ transmission: "Matic", capacity: 2, engine: "160cc", year: "2023" }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <VehicleCard
                id="pcx"
                name="Honda PCX 160"
                type="Motor Matic"
                imageUrl="/honda-pcx-160.webp"
                price={150000}
                features={{ transmission: "Matic", capacity: 2, engine: "160cc", year: "2022" }}
              />
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/sewa-motor"
              className="inline-flex items-center text-text-primary font-bold border-b-2 border-burnt-orange pb-1 hover:text-burnt-orange transition-colors"
            >
              Lihat Semua Armada <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cara Sewa */}
      <section className="py-20 bg-bg-card relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-divider rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Cara Sewa Mudah"
            subtitle="Hanya dengan 4 langkah mudah, kendaraan siap digunakan untuk petualangan Anda."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-divider"></div>

            {[
              { step: 1, title: "Hubungi WA", desc: "Admin kami siap melayani 24/7 untuk mengecek ketersediaan.", time: "~2 menit" },
              { step: 2, title: "Pilih Kendaraan", desc: "Tentukan motor atau mobil sesuai kebutuhan & budget Anda.", time: "~5 menit" },
              { step: 3, title: "Kirim KTP/SIM", desc: "Kirim foto dokumen sebagai syarat sewa via WhatsApp.", time: "~1 menit" },
              { step: 4, title: "Ambil / Diantar", desc: "Ambil di lokasi kami atau nikmati layanan antar-jemput gratis.", time: "Sesuai jadwal" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center px-4"
              >
                <div className="w-20 h-20 mx-auto bg-burnt-orange text-white rounded-full flex items-center justify-center font-heading text-3xl font-bold shadow-md mb-6 relative z-10">
                  {item.step}
                </div>
                <h4 className="font-bold text-text-primary text-xl mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-block bg-burnt-orange/10 text-burnt-orange text-xs font-semibold px-3 py-1 rounded-full">{item.time}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA after steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-14"
          >
            <a
              href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20siap%20menyewa%20kendaraan%20ke%20Dieng.%20Bisa%20bantu%20cek%20ketersediaan?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-deep-rust transition-all hover:scale-105 shadow-lg gap-2"
            >
              Siap Berangkat? Hubungi Kami Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* Kenapa Kami */}
      <section className="py-20 bg-navy-border text-bg-light overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photo-us.png"
                  alt="Giovanni Rent Motor"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-burnt-orange rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <SectionHeader
                title="Kenapa Memilih Giovanni Rent?"
                className="mb-8"
              />

              <div className="space-y-6">
                {[
                  { title: "Lokasi Sangat Strategis", desc: "Hanya ±30 meter dari Terminal Mendolo Wonosobo. Turun bus, langsung gas ke Dieng tanpa ribet nyari ojek lagi." },
                  { title: "Unit Selalu Prima & Bersih", desc: "Motor diservis rutin di bengkel resmi. Kami memastikan rem, ban, dan mesin dalam kondisi sempurna untuk medan menanjak Dieng." },
                  { title: "Berpengalaman & Terpercaya", desc: "Telah melayani ribuan wisatawan sejak beroperasi. Kami paham betul kebutuhan wisatawan dan rute terbaik." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="mt-1 mr-4">
                      <div className="w-6 h-6 rounded-full bg-burnt-orange flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-burnt-orange"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                      <p className="text-bg-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Apa Kata Mereka?"
            subtitle="Ulasan nyata dari wisatawan yang telah mempercayakan perjalanan mereka kepada Giovanni Rent."
            centered
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                name="Budi Santoso"
                city="Jakarta"
                initials="BS"
                avatarColor="#C4602A"
                content="Pelayanan sangat memuaskan! Motor diantar tepat waktu ke penginapan. Kondisi NMAX sangat prima dipakai boncengan nanjak ke Sikunir nggak ngeden sama sekali."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                name="Rina Amelia"
                city="Surabaya"
                initials="RA"
                avatarColor="#2B4A6B"
                content="Adminnya fast respon walau saya hubungi jam 2 pagi karena mendadak butuh motor buat ke bukit. Syarat sewa juga nggak ribet. Recommended banget!"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                name="Marcus W."
                city="Melbourne, AUS"
                initials="MW"
                avatarColor="#5B8FA8"
                content="Great service! The scooter was in perfect condition for the Dieng Plateau roads. Staff was very helpful and even gave me route tips. Will definitely rent again next visit!"
              />
            </motion.div>
          </motion.div>

          {/* Google Maps Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://maps.google.com/?q=Giovanni+Rent+Wonosobo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:text-deep-rust transition-colors border-b border-burnt-orange/40 hover:border-deep-rust pb-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              Lihat semua ulasan di Google Maps →
            </a>
            <p className="text-xs text-text-muted mt-2">Punya pengalaman sewa di Giovanni Rent? Tinggalkan review Anda!</p>
          </motion.div>
        </div>
      </section>


      {/* Destinasi Wisata */}
      <section className="py-20 bg-bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeader
              title="Destinasi Wajib Dieng"
              subtitle="Siapkan itinerary Anda! Jelajahi keindahan alam Dieng Plateau dengan armada kami."
              className="mb-0"
            />
            <Link
              href="/wisata-dieng"
              className="hidden md:inline-flex items-center text-burnt-orange font-bold hover:text-text-primary transition-colors whitespace-nowrap"
            >
              Lihat Panduan Lengkap <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Bukit Sikunir", image: "https://picsum.photos/seed/sikunir/600/800", height: "h-80 md:h-[400px]" },
              { name: "Telaga Warna", image: "https://picsum.photos/seed/telaga/600/400", height: "h-80 md:h-[250px]" },
              { name: "Kawah Sikidang", image: "https://picsum.photos/seed/kawah/600/400", height: "h-80 md:h-[250px]" },
            ].map((dest, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group ${dest.height} ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-border via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-heading text-2xl font-bold mb-1">{dest.name}</h4>
                  <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-burnt-orange transition-colors">
                    <Map className="w-4 h-4 mr-1.5" />
                    Jelajahi Sekarang
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/wisata-dieng"
              className="inline-flex items-center text-burnt-orange font-bold border-b-2 border-burnt-orange pb-1"
            >
              Lihat Panduan Lengkap <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-bg-light">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.963282245785!2d109.89730005!3d-7.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sTerminal%20Mendolo%20Wonosobo!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Giovanni Rent"
            className="filter grayscale-[20%] contrast-125"
          ></iframe>
        </div>
      </section>
    </>
  );
}
