import security from "@/assets/gif/seguranca.gif";
import dev from "@/assets/gif/dev.gif";
import radar from "@/assets/gif/radar.gif";
import bg from "@/assets/images/icone-de-codigo-de-programacao-abstrato-em-uma-tela-de-laptop-em-azul-claro-em-estilo-futurista-de-b.png";  


export const Ads = () => {
    return (
        <div className="mx-auto h-screen" style={{backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center"}} >
            <div className="p-16" >
                <p className="w-150 text-2xl leading-snug text-white">O curso de Análise e Desenvolvimento de Sistemas prepara os alunos para projetar, desenvolver e implementar soluções de software eficazes para uma variedade de contextos industriais e organizacionais.</p>
                <div className="mt-5 text-2xl text-black">
                    <h2 className="w-130 font-bold text-cyan-500 text-5xl my-6">O que faz um Analista de Sistemas?</h2>
                    <ul className="flex gap-2 text-sm font-bold">
                        <li className="bg-gray-200 p-2 rounded-md w-50 my-4 flex items-center gap-1">
                            <img className="w-10 inline" src={dev.src} alt="" /> 
                            <p>Desenvolvimento de Aplicações</p>
                        </li>
                        <li className="bg-gray-200 p-2 rounded-md w-50 my-4 flex items-center gap-1">
                            <img className="w-10 inline" src={security.src} alt="" /> 
                            <p>Segurança de Sistemas</p>
                        </li>
                        <li className="bg-gray-200 p-2 rounded-md w-50 my-4 flex items-center gap-1">
                            <img className="w-10 inline" src={radar.src} alt="" /> 
                            <p>Integração de Sistemas</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};