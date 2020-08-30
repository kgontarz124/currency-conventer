export const ADD_CONVERSION = 'ADD_CONVERSION';
export const DELETEALLCONVERSIONS = 'DELETEALLCONVERSIONS';
export const DELETECONVERSION = 'DELETECONVERSION';

export interface Conversion {
  id: number;
  from: string;
  to: string;
  convertedAt: string;
}

export interface AddConversionAction {
  type: typeof ADD_CONVERSION;
  conversion: Omit<Conversion, 'id'>;
}

export interface DeleteAllConversionsAction {
  type: typeof DELETEALLCONVERSIONS;
}

export interface DeleteConversionAction {
  type: typeof DELETECONVERSION;
  id: number;
}

export type ConversionActionTypes =
  | AddConversionAction
  | DeleteAllConversionsAction
  | DeleteConversionAction;
