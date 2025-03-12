<template>
  <header class="header">
    <div class="header__content">
      <BaseIcon class="header__logo" :icon="'logo'" />

      <nav class="header__nav nav">
        <a class="nav__link" v-for="link in links" :key="link.title" :href="link.href">{{
          link.title
        }}</a>

        <div class="header__social social">
          <button class="social__btn" @click="toggleSocial">
            Социальные сети
            <span class="social__btn-icon">⯆</span>
          </button>

          <div class="social__menu" v-if="isShowSocial" @click.stop>
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="social__link"
            >
              <BaseIcon :icon="social.icon" />
            </a>
          </div>
        </div>
      </nav>

      <BaseIcon class="header__sidebar" :icon="'sidebar'" @click="isSidebarVisible = true" />

      <AppSidebar
        v-if="isSidebarVisible"
        :links="links"
        :socials="socials"
        @closeSidebar="isSidebarVisible = false"
      />
    </div>
  </header>
</template>
<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
import AppSidebar from '@/components/layouts/AppSidebar.vue'
import { ref } from 'vue'

const isSidebarVisible = ref(false)
const isShowSocial = ref(false)
const links = [
  { title: 'О нас', href: '/' },
  { title: 'Наши ценности', href: '/' },
  { title: 'Вакансии', href: '/' },
  { title: 'Начало карьеры', href: '/' },
  { title: 'Контакты', href: '/' },
]
const socials = [
  {
    link: 'https://vk.com/cadesignru',
    icon: 'vk',
  },
  {
    link: 'https://vk.com/cadesignru',
    icon: 'ok',
  },
  {
    link: 'https://vk.com/cadesignru',
    icon: 'facebook',
  },
  {
    link: 'https://vk.com/cadesignru',
    icon: 'inst',
  },
]
function toggleSocial() {
  isShowSocial.value = !isShowSocial.value
}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: #f2f2f2 solid 1px;
  height: 72px;
  position: sticky;
  top: 0px;
  z-index: 90;
  background: $white-color;
  @include tablet {
    height: 98px;
  }

  &__content {
    margin: auto;
    display: flex;
    align-items: center;
    width: $mobile-content;
    height: 100%;
    max-width: $desktop-content;
    @include padding;
  }

  &__logo {
    margin-right: auto;
  }

  &__sidebar {
    width: 28px;
    height: 18px;
    @include desktop {
      display: none;
    }
  }
}

.nav {
  gap: 64px;
  display: none;

  @include desktop {
    display: flex;
  }

  &__link {
    color: $dark-color;
    font-size: 16px;
  }
}

.social {
  position: relative;

  &__btn {
    background: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: $blue-color;
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    font-family: $gilroy-font;
  }

  &__btn-icon {
    font-size: 7px;
    color: $dark-color;
  }

  &__menu {
    top: 30px;
    padding: 19px;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 68px);
    background: $white-color;
    box-shadow: 0px 17px 46px 0px rgba(0, 0, 0, 0.08);
  }
  &__link {
    height: 50px;
    border: 1px solid $border-color;
    @include center;
    fill: $orange-color;

    &:hover {
      fill: #003264;
    }
  }
}
</style>
