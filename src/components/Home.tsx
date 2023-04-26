import React, { useState } from "react";
import Images from "./Images";
import About from "./About";
import Arte from "./Arte";
import Tattoos from "./Tattoos";
import Musica from "./Musica";
import Contacto from "./Contacto";
import {
  BsInstagram,
  BsWhatsapp,
  BsArrowRightSquareFill,
  BsArrowRightSquare,
} from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
enum Section {
  Home = "home",
  About = "about",
  Arte = "arte",
  Tattoo = "tattoo",
  Musica = "musica",
  Contacto = "contacto",
}
const sectionComponents = {
  [Section.Home]: <Images />,
  [Section.About]: <About />,
  [Section.Arte]: <Arte />,
  [Section.Tattoo]: <Tattoos />,
  [Section.Musica]: <Musica />,
  [Section.Contacto]: <Contacto />,
};
const TextSideBar = () => {
  const [section, setSection] = useState<Section>(Section.Home);
  const handlerSection = (newSection: Section) => {
    setSection(newSection);
  };
  const handleClick = () => {
    const phone = "+549111111111";
    const message = "Hola, quisiera hacerme un tatuaje";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url);
  };
  const handleClickIg = () => {
    const url = "https://www.instagram.com/";
    window.open(url);
  };
  return (
    <>
      <main className="text-white flex flex-col lg:flex-row  w-screen h-screen justify-center text-center items-center lg:gap-52">
        <section className="flex flex-col w-full h-[37%] justify-center align-middle items-center text-center gap-2 lg:text-right lg:gap-5 lg:w-2/4 lg:h-full lg:items-end ">
          <h1
            onClick={() => handlerSection(Section.Home)}
            className="text-5xl font-title mb-2 lg:m-0"
          >
            AK-CS
          </h1>
          <h1
            className="text-5xl font-title text-black"
            style={{ textShadow: "0 0 5px white" }}
          >
            Tattoo Studio
          </h1>
          <nav className="flex flex-row justify-around w-full text-lg font-semibold lg:w-auto lg:flex-col ">
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
          <button
            onClick={() => handlerSection(Section.Contacto)}
            className={`text-right text-lg font-semibold hover:text-[#E53E3E] duration-300 italic ${
              section === Section.Contacto ? "text-[#E53E3E] " : "text-white"
            }`}
          >
            Contacto
          </button>
          <aside className="flex flex-row justify-end gap-5 lg:gap-4">
            <p className="text-base flex-row flex align-middle justify-center text-center items-center gap-2 italic">
              Turnos
              <span className="text-center">
                <AiOutlineArrowRight size={20} />
              </span>
            </p>

            <BsInstagram
              size={20}
              className="cursor-pointer hover:scale-125 duration-200 "
              onClick={handleClickIg}
            />
            <BsWhatsapp
              size={20}
              onClick={handleClick}
              className="cursor-pointer hover:scale-125 duration-200"
            />
          </aside>
        </section>
        <section className="flex justify-center items-center align-middle h-[63%] w-full lg:w-2/4  lg:h-full ">
          {sectionComponents[section]}
        </section>
      </main>
    </>
  );
};

export default TextSideBar;
