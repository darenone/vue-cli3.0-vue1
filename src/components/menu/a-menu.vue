<template>
    <div class="a-menu">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AMenu'
}
</script>
<style lang="less">
.a-menu {
    & * {
        list-style: none;
        cursor: pointer;
        color: #515a6e;
    }
    width: 200px;
    ul {
        padding: 0;
        margin: 0;
    }
}
</style>