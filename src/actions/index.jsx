export const incCount = () => {
  return {
    type: "INCREMENT",
  };
};

export const decCount = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCount = () => {
  return {
    type : "RESET"
  }
};
