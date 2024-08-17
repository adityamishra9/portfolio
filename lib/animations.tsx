export const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { duration: 0.05 * index } }),
};
