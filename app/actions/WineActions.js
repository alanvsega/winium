import {
  WINE_REQUEST,
  WINE_SUCCESS,
  WINE_LIST_SUCCESS,
  WINE_REVIEWS_SUCCESS,
  WINE_DASHBOARD_LIST_SUCCESS,
  WINE_MESSAGE,
  WINE_ERROR,
} from '../constants/Actions';

import Requester from '../utils/Requester';

export const request = (payload) => {
  return {
    type: WINE_REQUEST,
    payload,
  }
}

export const receive = (type, payload, messageType = 0) => {
  return {
    type,
    payload,
    messageType,
  }
}

export const fail = (payload) => {
  return {
    type: WINE_ERROR,
    payload,
  }
}

export const getWines = (search) => async (dispatch) => {
  try {
    dispatch(request(true));

    let response = await Requester.get('wines?page=1&limit=120&search=' + search);

    dispatch(receive(WINE_LIST_SUCCESS, response.data.wines));
  }
  catch(e) {
    console.log('Error WineActions/getWines', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const getWineReviews = (wineId) => async (dispatch) => {
  try {
    dispatch(request(true));

    let response = await Requester.get('reviews/wine/' + wineId);

    dispatch(receive(WINE_REVIEWS_SUCCESS, response.data.reviews));
  }
  catch(e) {
    console.log('Error WineActions/getWineReviews', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const postWine = (data) => async (dispatch) => {
  try {
    dispatch(request(true));

    await Requester.postAuthenticated('wine', data);

    dispatch(receive(WINE_MESSAGE, 'The wine was added. Thank you.', 2));
  }
  catch(e) {
    console.log('Error WineActions/postWine', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const postReview = (data) => async (dispatch) => {
  try {
    dispatch(request(true));

    await Requester.postAuthenticated('review', data);

    dispatch(receive(WINE_MESSAGE, 'Your review was submited. Thank you.', 3));
  }
  catch(e) {
    console.log('Error WineActions/postReview', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}

export const getDashboardWines = (country) => async (dispatch) => {
  try {
    dispatch(request(true));

    let response = await Requester.get('wines/top' + (country ? '?country=' + country : ''));

    dispatch(receive(WINE_DASHBOARD_LIST_SUCCESS, response.data.wines));
  }
  catch(e) {
    console.log('Error WineActions/getWines', e);
    dispatch(fail(e && e.response && e.response.data ? e.response.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}
