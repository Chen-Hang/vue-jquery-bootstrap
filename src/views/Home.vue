<template>
    <div class="home">
        <Header :msg="msgs"></Header>
    </div>
</template>

<script>
import Header from "@/components/Header"
export default {
    name:"Home",
    data(){
        return{
            msgs:""
        }
    },
    created () {
        this.$axios.get("/admin/adminInfo").then(res=>{
            console.log(res);
            this.msgs=res.data.data
            
        })  
    },
    components:{
        Header
    }
}
</script>

<style>

</style>
