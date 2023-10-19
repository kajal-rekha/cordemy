import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <footer className="bg-black mt-14">
      <div className="wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20  gap-10 md:gap-6 lg:gap-4">
          <div className="w-full">
            <Link
              href="/"
              className="text-2xl font-semibold text-white"
              data-aos="fade-up"
            >
              Cordemy
            </Link>
            <p
              className="text-gray-400 mt-5 w-full leading-8"
              data-aos="fade-up"
            >
              Cordemy offers a diverse range of online courses, empowering
              learners worldwide to acquire new skills and reach their
              potential.
            </p>
          </div>

          <div className="w-full xl:ml-20" data-aos="fade-up">
            <h2
              className="text-2xl font-semibold text-white mb-4"
              data-aos="fade-up"
            >
              Quick Links
            </h2>
            <div className="text-gray-400 gap-3 flex flex-col">
              <Link href="/" className="hover:text-white transition-color">
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-white transition-color"
              >
                Courses
              </Link>
              {session && (
                <Link
                  href="/orders"
                  className="hover:text-white transition-color"
                >
                  Orders
                </Link>
              )}
              <Link
                href="/testimonials"
                className="hover:text-white transition-color"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="w-full ">
            <div
              className=" flex flex-col justify-between gap-2 "
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                More links
              </h2>
              <div className="text-gray-400 gap-3 flex flex-col">
                <Link
                  href="/about"
                  className="hover:text-white transition-color"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="hover:text-white transition-color"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Connect with us
            </h2>
            <div>
              <p className="text-gray-400 mb-4">Phone: +1 234 567 890</p>
              <p className="text-gray-400">Email: cordemy123@.com</p>
              <div className="social-icons flex gap-5 text-2xl items-center mt-5">
                <Link href="https://www.facebook.com/anowar.kajal">
                  <FaFacebookF className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
                <Link href="https://www.linkedin.com/in/kajal-rekha-81262b264//">
                  <FaLinkedinIn className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
                <Link href="https://twitter.com/KajalRekha14">
                  <FaTwitter className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center">
          <div className="lg:w-full md:w-2/3 border-t border-gray-700 -mt-14">
            <p className="text-center text-white/50 text-lg mt-8">
              &copy; {new Date().getFullYear()} Cordemy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
