import { motion } from "framer-motion";

export const ScrapbookFrames = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute top-12 left-12 w-48 aspect-square bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute top-24 right-12 w-56 aspect-[3/4] bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute bottom-24 left-1/4 w-64 aspect-[16/9] bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
          alt="Circuit board"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 4, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-48 right-1/4 w-52 aspect-square bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute top-24 left-1/3 w-44 aspect-[4/3] bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute bottom-36 right-1/3 w-48 aspect-[3/2] bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute top-96 left-16 w-40 aspect-square bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute top-72 right-16 w-52 aspect-[16/9] bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute bottom-48 right-20 w-44 aspect-[4/3] bg-white p-3 shadow-lg rounded-sm"
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
        className="absolute top-[32rem] left-1/4 w-56 aspect-[3/2] bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
          alt="People with laptops"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -2, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute bottom-12 left-1/3 w-48 aspect-square bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
          alt="Laptop on glass table"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 4, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 4, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute top-[28rem] right-1/4 w-40 aspect-[3/4] bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
          alt="Person with light bulb"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: -3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-72 right-1/3 w-52 aspect-[16/9] bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
          alt="MacBook with code"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute top-[24rem] left-20 w-44 aspect-square bg-white p-3 shadow-lg rounded-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" 
          alt="Apple Watch"
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
    </div>
  );
};