import Vue from 'vue';
import Vuex from 'vuex';
import TodoStore, { ITodoStore } from './todo.store';

Vue.use(Vuex)

export interface IState {
  todo: ITodoStore;
}

export default new Vuex.Store<IState>({
  modules: {
    TodoStore,
  }
})
