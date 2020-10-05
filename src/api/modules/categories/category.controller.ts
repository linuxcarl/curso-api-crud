import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';

@route('/categories')
export class CategoryController {
  @GET()
  public index(req: Request, res: Response): void {
    res.send({
      controller: 'Category controller'
    });
  }
}
