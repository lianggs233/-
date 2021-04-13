<template>
  <div>
     <div v-show="currentStep === 0">
          <a-form-item label="题干" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <div id="summernote-question-name"></div>
          </a-form-item>
          <a-form-item label="解析" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <div id="summernote-question-desc"></div>
          </a-form-item>
        </div>
        <div v-show="currentStep === 1">
          <a-form-item label="题型" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-select v-decorator="['type', {rules: [{required: true}]}]" placeholder="请选择题型" style="width: 100%">
              <a-select-option v-for="typeObj in types" :value="typeObj.id" :key="typeObj.id">
                {{ typeObj.description }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="归类" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-select v-decorator="['category', { rules: [{required: true}]}]" placeholder="请选择分类" style="width: 100%">
              <a-select-option v-for="category in categories" :value="category.id" :key="category.id">
                {{ category.name }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="难度" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-select v-decorator="['level', { rules: [{required: true}]}]" placeholder="请选择难度" style="width: 100%">
              <a-select-option v-for="level in levels" :value="level.id" :key="level.id">
                {{ level.description }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <div v-show="currentStep === 2">
          <!-- 非判断题的时候显示 -->
          <a-form-item label="创建选项" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="type!==3">
            <a-input
              v-decorator="['option', { rules: [{required: true}]}]"
              placeholder="输入内容后按Enter添加到下方选项列表"
              @pressEnter="addOption()"
            />
          </a-form-item>

          <a-form-item label="设置答案" :labelCol="labelCol" :wrapperCol="wrapperCol" enterButton="Search">
            <!-- 注意这里要按照单选、多选和判断进行区分 -->
            <!-- 单选 -->
            <a-select
              style="width: 100%"
              placeholder="请选择单选题的答案"
              v-if="type===1"
              @change="handleSingleChange"
              :value="answerOption"
            >

              <a-select-option v-for="(option,index) in options" :value="option.content" :key="index">
                {{ option.content }}
              </a-select-option>
            </a-select>
            <!-- 多选 -->
            <a-select
              mode="multiple"
              :size="size"
              placeholder="请选择多选题的答案"
              :value="answerOptions"
              v-if="type===2"
              style="width: 100%"
              @popupScroll="popupScroll"
              @change="handleMultiChange"
            >
              <a-select-option v-for="(option, index) in options" :value="option.content" :key="index">
                {{ option.content }}
              </a-select-option>
            </a-select>
            <!-- 判断，本质上和单选一样 -->
            <a-select
              style="width: 100%"
              placeholder="请选择判断题的答案"
              v-if="type===3"
              @change="handleSingleChange"
              :value="answerOption"
            >

              <a-select-option v-for="(option,index) in options" :value="option.content" :key="index">
                {{ option.content }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
