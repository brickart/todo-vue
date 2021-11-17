import { TodoLocalDataSourceImpl } from "./data/datasources/todo-local.datasource";
import { TodoLocalRepositoryImpl } from "./data/repositories/todo-local.repository-impl";
import { CreateTodoUseCase } from "./domain/usecases/create-todo.usecase";
import { DeleteTodoUseCase } from "./domain/usecases/delete-todo.usecase";
import { GetTodoByIdUseCase } from "./domain/usecases/get-todo-by-id.usecase";
import { GetTodoListUseCase } from "./domain/usecases/get-todo-list.usecase";
import { ToggleTodoUseCase } from "./domain/usecases/toggle-todo.usecase";
import { UpdateTodoUseCase } from "./domain/usecases/update-todo.usecase";

// APIs
const storage = localStorage;

// Data Layer
const localDataSource = new TodoLocalDataSourceImpl(storage);
const repository = new TodoLocalRepositoryImpl(localDataSource);

// UseCases
const getTodoListUseCase = new GetTodoListUseCase(repository);
const getTodoByIdUseCase = new GetTodoByIdUseCase(repository);
const createTodoUseCase = new CreateTodoUseCase(repository);
const deleteTodoUseCase = new DeleteTodoUseCase(repository);
const toggleTodoUseCase = new ToggleTodoUseCase(repository);
const updateTodoUseCase = new UpdateTodoUseCase(repository);

export const useCases = {
  getTodoListUseCase,
  getTodoByIdUseCase,
  createTodoUseCase,
  deleteTodoUseCase,
  toggleTodoUseCase,
  updateTodoUseCase,
};
