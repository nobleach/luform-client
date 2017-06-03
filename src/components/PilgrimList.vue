<template lang="html">
    <div class="pilgrim-list-container">
        <el-card class="box-card">
            <h3>Pilgrims I can sponsor</h3>
            <div>Sponsor {{ $route.params.sponsor_id }}</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="pilgrim-info-form">
                <el-row :gutter="20">
                    <el-col :span="24">
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'PilgrimList',
    data() {

    }
};
</script>

<style lang="css" scoped>
.pilgrim-list-container .box-card {
    width: 800px;
}
</style>
