<template>
    <!-- <i-sub-menu>
        <template slot="title">
            <Icon type="ios-filing" />
            Navigation Two
        </template>
        <template v-for="(item, index) in parent.children">
            <i-menu-item v-if="!item.children" :key="`menu_item_${index}`" :name="item.title">{{item.title}}</i-menu-item>
            <i-re-submenu v-else :key="`menu_item_${index}`" :parent="item"></i-re-submenu>
        </template>
    </i-sub-menu> -->
    <div></div>
</template>
<script>
import menuComponents from '_c/iview-menu'
console.log(menuComponents)
export default {
    
}
// const { ISubMenu } = menuComponents
// export default {
//     components: {
//         // IMenuItem,
//         ISubMenu
//     },
//     props: {
//         parent: {
//             type: Object,
//             default: () => {
//                 return {}
//             }
//         },
//     },
//     data () {
//         return {

//         }
//     }
// }
// </script>