import { UseCase } from "@/core/usecases/usecase";
import { Todo } from "@/domain/entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class GetTodoByIdUseCase implements UseCase<Todo, Params> {
  constructor(private repository: TodoRepository) {}

  execute(params: Params): Todo {
    const todoList = this.repository.readTodoList();
    const idx = todoList.findIndex(todo => todo.id === params.id);

    return todoList[idx];
  }
}

class Params {
  constructor(public id: number) {}
}
