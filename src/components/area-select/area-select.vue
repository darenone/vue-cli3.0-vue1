<template>
    <div class="area-select">
        <Dropdown trigger="custom" placement="bottom-start" :visible="collapse" @on-clickoutside="handleClose"  @on-click="handleItemClick">
            <a href="javascript:void(0)" @click="handleAClick" class="area-select-a">
                {{ okName }}
                <i :class="collapseClass" style="font-size: 19px;"></i>
            </a>
            <DropdownMenu slot="list">
                <!-- 省  1 / 直辖市 3-->
                <div class="item">
                    <DropdownItem v-for="(item, index) in provinceList" :key="index" :name="`(1)-[${item.id}]-{${item.name}}`" :class="{active:item.id==provinceCode}">{{ item.name }}</DropdownItem>
                </div>
                <!-- 市 2 -->
                <div class="item" :style="{border: cityList.length ? '' : 'none'}">
                    <DropdownItem v-for="(item, index) in cityList" :key="index" :name="`(2)-[${item.id}]-{${item.name}}`" :class="{active:item.id==cityCode}">{{ item.name }}</DropdownItem>
                </div>
                <!-- 区县 4 -->
                <div class="item" :style="{border: districtList.length ? '' : 'none'}">
                    <DropdownItem v-for="(item, index) in districtList" :key="index" :name="`(4)-[${item.id}]-{${item.name}}`" :class="{active:item.id==districtCode}">{{ item.name }}</DropdownItem>
                </div>
                <div class="button">
                    <Button @click="handleReset">取消</Button>
                    <Button type="primary" @click="handleOk">确认</Button>
                </div>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
