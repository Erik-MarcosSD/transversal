import bg from "@/assets/images/csdv.png";  
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import frontend from "@/assets/gif/front.gif"
  import ia from "@/assets/gif/ia.gif"
  import backend from "@/assets/gif/back.gif"
  import database from "@/assets/gif/banco_no_background.gif"
  import mobile from "@/assets/gif/mobile_no_background.gif"
  


export const SO = () => {
    return (
        <div className="mx-auto w-full h-screen flex items-center flex-col" style={{backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center"}} >
            <div className="w-full py-6 px-8 items-center" >
                <h1 className="text-3xl font-bold text-cyan-500 mb-2">
                    O que é uma Linguagem de Programação?
                </h1>
                <p className="w-230 text-xl text-white">Linguagens de programação são formas de comunicação entre humanos e computadores. Elas permitem criar sistemas, aplicativos, sites, jogos e muito mais.</p>

                <section className="mt-2 w-180 font-bold">
                    <h1 className="text-3xl font-bold text-cyan-400 mb-6">Categorias de Linguagens</h1>
                    <Accordion type="single" collapsible className="space-y-3">
                        <AccordionItem value="frontend" className="border-none">

                        <AccordionTrigger className="text-xl text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 border-none shadow-none [&>svg]:text-white">
                            <div className="flex items-center gap-4">
                                <img src={frontend.src} className="w-10 inline" /> 
                                <p>Front-end</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm text-cyan-300">
                            HTML, CSS, JavaScript, TypeScript. <br />
                            Utilizadas para construir interfaces visuais de sites e aplicações web.
                        </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="backend" className="border-none">

                         <AccordionTrigger className="text-xl text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 border-none shadow-none [&>svg]:text-white">
                            <div className="flex items-center gap-2">
                                <img src={backend.src} className="w-10 inline" />
                                <p>Backend</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm text-cyan-300">
                            Java, Python, PHP, C#, Node.js. <br />
                            Linguagens focadas na lógica de negócio, banco de dados e servidores.
                        </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="database" className="border-none">

                        <AccordionTrigger className="text-xl text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 border-none shadow-none [&>svg]:text-white">
                            <div className="flex items-center gap-2">
                                <img src={database.src} className="w-10 inline" />
                                <p>Banco de Dados</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm text-cyan-300">
                            SQL, PL/SQL, MongoDB (query language). <br />
                            Usadas para manipulação e consulta de dados.
                        </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="mobile" className="border-none">

                        <AccordionTrigger className="text-xl text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 border-none shadow-none [&>svg]:text-white">
                            <div className="flex items-center gap-2">
                                <img src={mobile.src} className="w-10 inline" />
                                <p>Mobile</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm text-cyan-300">
                            Dart (Flutter), Kotlin, Swift, Java. <br />
                            Linguagens específicas para desenvolvimento de aplicativos móveis.
                        </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="ciencia">

                        <AccordionTrigger className="text-xl text-white font-semibold hover:no-underline focus:outline-none focus:ring-0 border-none shadow-none [&>svg]:text-white">
                            <div className="flex items-center gap-4">
                                <img src={ia.src} className="w-10 inline" />
                                <p>Ciência de Dados e IA</p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-sm text-cyan-300">
                            Python, R, Julia. <br />
                            Aplicadas em análise de dados, machine learning e automações.
                        </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    );
};