import Link from "next/link";
import Button from "./Button";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <div className=" min-h-screen">
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dh0ado2ir/image/upload/v1685735397/pexels-george-milton-7014337_1_zb8w1x.jpg")`,
        }}
        className="w-full h-[32rem] bg-no-repeat bg-cover bg-center"
      />
      <Overlay />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[2] space-y-5">
        <h1 className="text-5xl font-semibold">
          Unlock Your Potential with Online Learning
        </h1>
        <p className="text-lg">
          Learn new skills and enhance your knowledge with our wide range of
          online courses.
        </p>
        <div className="mt-5  ">
          <Link
            href="/users/login"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-700 duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
