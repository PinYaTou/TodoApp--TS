
export interface Type {
  id: string;
  title: string;
  selected: boolean;
  content: Todo[];
}
export interface Todo {
  id: string;
  name: string;
  done: boolean;
  date: string;
  selected: boolean;
  Detail: Detail[];
}
export interface Detail {
  id: string;
  title: string;
}

export interface User {
  id: string,
  avatar: string
}