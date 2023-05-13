const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" contact container mx-auto mt-20 h-screen">
      <h2 className="text-5xl text-center font-medium  ">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-5 py-10 mx-auto max-w-lg"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="write your name"
            className="border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 "
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
            className=" border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300"
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
        <input
          type="submit"
          className="px-2 py-5 bg-black text-white rounded-xl"
        />
      </form>
    </div>
  );
};

export default ContactPage;
