<template>
    <Dropdown placement="right-start"   @on-click="handleClick">
        <a class="drop-menu-a" :style="titleStyle">
            <Icon type="ios-stats" size="20"/>
            <span v-if="showTitle">{{ parent.title }}</span>
        </a>
        <DropdownMenu slot="list">
            <template v-for="(item, index) in parent.children">
                <side-menu-dropdown v-if="item.children && item.children.length" :key="index" :parent="item"></side-menu-dropdown>
                <DropdownItem v-else :key="index" :name="item.title">
                    <Icon type="ios-stats" size="20"/>
                    {{ item.title }}
                </DropdownItem>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
export default {
    name: 'SideMenuDropdown',
    props: {
        parent: {
            type: Object,
            default () {
                return {}
            }
        },
        showTitle: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {

        }
    },
    computed: {
        titleStyle () {
            return {
                textAlign: this.showTitle ? 'left' : 'center',
                paddingLeft: this.showTitle ? '16px' : ''
            }
        }
    },
    methods: {
        handleClick (name) {
            // 是否是第一级路由
            if (!this.showTitle) this.$emit('on-select',)
        }
    }
}
</script>
<style lang="less">

</style>