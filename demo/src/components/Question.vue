<template>
  <div class="question">
    <el-card>
      <div slot="header">题库</div>
      <div>
        <el-table
          :data="questionData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
            width="180">
          </el-table-column>
          <el-table-column
            prop="analysis"
            label="解析"
            width="180">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="创建人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="difficulty"
            label="难度"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="题型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="subject"
            label="学科"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="操作日期"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
          </el-table-column>
          <template>
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questionData: [{
        id: '1',
        content: '123',
        analysis: 'asdas',
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
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style>
.question{
  min-height: 100%;
}
</style>
