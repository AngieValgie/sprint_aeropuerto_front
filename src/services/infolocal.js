export const goToLocal = (data) => {
  localStorage.setItem("InfoTrip", JSON.stringify(data));
};

export const getInfoLocal = () => {
  return JSON.parse(localStorage.getItem("InfoTrip")) || {};
};
