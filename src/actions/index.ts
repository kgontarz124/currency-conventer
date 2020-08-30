import {
  ADD_CONVERSION,
  DELETEALLCONVERSIONS,
  Conversion,
  ConversionActionTypes,
  DELETECONVERSION,
} from './types';

export function addConversion(
  conversion: Omit<Conversion, 'id'>
): ConversionActionTypes {
  return { type: ADD_CONVERSION, conversion };
}

export function deleteAllConversions(): ConversionActionTypes {
  return { type: DELETEALLCONVERSIONS };
}

export function deleteConversion(id: number): ConversionActionTypes {
  return { type: DELETECONVERSION, id };
}
