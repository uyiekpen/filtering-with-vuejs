<template>
  <div>
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue"

export default {
  components: {
    Header
  }
}
</script>
