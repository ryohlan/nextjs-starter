export interface ActionTypes { type: 'COMMON_STORE#SET_TEXT'; payload: string; }

const initial: CommonStore = {
  text: '',
};

module.exports = (state: CommonStore = initial, action: ActionTypes): CommonStore => {
  switch (action.type) {
    case 'COMMON_STORE#SET_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    default: return state;
  }
};
