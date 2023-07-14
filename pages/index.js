import Hero from "@/components/Hero";
import { getAllCourses } from "@/prisma/courses";
import CoursesPage from "./courses";
import TestimonialsPage from "./testimonials";

const HomePage = ({ courses }) => {
  return (
    <div className="mt-20">
      <Hero />
      <CoursesPage courses={courses} />
      <TestimonialsPage />
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
