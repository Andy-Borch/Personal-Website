import React, { createContext, useState, useEffect } from 'react';
import { Card, CardContent } from './card'; // Ensure the 'card' component is imported correctly
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Create a context for sections (used in the app)
const SectionContext = createContext();

export default function PersonalWebsite() {
  const [sections] = useState([
    'home',
    'about',
    'education',
    'experience',
    'projects',
    'hobbies',
    'research',
  ]);

  const fadeTransition = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.6 },
    viewport: { once: false },
  };

  const projectData = [
    { name: "Bubble", time: 35 },
    { name: "Quick", time: 8 },
    { name: "Heap", time: 12 },
    { name: "Merge", time: 10 },
  ];

  // Smooth scroll to sections when a link is clicked
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <SectionContext.Provider value={sections}>
      <div className="bg-slate-100 text-gray-900 scroll-smooth">
        {/* Header Section with navigation links */}
        <header className="fixed w-full bg-slate-800 shadow-md z-10 top-0 left-0">
          <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-blue-700">[Your Name]</h1>
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-lg text-gray-300 hover:text-blue-800">Home</a></li>
              <li><a href="#about" className="text-lg text-gray-300 hover:text-blue-800">About</a></li>
              <li><a href="#projects" className="text-lg text-gray-300 hover:text-blue-800">Projects</a></li>
              <li><a href="#experience" className="text-lg text-gray-300 hover:text-blue-800">Experience</a></li>
              <li><a href="#education" className="text-lg text-gray-300 hover:text-blue-800">Education</a></li>
              <li><a href="#hobbies" className="text-lg text-gray-300 hover:text-blue-800">Hobbies</a></li>
              <li><a href="#research" className="text-lg text-gray-300 hover:text-blue-800">Research</a></li>
            </ul>
          </nav>
        </header>

        {/* Home Section */}
        <motion.section
          id="home"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-100"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content Section (Left on larger screens) */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold mb-4">Hi, I'm [Your Name]</h1>
              <p className="text-2xl text-gray-300 mb-6">Computer Science | HPC | Research Enthusiast</p>
              {/* You can add more content or buttons here if needed */}
            </div>

            {/* Image/Icon Section (Right on larger screens) */}
            <div className="flex justify-center">
              <img
                src="/logo512.png-tech.png"
                alt="Profile"
                className="w-48 h-48 rounded-full shadow-md border-4 border-blue-500 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </motion.section>

       {/* About Section */}
        <motion.section
          id="about"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image/Icon Section */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 bg-slate-200 rounded-full flex items-center justify-center">
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-slate-600">
                  {"</>"}
                </div>
                <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 text-slate-600">
                  {`{}`}
                </div>
                <div className="w-24 h-24 rounded-full bg-blue-300"></div>
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-slate-600">
                  <div className="w-16 h-2 bg-blue-300 rounded-full mb-1"></div>
                  <div className="w-20 h-2 bg-blue-300 rounded-full"></div>
                </div>
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-slate-600">
                  {`[]`}
                </div>
                <div className="absolute bottom-1/4 right-1/2 transform translate-x-1/2 translate-y-1/2 text-slate-600">
                  {`()`}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-slate-200 mb-4">About Me</h2>
              <div className="bg-slate-200 text-slate-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Software Developer with a Passion for Innovation</h3>
                <p className="text-lg mb-4">
                  I'm Great.
                </p>
                <p className="text-lg mb-4">
                  I do cool stuff
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                    <p className="text-md">I enjoy tackling complex challenges and finding elegant solutions.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Continuous Learner</h4>
                    <p className="text-md">Always exploring new technologies and improving my skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* Experience Section */}
        <motion.section
          id="experience"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-200 mb-4">Experience</h2>
              <div className="bg-slate-200 text-slate-600 rounded-lg p-6 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2 text-center">Software Developer with a Passion for Innovation</h3>
                <p className="text-lg mb-4 text-center">
                  I'm Great.
                </p>
                <p className="text-lg mb-4 text-center">
                  I do cool stuff
                </p>
                <div className="mb-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                    <p className="text-md">I enjoy tackling complex challenges and finding elegant solutions.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Continuous Learner</h4>
                    <p className="text-md">Always exploring new technologies and improving my skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>



        {/* Projects Section */}
        <motion.section
          id="projects"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-200 mb-6">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:scale-[1.02] transition-transform">
                <CardContent className="p-4">
                  <h3 className="font-bold text-green-700">HPC Scheduler Benchmark</h3>
                  <p>Benchmarked scheduling strategies on a Jetson Nano using TensorFlow and Python to optimize accelerator usage.</p>
                  <img src="/jetson-nano-diagram.png" alt="Jetson Nano" className="mt-2 rounded shadow-md" />
                  <a href="/benchmark-results.pdf" target="_blank" className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    Download Results <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:scale-[1.02] transition-transform">
                <CardContent className="p-4">
                  <h3 className="font-bold text-green-700">Sorting Algorithm Benchmark</h3>
                  <p>Performance analysis of sorting algorithms across varied datasets. Visualized using Python and matplotlib.</p>
                  <div style={{ width: 600, height: 300 }}>
                    <LineChart data={projectData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="time" stroke="#3b82f6" activeDot={{ r: 8 }} />
                    </LineChart>
                  </div>
                  <a href="https://github.com/yourusername/sorting-benchmark" className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-slate-200 mb-4">Education</h2>
              <p className="text-lg">
                BS + MS in Computer Science (Accelerated Program), Expected Graduation: 2026
              </p>
            </div>
            {/* Image or Icon Section (Optional) */}
            <div className="flex justify-center">
              {/* You can add an image here if needed */}
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          id="hobbies"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-slate-200 mb-4">Hobbies</h2>
              <p className="text-lg">In my spare time, I enjoy hiking, playing chess, and exploring the latest developments in AI and technology.</p>
            </div>
            {/* Image or Icon Section (Optional) */}
            <div className="flex justify-center">
              {/* You can add an image here if needed */}
            </div>
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-teal-600 mb-4">Research</h2>
              <p className="text-lg">I am currently conducting research on high-performance computing algorithms for data processing and optimization of machine learning workflows.</p>
            </div>
            {/* Image or Icon Section (Optional) */}
            <div className="flex justify-center">
              {/* You can add an image here if needed */}
            </div>
          </div>
        </motion.section>


        {/* Footer Section */}
        <footer className="p-6 bg-gray-400 text-white text-center">
          <p>&copy; 2025 [Your Name] | All rights reserved</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/yourusername" target="_blank" className="text-white hover:text-gray-300">GitHub</a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" className="text-white hover:text-gray-300">LinkedIn</a>
          </div>
        </footer>
      </div>
    </SectionContext.Provider>
  );
}