<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">333</div>
        <a-menu-item>333-1</a-menu-item>
        <a-menu-item>333-2</a-menu-item>
        <a-sub-menu>
          <div slot="title">333-3</div>
          <a-menu-item>333-3-1</a-menu-item>
          <a-menu-item>333-3-1</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`" :uId="`menu_${item.title}_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from "_c/menu"
import ReSubmenu from '_c/menu/re-submenu.vue'
const { AMenu, AMenuItem, ASubMenu } = menuComponents
export default {
  name: 'menu_page',
  components: {
    // ...menuComponents // es6展开运算符
    AMenu,
    AMenuItem,
    ASubMenu,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },{
          title: '222'
        },{
          title: '333',
          children: [
            {
              title: '333-1'
            },{
              title: '333-2'
            },{
              title: '333-3',
              children: [
                {
                  title: '333-3-1'
                },{
                  title: '333-3-2'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>