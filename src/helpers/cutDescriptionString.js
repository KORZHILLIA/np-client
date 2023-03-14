const cutDescriptionString = (description) => {
  const requiredIdx = description.indexOf(":");
  return description.slice(0, requiredIdx);
};

export default cutDescriptionString;
