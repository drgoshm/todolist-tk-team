<template>
    <div class='task' :class="{ 'task-done': $attrs.value.done, 'task-empty': $attrs.value.todo.trim() === '' }">
        <a :href="'/task/' + $attrs.value.id" class="task-description">{{todo()}}</a>
        <button class="btn btn-glyph task-edit float-right" @click="$emit('edit', $attrs.value)">
            <fa-icon icon="pen" />
        </button>
        <button class="btn btn-glyph task-doit float-right" @click="task_toggle($attrs.value)">
            <fa-icon icon="check" />
        </button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
      ...mapActions(['task_toggle']),
      todo() {
        return this.$attrs.value.todo.trim() === '' ? 'TODO: do nothing' : this.$attrs.value.todo
      }
    }
}
</script>
<style lang="sass" scoped>
$border-radius: 4px
$padding: 16px
$padding-half: 8px

.task
  padding-right: 8rem
  min-height: 57px
  &-description
    display: inline-block
    color: #000
    text-decoration: none
    max-height: 1.6rem
    line-height: 1.6rem
    padding: $padding
    vertical-align: middle
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 100%
  &-edit
    opacity: 0
    margin: -2.8rem -4.4rem 0 0 
  &-doit
    opacity: 0
    margin: -2.8rem -7.4rem 0 0 
  &:hover
    button
      opacity: 1
  &-done
    background-color: #f6ffeb
    font-weight: 600
    .task-description
      color: #6C964C
    .task-doit
      color: #6C964C
      opacity: 1
    .task-edit 
      display: none
  &-empty
    .task-description
      color: lightslategray
</style>