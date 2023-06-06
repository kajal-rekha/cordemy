import Image from "next/image";

import { ImQuotesLeft } from "react-icons/im";

const Slider = ({ slide }) => {
  return (
    <div className="slide py-10">
      <div className=" slide-wrapper max-w-screen-md mx-auto">
        <div>
          <h2 className="text-3xl  font-semibold space-font  uppercase">
            <ImQuotesLeft />
            {slide.title}
          </h2>
          <p>{slide.description}</p>
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
            <p>{slide.name}</p>
            <p>{slide.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
