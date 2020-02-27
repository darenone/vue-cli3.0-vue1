<template>
    <div class="map-wrapper">
        <div class="map-header"></div>
        <div class="map-body">
            <echart-map></echart-map>
        </div>
    </div>
</template>
<script>
import EchartMap from './echart-map.vue'
export default {
    name: 'EMapDrilldown',
    components: { EchartMap },
    data () {
        return {

        }
    }
}
</script>
<style lang="less">
.map-wrapper {
    width: 100%;
    height: 100%;
    .map-header {
        height: 50px;
        background: antiquewhite;
    }
    .map-body {
        height: calc(100% - 50px);
        background: lightcyan;
    }
}
</style>