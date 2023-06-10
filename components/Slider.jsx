import Image from "next/image";

import { ImQuotesLeft } from "react-icons/im";

const Slider = ({ slide }) => {
  return (
    <div className="slide py-10 mt-10 ">
      <div className="max-w-screen-md mx-auto">
        <div className="">
          <ImQuotesLeft className="text-3xl ml-[-2rem]" />
          <h2 className="text-2xl  font-semibold space-font  uppercase">
            {slide.title}
          </h2>
          <p className="text-gray-700 text-lg mt-5">{slide.description}</p>
        </div>

        <div className="flex gap-5 mt-10">
          <Image
            src={slide.src}
            alt="images"
            width={500}
            height={500}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="text-black text-lg font-bold">{slide.name}</p>
            <p className="text-gray-700 font-semibold">{slide.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
