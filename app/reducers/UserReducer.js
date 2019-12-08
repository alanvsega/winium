import Immutable from 'seamless-immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_ERROR,
} from '../constants/Actions';

const initialState = Immutable({
  loading: false,
  logged: false,
  data: null,
  message: null,
});

export default user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state.merge({
        loading: action.payload,
      })
    }
    case LOGIN_SUCCESS: {
      return state.merge({
        loading: false,
        logged: true,
        data: action.payload,
      })
    }
    case LOGOUT_SUCCESS: {
      return state.merge({
        loading: false,
        logged: false,
        data: null,
      })
    }
    case LOGIN_ERROR: {
      return state.merge({
        message: action.payload,
      })
    }
    default: {
      return state.merge({
        message: null,
      })
    }
  }
}

export const isLoading = (state) => {
  return state.user.loading;
}

export const isLogged = (state) => {
  return state.user.logged;
}

export const getMessage = (state) => {
  return state.user.message;
}

export const getUser = (state) => {
  return state.user.data;
}
