<template>
  <button class="icon-btn" v-on:click="$emit('onClick')" v-bind:class="{ large: size === 'large' }">
    <img v-if="buttonType === 'remove'" class="icon-btn__icon" src="../assets/remove.svg">
    <img v-if="buttonType === 'add'" class="icon-btn__icon" src="../assets/add.svg">
    <img v-if="buttonType === 'success'" class="icon-btn__icon" src="../assets/checked.svg">
  </button>
</template>
<style lang="scss" scoped>
@import "../scss/mixins";

.icon-btn {
  @include square(32px, 10px);
  background: #1F1F1F;
  cursor: pointer;
  border: none;
  transition: box-shadow .3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: box-shadow .5s ease-out;
    box-shadow: 0px 0px 20px rgba(41, 253, 202, 0.5);
  }

  &__icon {
    @include square(16px);
  }

  &.large {
    @include square(46px, 10px);
    .icon-btn__icon {
      @include square(24px);
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    buttonType: {
      type: String,
      default: 'remove',
      validator: value => ['remove', 'add', 'success'].indexOf(value) >= 0
    },
    size: {
      type: String,
      default: 'small',
      validator: value => ['small', 'large'].indexOf(value) >= 0
    }
  },
})
</script>