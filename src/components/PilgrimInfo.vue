<template lang="html">
    <div class="pilgrim-info-container">
        <el-alert
            v-if="getErrorText !== ''"
            :title="getErrorText"
            type="error"
            show-icon>
        </el-alert>
        <el-card class="box-card">
            <h3>Pilgrim Information</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="pilgrim-info-form">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-select v-model="ruleForm.sponsor" placeholder="Select your sponsor">
                            <el-option
                                v-for="sponsor in sponsorsList"
                                :label="sponsor.fullname"
                                :value="sponsor.id">
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
                        <el-select v-model="ruleForm.state" placeholder="State">
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
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item prop="phone">
                            <el-input class="registration-input" placeholder="Phone" v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-time-select
                            v-model="ruleForm.bestcalltime"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                            }"
                            placeholder="Best time to call">
                        </el-time-select>
                    </el-col>
                    <el-col :span="8">
                        <el-checkbox v-model="ruleForm.over18">Applicant is over 18?</el-checkbox>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="Occupation" v-model="ruleForm.occupation"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="Name for nametag" v-model="ruleForm.tagname"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-select v-model="ruleForm.maritalstatus" placeholder="Select">
                            <el-option
                                v-for="status in maritalStatuses"
                                :label="status.label"
                                :value="status.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="18">
                        <el-input
                            v-if="ruleForm.maritalstatus === 'married'"
                            class="registration-input"
                            placeholder="To whom?"
                            v-model="ruleForm.marriagepartner">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="Home church" v-model="ruleForm.homechurch"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="Home church city" v-model="ruleForm.homechurchcity"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="Pastor's name" v-model="ruleForm.homechurchpastor"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-input class="registration-input" placeholder="How often do you attend?" v-model="ruleForm.homechurchattendance"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <span class="special-needs-description">
                            <strong>SPECIAL NEEDS?</strong> If you require a
                            special diet and/or any physical/mobility
                            accommodations, please check the applicable box
                            below and give a detailed explanation. This is very
                            important information so that we can make sure you
                            can fully experience all the events/activities
                            throughout the weekend.
                        </span>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-checkbox-group v-model="ruleForm.specialneeds" class="special-needs-group">
                            <el-checkbox label="allergies">
                                 Allergies to Food (i.e. dairy, nuts, shellfish)
                            </el-checkbox>
                            <el-checkbox label="dietary">
                                 Medical necessary Diets (i.e. vegetarian, no salt, diabetic, gluten free, etc...)
                            </el-checkbox>
                            <el-checkbox label="medical">
                                <div class="special-needs-label">
                                    Medical / Physical Requirements (ie: cpap
                                    machine &amp; plug, language or hearing
                                    assistance, medications at a specific time,
                                    mobility issues, wheelchair assistance,
                                    recent surgeries, hygiene assistance)
                                </div>
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input
                            type="textarea"
                            :rows="8"
                            placeholder="Applicant - Please tell us why you would like to attend Cursillo and list in detail your current involvement within your church:"
                            v-model="ruleForm.reasontoattend">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input class="registration-input" placeholder="Signature: Please type your full name" v-model="ruleForm.signed"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <span class="pilgrim-disclaimer">
                            <strong>PLEASE NOTE:</strong> Reservations are
                            limited. Once approved for a weekend, if the
                            requirements are met and the applicant is endorsed
                            to attend the weekend, a letter of invitation will
                            be mailed to you and your sponsor will contact you
                            to confirm your attendance. At least two sets of
                            weekends are held each year. Should you decline to
                            attend a weekend, you will need to reapply. The
                            following information is for Cursillo purposes only
                            and is private and confidential.
                        </span>
                    </el-col>
                </el-row>
                <el-button>Cancel</el-button>
                <el-button type="primary" v-on:click="submitPilgrimRegistration" v-bind:disabled="ruleForm.email === ''" v-bind:loading="submitting">{{getSubmitButtonText}}</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { states } from './states';

export default {
    name: 'PilgrimInfo',
    computed: {
        sponsorsList() {
            return this.$store.getters.getSponsors;
        },
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
            states,
            maritalStatuses: [
                { label: 'Single', value: 'single' },
                { label: 'Married', value: 'married' },
                { lable: 'Separated', value: 'separated' },
                { label: 'Divorced', value: 'divorced' },
                { label: 'Widowed', value: 'widowed' }
            ],
            ruleForm: {
                firstname: '',
                lastname: '',
                email: '',
                state: '',
                bestcalltime: '',
                over18: false,
                maritalstatus: '',
                specialneeds: [],
                sponsor: '',
                signed: ''
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
    created() {
        this.$store.dispatch('getSponsorsList', this.ruleForm);
    },
    methods: {
        submitPilgrimRegistration() {
            this.$store.dispatch('sendPilgrimRegistration', this.ruleForm);
        }
    }
};
</script>

<style lang="css" scoped>
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

.el-form-item {
    margin-bottom: 8px;
}

.el-checkbox+.el-checkbox {
    margin-left: 0;
}

.special-needs-group {
    text-align: left;
}

.special-needs-group label {
    margin-bottom: 10px;
}

.special-needs-label {
    display: inline-block;
    margin-left: 4px;
    vertical-align: top;
    white-space: normal;
    width: 66%;
}

.pilgrim-disclaimer,
.special-needs-description {
    display: inline-block;
    text-align: left;
}
</style>
