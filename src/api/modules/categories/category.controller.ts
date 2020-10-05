import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import { CategoryService } from './category.service';

@route('/categories')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) {}
  @GET()
  public async index(req: Request, res: Response): Promise<void> {
    const result: any = await this.categoryService.index({ ...req.query });
    res.send(result);
  }
}
