import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = ({ testimonial }) => {
  return (
    <div
      className="gap-10 text-white/75 bg-black w-[90%] h-[55vh] mx-auto py-10 px-10 md:py-20 md:px-20 rounded-md mt-14"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="overflow-hidden">
        <span>
          <FaQuoteLeft />
        </span>
        <p className="text-sm lg:text-lg">{testimonial.description}</p>
        <div className="flex gap-5 mt-12">
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            width={300}
            height={350}
            priority
            className="md:w-20 md:h-20 h-16 w-16 rounded-full object-cover"
          />

          <div className="mt-3">
            <p className="text-sm lg:text-lg font-semibold">
              {testimonial.name}
            </p>
            <p className="text-sm lg:text-lg">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
