import produce from 'immer';

import { TO_BE_FAVOURITE, NOT_TO_BE_FAVOURITE } from '../constants/actions/list';
import { ListAction } from '../types/actions';
import { ListState } from '../types/state';

const initialState = () => {
  const state = {
    isFavourite: {},
  };

  const fromLS = JSON.parse(<string>window?.localStorage?.getItem('beer'));
  return fromLS ? fromLS.list : state;
};

const toBeFavourite = (draft: ListState, id: string, isFavourite:boolean) => {
  draft.isFavourite[id] = isFavourite;
  return draft;
};

export default (state = initialState(), action: ListAction) => produce(
  state,
  (draft: ListState) => {
    switch (action.type) {
      case TO_BE_FAVOURITE: return toBeFavourite(draft, action.id, true);
      case NOT_TO_BE_FAVOURITE: return toBeFavourite(draft, action.id, false);
      default: return state;
    }
  },
);
