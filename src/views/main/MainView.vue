<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }" v-model="collapsed"
                    :trigger="null" collapsible>
      <div class="logo">
        <div>
          <a-icon type="apple"/>
        </div>
        <div v-show="!collapsed" style="margin-left:16px">管理平台模版</div>
      </div>
      <a-menu
          v-model="current"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
      >
        <template v-for="item in list">
          <a-menu-item v-if="!item.children" :key="item.name">
            <a-icon :type="item.iconType"/>
            <span>{{ item.title }}</span>
            <router-link :to="item.path"></router-link>
          </a-menu-item>
          <template v-else>
            <sub-menu :key="item.path" :menu-info="item"/>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed?'80px':'200px',transition: 'margin 0.2s'}">
      <a-layout-header :style="{padding: 0 , position: 'fixed', zIndex: 1, width: '100%' }">
        <div
            :style="{display: 'flex', backgroundColor:'#ffffff',justifyContent: 'space-between',alignItems:'center',width:collapsed? `calc(100% - 80px)`:` calc(100% - 200px)`,transition: 'width 0.2s'}">
          <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
          />
          <a-button type="link" @click="logoutHandler">退出登录</a-button>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '80px 16px 0', overflow: 'initial' }">
        <div>
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

import SubMenu from '../../components/SubMenu.vue';

export default {
  components: {
    'sub-menu': SubMenu,
  },
  data() {
    return {
      collapsed: false,
      list: [],
      current: [this.$router.history.current.name]
    };
  },
  computed: {},
  watch: {
    $route(to) {
      this.current = [to.name]
    }
  },
  mounted() {
    this.initHandler()
  },
  methods: {
    initHandler() {
      console.log('初始化')
      const routesList = this.$router.options.routes
      console.log('routesList:', routesList)

      const mainRoutesCollection = routesList.filter((item) => item.name === 'MainView')
      this.list = mainRoutesCollection[0]['children']
    },
    logoutHandler() {
      const that = this
      this.$confirm({
        title: '确定退出登录吗?',
        onOk() {
          that.$router.replace({name: 'LoginView'})
        },
      });
    }
  }
};
</script>
<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: 32px;
  margin: 16px;
  font-size: 20px;
  color: #fff;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 16px;
  cursor: pointer;
  transition: color 0.2s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
  