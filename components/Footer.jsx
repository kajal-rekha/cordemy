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
    <footer className="bg-black">
      <div className="container mx-auto px-16 md:px-0 py-16">
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

          <div className="w-full text-center" data-aos="fade-up">
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

              <Link href="/about" className="hover:text-white transition-color">
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

          <div className="w-full ">
            <div
              className=" flex flex-col justify-between gap-2 items-center"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Connect with us
              </h2>
              <div className="social-icons flex gap-5 text-2xl items-center">
                <Link href="https://www.google.com/">
                  <FaFacebookF className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaLinkedinIn className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaTwitter className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaInstagram className="text-gray-400 hover:text-white mx-auto duration-500" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full text-center" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-white mb-4">Support</h2>
            <div>
              <p className="text-gray-400 mb-4">Phone: +1 234 567 890</p>
              <p className="text-gray-400">Email: cordemy123@.com</p>
            </div>
          </div>
        </div>

        <div className="justify-center">
          <div className="lg:w-full md:w-2/3 border-t border-gray-700">
            <p className="text-center text-gray-800 text-lg mt-8">
              &copy; {new Date().getFullYear()} Cordemy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
