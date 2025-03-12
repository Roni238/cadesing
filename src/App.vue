<script setup>
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import BannerSection from '@/components/pageComponents/mainPage/BannerSection.vue'
import AdvantagesSection from '@/components/pageComponents/mainPage/AdvantagesSection.vue'
import TeamSection from './components/pageComponents/mainPage/TeamSection.vue'
</script>

<template>
  <AppHeader />

  <main class="main">
    <BannerSection class="main__banner" />
    <AdvantagesSection class="main__advantages" />
    <TeamSection class="main__team" />
  </main>
  <AppFooter />
</template>

<style lang="scss">
.main {
  &__banner,
  &__advantages,
  &__team {
    margin-bottom: 36px;
    @include tablet {
      margin-bottom: 64px;
    }
    @include desktop {
      margin-bottom: 72px;
    }
  }
  &__banner {
    @include desktop {
      margin-top: 36px;
    }
  }
}
</style>
