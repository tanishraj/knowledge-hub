<template>
  <div id="app">
    <div class="container py-3">
      <h1 class="display-4 text-center">Quotes Book</h1>
      <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quotes-grid :quotes="quotes" @quoteDeleted="delQuote"></app-quotes-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info my-5">Info: Click on a quote to delete it.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import quotesGrid from './components/quotesGrid.vue';
  import newQuoteVue from './components/newQuote.vue';
  import quoteHeader from './components/header.vue';
  
  export default {
    name: 'app',
    data() {
      return {
        quotes: [
          'Just a quote to see something.'
        ],
        maxQuotes: 10,
      }
    },
    methods: {
      newQuote(quote) {
        if(this.quotes.length >= this.maxQuotes)
        return alert("Please delete quotes first!");
        
        this.quotes.push(quote);
      },
      delQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      'app-new-quote': newQuoteVue,
      'app-quotes-grid': quotesGrid,
      'app-header': quoteHeader,
    }
  }
</script>

<style>
  
</style>
