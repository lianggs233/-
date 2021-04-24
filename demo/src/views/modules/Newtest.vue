<template>
  <div>
    <el-dialog
      title="新建试卷"
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose">
    <div class="container">
      <el-form ref="" :model="form" label-width="auto">
        <el-form-item label="选择知识点">
          <el-cascader
          :options="point"
          :props="props"
          clearable>
        </el-cascader>
        </el-form-item>
        <el-form-item label="题目难度">
          <el-input v-model="model" min="0.30" max="1.00"></el-input>
        </el-form-item>
        <el-divider content-position="left">输入题目数量</el-divider>
        <el-form-item label="单选题">
          <el-input v-model="man"></el-input>
        </el-form-item>
        <el-form-item label="多项题">
          <el-input v-model="model"></el-input>
        </el-form-item>
        <el-form-item label="判断题">
          <el-input v-model="model"></el-input>
        </el-form-item>
        <el-form-item label="填空题">
          <el-input v-model="model"></el-input>
        </el-form-item>
        <el-form-item label="简答题">
          <el-input v-model="model"></el-input>
        </el-form-item>
        <el-form-item style="text-align:end;">
          <el-button type="primary">生 成</el-button>
        </el-form-item>
      </el-form>
    </div>
    </el-dialog>
  </div>
</template>

<style>
.el-cascader{
  width: 100%;
}
</style>

<script>
export default {
  data () {
    return {
      man: '',
      dialogVisible: false,
      props: { multiple: true },
      point: []
    }
  },
  methods: {
    initshow () {
      this.dialogVisible = true
    }
  }
}
</script>
