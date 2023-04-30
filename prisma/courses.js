import prisma from "./prisma";

// GET ALL COURSES
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

  return courses;
};

// GET A SINGLE COURSE
export const getCourse = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id },
  });
  return course;
};
