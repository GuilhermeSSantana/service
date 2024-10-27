export interface IService<T> {
  create(data: T): Promise<T>;
  update(data: T): Promise<T>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<T>;
  findAll(): Promise<T[]>;
}
