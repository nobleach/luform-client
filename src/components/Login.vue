<template lang="html">
    <el-card class="box-card">
        <h3>Please log in to continue</h3>
        <form class="login-form">
            <el-input class="login-input" placeholder="Email address" v-model="username"></el-input>
            <el-input class="login-input" placeholder="Password" type="password" v-model="password"></el-input>
            <el-button>Cancel</el-button>
            <el-button type="primary" v-on:click="logIn" v-bind:disabled="username === ''" v-bind:loading="loading">{{loadingButtonText}}</el-button>
        </form>
        <p class="register">Don't have a login? <router-link to="/register">Create one.</router-link></p>
    </el-card>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            loadingButtonText: 'Log in',
            loading: false
        };
    },
    methods: {
        logIn() {
            this.loading = true;
            this.loadingButtonText = 'Logging in';
        }
    }
};
</script>

<style lang="css">
    body {
        background: rgb(52, 89, 152);
    }
    .box-card {
        margin: 0 auto;
        margin-top: 80px;
        width: 480px;
    }

    .login-input {
        margin-bottom: 10px;
    }
</style>
