import { CreateCategoryDto } from '../commons/dtos/category/createCategory.dto';
import { FilterCategoryDto } from '../commons/dtos/category/filterCategory.dto';
import { UpdateCategoryDto } from '../commons/dtos/category/updateCategory.dto';
import { Category } from './domain/category';

export interface CategoryRepository {
  all(fileter: FilterCategoryDto): Promise<Category[]>;
  findById(id: number): Promise<Category>;
  create(data: CreateCategoryDto[]): Promise<Category>;
  update(data: UpdateCategoryDto[]): Promise<Category>;
  remove(data: any[]): Promise<number>;
}
