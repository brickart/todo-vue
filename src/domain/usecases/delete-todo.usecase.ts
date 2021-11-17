import { UseCase } from "@/core/usecases/usecase";
import { Todo } from "@/domain/entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class DeleteTodoUseCase implements UseCase<Todo[], Params> {
  constructor(private repository: TodoRepository) {}

  execute(params: Params): Todo[] {
    const todoList = this.repository.readTodoList();
    const todoListWithoutDeleted = todoList.filter(todo => todo.id !== params.todo.id);

    return this.repository.saveTodoList(todoListWithoutDeleted);
  }
}

class Params {
  constructor(public todo: Todo) {}
}