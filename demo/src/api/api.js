import request from '@/untils/request'

export function postLoginApi (data) {
  request.post('/user/login', data
  ).then(function (response) {
    console.log(response)
    alert('登录成功')
    this.$router.push({path: '/home'})
  }).catch(function (error) {
    console.log(error)
    alert('登录失败')
  })
}
