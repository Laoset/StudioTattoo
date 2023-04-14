import React, { useState } from "react";
import Images from "./Images";
import About from "./About";
import Arte from "./Arte";
import Tattoos from "./Tattoos";
import Musica from "./Musica";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
enum Section {
  Home = "home",
  About = "about",
  Arte = "arte",
  Tattoo = "tattoo",
  Musica = "musica",
}
const sectionComponents = {
  [Section.Home]: <Images />,
  [Section.About]: <About />,
  [Section.Arte]: <Arte />,
  [Section.Tattoo]: <Tattoos />,
  [Section.Musica]: <Musica />,
};
const TextSideBar = () => {
  const [section, setSection] = useState<Section>(Section.Home);
  const handlerSection = (newSection: Section) => {
    setSection(newSection);
  };
  const handleClick = () => {
    const phone = "1125593833";
    const message = "Hola, quisiera hacerme un tatuaje";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url);
  };
  return (
    <>
      <main className="text-white flex flex-row w-full h-full justify-center text-center items-center gap-52">
        <section className="flex flex-col text-right gap-5 w-2/4">
          <h1
            onClick={() => handlerSection(Section.Home)}
            className="text-5xl font-title"
          >
            Slytherin Tattoo Studio
          </h1>
          <nav className="flex flex-col text-lg ">
            <button
              onClick={() => handlerSection(Section.Tattoo)}
              className={`text-right hover:text-[#E53E3E] duration-300 italic ${
                section === Section.Tattoo ? "text-[#E53E3E] " : "text-white"
              }`}
            >
              Tattoos
            </button>
            <button
              onClick={() => handlerSection(Section.Arte)}
              className={`text-right hover:text-[#E53E3E] duration-300 italic ${
                section === Section.Arte ? "text-[#E53E3E] " : "text-white"
              }`}
            >
              Dibujos
            </button>
            <button
              onClick={() => handlerSection(Section.Musica)}
              className={`text-right hover:text-[#E53E3E] duration-300 italic ${
                section === Section.Musica ? "text-[#E53E3E] " : "text-white"
              }`}
            >
              Musica
            </button>
            <button
              onClick={() => handlerSection(Section.About)}
              className={`text-right hover:text-[#E53E3E] duration-300 italic ${
                section === Section.About ? "text-[#E53E3E] " : "text-white"
              }`}
            >
              Sobre mi
            </button>
          </nav>
          Turnos ⬇️
          <aside className="flex flex-row justify-end gap-4">
            <BsInstagram
              size={20}
              className="cursor-pointer hover:scale-125 duration-200 "
            />
            <BsWhatsapp
              size={20}
              onClick={handleClick}
              className="cursor-pointer hover:scale-125 duration-200"
            />
          </aside>
        </section>
        <section className="h-full w-2/4">{sectionComponents[section]}</section>
      </main>
    </>
  );
};

export default TextSideBar;
