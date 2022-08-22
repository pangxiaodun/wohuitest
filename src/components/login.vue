<template>
  <div class="login-box">
    <div class="login-content">
      <div class="login-form">
        <div class="logo-font">WOHUI</div>
        <div>沃慧科技</div>
        <div class="title">Hi，欢迎登陆沃慧科技</div>
        <div class="input-box">
          <el-input v-model="loginData.user" placeholder="请输入用户名"></el-input>
          <el-input v-model="loginData.pwd" show-password placeholder="请输入用户名"></el-input>
          <el-button :loading="btnDisabled" class="login-btn" type="primary" @click="handleSubmit">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
    return{
      loginData:{
        user:"admin",
        pwd:"123456"
      },
      btnDisabled:false
    }
  },
  methods:{
    handleSubmit(){
      this.btnDisabled = true
      setTimeout(() => {
        axios.get('/static/login.json')
        .then((response)=> {
          // handle success
          console.log(response);
          console.log(this.loginData.user === response.data.user,'loginData')
          if(this.loginData.user === response.data.user && this.loginData.pwd === response.data.pwd ){
            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success'
            });
            this.btnDisabled = false
            this.$router.push('/user')
          }else{
            this.$message.error('用户名或密码错误');
            this.btnDisabled = false
          }
        })
        .catch(()=> {
          this.btnDisabled = false
        })
      }, 500);
      
    }
  }
 
}
</script>

<style scoped>
.login-box{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(56deg,rgba(222,239,255,.5),rgba(131,191,255,.5));
  font-family: PingFangSC-Regular,PingFang SC;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  font-size: 14px;
}
.login-content{
  width: 800px;
  height: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  box-shadow: 0 2px 20px 0 #89b1ff;
  border-radius: 20px;
  display: flex;
}
.logo-font{
  color:#89b1ff;
  font-size:60px;
  font-weight: bold;
}
.login-form{
  width:500px;
  padding-top:60px;
  margin:0 auto;
}
.title{
  font-size:34px;
  font-weight: bold;
  color:#333;
  text-align: center;
  margin-top:20px;
}
.input-box {
  width:500px;
  margin-top:30px;
}

.input-box .el-input{
  margin-bottom:20px;
}
.login-btn{
  width:100%;
}
</style>
