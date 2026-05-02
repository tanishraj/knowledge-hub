import { ref } from 'vue';

export default {
  setup() {
    const title = ref('My First Title');

    function changeTitle() {
      title.value = 'Updated Title';
    }

    return { title, changeTitle };
  }
};
