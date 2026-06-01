import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog Wisata Dieng & Wonosobo | Giovanni Rent",
  description: "Kumpulan artikel, tips wisata, rekomendasi rute, dan informasi terbaru seputar Dieng dan Wonosobo dari Giovanni Rent.",
};

const blogPosts = [
  {
    title: "Rute Motor Keliling Dieng dalam 1 Hari",
    slug: "rute-motor-dieng-1-hari",
    excerpt: "Panduan lengkap rute keliling destinasi wajib Dieng dalam 1 hari menggunakan motor. Efisien waktu dan tenaga.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    date: "12 Okt 2023",
    category: "Rute Motor"
  },
  {
    title: "10 Tips Wisata Dieng untuk Pertama Kali",
    slug: "tips-wisata-dieng-pertama-kali",
    excerpt: "Baru pertama kali ke Dieng? Baca 10 tips penting ini agar liburan Anda aman, nyaman, dan berkesan.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    date: "28 Sep 2023",
    category: "Tips Wisata"
  },
  {
    title: "Panduan Nonton Sunrise di Bukit Sikunir",
    slug: "sunrise-sikunir-panduan",
    excerpt: "Jam berapa harus berangkat? Pakai baju apa? Temukan semua jawabannya di panduan berburu sunrise Sikunir ini.",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    date: "15 Sep 2023",
    category: "Destinasi"
  },
  {
    title: "Rekomendasi Kuliner Malam Wonosobo",
    slug: "kuliner-malam-wonosobo",
    excerpt: "Lapar tengah malam setelah turun dari Dieng? Ini daftar kuliner malam Wonosobo yang wajib Anda cicipi.",
    imageUrl: "https://picsum.photos/seed/blog4/600/400",
    date: "02 Sep 2023",
    category: "Tips Wisata"
  },
  {
    title: "Review Honda Vario 160 untuk Nanjak Dieng",
    slug: "review-vario-160-dieng",
    excerpt: "Apakah Vario 160 kuat untuk boncengan nanjak ke Dieng? Simak ulasan performanya dari pengalaman riil kami.",
    imageUrl: "https://picsum.photos/seed/blog5/600/400",
    date: "20 Agu 2023",
    category: "Info Rental"
  },
  {
    title: "Mengenal Tradisi Ruwatan Rambut Gimbal",
    slug: "tradisi-rambut-gimbal-dieng",
    excerpt: "Dieng Culture Festival selalu identik dengan ruwatan anak berambut gimbal. Kenali sejarah dan mitos di baliknya.",
    imageUrl: "https://picsum.photos/seed/blog6/600/400",
    date: "05 Agu 2023",
    category: "Destinasi"
  }
];

export default function BlogIndex() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Blog & Artikel</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Temukan inspirasi perjalanan, tips berkendara, dan cerita menarik seputar wisata Wonosobo - Dieng.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Semua", "Tips Wisata", "Rute Motor", "Info Rental", "Destinasi"].map((cat, i) => (
            <button key={i} className={`px-5 py-2 rounded-full font-medium transition-colors ${i === 0 ? "bg-burnt-orange text-white border-burnt-orange" : "bg-white text-text-primary hover:bg-divider border-divider"} border`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
