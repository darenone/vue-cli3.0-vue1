<template>
    <div>
        <!-- <ul @click="handleClick">
            <li @click.stop="handleClick" v-for="(item, index) in list" :key="`list_item${index}`">{{ item.name }}</li>
        </ul> -->
        <list :list="list">
            <count-to slot-scope="count" :endVal="count.name"></count-to>
        </list>
    </div>
</template>
<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
    components: {
        List,
        CountTo
    },
    data () {
        return {
            list: [
                { name: 100 },
                { name: 45 },
                { name: 45 }
            ]
        }
    },
    methods: {
        renderFunc (h, name) {
            return (
                <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} on-click={this.handleClick} endVal={name} style={{ color: 'red' }}></CountTo>
            )
        },
        handleClick (event) {
            console.log(event)
        },
        handleEnd () {
            console.log(end)
        }
    }
}
</script>