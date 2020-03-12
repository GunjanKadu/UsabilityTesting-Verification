import { Cart } from 'Redux/Reducers/cart';
import { Account } from 'Redux/Reducers/account';
import { Cuisines } from 'Redux/Reducers/cuisines';

describe('Initial State Of', () => {
  test('Cart Reducer', () => {
    const action = { type: 'dummy_action' };
    const initialStateCart = {
      CartContent: [],
      CardAlert: true,
      Price: 0,
      TotalPrice: 0,
      CardAddedResponse: '',
      ContentAdded: false
    };

    expect(Cart(undefined, action)).toEqual(initialStateCart);
  });
  test('Account Reducer', () => {
    const action = { type: 'dummy_action' };
    const initialStateAccount = {
      Loading: false,
      LoginDetailsSuccess: [],
      LoginDetailsFailed: [],
      UserDataJwt: [],
      isValidated: false,
      isSuccessfullyAdded: false,
      signUpError: '',
      isChef: false,
      becomingAChefLoading: false
    };

    expect(Account(undefined, action)).toEqual(initialStateAccount);
  });
  test('Cuisine Reducer', () => {
    const action = { type: 'dummy_action' };
    const initialStateCuisine = {
      Cuisine: [],
      ErrorMessage: null,
      IsLoading: true
    };

    expect(Cuisines(undefined, action)).toEqual(initialStateCuisine);
  });
});
