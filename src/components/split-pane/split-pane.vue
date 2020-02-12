<template>
    <div class="split-pane-wrapper">
        <div class="pane pane-left" :style="{ width: leftOffsetPercent }"></div>
        <div class="pane-trigger-con" :style="{ left: triggerLeft, width: `${triggerWidth}px` }"></div>
        <div class="pane pane-right" :style="{ left: leftOffsetPercent }">
            <button @click="handleClick">改变宽度</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SplitPane',
    props: {
        triggerWidth: {
            type: Number,
            default: 8
        }
    },
    data() {
        return {
            leftOffset: 0.3
        }
    },
    computed: {
        leftOffsetPercent () {
            return `${this.leftOffset * 100}%`
        },
        triggerLeft () {
            return `calc(${(this.leftOffset * 100)}% - ${this.triggerWidth / 2}px)`
        }
    },
    methods: {
        handleClick () {
            this.leftOffset -= 0.02
        }
    }
}
</script>
<style lang="less">
.split-pane-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .pane {
        height: 100%;
        position: absolute;
        top: 0;
        &-left { // &代表.pane 等效写法
            background: palevioletred;
            // width: 30%;
        }
        &-right {
            background: paleturquoise;
            // left: 30%;
            right: 0;
        }
        &-trigger-con {
            width: 8px;
            height: 100%;
            background: red;
            position: absolute;
            z-index: 10;
            top: 0;
        }
    }
}
</style>