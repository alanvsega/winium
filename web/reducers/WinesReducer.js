import Immutable from 'seamless-immutable';

import {
  SET_WINE_LIST
} from '../constants/Actions';

const initialState = Immutable([]);

export default wine = (state = initialState, action) => {
    switch (action.type) {
      case SET_WINE_LIST: {
        return state.merge({
          loading: false,
          logged: false,
        })
      }
      default: {
        return state;
      }
    }
}
