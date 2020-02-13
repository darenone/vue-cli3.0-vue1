<template>
    <div class="split-pane-con">
        <split-pane :leftOffset="leftOffset" @update="handleUpdate">
            <div slot="left">左侧内容</div>
            <div slot="right">右侧内容</div>
        </split-pane>
    </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
    components: {
        SplitPane
    },
    data () {
        return {
            leftOffset: 0.5
        }
    },
    methods: {
        handleUpdate (val) {
            this.leftOffset = val
        }
    }
}
</script>
<style lang="less">
.split-pane-con {
    width: 400px;
    height: 200px;
    background: papayawhip;
}
</style>