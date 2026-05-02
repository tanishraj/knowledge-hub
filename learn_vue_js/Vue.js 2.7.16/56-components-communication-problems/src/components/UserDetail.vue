<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: <strong>{{name}}</strong></p>
    </div>
</template>

<script>
    export default{
        // We can also set our name attribute to avoid the error in the console.
        data() {
            return{
                name: "Tanish Singh"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
