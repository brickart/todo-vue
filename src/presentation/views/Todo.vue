<template>
  <div class="content">
    <Header title="To do">
      <IconButton buttonType="success" size="large" v-on:onClick="saveTodo"/>
      <IconButton buttonType="remove" size="large" v-on:onClick="deleteHandler"/>
    </Header>
    <TodoForm v-bind:todo="todo" v-on:submitForm="saveTodo" v-on:changeForm="changeTodo"/>
  </div>
</template>
<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}
</style>
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
    IconButton,
  },
  data: () => ({
    todo: null,
  }),
  methods: {
    saveTodo(todoData: Pick<Todo, 'title' | 'description'>) {
      this.$store.dispatch('updateTodo', {
        ...this.$data.todo, ...todoData,
      });
      this.$router.push('/');
    },
    changeTodo(todoData: Pick<Todo, 'title' | 'description'>) {
      this.$data.todo = new Todo({ ...this.$data.todo, ...todoData });
    },
    deleteHandler() {
      this.$store.dispatch('deleteTodo', this.$data.todo);
      this.$router.push('/');
    },
  },
  created(){    
    this.$data.todo = this.$store.getters.todoById(+this.$route.params.id);
  },
})
export default class TodoPage extends Vue {}
</script>
