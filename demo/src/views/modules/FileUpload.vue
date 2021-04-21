<template>
  <div>
    <el-dialog
      :visible.sync="visible"
      width="width"
      :before-close="dialogBeforeClose">
      <div>
      <el-card class="upload">
      <div slot="header">上传题库</div>
      <div>
        <el-upload
          class="upload-demo"
          drag
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          action=""
          multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <div style="padding-top:20px;">
        <el-button type="primary" @click="goback">返回</el-button>
      </div>
    </el-card>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="dialogVisible = false">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
.upload{
 margin: 50px;
 text-align: center;
}
</style>

<script>
export default {
  name: 'uploadModal',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    initShow1 () {
      this.visible = true
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
