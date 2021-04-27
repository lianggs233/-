<template>
  <div class="login">
    <div class="login_container" align="center">
      <el-card>
        <div slot="header" class="clearfix">
          <div class="avatar_box">
            <img src="@/assets/css/logo.png" alt="" class="img1" />
          </div>
        </div>
        <el-form  :model="user" :rules="rules">
          <el-form-item  prop="loginNumber">
            <el-input
              v-model="user.loginNumber"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input
              v-model="user.password"
              placeholder="请输入密码"
              prefix-icon="el-icon-warning"
              type="password"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item class="item_left">
            <el-button type="primary" class="btn1" @click="doLogin">登录</el-button>
          </el-form-item>
          <el-form-item class="item_left">
            <el-button type="primary" class="btn1" @click="doRegister">注册</el-button>
          </el-form-item>
          <el-form-item>
            <a href="">忘记密码</a>
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
        loginNumber: '',
        password: ''
      },
      identifyCodes: '123456789abcdefghijklmnopqrstuvwxyz',
      identifyCode: '',
      rules: {
        loginNumber: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    doLogin () {
      this.$axios.post('/user/login', {loginNumber: this.user.loginNumber, password: this.user.password}
      ).then(function (response) {
        console.log(response)
        alert('登录成功')
        this.$router.push({path: '/home'})
      }).catch(function (error) {
        console.log(error)
        alert('登录失败')
      })
    },
    doRegister () {
      this.$router.push({ path: '/register' })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style>
.login {
  height: 100%;
  background-color: #545c64;
  padding-top: 8%;
  overflow-y: scroll;
}

.login_container {
  width: 500px;
  background-color: #fff;
  margin: auto;
}

.avatar_box {
  height: 100px;
  width: 100px;
  border: 1px soild #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.clearfix {
  height: 60px;
}

.img1 {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.btn1{
  width: 70%;
}
</style>
