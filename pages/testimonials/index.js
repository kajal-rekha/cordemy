import Slider from "@/components/Slider";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Highly Recommend the Mastering Graphic Design Course",
    description:
      "I recently completed the Mastering Graphic Design course, and it exceeded my expectations. The course material was comprehensive and well-structured, covering all aspects of graphic design. The instructors were experienced professionals who provided valuable insights and feedback. I learned essential design principles, software techniques, and gained practical design skills. This course has significantly enhanced my graphic design abilities, and I highly recommend it to aspiring designers.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879831/pexels-photo-3978587_jm1nfu.jpg",
    name: "Alexandra Adams",
    designation: "Graphic Designer",
  },
  {
    id: 2,
    title: "A Great Starting Point for Web Development Beginners",
    description:
      "If you're new to web development, the Web Development for Beginners course is an excellent starting point. The course provided a clear and comprehensive introduction to HTML, CSS, and JavaScript. The instructors explained the concepts thoroughly and provided hands-on exercises to practice. By the end of the course, I was able to build basic web pages and had a solid foundation in web development. I highly recommend this course to anyone starting their journey in web development.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879812/pexels-photo-3778603_ockvwq.webp",
    name: "Mark Johnson",
    designation: "Web Developer",
  },
  {
    id: 3,
    title: "Mobile App Development Course - Highly Informative",
    description:
      "The Mobile App Development course was highly informative and well-structured. The instructors covered various aspects of mobile app development, including UI/UX design, programming languages, and app deployment. The course provided practical examples and step-by-step guidance, allowing me to build my first mobile app. This course helped me understand the intricacies of app development, and I now feel confident in pursuing my own app projects.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879803/pexels-photo-3775087_txaecv.jpg",
    name: "Sophia Martinez",
    designation: "Mobile App Developer",
  },
  {
    id: 4,
    title: "Transformative Creative Writing Workshop",
    description:
      "The Creative Writing Workshop was a transformative experience for me. The course covered various writing techniques, storytelling elements, and provided valuable feedback on my writing. The instructors created a supportive and engaging environment that encouraged creativity. I learned how to craft compelling narratives and develop my unique writing style. This workshop has ignited my passion for writing, and I'm grateful for the knowledge and inspiration I gained.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879794/pexels-photo-3783435_ukbgsu.jpg",
    name: "Oliver Thompson",
    designation: "Writer",
  },
  {
    id: 5,
    title: "Financial Planning for Beginners - A Must-Take Course",
    description:
      "The Financial Planning for Beginners course was a game-changer for me. The course covered essential financial concepts, budgeting strategies, and investment planning. The instructors explained complex financial topics in a simple and understandable way. I now have a solid understanding of personal finance and feel confident in managing my finances effectively. This course is a must-take for anyone looking to improve their financial literacy.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879785/pexels-photo-5669603_rg5yz2.webp",
    name: "Emily Davis",
    designation: "Financial Analyst",
  },
  {
    id: 6,
    title: "SEO Mastery Course - Highly Effective for Beginners",
    description:
      "The SEO Mastery Course for Beginners is highly effective in understanding search engine optimization. The course coversvarious SEO techniques, keyword research, on-page optimization, and link building strategies. The instructors provided practical examples and case studies to illustrate the concepts effectively. By implementing the strategies learned in this course, I saw a significant improvement in my website's search engine rankings. If you're a beginner looking to boost your website's visibility, I highly recommend this course.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879774/digital_marketing_manager_q_a-jpg_vyxicn.jpg",
    name: "Michael Brown",
    designation: "Digital Marketer",
  },
  {
    id: 7,
    title: "Spoken English Mastery - Perfect for Beginners",
    description:
      "The Spoken English Mastery course is perfect for beginners looking to improve their English language skills. The course covered grammar rules, vocabulary building, and conversation practice. The instructors provided valuable feedback and encouraged active participation. Through this course, I gained confidence in speaking English fluently and effectively. I'm grateful for this course as it has opened up new opportunities for personal and professional growth.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879764/1588786981212_au6cta.jpg",
    name: "Isabella Lee",
    designation: "Language Enthusiast",
  },
  {
    id: 8,
    title: "Beauty and Fashion Essentials - A Comprehensive Course",
    description:
      "The Beauty and Fashion Essentials course exceeded my expectations. The course covered a wide range of topics, including skincare, makeup techniques, and fashion styling. The instructors provided step-by-step tutorials and shared valuable industry insights. I learned practical tips and tricks that have enhanced my personal style and grooming routines. Whether you're a beauty enthusiast or aspiring professional, this course is a must for gaining a comprehensive understanding of beauty and fashion.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879753/lauren-brown-hair-horizjpeg_yksutd.jpg",
    name: "Sophie Wilson",
    designation: "Fashion Blogger",
  },
  {
    id: 9,
    title: "Introduction to Artificial Intelligence - A Fascinating Course",
    description:
      "The Introduction to Artificial Intelligence course was absolutely fascinating. The course provided a comprehensive overview of AI concepts, including machine learning, neural networks, and natural language processing. The instructors explained complex topics in a simplified manner, making it accessible to beginners. Through practical exercises and projects, I gained hands-on experience in AI development. This course sparked my interest in the field of AI and motivated me to further explore its applications.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1685879739/1169740_bqntds.jpg",
    name: "Daniel Moore",
    designation: "AI Enthusiast",
  },
];
const TestimonialsPage = () => {
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
    <div className="frame wrapper py-10  min-h-screen">
      <div className="text-center">
        {" "}
        <h2 className="text-3xl uppercase font-bold">Testimonials</h2>
        <p className="text-lg text-gray-700">
          {`Here's what people are saying about cordemy `}{" "}
        </p>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((slide) => (
          <Slider key={slide.id} slide={slide} />
        ))}
      </div>

      <div className="btns absolute w-screen justify-between bottom-28 z-[1]  text-3xl flex">
        <button
          onClick={prevSlide}
          className="prev-btn w-14 h-12 lg:h-14 lg:w-20 flex justify-between  text-black"
        >
          <span>
            <IoIosArrowBack />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn mr-8 w-14 h-12 lg:h-14 lg:w-20 flex justify-between text-black"
        >
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;
