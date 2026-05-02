<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: <strong>{{myName}}</strong></p>
    </div>
</template>

<script>
    export default{
        // In case of parent to child componenet communication, we surely should use the props keyword in Vue JS
        props: [
            // We can change the name into camel case but only for single template
            'myName',
        ],

        // We can also set our name attribute to avoid the error in the console.
        // data() {
        //     return{
        //         name: "Tanish Singh"
        //     }
        // }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
