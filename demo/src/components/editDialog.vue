<template>
  <div>
    <el-dialog
      title="新建问题"
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose">
      <el-form :model="form">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      dialogVisible: true
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
