import { Dispatch } from 'redux';

import { TO_BE_FAVOURITE, NOT_TO_BE_FAVOURITE } from '../constants/actions/list';

const isFavouriteAction = (id: string) => ({
  type: TO_BE_FAVOURITE,
  id,
});

const isNotFavouriteAction = (id: string) => ({
  type: NOT_TO_BE_FAVOURITE,
  id,
});

export const toBeFavourite = (id: string) => (dispatch: Dispatch) => {
  dispatch(isFavouriteAction(id));
};

export const notToBeFavourite = (id: string) => (dispatch: Dispatch) => {
  dispatch(isNotFavouriteAction(id));
};
