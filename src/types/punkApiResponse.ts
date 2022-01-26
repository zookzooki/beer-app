import { MouseEvent } from 'react';

export interface DataResponseType<T> {
  data: T;
  index: number;
  originalEvent: MouseEvent;
}

export interface ItemCardType {
  id: string;
  name: string;
  image_url: string;
  description: string;
}
