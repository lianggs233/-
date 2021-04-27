<template>
  <div class="register">
    <div class="register_container" align="center">
      <el-card>
        <div slot="header" class="clearfix">
          <h1>注册</h1>
        </div>
        <el-form :model="user" :rules="rules">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item prop="name">
                <el-input
                v-model="user.name"
                placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item  prop="password">
                <el-input
                v-model="user.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="realname">
                <el-input
                v-model="user.role"
                placeholder="请输入职业"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item prop="role">
                <el-input
                v-model="user.realname"
                placeholder="请输入真名"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item prop="age">
                <el-input
                v-model="user.age"
                placeholder="请输入年龄"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item prop="gender">
                <el-input
                v-model="user.gender"
                placeholder="请输入性别"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="loginNumber">
                <el-input
                v-model="user.loginNumber"
                placeholder="请输入学号"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item prop="major">
                <el-input
                v-model="user.major"
                placeholder="请输入专业"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="grade">
                <el-input
                v-model="user.grade"
                placeholder="请输入年级"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="myclass">
                <el-input
                v-model="user.myclass"
                placeholder="请输入班级"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item  prop="phone">
                <el-input
                v-model="user.phonenum"
                placeholder="手机号"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop='email'>
                <el-input
                v-model="user.email"
                placeholder="邮箱"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item  prop="code">
                <el-input
                v-model="user.code"
                placeholder="请输入验证码"
                ></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="doSend">点击获取</el-button>
            </el-col>
          </el-row>
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
        name: '',
        realname: '',
        password: '',
        role: '',
        age: '',
        gender: '',
        loginNumber: '',
        major: '',
        grade: '',
        myclass: '',
        email: '',
        phone: '',
        code: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        realname: [
          {required: true, message: '请输入真实姓名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        role: [
          {required: true, message: '请输入职业', trigger: 'blur'}
        ],
        age: [
          {required: true, message: '请输入年龄', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请输入性别', trigger: 'blur'}
        ],
        loginNumber: [
          {required: true, message: '请输入学号', trigger: 'blur'}
        ],
        grade: [
          {required: true, message: '请输入年级', trigger: 'blur'}
        ],
        major: [
          {required: true, message: '请输入专业', trigger: 'blur'}
        ],
        myclass: [
          {required: true, message: '请输入班级', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          { type: 'string',
            message: '邮箱格式不正确',
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            trigger: 'blur' }
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {
            type: 'string',
            message: '手机号格式不正确',
            pattern: /^1[3-9]\d{9}$/,
            trigger: 'blur'
          }
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    doRegister () {
      this.$nextTick(() => {
        this.$axios.post('/user/register',
          {
            loginNumber: this.user.loginNumber,
            password: this.user.password,
            name: this.user.name,
            role: this.user.role,
            age: this.user.age,
            gender: this.user.gender,
            major: this.user.major,
            grade: this.user.grade,
            myclass: this.user.myclass,
            email: this.user.email,
            phone: this.user.phone,
            code: this.user.code
          }
        ).then(function () {
          this.$router.push({ path: '/' })
        }).catch(function (error) {
          console.log(error)
          alert('验证码错误')
        })
      })
    },
    doSend () {
      this.$axios.post('/user/register',
        {
          email: this.user.email
        }
      )
    },
    doCannel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
.register {
  min-height: 100%;
  background-color: #545c64;
  padding-top: 8%;
  overflow: scroll;
}

.register_container {
  width: 900px;
  background-color: #fff;
  margin: auto;
}

.clearfix{
  height: 30px;
}

.btn1{
  width: 80%;
}
</style>
