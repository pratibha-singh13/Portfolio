import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Programming Languages": ["python", "java", "c", "cplusplus"],
  "Frontend": ["react", "javascript", "html5", "css3"],
  "Backend": ["nodejs", "express"],
  "Databases": ["mongodb", "mysql", "postgresql"],
  "Data Analytics & Visualization": [
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
    "microsoftexcel",
    "powerbi",
    "tableau"
  ],
  "Data Engineering": ["apachespark", "databricks", "docker", "postgresql"],
  "AI & Machine Learning": ["scikitlearn", "tensorflow", "opencv", "n8n"],
  "Cloud & Platforms": ["amazonaws", "microsoftazure", "firebase"],
  "Tools & Workflow": ["git", "github", "visualstudiocode", "postman", "jupyter"],
  "Platforms": ["linux"]
};

const iconSources = {
  powerbi: "https://cdn.simpleicons.org/powerbi/F2C811",
  tableau: "https://cdn.simpleicons.org/tableau/E97627",
  databricks: "https://cdn.simpleicons.org/databricks/FF3621",
  apachespark: "https://cdn.simpleicons.org/apachespark/E25A1C",
  microsoftazure: "https://cdn.simpleicons.org/microsoftazure/0078D4",
  amazonaws: "https://cdn.simpleicons.org/amazonaws/FF9900",
  microsoftexcel: "https://cdn.simpleicons.org/microsoftexcel/217346",
  scikitlearn: "https://cdn.simpleicons.org/scikitlearn/F7931E",
  postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
  visualstudiocode: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  n8n: "https://images.seeklogo.com/logo-png/47/1/n8n-logo-png_seeklogo-470809.png",
  matplotlib: "https://cdn.simpleicons.org/matplotlib/11557C",
  seaborn: "https://cdn.simpleicons.org/seaborn/4C72B0",
};

const fadeIn = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
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
          Categorized tech stack
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
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center border-b border-cyan-600 pb-2">
              {category}
            </h3>

            <div className="flex flex-wrap gap-6 justify-center">
              {icons.map((icon, idx) => (
                <motion.div
                  key={`${category}-${icon}`}
                  variants={fadeIn(idx)}
                  className="flex flex-col items-center w-24 p-4 bg-gray-700 rounded-xl hover:border-cyan-400 border border-transparent transition"
                >
                  <img
                    src={
                      iconSources[icon] ||
                      `https://cdn.simpleicons.org/${icon}/ffffff`
                    }
                    alt={icon}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://cdn.simpleicons.org/code/ffffff";
                    }}
                  />
                  <p className="mt-2 text-sm capitalize text-gray-200 text-center">
                    {icon.replace(/-/g, " ")}
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
