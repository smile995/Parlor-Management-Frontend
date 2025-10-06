import HeaderTitle from "../shared/HeaderTitle";

const ContactForm = () => {
  return (
    <div className="bg-[#fff8f5] py-10">
      <HeaderTitle BText="Feel frree to" CText="contact us" />
      
      <div className="md:w-2/3 lg:w-1/2 w-full mt-5 p-5 md:p-2 mx-auto">
        <form className="spyace-y-5">
          <div className="md:flex gap-5 items-center">
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              className="input bg-white text-black w-full mb-3 3 border-black border-1 "
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              className="input bg-white text-black w-full mb-3 3 border-black border-1"
            />
          </div>
          <div className="md:flex gap-5 items-center">
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
              className="input bg-white text-black w-full mb-3 3 border-black border-1"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              className="input bg-white text-black w-full mb-3 3 border-black border-1"
            />
          </div>
          <div>
            <textarea
              className="textarea bg-white text-black w-full mb-3 3 border-black border-1"
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
