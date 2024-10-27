import { IRepository } from "./IRepository";

export class BaseRepository<T> implements IRepository<T> {
  private db = new Set<T>();

  create(data: T): void {
    this.db.add(data);
  }

  *read(): IterableIterator<T> {
    for (const data of this.db.values()) {
      yield data;
    }
  }

  update(id: number, data: T): void {
    for (const record of this.db.values()) {
      if ((record as any).id === id) {
        this.db.delete(record);
        this.db.add(data);
        break;
      }
    }
  }

  delete(id: number): void {
    for (const record of this.db.values()) {
      if ((record as any).id === id) {
        this.db.delete(record);
        break;
      }
    }
  }
}
