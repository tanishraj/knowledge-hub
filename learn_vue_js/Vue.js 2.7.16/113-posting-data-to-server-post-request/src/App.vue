<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-6 col-md-offset-3">
          <h1>Post data to server</h1>
          <hr>
          <div class="form-group">
            <label for="userName">User Name:</label>
            <input type="text" class="form-control" v-model="user.userName">
          </div>
          <div class="form-group">
            <label for="userName">Email ID:</label>
            <input type="text" class="form-control" v-model="user.email">
          </div>
          <input type="button" class="btn btn-primary" @click="submitData" value="Submit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {
        userName: "Tanish",
        email: "tanishraj91@gmail.com"
      }
    }
  },

  methods: {
    submitData(){
      this.$http.post("https://vuejs-http-2a8a7.firebaseio.com/data.json", this.user)
      .then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
  }
};
</script>

<style>
</style>
