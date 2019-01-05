<template>

    <div class="header">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">admin</a>
                </div>
                <div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">iOS</a></li>
                        <li><a href="#">SVN</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                Java
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">jmeter</a></li>
                                <li><a href="#">EJB</a></li>
                                <li><a href="#">Jasper Report</a></li>
                                <li class="divider"></li>
                                <li><a href="#">分离的链接</a></li>
                                <li class="divider"></li>
                                <li><a href="#">另一个分离的链接</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-offset-10 loginOut">
                    <h5>欢迎回来，{{msg.name}}</h5>
                    <button class="btn btn-primary btn-sm"  data-toggle="modal" data-target="#myModal">退出登录</button>
                </div>
            </div>
        </nav>
        <!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title text-left" id="myModalLabel">LoginOut</h4>
            </div>
            <div class="modal-body">是否退出登录</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" @click="loginOut">确定</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            userInfo:""
        }
    },
    // created() {
    //     this.$axios.get("/admin/adminInfo").then(res=>{
    //         console.log(res);
    //         this.userInfo=res.data.data
            
    //     })
    // },
    methods: {
        loginOut(){
            this.$axios.post("/login/logout").then(res=>{
                console.log(res);
                if(res.data.status_code==200){
                     router.push({name:'Login'})
                }
                
            })
        }
    },
    props:["msg"]
}
</script>

<style scoped>

    .loginOut{
        display: flex;
        height: 52px;
        width: 200px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
    }
</style>
