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
  "Artificial Intelligence & Machine Learning": ["scikit-learn", "tensorflow", "opencv", "n8n"],
  "Cloud & Platforms": ["aws", "azure", "firebase"],
  "Tools & Workflow": ["git", "github", "vscode", "postman", "jupyter"],
  "Platforms": ["linux"],
};

const iconMap = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  c: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",

  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  pandas: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1280px-Pandas_logo.svg.png",
  numpy: "https://media.licdn.com/dms/image/v2/D5612AQFSTglfKdI9eg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708971797430?e=2147483647&v=beta&t=iZKe_LBwW0NSHcz1V9_LsKskeje_BYusBCoctWYnWJ0",
  matplotlib: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  seaborn: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1-oC4gtSXSqISRSwdiEOaKYcSRmP5L0j2Q&s",
  excel: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",

  powerbi: "https://www.smartsheet.com/sites/default/files/2025-04/power-bi.png",
  tableau: "https://w7.pngwing.com/pngs/815/646/png-transparent-tableau-full-logo-tech-companies-thumbnail.png",

  apachespark: "https://lumendata.com/wp-content/uploads/2025/05/What-is-Apache-Spark.png",
  databricks: "https://www.cegeka.com/hubfs/databricks-logo-1.png?width=500&name=databricks-logo-1.png",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  "scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  n8n: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu0T_eMA2SxKb-gXGf6PcsAsPkYBcAA79Eg&s",

  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",

  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
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
  A snapshot of the technologies I work with — across frontend, backend, data, AI, and cloud —
  to build scalable and practical software systems.
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
                    src={iconMap[iconName]}
                    alt={iconName}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
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
