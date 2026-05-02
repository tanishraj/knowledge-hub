<template>
  <div>
    <h1>Contact</h1>
	<router-link :to="{ name: 'home' }">Home</router-link>
	<router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
	<router-link :to="{ name: 'hindi' }">Hindi</router-link>
	<router-link :to="{ name: 'english' }">English</router-link>
    <router-link :to="{ name: 'math' }">Math</router-link>
  </div>
</template>

<script>
export default {
  name: 'Area21',
  data () {
    return {}
  }
}
</script>
