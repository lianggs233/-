<template>
  <div class="course">
    <el-card>
      <div slot="header">
        <el-row :gutter="5">
        <el-col :span="12" style="text-align:start;">
          <el-button type="primary" size='small' icon="el-icon-refresh" @click="refresh">刷新</el-button>
        </el-col>
        <el-col :span="12"  style="text-align:end;">
            <el-button type="info" size='small' icon="el-icon-download">下载</el-button>
        </el-col>
         </el-row>
      </div>
      <div class="table1">
        <el-table
          :data="subject"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="coursename"
            label="课程名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="major"
            label="院系"
            width="120">
          </el-table-column>
          <el-table-column
            prop="coursegrade"
            label="年级"
            width="120">
          </el-table-column>
          <el-table-column
            prop="updatetime"
            label="日期"
            width="145">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
          <template>
            <el-button type="primary" size="small" @click="showDetail()">查看</el-button>
            <el-button type="primary" size="small">编辑</el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      subject: [
        {
          coursename: '',
          major: '',
          coursegarde: '',
          updatetime: ''
        }
      ]
    }
  },
  methods: {
    showDetail (record) {
      this.$nextTick(() => {
        this.$refs.questionDetail.edit(record)
      })
    },
    refresh () {
      this.$router.go(0)
    }
  },
  created () {
    this.$axios.get('/localhost:8080/subject/list', {
      subject: [{}]
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style>
.course{
  min-height: 100%;
}
.table1{
  overflow-y: scroll;
}
</style>
