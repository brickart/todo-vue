import { Todo } from "@/domain/entities/todo.entity";

export type TJson = {[key: string]: number | string | boolean}

export class TodoDto extends Todo {
  constructor(todo: Todo) {
    super(todo);
  }

  static fromJson(json: TJson): Todo {
    return new Todo({
      id: +json['id'],
      title: json['title'].toString(),
      description: json['description'].toString(),
      done: !!json['done'],
    })

  }
  toJson(): TJson {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      done: this.done,
    }
  }
}
