<template>
    <MenuItem :name="name">
        <slot></slot>
    </MenuItem>
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