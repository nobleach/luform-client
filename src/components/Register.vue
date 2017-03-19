<template lang="html">
    <el-card class="box-card">
        <h3>Please register</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="registration-form">
            <el-form-item prop="firstname">
                <el-input class="registration-input" placeholder="First name" v-model="ruleForm.firstname"></el-input>
            </el-form-item>
            <el-form-item prop="lastname">
                <el-input class="registration-input" placeholder="Last name" v-model="ruleForm.lastname"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input class="registration-input" placeholder="Email address" v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input class="registration-input" placeholder="Password" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
                <el-input class="registration-input" placeholder="Retype your password" type="password" v-model="ruleForm.confirmPassword"></el-input>
            </el-form-item>
            <el-button>Cancel</el-button>
            <el-button type="primary" v-on:click="submitRegistration" v-bind:disabled="username === ''" v-bind:loading="loading">{{loadingButtonText}}</el-button>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            ruleForm: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            rules: {
                firstname: [
                    { required: true, message: 'Please input first name', trigger: 'blur' },
                    { min: 1, max: 15, message: 'Length should be 1 to 15', trigger: 'blur' }
                ],
                lastname: [
                    { required: true, message: 'Please input last name', trigger: 'blur' },
                    { min: 1, max: 15, message: 'Length should be 1 to 15', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Please input your email address', trigger: 'blur' }
                ]
            },
            loadingButtonText: 'Register',
            loading: false
        };
    },
    methods: {
        submitRegistration() {
            this.loading = true;
            this.loadingButtonText = 'Submitting...';
            console.log(JSON.stringify(this.ruleForm));
        }
    }
};
</script>

<style lang="css">
</style>
