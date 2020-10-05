import { TrueFalseTypes } from '../../commons/enums/true-false.type';

export interface Category {
  id: number;
  title: string;
  active: TrueFalseTypes;
  deleted: TrueFalseTypes;
  created_at: Date;
  updated_at: Date | null;
}
