import Image from "next/image";
const Testimonial = ({ testimonial }) => {
  return (
    <div
      className="shadow-md rounded-lg mb-20 px-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div>
        <h2 className="text-2xl font-medium">{testimonial.title}</h2>
        <p className="py-10 text-lg text-gray-600">{testimonial.description}</p>
      </div>
      <div className="flex gap-5 mt-10 py-5">
        <div>
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            height={50}
            width={50}
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-gray-800">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
