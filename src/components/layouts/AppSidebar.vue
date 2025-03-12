<template>
  <div class="sidebar" @click="closeSidebar">
    <aside class="sidebar__content" @click.stop>
      <button class="sidebar__close-btn" @click="closeSidebar">✕</button>

      <nav class="sidebar__nav">
        <a class="sidebar__link" v-for="link in links" :key="link.title" :href="link.href">{{
          link.title
        }}</a>
      </nav>
      <div class="sidebar__socials socials">
        <a
          v-for="social in socials"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="socials__link"
        >
          <BaseIcon :icon="social.icon" />
        </a>
      </div>
    </aside>
  </div>
</template>
<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { defineEmits } from 'vue'
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  socials: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['closeSidebar'])
const closeSidebar = () => {
  emit('closeSidebar')
}
</script>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  inset: 0;
  background: rgba(36, 38, 39, 0.84);
  @include desktop {
    display: none;
  }

  &__content {
    position: relative;
    padding: 68px 40px 52px 40px;
    background: $dark-color;
    animation: slideDown 0.5s ease-out forwards;
    transform: translateY(-100%);
    opacity: 0;
  }

  &__close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    color: $white-color;
    font-size: 16px;
  }

  &__nav {
    display: grid;
    gap: 40px;
    margin-bottom: 60px;
  }

  &__link {
    color: $white-color;
    display: block;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    max-width: 345px;
    &__link {
      height: 35px;
      width: 47px;
      border: 1px solid $border-color;
      fill: $white-color;
      @include center;

      &:hover {
        fill: #003264;
      }
    }
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
