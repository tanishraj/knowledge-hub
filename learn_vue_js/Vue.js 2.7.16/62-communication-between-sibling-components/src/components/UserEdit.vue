<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>My age is: {{userAge}}</p>
        <button class="btn btn-warning" @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    export default{
        props: ['userAge'],
        data(){
            return{
                age: this.userAge
            }
        },

        methods: {
            editAge() {
                
                this.age = 30;
                this.$emit('ageWasEdited', this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
