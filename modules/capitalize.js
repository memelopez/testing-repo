// capitalize first letter
const capitalize = (str) => {
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  return result;
};

export default capitalize;