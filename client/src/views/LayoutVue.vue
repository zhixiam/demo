<template>
  <div class="container-fluid">
    <header style="width:1280px; 
    display: flex;
    position: fixed;
    width: 100%;
    height: 100px;
    -webkit-box-pack: center;    
    justify-content: center;
    -webkit-box-align: center;
    z-index: 999;
    background:azure;"> 
      <ul class="nav float-start " style="align-items:center">
        <!-- 網頁商標 -->
        <li class="nav-item" style="width:150px;">
          <Router-Link class="nav-link" to="/">
            <img src="../assets/logo.png" style="width:100%" class="logo" alt="">
          </Router-Link>
        </li>
        <!-- 搜尋框 -->
        <li>
          <div class="d-flex" style="width: 700px; height: 44px; ">
            <input type="text" 
              class="form-control left-radius "
              v-model="input"
              style="width:300px  "
              placeholder="搜尋"
            >
            <button type="submit" title="搜尋" class="btn btn-primary right-radius">
              <i class="bi bi-search cursor"></i>
              搜尋
            </button>  
          </div>
        </li>
      </ul>
      <ul class="nav float-end" style="align-items:center">
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
  <div class="containter-main">
    <main class="container">
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
ul{
  text-align: center;
}
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