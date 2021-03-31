<template>
  <el-container class="el-container">
      <el-aside class="el-aside">
        <Navbar></Navbar>
      </el-aside>
    <el-container>
      <el-header class="el-header">
      <Header></Header>
      </el-header>
      <el-main>
      <div class="container_main" align="center">main</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-container {
  height: 100%;
  overflow: auto;
}

.el-header {
  background-color:#545c64;
  color: #eee;
  line-height: 60px;
  height: 100%;
  text-align: right;
}

.el-aside {
  display: block;
  position: absolute;
  background-color:#545c64;
  left: 0;
  top: 60px;
  bottom: 0;
  min-height: 80%;
  width: auto;
  overflow-y: scroll;
}
</style>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
export default {
  components: {
    Navbar,
    Header
  }
}
</script>
