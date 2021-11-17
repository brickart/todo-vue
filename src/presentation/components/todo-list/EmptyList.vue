<template>
  <div class="empty">
    <div class="empty__content">
      <img src="../../assets/empty-list.svg" alt="" srcset="">
      <p>No list yet<br/>Create your first list</p>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../scss/mixins";

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #ffffff;
    & > p {
      padding-top: 28px;
    }
  }
}
</style>
