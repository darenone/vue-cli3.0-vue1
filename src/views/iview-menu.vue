<template>
    <div class="nav">
        <div class="nav-left">
            <Menu>
                <template v-for="(item, index) in list">
                    <i-menu-item v-if="!item.children" :key="`menu_item_${index}`" :name="item.title">{{item.title}}</i-menu-item>
                    <i-re-submenu v-else :key="`menu_item_${index}`" :parent1="item"></i-re-submenu>
                </template>
            </Menu>
        </div>
        <Menu active-name="1-4" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <MenuItem name="3">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
         <MenuItem name="5">
            <Icon type="ios-people" />
            基本信息
        </MenuItem>
    </Menu>
    </div>
</template>
<script>
import menuComponent from '_c/iview-menu'
const { IMenuItem } = menuComponent
import IReSubmenu from '_c/iview-menu/i-re-submenu.vue'
export default {
    components: {
        IMenuItem,
        IReSubmenu
    },
    data () {
        return {
            theme1: 'dark',
            list: [
                {
                    title: '111',
                },{
                    title: '222',
                },{
                    title: '333',
                    children: [
                        {
                            title: '333-1',
                        },{
                            title: '333-2',
                        },{
                            title: '333-3',
                            children: [
                                {
                                    title: '333-3-1',
                                },{
                                    title: '333-3-2',
                                },{
                                    title1: '333-3-3',
                                }
                            ]
                        }
                    ]
                },{
                    title: '444',
                    children: [
                        {
                            title: '444-1',
                        },{
                            title: '444-2',
                        },{
                            title: '444-3',
                        }
                    ]
                }
            ],
        }
    }
}
</script>
<style lang="less">

</style>