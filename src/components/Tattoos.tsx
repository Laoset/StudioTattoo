import React from "react";
const Imagenes: string[] = [
  "https://i.pinimg.com/originals/11/6b/bc/116bbc8a04141f7092cf06cc1dc07fee.jpg",
  "https://www.fubiz.net/wp-content/uploads/2016/04/tattoosblackout-1.jpg",
  "https://i.pinimg.com/originals/7b/a1/ce/7ba1ce3cb8570b17aef67367e0abacee.jpg",
  "https://i.pinimg.com/736x/be/f1/e8/bef1e8a28d6678462528885d84a507e3.jpg",
  "https://i.pinimg.com/736x/cd/67/2d/cd672db3331f937219e5d985a8d2be3c--floral-tattoo-chest-floral-spine-tattoos.jpg",
  "https://i.pinimg.com/originals/56/9d/c3/569dc3880a98a07a836b26cd694365fc.jpg",
  "https://i.pinimg.com/originals/03/c4/88/03c48857b16ae5eb7921c8225eeb845e.jpg",
];
const Tattoos = () => {
  return (
    <>
      <section className="h-[90%] lg:full lg:w-full lg:py-28 flex justify-center align-middle items-center ">
        <div className="w-full h-full grid sm:grid-cols-2 gap-4 overflow-y-scroll px-6 lg:p-10">
          {Imagenes.map((tatuaje) => (
            <img
              key={tatuaje}
              src={tatuaje}
              alt=""
              className="w-[20rem] h-[20rem] rounded-md hover:scale-110 duration-500  opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tattoos;
