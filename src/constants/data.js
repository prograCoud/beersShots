import images from './images';

const wines = [
  {
    title: 'Ron',
    price: '₡2.300',
    tags: 'Centenario | Flor de Caña 7 | Bacardi | Capitan Morgan',
  },
  {
    title: 'Vodka',
    price: '₡2.000',
    tags: 'Smirnoff',
  },
  {
    title: 'Whisky',
    price: '₡2.300',
    tags: 'Jhonny Walker Rojo | Dewars | J&B',
  },
  {
    title: 'Whisky 12 años',
    price: '₡3.300',
    tags: 'Old Parr | Jhonny Walker Negro | Chivas Regal',
  },
  {
    title: 'Gin Tonic',
    price: '₡5.000',
    tags: '2 X 1',
  },
];

const bocas = [
  {
    title: 'Arroz con Camarones',
    price: '₡3.600',
    tags: 'Papas | Ensalada',
  },
  {
    title: 'Arroz con Pollo',
    price: '₡3.500',
    tags: 'Papas | Ensalada',
  },
  {
    title: 'Papas Bravas',
    price: '₡7.500',
    tags: 'Salsas a escoger',
  },
  {
    title: 'Ceviche Mixto',
    price: '₡4.600',
    tags: 'Pescado | Camaron | Pulpo',
  },
  {
    title: 'Ceviche',
    price: '₡3.800',
    tags: 'Chips | Platano',
  },
  {
    title: 'Chicken Fingers',
    price: '₡4.500',
    tags: 'Salsas a escoger',
  },

];

const cocktails = [
  {
    title: 'Balde de Bavaria',
    price: '₡6.500',
    tags: '4 Cervezas',
  },
  {
    title: 'Balde de Corona',
    price: '₡8.500',
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

export default { wines, cocktails, bocas, awards };
