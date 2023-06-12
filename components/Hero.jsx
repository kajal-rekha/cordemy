//import Button from "./Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleStart = () => {
    if (session) {
      router.push(`/courses`);
    } else {
      router.push(`/users/login?destination=/courses`);
    }
  };
  return (
    <div className="wrapper py-10 mt-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
        <div className="hero-left">
          <div>
            <h1
              className="text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Discover your potential with our course
            </h1>
          </div>
          <div
            className="mt-20"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <p className="text-lg text-gray-700">
              Learn new skills and enhance your knowledge with our wide range of
              online courses.
            </p>

            <button
              onClick={handleStart}
              className="bg-black text-white py-3 px-6 rounded-lg mt-5 hover:bg-gray-700 duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="hero-right ">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1686412417/istockphoto-1329079924-612x612_wiejee.jpg"
            alt="image"
            width={500}
            height={500}
            className="w-full h-full rounded-lg"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
