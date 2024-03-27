/**
 *  Function random 10 characters number
 */
export const generateRandomNumbers = () => {
  return Math.random().toString().slice(2, 12);
};
