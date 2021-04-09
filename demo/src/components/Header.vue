<template>
  <div>
    <el-dropdown>
      <el-button class="el-icon-user" circle> </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item>修改信息</el-dropdown-item>
        <el-dropdown-item @click.native="dialogVisible = true">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    doBack () {
      this.$router.push({ path: '/' })
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
