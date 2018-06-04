export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const template1 = (key, value) => {
  return `${key}: ${value}`;
};

export const template2 = (key, value) => {
  return `${key}: From ${value[0]} To ${value[1]}`;
};
export const template3 = (key, value) => {
  let joinedValue = value.join(" or ");
  return `${key}: ${joinedValue}`;
};
