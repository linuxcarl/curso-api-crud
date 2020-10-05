import { TrueFalseTypes } from '../enums/true-false.type';

export interface FilterDto {
  active?: TrueFalseTypes;
  limit?: number;
  offset?: number;
  deleted?: number;
}
