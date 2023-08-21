import Hero from "@/components/Hero";
import { getAllCourses } from "@/prisma/courses";
import AboutPage from "./about";
import ContactPage from "./contact";
import CoursesPage from "./courses";
import Testimonials from "./testimonials";

const HomePage = ({ courses }) => {
  return (
    <div className="mt-20">
      <Hero />
      <CoursesPage courses={courses} />
      <AboutPage />
      <Testimonials />
      <ContactPage />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
