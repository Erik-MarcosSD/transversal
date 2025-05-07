'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react"; // biblioteca de ícones lucide-react
import logo from "@/assets/images/fametro-logo-png_seeklogo-370472.png";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Início", "ADS", "Linguagens", "Informática", "Curiosidades"];

  return (
    <header className="bg-black/40 backdrop-blur-md fixed top-0 w-full h-[120px] z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center h-full">
        <img src={logo.src} alt="Logo Fametro" className="w-[120px] md:w-[150px]" />

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          {navItems.map((item, index) => (
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

      {open && (
        <div className="md:hidden absolute top-[120px] w-full bg-black/90 text-white text-center py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
