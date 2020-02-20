<template>
    <i-submenu :name="parent.name">
        <template slot="title">
            <Icon type="ios-filing" />
            {{ parent.name }}
        </template>
        <template v-for="(item, index) in parent.children">
            <i-menu-item v-if="!item.children" :key="`menu_item_${index}`" :name="item.name" :path="item.path">{{item.name}}</i-menu-item>
            <i-re-submenu v-else :key="`menu_item_${index}`" :parent="item"></i-re-submenu>
        </template>
    </i-submenu>
</template>
<script>
import iMenuComponents from '_c/iview-menu'
const { IMenuItem, ISubmenu } = iMenuComponents
export default {
    name: 'IReSubmenu',
    components: {
        ISubmenu,
        IMenuItem
    },
    props: {
        parent: {
            type: Object,
            default: () => {
                return {}
            }
        },
    },
    data () {
        return {

        }
    }
}
</script>