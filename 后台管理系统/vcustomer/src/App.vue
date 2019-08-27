<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Blog</a>
        </div>
        <div id="navbar" class="navbar-default">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">管理</router-link>
            </li>
            <li>
             <router-link to='/about'>关于我们</router-link>
            </li>
            <li>
             <router-link to='/add'>加入</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view ></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import Customers from './components/Customers'
import Add from './components/Add'
export default {
  name: "App",
  
  compuments:{
    Customers,
    Add,
  }
};
</script>

<style>
</style>
