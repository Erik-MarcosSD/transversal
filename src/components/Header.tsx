import logo from "@/assets/images/fametro-logo-png_seeklogo-370472.png";

export const Header = () => {
    return (
        <header className="bg-black/40 backdrop-blur-md fixed top-0 w-full h-[120px] z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex gap-20 justify-center items-center h-full">
                <img src={logo.src} alt="Logo Fametro" className="w-[150px]" />
                <ul className="flex gap-8 text-white text-lg font-medium">
                    {["Início", "ADS", "Linguagens", "Informática", "Curiosidades"].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
