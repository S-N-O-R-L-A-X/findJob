<template>
  <div class="home">
    <Menu></Menu>
    <el-main>
      <div>
        <Index></Index>      
        <router-view></router-view>
      </div>
    </el-main>
  </div>
</template>

<script>
import Menu from '../components/menu.vue'
import Index from '../views/index.vue'
export default {
  name: 'Home',
  components: {
    Menu,Index
  }
}
</script>
