import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="about wrapper py-12 mt-20">
      <div className="text-center mb-7">
        <SectionHeader
          span="About"
          h2="Cordemy's Distinctive Online Learning Approach"
          p="Exploring Education's Evolution, Embracing the Digital Frontier Through Online Learning's Transformative Journey."
        />
      </div>
      <div className="grid grid-cols md:grid-cols-[50%_auto] gap-14 mt-20">
        <div className="">
          <p
            className="text-lg mb-3 text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Cordemy is an online learning platform that offers a wide range of
            courses in various fields, including Business, Technology, Creative,
            and Lifestyle. Our mission is to provide high-quality education that
            is accessible to everyone, regardless of their location or financial
            situation. We believe that learning should be fun, engaging, and
            relevant to real-life situations.
          </p>
          <p
            className="text-lg text-gray-600 mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {`At Cordemy, we are committed to helping students achieve their goals
            and reach their full potential. Our team of experienced instructors
            is dedicated to creating courses that are up-to-date, practical, and
            designed to meet the needs of today's job market.`}
          </p>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {` Overall, Cordemy is a reliable and accessible platform that offers
            high-quality education to people from all walks of life. It is an
            excellent choice for anyone who wants to acquire new skills, expand
            their knowledge, and achieve their personal and professional goals.`}
          </p>
        </div>
        <div
          className="w-full h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1696094896/360_F_460513754_lpPwyGAx8xCG3iznAZlNkET5C2V3hRef_wqiovz.jpg"
            alt="about image"
            height={650}
            width={650}
            priority
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>
      <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683927749/pexels-anna-shvets-5325054_qss8by.jpg"
            alt=""
            className="w-28 h-20 mb-6 rounded-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
            height={500}
            width={500}
          />
          <h3
            className="text-xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Accessible
          </h3>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {`We believe that everyone should have access to high-quality
            education, regardless of their location or financial situation.
            That's why we offer courses at an affordable price and make them
            accessible on any device.`}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683927737/pexels-erik-mclean-6284359_tjrmn0.jpg"
            alt=""
            className="w-28 h-20  mb-6 rounded-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
            height={500}
            width={500}
          />
          <h3 className="text-xl font-bold mb-4" data-aos="fade-up">
            Engaging
          </h3>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {`We understand that learning can be challenging and boring at times.
            That's why we strive to make our courses fun, engaging, and
            interactive. We use a variety of teaching methods, such as videos,
            quizzes, and projects, to keep students engaged and motivated.`}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683928185/pexels-nataliya-vaitkevich-5186379_mm5y2j.jpg"
            alt="images"
            className="w-28 h-20 mb-6 rounded-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
            height={500}
            width={500}
          />
          <h3 className="text-xl font-bold mb-4" data-aos="fade-up">
            Practical
          </h3>
          <p
            className="text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {` We believe that education should be relevant to real-life
            situations. That's why we focus on creating courses that are
            up-to-date and practical. Our courses are designed to help students
            acquire the skills and knowledge they need to succeed in today's job
            market.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
