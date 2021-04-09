<template>
  <div>
    <el-dialog
      title="新建问题"
      :visible.sync="dialogVisible"
      width="width"
      :before-close="dialogBeforeClose">
      <el-form :model="form">
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
