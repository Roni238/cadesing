<template>
  <div class="file-input">
    <input
      class="file-input__input"
      type="file"
      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      @change="handleFileChange"
      ref="fileInput"
    />

    <label class="file-input__label" :class="{ 'is-loaded': selectedFile }">
      {{ selectedFile ? abbreviateFileName(selectedFile.name) : 'Загрузить резюме' }}
    </label>

    <BaseIcon
      v-if="selectedFile"
      :icon="'delete'"
      class="file-input__reset-button"
      @click.stop="clearFile"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const props = defineProps({
  modelValue: File,
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const selectedFile = ref(props.modelValue || null)

const abbreviateFileName = (name) => {
  const maxLength = 15
  return name.length > maxLength ? `${name.slice(0, maxLength - 3)}...${name.slice(-4)}` : name
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  selectedFile.value = file || null
}

const clearFile = () => {
  selectedFile.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Следим за изменением selectedFile и эмитим обновление
watch(selectedFile, (newFile) => {
  emit('update:modelValue', newFile)
})
</script>

<style lang="scss" scoped>
.file-input {
  height: 70px;
  border-bottom: 1px solid $blue-color;
  color: $blue-color;
  background: none;
  font-size: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  &__input {
    opacity: 0;
    position: absolute;
    inset: 0;
    z-index: 2;
  }

  &__label {
    color: var(--blue-color);
    font-size: 15px;
    transition: color 0.3s ease;
    width: 100%;
    padding: 0px 15px 0px 10px;
    text-align: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  &__reset-button {
    position: absolute;
    right: 15px;
    z-index: 3;
  }

  .is-loaded {
    color: $dark-color;
  }
}
</style>
