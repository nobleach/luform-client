<template>
    <div id="app">
        <el-menu theme="dark" :router="true" :default-active="activeIndex" class="luform-menu" mode="horizontal">
            <el-menu-item index="/">Pilgrim Registration</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Sponsors &amp; Pastors</template>
                <el-menu-item index="/login">Login</el-menu-item>
                <el-menu-item index="/register">Register</el-menu-item>
            </el-submenu>
            <svg version="1.1" class="luform-menu-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 279.1 55.2" style="enable-background:new 0 0 279.1 55.2;" xml:space="preserve">
            <g>
            	<path d="M0,0h15.9v38.8h24.9v12.7H0V0z"/>
            </g>
            <g>
            	<path d="M86.6,35.1L76,43.3l-3.7-4.8c-0.1,3.2-0.6,5.8-1.5,7.9c-1,2.1-2.6,4-5,5.8c-3.1,2.4-6.3,3.3-9.5,2.8
            		c-3.2-0.5-6.3-2.7-9.3-6.6L32.5,29.6l11.4-8.8l12.5,16.3c1.4,1.9,2.8,2.9,4.1,3.2c1.3,0.3,2.6-0.1,3.8-1.1c1.4-1,2.1-2.4,2.1-4.1
            		c0.1-1.7-0.9-3.9-3-6.6L52.5,14.3l11.3-8.7L86.6,35.1z"/>
            </g>
            <g>
            	<path d="M87.5,0.2h39.4v11.1h-23.4v9h20v10.4h-20v21.1h-16V0.2z"/>
            	<path d="M130.3,33.2c0-5.7,1.9-10.4,5.8-14.1c3.8-3.7,9-5.5,15.6-5.5c7.5,0,13.1,2.2,16.9,6.5c3.1,3.5,4.6,7.8,4.6,12.9
            		c0,5.7-1.9,10.4-5.7,14.1c-3.8,3.7-9.1,5.5-15.8,5.5c-6,0-10.9-1.5-14.6-4.6C132.6,44.3,130.3,39.3,130.3,33.2z M144.7,33.2
            		c0,3.3,0.7,5.8,2,7.4c1.3,1.6,3,2.4,5.1,2.4c2.1,0,3.8-0.8,5.1-2.4c1.3-1.6,2-4.1,2-7.6c0-3.2-0.7-5.6-2-7.2s-3-2.4-5-2.4
            		c-2.1,0-3.8,0.8-5.2,2.4C145.3,27.4,144.7,29.9,144.7,33.2z"/>
            	<path d="M180.2,14.4h13.4v6.1c1.3-2.6,2.6-4.5,4-5.5c1.4-1,3.1-1.5,5.1-1.5c2.1,0,4.4,0.7,6.9,2l-4.4,10.2c-1.7-0.7-3-1.1-4-1.1
            		c-1.9,0-3.3,0.8-4.4,2.3c-1.5,2.2-2.2,6.3-2.2,12.2v12.5h-14.4V14.4z"/>
            	<path d="M215.7,14.4h13.4v5.4c1.9-2.3,3.9-3.9,5.8-4.9c2-1,4.3-1.4,7.1-1.4c3,0,5.3,0.5,7.1,1.6c1.7,1.1,3.2,2.6,4.3,4.7
            		c2.2-2.4,4.3-4.1,6.1-5s4.1-1.3,6.8-1.3c4,0,7.1,1.2,9.4,3.6c2.2,2.4,3.4,6.1,3.4,11.2v23.4h-14.3V30.5c0-1.7-0.3-2.9-1-3.8
            		c-1-1.3-2.1-1.9-3.6-1.9c-1.7,0-3,0.6-4.1,1.8c-1,1.2-1.5,3.2-1.5,5.9v19.3h-14.3V31.2c0-1.6-0.1-2.8-0.3-3.3
            		c-0.3-0.9-0.8-1.7-1.6-2.3c-0.8-0.6-1.6-0.9-2.6-0.9c-1.6,0-3,0.6-4.1,1.9c-1.1,1.2-1.6,3.3-1.6,6.1v19.1h-14.3V14.4z"/>
            </g>
            </svg>
        </el-menu>
        <router-view></router-view>
        <div class="footer">
            &copy; 2017 http://artisticrevolution.com
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    activeIndex: '1'
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

.luform-menu-logo {
    fill: #bfcbd9;
    float: right;
    margin-right: 15px;
    margin-top: 18px;
    width: 90px;
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
