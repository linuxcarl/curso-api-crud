/*eslint arrow-parens: ["error", "always"]*/
/*eslint-env es6*/
import { CreateCategoryDto } from '../../../commons/dtos/category/createCategory.dto';
import { FilterCategoryDto } from '../../../commons/dtos/category/filterCategory.dto';
import { UpdateCategoryDto } from '../../../commons/dtos/category/updateCategory.dto';
import db from '../../../commons/store/mocks';
import { CategoryRepository } from '../../category.repository';
import { Category } from '../../domain/category';

export class CategoryMockRepository implements CategoryRepository {
  public async all(filter: FilterCategoryDto): Promise<Category[]> {
    let { page = 1, limit } = filter;
    const { order, title } = filter;
    let result = db.categories;

    if (title) {
      result = result.filter((category: any) =>
        category.title.toLowerCase().includes(title!.toLowerCase())
      );
    }

    if (order) {
      result = order === 'asc' ? result.sort() : result.reverse();
    }
    if (limit) {
      const init = limit * --page;
      limit = init ? Number(init) + Number(limit) : limit;
      result = result.length >= Number(limit) ? result.slice(init, limit) : result;
    }
    return Object.assign([...result]) as Category[];
  }
  public async findById(id: number): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public async create(data: CreateCategoryDto[]): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public async update(data: UpdateCategoryDto[]): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  public async remove(data: any[]): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
