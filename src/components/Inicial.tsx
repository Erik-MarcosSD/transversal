import bgPrincipal from "@/assets/images/2139786-1920x1080-desktop-full-hd-high-tech-wallpaper.jpg";
import 'animate.css';

export const Inicial = () => {
    return (
        <div className="relative w-full h-screen">
            <img
                src={bgPrincipal.src}
                className="w-full h-full object-cover"
                alt="Fundo principal"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-4 sm:px-8">
                <h1 className="animate__animated animate__bounceIn text-cyan-500 font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl max-w-[90%] sm:max-w-[80%] leading-tight">
                    Análise e Desenvolvimento de Sistemas
                </h1>
            </div>
        </div>
    );
};
