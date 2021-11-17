<template>
  <div class="wrapper">
    <div class="wrapper__link">
      <router-link v-if="!isMainPage" to="/">Back to all</router-link>
    </div>
    <div class="wrapper__block">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
@import "../scss/mixins";

.wrapper {
  padding: 5%;
  box-sizing: border-box;
  @include square(100%);
  display: flex;
  flex-direction: column;

  &__link {
    height: 30px;
    display: block;
    a {
      font-size: 20px;
      line-height: 30px;
      text-decoration: none;
      background: linear-gradient(to right, #007BFF, #29FDCA);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__block {
    @include square(100%, 20px);
    margin-top: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(41, 253, 202, 0.5);
    background: #282828;
    padding: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isMainPage(): boolean {
      return this.$route.name === 'Home'
    }
  }
})
</script>