<template>
<label class="check">
  <input class="check__input" type="checkbox" :checked="checked" @change="$emit('checkHandler', $event.target.value)">
  <span class="check__box">
    <img class="check__img" src="../assets/checked.svg">
  </span>
</label>
</template>
<style lang="scss" scoped>

.check {
  padding-left: 1.2em;
  display: block;
  width: 1em;
  height: 1em;
  cursor: pointer;
  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);

  }

  &__box {
    position: absolute;
    margin-top: 0.2em;
    margin-left: -1em;
    width: 0.6em;
    height: 0.6em;
    overflow: hidden;
    border-radius: 0.05em;
    background-repeat: no-repeat no-repeat;
    background-position: 50% 50%;
    background: #1F1F1F;
    box-shadow: 0 0 0 0.1em rgba(255, 255, 255, 0.1);
  }

  &__img {
    display: none;
  }

  .check__input:checked + .check__box .check__img{
     display: block;
  }
}

</style>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    checked: { type: Boolean, default: false }
  }
})
</script>