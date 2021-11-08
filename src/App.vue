<template>
  <div >
    <router-link to="/">Home</router-link> |
    <router-link to="/LoginForm">Login</router-link> |
    <router-link to="/UserPage">User</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
