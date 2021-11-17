import { NoParams, UseCase } from "@/core/usecases/usecase";
import { Todo } from "@/domain/entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class GetTodoListUseCase implements UseCase<Todo[], NoParams> {
  constructor(private repository: TodoRepository) {}

  execute(): Todo[] {
    return this.repository.readTodoList();
  }

}
