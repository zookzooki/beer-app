const base = 'https://api.punkapi.com/v2/beers';

export const load = (url: string = '') => fetch(`${base}/${url}`, {
  method: 'GET',
}).then((resp) => resp.text());
