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

export const Curiosidades = () => {
    return (
        <div
            className="w-full h-170 py-16 px-10"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
           

            <div className="grid md:grid-cols-3 gap-6 text-black">
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={historyIcon.src} alt="Ada Lovelace" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">A primeira linguagem</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>Ada Lovelace criou um algoritmo em 1843</li>
                        <li>É considerada a primeira programadora</li>
                        <li>Fez isso antes mesmo dos computadores existirem</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={security.src} alt="Senhas Fracas" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">Senhas mais usadas</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>"123456" e "admin" ainda são comuns</li>
                        <li>Senhas fracas facilitam invasões</li>
                        <li>Use senhas fortes com letras e símbolos</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={bug.src} alt="Bug" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">Origem do termo "bug"</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>Em 1947, um inseto travou um computador</li>
                        <li>Desde então, "bug" virou sinônimo de erro</li>
                        <li>É usado até hoje na programação</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={demanda.src} alt="Demanda" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">Alta demanda no Brasil</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>Mais de 150 mil vagas por ano</li>
                        <li>Déficit de profissionais qualificados</li>
                        <li>TI é uma das áreas mais promissoras</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={lucro.src} alt="Salários" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">Salários atrativos</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>Júnior: R$3.000 a R$6.000</li>
                        <li>Pleno: R$7.000 a R$10.000</li>
                        <li>Sênior: +R$12.000 (ainda mais no exterior)</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={duvida.src} alt="Python" className="w-20 mb-4" />
                    <h2 className="text-xl font-bold text-cyan-500 mb-2">De onde vem o nome Python?</h2>
                    <ul className="list-disc list-inside text-sm text-center space-y-1">
                        <li>O criador da linguagem, Guido van Rossum, era fã de comédia</li>
                        <li>Ele se inspirou no grupo britânico "Monty Python"</li>
                        <li>O nome não tem nada a ver com cobras!</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
