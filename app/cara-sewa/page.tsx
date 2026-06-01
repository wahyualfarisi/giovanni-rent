import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, ShieldAlert, Ban, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Sewa Motor & Mobil di Giovanni Rent Wonosobo",
  description: "Langkah mudah menyewa kendaraan di Giovanni Rent. Pelajari syarat, ketentuan, dan kebijakan pembatalan sewa motor dan mobil di Wonosobo Dieng.",
};

export default function CaraSewa() {
  return (
    <div className="pt-24 pb-20 bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Cara Sewa Kendaraan</h1>
          <p className="text-text-muted text-lg">
            Proses pemesanan cepat, syarat mudah, liburan tenang.
          </p>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-divider mb-12">
          <SectionHeader title="Langkah Pemesanan" />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-divider before:to-transparent">
            {[
              { title: "Hubungi Admin via WhatsApp", desc: "Klik tombol WhatsApp yang ada di website. Informasikan tanggal sewa, jam ambil/kembali, dan jenis kendaraan yang diinginkan." },
              { title: "Cek Ketersediaan & Total Biaya", desc: "Admin akan mengkonfirmasi ketersediaan unit pilihan Anda beserta total biaya sewa dan opsi layanan tambahan (seperti antar-jemput)." },
              { title: "Kirim Persyaratan", desc: "Kirimkan foto dokumen persyaratan (seperti KTP, SIM, ID Card/KTM, dan bukti booking tiket pesawat/kereta/penginapan)." },
              { title: "Pembayaran & Serah Terima", desc: "Lakukan pembayaran saat serah terima kendaraan di lokasi yang telah disepakati (Terminal, Penginapan, atau Garasi kami)." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-burnt-orange text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bg-light p-6 rounded-2xl border border-divider">
                  <h4 className="font-bold text-lg text-text-primary mb-2">{step.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ketentuan Umum */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-divider">
            <div className="flex items-center mb-6">
              <ShieldAlert className="w-8 h-8 text-burnt-orange mr-3" />
              <h3 className="font-heading text-2xl font-bold text-text-primary">Ketentuan Umum</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Hitungan sewa adalah per 24 jam.",
                "Keterlambatan pengembalian dikenakan denda Rp 15.000/jam (motor) dan Rp 35.000/jam (mobil).",
                "Kendaraan hanya boleh digunakan di area Wonosobo, Banjarnegara, dan Temanggung.",
                "Penyewa dilarang meminjamkan kendaraan kepada pihak ketiga.",
                "Segala bentuk kerusakan akibat kelalaian penyewa menjadi tanggung jawab penyewa sepenuhnya."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-vespa-blue mr-3 shrink-0 mt-0.5" />
                  <span className="text-text-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kebijakan Pembatalan */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-divider">
            <div className="flex items-center mb-6">
              <Ban className="w-8 h-8 text-burnt-orange mr-3" />
              <h3 className="font-heading text-2xl font-bold text-text-primary">Kebijakan Pembatalan</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Pembatalan > 3 hari sebelum keberangkatan: DP dikembalikan 100%.",
                "Pembatalan 1-3 hari sebelum keberangkatan: DP hangus atau bisa di-reschedule.",
                "Pembatalan pada hari H: Dikenakan biaya penuh 1 hari sewa.",
                "Reschedule diperbolehkan maksimal 1 kali dengan pemberitahuan minimal H-2.",
                "Jika armada yang dipesan mengalami kendala sebelum hari H, kami berhak mengganti dengan armada sekelas atau mengembalikan DP 100%."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-vespa-blue mr-3 shrink-0 mt-0.5" />
                  <span className="text-text-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-burnt-orange text-white rounded-3xl p-10 text-center shadow-lg">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="font-heading text-3xl font-bold mb-4">Masih Ada Pertanyaan?</h3>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">Jangan ragu untuk menghubungi admin kami. Kami siap membantu merencanakan transportasi liburan Anda di Dieng.</p>
          <a
            href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20bertanya%20tentang%20sewa%20kendaraan..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-burnt-orange px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Chat Admin Sekarang
          </a>
        </div>

      </div>
    </div>
  );
}
