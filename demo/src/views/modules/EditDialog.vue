<template>
  <div>
    <el-dialog
      title="新建问题"
      :visible.sync="visible"
      width="width"
      :before-close="dialogBeforeClose">
    <el-form :model="questionData" :label-position="labelPosition" :rules="rules" label-width="60px" label="left">
        <el-steps :active="active"  finish-status="success" class="step">
          <el-step title="问题内容"></el-step>
          <el-step title="问题分类"></el-step>
          <el-step title="问题选项"></el-step>
        </el-steps>
        <div v-show="active === 0">
          <el-form-item label="内容" prop="content">
            <div><el-input v-model="questionData.content" placeholder="请输入内容"></el-input></div>
          </el-form-item>
          <el-form-item label="解析" prop="analysis">
            <div><el-input v-model="questionData.analysis" placeholder="请输入解析"></el-input></div>
          </el-form-item>
        </div>
        <div v-show="active === 1">
          <el-form-item label="题型" prop="type">
          <el-select v-model="questionData.type" placeholder="请选择题型" clearable style="width:100%">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="分类" prop="categoriy">
          <el-select v-model="questionData.categoriy" placeholder="请选择分类" clearable style="width:100%">
            <el-option
              v-for="item in categories"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="难度" prop="level">
          <el-select v-model="questionData.level" placeholder="请选择难度" clearable style="width:100%">
            <el-option
              v-for="item in levels"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
        </div>
        <div v-show="active === 2">

        </div>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="backward" :style="{float:'left'}" v-if="active > 0">上一步</el-button>
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" v-if="active < 2" @click="next">下一步</el-button>
        <el-button type="primary" v-if="active == 2" @click="next">完成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
.step{
  padding-bottom: 30px;
}
</style>

<script>
/* const stepForms = [[], ['type', 'category', 'level'], ['option']] */
export default {
  name: 'edit-dialog',
  data () {
    return {
      active: 0,
      visible: false,
      questionData: {
        content: '',
        analysis: '',
        type: [],
        categoriy: [],
        level: []
      },

      types: [{
        value: '选项1',
        label: '单选题'
      },
      {
        value: '选项2',
        label: '多选题'
      },
      {
        value: '选项3',
        label: '判断题'
      }],
      categories: [{
        value: '选项1',
        label: '语文'
      },
      {
        value: '选项2',
        label: '数学'
      },
      {
        value: '选项3',
        label: '英语'
      }],
      levels: [{
        value: '选项1',
        label: '难'
      },
      {
        value: '选项2',
        label: '中'
      },
      {
        value: '选项3',
        label: '易'
      }],
      rules: {
        content: [{
          required: true, message: '请输入内容', trigger: 'blur'
        }],
        type: [{
          required: true, message: '请选择题型', trigger: 'change'
        }],
        categoriy: [{
          required: true, message: '请选择分类', trigger: 'change'
        }],
        level: [{
          required: true, message: '请选择难度', trigger: 'change'
        }]
      }
    }
  },
  methods: {
    backward () {
      this.active--
    },
    cancel () {
      this.visible = false
      this.active = 0
    },
    initShow () {
      this.visible = true
    },
    next () {
      this.active++

      /* const { form: { validateFields } } = this
      const active = step + 1
      if (active <= 2) {
        // stepForms
        validateFields(stepForms[this.active], (errors, values) => {
          if (!errors) {
            this.active = active
            // 设置题目类型(单选1、多选2或判断3)，用于最后一步问题选项的展示
            this.type = values.type
            // 清空必要的数据
            this.answerOptions = []
            this.answerOption = ''
            if (this.type === 3) {
              // 如果是判断题的话，把选项直接改成正确和错误两种
              this.options = this.judgeOptions
            } else {
              // 不是判断题那么每次要保证清空
              this.options = []
            }
          }
        })
        return
      }
      // last step，最后一步，代表完成题目编写，需要点击"完成"创建题目
      validateFields((errors, values) => { // values就是表单中校验的值，后面提交到后端接口时主要就是用这个values
        console.log('提交数据到后端')
        console.log('errors:', errors, 'val:', values)
        values.options = this.options
        values.name = this.getSummernoteContent('summernote-question-name')
        values.desc = this.getSummernoteContent('summernote-question-desc')
        if (!errors) {
          console.log('values:', values)
          // 把data中的question属性提交到后端，待写完后端接口.把前端的创建的题型提交到后端
          questionCreate(values).then(res => {
            // 成功就跳转到结果页面
            console.log(res)
            if (res.code === 0) {
              this.$notification.success({
                message: '创建成功',
                description: '问题创建成功'
              })
              // 关闭弹出框
              this.visible = false
              this.$emit('ok')
            }
          }).catch(err => {
            // 失败就弹出警告消息
            this.$notification.error({
              message: '更新',
              description: err.message
            })
          })
        } else {
        }
      }) */
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
