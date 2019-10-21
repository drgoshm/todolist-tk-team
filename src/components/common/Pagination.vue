<template>
    <div class="pagination">
      <a  href='/' @click.prevent="onNavigate(1)"  :class="current_page == 1 ? 'disabled' : ''" class="btn btn-glyph"><fa-icon icon="angle-double-left"/></a>
      <a :href="'/' + prev_page" @click.prevent="onNavigate(prev_page)" :class="current_page == 1 ? 'disabled' : ''" class="btn btn-glyph "><fa-icon icon="angle-left"/></a>
      <ul class="pagination-pages">
        <li v-if="current_page > 3" class="pagination-sep">&hellip;</li>
        <li v-for="page in pages" :key="page" :class="page===current_page ? 'pagination-page active' : 'pagination-page'">
          <a :href="'/' + page" @click.prevent="onNavigate(page)" class="btn btn-glyph">{{page}}</a>
        </li>
        <li v-if="max_page - current_page > 2" class="pagination-sep">&hellip;</li>
      </ul>
      <a :href="'/' + next_page" @click.prevent="onNavigate(next_page)" :class="current_page == max_page ? 'disabled' : ''" class="btn btn-glyph "><fa-icon icon="angle-right"/></a>
      <a :href="'/' + max_page" @click.prevent="onNavigate(max_page)" :class="current_page == max_page ? 'disabled' : ''" class="btn btn-glyph "><fa-icon icon="angle-double-right"/></a>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['total', 'page']),
        max_page () {
            return 0 | this.total / 10 + 1
        },
        current_page() {
            return this.page
        },
        prev_page() {
            return this.current_page > 1 ? this.current_page - 1 : 1
        },
        next_page() {
            return this.current_page < this.max_page ? this.current_page + 1 : this.max_page
        },
        pages() {
            if(this.max_page === 1) 
                return [1]
            if(this.max_page < 5) 
                return Array.from(new Array(this.max_page),(val,index)=>index+1)
            if( this.current_page < 4 )
                return [1,2,3,4,5]
            if(this.max_page - this.current_page < 4 )
                return Array.from(new Array(5),(val,index)=>index+this.max_page-5)
            return Array.from(new Array(5),(val,index)=>index+this.current_page-2)
        }
    },
    methods: {
      ...mapActions(['set_page']),
      onNavigate (page) {
        this.set_page(page)
      }
    },
    mounted() {
      const page = this.$attrs.value ? parseInt(this.$attrs.value) : 1;
      this.set_page(page < 1 ? 1 : page)
    },
}
</script>
<style lang="sass" scoped>
$border-radius: 4px
$padding: 16px
$padding-half: 8px
.pagination
  text-align: center
  .btn.disabled
    opacity: 0
    cursor: default
  &-pages
    display: inline-block
    padding: 0
  &-sep
    display: inline-block
    list-style-type: none  
    color: #808D97
  &-page
    display: inline-block
    list-style-type: none
    &.active
      a
        color: #6C964C
        font-weight: 800
        cursor: default
        &:hover
          background-color: transparent
    
</style>