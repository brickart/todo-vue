<template>
  <form class="todo-form" v-on:change="formChange">
    <div class="todo-form__section">
      <input v-model="title" type="text" placeholder="Title">
    </div>
    <div class="todo-form__section">
      <textarea v-model="description" cols="30" rows="10" placeholder="Description"></textarea>
    </div>
    <button v-on:click="saveHandler" type="button">Save</button>
  </form>
</template>
<style lang="scss">
  .todo-form {
    width: 100%;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    
    &__section {
      width: 100%;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    & input, & textarea {
      background: none;
      border: none;
      width: 100%;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;

      &:focus { 
        outline: 1px solid rgba(41, 253, 202, 0.5); 
      }
    }

    & button {
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
      max-width: 330px;
      padding: 8px 16px;
      border-radius: 23px;
      width: 100%;
      border: none;
      background: linear-gradient(to right, #007BFF, #29FDCA);
      cursor: pointer;
      transition: box-shadow .3s ease-in-out;
      &:hover {
        transition: box-shadow .5s ease-out;
        box-shadow: 0px 0px 20px rgba(41, 253, 202, 0.5);
      }
    }
  }
</style>
<script lang="ts">
import Vue from 'vue';
import {Todo} from '../../domain/entities/todo.entity';

export default Vue.extend({
  props: {
    todo: {type: Todo},
  },
  data: (): Pick<Todo, 'title' | 'description'> => ({
    title: '',
    description: '',
  }),
  methods: {
    saveHandler() {
      this.$emit('submitForm', this.todo
        ? { ...this.todo, ...this.$data }
        : { ...this.$data }
      );
    },
    formChange() {
      this.$emit('changeForm', this.todo
        ? { ...this.todo, ...this.$data }
        : { ...this.$data }
      );
    }
  },
  mounted() {
    if (this.todo) {
      this.title = this.todo.title;
      this.description = this.todo.description;
    }
  }
})
</script>