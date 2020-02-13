<template>
    <div class="split-pane-wrapper" ref="outer">
        <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger-con" :style="{ left: triggerLeft, width: `${triggerWidth}px` }" @mousedown="handleMouseDown"></div>
        <div class="pane pane-right" :style="{ left: leftOffsetPercent }">
            <slot name="right"></slot>
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
        },
        min: {
            type: Number,
            default: 0.1
        },
        max: {
            type: Number,
            default: 0.9
        },
        leftOffset: {
            type: Number,
            default: 0.5
        }
    },
    data() {
        return {
            canMove: false, // 鼠标弹起
            initOffset: 0, // 初始偏移量

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
        },
        handleMouseDown (event) {
            document.addEventListener('mousemove', this.handleMouseMove)
            document.addEventListener('mouseup', this.handleMouseUp)
            // event.srcElement.getBoundingClientRect().left 小红条距离左侧的距离
            this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
            this.canMove = true
        },
        handleMouseUp () { // 记录鼠标弹起事件
            this.canMove = false
        },
        handleMouseMove (event) {
            /** 
             * event.pageX 鼠标箭头距离页面左侧的距离（单位像素）
             * this.$refs.outer 获取到DOM对象
             * const object = this.$refs.outer.getBoundingClientRect() 调用DOM对象的方法，此方法返回一个对象,IE9也支持此方法
            */
           if (!this.canMove) return;
           const object = this.$refs.outer.getBoundingClientRect()
           let offsetPercent = (event.pageX - object.left - this.initOffset + this.triggerWidth / 2) / object.width
           if (offsetPercent < this.min) offsetPercent = this.min
           if (offsetPercent > this.max) offsetPercent = this.max
            // this.leftOffset = offsetPercent // 转化为% 子组件不能修改传入的值，通过事件让父组件修改
            this.$emit('update', offsetPercent)
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
            user-select: none; // 取消选中效果
            cursor: col-resize;
        }
    }
}
</style>