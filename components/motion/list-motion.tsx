import * as React from "react";
import { motion, useInView } from "framer-motion";

interface ListMotionProps {
  children: React.ReactNode;
  className?: string;
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export const ListMotion: React.FC<ListMotionProps> = ({
  children,
  className,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      animate={isInView ? "visible" : "hidden"}
      variants={list}
      className={className}
      ref={ref}
      transition={{ duration: 1 }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
};
