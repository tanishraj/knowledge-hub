<template>
    <div>
        <h1>Users</h1>
        <hr>
        <p>Users list will be coming here.</p>
        <a href="javascript:void(0)" @click="navigateToHome" class="btn btn-primary">Go To Home</a>
    </div>
</template>
<script>
export default {
    methods:{
        navigateToHome(){
            this.$router.push({path:'/'})
        }
    }
}
</script>
