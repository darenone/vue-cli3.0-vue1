<template>
    <ul class="a-submenu">
        <!-- 显示标题的地方 -->
        <div class="a-submenu-title" @click="handleClick">
            <slot name="title">
            </slot>
            <i class="shrink-icon" :class="showChild ? 'fa fa-caret-down' : 'fa fa-caret-right'"></i>
            <!-- <span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)`}">^</span> -->
        </div>
        <div v-show="showChild" class="a-submenu-child-box">
            <slot></slot>
        </div>
    </ul>
</template>
<script>
// import transition from '_c/transiton'
// const { CollapseTransition } = transition
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
        // background: gray;
        user-select: none;
        position: relative;
        padding: 14px 0;
        &:hover {
            color: #2d8cf0;
        }
        .shrink-icon {
          position: absolute;
          top: 4px;
          right: 10px;
        }
    }
    &-child-box {
        overflow: hidden;
        // padding-left: 20px;
    }
 }
</style>