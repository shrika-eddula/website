import { motion } from "framer-motion";

export const ScrapbookFrames = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top section (above text) */}
      <motion.div
        initial={{ rotate: -3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 left-8 w-24 aspect-square bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
          alt="Coding on laptop"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 4, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-16 right-24 w-28 aspect-[3/4] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1550439062-609e1531270e" 
          alt="Tech devices"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -2, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-32 left-1/4 w-24 aspect-[16/9] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd" 
          alt="Code on screen"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      {/* Middle section (around text) */}
      <motion.div
        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[400px] left-8 w-24 aspect-square bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
          alt="Woman with laptop"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
      
      <motion.div
        initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-[450px] right-8 w-28 aspect-[3/4] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Laptop computer"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
      
      <motion.div
        initial={{ rotate: -3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-[500px] left-1/4 w-28 aspect-[16/9] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
          alt="Circuit board"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      {/* Bottom section */}
      <motion.div
        initial={{ rotate: 4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 4, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-[520px] right-1/4 w-24 aspect-square bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
          alt="Programming monitor"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -2, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-[580px] left-1/3 w-20 aspect-[4/3] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
          alt="Person using MacBook"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-[620px] right-1/3 w-24 aspect-[3/2] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Woman using laptop"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -4, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-[650px] left-16 w-20 aspect-square bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
          alt="White robot"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 6, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 6, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute top-[680px] right-16 w-28 aspect-[16/9] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
          alt="Matrix scene"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-[700px] right-20 w-24 aspect-[4/3] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
          alt="Video screens display"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute top-[720px] left-1/4 w-28 aspect-[3/2] bg-white p-1 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
          alt="People with laptops"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
    </div>
  );
};