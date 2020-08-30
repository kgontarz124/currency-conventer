import { Conversion } from '../actions/types';

export interface State {
  conversions: any;
}

const initialState: State = {
  conversions: [],
};

const conversionsState = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CONVERSION':
      return {
        conversions: [
          { ...action.conversion, id: Math.floor(Math.random() * 100000) },
          ...state.conversions,
        ],
      };
    case 'DELETEALLCONVERSIONS':
      return {
        conversions: [],
      };
    case 'DELETECONVERSION':
      return {
        conversions: [
          ...state.conversions.filter(
            (conversion: Conversion) => conversion.id !== action.id
          ),
        ],
      };
    default:
      return state;
  }
};

export default conversionsState;
