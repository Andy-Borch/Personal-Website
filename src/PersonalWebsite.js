import React, { createContext, useState, useEffect, useRef } from 'react'; // Import useRef
import { Card, CardContent } from './card'; // Ensure the 'card' component is imported correctly
import { ExternalLink } from 'lucide-react';
// Import necessary hooks from framer-motion
import { motion, useScroll, useTransform } from 'framer-motion';
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
    'certifications',
    'supercomputing',
  ]);


  // --- Refs for each section ---
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const supercomputingRef = useRef(null);
  const certificationsRef = useRef(null);

  // --- Scroll and Transform logic for EACH section ---

  // Helper function to create scroll/transform logic
  const useSectionScale = (ref) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      // Offset determines when the animation starts and ends relative to the viewport.
      // "start end": Animation starts when the top of the target hits the bottom of the viewport.
      // "end start": Animation ends when the bottom of the target hits the top of the viewport.
      offset: ["start end", "end start"]
    });

    // Map scrollYProgress (0 to 1) to scale (0.9 -> 1 -> 0.9)
    // It scales up to 1 when the center of the section is in the center of the viewport (scrollYProgress = 0.5)
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    return { scale };
  };

  // Apply the hook to each section
  const { scale: homeScale } = useSectionScale(homeRef);
  const { scale: aboutScale } = useSectionScale(aboutRef);
  const { scale: experienceScale } = useSectionScale(experienceRef);
  const { scale: projectsScale } = useSectionScale(projectsRef);
  const { scale: educationScale } = useSectionScale(educationRef);
  const { scale: hobbiesScale } = useSectionScale(hobbiesRef);
  const { scale: supercomputingScale } = useSectionScale(supercomputingRef);
  const { scale: certificationsScale } = useSectionScale(certificationsRef);


  const projectData = [
    { name: "Bubble", time: 35 },
    { name: "Quick", time: 8 },
    { name: "Heap", time: 12 },
    { name: "Merge", time: 10 },
  ];

  // Smooth scroll to sections when a link is clicked (Keep this)
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      const clickHandler = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) { // Check if element exists
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        }
      };
      link.addEventListener('click', clickHandler);

      // Cleanup function to remove the specific handler
      return () => {
        link.removeEventListener('click', clickHandler);
      };
    });

    // No dependencies needed if querySelectorAll is run once on mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <SectionContext.Provider value={sections}>
      {/* Ensure scroll-smooth is present for the anchor link scrolling */}
      <div className="bg-gray-600 text-gray-900 scroll-smooth">
        {/* Header Section with navigation links (Keep as is) */}
        <header className="fixed w-full bg-slate-900 shadow-md z-10 top-0 left-0 transition-all duration-300">
          <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-teal-200 hover:text-teal-400 transition-colors duration-300">Andy Borch</h1>
            <ul className="flex space-x-6">
               {/* Navigation Links - No change needed here */}
                <li><a href="#home" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Home<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#about" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">About<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#projects" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Projects<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#experience" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Experience<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#education" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Education<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#supercomputing" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Supercomputing<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#certifications" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Certifications<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
                <li><a href="#hobbies" className="text-lg text-gray-400 hover:text-teal-400 transition-colors duration-300 relative">Hobbies<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300"></span></a></li>
            </ul>
          </nav>
        </header>

        {/* --- Apply ref and style={{ scale }} to each section --- */}

        {/* Home Section */}
        <motion.section
          ref={homeRef}
          id="home"
          style={{ scale: homeScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-100 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content Section */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-slate-200 mb-4">Welcome!</h1>
              <p className="text-2xl text-gray-300 mb-6">High Performance Computing | Scientific Computing | Quantum Computing</p>
            </div>
            {/* Image/Icon Section */}
            <div className="flex justify-center">
              <img
                src="/SC.png"
                alt="Profile"
                className="w-45 h-45 rounded-full shadow-md border-4 border-blue-500 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          ref={aboutRef}
          id="about"
          style={{ scale: aboutScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Image/Icon Section */}
              <div className="flex justify-center">
              <img
                src="/Profile-Pic.png"
                alt="Profile"
                className="w-1/2 h-1/2 rounded-full shadow-md border-4 border-blue-500 hover:scale-105 transition-transform"
              />
            </div>
             {/* Text Content */}
              <div className="text-left rounded-lg shadow-xl p-8 bg-slate-800">
                {/* ... existing about text content ... */}
                <h2 className="text-3xl font-semibold text-gray-300 mb-4">About Me</h2>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Computer Science Student Focused on HPC</h3>
                <p className="text-lg mb-4">I'm Great.</p>
                <p className="text-lg mb-4">I do cool stuff</p>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-yellow-300">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">C++</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">Python</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">Machine Learning</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">HPC Tools</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-purple-300">Problem Solver</h4>
                      <p className="text-md">I enjoy tackling complex challenges and finding elegant solutions.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-purple-300">Continuous Learner</h4>
                      <p className="text-md">Always exploring new technologies and improving my skills.</p>
                    </div>
                </div>
              </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          id="projects"
          style={{ scale: projectsScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline col-span-full">Featured Projects</h2>
            {/* Project 1 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-800 flex flex-col">
                {/* ... existing project 1 content ... */}
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/640x360" alt="Project 1 Placeholder" className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fastest Algorithm Prediction</h3>
                  <p className="text-md mb-4">A machine learning program that predicts the fastest sorting algorithm based on certain features.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Numpy</span>
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">Data Generation/Manipulation</span>
                  </div>
                  <a href="https://github.com/Andy-Borch/Fastest-Algorithm-Predictor" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-teal-400 transition-colors duration-300">View Code</a>
            </div>
            {/* Project 2 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-800 flex flex-col">
                {/* ... existing project 2 content ... */}
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/640x360/4A5568" alt="Project 2 Placeholder" className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Image Proccesor</h3>
                  <p className="text-md mb-4">Application that checks image file formats and creates checksums, conversions, and correlations</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">C++</span>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Valgrind</span>
                  </div>
                  <a href="#" className="text-teal-400 hover:underline mt-auto">View Code (ADD LINK HERE)</a>
            </div>
            {/* Project 3 */}
            <div className="relative rounded-lg shadow-lg p-6 bg-slate-800 flex flex-col">
                {/* ... existing project 3 content ... */}
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/640x360/718096" alt="Project 3 Placeholder" className="object-cover w-full h-full" />
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

{/* Experience Section */}
<motion.section
          ref={experienceRef}
          id="experience"
          style={{ scale: experienceScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline col-span-full">Work Experience</h2>
             {/* Experience 1 */}
              <div className="relative rounded-lg shadow-xl p-8 bg-slate-800">
                {/* ... existing experience 1 content ... */}
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold text-teal-200">Summer Intern</h4>
                    <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">May, 2025 - Present</div>
                </div>
                <h3 className="text-xl font-lg text-indigo-400 mb-4">Oak Ridge National Lab</h3>
                <ul className="text-lg mb-4 list-disc pl-5 text-left">
                    <li>Great at what I do.</li>
                    <li>I build innovative solutions.</li>
                </ul>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">Job Schedulers</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">Slurm</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">HPC</span>
                      <span className="bg-blue-200 text-blue-900 text-md font-medium px-2.5 py-0.5 rounded">Linux</span>
                    </div>
                </div>
              </div>
             {/* Experience 2 */}
              <div className="relative rounded-lg shadow-xl p-8 bg-slate-800">
                {/* ... existing experience 2 content ... */}
                  <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-semibold text-teal-200">HPC Research Assistant</h4>
                      <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">Summer 2024</div>
                  </div>
                  <h3 className="text-xl font-lg text-green-500 mb-4">Colorado State University</h3>
                  <ul className="text-lg mb-4 list-disc pl-5 text-left">
                      <li>Great at what I do.</li>
                      <li>I build innovative solutions.</li>
                  </ul>
                  <div className="mb-4">
                      <h4 className="text-lg font-semibold text-yellow-300 mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">NVIDIA Jetson Nano</span>
                          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Tensorflow</span>
                          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Python</span>
                          <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Benchmarking Tools</span>
                      </div>
                  </div>
              </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          id="education"
          style={{ scale: educationScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline col-span-full">Academic Background</h2>
            {/* Education 1 */}
            <div className="relative rounded-lg shadow-xl p-8 bg-slate-800">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-15 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold">BS</div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
                <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">2021-2025</div>
              </div>
              <h4 className="text-lg text-green-500 mb-2">Colorado State University</h4>
              <p className="text-md mb-4">Focused on software engineering and HPC areas.</p>
              <ul className="list-disc pl-5 text-left">
                <li>Relevant coursework: Data Structures, Algorithms, Operating Systems, Machine Learning</li>
              </ul>
            </div>
            {/* Education 2 (Example - you can duplicate and modify for more entries) */}
              <div className="relative rounded-lg shadow-xl p-8 bg-slate-800">
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-15 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">MS</div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <div className="bg-slate-300 text-slate-700 rounded-full px-3 py-1 text-sm font-medium">2025 - 2027 (Expected)</div>
              </div>
              <h4 className="text-lg text-green-500 mb-2">University of Example</h4>
              <p className="text-md mb-4">Exploring advanced analytics and machine learning techniques.</p>
              <ul className="list-disc pl-5 text-left">
                <li>Relevant coursework: Statistical Modeling, Big Data, Deep Learning</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Supercomputing Experience */}
        <motion.section
          ref={supercomputingRef}
          id="supercomputing"
          style={{ scale: supercomputingScale }} // Apply dynamic scale
          className="min-h-screen flex items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl" // Added origin-center
          // Removed fadeTransition props
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline col-span-full">My Adventures in Supercomputing</h2>
              <div className="rounded-lg shadow-xl p-8 bg-slate-800">
                <p className="text-lg mb-4">
                    I've attended to supercomputing conferences, SC24 and SC25, where I completed workshops, tutorials, and hands-on sessions. I learned about the latest advancements in high-performance computing, parallel programming, and data analysis techniques. These are some pictures of cool stuff I found while there.
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Topics Covered In Workshops: Slurm, MPI, OpenMP, CUDA, and more.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/640x360/2E3748" alt="Supercomputer 1 Placeholder" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
                    <img src="https://via.placeholder.com/640x360/4A5568" alt="Supercomputer 2 Placeholder" className="object-cover w-full h-full" />
                </div>
              </div>
          </div>
        </motion.section>


{/* Certifications Section */}
<motion.section
  ref={certificationsRef}
  id="certifications"
  style={{ scale: certificationsScale }}
  className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl"
>
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline">My Certifications</h2>
    <div className="flex flex-col gap-8">
      {/* AWS Certification (Image on Left) */}
      <div className="bg-teal-100 rounded-lg shadow-md p-6 w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center">
        <img
          src="/aws-certified-cloud-practitioner.png"
          alt="AWS Certified Cloud Practitioner"
          className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-4 shadow-md"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">AWS Certified Cloud Practitioner</h3>
          <p className="text-gray-600 mb-2">Demonstrates foundational knowledge of AWS services and concepts.</p>
          <p className="text-sm text-gray-500">Issued: August 2023</p>
        </div>
      </div>

      {/* Google Cloud Certification (Image on Right) */}
      <div className="bg-teal-100 rounded-lg shadow-md p-6 w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center self-end">
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Google Cloud Professional Cloud Architect</h3>
          <p className="text-gray-600 mb-2">Validates expertise in designing and managing robust, scalable, and dynamic solutions on Google Cloud.</p>
          <p className="text-sm text-gray-500">Issued: November 2024</p>
        </div>
        <img
          src="/google-cloud-certified-professional-cloud-architect.png"
          alt="Google Cloud Professional Cloud Architect"
          className="w-24 h-24 rounded-full mb-4 md:mb-0 md:ml-4 shadow-md"
        />
      </div>
    </div>
  </div>
</motion.section>


{/* Hobbies Section */}
<motion.section
  ref={hobbiesRef}
  id="hobbies"
  style={{ scale: hobbiesRef }}
  className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-700 text-gray-300 origin-center rounded-xl"
>
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-gray-300 mb-8 text-center underline">Hobbies</h2>
    <div className="grid grid-cols-2 gap-6" style={{ padding: '0 10vw', rowGap: '8vw', columnGap: '8vw' }}>
      {/* First Image */}
      <div className="relative col-span-1 row-span-1">
        <img
          src="/Hobbies1.jpg"
          alt="Hobby 1"
          className="w-full h-full object-cover rounded-lg shadow-md border-4 border-gray-500 hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Second Image */}
      <div className="relative col-span-1 row-span-1">
        <img
          src="/Hobbies5.jpg"
          alt="Hobby 2"
          className="w-full h-full object-cover rounded-lg shadow-md border-4 border-gray-500 hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Third Image */}
      <div className="relative col-span-1 row-span-1">
        <img
          src="/Hobbies3.jpg"
          alt="Hobby 3"
          className="w-full h-full object-cover rounded-lg shadow-md border-4 border-gray-500 hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Fourth Image */}
      <div className="relative col-span-1 row-span-1">
        <img
          src="/Hobbies4.jpg"
          alt="Hobby 4"
          className="w-full h-full object-cover rounded-lg shadow-md border-4 border-gray-500 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</motion.section>

        {/* Footer Section (Keep as is) */}
        <footer className="p-6 bg-slate-800 text-gray-300 text-center">
            <p>&copy; 2025 Anderson Borch | All rights reserved</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Andy-Borch" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">GitHub</a>
              <a href="https://orcid.org/yourorcidid" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">ORCID</a>
              <a href="https://www.linkedin.com/in/andy-borch" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">LinkedIn</a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Last updated: May 2025</p>
        </footer>
      </div>
    </SectionContext.Provider>
  );
}