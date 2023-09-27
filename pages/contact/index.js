import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integration

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    // reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact mt-28 min-h-screen">
      <SectionHeader
        span="contact"
        h2="Unlocking Possibilities: Let's Connect!"
        p="Discover synergy at Cordemy. Connect for collaboration, inquiries, and endless innovation. Let's chat now!"
      />
      <div className="grid grid-cols  wrapper lg:grid-cols-[45%_auto] gap-20 mt-20">
        <div
          className=" w-full h-[85%] mt-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692707400/message-online-chat-social-text-concept_53876-167132_dapmop.avif"
            alt="contact_image"
            width={500}
            height={750}
            priority
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          <form
            onSubmit={sendEmail}
            className="contact-form flex flex-col gap-5 py-10 mx-auto max-w-screen-sm"
            ref={formRef}
          >
            <div className="form-control flex flex-col gap-2 ">
              <label htmlFor="name" className="cursor-pointer">
                Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="write your name"
                required
                className="name border border-black/50 focus:border-black/80 py-4 px-6 rounded-xl outline-none  duration-300"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="form-control flex flex-col gap-2">
              <label htmlFor="email" className="cursor-pointer ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="write your email"
                required
                className="email border border-black/50 focus:border-black/80 py-4 px-6 rounded-xl outline-none duration-300"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="message" className="cursor-pointer">
                Message
              </label>
              <textarea
                placeholder="Write your message"
                required
                name="message"
                rows="1"
                cols="30"
                className="message border border-black/50 focus:border-black/80 h-40 rounded-xl outline-none py-5 px-5 resize-none duration-300"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <button
              role="link"
              type="submit"
              className="text-white uppercase submit px-2 py-5  rounded-xl bg-black text-center overflow-hidden hover:bg-black/90 duration-300"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
