export const checkObj = (objectToCheck) => {
  return Object.entries(objectToCheck).length === 0;
};

export const filterObj = (item, filter) => {
 return filter.column in item ? item[filter.column]  == filter.value : item
  
};
