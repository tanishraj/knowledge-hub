<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Signup Form</h1>
          <hr>
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" id="age" class="form-control" v-model="userData.email">
          </div>

          <div class="form-group">
            <label for="pwd">Password</label>
            <input type="text" id="pwd" class="form-control" v-model="userData.password">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <div style="padding-bottom: 10px;">
            <strong>Store Data?</strong>
          </div>
          <label for="yes">
            <input type="radio" id="yes" value="yes" v-model="userData.storeData"> Yes
          </label>
          <label for="no">
            <input type="radio" id="no" value="no" v-model="userData.storeData"> No
          </label>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Last Name: {{userData.lastName}}</p>
            <p>Email: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store Data? : {{userData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/FullName.vue";

export default {
  data() {
    return {
      userData: {
        fullName: 'Tanish Raj',
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mailOptions: [],
        storeData: ""
      },
      isSubmitted: false,
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
