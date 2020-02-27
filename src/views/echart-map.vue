<template>
    <div class="echart-map-wrapper">
        <e-map-drilldown></e-map-drilldown>
    </div>
</template>
<script>
import EMapDrilldown from '_c/ehcart-map-drilldown'
export default {
    components: { EMapDrilldown },
    data () {
        return {

        }
    }
}
</script>
<style lang="less">
.echart-map-wrapper {
    margin: 0 auto;
    width: 800px;
    height: 500px;
}
</style>