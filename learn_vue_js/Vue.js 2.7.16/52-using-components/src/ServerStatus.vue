
<template>
    <div>
        <p>Server status: {{status}}</p>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            status: 'Critical'
        }
    },

    methods: {
        changeStatus() {
            this.status = this.status === 'Critical' ? 'Normal': 'Critical';
        }
    }
}
</script>

<style>
    
</style>