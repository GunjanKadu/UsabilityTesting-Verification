import { dishStateItems } from 'Types/Dishes';

const dishesState: dishStateItems[] = [
  {
    name: 'Hyda',
    price: 2,
    chef: 'Gunjan'
  },
  {
    name: 'Hyda1',
    price: 3,
    chef: 'Gunjn1'
  }
];

export const Dish = (state: dishStateItems[] = dishesState, action) => {
  return state;
};
