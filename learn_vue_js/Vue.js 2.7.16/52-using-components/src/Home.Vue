
<template>
    <div>
        <server-status-component v-for="i in 5" v-bind:key="i"></server-status-component>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default{
        components: {
            'server-status-component': ServerStatus
        }
    }
</script>

<style>
    
</style>