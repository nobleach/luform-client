<template lang="html">
    <div class="pilgrim-info-container">
        <el-alert
            v-if="errorText !== ''"
            :title="errorText"
            type="error"
            show-icon>
        </el-alert>
        <el-card class="box-card">
            <h3>Pilgrim Information</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="pilgrim-info-form">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-select v-model="value" placeholder="Select your sponsor">
                            <el-option
                            v-for="item in options"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item prop="firstname">
                            <el-input class="registration-input" placeholder="First name" v-model="ruleForm.firstname"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="lastname">
                            <el-input class="registration-input" placeholder="Last name" v-model="ruleForm.lastname"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="email">
                            <el-input class="registration-input" placeholder="Email address" v-model="ruleForm.email"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="18">
                        <el-form-item prop="address">
                            <el-input class="registration-input" placeholder="Street address" v-model="ruleForm.address"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item prop="aptSuite">
                            <el-input class="registration-input" placeholder="Apt/Suite" v-model="ruleForm.aptSuite"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item prop="city">
                            <el-input class="registration-input" placeholder="City" v-model="ruleForm.city"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-select v-model="value" placeholder="State">
                            <el-option
                                v-for="state in states"
                                :label="state.label"
                                :value="state.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="zip">
                            <el-input class="registration-input" placeholder="ZIP" v-model="ruleForm.zip"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-button>Cancel</el-button>
                <el-button type="primary" v-on:click="submitRegistration" v-bind:disabled="ruleForm.email === ''" v-bind:loading="submitting">{{buttonText}}</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { states } from './states';

export default {
    name: 'PilgrimInfo',
    data() {
        return {
            states,
            ruleForm: {
                firstname: '',
                lastname: '',
                email: ''
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
            }
        };
    }
};
</script>

<style lang="css">
.pilgrim-info-container .box-card {
    width: 800px;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
