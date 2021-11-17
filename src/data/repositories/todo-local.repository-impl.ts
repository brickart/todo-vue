import { Todo } from '@/domain/entities/todo.entity';
import { TodoRepository } from '../../domain/repositories/todo.repository';
import { TodoLocalDataSource } from '../datasources/todo-local.datasource';

export class TodoLocalRepositoryImpl implements TodoRepository {

  constructor(private localDataSource: TodoLocalDataSource) {}
  
  readTodoList(): Todo[] {
    return this.localDataSource.readTodoList();
  }
  saveTodoList(todoList: Todo[]): Todo[] {
    return this.localDataSource.cacheTodoList(todoList);
  }
}
