<template>
  <header>
    <h1>{{title}}</h1>
    <div class="tools">
      <slot/>
    </div>
  </header>
</template>
<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}
header {
  margin-bottom: 46px;
  display: flex;
  justify-content: space-between;

  .tools {
    display: flex;
    & > button {
      margin: 0 8px;
      &:first-child { margin-left: 0; }
      &:last-child { margin-right: 0; }
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
})
</script>