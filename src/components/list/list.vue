<template>
    <ul>
        <li v-for="(item, index) in list" :key="`list_item${index}`">
            <!-- <span v-if="!render">{{ item.name }}</span>
            <render-dom v-else :render-func="render" :name="item.name"></render-dom> -->
            <slot :name="item.name"></slot>
        </li>
    </ul>
</template>
<script>
import RenderDom from '_c/render-dom'
export default {
    components: {
        RenderDom
    },
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        render: {
            type: Function,
            default: () => {}
        }
    }
}
</script>