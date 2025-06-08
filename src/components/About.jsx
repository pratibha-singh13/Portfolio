import React from "react";
import { motion } from "framer-motion";

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
    { text: "Completed Projects", count: "15" },
    { text: "Internships", count: "2" },
    { text: "Certifications", count: "5" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1OzuOrRm0Rn9g7xwO6RUO9zUZHkvxFjtr/view?usp=drivesdk";

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
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
        </h3>
        <p className="text-gray-400 text-lg mt-3">My Introduction</p>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Optional Avatar */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110776597?v=4"
            alt="profile"
            className="rounded-xl shadow-xl mx-auto md:mx-0 w-72 md:w-96"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="w-full md:w-1/2 bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <p className="text-gray-300 text-justify leading-7">
            Hello! I'm <strong>Pratibha Singh</strong>, a passionate and detail-oriented Computer Science undergraduate with a strong foundation in full-stack web development. I specialize in building responsive, secure, and user-centric applications using the <strong>MERN stack</strong>.
            <br /><br />
            My work reflects a blend of clean architecture, scalable design, and modern UI/UX principles. I take pride in transforming ideas into well-engineered digital products that are both functional and visually appealing.
            <br /><br />
            With hands-on experience across frontend and backend technologies, I'm continuously evolving my skills in <strong>Data Structures & Algorithms (Java)</strong>, <strong>Cloud Computing</strong>, and emerging fields like <strong>AI/ML</strong>. I value code quality, performance, and collaboration in every project I take on.
            <br /><br />
            I’m driven by a commitment to continuous learning and delivering solutions that create real impact.
          </p>


          {/* Stats */}
          <div className="flex justify-around text-center mt-8">
            {info.map((content, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-cyan-400">
                  {content.count}<span className="text-white">+</span>
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
