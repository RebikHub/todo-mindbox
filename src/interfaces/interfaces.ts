export interface IItem {
  text: string;
  done: boolean;
};

export type Tasks = IItem[];

export type Items = {
  items: Tasks
};