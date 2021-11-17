import { UseCase } from "@/core/usecases/usecase";
import { Todo } from "@/domain/entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class UpdateTodoUseCase implements UseCase<Todo[], Params> {
  constructor(private repository: TodoRepository) {}

  execute(params: Params): Todo[] {
    const todoList = this.repository.readTodoList();
    const idx = todoList.findIndex(todo => todo.id === params.todo.id);
    todoList[idx] = params.todo;

    return this.repository.saveTodoList(todoList);
  }
}

interface Params {
  todo: Todo;
}