<template>
  <div class="card">
    <el-card>
      <div slot="header" class="clearfix">
        <span>考试名称</span>
        <el-button type="text" style="float: right; padding: 3px 0" @click="goExam">参加考试</el-button>
      </div>
      <div v-for="o in 4" :key="o">
        {{'考试内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<style>
.card{
  margin: 2%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

</style>

<script>
export default {
  data () {
    return {
      test: [{
        id: 1,
        title: '语文',
        contont: [{
          'a': '作文'
        },
        {
          'b': '古诗'
        },
        {
          'c': '阅读理解'
        }]
      }]
    }
  },
  methods: {
    goExam () {
      const _id = this.contont.id
      this.$router.push({path: '/home/test', name: 'test', params: _id})
    }
  }
}
</script>
