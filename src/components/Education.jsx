import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/images/Institution-1.jpg";
import logo2 from "../assets/images/Institution-2.webp";
import logo3 from "../assets/images/Institution-3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const educationDetails = [
  {
    logo: logo1,
    degree: "B.Tech in Computer Science (AI & ML)",
    institution: "St. Peter’s Engineering College, Hyderabad",
    grades: "CGPA: 9.11",
    year: "2022 - Present",
    desc: "Pursuing Bachelor's in Computer Science specializing in Artificial Intelligence and Machine Learning. I've completed 6 semesters with a CGPA of 9.11.",
  },
  {
    logo: logo2,
    degree: "Intermediate in Science (MPC)",
    institution: "Sivasivani Junior College, Hyderabad",
    grades: "Score: 92.1%",
    year: "2020 - 2022",
    desc: "Completed Intermediate (Class XII) in MPC stream with Mathematics, Physics, and Chemistry.",
  },
  {
    logo: logo3,
    degree: "SSC (Xth Grade)",
    institution: "Sadashiva High School, Hyderabad",
    grades: "GPA: 10.0",
    year: "2019 - 2020",
    desc: "Completed SSC (Class X) under the Board of Secondary Education, Telangana in 2020",
  },
];

const Education = () => {
  return (
    <section
      className="bg-[#0f172a] text-white py-16 px-6"
      id="education"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-2">
          My <span className="text-cyan-400">Education</span>
        </h3>
        <p className="text-gray-400 text-lg mb-8">
          Here's a quick look at my academic journey.
        </p>
        <hr className="border-cyan-600 w-1/4 mx-auto mb-12" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex flex-col md:flex-row items-start shadow-lg hover:shadow-cyan-500/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Institution Logo */}
            <div className="w-20 h-20 bg-gray-800 rounded-full mr-6 flex-shrink-0 overflow-hidden border-2 border-cyan-600 shadow-cyan-500 shadow-md mb-4 md:mb-0">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Education Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
              <p className="text-cyan-300 font-medium">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-1">
                {edu.grades} • {edu.year}
              </p>
              <p className="text-gray-300 leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
