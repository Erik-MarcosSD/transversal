'use client';

import bg from "@/assets/images/csdv.png";
import dev from "@/assets/gif/dev.gif";
import radar from "@/assets/gif/radar.gif";
import security from "@/assets/gif/seguranca.gif";
import historyIcon from "@/assets/gif/historia.gif";
import bug from "@/assets/gif/bug.gif";
import demanda from "@/assets/gif/demanda.gif";
import duvida from "@/assets/gif/duvida.gif";
import lucro from "@/assets/gif/lucro.gif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Curiosidades = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    })
    return (
        <div
            className="w-full min-h-screen py-16 px-4 sm:px-10"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="text-3xl sm:text-5xl text-center text-cyan-400 font-bold mb-10">
                Curiosidades da Tecnologia
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
                {[
                    {
                        icon: historyIcon,
                        title: "A primeira linguagem",
                        items: [
                            "Ada Lovelace criou um algoritmo em 1843",
                            "É considerada a primeira programadora",
                            "Fez isso antes mesmo dos computadores existirem",
                        ],
                    },
                    {
                        icon: security,
                        title: "Senhas mais usadas",
                        items: [
                            `"123456" e "admin" ainda são comuns`,
                            "Senhas fracas facilitam invasões",
                            "Use senhas fortes com letras e símbolos",
                        ],
                    },
                    {
                        icon: bug,
                        title: 'Origem do termo "bug"',
                        items: [
                            "Em 1947, um inseto travou um computador",
                            'Desde então, "bug" virou sinônimo de erro',
                            "É usado até hoje na programação",
                        ],
                    },
                    {
                        icon: demanda,
                        title: "Alta demanda no Brasil",
                        items: [
                            "Mais de 150 mil vagas por ano",
                            "Déficit de profissionais qualificados",
                            "TI é uma das áreas mais promissoras",
                        ],
                    },
                    {
                        icon: lucro,
                        title: "Salários atrativos",
                        items: [
                            "Júnior: R$3.000 a R$6.000",
                            "Pleno: R$7.000 a R$10.000",
                            "Sênior: +R$12.000 (ainda mais no exterior)",
                        ],
                    },
                    {
                        icon: duvida,
                        title: "De onde vem o nome Python?",
                        items: [
                            "O criador da linguagem, Guido van Rossum, era fã de comédia",
                            'Ele se inspirou no grupo britânico "Monty Python"',
                            "O nome não tem nada a ver com cobras!",
                        ],
                    },
                ].map((card, i) => (
                    <div data-aos="zoom-in"
                        key={i}
                        className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
                    >
                        <img src={card.icon.src} alt={card.title} className="w-20 mb-4" />
                        <h2 className="text-xl font-bold text-cyan-500 mb-2">{card.title}</h2>
                        <ul className="list-disc list-inside text-sm text-center space-y-1">
                            {card.items.map((text, j) => (
                                <li key={j}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
