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
            <div>Sponsor {{ $route.params.sponsor_id }}</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="pilgrim-info-form">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-alert
                            title="Carefully review the sponsor guidelines before sponsoring anyone. Send the completed application to the address below. Married couples should have the same sponsor(s). A non-refundable donation of $25 for each pilgrim sponsored is requested."
                            type="info"
                            show-icon>
                        </el-alert>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'SponsorInfo',
    data() {

    }
};
</script>

<style lang="css" scoped>
.sponsor-info-container .box-card {
    width: 800px;
}
</style>
