import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isHexColor {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
