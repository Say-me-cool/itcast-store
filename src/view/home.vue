<template>
    <el-container class="box">
        <el-header class='header'>
            <el-row>
                <el-col :span="6">
                    <img src='@/assets/logo.png'>
                </el-col>
                <el-col :span="15" class='title'>电商后台管理系统</el-col>
                <el-col :span="1">
                    <a href='/login'>退出</a>
                </el-col>
            </el-row>
         </el-header>
        <el-container>
            <el-aside width="200px" class='left'>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="1-1">
                            <i class="el-icon-menu"></i>
                            用户列表
                        </el-menu-item>
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>权限管理</span>
                        </template>
                        <el-menu-item index="2-1">
                            <i class="el-icon-menu"></i>
                            角色列表
                        </el-menu-item>
                         <el-menu-item index="2-2">
                            <i class="el-icon-menu"></i>
                            权限列表
                        </el-menu-item>
                    </el-submenu>
                     <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item index="3-1">
                            <i class="el-icon-menu"></i>
                            商品列表
                        </el-menu-item>
                         <el-menu-item index="3-2">
                            <i class="el-icon-menu"></i>
                            分类参数
                        </el-menu-item>
                         <el-menu-item index="3-3">
                            <i class="el-icon-menu"></i>
                            商品分类
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-main class='main'>Main</el-main>
        </el-container>

    </el-container>

</template>

<script>
export default {

};

</script>

<style >

    .box {
        height: 100%;
    }
    .header {
        background-color: #b3c0d1;
        line-height: 60px;
    }
    .header .title {
        text-align: center;
        font-size: 26px;
        font-weight: 700;
    }
    .header a {

        text-decoration: none;
    }
    .left{
        background-color: #d3dce6;
    }
    .main {
       background-color: #e9eef3;
    }
</style>
