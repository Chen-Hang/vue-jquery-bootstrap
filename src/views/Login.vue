<template>
  <div class="login">
    <div class="alert alert-success" v-if="isShowSuss">{{alertMessage}}</div>
    <div class="alert alert-danger" v-if="isShowErr">{{alertMessage}}</div>
    <div class="loginBox">
      <div class="form form-horizontal" role="form">
        <div class="form-group">
          <label for="firstname" class="col-sm-2 col-sm-offset-3 control-label">账号</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="firstname" placeholder="请输入名字" v-model="username">
          </div>
        </div>
        <div class="form-group">
          <label for="lastname" class="col-sm-2 col-sm-offset-3 control-label">密码</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="lastname" placeholder="请输入姓" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-5 col-sm-2">
            <button type="button" class="btn btn-primary" @click.prevent="checkLogin">登录</button>
            <button type="submit" class="btn btn-default">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
      return{
            username:"",
            password:"",
            alertMessage:"",   //消息面板内容
            isShowSuss:false,  //控制消息面板显示,
            isShowErr:false
      }
  },
  methods: {
      checkLogin(){
          this.$axios.post("/login",{
              name:this.username,
              password:this.password
          }).then(res=>{
              console.log(res);
                var _this = this
                this.alertMessage=res.data.message;
                if(res.data.status_code==200){
                      //登陆成功调到首页
                        this.isShowSuss=true;
                      localStorage.setItem("token",res.data.data)
                      setTimeout(()=>{
                          _this.$data.isShowSuss=false  //消息提示1.5秒后关闭                 
                           this.$router.replace('/')
                      },2000)

                }else{
                          this.isShowErr=true;
                setTimeout(function () {
                    _this.$data.isShowErr=false  //消息提示1.5秒后关闭                 
                }, 2000)
                }
          

              
          }).catch(err=>{
              console.log(err);
          })
      }
  },
};
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../../static/bg.jpg");
  background-size: 100%;
}
.loginBox {
    width:100%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center
}
label{
    color: #fff
}
</style>
