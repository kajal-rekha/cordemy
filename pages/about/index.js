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
            src="https://f.hubspotusercontent10.net/hubfs/6448316/are-free-online-courses-worth-it.jpg"
            alt=""
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>

      <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt=""
            className="w-24 h-20 mx-auto mb-6 rounded-sm"
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
            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt=""
            className="w-24 h-20 mx-auto mb-6 rounded-sm"
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
            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt=""
            className="w-24 h-20 mx-auto mb-6 rounded-sm"
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
