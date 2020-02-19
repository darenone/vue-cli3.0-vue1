<template>
    <i-sub-menu>
        <template slot="title">
            <Icon type="ios-filing" />
            Navigation Two
        </template>
        <template v-for="(item, index) in parent1.children">
            <i-menu-item v-if="!item.children" :key="`menu_item_${index}`" :name="item.title">{{item.title}}</i-menu-item>
            <i-re-submenu v-else :key="`menu_item_${index}`" :parent1="item"></i-re-submenu>
        </template>
    </i-sub-menu>
</template>
<script>
import menuComponent from '_c/iview-menu/index'
const { IMenuItem, ISubMenu } = menuComponent
export default {
    name: 'IReSubmenu',
    components: {
        IMenuItem,
        ISubMenu
    },
    props: {
        parent1: {
            type: Object,
            default: () => {
                return {}
            }
        },
    },
    data () {
        return {

        }
    },
    mounted () {
        console.log(this.parent1)
    }
}