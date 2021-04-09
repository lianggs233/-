<template>
  <div class="login">
    <div class="login_container" align="center">
      <el-card>
        <div slot="header" class="clearfix">
          <h1>注册</h1>
        </div>
        <el-form ref="user" :model="user">
          <el-form-item prop="username">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input
              v-model="user.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="email">
            <el-input
              v-model="user.email"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="phonenum">
            <el-input
              v-model="user.phonenum"
              placeholder="手机号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn1" @click="doRegister">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn1" @click="doCannel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        email: '',
        phonenum: ''
      }
    }
  },
  methods: {
    doRegister () {
      this.$router.push({ path: '/home' })
    },
    doCannel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
.login {
  height: 100%;
  background-color: #545c64;
  padding-top: 8%;
  overflow:hidden;
}

.login_container {
  width: 500px;
  background-color: #fff;
  margin: auto;
}

.clearfix{
  height: 60px;
}

.btn1{
  width: 80%;
}
</style>
