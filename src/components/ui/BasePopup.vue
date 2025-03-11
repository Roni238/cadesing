<template>
  <teleport to="body">
    <div class="popup">
      <div class="popup__content">
        <button class="popup__close-btn" @click="closePopup">✕</button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted, defineEmits } from 'vue'

onMounted(() => (document.documentElement.style.overflow = 'hidden'))

onUnmounted(() => (document.documentElement.style.overflow = 'auto'))

const emit = defineEmits(['close'])
const closePopup = () => {
  emit('close')
  document.documentElement.style.overflow = 'auto'
}
</script>

<style lang="scss" scoped>
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
    @include container;
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
    @include desktop {
      right: -70px;
      top: 0px;
      height: 70px;
      width: 70px;
    }
  }
}
</style>
