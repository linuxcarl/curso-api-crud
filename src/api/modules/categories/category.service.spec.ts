import { CategoryMockRepository } from '../../../repository/implementations/mocks/category.respository.imp';
import { CategoryService } from './category.service';
import db from '../../../commons/store/mocks';
const categoryService = new CategoryService(new CategoryMockRepository());

describe('GET - Test Category Service method all()', () => {
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
describe('GET - Test Category Service method findById()', () => {
  it('Should be to have object with  one category  ', async () => {
    const expected = [
      {
        id: expect.any(Number),
        title: expect.any(String),
        active: expect.any(Number),
        deleted: expect.any(Number),
        created_at: expect.any(String),
        updated_at: expect.any(String)
      }
    ];
    const result = await categoryService.findById(10);

    expect(result).toMatchObject(expected);
  });
});
