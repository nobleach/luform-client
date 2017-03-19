<template lang="html">
    <el-card class="box-card">
        <h3>Please register</h3>
        <form class="registration-form">
            <el-input class="registration-input" placeholder="First name" v-model="firstname"></el-input>
            <el-input class="registration-input" placeholder="Last name" v-model="lastname"></el-input>
            <el-input class="login-input" placeholder="Email address" v-model="username"></el-input>
            <el-input class="login-input" placeholder="Password" type="password" v-model="password"></el-input>
            <el-input class="login-input" placeholder="Retype your password" type="password" v-model="password"></el-input>
            <el-button>Cancel</el-button>
            <el-button type="primary" v-on:click="" v-bind:disabled="username === ''" v-bind:loading="loading">{{loadingButtonText}}</el-button>
        </form>
    </el-card>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            loadingButtonText: 'Register'
        };
    },
    methods: {
    }
};
</script>

<style lang="css">
    .registration-input {
        margin-bottom: 10px;
    }
</style>
