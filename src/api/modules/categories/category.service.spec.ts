import { CategoryMockRepository } from '../../../repository/implementations/mocks/category.respository.imp';
import { CategoryService } from './category.service';
import db from '../../../commons/store/mocks';
const categoryService = new CategoryService(new CategoryMockRepository());

describe('GET - Test Category Service', () => {
  it('Should be to have object with categories => method all() ', async () => {
    const expected = db.categories;
    const result = await categoryService.index({});
    expect(result).toStrictEqual(expected);
  });
});
