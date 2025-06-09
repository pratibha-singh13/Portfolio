import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "pratibhasinghh13@gmail.com" },
    { logo: "call-outline", text: "+91 7981464654" },
    {
      logo: "location",
      text: "Hyderabad, Telangana, India",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-[#0f172a] text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <hr className="border-cyan-600 w-1/4 mx-auto mt-4 mb-10" />
      </div>

      <div className="max-w-5xl mx-auto flex md:flex-row flex-col gap-6 bg-white/5 backdrop-blur-md border border-gray-700 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 p-6 rounded-2xl">
        {/* Contact Form */}
        <form className="flex flex-col flex-1 gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <textarea
            rows={8}
            placeholder="Your Message"
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 w-fit"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-7 justify-center">
          {contact_info.map((contact, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-left flex-wrap"
            >
              <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white text-2xl bg-cyan-600 rounded-full shadow-md">
                <ion-icon name={contact.logo}></ion-icon>
              </div>
              <p className="text-gray-300 md:text-base text-sm break-words">
                {contact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
