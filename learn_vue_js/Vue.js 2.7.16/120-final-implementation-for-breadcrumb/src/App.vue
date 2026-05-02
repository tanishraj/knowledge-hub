<template>
  <div id="app">
    <h3>All Links</h3>
    <ul>
      <li>
        <router-link to="/" tag="a" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/course" tag="a" exact>Course</router-link>
      </li>
	  <li>
		  <router-link to="/course/hindi" tag="a" exact>Hindi</router-link>
	  </li>
	  <li>
		  <router-link to="/course/hindi/english" tag="a" exact>English</router-link>
	  </li>
    </ul>
    <router-view/>
    <bread-crumb></bread-crumb>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: "app",
  components: {
    BreadCrumb
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
