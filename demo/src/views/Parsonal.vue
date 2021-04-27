<template>
  <div>
    <el-card>
      <div slot="header">个人资料</div>
      <div>
        <el-form :model="user" label-width="auto">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="个人简介" prop="synopsis">
            <el-input v-model="user.synopsis" type="textarea" placeholder="简单介绍自己"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="user.email" placeholder="请输入电子邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doPull">确定</el-button>
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
      user: {
        name: '',
        synopais: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doPull () {
      this.$axios.pull('/', {
        name: this.user.name,
        email: this.user.email,
        password: this.user.email
      }).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
