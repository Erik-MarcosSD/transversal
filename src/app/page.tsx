// pages/index.tsx
import { Ads } from "@/components/Ads";
import { Header } from "@/components/Header";
import { Inicial } from "@/components/Inicial";
import { SO } from "@/components/SO";

export default function Home() {
  return (
    <div className="py-0 my-0 scroll-smooth">
      <Header />

      <section id="início" className="scroll-mt-[130px]">
        <Inicial />
      </section>

      <section id="ads" className="scroll-mt-[130px]">
        <h1 className="text-cyan-400 text-center font-bold text-4xl py-4 bg-cyan-950">
          O que é ADS?
        </h1>
        <Ads />
      </section>

      <section id="linguagens" className="scroll-mt-[130px]">
        <h1 className="text-cyan-400 text-center font-bold text-4xl py-4 bg-cyan-950">
          Linguagens de Programação
        </h1>
        <SO />
      </section>
    </div>
  );
}
