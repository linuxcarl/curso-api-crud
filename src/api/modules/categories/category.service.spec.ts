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

  it('Should be to have object with categories + fileter  => method all() ', async () => {
    const expected = [db.categories[0]];
    const result = await categoryService.index({ title: 'Lacteos' });

    expect(result).toStrictEqual(expected);
  });

  it('Should be to have object with categories + limit  => method all() ', async () => {
    const expected = [db.categories[0]];
    const result = await categoryService.index({ limit: 1 });

    expect(result).toStrictEqual(expected);
  });

  it('Should be to have object with categories + order  => method all() ', async () => {
    const expected = [db.categories[9]];
    const result = await categoryService.index({ order: 'desc', limit: 1 });

    expect(result).toStrictEqual(expected);
  });
});
