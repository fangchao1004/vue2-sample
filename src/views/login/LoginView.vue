<template>
  <div class="root">
    <div>登录页面</div>
    <a-button @click="loginHandler" type="primary">登录</a-button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'LoginView',
  methods: {
    loginHandler() {
      // 直接认为登录成功
      Vue.ls.set('token', '1231313123123', 60 * 60 * 1000) /// 一个小时后过期 ; token 过期后 Vue.ls.get('token') 获取值为null
      this.$router.replace({name: 'MainView'})
    }
  }
}
</script>

<style scoped>
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>