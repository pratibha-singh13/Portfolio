import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Frontend": ["react", "javascript", "html", "css"],

  "Backend": ["nodejs", "express", "mongodb", "mysql", "postgres"],

  "Programming Languages": ["python", "java", "c", "cpp"],

  "Data & Analytics": ["pandas", "numpy", "matplotlib", "seaborn", "excel"],

  "Data Visualization": ["powerbi", "tableau"], 

  "Data Engineering": ["pyspark", "databricks", "postgres", "docker"],

  "AI & Machine Learning": ["scikit-learn", "tensorflow", "opencv"],

  "Cloud & Platforms": ["aws", "azure", "firebase"],

  "Tools & Workflow": ["git", "github", "vscode", "postman", "jupyter"],

  "Platforms": ["linux"]
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
    <section id="skills" className="bg-[#0f172a] text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Categorized tech stack with glowing icons
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
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center border-b border-cyan-600 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {icons.map((iconName, idx) => (
                <motion.div
                  key={iconName}
                  variants={fadeIn(idx)}
                  className="flex flex-col items-center w-24 p-4 bg-gray-700 hover:bg-gray-600 rounded-xl border border-transparent hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
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
