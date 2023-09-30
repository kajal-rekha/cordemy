import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import SectionHeader from "@/components/SectionHeader";

const martialsArtFaq = [
  {
    id: 1,
    question: "What is Cordemy?",
    answer:
      "Cordemy is an online learning platform designed to offer a diverse range of courses to learners worldwide. It provides a convenient way to access quality educational content from the comfort of your own space.",
  },
  {
    id: 2,
    question: "How do I enroll in courses on Cordemy?",
    answer:
      "Enrolling in Cordemy courses is easy. Simply create an account on the platform, browse the course catalog, and select the courses that interest you. Once enrolled, you can access the course materials and start learning.",
  },
  {
    id: 3,
    question: "Are the courses on Cordemy self-paced?",
    answer:
      "Yes, most courses on Cordemy are self-paced. This means you can learn at your own speed and complete the coursework according to your schedule.",
  },
  {
    id: 4,
    question:
      "Are there any live or interactive components to Cordemy courses?",
    answer:
      "Many courses on Cordemy offer interactive elements, such as live webinars, discussion forums, and assignments. These features encourage engagement and collaboration among learners.",
  },
  {
    id: 5,
    question: "How are instructors selected for Cordemy courses?",
    answer:
      "Instructors for Cordemy courses are carefully selected based on their expertise in the subject matter. They undergo a vetting process to ensure they can provide high-quality and engaging instruction.",
  },
  {
    id: 6,
    question: "Is there a mobile app for Cordemy?",
    answer:
      "Yes, Cordemy offers a mobile app for both iOS and Android devices. This app allows you to access your courses and learning materials on the go.",
  },
  {
    id: 7,
    question: "Can I get a certificate after completing a course on Cordemy?",
    answer:
      "Yes, upon successfully completing a course on Cordemy, you will receive a certificate of completion. This certificate can be a valuable addition to your resume or portfolio.",
  },
  {
    id: 8,
    question: "Is there a cost associated with using Cordemy?",
    answer:
      "While some courses on Cordemy may have a cost, there are also free courses available. The pricing varies depending on the complexity and depth of the course content.",
  },
  {
    id: 9,
    question: "How do I track my progress on Cordemy?",
    answer:
      "Cordemy provides a user-friendly dashboard that allows you to track your progress in each enrolled course. You can see which modules you've completed and your overall performance.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className="section-padding  mb-20 mt-28">
      <SectionHeader
        span="Faq"
        h2=" Navigating Cordemy's Innovative Online Education Landscape"
        p="Unveiling Insights About Our Unconventional Online Learning Approach - Your Questions Answered!"
      />
      <div className="wrapper grid grid-col lg:grid-cols-2 gap-20 items-center justify-center mt-14">
        <div
          className="left image w-full h-full  pt-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692694916/pexels-photo-5428830_zjuubm.webp"
            alt="faq"
            width={800}
            height={1000}
            priority
            className="w-full h-full rounded-lg"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          {martialsArtFaq.map((faq, index) => (
            <div key={faq.id} className="w-full">
              <div
                className={`faq-item flex justify-between mt-6  items-center p-3 bg-black shadow-sm shadow-white/30 rounded-md  ${
                  open === index && "text-white font-semibold"
                }`}
              >
                <h3 className="text-lg text-white/75">
                  0{faq.id + " . " + faq.question}
                </h3>
                <span
                  onClick={() => toggle(index)}
                  className="text-xl text-white cursor-pointer"
                >
                  <AiOutlinePlus />
                </span>
              </div>
              {open === index && (
                <div className="shadow-sm shadow-white rounded-md  p-3 mt-2 bg-black">
                  <p className="text-white/75">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
