<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">logo</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout style="overflow: hidden;">
                <Sider hide-trigger collapsible v-model="collapsed" breakpoint="sm" class="sider-wrapper">
                    <!-- 放置侧边栏导航菜单 -->
                    <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
                </Sider>
                <Layout :style="{padding: '0 10px'}">
                    <Icon type="md-menu" :size="32" :class="triggerClass" @click.native="handleCollapsed"></Icon>
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content class="content-con">
                        <Card shadow class="page-card">
                            <router-view/>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
            <Footer :style="{background: '#42b983'}">Footer</Footer>
        </Layout>
    </div>
</template>
<script>
import SideMenu from '_c/side-menu'
export default {
    components: {
        SideMenu
    },
    data () {
        return {
            collapsed: false,
            list: [
                {
                    title: '111',
                },{
                    title: '222',
                },{
                    title: '333',
                    children: [
                        {
                        title: '333-1',
                        },{
                        title: '333-2',
                        },{
                        title: '333-3',
                        children: [
                            {
                            title: '333-3-1',
                            },{
                            title: '333-3-2',
                            },{
                            title: '333-3-3',
                            }
                        ]
                        }
                    ]
                },{
                    title: '444',
                    children: [
                        {
                        title: '444-1',
                        },{
                        title: '444-2',
                        },{
                        title: '444-3',
                        }
                    ]
                }
            ],
            menuList: [], // 导航列表
            routerList: [] // 路由列表
        }
    },
    computed: {
        triggerClass () {
            return [
                'trigger-icon',
                this.collapsed ? 'rotate' : ''
            ]
        }
    },
    methods: {
        handleCollapsed () {
            this.collapsed = !this.collapsed
        },
        loopFun(list, index) {
        let arr = []
        index++
        list.forEach(e => {
            if (e.name) {
                if (e.children) {
                    let children = this.loopFun(e.children, index)
                    arr.push({
                    path: e.meta.path,
                    title: e.meta.title,
                    children: children,
                    icon: e.meta.icon,
                    level: index
                    })
                } else {
                    arr.push({
                    path: e.meta.path,
                    title: e.meta.title,
                    icon: e.meta.icon,
                    level: index
                    })
                }
            }
        })
        return arr;
        },
    },
    mounted () {
        this.routerList = this.$router.options.routes
        this.menuList = this.loopFun(this.routerList, 0)
        console.log(this.menuList)
    }
}
</script>
<style lang="less">
.layout-wrapper {
    height: 100%;
    .sider-wrapper {
        background: palegoldenrod;
        overflow-y: auto;
    }
}
.layout-outer {
    height: 100%;
    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .trigger-icon {
        cursor: pointer;
        width: 32px;
        transition: transform .3s ease;
        &.rotate {
            transform: rotateZ(-90deg);
            transition: transform .3s ease;
        }
    }
    .content-con {
        padding: 10px;
        .page-card {
            min-height: ~"calc(100vh - 254px)"
        }
    }
}
</style>