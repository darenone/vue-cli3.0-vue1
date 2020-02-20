<template>
    <div class="nav">
        <div class="nav-left">
            <Menu class="menu-box">
                <template v-for="(item, index) in list">
                    <i-menu-item v-if="!item.children" :key="`menu_item_${index}`" :name="item.name">{{item.name}}</i-menu-item>
                    <i-re-submenu v-else :key="`menu_item_${index}`" :parent="item"></i-re-submenu>
                </template>
            </Menu>
        </div>
    </div>
</template>
<script>
import iMenuComponents from '_c/iview-menu'
const { IMenuItem } = iMenuComponents
import IReSubmenu from '_c/iview-menu/i-resubmenu.vue'
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
                    name: '111',
                },{
                    name: '222',
                },{
                    name: '333',
                    children: [
                        {
                            name: '333-1',
                        },{
                            name: '333-2',
                        },{
                            name: '333-3',
                            children: [
                                {
                                    name: '333-3-1',
                                },{
                                    name: '333-3-2',
                                },{
                                    name1: '333-3-3',
                                }
                            ]
                        }
                    ]
                },{
                    name: '444',
                    children: [
                        {
                            name: '444-1',
                        },{
                            name: '444-2',
                        },{
                            name: '444-3',
                        }
                    ]
                }
            ],
        }
    }
}
</script>
<style lang="less">
.menu-box {
    width: 100%;
    .ivu-menu {
        width: 100%;
    }
}
</style>