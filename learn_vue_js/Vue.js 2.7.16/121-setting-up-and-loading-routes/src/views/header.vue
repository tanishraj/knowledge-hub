<template>
  <div>
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/user" tag="li" active-class="active">
        <a>User</a>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
ul.nav-pills {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 3px;

    a {
      font-weight: 700;
      color: rgb(2, 211, 131);
      &:hover {
        color: rgb(0, 255, 179);
      }
    }
  }
}
</style>
