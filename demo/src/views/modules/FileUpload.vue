<template>
    <el-dialog
      title="上传题库"
      :visible.sync="avisible"
      width="400px"
      :before-close="dialogBeforeClose">
        <el-upload
          class="upload-demo"
          drag
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          action=""
          multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <div slot="footer">
            <el-button type="primary" @click="avisible = false">返回</el-button>
            </div>
    </el-dialog>
</template>

<style>
.upload{
 margin: 50px;
 text-align: center;
}
</style>

<script>
export default {
  name: 'fileupload',
  data () {
    return {
      avisible: false
    }
  },
  methods: {
    initShow1 () {
      this.avisible = true
    }
  }
}
</script>
