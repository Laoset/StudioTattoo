import React from "react";

const Imagenes: string[] = [
  "https://cdn.wikimickey.com/wp-content/uploads/2022/04/id-hkjaaqwjzn4-youtube-automatic.jpg",
  "https://i.ytimg.com/vi/H1HTiSKoCqQ/maxresdefault.jpg",
  "https://papik.pro/en/uploads/posts/2022-08/1659373394_16-papik-pro-p-light-mini-pencil-drawings-18.jpg",
  "https://i.pinimg.com/originals/94/f9/49/94f9499d2b0001ea93ae4ae80ef5b571.jpg",
  "https://i.pinimg.com/originals/34/dc/eb/34dceb0c252d66bd45862353dd6e0baf.jpg",
  "https://avatars.mds.yandex.net/i?id=c5165d3fb3b5a9cc0b95da191af13bfe6d23a9a9-7662997-images-thumbs&n=13&exp=1",
  "https://i.pinimg.com/originals/27/ee/10/27ee10740adc5718f85dc9f863dc1fba.jpg",
  "https://cdn.acidcow.com/pics/20111201/pencil_art_09.jpg",
  "https://i.pinimg.com/originals/a4/3b/2c/a43b2cc6520c8e9d09a8b011239c9fdf.jpg",
  "https://i.pinimg.com/originals/28/37/87/283787ffa8014720f63dc88653dc2be0.jpg",
  "https://i.pinimg.com/736x/e1/8c/94/e18c940f8740ac5d37ff5bb3021f9da6.jpg",
  "https://i.pinimg.com/736x/a7/3e/46/a73e4634f723e2329d3a31cfdb2aa54d.jpg",
];
const Arte = () => {
  return (
    <>
      <section className="h-[90%] lg:full lg:w-full lg:py-28 flex justify-center align-middle items-center ">
        <div className="w-full h-full  grid sm:grid-cols-2 gap-4 overflow-y-scroll px-6 lg:p-10">
          {Imagenes.map((tatuaje) => (
            <img
              key={tatuaje}
              src={tatuaje}
              alt=""
              className="w-[20rem] h-[18rem] rounded-md hover:scale-110 duration-500 hover:cursor-pointer opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Arte;
