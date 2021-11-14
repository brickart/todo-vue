<template>
  <div id="app">
    <Background/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo/1">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "scss";
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue';

@Component({
  components: {
    Background,
  },
})
export default class App extends Vue {}

/**
 * getTodoList
 * getTodo
 * createTodo
 * editTodo
 * toggleTodo
 * removeTodo
 */
</script>

