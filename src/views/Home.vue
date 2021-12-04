<template>
  <div class="home">
    <Carousel></Carousel>
  </div>
</template>

<script>
import Menu from '../components/menu.vue'
import Carousel from './Carousel.vue'
export default {
  name: 'Home',
  components: {
    Menu,Carousel
  }
}
</script>
