<template>
  <div
    class="base-input"
    :class="[{ 'base-input--focus': isFocused }, { 'base-input--error': hasError }]"
  >
    <input
      class="base-input__input"
      :type="type"
      :placeholder="isFocused ? placeholder : ''"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      :value="modelValue"
    />
    <label class="base-input__label-placeholder">
      {{ label }}
    </label>
    <label v-if="modelValue" class="base-input__label-icon" @click="clearInput">
      {{ hasError ? '✕' : '✔' }}
    </label>
    <p class="base-input__error" v-if="hasError">{{ errorText }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  required: { type: Boolean, default: true },
  errorText: { type: String, required: true },
  placeholder: { type: String, required: true },
  modelValue: { type: String, default: '' },
  type: { type: String, default: 'text' },
})

const validationPatterns = {
  text: /^[A-Za-zА-Яа-я0-9.,\s]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
}

const hasError = computed(() => {
  if (!props.modelValue) return false
  const pattern = validationPatterns[props.type]
  return pattern ? !pattern.test(props.modelValue) : false
})

const isFocused = ref(false)
const handleFocus = () => (isFocused.value = true)

const handleBlur = () => {
  if (!props.modelValue) {
    isFocused.value = false
  }
}

const emit = defineEmits(['update:modelValue', 'update:error'])
const handleInput = (event) => emit('update:modelValue', event.target.value)
const clearInput = () => emit('update:modelValue', '')

watch(hasError, (newValue) => {
  emit('update:error', newValue ? props.errorText : null)
})
</script>

<style lang="scss" scoped>
.base-input {
  @include baseInput;
}
</style>
