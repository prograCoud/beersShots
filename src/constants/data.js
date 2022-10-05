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

const bocas = [
  {
    title: 'Arroz con camarones',
    price: '₡4.000',
    tags: 'Papas | Ensalada',
  },
  {
    title: 'Arroz con pollo',
    price: '₡3.700',
    tags: 'Papas | Ensalada',
  },
  {
    title: 'Papas bravas',
    price: '₡3.100',
    tags: 'Salsas a escoger',
  },
  {
    title: 'Chicharron',
    price: '₡4.000',
    tags: '',
  },
  {
    title: 'Ceviche mixto',
    price: '₡3.900',
    tags: 'Pescado | Camaron | Pulpo',
  },
  {
    title: 'Ceviche',
    price: '₡3.700',
    tags: 'Chips | Platano',
  },
  {
    title: 'Chifrijo',
    price: '₡3.900',
    tags: '',
  },
  {
    title: 'Chicken fingers',
    price: '₡4.500',
    tags: 'Buffalo | Mostaza Miel | BBQ | Morron',
  },
  {
    title: 'Fish & Chips',
    price: '₡3.900',
    tags: 'Buffalo | Mostaza Miel | BBQ | Morron',
  },
  {
    title: 'Fajitas',
    price: '₡3.800',
    tags: 'Pollo | Jalapeñas | Cerdo | Mixtas',
  },
  {
    title: 'Quesadilla',
    price: '₡4.000',
    tags: 'Pollo | Res | Mixtas',
  },
  {
    title: 'Burrito',
    price: '₡4.000',
    tags: 'Pollo | Res | Mixtas',
  },
  {
    title: 'Alitas',
    price: '₡4.000',
    tags: 'Buffalo | Mostaza Miel | BBQ',
  },
  {
    title: 'Dedos de queso',
    price: '₡3.800',
    tags: 'Buffalo | Mostaza Miel | BBQ | Morron',
  },
  {
    title: 'Nachos',
    price: '₡4.000',
    tags: 'Pollo | Res | Mixtos',
  },
  {
    title: 'Nachos beer shots',
    price: '₡4.200',
    tags: '',
  },
  {
    title: 'Carne mexicana',
    price: '₡3.800',
    tags: '',
  },
  {
    title: 'Patacones especiales',
    price: '₡4.000',
    tags: 'Res | Pollo',
  },
  {
    title: 'Salchipapas',
    price: '₡3.300',
    tags: '',
  },
  {
    title: 'Chalupa',
    price: '₡3.800',
    tags: 'Carne | Pollo',
  },
  {
    title: 'Taquitos',
    price: '₡3.700',
    tags: 'Res | Pollo | Queso',
  },
  {
    title: 'Sopa de mariscos',
    price: '₡4.000',
    tags: 'Agua | Leche',
  },
  {
    title: 'Sopa azteca',
    price: '₡3.700',
    tags: 'Agua | Leche',
  },
  {
    title: 'Sustancia de res',
    price: '₡3.800',
    tags: '',
  },
  {
    title: 'Costilla de cerdo',
    price: '₡4.200',
    tags: 'BBQ | Buffalo',
  },
  {
    title: 'Lomito de res',
    price: '₡4.800',
    tags: 'Fajitas | Jalapeñas',
  },
  {
    title: 'Lomito suizo',
    price: '₡5.000',
    tags: 'Fajitas | Jalapeñas',
  },
  {
    title: 'Coctel de camarón',
    price: '₡4.200',
    tags: '',
  },
  {
    title: 'Aros de cebolla',
    price: '₡3.200',
    tags: '',
  },
  {
    title: 'Papanacho',
    price: '₡4.200',
    tags: 'Res | Pollo | Mixto',
  },
  {
    title: 'Camarones al gusto',
    price: '₡4.200',
    tags: 'Ajillo | Empanizados',
  },
  {
    title: 'Surtido de 2 personas',
    price: '₡8.500',
    tags: '',
  },
  {
    title: 'Hamburguesa de patacon',
    price: '₡4.000',
    tags: '',
  },
  {
    title: 'Chicharronada',
    price: '₡4.000',
    tags: '',
  },
  {
    title: 'Gallos 3 unidades',
    price: '₡2.800',
    tags: 'Chorizo | Salchichon',
  },
  {
    title: 'Hamburguesa de pollo',
    price: '₡4.500',
    tags: 'Empanizado | Grill | Buffalo | BBQ',
  },
  {
    title: 'Hamburguesa beer shots',
    price: '₡4.900',
    tags: '',
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
