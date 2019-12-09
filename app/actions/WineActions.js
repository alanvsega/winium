import {
  WINE_REQUEST,
  WINE_SUCCESS,
  WINE_LIST_SUCCESS,
  WINE_REVIEWS_SUCCESS,
  WINE_ERROR,
} from '../constants/Actions';

import Requester from '../utils/Requester';

export const request = (payload) => {
  return {
    type: WINE_REQUEST,
    payload
  }
}

export const receive = (type, payload) => {
  return {
    type,
    payload
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
    dispatch(fail(e && e.data ? e.data : 'Something went wrong.'));
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
    dispatch(fail(e && e.data ? e.data : 'Something went wrong.'));
    dispatch(request(false));
  }
}
