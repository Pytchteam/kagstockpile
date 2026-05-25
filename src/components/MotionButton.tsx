import React from 'react';
import { motion } from 'motion/react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MotionButtonProps extends ButtonProps {
  children?: React.ReactNode;
  pulse?: boolean;
}

export default function MotionButton({ children, pulse, className, ...props }: MotionButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          pulse && "after:absolute after:inset-0 after:bg-white/20 after:animate-pulse",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {pulse && (
          <motion.div
            animate={{
              left: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-20"
          />
        )}
      </Button>
    </motion.div>
  );
}
