export const fade = {
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 3, staggerChildren: 0.25 },
  },
};

export const slide = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.5, staggerChildren: 0.2, type: 'spring', stiffness: 80 },
  },
};

export const slideFromLeft = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5, delay: 1.5, type: 'spring', stiffness: 50 },
  },
};

export const headerAnimation = {
  hidden: {
    y: -50,
    scale: 0.8,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, delay: 1 },
  },
};
