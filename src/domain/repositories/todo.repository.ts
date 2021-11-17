import { Todo } from "@/domain/entities/todo.entity";

export abstract class TodoRepository {
  abstract readTodoList(): Todo[];
  abstract saveTodoList(todoList: Todo[]): Todo[];
}
