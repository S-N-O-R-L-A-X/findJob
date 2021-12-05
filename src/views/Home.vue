<template>
  <div class="home">
    <Index></Index>
  </div>
</template>

<script>
import Menu from '../components/menu.vue'
import Index from './Index.vue'
export default {
  name: 'Home',
  components: {
    Menu,Index
  }
}
</script>
