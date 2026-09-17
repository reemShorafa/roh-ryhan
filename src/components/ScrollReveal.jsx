import { motion } from "framer-motion";

export const revealUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut", delay },
  }),
};

export default function ScrollReveal({
  as = "div",
  children,
  className,
  delay = 0,
  amount = 0.22,
  ...props
}) {
  const MotionElement = motion[as] || motion.div;

  return (
    <MotionElement
      className={className}
      custom={delay}
      variants={revealUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
