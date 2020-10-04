import { asClass, createContainer } from 'awilix';
import express from 'express';
import { scopePerRequest } from 'awilix-express';
import { CategoryService } from './modules/categories/category.service';

export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  });

  container.register({
    categoryService: asClass(CategoryService).scoped()
  });

  app.use(scopePerRequest(container));
};
