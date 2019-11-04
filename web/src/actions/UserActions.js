import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../src/constants/Actions';

export const request = (payload) => {
  return {
    type: USER_REQUEST,
    payload
  }
}

export const receive = (type) => {
  return {
    type
  }
}

export const automaticLogin = () => {
  return async (dispatch) => {
    try {
    }
    catch(e) {
    }
  }
}

export const requestLogin = (data) => {
  return async (dispatch) => {
    try {
    }
    catch(e) {
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
  }
}
