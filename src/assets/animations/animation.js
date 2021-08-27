export const fade = {
  hidden: {
    opacity: 0,
  },
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

export const showNavigation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5, delay: 2, type: 'spring', stiffness: 50 },
  },
};
