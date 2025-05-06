import bgPrincipal from "@/assets/images/2139786-1920x1080-desktop-full-hd-high-tech-wallpaper.jpg"
export const Inicial = () => {
    return (
        <div className="flex items-center"  >
            <img src={bgPrincipal.src} className="w-full h-screen" alt=""  />

            <h1 className="w-100 text-cyan-500 font-bold text-6xl absolute bottom-1/3 left-1/12">Análise	e Desenvolvimento de Sistemas</h1>
        </div>
    );
};