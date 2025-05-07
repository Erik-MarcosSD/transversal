// pages/index.tsx
import { Ads } from "@/components/Ads";
import { Curiosidades } from "@/components/Curiosidades";
import { Header } from "@/components/Header";
import { Informativo } from "@/components/Informativo";
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

      <section id="informática" className="scroll-mt-[130px]">
        <h1 className="text-cyan-400 text-center font-bold text-4xl py-4 bg-cyan-950">
          Informática
        </h1>
        <Informativo />
      </section>

      <section id="curiosidades" className="scroll-mt-[130px]">
        <h1 className="text-cyan-400 text-center font-bold text-4xl py-4 bg-cyan-950">
          Curiosidades
        </h1>
        <Curiosidades />
      </section>
      <footer>
        <h1 className="text-white text-center font-bold text-xl py-2 bg-black">
          Desenvolvido por Erik Marcos - ADS241N01ZL - 2025
        </h1>
      </footer>
    </div>
  );
}
