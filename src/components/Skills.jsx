import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Programming Languages": ["python", "java", "c", "cpp"],
  "Frontend": ["react", "javascript", "html", "css"],
  "Backend": ["nodejs", "express"],
  "Databases": ["mongodb", "mysql", "postgres"],
  "Data Analytics & Visualization": [
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
    "excel",
    "powerbi",
    "tableau",
  ],
  "Data Engineering": ["apachespark", "databricks", "docker", "postgres"],
  "AI & Machine Learning": ["scikit-learn", "tensorflow", "opencv"],
  "Cloud & Platforms": ["aws", "azure", "firebase"],
  "Tools & Workflow": ["git", "github", "vscode", "postman", "jupyter"],
  "Platforms": ["linux"],
};

const iconSources = {
  powerbi: "https://cdn.simpleicons.org/powerbi/F2C811",
  tableau: "https://cdn.simpleicons.org/tableau/E97627",
  databricks: "https://cdn.simpleicons.org/databricks/FF3621",
  apachespark: "https://cdn.simpleicons.org/apachespark/E25A1C",
  azure: "https://cdn.simpleicons.org/microsoftazure/0078D4",
};

const fadeIn = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
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
                  key={`${category}-${iconName}`}
                  variants={fadeIn(idx)}
                  className="flex flex-col items-center w-24 p-4 bg-gray-700/90 hover:bg-gray-600 rounded-xl border border-transparent hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
                >
                  <img
                    src={
                      iconSources[iconName] ||
                      `https://skillicons.dev/icons?i=${iconName}&theme=light`
                    }
                    alt={iconName}
                    className="w-12 h-12 bg-white/20 p-2 rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://cdn.simpleicons.org/code/ffffff";
                    }}
                  />
                  <p className="mt-2 text-sm capitalize text-gray-200">
                    {iconName.replace(/-/g, " ")}
                  </p>
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
