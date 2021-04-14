<template>
  <div class="question">
    <el-card>
      <div slot="header">
        <el-row :gutter="5">
        <el-col :span="6" :style="{float:'left'}">
          <el-button type="primary" size='small' icon="el-icon-upload" @click="upload">上传</el-button>
          <el-button type="primary" size="small" icon="el-icon-folder-add"  @click="$ref.EditDialog.create()">新建</el-button>
        </el-col>
        <el-col :span="4" :offset="10">
        <el-input v-model="search" placeholder="Search" size='small' prefix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="4" :style="{float:'right'}">
            <el-button size='small' type="info" icon="el-icon-arrow-down">选择</el-button>
            <el-button type="info" size='small' icon="el-icon-download">下载</el-button>
        </el-col>
         </el-row>
        <EditDialog  ref="EditDialog"/>
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
            prop="content"
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
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="primary" size="small">编辑</el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import EditDialog from '@/views/modules/EditDialog'
export default {
  components: {
    EditDialog
  },
  data () {
    return {
      /* visible: false, */
      questionData: [{
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      },
      {
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      },
      {
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      },
      {
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      },
      {
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      },
      {
        content: '123',
        analysis: 'asdaasdasdasdasdasdasdasdasdasdasds',
        score: '5',
        name: '16161',
        difficulty: '难',
        type: '判断',
        subject: '数学',
        date: '2021-10-09'
      }]
    }
  },
  methods: {
    question () {
      this.visible = true
      /* this.$router.push({path: '/home/editdialog'}) */
    },
    upload () {
      this.$router.push({path: '/home/upload'})
    }
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
