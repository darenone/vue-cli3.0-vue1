<template>
    <div class="area-select">
        <Dropdown trigger="custom" placement="bottom-start" :visible="collapse" @on-clickoutside="handleClose">
            <a href="javascript:void(0)" @click="handleClick">
                中国
                <i :class="collapseClass" style="font-size: 19px;"></i>
            </a>
            <DropdownMenu slot="list">
                <div class="item">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                </div>
                <div class="item">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                </div>
                <div class="item">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>北京烤鸭</DropdownItem>
                </div>
                <div class="button">
                    <Button>取消</Button>
                    <Button type="primary">确认</Button>
                </div>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
export default {
    data () {
        return {
            collapse: false
        }
    },
    computed: {
        // 小图标展开收缩
        collapseClass() {
            return this.collapse ? 'ivu-icon ivu-icon-md-arrow-dropdown' : 'ivu-icon ivu-icon-md-arrow-dropright'
        }
    },
    methods: {
        handleClick () {
            this.collapse = !this.collapse
        },
        handleClose (event) {
            this.collapse = false
        }
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
                width: 500px;
                border-bottom: 1px solid #e4e7eb;
                .ivu-dropdown-item {
                    user-select: none;
                }
                // &+.item {
                //     border-bottom: 1px solid #e4e7eb;
                // }
            }
        }
    }
}
</style>