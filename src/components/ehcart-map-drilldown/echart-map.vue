<template>
    <div class="map-wrapper">
        <div ref="chartMap" style="width: 100%;height: 100%;"></div>
        <div class="link">
            <template v-for="(item, index) in drillLink">
                <span :key="index">{{ item }}</span>
                <i :key="`icon-${index}`" class="icon ivu-icon ivu-icon-ios-arrow-forward"></i>
            </template>
        </div>
    </div>
</template>
<script>
const echarts = require('echarts')
import china from '@/assets/json/china.json'
import cityMap from './../../../public/china-main-city/china-main-city-map.js'
import setOption from './config'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'EchartMap',
    data () {
        return {

        }
    },
    computed: {
        ...mapState('area', [
            'drillLink',
            'drillLink'
        ]),
        myChart() {
            return echarts.init(this.$refs.chartMap);
        }
    },
    methods: {
        ...mapMutations('area', [
            'SET_DRILL_LINK'
        ]),
        setSize() {
            this.myChart.resize();
        },
        resizeChart() {
            // 监听窗口宽度变化
            window.onresize = () => {
                this.setSize();
            }
        },
        loadMap (name) {
            let promise
            let option = setOption(name)
            if (!cityMap[name]) return;
            promise = this.$http.get(`./china-main-city/${cityMap[name]}.json`).then(json => {
                echarts.registerMap(name, json);
                // mapCache[code] = json;
                console.log(json)
                return json
            })
            promise.then(json => {
                if (this.myChart) {
                    this.myChart.clear();
                    this.myChart.setOption(option, {lazyUpdate: true});
                    this.myChart.off('click') // 先取消click再绑定
                    this.myChart.on('click', (params) => {
                        console.log(params.name)
                        this.SET_DRILL_LINK(params.name)
                        this.loadMap(params.name)
                    })
                    window.addEventListener("resize", () => { this.myChart.resize();});
                }
                // this._loadedMap = true;

                // this.$emit('on-loaded-map', json);
            })

            return promise
        }
    },
    mounted () {
        this.loadMap('中国');
        // this.renderLine(); // 渲染图表
        this.resizeChart(); // 添加监听事件，监听窗口变化
        this.setSize(); // 初始化图形大小
        console.log(this.drillLink)
    },
    beforeDestroy () {
        // 组件被销毁后解除监听事件
        window.onresize = null
        this.myChart.dispose();
    }
}
</script>
<style lang="less" scoped>
.map-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .link {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 10;
    }
}
</style>