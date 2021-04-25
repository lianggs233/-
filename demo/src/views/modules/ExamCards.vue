<template>
  <div class="exam">
  <el-card>
    <div slot="header">
      <el-row :gutter="10">
        <el-col :span="12">{{ title }}</el-col>
        <el-col :span="12" style="text-align:end;">{{ nowtime }}</el-col>
      </el-row>
    </div>
    <div>{{ content.question }}</div>
    <br>
      <div v-cloak v-for="(item,index) in content.options" :key="index">
        <td v-html="item"></td>
    </div>
    <div style="margin-top:20px;">
      <el-row :gutter="5">
        <el-col :span="20"> <el-input v-model="a" placeholder="请输入答案" type="textarea"></el-input></el-col>
        <el-col :span="2"><el-button type="primary" @click="qqq">提  交</el-button></el-col>
        <el-col :span="2"><el-button type="primary">下一题</el-button></el-col>
      </el-row>
    </div>
  </el-card>
  </div>
</template>

<style>
.exam{
  margin-top: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      nowtime: '',
      title: 'asda',
      a: '',
      content: {
        question: 'adasdasda',
        options: [{
          'a': 'asdas'
        },
        {
          'b': 'asdasadas'
        },
        {
          'c': 'asdasdasdasdas'
        },
        {
          'd': 'dsadasdasdasasdasda'
        }]
      }
    }
  },
  methods: {
    getTime () {
      setInterval(() => {
        /* new Date() new一个data对象，当前日期和时间
        toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。 */
        this.nowtime = new Date().toLocaleString()
      }, 1000)
    }
    /* qqq () {
      console.log('a')
    } */
  },
  created () {
    this.getTime()
  }
}
</script>
