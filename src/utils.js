export const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');
export const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
