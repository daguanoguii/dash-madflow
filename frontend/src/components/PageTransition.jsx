import { motion } from "framer-motion";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: -40, x: 0 }}
      transition={{ duration: 0.15 }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};