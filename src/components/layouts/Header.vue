<template>
  <div class="desktop-header">
    <BgHeader />
  </div>
</template>

<script>
import BgHeader from '../../assets/images/BgHeader.vue';

export default {
  components: {
    BgHeader
  }
}
</script>

<style scoped>

.desktop-header{
  height: 100px;
  width: 100vw;
  background-color:hsl(180, 29%, 50%);
  
}
</style>
