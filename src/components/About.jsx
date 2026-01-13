import React from "react";
import { motion } from "framer-motion";
import coderImage from "../assets/images/coder.png"; // ensure this file exists

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const info = [
    { text: "Completed Projects", count: "6" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1GyS8BukDNugYJCNh8QPEei3AGkjW-iy8/view?usp=sharing";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-16 px-6 bg-[#0f172a] text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <h3 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h3>
        <p className="text-gray-400 text-lg mt-3">My Introduction</p>
        <hr className="border-cyan-600 w-1/4 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <img
            src={coderImage}
            alt="coder"
            className="rounded-xl shadow-xl w-72 md:w-96 border-2 border-cyan-500 shadow-cyan-400/30"
          />
        </motion.div>

        {/* Right Side Content Box */}
        <motion.div
          className="w-full md:w-1/2 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-gray-300 text-justify leading-7">
            Hello! I'm <strong>Pratibha Singh</strong>, a Computer Science undergraduate with a strong foundation in full-stack web development, particularly in the <strong>MERN stack</strong>. I specialize in creating scalable, secure, and user-focused web applications that reflect both functionality and design aesthetics.
            <br /><br />
            My development process blends clean architecture with responsive UI/UX principles. I write maintainable code with attention to performance, accessibility, and real-world usability.
            <br /><br />
            I’m consistently expanding my expertise in <strong>Data Structures & Algorithms (Java)</strong>, <strong>Cloud Technologies</strong>, and <strong>AI/ML</strong> to stay ahead in a rapidly evolving tech landscape. My core strengths include adaptability, continuous learning, and a passion for delivering impactful digital experiences.
          </p>

          {/* Stats */}
          <div className="flex justify-around text-center mt-8">
            {info.map((content, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-cyan-400">
                  {content.count}
                  <span className="text-white">+</span>
                </h3>
                <p className="text-sm text-gray-400 mt-1">{content.text}</p>
              </div>
            ))}
          </div>

          {/* Resume Button */}
          <div className="mt-8 text-center">
            <button
              onClick={navigateToResume}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            >
              View Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
