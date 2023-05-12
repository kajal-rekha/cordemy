const AboutPage = () => {
  return (
    <div className="about container mx-auto py-12">
      <h2 className="text-center text-4xl mb-10">About Cordemy</h2>
      <div className="flex flex-col lg:flex-row gap-14 mt-20">
        <div className="lg:w-1/2">
          <p className="text-lg mb-3 text-gray-600">
            Cordemy is an online learning platform that offers a wide range of
            courses in various fields, including Business, Technology, Creative,
            and Lifestyle. Our mission is to provide high-quality education that
            is accessible to everyone, regardless of their location or financial
            situation. We believe that learning should be fun, engaging, and
            relevant to real-life situations.
          </p>{" "}
          <p className="text-lg text-gray-600 mb-3">
            At Cordemy, we are committed to helping students achieve their goals
            and reach their full potential. Our team of experienced instructors
            is dedicated to creating courses that are up-to-date, practical, and
            designed to meet the needs of today's job market.{" "}
          </p>
          <p className="text-lg text-gray-600">
            Overall, Cordemy is a reliable and accessible platform that offers
            high-quality education to people from all walks of life. It is an
            excellent choice for anyone who wants to acquire new skills, expand
            their knowledge, and achieve their personal and professional goals.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683927759/pexels-george-milton-7014337_n8947x.jpg"
            alt="about image"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>

      <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683927749/pexels-anna-shvets-5325054_qss8by.jpg"
            alt=""
            className="w-28 h-20 mx-auto mb-6 rounded-sm"
          />
          <h3 className="text-xl font-bold mb-4">Accessible</h3>
          <p className="text-lg text-gray-600">
            We believe that everyone should have access to high-quality
            education, regardless of their location or financial situation.
            That's why we offer courses at an affordable price and make them
            accessible on any device.{" "}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683927737/pexels-erik-mclean-6284359_tjrmn0.jpg"
            alt=""
            className="w-28 h-20 mx-auto mb-6 rounded-sm"
          />
          <h3 className="text-xl font-bold mb-4">Engaging</h3>
          <p className="text-lg text-gray-600">
            We understand that learning can be challenging and boring at times.
            That's why we strive to make our courses fun, engaging, and
            interactive. We use a variety of teaching methods, such as videos,
            quizzes, and projects, to keep students engaged and motivated.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683928185/pexels-nataliya-vaitkevich-5186379_mm5y2j.jpg"
            alt=""
            className="w-28 h-20 mx-auto mb-6 rounded-sm"
          />
          <h3 className="text-xl font-bold mb-4">Practical</h3>
          <p className="text-lg text-gray-600">
            We believe that education should be relevant to real-life
            situations. That's why we focus on creating courses that are
            up-to-date and practical. Our courses are designed to help students
            acquire the skills and knowledge they need to succeed in today's job
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
