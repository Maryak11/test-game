const minValue: number = 1;
const maxValue: number = 10;

export default (): number => {
  let rand: number = minValue + Math.random() * (maxValue + minValue - minValue);
  return Math.floor(rand);
};
