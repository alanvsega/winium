import {
  ADD_WINE,
  SET_WINE_LIST
} from '../constants/Actions';

const addWine = (wine) => ({
  type: ADD_WINE,
  payload: wine
});

const setWineList = (wines) => ({
  type: SET_WINE_LIST,
  payload: wines
})

export {
    addWine,
    setWineList,
}