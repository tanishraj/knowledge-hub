export const fruitMixin = {
  data() {
    return {
      text: 'Welcome to Filters and Mixins',
      fruits: ['Apple', 'Mango', 'Banana', 'Melon'],
      filterText: ''
    }
  },

  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  }
}
