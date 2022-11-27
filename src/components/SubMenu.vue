<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail"/><span>{{ menuInfo.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon :type="item.iconType"/>
        <span>{{ item.title }}</span>
        <router-link :to="item.path"></router-link>
      </a-menu-item>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item"/>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import {Menu} from 'ant-design-vue';

export default {
  name: 'SubMenu',
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
