export type Priority = "low" | "medium" | "high";

export type Todo = {
  id: string;
  description: string;
  priority: Priority;
  duedate: string;
}