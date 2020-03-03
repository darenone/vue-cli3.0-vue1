<template>
    <div class="area-select">
        <Dropdown trigger="custom" placement="bottom-start" :visible="collapse" @on-clickoutside="handleClose"  @on-click="handleItemClick">
            <a href="javascript:void(0)" @click="handleAClick" class="area-select-a">
                {{ areaName }}
                <i :class="collapseClass" style="font-size: 19px;"></i>
            </a>
            <DropdownMenu slot="list">
                <!-- 省  1 / 直辖市 3-->
                <div class="item">
                    <DropdownItem v-for="(item, index) in provinceList" :key="index" :name="`(1)-[${item.id}]-{${item.name}}`">{{ item.name }}</DropdownItem>
                </div>
                <!-- 市 2 -->
                <div class="item" :style="{border: cityList.length ? '' : 'none'}">
                    <DropdownItem v-for="(item, index) in cityList" :key="index" :name="`(2)-[${item.id}]-{${item.name}}`">{{ item.name }}</DropdownItem>
                </div>
                <!-- 区县 4 -->
                <div class="item" :style="{border: districtList.length ? '' : 'none'}">
                    <DropdownItem v-for="(item, index) in districtList" :key="index" :name="`(4)-[${item.id}]-{${item.name}}`">{{ item.name }}</DropdownItem>
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
import chinaArea from '@/assets/json/china-area.json'
export default {
    data () {
        return {
            collapse: false,
            provinceList: [], // 省/直辖市
            cityList: [], // 市
            districtList: [], // 区县
            areaName: '中国'
        }
    },
    computed: {
        // 小图标展开收缩
        collapseClass() {
            return this.collapse ? 'ivu-icon ivu-icon-md-arrow-dropdown' : 'ivu-icon ivu-icon-md-arrow-dropright'
        }
    },
    methods: {
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
            // console.log(areaType)
            // console.log(areaCode)
            // console.log(areaName)
            this.areaName = areaName
            switch (areaType) {
                case '1':
                    this.handleCity(areaCode)
                    break;
                case '2':
                    this.handleDistrict(areaCode)
                    break;
                default:
                    break;
            }
        },
        // 把省或直辖市筛选出来
        handleProvince () {
            this.provinceList = _.filter(chinaArea, (item) => {
                return item.pId == 0
            })
            console.log(this.provinceList)
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
            this.collapse = false
        },
        handleOk () {
            this.collapse = false
        }
    },
    mounted () {
        this.handleProvince()
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