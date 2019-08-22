import { Moment } from 'moment';

export interface ITask {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: Moment;
  complete?: boolean;
  userLogin?: string;
  userId?: number;
  categoryCategoryName?: string;
  categoryId?: number;
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public dueDate?: Moment,
    public complete?: boolean,
    public userLogin?: string,
    public userId?: number,
    public categoryCategoryName?: string,
    public categoryId?: number
  ) {
    this.complete = this.complete || false;
  }
}
