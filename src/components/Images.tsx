import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";

const Images = () => {
  const Imagenes: string[] = [
    "https://www.fubiz.net/wp-content/uploads/2016/04/tattoosblackout-1.jpg",
    "https://i.pinimg.com/736x/be/f1/e8/bef1e8a28d6678462528885d84a507e3.jpg",
    "https://i.pinimg.com/originals/56/9d/c3/569dc3880a98a07a836b26cd694365fc.jpg",
  ];
  return (
    <>
      <section className="h-[90%] lg:full lg:w-3/4 lg:py-28 ">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
          direction={"vertical"}
          modules={[Autoplay]}
        >
          {Imagenes.map((imagen) => (
            <SwiperSlide key={imagen}>
              <img src={imagen} alt="" className="h-full w-full rounded-md" />
            </SwiperSlide>
          ))}
          1
        </Swiper>
      </section>
    </>
  );
};

export default Images;
