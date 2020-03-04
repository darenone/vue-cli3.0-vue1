<template>
    <div class="map-wrapper" ref="chartMap"></div>
</template>
<script>
const echarts = require('echarts')
import $ from 'jquery'
import china from '@/assets/json/china.json'
import cityMap from './../../../public/china-main-city/china-main-city-map.js'
console.log(cityMap)
export default {
    name: 'EchartMap',
    data () {
        return {

        }
    },
    computed: {
        myChart() {
            return echarts.init(this.$refs.chartMap);
        }
    },
    methods: {
        setSize() {
            this.myChart.resize();
        },
        resizeChart() {
            // 监听窗口宽度变化
            window.onresize = () => {
                this.setSize();
            }
        },
        renderLine () {
            let option = {
                title: {
                    text: 'echar地图使用示例',
                    subtext: '此demo来至于echart官方网站',
                    sublink: 'https://gallery.echartsjs.com/editor.html?c=x_2hwwDQ9'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} (p / km2)'
                },
                visualMap: {
                    min: 800,
                    max: 50000,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                series: [
                    {
                        name: '香港18区人口密度',
                        type: 'map',
                        mapType: '中国', // 自定义扩展图表类型
                        label: {
                            show: false
                        },
                        data: []
                    }
                ]
            }
            this.$nextTick(() => {
                // 注册地图
                echarts.registerMap("中国", china)
                // 绘制地图
                if (this.myChart) {
                    this.myChart.clear();
                    this.myChart.setOption(option);
                    window.addEventListener("resize", () => { this.myChart.resize();});
                }

            })
        },
        loadMap (name) {
            let promise
            let option = {
                title: {
                    text: 'echar地图使用示例',
                    subtext: '此demo来至于echart官方网站',
                    sublink: 'https://gallery.echartsjs.com/editor.html?c=x_2hwwDQ9'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} (p / km2)'
                },
                visualMap: {
                    min: 800,
                    max: 50000,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                series: [
                    {
                        name: '香港18区人口密度',
                        type: 'map',
                        mapType: name, // 自定义扩展图表类型
                        label: {
                            show: false
                        },
                        data: []
                    }
                ]
            }
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
                    this.myChart.on('click', (params) => {
                        console.log(params.name)
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
}
</style>