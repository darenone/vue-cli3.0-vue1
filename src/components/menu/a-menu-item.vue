<template>
    <router-link :to="path" style="text-decoration: none;display: block;padding-left: 10px;">
        <li class="a-menu-item" @click="handleClick(uId)" :class="{ 'a-menu-item-active': currentNav == uId }">
            <!-- <i :class="icon" style="padding-right: 5px;"></i> -->
            <font-awesome-icon v-if="icon" :icon="['fas', icon]"></font-awesome-icon>
            <slot></slot>
        </li>
    </router-link>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'AMenuItem',
    props: {
        /**
         * routerID
         */
        uId: {
            type: String,
        },
        /**
         * 图标
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * 路由
         */
        path: {
            type: String,
            default: ''
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
    padding: 14px 10px;
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
    border-right: 2px solid #2d8cf0;
}
</style>