<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="1" :offset="23">
    <el-dropdown>
      <el-button class="el-icon-user" circle> </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="doParsonal">个人资料</el-dropdown-item>
        <el-dropdown-item @click.native="dialogVisible = true">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-col>
    </el-row>
    <el-dialog
      title="注意"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>注销该账户</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doBack">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    doBack () {
      this.$router.push({ path: '/' })
    },
    doParsonal () {
      this.$router.push({path: '/home/parsonal'})
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
