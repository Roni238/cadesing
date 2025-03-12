<template>
  <teleport to="body">
    <div class="popup" @click="closePopup">
      <div class="popup__content" @click.stop>
        <button class="popup__close-btn" @click="closePopup">✕</button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted, defineEmits } from 'vue'

onMounted(() => document.documentElement.classList.add('html--no-scroll'))
onUnmounted(() => document.documentElement.classList.remove('html--no-scroll'))

const emit = defineEmits(['close'])
const closePopup = () => {
  emit('close')
  document.documentElement.classList.remove('html--no-scroll')
}
</script>

<style lang="scss" scoped>
$desktop-breakpoint: 1330px;

.popup {
  position: fixed;
  inset: 0;
  height: 100%;
  z-index: 100;
  background: $gray-dark-color;
  padding: 0px;
  overflow-y: auto;
  @include tablet {
    padding: 104px 0px 84px;
  }
  @include desktop {
    padding: 170px 0px 45px 0px;
  }

  &__content {
    background: $white-color;
    padding: 80px 20px 42px;
    height: auto !important;
    overflow: visible;
    position: relative;
    max-width: $desktop-content;
    margin: auto;
    @include tablet {
      padding: 128px 40px 77px;
    }
    @include desktop {
      padding: 104px 180px 65px;
    }
  }
  &__close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 40px;
    width: 40px;
    text-align: center;
    color: $white-color;
    background: $orange-color;
    @include tablet {
      right: 40px;
      top: 40px;
      height: 64px;
      width: 64px;
    }
    @include desktop($desktop-breakpoint) {
      right: -70px;
      top: 0px;
      height: 70px;
      width: 70px;
    }
  }
}
</style>
