import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimationWrapperProps extends MotionProps {
  children: ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, ...motionProps }) => {
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
