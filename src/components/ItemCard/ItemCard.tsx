import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';

import './ItemCard.css';
import { load } from '../../api/punkapi';
import { FavouritesContext } from '../../context/FavouritesContext';

interface Params {
  id: string;
}

interface CardType {
  name?: string;
  image_url?: string;
  description?: string;
}

const ItemCard = () => {
  const params = useParams<Params>();
  const [info, setInfo] = useState<CardType>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { favouritesList, changeFavourite } = useContext(FavouritesContext);

  useEffect(() => {
    load(params.id).then((data) => {
      setInfo(JSON.parse(data)[0]);
      setIsLoaded(true);
    });
  }, []);

  const header = (
    <div>
      <img className="picture" alt="Card" src={info.image_url} />
    </div>
  );

  const title = (
    <div>
      <i
        className={`pi ${favouritesList[params.id] ? 'pi-star-fill' : 'pi-star'}`}
        onClick={() => changeFavourite && changeFavourite(params.id)}
      />
      <span className="title__name">
        {info.name}
      </span>
    </div>
  );

  return (
    isLoaded
      ? (
        <Card className="card" title={title} header={header}>
          <p className="m-0">{info.description}</p>
        </Card>
      )
      : <ProgressSpinner />
  );
};

export default ItemCard;
