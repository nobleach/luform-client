<template lang="html">
    <div class="sponsor-info-container">
        <el-alert
            v-if="errorText !== ''"
            :title="errorText"
            type="error"
            show-icon
        >
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

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="address">
                            <el-input class="registration-input" placeholder="Address" v-model="ruleForm.address"></el-input>
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
                        <el-form-item prop="state">
                            <el-input class="registration-input" placeholder="State" v-model="ruleForm.state"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="zip">
                            <el-input class="registration-input" placeholder="Zip Code" v-model="ruleForm.zip"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item prop="phone">
                            <el-input class="registration-input" placeholder="Phone" v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="bestcalltime">
                            <el-input class="registration-input" placeholder="Best Time To Call" v-model="ruleForm.bestcalltime"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input class="registration-input" placeholder="Applicant's Name (first/last)" v-model="ruleForm.applicantfullname"></el-input>

                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <p class="text">Is this applicant a baptized member in regular attendance and/or active in ministries of a Lutheran church?</p>

                    </el-col>
                    <el-col :span="12">
                            <el-radio class="radio registration-input" v-model="ruleForm.baptizedlutheran" label="1">Yes</el-radio>
                            <el-radio class="radio registration-input" v-model="ruleForm.baprtizedlutheran" label="2">No</el-radio>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <p class="text">If applicable, did you discuss Lutheran Cursillo with the applicant's spouse?</p>

                    </el-col>
                    <el-col :span="12">
                            <el-radio class="radio registration-input" v-model="ruleForm.hadcursillospousediscussion" label="1">Yes</el-radio>
                            <el-radio class="radio registration-input" v-model="ruleForm.hadcursillospousediscussion" label="2">No</el-radio>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <p class="text">Will both be applying to attend the weekend?</p>
                    </el-col>
                    <el-col :span="12">
                        <el-radio class="radio registration-input" v-model="ruleForm.bothspousesattending" label="1">Yes</el-radio>
                        <el-radio class="radio registration-input" v-model="ruleForm.bothspousesattending" label="2">No</el-radio>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="singlespouseexplanation">
                            <el-input class="registration-input" placeholder="*If ansered No, please explain Briefly" v-model="ruleForm.singlespouseexplanation"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="goodcandidatereason">
                            <el-input class="registration-input" placeholder="Why do you think this person is a good candidate for a Cursillo weekend?" v-model="ruleForm.goodcandidatereason"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="cursilloattitude">
                            <el-input class="registration-input" placeholder="Briefly state the applicant's attitude toward Lutheran Cursillo" v-model="ruleForm.applicantattitude"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="applicantexpectations">
                            <el-input class="registration-input" placeholder="With leadership in mind, what do you expect this person to gain from the Cursillo experience" v-model="ruleForm.applicantexpectations"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="plantosupport">
                            <el-input class="registration-input" placeholder="How, specifically, will you support this applicant during his/her fourth day" v-model="ruleForm.plantosupport"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="otherapplicantinfo">
                            <el-input class="registration-input" placeholder="Other pertinent information about the applicant" v-model="ruleForm.otherapplicantinfo"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <p class="text">I/We have prayerfully considered sponsering this applicant, understand mr/our responsiblities as outlined in the sponsor's guidelines, and with the Lord's help will do my/our best to meet these responsibilities</p>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item prop="signed_sponsor">
                            <el-input class="registration-input" placeholder="Sponsor Signed" v-model="ruleForm.signed_sponsor"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item prop="created_at">
                            <el-input class="registration-input" placeholder="Date" v-model="ruleForm.created_at"></el-input>
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

.text
{
   font-size:14px;
   text-align:left;
}
</style>
