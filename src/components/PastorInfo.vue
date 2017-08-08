<template lang="html">
    <div class="pastor-info-container">
        <el-alert
            v-if="getErrorText !== ''"
            :title="getErrorText"
            type="error"
            show-icon>
        </el-alert>
        <el-card class="box-card">
            <h3>Pastor Information</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="pilgrim-info-form">

                </el-row>
                <el-row :gutter="20">

                </el-row>
                <el-row :gutter="20">

                </el-row>

                <el-button>Cancel</el-button>
                <el-button type="primary" v-on:click="submitPastorApproval" v-bind:disabled="ruleForm.email === ''" v-bind:loading="submitting">{{getSubmitButtonText}}</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'PastorInfo',
    computed: {
        getSubmitButtonText() {
            return this.$store.getters.getPilgrimSubmitButtonText;
        },
        submitting() {
            return this.$store.getters.getIsPilgrimFormSubmitting;
        },
        getErrorText() {
            return this.$store.getters.getPilgrimFormErrorText;
        }
    },
    data() {
        return {
            ruleForm: {

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
    },
    methods: {
        submitPastorApproval() {
            this.$store.dispatch('sendPastorApproval', this.ruleForm);
        }
    }
};
</script>

<style lang="css" scoped>
.pastor-info-container .box-card {
    margin-top: 80px;
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

.el-form-item {
    margin-bottom: 8px;
}

.el-checkbox+.el-checkbox {
    margin-left: 0;
}
</style>
