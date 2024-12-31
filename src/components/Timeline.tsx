import { motion } from "framer-motion";

export const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Shrika Eddula</h1>
        <div className="text-muted-foreground">
          <p>shrika@mit.edu | Cambridge, MA</p>
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Work Experience</h2>
        
        <div className="space-y-8">
          {/* Apple */}
          <div className="ml-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Apple | ML Software Engineering Intern</h3>
              <span className="text-muted-foreground">June 2024 – August 2024</span>
            </div>
            <p className="text-muted-foreground mb-2">Vision Products Group | Seattle, WA</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Prototyped Human Computer Interfaces for the R&D wing of Vision Products Group, leveraging AI and augmented reality</li>
              <li>Developed an entirely new application paradigm which demanded rapid experimentation and prototyping</li>
            </ul>
          </div>

          {/* US Army */}
          <div className="ml-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">United States Army | Machine Learning Intern</h3>
              <span className="text-muted-foreground">June 2023 – August 2023</span>
            </div>
            <p className="text-muted-foreground mb-2">Embedded Machine Learning | Natik, MA</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Designed autonomous drone device for determining consciousness state of wounded warfighters</li>
              <li>Developed tinyML algorithms using pose detection, computer vision, speech recognition, and NLP</li>
              <li>Prototyped hardware components on Nvidia Jetson Nano</li>
            </ul>
          </div>

          {/* MIT Media Lab */}
          <div className="ml-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">MIT Media Lab | Undergraduate Researcher</h3>
              <span className="text-muted-foreground">April 2023 – June 2024</span>
            </div>
            <p className="text-muted-foreground mb-2">Camera Culture Group | Boston, MA</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Reconstructing 3D models from satellite imagery using Neural Radiance Fields (NeRF)</li>
              <li>Developed Eulerian Video Magnification + Senior Fusion approach to forest fire prediction</li>
            </ul>
          </div>

          {/* Previous Experience Summary */}
          <div className="ml-4 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Previous Experience</h3>
              <span className="text-muted-foreground">2019 – 2022</span>
            </div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Sectra Inc | Software Engineering Intern - Medical Imaging IT Cybersecurity</li>
              <li>avoMD | Software Engineering Intern - HealthTech Startup</li>
              <li>University of North Texas | Undergraduate Researcher, Lab Manager, and Project Leader</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills & Interests</h2>
        <div className="ml-4">
          <p className="mb-4">
            <span className="font-semibold">Technical Skills:</span> Python, Computer Vision, NLP, Machine Learning & AI, R, C++/C, Arduino, Numpy, PyTorch, MATLAB, Algorithms & DS, Databases, JavaScript, HTML, CSS, SQL, React, Node.js, Linux, Tensorflow, AWS, SageMaker, Keras
          </p>
          <p>
            <span className="font-semibold">Interests:</span> Varsity Division 3 Sailing, Weightlifting, Language Learning, Backpacking, Hiking, Camping, Poetry, Travel
          </p>
        </div>
      </motion.section>

      {/* Honors Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Honors & Achievements</h2>
        <ul className="ml-4 list-disc space-y-2 pl-6">
          <li>Y Combinator Startup Challenge 2nd Place</li>
          <li>Published Researcher: 1st author of 1 & co-author of 8 papers in international peer-reviewed journals</li>
          <li>Barry M. Goldwater Scholar</li>
          <li>International Science & Engineering Fair (ISEF) Finalist</li>
          <li>United States National Chemistry Olympiad Semifinalist</li>
          <li>Summer Research Scholarship: Awarded $10K in funding</li>
          <li>ICDC (International DECA Finalist)</li>
        </ul>
      </motion.section>
    </div>
  );
};