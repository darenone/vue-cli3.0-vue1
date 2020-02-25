<template>
    <Submenu :name="parent.title">
        <template slot="title">
            <Icon type="ios-stats" />
            {{ parent.title }}
        </template>
        <template v-for="(item, index) in parent.children">
            <side-menu-submenu
            v-if="item.children && item.children.length"
            :key="index"
            :name="item.title"
            :parent="item">
            </side-menu-submenu>
            <MenuItem v-else :key="index" :name="item.title" :to="item.path">
            <Icon type="ios-stats" />
                {{ item.title }}
            </MenuItem>
        </template>
    </Submenu>
</template>
<script>
export default {
    name: 'SideMenuSubmenu',
    props: {
        parent: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {

        }
    }
}
</script>