import {
  SET_WINE_LIST,
  ADD_WINE
} from '../constants/Actions';

const initialState = [];

const wineList = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINE_LIST: {
      return state = action.payload;
    }
    case ADD_WINE: {
      return state.push(action.payload);
    }
    default: {
      return state;
    }
  }
};

export default wineList;
