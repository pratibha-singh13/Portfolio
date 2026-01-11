import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import projectOne from "../assets/images/project-1.png"; // SmartChat
import projectTwo from "../assets/images/project-2.png"; // Streamify
import projectThree from "../assets/images/project-3.png"; // POD
import projectFour from "../assets/images/project-4.png"; // Gender-Age
import projectFive from "../assets/images/project-5.png"; // Mental Health Companion
import projectSix from "../assets/images/project-6.png"; // Cardiovascular Disease Prediction

const projects = [
  {
    img: projectOne,
    name: "Streamify - Realtime Chat & Video App",
    desc: "A full-stack language exchange platform offering 1-on-1 and group chat, video calls with screen sharing and recording, 32 unique UI themes, JWT authentication, and real-time features like typing indicators and reactions.",
    github_link: "https://github.com/pratibha-singh13/Streamify-Realtime-Chat-Video-Calling-App.git",
    live_link: "https://streamify-realtime-chat-video-calling-app.onrender.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Zustand", "Tailwind", "TanStack Query", "Socket.io"],
  },
  {
    img: projectTwo,
    name: "SmartChat-App",
    desc: "A full-stack real-time chat application with JWT authentication, online user status, global state management, and image uploads using Cloudinary.",
    github_link: "https://github.com/pratibha-singh13/SmartChat-App.git",
    live_link: "https://smartchat-app.onrender.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Zustand", "TailwindCSS", "DaisyUI", "Cloudinary"],
  },
  {
    img: projectThree,
    name: "Gender & Age Prediction",
    desc: "Predicts gender and age from webcam or uploaded images using OpenCV and pretrained ML models. This Python project uses deep learning models trained on the Adience dataset for approximate gender and age range classification.",
    github_link: "https://github.com/pratibha-singh13/Gender-detection-and-Age-Prediction.git",
    tech: ["Python", "OpenCV", "Deep Learning", "Pretrained Models"],
  },
  {
    img: projectFour, 
    name: "POD T-Shirt Customizer",
    desc: "A t-shirt customization page for a print-on-demand store, allowing users to upload images, enter custom text, and set size preferences with a responsive, switchable UI.",
    github_link: "https://github.com/pratibha-singh13/POD-T-Shirt-Customizer-App.git",
    live_link: "https://pod-t-shirt-customizer-app.pages.dev/",
    tech: ["React", "TailwindCSS", "React Hook Form", "Vite", "Cloudflare Pages"],
  },
  {
  img: projectFive, 
  name: "Mental Health Companion",
  desc: "A full-stack mental wellness platform that helps users track moods, build self-care habits, and engage in anonymous peer support. It offers mood trends, habit streaks, reflections, and a secure community wall with JWT authentication and media uploads.",
  github_link: "https://github.com/pratibha-singh13/Mental-Health-Companion",
  live_link: "https://inner-heal.vercel.app/",
  tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
 },

{
  img: projectSix,
  name: "AI-Based ECG Disease Prediction",
  desc: "An AI-powered system that classifies ECG images into cardiac conditions like myocardial infarction and arrhythmia using a ResNet50-based CNN. It includes a Gradio web interface and provides condition-specific medical recommendations with confidence scores.",
  github_link: "https://github.com/pratibha-singh13/AI-Based-ECG-Analysis-for-Cardiovascular-Disease-Prediction",
  tech: ["Python", "TensorFlow", "Keras", "CNN", "ResNet50", "Gradio", "OpenCV"],
}


];

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">A selection of my best work</p>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/40 transition duration-300 flex flex-col h-full">
                {/* Image Section */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-md text-xs cursor-default transition duration-300"
                        style={{
                          boxShadow: "0 0 8px 2px rgba(56, 189, 248, 0.7)",
                          border: "1px solid rgba(56, 189, 248, 0.9)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 12px 4px rgba(56, 189, 248, 1)";
                          e.currentTarget.style.border =
                            "1px solid rgba(56, 189, 248, 1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 8px 2px rgba(56, 189, 248, 0.7)";
                          e.currentTarget.style.border =
                            "1px solid rgba(56, 189, 248, 0.9)";
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-md text-xs transition"
                    >
                      View Code
                    </a>

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-xs transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
