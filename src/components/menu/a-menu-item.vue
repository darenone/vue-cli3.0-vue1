<template>
    <li class="a-menu-item" @click="handleClick(uId)" :class="{ 'a-menu-item-active': currentNav == uId }">
        <slot></slot>
    </li>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'AMenuItem',
    props: {
        uId: {
            type: String,
        }
    },
    data () {
        return {
            target_index: null
        }
    },
    computed: {
        ...mapState([
            'currentNav'
        ])
    },
    methods: {
        ...mapMutations([
            'SET_CURRENT_NAV'
        ]),
        handleClick (uId) {
            // console.log(uId)
            this.SET_CURRENT_NAV(uId)
        }
    }
}
</script>
<style lang="less">
.a-menu-item {
    // background: #333;
    // color: #fff;
    padding: 14px 24px;
    // background: #f0faff;
    &:hover {
        color: #2d8cf0;
    }
    &:active {
        background: #f0faff;
    }
}
.a-menu-item-active {
    background: #f0faff;
    color: #2d8cf0;
    &::after {
        content: "";
        display: block;
        width: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        background: #2d8cf0;
    }
}
</style>