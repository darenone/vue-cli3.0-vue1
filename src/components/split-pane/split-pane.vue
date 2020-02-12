<template>
    <div class="split-pane-wrapper">
        <div class="pane pane-left"></div>
        <div></div>
        <div class="pane pane-right"></div>
    </div>
</template>
<script>
export default {
    name: 'SplitPane'
}
</script>
<style lang="less">
.split-pane-wrapper {
    width: 100%;
    height: 100%;
    .pane {
        height: 100%;
        &-left { // &代表.pane 等效写法

        }
    }
}
</style>