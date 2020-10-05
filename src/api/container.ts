import { asClass, createContainer } from 'awilix';
import express from 'express';
import { scopePerRequest } from 'awilix-express';
import { CategoryService } from './modules/categories/category.service';

import { CategoryMockRepository } from '../repository/implementations/mocks/category.respository.imp';

export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  });

  container.register({
    categoryRepository: asClass(CategoryMockRepository).scoped(),

    categoryService: asClass(CategoryService).scoped()
  });

  app.use(scopePerRequest(container));
};
