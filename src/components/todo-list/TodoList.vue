<template>
  <div>
    <div v-for="todo of tasks" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
  computed: mapGetters(['tasks']),
})
export default class TodoList extends Vue {}
</script>