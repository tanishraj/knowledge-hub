<template>
    <div class="row">
        <form class="text-center mb-5 col-md-12 col-md-offset-2">
            <div class="">
                <label for="newQuote">New Quote</label>
                <textarea name="quote" id="newQuote" class="form-control" :class="requiredState" cols="100" rows="3" v-model="quote" placeholder="Enter your quotes here...."></textarea>
            </div>
    
            <div class="mt-3">
                <button class="btn btn-primary" @click.prevent="createNewQuote">Add New Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: '',
                requiredState: ""
            }
        },
    
        methods: {
            createNewQuote() {
                if(this.quote != '' && this.quote != null){
                    this.$emit('quoteAdded', this.quote);
                    this.quote = '';
                    this.requiredState = ''
                } else{
                    this.requiredState = 'is-invalid';
                }
            }
        }
    }
</script>

<style>
    
</style>