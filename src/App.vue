<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
$border-radius: 4px
$padding: 16px
$padding-half: 8px

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app 
  margin: 1rem 20rem
  transition: 100ms


@media screen and (max-width:1200px) 
  #app 
    margin: 1rem 10rem

@media screen and (max-width:992px)
  #app 
    margin: 1rem 5rem

@media screen and (max-width:768px)
  #app 
    margin: 1rem 1rem

.btn
  padding: $padding-half $padding
  border: 0px
  border-radius: $border-radius
  background-color: transparent
  transition: .3s
  cursor: pointer
  &:hover
    background-color: #B0B3B6
  &-glyph
    color: #808D97
  &-default
    color: #fff
    background-color: #7CA65C
    border-bottom: 2px solid #546F35
    font-weight: 800
    font-size: 1.2em    
    &:hover
      background-color: #9CC67C
      border-bottom: 2px solid #647F45
  &-accent
    color: #fff
    background-color: #f76e6e
    border-bottom: 2px solid #b24b4b
    font-weight: 800
    font-size: 1.2em
    &:hover
      background-color: #f7a3a3
      border-bottom: 2px solid #b26a6a

    
.float-right
  float: right


.plaque
  margin: $padding 0px
  padding: $padding-half $padding 
  background-color: #fff
  border-radius: $border-radius
  border-bottom: 2px solid #B1B9BF
  &-dialog
    box-shadow: 2px 2px 10px 1px #bababa
  
.background
  &-default
    background-color: #fff
  &-accent
    background-color: #f76e6e
  &-darken
    background-color: #cdd1db


.loading
  position: relative
  &:before
    content: ''
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    opacity: .5
    background-color: #FFF
  &:after
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: 60px
    height: 60px
    margin: -30px
    background-image: url('./assets/Gear-1s-200px.gif')
    background-size: contain

</style>
