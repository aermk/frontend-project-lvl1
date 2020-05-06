export default (min, max) => {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
};
