import Testimonial from "@/components/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    id: 1,
    title: "Highly Recommend the Mastering Graphic Design Course",
    description:
      "I recently completed the Mastering Graphic Design course, and it exceeded my expectations. The course material was comprehensive and well-structured, covering all aspects of graphic design.  This course has significantly enhanced my graphic design abilities, and I highly recommend it to aspiring designers.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632895/images_2_q2buyu.jpg",
    name: "Alexandra Adams",
    designation: "Graphic Designer",
  },
  {
    id: 2,
    title: "A Great Starting Point for Web Development Beginners",
    description:
      "If you're new to web development, the Web Development for Beginners course is an excellent starting point. The instructors explained the concepts thoroughly and provided hands-on exercises to practice. I highly recommend this course to anyone starting their journey in web development.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692616381/gu74mti9kop9epuaknpg_k9904x.webp",
    name: "Mark Johnson",
    designation: "Web Developer",
  },
  {
    id: 3,
    title: "Mobile App Development Course - Highly Informative",
    description:
      "The Mobile App Development course was highly informative and well-structured. The course provided practical examples and step-by-step guidance, allowing me to build my first mobile app. This course helped me understand the intricacies of app development, and I now feel confident in pursuing my own app projects.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692633446/natallia-savitskaya.256x256_l3noky.jpg",
    name: "Sophia Martinez",
    designation: "Mobile App Developer",
  },
  {
    id: 4,
    title: "Transformative Creative Writing Workshop",
    description:
      "The Creative Writing Workshop was a transformative experience for me. The course covered various writing techniques. The instructors created a supportive and engaging environment that encouraged creativity. This workshop has ignited my passion for writing, and I'm grateful for the knowledge and inspiration I gained.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632979/628476c2c0bfda02a9e30970_flmajb.jpg",
    name: "Oliver Thompson",
    designation: "Writer",
  },
  {
    id: 5,
    title: "Financial Planning Course - A Must-Take Course",
    description:
      "The Financial Planning for Beginners course was a game-changer for me. The course covered essential financial concepts, budgeting strategies, and investment planning. The instructors explained complex financial topics in a simple and understandable way. This course is a must-take for anyone looking to improve their financial literacy.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632886/Robyn_olsson_agtygm.jpg",
    name: "Emily Davis",
    designation: "Financial Analyst",
  },
  {
    id: 6,
    title: "SEO Mastery Course - Highly Effective for Beginners",
    description:
      "The SEO Mastery Course for Beginners is an exceptional resource for gaining a comprehensive understanding of search engine optimization.this course equips learners with the essential skills needed for successful online visibility. I wholeheartedly endorse this course as a must-have for aspiring SEO enthusiasts.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632877/milesjennings.jpeg.256x256_q100_crop-smart_n1rbtv.jpg",
    name: "Michael Brown",
    designation: "Digital Marketer",
  },
  {
    id: 7,
    title: "Spoken English Mastery - Perfect for Beginners",
    description:
      "The Spoken English Mastery course is perfect for beginners looking to improve their English language skills. The course covered grammar rules, vocabulary building, and conversation practice. Through this course, I gained confidence in speaking English fluently and effectively. ",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632926/alena-peseckaya.256x256_hju4wu.jpg",
    name: "Isabella Lee",
    designation: "Language Enthusiast",
  },
  {
    id: 8,
    title: "Beauty and Fashion Essentials - A Comprehensive Course",
    description:
      "The Beauty and Fashion Essentials course exceeded my expectations. I learned practical tips and tricks that have enhanced my personal style and grooming routines. Whether you're a beauty enthusiast or aspiring professional, this course is a must for gaining a comprehensive understanding of beauty and fashion.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632909/62eccc190e99ef79c3da8120_pixelida-portrait_xtrrig.png",
    name: "Sophie Wilson",
    designation: "Fashion Blogger",
  },
  {
    id: 9,
    title: " Artificial Intelligence - A Fascinating Course",
    description:
      "The Introduction to Artificial Intelligence course was absolutely fascinating. The course provided a comprehensive overview of AI concepts, Through practical exercises and projects, I gained hands-on experience in AI development. This course sparked my interest in the field of AI and motivated me to further explore its applications.",
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1692632918/1649989686682_wh8aff.jpg",
    name: "Daniel Moore",
    designation: "AI Enthusiast",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  return (
    <div className=" wrapper mt-28 min-h-screen">
      <div className="text-center">
        <SectionHeader
          span="Testimonials"
          h2="Hear What Our Students Have to Say!"
          p="Voices of Transformation: How the Digital Frontier and Online Learning Shape Educational Journeys _  Testimonials."
        />
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
