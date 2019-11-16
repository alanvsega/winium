import Immutable from 'seamless-immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants/Actions';

const initialState = Immutable({
  loading: false,
  logged: false,
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state.merge({
        loading: action.payload,
      });
    }
    case LOGIN_SUCCESS: {
      return state.merge({
        loading: false,
        logged: true,
      });
    }
    case LOGOUT_SUCCESS: {
      return state.merge({
        loading: false,
        logged: false,
      });
    }
    default: {
      return state;
    }
  }
};

export const isLoading = (state) => state.user.loading;

export const isLogged = (state) => state.user.logged;

export default user;
