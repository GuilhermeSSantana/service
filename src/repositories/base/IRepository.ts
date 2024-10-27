export interface IRepository<T> {
  create(data: T): void;
  read(): IterableIterator<T>;
  update(id: number, data: T): void;
  delete(id: number): void;
}
