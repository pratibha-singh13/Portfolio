import React, { useState } from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "pratibhasinghh13@gmail.com" },
    { logo: "call-outline", text: "+91 7981464654" },
    { logo: "location", text: "Hyderabad, Telangana, India" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");
    setError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pratibhasinghh13@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setButtonText("Message Sent!");

        // Reset form
        setFormData({ name: "", email: "", message: "" });

        // Restore button after 3 seconds
        setTimeout(() => {
          setButtonText("Send Message");
          setIsSubmitting(false);
        }, 3000);
      } else {
        setError(result.message || "Something went wrong.");
        setButtonText("Send Message");
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      setButtonText("Send Message");
      setIsSubmitting(false);
    }
  };

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
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <textarea
            name="message"
            rows={8}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:border-cyan-400 transition-all"
          ></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 w-fit disabled:opacity-50"
          >
            {buttonText}
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
