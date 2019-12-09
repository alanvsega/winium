import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_ERROR,
} from '../constants/Actions';

import Requester from '../utils/Requester';
import Storage from '../utils/Storage';

export const request = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload
  }
}

export const receive = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export const fail = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload,
  }
}

export const getLogin = (data) => async (dispatch) => {
  try {
    dispatch(request(true));

    let response = null;
    let user = null;

    // Regular login
    if(data) {
      response = await Requester.post('login', data);

      user = response.data.user;
      await Storage.set('user', user);
      await Storage.set('token', response.data.token);
    }
    else {
      user = await Storage.get('user');

      if(!user) {
        dispatch(request(false));
        return;
      }
    }

    dispatch(receive(user));
  }
  catch(e) {
    console.log('Error UserActions/getLogin', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const postRegister = (data) => async (dispatch) => {
  try {
    dispatch(request(true));

    let response = await Requester.post('user', data);

    await Storage.set('user', response.data.user);
    await Storage.set('token', response.data.token);

    dispatch(receive(response.data.user));
  }
  catch(e) {
    console.log('Error UserActions/postRegister', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const applyLogout = () => async (dispatch) => {
  try {
    dispatch(request(true));

    await Storage.unset('user');
    await Storage.unset('token');

    dispatch({ type: LOGOUT_SUCCESS });
  }
  catch(e) {
    console.log('Error UserActions/applyLogout', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}
