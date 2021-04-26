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
          <el-form-item  prop="seccode">
            <el-row :gutter="10">
              <el-col :span="18">
            <el-input
              v-model="user.seccode"
              placeholder="请输入验证码"
              prefix-icon="el-icon-magic-stick"
              @keydown.enter.native="doLogin"
            ></el-input>
            </el-col>
            <el-col :span="6"><Identify :idetifyCode="identifyCode"></Identify></el-col>
            </el-row>
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
/* import Identify from '@/components/Identify' */
export default {
  /* components: {
    Identify
  }, */
  data () {
    return {
      user: {
        loginNumber: '',
        password: ''
        // seccode: ''
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
        /* seccode: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ] */
      }
    }
  },
  methods: {
    doLogin () {
      this.$nextTick(() => {
        this.$axios.post('/user/login', {loginNumber: this.user.loginNumber, password: this.user.password}// 没写this
        ).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
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
/*   padding-right: 0px !important; */
  overflow-y: hidden;
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
