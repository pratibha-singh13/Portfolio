import React, { useRef, useEffect, useState } from "react";
import my2 from "../assets/images/my2.png";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.linkedin.com/in/pratibha-singh013",
  "https://github.com/pratibha-singh13",
  "mailto:pratibhasinghh13@gmail.com",
  "https://www.instagram.com/pratibha._.013",
];

const social_media = [
  "logo-linkedin",
  "logo-github",
  "mail-outline",
  "logo-instagram",
];

const Hero = () => {
  const contactRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex py-10 md:flex-row flex-col items-center px-6 md:px-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Floating background blur effect */}
      <div className="absolute w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -z-10 bottom-10 right-10"></div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center h-full relative group">
        <div className="relative w-52 h-52 md:w-64 md:h-64">
          {/* Glowing animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 blur-xl opacity-70 group-hover:opacity-90 transition duration-500 animate-spin-slow"></div>

          <img
            src={my2}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>

      {/* Text + Buttons */}
      <div
        className={`flex-1 mt-10 md:mt-0 md:text-left text-center text-white transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h1 className="md:text-5xl text-3xl md:leading-normal leading-10 font-extrabold">
          <span className="text-cyan-500 md:text-6xl text-5xl">Hello!<br /></span>
          My Name is <span className="text-cyan-400">Pratibha Singh</span>
        </h1>

        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-semibold text-gray-400">
          <Type />
        </h4>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          <button
            className="btn-primary px-8 py-3 rounded-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-700 transition text-lg"
            onClick={scrollToContact}
          >
            Connect with Me
          </button>
          <a
            href="/https://drive.google.com/file/d/1GyS8BukDNugYJCNh8QPEei3AGkjW-iy8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 transition text-lg"
          >
            Check Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-10 text-3xl flex items-center md:justify-start justify-center gap-6">
          {social_media.map((icon, index) => (
            <a
              key={icon}
              href={socialMediaLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transform hover:scale-110 transition duration-300 cursor-pointer"
              aria-label={`Link to ${icon.replace("logo-", "")}`} // accessibility
            >
              <ion-icon name={icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>

      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
