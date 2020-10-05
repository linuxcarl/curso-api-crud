import { CategoryService } from './category.service';
const categoryService = new CategoryService();

describe('GET - Test Category Service', () => {
  it('Should be to have string ', () => {
    const expected = 'hola CategoryService';
    const result = categoryService.index();

    expect(result).toBe(expected);
  });
});
