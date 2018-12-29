<template>
    <div class="header">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">菜鸟教程</a>
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
                    <h5>欢迎回来，{{userInfo.name}}</h5>
                    <button class="btn btn-primary btn-sm">退出登录</button>
                </div>
            </div>
        </nav>
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
    mounted () {
        this.$axios.get("/admin/adminInfo").then(res=>{
            console.log(res);
            this.userInfo=res.data.data
            
        })
    }
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
