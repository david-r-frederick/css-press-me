const tipsReducer = (state = false, action) => {
  if (action.type === 'toggleTips') {
    return !state;
  }
  return state;
};

export default tipsReducer;