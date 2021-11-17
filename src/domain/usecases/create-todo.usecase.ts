import { UseCase } from "@/core/usecases/usecase";
import { Todo } from "@/domain/entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class CreateTodoUseCase implements UseCase<Todo[], Params> {
  constructor(private repository: TodoRepository) {}

  execute(params: Params): Todo[] {
    const todoList = this.repository.readTodoList();
    const todo = new Todo(params.todoData);
    const todoListWithCreated = [...todoList, todo];

    return this.repository.saveTodoList(todoListWithCreated);
  }
}

class Params {
  constructor(public todoData: Pick<Todo, 'title' | 'description'>) {}
}