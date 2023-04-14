import React, { useState, useRef, useEffect } from "react";
import musicona from "./ajc.mp3";
import "../App.css";

import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
const Musica = () => {
  //Estados de controles musicales
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //ref
  const audioPlayer = useRef<HTMLAudioElement>(null); // referencia al audio
  const progressBar = useRef<HTMLInputElement>(null); // referencia al input de progreso
  const animationProgress = useRef<number>(0); //referencia al movimiento del input

  //handlers
  const changePlay = () => {
    const valor = play;
    setPlay(!valor);
    if (audioPlayer.current) {
      if (!valor) {
        audioPlayer.current.play();
        animationProgress.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationProgress.current);
      }
    }
  };
  const calculadoradeduration = (seg: number) => {
    const minutos = Math.floor(seg / 60);
    const minutosfinales = minutos < 10 ? `0${minutos}` : `${minutos}`;
    const segunditos = Math.floor(seg % 60);
    const segundosFinales =
      segunditos < 10 ? `0${segunditos}` : `${segunditos}`;
    return `${minutosfinales} : ${segundosFinales}`;
  };
  const handlerProgressBar = () => {
    audioPlayer.current!.currentTime = progressBar.current!.valueAsNumber;
  };
  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      const currentValue = audioPlayer.current?.currentTime?.toString();
      progressBar.current.value = currentValue;
      setCurrentTime(Number(currentValue));
      animationProgress.current = requestAnimationFrame(whilePlaying);
    }
  };
  const handlerLeft = () => {
    if (progressBar.current) {
      const newValue = Number(progressBar.current.value) - 30;
      progressBar.current.value = newValue.toString();
      handlerProgressBar();
    }
  };
  const handlerRight = () => {
    if (progressBar.current) {
      const newValue = Number(progressBar.current.value) + 30;
      progressBar.current.value = newValue.toString();
      handlerProgressBar();
    }
  };
  //Efectos
  useEffect(() => {
    if (audioPlayer.current) {
      // Asigna el elemento de audio a la referencia
      const audioElement = document.querySelector("audio");
      audioPlayer.current = audioElement as HTMLAudioElement;
    }
  }, []);
  useEffect(() => {
    const segundosTo = Math.floor(audioPlayer.current!.duration);
    setDuration(segundosTo);
    progressBar.current?.setAttribute("max", segundosTo.toString());
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  return (
    <>
      <section className="h-full w-full flex justify-center items-center ">
        <section
          className={`bg-[#1e293bb3] border-2 border-solid border-[#ffffff29]  h-[33.5rem] w-[20rem] rounded-lg flex flex-col items-center `}
        >
          <a
            href="https://www.youtube.com/watch?v=00Nevzwc0oE"
            target="_blank"
            className="flex justify-center mt-2"
          >
            <AiFillYoutube size={30} />
          </a>
          <div className="flex flex-col justify-center items-center p-8 gap-2">
            <img
              src="https://metal.academy/uploads/releases/1f1fa5bc25dac3af52c83f917bb02ee1.jpg"
              className=""
            />
            <audio src={musicona} preload="metadata" ref={audioPlayer}></audio>
            <div className="flex flex-col justify-center items-center gap-3">
              <div>
                <h1 className="font-bold text-xl">Hermetica</h1>
                <h2 className="text-md text-[#c7cfdd]">Del camionero</h2>
              </div>
              <div className="flex flex-row gap-2">
                <div className={`${play ? "text-[#7DD3FC] opacity-70" : ""}`}>
                  {calculadoradeduration(currentTime)}
                </div>
                <div className="flex justify-center align-middle text-center items-center">
                  <input
                    type="range"
                    defaultValue={0}
                    ref={progressBar}
                    onChange={handlerProgressBar}
                  />
                </div>
                <div>{duration && calculadoradeduration(duration)}</div>
              </div>
              <div className="flex flex-row mb-2">
                <button className="text-4xl =" onClick={handlerLeft}>
                  <BsArrowLeftShort />
                </button>
                <button onClick={changePlay} className="text-5xl ">
                  {play ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                </button>
                <button className="text-4xl " onClick={handlerRight}>
                  <BsArrowRightShort />
                </button>
              </div>
              <div className="h-4">
                {play && (
                  <div className="audio-bars">
                    <div className="bar" />
                    <div className="bar2" />
                    <div className="bar3" />
                    <div className="bar4" />
                    <div className="bar5" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Musica;
