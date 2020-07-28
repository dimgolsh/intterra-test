export const checkObj = objectToCheck => {
  return Object.entries(objectToCheck).length === 0;
};

export const filterObj = (item, { column, value }) => {
  return column in item ? item[column] == value : item;
};
