export type Priority = "low" | "medium" | "high";

export type Todo = {
  description: string;
  priority: Priority;
  duedate: string;
}