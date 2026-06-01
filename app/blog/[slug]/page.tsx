import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `Artikel: ${params.slug.replace(/-/g, " ")} | Giovanni Rent`,
    description: "Artikel informatif wisata Dieng dari blog Giovanni Rent.",
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const isMainArticle = params.slug === "rute-motor-dieng-1-hari";
  
  const title = isMainArticle 
    ? "Rute Motor Keliling Dieng dalam 1 Hari" 
    : params.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <Link href="/blog" className="inline-flex items-center text-text-muted hover:text-burnt-orange transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Blog
        </Link>

        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-divider">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src={`https://picsum.photos/seed/${params.slug}/1000/600`}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> 12 Okt 2023</span>
              <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5" /> Rute Motor</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> Tim Giovanni Rent</span>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
              {title}
            </h1>

            <div className="prose prose-lg prose-stone max-w-none text-text-muted">
              {isMainArticle ? (
                <>
                  <p>
                    Mengunjungi Dieng dalam satu hari bisa menjadi tantangan tersendiri jika Anda tidak memiliki rute yang terencana. Menggunakan motor sewaan dari Wonosobo adalah pilihan terbaik karena Anda bisa menghindari macet dan lebih fleksibel berpindah antar tempat.
                  </p>
                  <h3>Persiapan Sebelum Berangkat</h3>
                  <ul>
                    <li><strong>Sewa Motor Prima:</strong> Pastikan Anda menyewa motor yang terawat. Giovanni Rent merekomendasikan motor minimal 125cc seperti Vario, Lexi, atau NMAX.</li>
                    <li><strong>Pakaian Hangat:</strong> Dieng terkenal dingin, terutama pagi hari. Bawa jaket tebal, sarung tangan, dan masker.</li>
                    <li><strong>Isi Bensin Full:</strong> Isi bensin penuh di kota Wonosobo sebelum mulai menanjak, karena SPBU di atas cukup jarang.</li>
                  </ul>
                  
                  <h3>Rencana Perjalanan (Itinerary)</h3>
                  <h4>04.00 - Perjalanan ke Bukit Sikunir</h4>
                  <p>Dari Wonosobo, perjalanan memakan waktu sekitar 45-60 menit. Tiba di area parkir Sikunir sekitar jam 05.00, langsung mendaki untuk melihat Golden Sunrise.</p>
                  
                  <h4>08.00 - Telaga Warna & Batu Pandang</h4>
                  <p>Setelah turun dari Sikunir, arahkan motor ke Telaga Warna. Untuk view terbaik dari atas, kunjungi Batu Pandang Ratapan Angin yang lokasinya tidak jauh dari telaga.</p>
                  
                  <h4>11.00 - Kawah Sikidang</h4>
                  <p>Kawah yang selalu berpindah-pindah ini menawarkan pengalaman unik. Anda bisa merebus telur di salah satu mata air panasnya.</p>
                  
                  <h4>13.00 - Kompleks Candi Arjuna</h4>
                  <p>Nikmati suasana sore di kompleks candi Hindu tertua di Jawa. Jika beruntung, cuaca masih cerah untuk berfoto.</p>
                  
                  <h4>15.00 - Perjalanan Turun & Beli Oleh-oleh</h4>
                  <p>Sebaiknya turun sebelum jam 4 sore untuk menghindari kabut tebal yang biasa turun menjelang senja. Singgah sebentar untuk membeli Carica dan Purwaceng.</p>
                  
                  <div className="bg-bg-light p-6 rounded-xl border border-divider mt-8">
                    <p className="font-bold text-text-primary mb-2">Ingin mencoba rute ini?</p>
                    <p className="text-sm">Hubungi admin Giovanni Rent sekarang untuk booking motor perjalanan Anda. Armada siap diantar ke terminal/penginapan Anda di Wonosobo.</p>
                    <a href="https://wa.me/6281291321554" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-burnt-orange font-bold hover:underline">Chat Admin WhatsApp &rarr;</a>
                  </div>
                </>
              ) : (
                <div className="text-center py-10 opacity-70">
                  <p>Konten artikel ini sedang dalam tahap penulisan.</p>
                  <p>Silakan cek kembali nanti atau baca artikel menarik kami yang lain.</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
