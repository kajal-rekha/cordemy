import Link from "next/link";
import Button from "./Button";

const Slide = ({ image }) => {
  return (
    <div className="slide " style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts container py-10 mx-auto flex flex-col items-start justify-center h-full gap-5 text-gray-300">
        <h1 className="text-7xl text-violet-50 font-bold space-font w-full uppercase ">
          {image.headline}
        </h1>

        <p className="sm:w-full lg:w-2/3 text-sm sm:text-lg w-full">
          {image.body}
        </p>

        <Button href={image.cta} placeholder="Get Started" color="primary" />
      </div>
    </div>
  );
};

export default Slide;
