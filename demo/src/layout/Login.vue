<template>
  <div class="login">
    <div class="login_container" align="center">
      <el-card>
        <div slot="header" class="clearfix">
          <div class="avatar_box">
            <img
              src="@/assets/css/logo.png"
              alt=""
              class="img1"
            />
          </div>
        </div>
        <table align="center">
          <tr>
            <td>用户名:</td>
            <td>
              <el-input
                v-model="user.username"
                placeholder="请输入用户名"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码:</td>
            <td>
              <el-input
                v-model="user.password"
                placeholder="请输入密码"
                @keydown.enter.native="doLogin"
              ></el-input>
            </td>
          </tr>
          </table>
          <table>
          <tr>
            <td>
              <el-button type="primary" @click="doLogin">登录</el-button>
            </td>
            <td>
              <el-button type="primary" @click="doRegister">注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: ' ',
        password: ' '
      }
    }
  },
  methods: {
    doLogin () {
      if (
        this.user.username === 'zhanshan' &&
        this.user.password === '123456'
      ) {
        alert('登录成功')
      } else {
        alert('账号密码错误')
      }
    },
    doRegister () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style>
.login {
  height: 69.5%;
  background-color: #545c64;
  padding-top: 15%;
  overflow:hidden;
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
  transform: translate(-50%,-50%);
  background-color: #fff;
}

.clearfix{
  height: 60px;
}

.img1{
  height:100%;
  width:100%;
  border-radius: 50%;
  background-color: #eee;
}
</style>
