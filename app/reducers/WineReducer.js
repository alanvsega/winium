import Immutable from 'seamless-immutable';

import {
  WINE_REQUEST,
  WINE_SUCCESS,
  WINE_LIST_SUCCESS,
  WINE_REVIEWS_SUCCESS,
  WINE_ERROR,
} from '../constants/Actions';

const initialState = Immutable({
  loading: false,
  message: null,
  selected: null,
  selectedReviews: null,
  list: null,
});

export default wine = (state = initialState, action) => {
  switch (action.type) {
    case WINE_REQUEST: {
      return state.merge({
        loading: action.payload,
      })
    }
    case WINE_SUCCESS: {
      return state.merge({
        loading: false,
        selected: action.payload,
      })
    }
    case WINE_LIST_SUCCESS: {
      return state.merge({
        loading: false,
        list: action.payload,
      })
    }
    case WINE_REVIEWS_SUCCESS: {
      return state.merge({
        loading: false,
        selectedReviews: action.payload,
      })
    }
    case WINE_ERROR: {
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
  return state.wine.loading;
}

export const getSelected = (state) => {
  return state.wine.selected;
}

export const getList = (state) => {
  return state.wine.list;
}

export const getSelectedReviews = (state) => {
  return state.wine.selectedReviews;
}
