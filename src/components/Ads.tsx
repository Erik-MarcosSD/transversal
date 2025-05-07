import security from "@/assets/gif/seguranca.gif";
import dev from "@/assets/gif/dev.gif";
import radar from "@/assets/gif/radar.gif";
import bg from "@/assets/images/icone-de-codigo-de-programacao-abstrato-em-uma-tela-de-laptop-em-azul-claro-em-estilo-futurista-de-b.png";

export const Ads = () => {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className="p-6 sm:p-10 md:p-16 flex flex-col items-center text-center">
                <p className="max-w-4xl text-xl sm:text-2xl leading-snug text-white">
                    O curso de Análise e Desenvolvimento de Sistemas prepara os alunos para projetar, desenvolver e implementar soluções de software eficazes para uma variedade de contextos industriais e organizacionais.
                </p>

                <div className="mt-10 w-full">
                    <h2 className="text-cyan-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        O que faz um Analista de Sistemas?
                    </h2>

                    <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-sm font-bold">
                        <li className="bg-gray-200 p-4 rounded-md w-72 flex items-center gap-3">
                            <img className="w-10" src={dev.src} alt="Dev" />
                            <p>Desenvolvimento de Aplicações</p>
                        </li>
                        <li className="bg-gray-200 p-4 rounded-md w-72 flex items-center gap-3">
                            <img className="w-10" src={security.src} alt="Segurança" />
                            <p>Segurança de Sistemas</p>
                        </li>
                        <li className="bg-gray-200 p-4 rounded-md w-72 flex items-center gap-3">
                            <img className="w-10" src={radar.src} alt="Integração" />
                            <p>Integração de Sistemas</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};