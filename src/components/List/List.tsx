import React, { useEffect, useState, useContext } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

import './List.css';
import { load } from '../../api/punkapi';
import { FavouritesContext } from '../../context/FavouritesContext';
import { ItemCardType, DataResponseType } from '../../types/punkApiResponse';

export const List = () => {
  const [list, setList] = useState<Array<ItemCardType>>([]);
  const [first, setFirst] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { favouritesList, changeFavourite } = useContext(FavouritesContext);

  const favouriteElement = (rowData: ItemCardType) => (
    <i className={`pi ${favouritesList[rowData.id]
      ? 'pi-star-fill'
      : 'pi-star'}`}
    />
  );

  const nameElement = (rowData: ItemCardType) => (
    <Link to={`/${rowData.id}`}>
      { rowData.name }
    </Link>
  );

  useEffect(() => {
    load().then((data) => {
      setList(JSON.parse(data));
      setIsLoaded(true);
    });
  }, []);

  return isLoaded
    ? (
      <div className="users-list">
        <DataTable
          value={list}
          paginator
          rows={10}
          first={first}
          onPage={(e) => setFirst(e.first)}
          responsiveLayout="scroll"
          onRowClick={(rowData: DataResponseType<ItemCardType>) => changeFavourite && changeFavourite(rowData.data.id)}
        >
          <Column
            align="right"
            body={favouriteElement}
          />
          <Column header="Марка" body={nameElement} />
        </DataTable>
      </div>
    )
    : <ProgressSpinner />;
};
