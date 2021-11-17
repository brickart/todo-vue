import { useCases } from "@/injection";
import { Todo } from "@/domain/entities/todo.entity";
import { ActionContext } from "vuex";
import { IState } from '.';

export interface ITodoStore {
  todoList: Todo[];
}

type Context = ActionContext<ITodoStore, IState>;

export default {
  state: (): ITodoStore => ({
    todoList: [],
  }),
  mutations: {
    setTodoList(state: ITodoStore, list: Todo[]) {
      state.todoList = list;
    },
  },
  actions: {
    async loadTodoList({commit}: Context) {
      const todoList = useCases.getTodoListUseCase.execute();
      commit('setTodoList', todoList);
    },

    async createTodo({commit}: Context, todoData: Pick<Todo, 'title' | 'description'>) {
      const todoList = useCases.createTodoUseCase.execute({todoData});
      commit('setTodoList', todoList);
    },

    async deleteTodo({commit}: Context, todo: Todo) {
      const todoList = useCases.deleteTodoUseCase.execute({todo});
      commit('setTodoList', todoList);
    },

    async updateTodo({commit}: Context, todo: Todo) {
      const todoList = useCases.updateTodoUseCase.execute({todo});
      commit('setTodoList', todoList);
    },
    
    async toggleTodo({commit}: Context, todo: Todo) {
      const todoList = useCases.toggleTodoUseCase.execute({todo});
      commit('setTodoList', todoList);
    },
  },
  getters: {
    tasks: (s: ITodoStore): Todo[] => s.todoList.map(todo => new Todo(todo)),
    todoById: (state: ITodoStore) => (id: number): Todo => {
      const todoData = state.todoList.find(todo => todo.id === id);
      return new Todo({...todoData});
    },
  },
};
