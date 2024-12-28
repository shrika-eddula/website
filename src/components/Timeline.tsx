import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2023",
    title: "Software Engineering Intern",
    company: "Company Name",
    description: "Worked on full-stack development projects using modern technologies.",
  },
  // Add more timeline items
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-50" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">My Journey</h2>
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-sky-600 rounded-full" />
                <div className="w-0.5 h-full bg-sky-100" />
              </div>
              <div className="flex-1 pb-12">
                <div className="text-sm text-sky-600 font-medium mb-1">{item.year}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <div className="text-gray-700 mb-2">{item.company}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};