<template>
  <div class="root">
    <div>SampleView2</div>
  </div>
</template>

<script>
export default {
  name: 'SampleView2',
  mounted() {
    const path = this.$router.history.current.fullPath
    console.log('path:', path)
  },
}
</script>

<style scoped>
.root {
  color: white;
  background-color: rgb(73, 47, 143);
  height: 400px;
  min-height: calc(100vh - 96px);
}
</style>