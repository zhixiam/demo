<template>
<div class="container-fluid">
  <div class="container-fluid" style="background:azure;height: 40px;">
    <header class="container " > 
      <ul class="nav float-start ">
        <li class="nav-item ">
          <Router-Link class="nav-link" to="/">
            <i class="bi bi-house-door-fill"></i>
            回首頁
          </Router-Link>
        </li>
      </ul>
      <ul class="nav float-end">
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
        <li class="nav-item">
          <Router-Link class="nav-link" to="/Login">登入</Router-Link>
        </li>
        <li class="nav-item">
          <Router-Link class="nav-link" to="/Register">註冊</Router-Link>
        </li>
      </ul>
    </header>
  </div>
  <div class="containter d-flex" style="height:200px;" >
    <!-- 網頁商標 -->
    <div class="float-start" style="width:300px; height: 200px;">
      <img src="../assets/logo.png" style="width:100%" class="logo" alt="">
    </div>
    <!-- 搜尋框 -->
      <div class="d-flex" style="width: 800px; height: 40px;">
        <input type="text" 
          class="form-control left-radius "
          v-model="input"
          style="width:400px  "
          placeholder="搜尋"
        >
        <button type="submit" title="搜尋" class="btn btn-primary right-radius">
          <i class="bi bi-search cursor"></i>
          搜尋
        </button>  
      </div>
    <!-- 活動放置 -->
    <div class="float-end" style="width:300px; height: 200px;">
      <img src="../assets/活動.png" style="width:100%" alt="">
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
.container-fluid{
  padding-right:0;
  padding-left:0
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
.logo{
  cursor: pointer;
  display: inline-block;
}



</style>