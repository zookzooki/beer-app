import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListState } from '../redux/types/state';
import { notToBeFavourite, toBeFavourite } from '../redux/actions/listAction';

interface Props {
  children: ReactNode;
}

interface RootState {
  list: ListState;
}

export interface FavouritesContextState {
  favouritesList: any;
  changeFavourite: (id: string) => void;
}

const FavouritesContext = React.createContext<Partial<FavouritesContextState>>({});

const FavouritesContextProvider = ({ children }: Props) => {
  const favouritesList = useSelector((state: RootState) => state.list.isFavourite);
  const dispatch = useDispatch();

  const changeFavourite = (id: string) => {
    if (favouritesList[id]) {
      dispatch(notToBeFavourite(id));
    } else {
      dispatch(toBeFavourite(id));
    }
  };

  return (
    <FavouritesContext.Provider value={{
      favouritesList,
      changeFavourite,
    }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContextProvider, FavouritesContext };
