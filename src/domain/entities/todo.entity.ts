export class Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;

  constructor(todo: Partial<Todo> ) {
    this.id = todo.id || +new Date();
    this.title = todo.title || '';
    this.description = todo.description || '';
    this.done = todo.done || false;
  }
  
  toggle(): Todo {
    this.done = !this.done;
    return this;
  }
}
