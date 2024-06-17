// const quantityCount = (state,id) =>{

// }

export const isInCard = (state, id) => {
  const res = state.selectedItems.find((item) => item.id === id);
  return res;
};
