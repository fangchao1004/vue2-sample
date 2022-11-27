<template>
  <div class="root">
    <div>ExtraView</div>
  </div>
</template>

<script>
export default {
  name: 'ExtraView',
  mounted() {
    const path = this.$router.history.current.fullPath
    console.log('path:', path)
  },
}
</script>

<style scoped>
.root {
  color: white;
  background-color: rgb(75, 212, 130);
  height: 400px;
  min-height: calc(100vh - 96px);
}
</style>