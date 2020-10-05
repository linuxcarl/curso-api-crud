import { TrueFalseTypes } from '../../enums/true-false.type';

export interface UpdateCategoryDto {
  title: string;
  active: TrueFalseTypes;
}
