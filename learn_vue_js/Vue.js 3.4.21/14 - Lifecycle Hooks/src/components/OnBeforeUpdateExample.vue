<script setup>
import { ref, reactive, onBeforeUpdate, watchEffect } from 'vue';

const cart = reactive([
  { id: 1, name: 'Item 1', price: 10, quantity: 2 },
  { id: 2, name: 'Item 2', price: 20, quantity: 1 },
  { id: 3, name: 'Item 3', price: 15, quantity: 3 }
]);

const total = ref(0);

const calculateTotal = () => {
  total.value = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

watchEffect(() => {
  console.log("Watch Effect is being called")
  calculateTotal();
});

onBeforeUpdate(() => {
  console.log('Component is about to update. Calculating total...');
  calculateTotal();
});

const removeItem = (id) => {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};
</script>

<template>
  <h3>OnBeforeUpdate() Example:</h3>

  <div class="content">
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ total }}</p>
  </div>
</template>

<style scoped>
span {
  color: red;
}
</style>