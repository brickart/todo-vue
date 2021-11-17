<template>
  <div class="content">
    <Header title="To do list">
      <IconButton buttonType="add" size="large" v-on:onClick="addHandler"/>
    </Header>
    <TodoList v-if="tasks.length" />
    <EmptyList v-else />
  </div>
</template>
<style lang="scss">
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}

.content {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmptyList from '@/components/todo-list/EmptyList.vue';
import TodoList from '@/components/todo-list/TodoList.vue';
import Header from '@/components/Header.vue';
import IconButton from '@/components/IconButton.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    EmptyList,
    TodoList,
    Header,
    IconButton,
  },
  computed: mapGetters(['tasks']),
  methods: {
    addHandler() {
      this.$router.push('/todo');
    }
  }
})
export default class TodoListPage extends Vue {}
</script>
