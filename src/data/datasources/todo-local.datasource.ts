import { Todo } from "@/domain/entities/todo.entity";
import { TJson, TodoDto } from "../dtos/todo.dto";

export abstract class TodoLocalDataSource {
  abstract readTodoList(): Todo[];
  abstract cacheTodoList(todoList: Todo[]): Todo[];
}

const CACHED_TODO_LIST = 'CACHED_TODO_LIST';

export class TodoLocalDataSourceImpl implements TodoLocalDataSource {

  constructor(private storage: Storage) {}

  readTodoList() {
    const jsonString = this.storage.getItem(CACHED_TODO_LIST);
    if (jsonString != null) {
      const jsonData = JSON.parse(jsonString);
      return Array.isArray(jsonData) ? jsonData.map((json: TJson) => TodoDto.fromJson(json)) : [];
    } else {
      return [];
    }
  }
  cacheTodoList(todoList: Todo[]): Todo[] {
    const data = todoList.map(todo => new TodoDto(todo).toJson());
    const dataString = JSON.stringify(data);
    this.storage.setItem(CACHED_TODO_LIST, dataString);
    return todoList;
  }
}
