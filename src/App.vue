<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="luform-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Pilgrim Registration</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Sponsors</template>
                <el-menu-item index="2-1">Login</el-menu-item>
                <el-menu-item index="2-2">Register</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">Pastors</template>
                <el-menu-item index="3-1">Login</el-menu-item>
                <el-menu-item index="3-2">Register</el-menu-item>
            </el-submenu>
        </el-menu>
        <router-view></router-view>
        <div class="footer">
            &copy; 2017 http://artisticrevolution.com
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.luform-menu {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
}

.el-alert {
    margin: 0 auto 30px auto;
    width: 482px;
}

.el-alert__title {
    display: inline-block;
    padding-right: 10px;
}

.footer {
    color: rgb(203, 218, 227);
    margin: 20px 0;
}
</style>
