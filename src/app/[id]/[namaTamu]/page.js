'use client'
import Hero from "@/components/hero/hero";
import { useParams } from "next/navigation";

export default function IdPage() {
  const  id  = useParams()// Tangkap ID dari URL
  const namaTamu = useParams()

  return (
    <section>
      <Hero id={id} name={namaTamu} />  {/* Kirim ID ke komponen Hero */}
    </section>
  );
}
