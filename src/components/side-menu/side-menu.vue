<template>
    <div class="side-menu-wrapper">
        <!-- 展示logo的地方 -->
        <slot></slot>
        <!-- icon展开显示menu菜单 -->
        <Menu width="auto" v-if="!collapsed" @on-select="handleSelect">
            <template v-for="(item, index) in list">
                <!-- 如果item有children -->
                <!-- <Submenu v-if="item.children" :key="index" :name="item.title"></Submenu> -->
                <side-menu-submenu
                v-if="item.children"
                :key="index"
                :name="item.title"
                :parent="item"></side-menu-submenu>
                <!-- 如果item没有children -->
                <MenuItem v-else :key="index" :name="item.title">
                    <Icon type="ios-stats" />
                    {{ item.title }}
                </MenuItem>
            </template>
        </Menu>
        <!-- icon收缩显示dropdown菜单 -->
        <div v-else class="dropdown-wrapper">
            <template v-for="(item, index) in list">
                <side-menu-dropdown v-if="item.children" @on-select="handleSelect" :showTitle="false" :key="index" :parent="item"></side-menu-dropdown>
                <Tooltip v-else transfer :content="item.title" placement="right" :key="index">
                    <a class="drop-menu-a" @click="handleClick(item.title)">
                        <Icon type="ios-stats" size="20"/>
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
import SideMenuSubmenu from './side-menu-submenu.vue'
import SideMenuDropdown from './side-menu-dropdown.vue'
export default {
    name: 'SideMenu',
    components: {
        SideMenuSubmenu,
        SideMenuDropdown
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {

        }
    },
    methods: {
        handleSelect (name) {
            console.log(name)
        },
    },
    mounted () {
        // console.log(this.list)
    }
}
</script>
<style lang="less">
.side-menu-wrapper {
    width: 100%;
    .ivu-tooltip, .drop-menu-a {
        width: 100%;
        display: block;
        text-align: center;
        padding: 5px 0;
    }
    .dropdown-wrapper > .ivu-dropdown {
        display: block;
        margin: 0 auto;
        padding: 5px 0;

    }
}
</style>