<template>
  <div class="textarea-input" :class="{ 'textarea-input--focus': isFocused }">
    <textarea
      class="textarea-input__input"
      :placeholder="isFocused ? placeholder : ''"
      v-model="textareaValue"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <label class="textarea-input__label-placeholder">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Введите текст' },
  label: { type: String, default: 'Комментарий' },
})

const textareaValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)

const handleFocus = () => {
  isFocused.value = true
}

const handleBlur = () => {
  if (!textareaValue.value) {
    isFocused.value = false
  }
}

watch(textareaValue, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<style lang="scss" scoped>
.textarea-input {
  min-height: 90px;
  @include baseInput;
  @include tablet {
    min-height: 153px;
  }
  &__label-placeholder {
    top: 25px;
  }
}
</style>
