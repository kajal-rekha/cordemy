import Button from "./Button";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts container py-10 mx-auto flex flex-col items-start justify-center h-full gap-5 text-white">
        <h1
          className=" text-4xl md:text-6xl lg:text-7xl font-bold space-font w-full uppercase"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {image.headline}
        </h1>

        <p
          className="sm:w-full lg:w-2/3 text-sm md:text-lg w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {image.body}
        </p>

        <div data-aos="fade-right" data-aos-duration="1000">
          <Button
            href={image.cta}
            placeholder="Get Started"
            color="primary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
