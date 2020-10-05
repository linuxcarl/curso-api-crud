export interface CategoryRepository {
  all(): Promise<any[]>;
  findById(id: number): Promise<any[]>;
  create(data: any[]): Promise<number>;
  update(data: any[]): Promise<number>;
  remove(data: any[]): Promise<number>;
}
