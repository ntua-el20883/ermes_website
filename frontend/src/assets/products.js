
import desktop1 from './desktop1.png';
import laptop1 from './laptop1.png';
import desktop2 from './desktop2.png';
import tablet from './tablet.png';
import laptop2 from './laptop2.png';
import laptop3 from './laptop3.png';

export const products = [
  {
    id: 1,
    name: 'Icarus',
    price: '$$$$',  // Available product
    inStock: true,
    image: laptop1, // Replace with your actual image path
  },
  {
    id: 2,
    name: 'Phedeas',
    price: '$$',  // Available product
    inStock: true,
    image: desktop2, // Replace with your actual image path
  },
  {
    id: 3,
    name: 'Perseus',
    price: '$$$',  // Available product
    inStock: false,
    image: desktop1, // Replace with your actual image path
  },
  {
    id: 4,
    name: 'Zeus',
    price: null,  // Set to null or leave out the price to indicate it's coming soon
    inStock: false,
    image: laptop2, // Replace with your actual image path
  },
  {
    id: 5,
    name: 'Icarus II',
    price: null,  // Set to null or leave out the price to indicate it's coming soon
    inStock: false,
    image: laptop3, // Replace with your actual image path
  },
  {
    id: 6,
    name: 'Perseus II',
    price: null,  // Set to null or leave out the price to indicate it's coming soon
    inStock: false,
    image: desktop1, // Replace with your actual image path
  },
  {
    id: 7,
    name: 'Phedeas II',
    price: null,  // Set to null or leave out the price to indicate it's coming soon
    inStock: false,
    image: desktop2, // Replace with your actual image path
  },
  {
    id: 8,
    name: 'Penelope',
    price: null,  // Set to null or leave out the price to indicate it's coming soon
    inStock: false,
    image: tablet, // Replace with your actual image path
  },

];
