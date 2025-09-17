const ContactForm = () => {
  return (
    <div className="bg-[#fff8f5] py-5">
      <div className="text-center mb-5 lg:w-1/3 md:w-2/3 w-full mx-auto">
        <h1 className="text-black font-bold text-2xl md:text-4xl">
          Feel frree to contact us
        </h1>
      </div>
      <div className="md:w-2/3 lg:w-1/3 w-full p-5 md:p-2 mx-auto">
        <form className="spyace-y-3">
          <div className="md:flex gap-5 items-center">
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              className="input bg-white text-black w-full mb-3"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              className="input bg-white text-black w-full mb-3"
            />
          </div>
          <div className="md:flex gap-5 items-center">
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
              className="input bg-white text-black w-full mb-3"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              className="input bg-white text-black w-full mb-3"
            />
          </div>
          <div>
            <textarea
              className="textarea bg-white text-black w-full mb-3"
              name="message"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn bg-[#f63e7b] border-0 text-white font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
