<template>
  <div id="app">
    <Background/>
    <Wrapper>
      <router-view/>
    </Wrapper>
  </div>
</template>

<style lang="scss">
@import "scss";
#app {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: grid;
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
import Background from '@/presentation/components/Background.vue';
import Wrapper from '@/presentation/components/Wrapper.vue';

@Component({
  components: {
    Background,
    Wrapper,
  },
  mounted() {
    this.$store.dispatch('loadTodoList');
  }
})
export default class App extends Vue {}
</script>

