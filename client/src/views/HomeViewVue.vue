<template>
<div class="row">
  <div class="col-md-3">
      <div class="box">
        <ul>
        </ul>
      </div>
  </div>
  <div class="col-md-6">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/男1.png" class="d-block w-100" >
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/男2.png" class="d-block w-100" >
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/男3.png" class="d-block w-100" >
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="col-md-3">
    Column
  </div>
</div>
</template>
<script setup>
import bootstrap from 'bootstrap/dist/js/bootstrap';
const myCarousel = document.querySelector('#Carousel')
const carousel = new bootstrap.Carousel(myCarousel)
carousel;
</script>