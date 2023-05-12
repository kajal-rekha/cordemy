const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" contact container mx-auto mt-20 h-screen">
      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-5 py-10 mx-auto max-w-lg"
      >
        <h2 className="text-5xl font-medium  ">Contact Us</h2>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="write your name"
            className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none "
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
            className=" border border-slate-500 py-3 px-5 rounded-xl outline-none"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="message" className="cursor-pointer ">
            Message
          </label>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message border border-slate-500 py-16 px-28 rounded-xl outline-none "
          />
        </div>
        <input type="submit" className="px-2 py-5 bg-black text-white" />
      </form>
    </div>
  );
};

export default ContactPage;
