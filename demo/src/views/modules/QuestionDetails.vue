<template>
  <el-dialog
    title="问题详情"
    :visible.sync="visable"
    width="width"
    :before-close="dialogBeforeClose">
    <div>
      <el-form :model="form" label-width="80px">
        <h3><b>题干：</b></h3>
        <div v-html="question.name"></div>
        <br>
        <h3><b>选项：</b></h3>
        <ul>
          <li v-for="option in question.options" :key="option.id" v-html="optoon.content"></li>
        </ul>
        <br>
        <h3><b>答案：</b></h3>
        <ul>
          <li v-for="option in question.options" :key="option.id" v-show="option.answer===true" v-html="optoon.content"></li>
        </ul>
        <br>
        <ul>
          <li v-html="question.analysis"></li>
        </ul>
      </el-form>
    </div>
    <div slot="footer">
      <el-button @click="visable = false">关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      question: {},
      options: [],
      answerOption: '',
      visable: false
    }
  },
  methods: {
    edit (record) {
      this.visable = true
      this.question = record
    }
  }
}
</script>
