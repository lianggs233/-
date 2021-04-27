<template>
  <div class="querytest">
    <el-card>
      <div slot="header">
        <el-row :gutter="5">
        <el-col :span="12" style="text-align:start;">
          <el-button type="primary" size='small' icon="el-icon-folder-add" @click="showmodal">新建</el-button>
          <el-button type="primary" size="small" icon="el-icon-refresh" @click="refresh">刷新</el-button>
        </el-col>
        <el-col :span="12"  style="text-align:end;">
            <el-button type="info" size='small' icon="el-icon-download">下载</el-button>
        </el-col>
         </el-row>
      </div>
      <div class="table1">
        <el-table
          :data="querytest"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="testname"
            label="名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="年级"
            width="120">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时长"
            width="120">
          </el-table-column>
          <el-table-column
            prop="date"
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
    <Newtest ref="newtest"/>
  </div>
</template>

<script>
export default {
  components: {
    Newtest: () => import('./modules/Newtest')
  },
  data () {
    return {
      querytest: {
        testname: '',
        score: '',
        name: '',
        time: '',
        date: ''
      }
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
    },
    showmodal () {
      this.$nextTick(() => {
        this.$refs.newtest.initshow()
      })
    }
  },
  created () {
    let vm = this
    this.$axios.get('/'
    ).then(function (res) {
      vm.querytest = res.data
      console.log(vm.querytest)
    }).catch(function () {
      alert('连接数据库失败')
    })
  }
}
</script>

<style>
.querytest{
  min-height: 100%;
}
.table1{
  overflow-y: scroll;
}
</style>
