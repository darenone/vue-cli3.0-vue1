<template>
    <div class="transition-dom child-right-slider" ref="box">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data () {
        return {
            height: ""
        }
    },
    methods: {
        fun_get_list: function() {
            /**
             * 网络请求获取数据后会把元素自动撑开，我们要做的就是让这个元素做展开收起动画
             * 获取这个元素的高度
             * 把获取的高度赋值给这个元素，这样这个元素就是高度固定的了，nextTick用于dom刷新后执行
             */
            let _this = this;
            _this.$nextTick(function() {
                let height = _this.$refs.box.offsetHeight;
                console.log(height)
                this.$refs.box.style.height = height + "px";
                _this.height = height + "px";
                console.log(_this.height)
            });
        }
    },
    mounted () {
        this.fun_get_list();
    }
}
</script>

<style lang="less">
.transition-dom {
    transition: all 0.3s linear 0s;
}
.child-right-slider {
    display: inline-block;
    width: 100%;
    background-color: black;
    color: white;
}
</style>