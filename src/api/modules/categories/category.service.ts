import { FilterCategoryDto } from '../../../commons/dtos/category/filterCategory.dto';
import { CategoryRepository } from '../../../repository/category.repository';

export class CategoryService {
  public constructor(private readonly categoryRepository: CategoryRepository) {}
  public async index(filter?: FilterCategoryDto): Promise<any[]> {
    return await this.categoryRepository.all({ ...filter });
  }
}
