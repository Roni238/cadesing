<template>
  <div
    class="phone-input"
    :class="[{ 'phone-input--focus': isFocused }, { 'phone-input--error': hasError }]"
  >
    <input
      class="phone-input__input"
      type="tel"
      :placeholder="isFocused ? placeholder : ''"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      :value="modelValue"
      v-mask="'+7 (###) ###-####'"
    />
    <label class="phone-input__label-placeholder">
      {{ label }}
    </label>
    <label v-if="modelValue.length > 3" class="phone-input__label-icon" @click="clearInput">
      {{ hasError ? '✕' : '✔' }}
    </label>
    <p class="phone-input__error" v-if="hasError">{{ errorText }}</p>
  </div>
</template>

<script setup>
// инпут под телефоны не часто используемый компонент по этому чтобы не перегружать логикой baseInput
// (с добавлением маски, отключением дефолтной валидации и прочим) вынес в отдельный компонент
// тут я использую v-mask для отображения маски телефона, vue-the-mask позволяет создавать кастомные маски на ввод,
// но тогда вообще пропадет необходимость отображения ошибки неправильного ввода, тк неправельные символы вообще вбиваться не будут
// так что валидацию других типов оставлю не через vue-the-mask а в baseInput
import { ref, computed, watch, defineProps } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Мобильный телефон*' },
  required: { type: Boolean, default: true },
  errorText: { type: String, default: 'Неверный формат номера' },
  placeholder: { type: String, default: '+ 7-903-123-45-67' },
  modelValue: { type: String, default: '+7' },
})

const hasError = computed(() => props.modelValue.length > 3 && props.modelValue.length < 17)

const isFocused = ref(false)
const handleFocus = () => (isFocused.value = true)

const handleBlur = () => {
  if (!props.modelValue) {
    isFocused.value = false
  }
}

const emit = defineEmits(['update:modelValue', 'update:error'])
const handleInput = (event) => emit('update:modelValue', event.target.value)
const clearInput = () => emit('update:modelValue', '+7')

watch(hasError, (newValue) => {
  emit('update:error', newValue ? props.errorText : null)
})
</script>

<style lang="scss" scoped>
.phone-input {
  @include baseInput;

  &__label-placeholder {
    top: 13px;
  }
}
</style>
