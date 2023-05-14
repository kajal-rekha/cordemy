import emailjs from "@emailjs/browser";
import { useRef } from "react";

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
          console.log("Your message sent!");
        },
        () => {
          console.log("Failed, please try again later!");
        }
      );
    // reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-20 min-h-screen">
      <h2 className="text-5xl text-center font-medium  ">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-5 py-10 mx-auto max-w-lg"
        ref={formRef}
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="write your name"
            className=" name border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 "
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
            className=" email border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="message" className="cursor-pointer">
            Message
          </label>
          <textarea
            placeholder="Write your message"
            name="message"
            rows="1"
            cols="30"
            className="message border border-gray-300 focus:border-gray-600 h-40 rounded-xl outline-none py-5 px-5 resize-none duration-300"
          />
        </div>
        <div className="submit px-2 py-5  rounded-xl bg-black text-center overflow-hidden">
          <input type="submit" className=" text-white" />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
