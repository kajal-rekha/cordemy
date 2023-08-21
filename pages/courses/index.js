import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";
import React from "react";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10 mt-20">
      <SectionHeader
        span="Courses"
        h2="Discover Diverse Courses for Growth"
        p="Online learning is revolutionizing education, opening doors to new
          opportunities and advancements."
      />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-10">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

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
