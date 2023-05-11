import { getAllCourses } from "@/prisma/courses";
import CoursesPage from "./courses";

const HomePage = ({ courses }) => {
  return <CoursesPage courses={courses} />;
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
