<template>
  <div class="todo-item">
    <div class="todo-item__check">
      <Checkbox :checked="todo.done" v-on:checkHandler="checkHandler"/>
    </div>
    <div class="todo-item__title" v-bind:class="{checked: todo.done}">
      <router-link :to="`todo/${todo.id}`">{{ todo.title }}</router-link>
    </div>
    <div class="todo-item__tools">
      <IconButton buttonType="remove" v-on:onClick="deleteHandler"/>
    </div>
  </div>
</template>
<style lang="scss">
.todo-item {
  width: 100%;
  max-width: 100%;
  height: 52px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  &__title {
    position: relative;
    flex-grow: 1;
    padding: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    a {
      width: auto;
      color: #ffffff;
      text-decoration: none;
      font-size: 20px;
      line-height: 30px;
    }

    &.checked a {
      color: rgba(255, 255, 255, 0.1);
      text-decoration: line-through;
    }
  }
  
}
</style>

<script lang="ts">
import Vue from 'vue';
import {Todo} from '../../domain/entities/todo.entity';
import IconButton from '../IconButton.vue';
import Checkbox from '../Checkbox.vue';

export default Vue.extend({
  components: {
    IconButton,
    Checkbox,
  },
  props: {
    todo: {type: Todo},
  },
  methods: {
    deleteHandler(): void {
      this.$store.dispatch('deleteTodo', this.todo);
    },
    checkHandler(): void {
      this.$store.dispatch('toggleTodo', this.todo);
    }
  }
})
</script>
