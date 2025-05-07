'use client';

import dev from "@/assets/gif/dev.gif";
import security from "@/assets/gif/seguranca.gif";
import radar from "@/assets/gif/radar.gif";
import bg from "@/assets/images/info.jpg";

export const Informativo = () => {
    return (
        <div
            className="mx-auto h-170 py-12 px-8"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-white">
                <h2 className="text-5xl font-bold text-cyan-400 mb-8">Áreas de Atuação</h2>
                <ul className="grid md:grid-cols-3 gap-6">
                    <li className="bg-gray-200 text-black p-4 rounded-xl flex items-center gap-4 shadow-md">
                        <img src={dev.src} alt="Dev" className="w-14" />
                        <div>
                            <h3 className="font-bold text-lg">Desenvolvimento Web</h3>
                            <p className="text-sm">Front-end, Back-end e Full-stack</p>
                        </div>
                    </li>
                    <li className="bg-gray-200 text-black p-4 rounded-xl flex items-center gap-4 shadow-md">
                        <img src={radar.src} alt="Infraestrutura" className="w-14" />
                        <div>
                            <h3 className="font-bold text-lg">Infraestrutura e DevOps</h3>
                            <p className="text-sm">Automação, servidores e cloud</p>
                        </div>
                    </li>
                    <li className="bg-gray-200 text-black p-4 rounded-xl flex items-center gap-4 shadow-md">
                        <img src={security.src} alt="Segurança" className="w-14" />
                        <div>
                            <h3 className="font-bold text-lg">Segurança da Informação</h3>
                            <p className="text-sm">Pentest, criptografia, políticas</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex gap-80">
                <div className="mt-16 text-white">
                    <h2 className="text-5xl font-bold text-cyan-400 mb-6">Conselhos para Iniciantes</h2>
                    <ul className="list-disc list-inside text-xl space-y-3">
                        <li><strong>Pratique com projetos reais</strong>: clone de sites, aplicativos simples</li>
                        <li><strong>Aprenda lógica de programação</strong>: é a base para qualquer linguagem</li>
                        <li><strong>Estude versionamento com Git</strong>: essencial para trabalhar em equipe</li>
                        <li><strong>Use plataformas como GitHub, DIO ou Alura</strong> para aprender e mostrar seu progresso</li>
                        <li><strong>Monte um portfólio online</strong> com seus projetos (usando React, Next.js, etc.)</li>
                    </ul>
                </div>
                <div className="text-white mt-16">
                <h2 className="text-5xl font-bold text-cyan-400 mb-6">Exemplos de projetos</h2>
                <ul className="list-disc list-inside text-xl space-y-3">
                    <li>Calculadora de IMC</li>
                    <li>Conversor de moedas</li>
                    <li>Sistema de gerenciamento de tarefas</li>
                    <li>Landing Pages (site)</li>
                </ul>
                </div>
            </div>
        </div>
    );
};
