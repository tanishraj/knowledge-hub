<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My Name is: <strong>{{myName}}</strong></p>
        <p>Age is: <strong>{{userAge}}</strong></p>
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
            },
            userAge:{
                type: Number
            }
        },

        data(){
            return {
                // Always try to create a data member which will save you from the vue warning for mutating the shared data directly
                name : this.myName
            }
        },

        // We can also use props in the child component as a data member
            methods: {
                switchName() {
                    return this.name.split("").reverse().join("");
                },

                resetName(){
                    this.name = "Nick";
                    this.$emit('nameWasReset', this.name);
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
