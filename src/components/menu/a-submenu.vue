<template>
    <ul class="a-submenu">
        <!-- 显示标题的地方 -->
        <div class="a-submenu-title" @click="handleClick">
            <slot name="title"></slot>
        </div>
        <div v-show="showChild" class="a-submenu-child-box">
            <slot></slot>
        </div>
    </ul>
</template>
<script>
export default {
    name: 'ASubmenu',
    data () {
        return {
            showChild: false
        }
    },
    methods: {
        handleClick () {
            this.showChild = !this.showChild
        }
    }
}
</script>
<style lang="less">
.a-submenu {
    &-title {
        background: gray;
        user-select: none;
    }
    &-child-box {
        overflow: hidden;
    }
 }
</style>