<template>
  <section class="banner">
    <img class="banner__building" src="@/assets/images/banner-building.jpg" alt="" />
    <div class="banner__arrow" />

    <div class="banner__container">
      <img class="banner__people" src="@/assets/images/people.png" alt="" />
      <div class="banner__text">
        <h1 class="banner__title">
          Энергия твоего роста! – <br />
          заряжаем твою карьеру
        </h1>
        <button class="banner__cta-btn">Cтать частью команды</button>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss" scoped>
.banner {
  height: 318px;
  background-color: #003264;
  overflow: hidden;
  position: relative;
  @include tablet {
    height: 398px;
  }
  @include desktop {
    height: 448px;
  }

  &__building {
    display: none;
    @include tablet {
      position: absolute;
      display: block;
      height: 412px;
      right: -75px;
    }
    @include desktop {
      height: 715px;
      width: 1072px;
      right: -20px;
      bottom: -40px;
      object-fit: cover;
    }
  }

  &__arrow {
    display: none;
    @include tablet {
      display: block;
      position: absolute;
      background-color: #003264;
      width: $mobile-content;
      height: 100%;
      clip-path: polygon(0 0, 65% 0, 80% 50%, 65% 100%, 0 100%);
    }
    @include desktop {
      clip-path: polygon(0 0, 54% 0, 64% 50%, 54% 100%, 0 100%);
    }
  }

  &__container {
    position: relative;
    display: flex;
    @include container;
  }

  &__people {
    width: 336px;
    right: 50%;
    transform: translateX(50%);
    top: 40px;
    position: absolute;
    @include tablet {
      width: 527px;
      top: 0px;
      right: 170px;
    }
    @include desktop {
      width: 678px;
      top: -70px;
      right: 330px;
    }
  }

  &__text {
    margin: 24px auto 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    @include tablet {
      align-items: start;
      justify-content: center;
      margin: 0px;
    }
  }

  &__cta-btn {
    margin-top: auto;
    @include cta-btn;
    @include tablet {
      margin-top: 51px;
    }
    @include desktop {
      margin-top: 59px;
    }
  }
}
</style>
