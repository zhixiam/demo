<template>
<div class="container-fluid">
  <div class="container-fluid" style="background:azure">
    <header class="row"> 
      <ul class="nav ">
        <div class="nav-item col-1">       
        </div>
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/">
            <i class="bi bi-house-door-fill"></i>
            回首頁
          </Router-Link>
        </li>
        <div class="nav-item col-6">       
        </div>
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/Shop">
            <i class="bi bi-cart4"></i>
            購物車
          </Router-Link>
        </li>
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/User">
            <i class="bi bi-person-fill"></i>
            會員中心
          </Router-Link>
        </li>
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/Login">登入</Router-Link>
        </li>
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/Register">註冊</Router-Link>
        </li>
      </ul>
    </header>
  </div>
  <div class="containter header">
  <div class="row">
    <!-- 網頁商標 -->
    <div class="col-3">
      <img src="../assets/logo.png"  class="logo" alt="">
    </div>
    <div class="col-1"></div>
    <div class="col-4 ">
      <!-- 搜尋框 -->
      <div class="d-flex center">
        <input type="text" 
          class="form-control left-radius col-3"
          v-model="input"
          placeholder="搜尋"
        >
        <button type="submit" title="搜尋" class="btn btn-primary right-radius col-1">
          <i class="bi bi-search cursor"></i>
          搜尋
        </button>
      </div>
    </div>
    <div class="col-1"></div>
    <div class="col-3">
      <!-- 活動放置 -->
      <div >
        <img src="../assets/活動.png" style="width:50%" alt="">
      </div>
    </div>
  </div>
  </div>
  <div class="containter-main">
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script setup >
import { RouterView, RouterLink } from 'vue-router';
import { ref } from 'vue';
const input = ref('')
</script>

<style>
.logo{
  width: 112px;
  height: 63px;
}
.container-fluid{
  padding-right:0;
  padding-left:0
}
.center{
  margin: 10px;
  align-items: center;
  justify-content: space-between;
}
.left-radius{
  border-top-left-radius: 1.0rem;
  border-bottom-left-radius: 1.0rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  border: 2px solid #0b5ed7;
}
.right-radius{
  border-top-right-radius: 1.0rem;
  border-bottom-right-radius: 1.0rem;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
  border: 2px solid #0b5ed7;
  width: 80px;
}
.form-control{
  box-shadow: none;
}
.header{
  margin: 10px;
  padding: 50px;
}


</style>