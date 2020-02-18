<template>
    <a-sub-menu>
        <div slot="title" :style="{'padding-left': `${parent.level * 20}px`}">
            <i :class="parent.icon" style="padding-right: 5px;"></i>
            {{ parent.name }}
        </div>
        <template v-for="(item, i) in parent.children">
            <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`" :uId="`menu_${item.name}_${i}`" :icon="item.icon" :path="item.path" :style="{'padding-left': `${item.level * 20}px`}">{{ item.name }}</a-menu-item>
            <re-submenu v-else :key="`menu_item_${index}_${i}`" :parent="item" :index="i"></re-submenu>
        </template>
    </a-sub-menu>
</template>
<script>
import menuComponents from "_c/menu"
const { AMenuItem, ASubMenu } = menuComponents
export default {
    name: 'ReSubmenu', // 这里一定要有name值，才能引用自身的组件，否则不可以
    components: {
        AMenuItem,
        ASubMenu
    },
    props: {
        parent: {
            type: Object,
            default: () => {
                return {}
            }
        },
        index: {
            type: Number,
            default: 0
        }
    },
}
</script>