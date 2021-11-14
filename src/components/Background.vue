<template>
  <div class="bg">
    <div class="bg-bubble bg-bubble__top"></div>
    <div class="bg-bubble bg-bubble__bottom"></div>
  </div>
</template>

<style lang="scss">
.bg {
  width: 100%;
  height: 100%;
  background: #1F1F1F;
  position: absolute;
  overflow: hidden;
  z-index: -1;
}

.bg-bubble {
  background: linear-gradient(94.73deg, rgba(0, 123, 255, 0.2) 0%, rgba(41, 253, 202, 0.2) 100%);
  filter: blur(50px);
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  &__top {
    width: 1055px;
    height: 333px;
    top: -10vh;
    right: -10vw;
  }
  &__bottom {
    width: 633px;
    height: 333px;
    bottom: 0;
    left: -10vw;
  }
}
</style>
