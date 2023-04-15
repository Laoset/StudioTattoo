import React from "react";

const Contacto = () => {
  return (
    <>
      <section className="h-[90%] lg:full lg:w-full flex flex-col gap-4 justify-center align-middle items-center px-4">
        <p className="text-lg text-justify ">
          Ubicado en{" "}
          <span className="text-white font-bold">
            {" "}
            Avellaneda, Buenos Aires.
          </span>
        </p>
        <p className="text-lg ">
          Me enorgullece poder crear obras de arte en la piel de cada uno de mis
          clientes. Contactame para programar tu próxima sesión de tatuaje.
        </p>
      </section>
    </>
  );
};

export default Contacto;
