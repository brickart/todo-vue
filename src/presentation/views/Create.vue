<template>
  <div class="content">
    <Header title="To do">
      <IconButton buttonType="success" size="large" v-on:onClick="createTodo"/>
      </Header>
    <TodoForm v-on:submitForm="createTodo" v-on:changeForm="changeTodo"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from '@/presentation/components/todo-list/TodoForm.vue';
import Header from '@/presentation/components/Header.vue';
import IconButton from '@/presentation/components/IconButton.vue';

import { Todo } from '@/domain/entities/todo.entity';

@Component({
  components: {
    TodoForm,
    Header,
    IconButton
  },
  data: () => ({
    todo: null,
  }),
  methods: {
    changeTodo(todoData: Pick<Todo, 'title' | 'description'>) {
      this.$data.todo = new Todo({ ...this.$data.todo, ...todoData });
    },
    createTodo(): void {
      this.$store.dispatch('createTodo', this.$data.todo);
      this.$router.push('/');
    }
  }
})
export default class TodoPage extends Vue {}
</script>