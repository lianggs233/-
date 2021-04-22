<template>
  <div>
    <el-card>
      <div slot="header">个人资料</div>
      <div>
        <el-form ref="" :model="form" label-width="auto">
          <el-form-item label="用户名">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="synopsis" type="textarea" placeholder="简单介绍自己"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="email" placeholder="请输入电子邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button type="primary">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
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
