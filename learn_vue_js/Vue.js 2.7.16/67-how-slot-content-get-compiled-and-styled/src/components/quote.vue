<template>
    <div>
        <div class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    /* color value will be overridden for the parent componenet h3 tag  */
    h3{
        color: #f00;
    }
</style>