<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>My age is: {{age}}</p>
        <button class="btn btn-warning" @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

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
                // this.$emit('ageWasEdited', this.age);
                eventBus.$emit('ageWasEdited', this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
