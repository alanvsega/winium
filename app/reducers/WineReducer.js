import Immutable from 'seamless-immutable';

import {
  WINE_REQUEST,
  WINE_SUCCESS,
  WINE_LIST_SUCCESS,
  WINE_REVIEWS_SUCCESS,
  WINE_MESSAGE,
  WINE_ERROR,
} from '../constants/Actions';

const initialState = Immutable({
  loading: false,
  message: null,
  action: 0, // 0 = NONE ; 1 = ERROR ; 2 = WINE CREATED ; 3 = REVIEW CREATED
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
    case WINE_MESSAGE: {
      return state.merge({
        loading: false,
        message: action.payload,
        action: action.messageType,
      })
    }
    case WINE_ERROR: {
      return state.merge({
        action: 1,
        message: action.payload,
      })
    }
    default: {
      return state.merge({
        message: null,
        action: 0,
      })
    }
  }
}

export const isLoading = (state) => {
  return state.wine.loading;
}

export const getMessage = (state) => {
  return state.wine.message;
}

export const getAction = (state) => {
  return state.wine.action;
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
