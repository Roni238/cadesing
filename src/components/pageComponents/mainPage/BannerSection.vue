<template>
  <section class="banner">
    <img class="banner__building" src="@/assets/images/banner-building.jpg" alt="" />
    <div class="banner__arrow" />

    <div class="banner__content">
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

  &__content {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    @include container;
    @include tablet {
      max-width: 768px;
      justify-content: start;
    }
    @include desktop {
      max-width: 1180px;
    }
  }
  &__text {
    margin: 24px 0px 38px;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
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
  &__arrow {
    display: none;
    position: absolute;
    left: 0;
    background-color: #003264;
    width: 100%;
    height: 100%;
    @include tablet {
      display: block;
      clip-path: polygon(0 0, 65% 0, 80% 50%, 65% 100%, 0 100%);
    }
    @include desktop {
      clip-path: polygon(0 0, 54% 0, 64% 50%, 54% 100%, 0 100%);
    }
  }
  &__building {
    position: absolute;
    display: none;
    @include tablet {
      display: block;
      width: 100%;
      height: 412px;
      position: absolute;
      right: -75px;
      object-fit: cover;
    }
    @include desktop {
      height: 715px;
      width: 1072px;
      right: -20px;
      bottom: -40px;
    }
  }
  &__people {
    object-fit: cover;
    max-width: 336px;
    right: 50%;
    transform: translateX(50%);
    top: 40px;
    position: absolute;
    @include tablet {
      max-width: 527px;
      top: 0px;
      right: 170px;
    }
    @include desktop {
      max-width: 678px;
      top: -70px;
      right: 330px;
    }
  }
}
</style>
