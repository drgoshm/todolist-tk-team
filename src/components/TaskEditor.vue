<template>
<div class="task-editor background-darken">
    <div class="task-editor-textarea plaque">
        <textarea :value="$attrs.value ? $attrs.value.todo : ''" @input="text = $event.target.value"></textarea>
    </div>
    <div class="task-editor-controls">
        <button class="btn btn-default" @click="commit"><slot>Сохранить</slot></button>
        <button class="btn btn-accent" @click="$emit('decline')">Отмена</button>
        <button v-if="$attrs.value!==undefined" class="btn btn-glyph" @click="$emit('remove', $attrs.value.id)"><fa-icon icon="times"/></button>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data: () => {return {
        text: ''
    }},
    methods: {
        ...mapActions(['task_toggle', 'task_modify']),
        commit() {
            if(this.$attrs.value) {
                this.$attrs.value.todo = this.text
                this.$emit('commit', this.$attrs.value)
            }
            else
                this.$emit('commit', {todo:this.text, done: false})
        }
    }
}
</script>
<style lang="sass" scoped>
$border-radius: 4px
$padding: 16px
$padding-half: 8px

.task-editor
  padding: $padding
  &-textarea
    margin-top: 0
    padding: 1px
    overflow: hidden
    textarea
      background-color: #F5F6F7
      padding: $padding-half $padding
      margin: 0 0 0 -$padding
      width: -webkit-fill-available
      border: 0px
      resize: none
      height: 4.6rem
      &:focus
        background-color: #fff
        outline: none
  button
    margin-right: 16px
</style>