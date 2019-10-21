<template>
<div class="card">
    <div class="card-header">
        <slot name="header"></slot>
    </div>
    <div class="card-body">
        <slot name="body"></slot>
    </div>
    <div class="card-footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>
$border-radius: 4px
$padding: 16px
$padding-half: 8px

.card
  border-radius: $border-radius
  background-color: #E0E3E6
  &-header
    padding: $padding
    h2
      padding: 0px
      margin: 0px
      display: inline-block
      text-overflow: ellipsis
    button
      float: right
  &-body
    padding: 0 $padding
  &-footer
    padding: 0 $padding $padding
</style>