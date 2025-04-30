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
    'supercomputing',
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
        {/* Header Section with navigation links */}
<header className="fixed w-full bg-slate-900 shadow-md z-10 top-0 left-0 transition-all duration-300">
  <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
    <h1 className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300">[Your Name]</h1>
    <ul className="flex space-x-6">
      <li>
        <a
          href="#home"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Experience
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Education
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#hobbies"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Hobbies
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
      <li>
        <a
          href="#supercomputing"
          className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative"
        >
          Supercomputing
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span>
        </a>
      </li>
    </ul>
  </nav>
</header>

{/* Home Section */}
<motion.section
  id="home"
  className="min-h-screen flex items-center justify-center p-8 bg-slate-600 text-gray-100"
>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text Content Section */}
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-extrabold text-slate-200 mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-2xl text-gray-300 mb-6">Computer Science | HPC | Research Enthusiast</p>
      {/* You can add more content or buttons here if needed */}
    </div>

    {/* Image/Icon Section */}
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
  className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300"
>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
    {/* Image/Icon Section */}
    <div className="flex justify-center">
      <div className="relative w-48 h-48 bg-slate-800 rounded-full flex items-center justify-center shadow-xl"> {/* Updated bubble style */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-indigo-400 text-xl">
          {"</>"}
        </div>
        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 text-teal-400 text-xl">
          {`{}`}
        </div>
        <div className="w-24 h-24 rounded-full bg-blue-400"></div> {/* Updated color */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-16 h-2 bg-blue-400 rounded-full mb-1"></div>
          <div className="w-20 h-2 bg-blue-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-purple-400 text-xl">
          {`[]`}
        </div>
        <div className="absolute bottom-1/4 right-1/2 transform translate-x-1/2 translate-y-1/2 text-yellow-400 text-xl">
          {`()`}
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="text-left rounded-lg shadow-xl p-8 bg-slate-800"> {/* Updated bubble style */}
      <h2 className="text-3xl font-semibold text-slate-300 mb-4">About Me</h2> {/* Updated text color */}
      <h3 className="text-xl font-semibold mb-2 text-teal-300">Software Developer with a Passion for Innovation</h3> {/* Updated accent color */}
      <p className="text-lg mb-4">
        I'm Great.
      </p>
      <p className="text-lg mb-4">
        I do cool stuff
      </p>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2 text-indigo-300">Technical Skills</h4> {/* Updated accent color */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">JavaScript</span> {/* Updated tag style */}
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Problem Solver</h4> {/* Updated accent color */}
          <p className="text-md">I enjoy tackling complex challenges and finding elegant solutions.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-300">Continuous Learner</h4> {/* Updated accent color */}
          <p className="text-md">Always exploring new technologies and improving my skills.</p>
        </div>
      </div>
    </div>
  </div>
</motion.section>


{/* Experience Section */}
<motion.section
  id="experience"
  className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300"
>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Updated grid and gap */}
    <h2 className="text-3xl font-semibold text-slate-300 mb-8 text-center underline col-span-full">
      Work Experience
    </h2>
    {/* Experience 1 */}
    <div className="relative rounded-lg shadow-xl p-8 bg-slate-800"> {/* Updated bubble style */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold text-teal-300">Job 1</h4> {/* Updated job title style */}
        <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">
          2022 - Present
        </div>
      </div>
      <h3 className="text-xl font-semibold text-indigo-400 mb-4">Awesome Software Inc.</h3> {/* Updated company style */}
      <ul className="text-lg mb-4 list-disc pl-5 text-left">
        <li>Great at what I do.</li>
        <li>I build innovative solutions.</li>
      </ul>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Technical Skills</h4> {/* Updated skills header style */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">JavaScript</span> {/* Updated tag style */}
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      </div>
    </div>

    {/* Experience 2 */}
    <div className="relative rounded-lg shadow-xl p-8 bg-slate-800"> {/* Updated bubble style */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold text-teal-300">Job 1</h4> {/* Updated job title style */}
        <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">
          2022 - Present
        </div>
      </div>
      <h3 className="text-xl font-semibold text-indigo-400 mb-4">Awesome Software Inc.</h3> {/* Updated company style */}
      <ul className="text-lg mb-4 list-disc pl-5 text-left">
        <li>Great at what I do.</li>
        <li>I build innovative solutions.</li>
      </ul>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-yellow-300 mb-2">Technical Skills</h4> {/* Updated skills header style */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">JavaScript</span> {/* Updated tag style */}
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Node.js</span>
          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      </div>
    </div>
  </div>
</motion.section>



        {/* Projects Section */}
        <motion.section
          id="projects"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-800 text-gray-200"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"> {/* Different grid layout */}
            <h2 className="text-3xl font-semibold text-slate-200 mb-8 text-center underline col-span-full">
              My Featured Projects
            </h2>
            {/* Project 1 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-700 flex flex-col"> {/* Different bubble style */}
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/640x360" alt="Project 1" className="object-cover w-full h-full" /> {/* Placeholder image */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Portfolio Website</h3>
              <p className="text-md mb-4">A responsive website showcasing my skills and projects.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">React</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Framer Motion</span>
              </div>
              <a href="#" className="text-indigo-400 hover:underline mt-auto">View Live</a>
            </div>

            {/* Project 2 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-700 flex flex-col"> {/* Different bubble style */}
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/640x360/4A5568" alt="Project 2" className="object-cover w-full h-full" /> {/* Different placeholder */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Management Application</h3>
              <p className="text-md mb-4">A web application for creating, organizing, and managing tasks.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Vue.js</span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Firebase</span>
              </div>
              <a href="#" className="text-teal-400 hover:underline mt-auto">View Source</a>
            </div>

            {/* Project 3 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-700 flex flex-col"> {/* Different bubble style */}
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/640x360/718096" alt="Project 3" className="object-cover w-full h-full" /> {/* Another placeholder */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Visualization Dashboard</h3>
              <p className="text-md mb-4">A dashboard to display and analyze sample datasets.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Chart.js</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Flask</span>
              </div>
              <a href="#" className="text-orange-400 hover:underline mt-auto">Explore Demo</a>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300" 
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
            <h2 className="text-3xl font-semibold text-slate-300 mb-8 text-center underline col-span-full">
              My Academic Background
            </h2>
            {/* Education 1 */}
            <div className="relative rounded-lg shadow-xl p-8 bg-slate-800"> {/* Different bubble style */}
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                BS
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <h4 className="text-lg text-indigo-300 mb-2">University of Techville</h4> {/* Different accent color */}
              <p className="text-md mb-4">Graduated with honors, focused on software engineering and algorithms.</p>
              <ul className="list-disc pl-5 text-left">
                <li>Relevant coursework: Data Structures, Algorithms, Operating Systems.</li>
                <li>Minor in Mathematics.</li>
              </ul>
              <div className="absolute bottom-4 right-4 text-sm text-gray-400">2016 - 2020</div> {/* Different date position */}
            </div>

            {/* Education 2 */}
            <div className="relative rounded-lg shadow-xl p-8 bg-slate-800"> {/* Different bubble style */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-bold">
                MS
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
              <h4 className="text-lg text-teal-300 mb-2">Graduate Institute of Innovation</h4> {/* Different accent color */}
              <p className="text-md mb-4">Advanced studies in software architecture, design patterns, and project management.</p>
              <ul className="list-disc pl-5 text-left">
                <li>Specialized in scalable systems.</li>
                <li>Participated in research projects.</li>
              </ul>
              <div className="absolute bottom-4 left-4 text-sm text-gray-400">2020 - 2022</div> {/* Different date position */}
            </div>
          </div>
        </motion.section>

        {/* Supercomputing Experience */}
        <motion.section
          id="supercomputing"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-900 text-gray-400"
        >
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> {/* Different grid for potential image/text layout */}
            <h2 className="text-3xl font-semibold text-slate-300 mb-8 text-center underline col-span-full">
              My Adventures in Supercomputing
            </h2>
            <div className="rounded-lg shadow-xl p-8 bg-slate-800">
              <p className="text-lg mb-4">
                Whoa, supercomputers! Got to spend some time tinkering with these massive machines. It was pretty wild seeing the sheer scale and power. Definitely learned a ton about high-performance computing and parallel processing. Plus, the blinking lights were kinda mesmerizing. 😉
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Key takeaways: Parallel programming concepts, job scheduling, system administration basics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for images */}
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
                <img src="https://via.placeholder.com/640x360/2E3748" alt="Supercomputer 1" className="object-cover w-full h-full" /> {/* Placeholder image */}
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
                <img src="https://via.placeholder.com/640x360/4A5568" alt="Supercomputer 2" className="object-cover w-full h-full" /> {/* Placeholder image */}
              </div>
              {/* You can add more image containers here */}
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          id="hobbies"
          className="min-h-screen flex items-center justify-center p-8 bg-slate-500 text-gray-700"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <h2 className="text-3xl font-semibold text-slate-600 mb-8 text-center underline col-span-full">
              What I Do When Not Coding
            </h2>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/400x300/A0B4BF" alt="Photography" className="object-cover w-full h-full" />
              <div className="p-4 bg-slate-100">
                <h3 className="text-xl font-semibold mb-2 text-slate-700">Photography</h3>
                <p className="text-md text-gray-600">Capturing moments and exploring different perspectives through the lens.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x400/8F9BA8" alt="Hiking & Outdoors" className="object-cover w-full h-full" />
              <div className="p-4 bg-slate-100">
                <h3 className="text-xl font-semibold mb-2 text-slate-700">Hiking & Outdoors</h3>
                <p className="text-md text-gray-600">Exploring trails, enjoying nature, and getting some fresh air.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden lg:col-span-1">
              <img src="https://via.placeholder.com/600x200/778899" alt="Playing Guitar" className="object-cover w-full h-full" />
              <div className="p-4 bg-slate-100">
                <h3 className="text-xl font-semibold mb-2 text-slate-700">Playing Guitar</h3>
                <p className="text-md text-gray-600">Strumming chords and making some noise (hopefully good noise!).</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/350x350/B0C4DE" alt="Reading Sci-Fi" className="object-cover w-full h-full" />
              <div className="p-4 bg-slate-100">
                <h3 className="text-xl font-semibold mb-2 text-slate-700">Reading Sci-Fi</h3>
                <p className="text-md text-gray-600">Getting lost in other worlds and exploring futuristic ideas.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/450x250/D3D3D3" alt="Learning New Things" className="object-cover w-full h-full" />
              <div className="p-4 bg-slate-100">
                <h3 className="text-xl font-semibold mb-2 text-slate-700">Learning New Things</h3>
                <p className="text-md text-gray-600">Always eager to expand my knowledge and pick up new skills.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Section */}
        {/* Footer Section */}
<footer className="p-6 bg-slate-800 text-gray-300 text-center">
  <p>&copy; 2025 [Your Name] | All rights reserved</p>
  <div className="flex justify-center space-x-6 mt-4">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
    >
      GitHub
    </a>
    <a
      href="https://orcid.org/yourorcidid"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
    >
      ORCID
    </a>
    <a
      href="https://www.linkedin.com/in/yourname"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
    >
      LinkedIn
    </a>
  </div>
</footer>
</div>
    </SectionContext.Provider>
  );
}