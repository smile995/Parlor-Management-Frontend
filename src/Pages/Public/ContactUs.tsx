import HeaderBanner from "../../Components/shared/HeaderBanner";
import HeaderTitle from "../../Components/shared/HeaderTitle";
import contact from "../../assets/images/contact.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Top Banner */}
      <HeaderBanner
        image={contact}
        subTitle="Our team of beauty experts is always ready to assist you with appointments, services, and personalized support."
        title="Contact & Support"
      />

      {/* Section Title */}
      <div className="my-10 text-center">
        <HeaderTitle BText="Get In" CText="Touch" />
        <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
          Have questions about our services or want to book an appointment? Fill
          out the form below or reach us directly.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-5 mb-16">
        {[
          {
            icon: <FaMapMarkerAlt size={24} />,
            title: "Our Location",
            info: "123 Glam Street, Dhaka, Bangladesh",
          },
          {
            icon: <FaPhoneAlt size={24} />,
            title: "Call Us",
            info: "+880 1234-567890",
          },
          {
            icon: <FaEnvelope size={24} />,
            title: "Email Us",
            info: "support@glamparlor.com",
          },
          {
            icon: <FaClock size={24} />,
            title: "Opening Hours",
            info: "Sun - Thu: 10AM - 8PM",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-pink-100 text-pink-600 p-4 rounded-full mb-3">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.info}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-16 grid md:grid-cols-2 gap-8 px-5">
        {/* Left side text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Let’s Connect With Us
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Whether you need help selecting the right service or want to discuss
            your beauty goals, our support team will be happy to assist.
          </p>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>💄 Personalized beauty consultations</li>
            <li>💅 Appointment assistance</li>
            <li>🧴 Product & service inquiries</li>
          </ul>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mb-16 px-5">
        <iframe
          title="Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4863092980383!2d90.41251877511773!3d23.802449886737577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab7e73bb87%3A0x391b2b442ffab59e!2sDhaka!5e0!3m2!1sen!2sbd!4v1708275558470!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
