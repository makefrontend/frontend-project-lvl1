export const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

export const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isPrime = (number) => {
  if (number <= 1) return false;
  let i = 2;
  while (i <= number / 2) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};
