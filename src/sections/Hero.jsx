import React from "react";
import { motion } from "motion/react";
import { OrbitingCircles } from "../components/OrbitingCircles";

const Hero = () => {
  const techStack = [
    { name: "React", icon: "/assets/logos/react.svg", color: "#61DAFB" },
    { name: "C#", icon: "/assets/logos/csharp.svg", color: "#512BD4" },
    { name: ".NET", icon: "/assets/logos/dotnet.svg", color: "#512BD4" },
    {
      name: "JavaScript",
      icon: "/assets/logos/javascript.svg",
      color: "#F7DF1E",
    },
    { name: "HTML5", icon: "/assets/logos/html5.svg", color: "#E34F26" },
    { name: "CSS3", icon: "/assets/logos/css3.svg", color: "#1572B6" },
    {
      name: "TailwindCSS",
      icon: "/assets/logos/tailwindcss.svg",
      color: "#06B6D4",
    },
    { name: "Git", icon: "/assets/logos/git.svg", color: "#F05032" },
  ];

  return (
    <section
      className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-primary via-midnight to-navy"
      id="home"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-aqua/5 to-transparent"></div>
      </div>

      {/* Simplified background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-royal/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-mint/5 rounded-full blur-2xl"></div>

      <div className="relative z-10 w-full flex items-center justify-center min-h-screen">
        <div className="c-space max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-aqua text-lg md:text-xl font-light tracking-wide">
                  Hello, I'm
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-mint to-aqua bg-clip-text text-transparent leading-tight">
                  Sanuka Rathnayake
                </h1>
              </div>

              {/* Role */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-royal to-lavender"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
                    Full Stack Developer
                  </h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-lavender to-royal"></div>
                </div>

                {/* Stack indicators */}
                <div className="flex justify-center lg:justify-start space-x-8 text-sm md:text-base">
                  <span className="text-mint font-medium">Frontend</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-lavender font-medium">Backend</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-aqua font-medium">DevOps</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting innovative digital solutions with cutting-edge
                technologies. Passionate about creating seamless user
                experiences and robust backend systems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-royal to-lavender rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-royal/30"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lavender to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#contact"
                  className="group px-8 py-4 border-2 border-aqua text-aqua rounded-full font-semibold text-lg hover:bg-aqua hover:text-primary transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Content - Tech Stack Circle */}
            <div className="relative flex items-center justify-center">
              {/* Central Avatar/Logo */}
              <div className="relative">
                {/* Static subtle background */}
                <div className="absolute inset-0 bg-gradient-to-r from-royal/20 via-lavender/20 to-aqua/20 rounded-full blur-2xl scale-125"></div>

                {/* Main circle */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-storm to-indigo rounded-full flex items-center justify-center border-2 border-white/10 backdrop-blur-sm shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-mint to-aqua bg-clip-text text-transparent mb-2">
                      {"</>"}
                    </div>
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                      Full Stack
                    </p>
                  </div>
                </div>

                {/* Static Tech Stack Icons - First Ring */}
                <div className="absolute inset-0 w-full h-full">
                  {techStack.slice(0, 4).map((tech, index) => {
                    const angle = (360 / 4) * index;
                    const radius = 120;
                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                    return (
                      <div
                        key={tech.name}
                        className="absolute group"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Static Tech Stack Icons - Second Ring */}
                <div className="absolute inset-0 w-full h-full">
                  {techStack.slice(4).map((tech, index) => {
                    const angle = (360 / 4) * index + 45; // Offset by 45 degrees
                    const radius = 180;
                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                    return (
                      <div
                        key={tech.name}
                        className="absolute group"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 text-gray-400">
              <span className="text-sm">Scroll to explore</span>
              <img
                src="/assets/arrow-up.svg"
                alt="scroll"
                className="w-4 h-4 rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
