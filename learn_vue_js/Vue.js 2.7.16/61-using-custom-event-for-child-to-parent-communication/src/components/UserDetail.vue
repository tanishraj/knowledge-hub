<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: <strong>{{myName}}</strong></p>
        <button class="btn btn-info" @click="resetName">Reset the Name</button>
    </div>
</template>

<script>
    export default{
        // In case of parent to child componenet communication, we surely should use the props keyword in Vue JS
        props: {
            // We can validate the input data from the parent component, so this kind of implementation will show up the development error in the console when we are not in the right path
            myName:{
                type: String,
                required: true,
                default: 'Tanish Raj'
            }
        },

        // We can also use props in the child component as a data member
            methods: {
                switchName() {
                    return this.myName.split("").reverse().join("");
                },

                resetName(){
                    this.myName = "Nick";
                    this.$emit('nameWasReset', this.myName);
                }
            }

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
