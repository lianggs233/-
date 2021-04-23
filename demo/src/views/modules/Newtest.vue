<template>
  <div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose">
      <div>
        <el-form ref="form" :model="form" label-width="auto" label="left">
          <el-steps :active="active" finish-status="success">
            <el-step title="考试描述"></el-step>
            <el-step title="每题分数"></el-step>
            <el-step title="选择题目"></el-step>
          </el-steps>
          <div v-show="active === 0">
            <el-form-item label="考试名称">
              <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item label="考试限时">
              <el-input v-model="model" :min="1" :max="200" style="width:90%"></el-input>分钟
            </el-form-item>
            <el-form-item label="考试简述">
              <el-input v-model="model" type="textarea"></el-input>
            </el-form-item>
          </div>
          <div v-show="active === 1">
            <el-form-item label="单选题">
              <el-input v-model="model" style="width:90%"></el-input>分
            </el-form-item>
            <el-form-item label="多选题">
              <el-input v-model="model" style="width:90%"></el-input>分
            </el-form-item>
            <el-form-item label="判断题">
              <el-input v-model="model" style="width:90%"></el-input>分
            </el-form-item>
            <el-form-item label="填空题">
              <el-input v-model="model" style="width:90%"></el-input>分
            </el-form-item>
            <el-form-item label="简答题">
              <el-input v-model="model" style="width:90%"></el-input>分
            </el-form-item>
          </div>
          <div v-show="active === 2">
            <el-form-item label="选择单选题">
              <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item label="选择多选题">
              <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item label="选择判断题">
              <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item label="选择填空题">
              <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item label="选择简答题">
              <el-input v-model="model"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="backward" :style="{float:'left'}" v-if="active > 0">上一步</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="next" v-if="active < 2">下一步</el-button>
        <el-button type="primary" @click="dialogVisible = false" v-if="active == 2">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      active: 0,
      dialogVisible: false
    }
  },
  methods: {
    backward () {
      this.active--
    },
    next () {
      this.active++
    },
    initshow () {
      this.dialogVisible = true
    }
  }
}
</script>
