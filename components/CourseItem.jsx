import { currencyConverter } from "@/utils/currencyConverter";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import { getTransition, shutterUp } from "@/utils/motion";
const CourseItem = ({ course }) => {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="w-full lg:w-[30rem] lg:gap-8 xl:gap-5 xl:w-[25rem] shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-3xl font-medium">{course.title}</h3>
        <p className="flex justify-between text-gray-500">
          <span>
            by{" "}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>
            Duration:{" "}
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>
        <p className="flex justify-between text-gray-500">
          <span>
            Enrolled students:{" "}
            <span className="text-black font-semibold">{course.students}</span>
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <AiOutlineStar className="text-black" />{" "}
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>
        <p className="text-gray-500">
          {course.description.substring(0, 100)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            {currencyConverter(course.price, "en-US", "EUR")}
          </p>
          <Button
            href={`/courses/${course.id}`}
            placeholder="View Details"
            color="primary"
            size="default"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
