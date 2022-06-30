<template>
<div class="container-fluid">
  <container>
    <header class="d-flex"> 
      <span >
        <img @click="goToHome" src="../assets/logo.png" class="logo" alt="">
      </span>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Router-Link class="nav-link" to="/Shop">購物車</Router-Link>
        </li>
        <li class="nav-item">
          <Router-Link class="nav-link" to="/User">會員中心</Router-Link>
        </li>
        <li class="nav-item">
          <Router-Link class="nav-link" to="/Login">登入</Router-Link>
        </li>
        <li class="nav-item">
          <Router-Link class="nav-link" to="/Register">註冊</Router-Link>
        </li>
      </ul>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </container>
</div>
</template>

<script setup >
import { useRouter, RouterView, RouterLink } from 'vue-router';
const router = useRouter();
const goToHome = () => {
  router.push({
    name:"Home",
  });
  return{
    goToHome,
  }
}
</script>

<style>
.logo{
  width: 112px;
  height: 63px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}


</style>