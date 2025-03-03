<script setup>
import AppHeader from '@/components/layouts/header/AppHeader.vue'
import AppFooter from '@/components/layouts/header/AppFooter.vue'
import BannerSection from '@/components/pageComponents/mainPage/BannerSection.vue'
import AdvantagesSection from '@/components/pageComponents/mainPage/AdvantagesSection.vue'
</script>

<template>
  <AppHeader />

  <main class="main">
    <BannerSection class="main__banner" />
    <!-- <AdvantagesSection class="main__advantages" /> -->
  </main>
  <AppFooter />
</template>

<style lang="scss">
.main {
  &__banner {
    @include desktop {
      margin-top: 36px;
    }
  }

  &__people {
    background-color: #e0e0e0;
    margin: 0px 20px;
    @include tablet {
      margin: 0px;
    }
  }
}
</style>
