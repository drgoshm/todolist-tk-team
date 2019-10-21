<template>
<ul class="list">
    <li class="list-item" v-for="item in $attrs.value" :key="item.id">
        <slot name="item" :item="item">{{item.id}}</slot>
    </li>
</ul>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>
$border-radius: 4px
$padding: 16px
$padding-half: 8px

.list
  padding: 0
  &-item
    list-style-type: none
    margin: $padding 0px
    background-color: #fff
    border-radius: $border-radius
    border-bottom: 2px solid #B1B9BF
    cursor: pointer
    line-height: 2.4rem
    min-height: 57px
    overflow: hidden
    &:hover
      background-color: #F5F6F7
</style>