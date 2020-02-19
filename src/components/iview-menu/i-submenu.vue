<template>
    <Submenu :name="name">
        <slot name="title"></slot>
        <slot></slot>
    </Submenu>
</template>
<script>

export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>