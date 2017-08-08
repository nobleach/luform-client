<template lang="html">
    <div class="sponsor-info-container">
        <el-alert
            v-if="errorText !== ''"
            :title="errorText"
            type="error"
            show-icon>
        </el-alert>
        <el-card class="box-card">
            <h3>Sponsorship Information</h3>
            <div>Sponsor {{ $route.params.pilgrim }}</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="sponsor-info-form">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-alert
                            title="Carefully review the sponsor guidelines before sponsoring anyone. Send the completed application to the address below. Married couples should have the same sponsor(s). A non-refundable donation of $25 for each pilgrim sponsored is requested."
                            type="info"
                            show-icon>
                        </el-alert>
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
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'SponsorInfo',
    computed: {
        pilgrimInfo() {
            return this.$store.getters.getPilgrimInfo;
        },
        getSubmitButtonText() {
            return this.$store.getters.getSponsorSubmitButtonText;
        },
        submitting() {
            return this.$store.getters.getIsSponsorFormSubmitting;
        },
        getErrorText() {
            return this.$store.getters.getSponsorFormErrorText;
        }
    },
    data() {
        return {
            ruleForm: {
                firstname: '',
                lastname: '',
                email: '',
                state: '',
                bestcalltime: '',
                over18: false,
                maritalstatus: '',
                specialneeds: [],
                sponsorid: '',
                signed: false
            }
        };
    },
    created() {
        this.$store.dispatch('getPilgrimInfo', this.ruleForm);
    },
    methods: {
        submitSponsorReview() {
            this.$store.dispatch('sendSponsorReview', this.ruleForm);
        }
    }
};
</script>

<style lang="css" scoped>
.sponsor-info-container .box-card {
    width: 800px;
}
</style>
