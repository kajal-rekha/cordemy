export const getTransition = (
  delay = 0,
  duration = 0.5,
  ease = "easeInOut"
) => {
  return {
    delay,
    duration,
    ease,
  };
};

export const shutterDown = () => {
  return {
    from: { y: 200 },
    to: { y: 0 },
  };
};

export const shutterUp = () => {
  return {
    from: { y: 200, opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
};
