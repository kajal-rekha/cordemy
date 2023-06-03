import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Overlay from "./Overlay";

const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleStart = () => {
    if (!session) {
      router.push("/users/login");
    } else {
      router.push("/courses");
    }
  };
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
        <h1
          className="text-5xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Unlock Your Potential with Online Learning
        </h1>
        <p
          className="text-lg"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
        >
          Learn new skills and enhance your knowledge with our wide range of
          online courses.
        </p>
        <div className="mt-5  ">
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            onClick={handleStart}
            className="bg-black text-white py-3 px-6 rounded-lg  hover:bg-gray-700 duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
