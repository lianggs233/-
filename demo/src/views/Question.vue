<template>
  <div class="question">
    <el-card>
      <div slot="header">
        <el-row :gutter="5">
        <el-col :span="12" style="text-align:start;">
          <el-button type="primary" size='small' icon="el-icon-upload" @click="showUpload">上传</el-button>
          <el-button type="primary" size="small" icon="el-icon-folder-add"  @click="showModal">新建</el-button>
        </el-col>
        <el-col :span="12"  style="text-align:end;">
            <el-button type="info" size='small' icon="el-icon-download">下载</el-button>
        </el-col>
         </el-row>
      </div>
      <div class="table1">
        <el-table
          :data="questionData"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="内容"
            width="120">
          </el-table-column>
          <el-table-column
            prop="analysis"
            label="解析"
            width="240">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="创建人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="difficulty"
            label="难度"
            width="90">
          </el-table-column>
          <el-table-column
            prop="type"
            label="题型"
            width="90">
          </el-table-column>
          <el-table-column
            prop="subject"
            label="学科"
            width="90">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作日期"
            width="145">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
          <template>
            <el-button type="primary" size="small" @click="showDetail(record)">查看</el-button>
            <el-button type="primary" size="small">编辑</el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <EditDialog ref="editdialogModal" />
    <FileUpload ref="fileuploadModal"/>
    <QuestionDetail ref="questionDetail"/>
  </div>
</template>

<script>
export default {
  components: {
    EditDialog: () => import('./modules/EditDialog'),
    FileUpload: () => import('./modules/FileUpload'),
    QuestionDetails: () => import('./modules/QuestionDetails')
  },
  data () {
    return {
      questionData: [{
        content: '',
        analysis: '',
        score: '',
        name: '',
        difficulty: '',
        type: '',
        subject: '',
        date: ''
      }]
    }
  },
  methods: {
    showModal () {
      this.$nextTick(() => {
        this.$refs.editdialogModal.initShow() /* 这种方式,直接去子组件中控制modal打开和关闭 */
      })
    },
    showUpload () {
      this.$nextTick(() => {
        this.$refs.fileuploadModal.initShow1()
      })
    },
    showDetail (record) {
      this.$nextTick(() => {
        this.$refs.questionDetail.edit(record)
      })
    }
  },
  created () {
    let vm = this
    this.$axios.get('/'
    ).then(function (res) {
      vm.questionData = res.data
      console.log(vm.questionData)
    }).catch(function () {
      alert('连接数据库失败')
    })
  }
}
</script>

<style>
.question{
  min-height: 100%;
}
.table1{
  overflow-y: scroll;
}
</style>
