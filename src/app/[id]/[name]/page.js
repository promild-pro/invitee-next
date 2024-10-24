'use client';

import Hero from "@/components/hero/hero";
import { useParams } from "next/navigation"; // Mengambil parameter dari URL

export default function IdOnlyPage() {
  const { id, name } = useParams(); // Mengambil 'id' dari URL

  // Jika 'id' tidak ada (seharusnya tidak terjadi di halaman ini), tampilkan error
  if (!id) {
    return <div>Error: ID tidak ditemukan.</div>;
  }

  // Nama tamu default ketika tidak ada 'name' di URL
  const namaTamu = name ? name.replace(/_/g,' ') : "Nama Tamu";

  return (
    <section>
      <Hero id={id} name={namaTamu} /> {/* Kirim ID dan Nama Tamu ke komponen Hero */}
    </section>
  );
}
