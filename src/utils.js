const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export {
  isEven,
  getRandomValue,
};
