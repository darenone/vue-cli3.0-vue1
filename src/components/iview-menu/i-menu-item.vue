<template>
    <MenuItem :name="name" :to="path">
        <slot></slot>
    </MenuItem>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        path: {
            type: [String, Object],
            default: ''
        }
    }
}
</script>