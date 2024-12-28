import { motion } from "framer-motion";

const doodles = [
  {
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&q=80",
    alt: "Cute kitten doodle",
    className: "top-20 left-10 w-16 h-16 rotate-[-10deg]"
  },
  {
    src: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=100&q=80",
    alt: "Penguins doodle",
    className: "top-40 right-20 w-20 h-20 rotate-[15deg]"
  },
  {
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&q=80",
    alt: "Simple shape doodle",
    className: "bottom-32 left-1/4 w-12 h-12 rotate-[5deg]"
  }
];

export const Doodles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {doodles.map((doodle, index) => (
        <motion.img
          key={index}
          src={doodle.src}
          alt={doodle.alt}
          className={`absolute rounded-full object-cover opacity-20 dark:opacity-10 ${doodle.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.2, 0.25, 0.2], scale: [1, 1.05, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
};