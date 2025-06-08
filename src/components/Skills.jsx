import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Languages": ["c", "cpp", "python", "java", "javascript"],
  "Frontend": ["react"],
  "Backend": ["nodejs", "express"],
  "Databases": ["mongodb", "mysql"],
  "Cloud": ["aws"],
  "Tools & IDEs": ["git", "github", "vscode"],
  "Platforms": ["firebase"]
};

const fadeIn = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  },
});

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Categorized tech stack with colorful icons
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(categorizedSkills).map(([category, icons], catIdx) => (
          <motion.div
            key={category}
            variants={fadeIn(catIdx)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-600/40 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center border-b border-cyan-600 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {icons.map((iconName, idx) => (
                <motion.div
                  key={iconName}
                  variants={fadeIn(idx)}
                  className="flex flex-col items-center w-24 p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${iconName}`}
                    alt={iconName}
                    className="w-12 h-12"
                  />
                  <p className="mt-2 text-sm capitalize">{iconName}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
