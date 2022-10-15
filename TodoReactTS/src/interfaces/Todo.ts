export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoFilter {
  id: string;
  text: string;
}

export type Filter = "all" | "open" | "done";
