export const lengthAwareMixin = {
  computed: {
    lengthAware() {
      return this.text + ' (' + this.text.length + ')';
    }
  }
}
