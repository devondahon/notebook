<template>
  <div id="apppo">

    <div class="container">

    <Home msg="Welcome to Your Vue.js App"/>

<ul class="nav nav-tabs">
  <li class="nav-item">
    <router-link class="nav-link" tag="a" to="/magento2">Magento 2</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" tag="a" to="/laravel">Laravel</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" tag="a" to="/vuejs">VueJS</router-link>
  </li>
</ul>

    <router-view/>

    </div>

  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Magento2 from "./components/magento2.vue";
import Laravel from "./components/laravel.vue";
import VueJS from "./components/laravel.vue";

export default {
  name: "app",
  components: {
    Home,
    Magento2,
    Laravel,
    VueJS
  }
};
</script>

<style>
#appp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
