import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../../constants/Actions';

export const request = (payload) => ({
  type: USER_REQUEST,
  payload,
});

export const receive = (type) => (type);

export const automaticLogin = () => (async (dispatch) => {
  try {} catch (e) {}
});

export const requestLogin = (data) => {
  return async (dispatch) => {
    try {} catch (e) {}
  }
}

export const logout = () => {
  return async (dispatch) => {}
}
