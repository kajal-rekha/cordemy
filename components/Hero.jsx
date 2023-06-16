// //import Button from "./Button";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// const Hero = () => {
//   const { data: session } = useSession();
//   const router = useRouter();

//   const handleStart = () => {
//     if (session) {
//       router.push(`/courses`);
//     } else {
//       router.push(`/users/login?destination=/courses`);
//     }
//   };
//   return (
//     <div className="wrapper py-10 mt-20 ">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
//         <div className="hero-left">
//           <div>
//             <h1
//               className="text-5xl lg:text-6xl"
//               data-aos="fade-up"
//               data-aos-delay="300"
//               data-aos-duration="500"
//             >
//               Discover your potential with our course
//             </h1>
//           </div>
//           <div
//             className="mt-20"
//             data-aos="fade-up"
//             data-aos-delay="700"
//             data-aos-duration="1000"
//           >
//             <p className="text-lg text-gray-700">
//               Learn new skills and enhance your knowledge with our wide range of
//               online courses.
//             </p>

//             <button
//               onClick={handleStart}
//               className="bg-black text-white py-3 px-6 rounded-lg mt-5 hover:bg-gray-700 duration-300"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//         <div className="hero-right ">
//           <Image
//             src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1686412417/istockphoto-1329079924-612x612_wiejee.jpg"
//             alt="image"
//             width={500}
//             height={500}
//             className="w-full h-full rounded-lg"
//             data-aos="fade-up"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Slide from "./Slide";
const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1686952564/Vanderbilt_7-800x412_pcvycr.png",
    headline: "Web Development Course",
    body: "Learn the fundamentals of web development and build your first website from scratch. Dive into HTML, CSS, and JavaScript to create responsive and interactive web pages. Gain practical experience through hands-on projects and start your journey as a web developer.",
    cta: "Get Started",
  },

  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1686947103/pexels-photo-8761047_dchdnc.webp",
    headline: "Mastering Graphic Design",
    body: "Unlock your creative potential and master the principles of graphic design. Learn industry-standard tools like Adobe Photoshop and Illustrator to create stunning visuals for print and digital media.",
    cta: "Get Started",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1686952937/1588860283phpzEhoJ5_vjaeno.jpg",
    headline: "Beauty and Fashion Essentials",
    body: "Discover the art of beauty and fashion. From makeup techniques to styling tips, learn how to enhance your personal style and gain the skills to pursue a career in the glamorous world of beauty and fashion.",
    cta: "Get Started",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1686953498/Executive_Education_Online_Programmes_tnswod.jpg",
    headline: "SEO Mastery Course",
    body: "Unleash the power of search engine optimization (SEO) to boost your website's visibility and drive organic traffic. Learn keyword research, on-page optimization, link building strategies, and SEO best practices.",
    cta: "Get Started",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685733810/pexels-karolina-grabowska-4467735_nnbxkg.jpg",
    headline: "Mobile App Development",
    body: "Create cross-platform mobile apps using React Native framework. Build mobile applications for iOS and Android using JavaScript and reusable UI components.",
    cta: "Get Started",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>

      <div className="btns absolute w-screen justify-center bottom-20 m-auto  z-[1] text-white text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-gray-900 text-violet-200 border border-violet-200 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn  w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-gray-900 text-violet-200 border border-violet-200 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
