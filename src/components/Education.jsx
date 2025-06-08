import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const educationDetails = [
  {
    logoUrl: '', // Add your St. Peter’s logo image path here
    degree: 'B.Tech in Computer Science (AI & ML)',
    institution: 'St. Peter’s Engineering College, Hyderabad',
    grades: 'CGPA: 9.11',
    year: '2022 - Present',
    desc: 'Pursuing specialization in Artificial Intelligence and Machine Learning with consistent academic excellence over 5 semesters.',
  },
  {
    logoUrl: '', // Add your Sivasivani logo image path here
    degree: 'Intermediate in Science (MPC)',
    institution: 'Sivasivani Junior College, Hyderabad',
    grades: 'Score: 92.1%',
    year: '2020 - 2022',
    desc: 'Focused on Mathematics, Physics, and Chemistry during my higher secondary education.',
  },
  {
    logoUrl: '', // Add your Sadashiva High School logo image path here
    degree: 'SSC (Xth Grade)',
    institution: 'Sadashiva High School, Hyderabad',
    grades: 'GPA: 10.0',
    year: '2019 - 2020',
    desc: 'Completed SSC with distinction, building a strong academic foundation.',
  },
];

const Education = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6" id="education">
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
        <p className="text-gray-400 text-lg mb-8">Here's a quick look at my academic journey.</p>
        <hr className="border-gray-600 w-1/4 mx-auto mb-12" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Placeholder for Institution Logo */}
            <div className="w-20 h-20 bg-gray-700 rounded-full mr-6 flex-shrink-0 overflow-hidden mb-4 md:mb-0">
              {edu.logoUrl && (
                <img
                  src={edu.logoUrl}
                  alt={`${edu.institution} logo`}
                  className="object-contain w-full h-full"
                />
              )}
            </div>

            {/* Education Content */}
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
