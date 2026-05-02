<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </div>
</template>

<script>
    import quote from './quote.vue';
    
    export default {
        props: ['quotes'],
    
        components: {
            'app-quote': quote
        },

        methods: {
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>
    
</style>