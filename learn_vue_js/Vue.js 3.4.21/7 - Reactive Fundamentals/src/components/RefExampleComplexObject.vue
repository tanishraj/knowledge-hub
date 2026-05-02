<script setup>
import { ref } from 'vue'

const complexObject = ref({
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    ganv: {
      ghar: {
        mohalla: {
          houseNo: {
            number: 112
          }
        }
      }
    }
  },
  phone: '555-555-5555',
  email: 'qQp3A@example.com',
  website: 'https://example.com',
  social: {
    twitter: 'johndoe.twitter.com',
    facebook: 'johndoe.facebook.com',
    instagram: 'johndoe.instagram.com',
    linkedin: 'johndoe.linkedin.com'
  }
})

const changeName = () => {
  complexObject.value.name = 'Tanish';
}

const changeCity = () => {
  complexObject.value.address.city = 'Ballia';
}

const changeGharNumber = () => {
  complexObject.value.address.ganv.ghar.mohalla.houseNo.number = 123
}
</script>

<template>
  <div class="content">
    <button @click="changeName">Change Name to Tanish</button>
    <button @click="changeCity">Change City to Ballia</button>
    <button @click="changeGharNumber">Change Ghar Number to 123</button>
    <div>Name: {{ complexObject.name }}</div>
    <div>Age: {{ complexObject.age }}</div>
    <div>Address: {{ complexObject.address.street }}, {{ complexObject.address.city }}, {{ complexObject.address.state
      }} {{ complexObject.address.zip }} {{ complexObject.address.ganv.ghar.mohalla.houseNo.number }}</div>
    <div>Phone: {{ complexObject.phone }}</div>
    <div>Email: {{ complexObject.email }}</div>
    <div>Website: {{ complexObject.website }}</div>
    <div>Social: {{ complexObject.social.twitter }}, {{ complexObject.social.facebook }}, {{ complexObject.social
      .instagram }}, {{ complexObject.social.linkedin }}</div>
  </div>
</template>

<style scoped></style>