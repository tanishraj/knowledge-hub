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
          <hr>

          <button class="btn btn-info" @click="fetchData">Get Data From Server</button>
          <br>
          <br>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(u,index) in users"
              :key="u.userName + index"
            >{{u.userName}} {{u.email}}</li>
          </ul>
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
      users: [],

      user: {
        userName: "Tanish",
        email: "tanishraj91@gmail.com"
      }
    };
  },

  methods: {
    submitData() {
      this.$http.post("", this.user).then(
        response => {
          console.log("Data saved successfully.");
        },
        error => {
          console.log(error);
        }
      );
    },

    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          // this.users = data; This is also an approach
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style>
</style>