const _ = require('lodash')
import chinaArea from './../../../public/china-main-city/china-area.json'
import { mapState, mapMutations } from 'vuex'
export default {
    data () {
        return {
            collapse: false,
            provinceList:  [], // 省/直辖市
            cityList: [], // 市
            districtList: [], // 区县
            areaName: '中国',
            provinceCode: null,
            cityCode: null,
            districtCode: null
        }
    },
    computed: {
        ...mapState('area', [
            'selectedName'
        ]),
        // 小图标展开收缩
        collapseClass () {
            return this.collapse ? 'ivu-icon ivu-icon-md-arrow-dropdown' : 'ivu-icon ivu-icon-md-arrow-dropright'
        },
        okName () {
            let reg = /\{(.+?)\}/g // 匹配大括号
            let areaName = reg.exec(this.areaName)
            if (areaName) {
                return areaName[1]
            } else {
                return this.areaName
            }
        }
    },
    methods: {
        ...mapMutations('area', [
            'SET_SELECTED_NAME',
            'DELETE_DRILL_LINK',
            'SET_DRILL_LINK'
        ]),
        handleAClick () {
            this.collapse = !this.collapse
        },
        handleItemClick (name) {
            let reg1 = /\((.+?)\)/g // 匹配小括号
            let reg2 = /\[(.+?)\]/g // 匹配中括号
            let reg3 = /\{(.+?)\}/g // 匹配大括号
            let areaType = reg1.exec(name)[1]
            let areaCode = reg2.exec(name)[1]
            let areaName = reg3.exec(name)[1]
            this.areaCode = areaCode
            // console.log(areaType)
            // console.log(areaCode)
            // console.log(areaName)
            this.areaName = name
            switch (areaType) {
                case '1':
                    this.handleCity(areaCode)
                    this.provinceCode = areaCode
                    this.cityCode = null
                    this.districtCode = null
                    break;
                case '2':
                    this.handleDistrict(areaCode)
                    this.cityCode = areaCode
                    this.districtCode = null
                    break;
                case '4':
                    this.districtCode = areaCode
                    break;
            }
        },
        // 把省或直辖市筛选出来
        handleProvince () {
            this.provinceList = _.filter(chinaArea, (item) => {
                return item.pId == 0
            })
        },
        // 把市筛选出来
        handleCity (pid) {
            this.cityList = [] // 先置空
            this.districtList = []
            this.cityList = _.filter(chinaArea, (item) => {
                return item.pId == pid
            })
        },
        // 把区县筛选出来
        handleDistrict (pid) {
            this.districtList = [] // 先置空
            this.districtList = _.filter(chinaArea, (item) => {
                return item.pId == pid
            })
        },
        handleClose (event) {
            this.collapse = false
        },
        handleReset () {
            if (this.selectedName) {
                this.initAreaName(this.selectedName)
            } else {
                this.areaName = '中国'
                // 取消选中
                this.provinceCode = null
                this.cityCode = null
                this.districtCode = null
                // 市和区县list置空
                this.cityList = []
                this.districtList = []
            }
            this.collapse = false
        },
        handleOk () {
            this.SET_SELECTED_NAME(this.areaName)
            this.collapse = false
            // 触发echart-map组件下钻
            this.$bus.$emit('on-area-selected', this.okName)
            this.setDrillLink(this.areaName)
        },
        setDrillLink(name) {
            // 改变vuex里的drillLink
            let reg1 = /\((.+?)\)/g // 匹配小括号
            let reg2 = /\[(.+?)\]/g // 匹配中括号
            let reg3 = /\{(.+?)\}/g // 匹配大括号
            let areaType = reg1.exec(name)[1]
            let areaCode = reg2.exec(name)[1]
            let areaName = reg3.exec(name)[1]
            switch (areaType) {
                case '1':
                    this.DELETE_DRILL_LINK('中国') // 先让drillLink回到初始值
                    this.SET_DRILL_LINK(areaName)
                    break;
                case '2':
                    let provinceCode = _.find(chinaArea, (item) => {
                        return item.id == areaCode
                    }).pId
                    let provinceName = _.find(chinaArea, (item) => {
                        return item.id == provinceCode
                    }).name
                    this.DELETE_DRILL_LINK('中国') // 先让drillLink回到初始值
                    this.SET_DRILL_LINK(provinceName)
                    this.SET_DRILL_LINK(areaName)
                    break;
                case '4':
                    {
                        let cityCode = _.find(chinaArea, (item) => {
                        return item.id == areaCode
                        }).pId
                        let cityName = _.find(chinaArea, (item) => {
                            return item.id == cityCode
                        }).name
                        let provinceCode = _.find(chinaArea, (item) => {
                            return item.id == cityCode
                        }).pId
                        let provinceName = _.find(chinaArea, (item) => {
                            return item.id == provinceCode
                        }).name
                        this.DELETE_DRILL_LINK('中国') // 先让drillLink回到初始值
                        this.SET_DRILL_LINK(provinceName)
                        this.SET_DRILL_LINK(cityName)
                        this.SET_DRILL_LINK(areaName)
                    }
                    break;
                default:
                    break;
            }
        },
        // 初始化区域选择
        initAreaName (name) {
            let reg1 = /\((.+?)\)/g // 匹配小括号
            let reg2 = /\[(.+?)\]/g // 匹配中括号
            let reg3 = /\{(.+?)\}/g // 匹配大括号
            let areaType = reg1.exec(name)[1]
            let areaCode = reg2.exec(name)[1]
            let areaName = reg3.exec(name)[1]
            this.areaName = name
            switch (areaType) {
                case '0':
                    /**
                     * 如果是中国
                     */
                    this.provinceCode = null
                    this.cityCode = null
                    this.districtCode = null
                    break;
                case '1':
                    /**
                     * 如果是省或直辖市，默认选中即可
                     */
                    this.handleCity(areaCode)
                    this.provinceCode = areaCode
                    this.cityCode = null
                    this.districtCode = null
                    break;
                case '2':
                    /**
                     * 如果是地市或直辖市区县，需要找到它所属省或则直辖市通过遍历chinaArea来实现
                     */
                    // 找到所属省或直辖市id
                    let provinceCode = _.find(chinaArea, (item) => {
                        return item.id == areaCode
                    }).pId
                    this.handleCity(provinceCode)
                    this.handleDistrict(areaCode)
                    this.provinceCode = provinceCode
                    this.cityCode = areaCode
                    this.districtCode = null
                    break;
                case '4':
                    /**
                     * 如果是区县，需要找到它所属市和省通过遍历chinaArea来实现
                     */
                    // 找所属的市id
                    let cityCode = _.find(chinaArea, (item) => {
                        return item.id == areaCode
                    }).pId
                    // 找所属省的id
                    let provinceCode1 = _.find(chinaArea, (item) => {
                        return item.id == cityCode
                    }).pId
                    this.handleCity(provinceCode1)
                    this.handleDistrict(cityCode)
                    this.provinceCode = provinceCode1
                    this.cityCode = cityCode
                    this.districtCode = areaCode
                    break;
            }
        }
    },
    watch: {
        // selectedName (val) {
        //     console.log('名字变化了', val)
        //     this.initAreaName(val)
        // }
    },
    mounted () {
        this.handleProvince()
        if (this.selectedName) {
            this.initAreaName(this.selectedName)
        }
        // echart-map组件下钻的时候触发
        this.$bus.$on('on-load-map', () => {
            // console.log('下钻了')
            this.initAreaName(this.selectedName)
        })
    }
}
</script>
<style lang="less" scoped>
.collapse-enter {
    height: 0px;
}
.area-select {
    height: 100%;
    position: relative;
    &-a {
        color: #3c97f8;
        font-weight: bold;
    }
    .ivu-dropdown {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        z-index: 100;
        .ivu-dropdown-menu {
            .item {
                display: flex;
                flex-wrap: wrap;
                width: 600px;
                border-bottom: 1px solid #e4e7eb;
                .ivu-dropdown-item {
                    user-select: none;
                    font-size: 14px!important;
                }
                .ivu-dropdown-item:hover {
                    background: none;
                    color: #3c97f8;
                    font-weight: bold;
                }
                .active {
                    color: #3c97f8;
                    font-weight: bold;
                }
            }
            .button {
                float: right;
                margin: 5px;
                .ivu-btn + .ivu-btn {
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>