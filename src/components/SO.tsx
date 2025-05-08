'use client';

import bg from "@/assets/images/csdv.png";  
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import frontend from "@/assets/gif/front.gif";
import ia from "@/assets/gif/ia.gif";
import backend from "@/assets/gif/back.gif";
import database from "@/assets/gif/banco_no_background.gif";
import mobile from "@/assets/gif/mobile_no_background.gif";
import python from "@/assets/images/pitao.png";
import java from "@/assets/images/java.png";
import js from "@/assets/images/js.png";
import estrela from "@/assets/gif/estrela.gif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const SO = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    })
    return (
        <div
            className="w-full flex flex-col lg:flex-row items-center justify-around py-10 gap-10"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Lado esquerdo - texto + accordion */}
            <div className="px-4 sm:px-8 max-w-xl">
                <h1 data-aos="flip-down" className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2">
                    O que é uma Linguagem de Programação?
                </h1>
                <p data-aos="zoom-in" className="text-base sm:text-xl text-white mb-6">
                    Linguagens de programação são formas de comunicação entre humanos e computadores. Elas permitem criar sistemas, aplicativos, sites, jogos e muito mais.
                </p>

                <section>
                    <h1 data-aos="fade-right" className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">
                        Categorias de Linguagens
                    </h1>
                    <Accordion type="single" collapsible className="space-y-3">
                        {[
                            { label: "Front-end", icon: frontend, desc: "HTML, CSS, JavaScript, TypeScript. Utilizadas para construir interfaces visuais de sites e aplicações web." },
                            { label: "Backend", icon: backend, desc: "Java, Python, PHP, C#, Node.js. Linguagens focadas na lógica de negócio, banco de dados e servidores." },
                            { label: "Banco de Dados", icon: database, desc: "SQL, PL/SQL, MongoDB. Usadas para manipulação e consulta de dados." },
                            { label: "Mobile", icon: mobile, desc: "Dart (Flutter), Kotlin, Swift, Java. Linguagens para desenvolvimento de aplicativos móveis." },
                            { label: "Ciência de Dados e IA", icon: ia, desc: "Python, R, Julia. Aplicadas em análise de dados, machine learning e automações." },
                        ].map((item, i) => (
                            <AccordionItem data-aos="fade-up" key={i} value={item.label.toLowerCase()} className="border-none">
                                <AccordionTrigger className="text-base sm:text-lg text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 shadow-none [&>svg]:text-white">
                                    <div className="flex items-center gap-3">
                                        <img src={item.icon.src} className="w-8 sm:w-10" alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-cyan-300">
                                    {item.desc}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>

            {/* Lado direito - Swiper */}
            <section className="w-full max-w-md px-4 overflow-hidden">
            <h1 className="text-cyan-400 text-center font-bold text-2xl sm:text-3xl py-4">
                    Recomendação de Linguagens
                </h1>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {[
                        {
                            name: "Python",
                            stars: 5,
                            img: python,
                            uso: "IA, automações, machine learning",
                        },
                        {
                            name: "Java",
                            stars: 3,
                            img: java,
                            uso: "Backend, mobile, sistemas corporativos",
                        },
                        {
                            name: "JavaScript",
                            stars: 4,
                            img: js,
                            uso: "Web, front-end, back-end com Node",
                        },
                    ].map((lang, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white flex flex-col items-center justify-center text-center py-6 px-4 rounded-4xl">
                                <h2 className="text-cyan-400 font-bold text-2xl mb-2">{lang.name}</h2>
                                <img className="w-20 mb-3" src={lang.img.src} alt={lang.name} />
                                <h3 className="text-cyan-400 font-bold text-xl mb-1">Facilidade</h3>
                                <div className="flex justify-center gap-2 mb-3">
                                    {[...Array(lang.stars)].map((_, i) => (
                                        <img key={i} className="h-6 sm:h-8" src={estrela.src} alt="estrela" />
                                    ))}
                                </div>
                                <h3 className="text-cyan-400 font-bold text-xl mb-1">Onde usar?</h3>
                                <p className="font-bold text-sm sm:text-base">{lang.uso}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};
