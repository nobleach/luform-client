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

<style lang="css">
</style>
