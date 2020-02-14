<template>
  <div class="menu-box">
    <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <!-- 二级菜单标题 -->
        <div slot="title">333</div>
        <a-menu-item>333-1</a-menu-item>
        <a-menu-item>333-2</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from "_c/menu"
const { AMenu, AMenuItem, ASubMenu } = menuComponents
export default {
  name: 'menu_page',
  components: {
    // ...menuComponents // es6展开运算符
    AMenu,
    AMenuItem,
    ASubMenu
  },
  data () {
    return {
      
    }
  }
}
</script>