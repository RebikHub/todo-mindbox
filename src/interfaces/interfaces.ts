export interface IItem {
  text: string;
  done: boolean;
  id: string;
};

export type Tasks = IItem[];

export type Items = {
  items: Tasks
};