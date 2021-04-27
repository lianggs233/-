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
    return {}
  },
  methods: {
    goExam () {
      this.$router.push({path: '/home/test', name: 'test', params: 'id:1'})
    }
  }
}
</script>
