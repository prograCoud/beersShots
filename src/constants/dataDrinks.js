import images from './images';

const wines = [
  {
    title: 'Ron',
    price: '₡2.700',
    tags: 'Centenario | Flor de Caña 7 | Bacardi | Capitan Morgan',
  },
  {
    title: 'Vodka',
    price: '₡2.500',
    tags: 'Smirnoff',
  },
  {
    title: 'Whisky',
    price: '₡2.700',
    tags: 'Jhonny Walker Rojo | Dewars | J&B',
  },
  {
    title: 'Whisky 12 años',
    price: '₡3.800',
    tags: 'Old Parr | Jhonny Walker Negro | Chivas Regal',
  },
  {
    title: 'Whisky 2X',
    price: '₡3.500',
    tags: 'Jameson',
  },
  {
    title: 'Gin Tonic',
    price: '₡5.000',
    tags: '2 X 1',
  },
  {
    title: 'Alitas 12 unidades',
    price: '₡8.000',
    tags: 'Buffalo | Mostaza Miel | BBQ',
  },
  {
    title: 'Alitas 24 unidades',
    price: '₡15.000',
    tags: 'Buffalo | Mostaza Miel | BBQ',
  },
];

const promocionesBocas = [
  {
    title: 'Alitas 12 unidades',
    price: '₡8.000',
    tags: 'Buffalo | Mostaza Miel | BBQ',
  },
  {
    title: 'Alitas 24 unidades',
    price: '₡15.000',
    tags: 'Buffalo | Mostaza Miel | BBQ',
  },
];

const cocktails = [
  {
    title: 'Balde de Bavaria',
    price: '₡7.000',
    tags: '4 Cervezas',
  },
  {
    title: 'Balde de Corona',
    price: '₡8.500',
    tags: '4 Cervezas',
  },
  {
    title: 'Balde de Heineken',
    price: '₡7.000',
    tags: '4 Cervezas',
  },
  {
    title: 'Balde de Cervezas Nacionales',
    price: '7.500',
    tags: '6 Cervezas',
  },

];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, bocas, promocionesBocas, awards };
