import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  const { data: session } = useSession();

  return (
    <div>
      <div className="h-20 fixed top-0 left-0 right-0 bg-black z-[99] text-gray-400 flex items-center">
        <div className="wrapper flex justify-between items-center">
          <div className="logo" data-aos="fade-right" data-aos-duration="1000">
            <Link href="/" className="text-white font-semibold">
              Cordemy
            </Link>
          </div>

          <div className="hidden md:block">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex gap-5 justify-between"
            >
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

              <Link href="/about" className="hover:text-white transition-color">
                About
              </Link>
              <Link href="/faq" className="hover:text-white transition-color">
                Faq
              </Link>
              <Link
                href="/testimonials"
                className="hover:text-white transition-color"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition-color"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="hidden md:block "
          >
            {!session ? (
              <Button
                href="/users/login"
                placeholder="Sign in"
                color="secondary"
              />
            ) : (
              <Button
                href="/users/profile"
                placeholder="profile"
                color="secondary"
              />
            )}
          </div>

          {/*toggle button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center focus:outline-none text-xl text-white z-[99]"
            >
              {toggle === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        {toggle ? (
          <div className="md:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[98] bg-black/50 top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                setToggle ? `` : "hidden"
              }`}
            >
              <div>
                <div className="flex flex-col gap-5 items-center mb-10">
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
                    href="/about"
                    className="hover:text-white transition-color"
                  >
                    About
                  </Link>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-color"
                  >
                    Faq
                  </Link>
                  <Link
                    href="/testimonials"
                    className="hover:text-white transition-color"
                  >
                    Testimonials
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-white transition-color"
                  >
                    Contact
                  </Link>
                </div>

                {!session ? (
                  <Button
                    href="/users/login"
                    placeholder="Sign in"
                    color="secondary"
                  />
                ) : (
                  <Button
                    href="/users/profile"
                    placeholder="profile"
                    color="secondary"
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
