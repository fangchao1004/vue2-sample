<template>
  <div class="root">
    <div>统计页面</div>
    <a-datePicker></a-datePicker>
  </div>
</template>

<script>
export default {
  name: 'StatistcsView',
  mounted() {
    const path = this.$router.history.current.fullPath
    console.log('path:', path)
  },
}
</script>

<style scoped>
.root {
  background-color: aqua;
  height: 400px;
  min-height: calc(100vh - 96px);
}
</style>