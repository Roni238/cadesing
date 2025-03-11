<template>
  <div class="job-posting">
    <h2 class="job-posting__title">Отклик на вакансию</h2>
    <form @submit.prevent="sendResume" class="job-posting__form">
      <BaseInput
        class="job-posting__vacancy"
        :label="'Желаемая вакансия *'"
        :errorText="'Введен недопустимый символ'"
        :placeholder="'Дизайнер стиральных машин'"
        v-model="formData.vacancy"
        @update:error="setError('vacancy', $event)"
      />

      <BaseInput
        class="job-posting__name"
        :label="'Фамилия, имя и отчество *'"
        :errorText="'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)'"
        :placeholder="'Иванов Петр Алексеевич'"
        v-model="formData.name"
        @update:error="setError('name', $event)"
      />

      <BaseInput
        class="job-posting__phone"
        :label="'Мобильный телефон*'"
        :errorText="'Неверный формат номера'"
        :placeholder="'+ 7-903-123-45-67'"
        :type="'tel'"
        v-model="formData.phoneNumber"
        @update:error="setError('phoneNumber', $event)"
      />

      <BaseInput
        class="job-posting__email"
        :label="'E-mail'"
        :required="false"
        :errorText="'Введите корректный адрес почты'"
        :placeholder="'ivanov@pochta.ru'"
        :type="'email'"
        v-model="formData.email"
        @update:error="setError('email', $event)"
      />

      <BaseInput
        class="job-posting__education"
        :label="'Образование *'"
        :errorText="'Недопустимый символ'"
        :placeholder="'укажите специализацию'"
        v-model="formData.education"
        @update:error="setError('education', $event)"
      />

      <BaseInput
        class="job-posting__address"
        :label="'Адрес места жительства *'"
        :errorText="'Введите свой адрес (Например: ул. Пушкина, д. 22)'"
        :placeholder="'ул. Пушкина, д. 22'"
        v-model="formData.address"
        @update:error="setError('address', $event)"
      />

      <BaseInput
        class="job-posting__birthdate"
        :label="'Дата рождения'"
        :errorText="'Неверный формат даты'"
        :placeholder="'01.01.2000'"
        :type="'date'"
        :required="false"
        v-model="formData.birthdate"
        @update:error="setError('birthdate', $event)"
      />

      <BaseFileInput
        class="job-posting__upload-resume"
        v-model="formData.file"
        @update:error="setError('file', $event)"
      />

      <BaseTextarea
        class="job-posting__comment"
        v-model="formData.comment"
        @update:error="setError('comment', $event)"
      />

      <div class="job-posting__accept-and-send">
        <span class="job-posting__accept">
          <input class="job-posting__checkbox" type="checkbox" v-model="formData.acceptAgreement" />
          <p class="job-posting__agreement-title">
            Я принимаю условия
            <a href="/" class="job-posting__agreement-link">передачи информации</a>
          </p>
        </span>

        <button
          type="submit"
          class="job-posting__send-btn"
          :class="{ 'job-posting__send-btn--disable': hasErrors }"
          :disabled="hasErrors"
        >
          Отправить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import BaseInput from '../ui/BaseInput.vue'
import BaseTextarea from '../ui/BaseTextarea.vue'
import BaseFileInput from '../ui/BaseFileInput.vue'

const errors = ref({
  vacancy: null,
  name: null,
  phoneNumber: null,
  email: null,
  education: null,
  address: null,
  birthdate: null,
})

const formData = reactive({
  vacancy: '',
  name: '',
  phoneNumber: '+7',
  email: '',
  education: '',
  address: '',
  birthdate: '',
  file: null,
  comment: '',
  acceptAgreement: false,
})

const setError = (field, error) => {
  errors.value[field] = error
}

const hasErrors = computed(() => {
  if (
    formData.acceptAgreement &&
    formData.vacancy &&
    formData.name &&
    formData.education &&
    formData.address
  ) {
    return Object.values(errors.value).some((error) => error !== null)
  } else {
    return true
  }
})

const sendResume = () => {
  if (hasErrors) {
    console.log(formData)
  }
}
</script>

<style lang="scss" scoped>
.job-posting {
  &__phone {
    :deep(.base-input__label-placeholder) {
      top: 13px;
    }
  }
  &__birthdate {
    :deep(.base-input__label-placeholder) {
      top: 13px;
    }
    :deep(.base-input__input) {
      padding: 25px 20px 25px 28px;
    }
    :deep(.base-input__label-icon) {
      display: none;
    }
  }
  &__title {
    margin-bottom: 38px;
    @include tablet {
      margin-bottom: 53px;
    }
    @include desktop {
      margin-bottom: 57px;
    }
  }

  &__form {
    display: grid;
    gap: 20px;
    @include tablet {
      grid-template-columns: 1fr 1fr;
      gap: 32px 5px;
      grid-template-areas:
        'vacancy vacancy'
        'name name'
        'phone email'
        'education  education '
        'address address'
        'birthdate upload-resume'
        'comment comment'
        'comment comment'
        'accept-and-send accept-and-send';

      .job-posting {
        &__vacancy {
          grid-area: vacancy;
        }
        &__name {
          grid-area: name;
        }
        &__phone {
          grid-area: phone;
        }
        &__email {
          grid-area: email;
        }
        &__education {
          grid-area: education;
        }
        &__address {
          grid-area: address;
        }
        &__birthdate {
          grid-area: birthdate;
        }
        &__upload-resume {
          grid-area: upload-resume;
        }
        &__comment {
          grid-area: comment;
        }
        &__accept-and-send {
          grid-area: accept-and-send;
        }
      }
    }
  }

  &__accept-and-send {
    @include tablet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 38px 32px 38px 26px;
      border: 1px solid #f2f2f2;
    }
  }
  &__checkbox {
    height: 18px;
    width: 18px;
    accent-color: chocolate;
    @include tablet {
      height: 27px;
      width: 27px;
    }
  }
  &__accept {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 38px;
    @include tablet {
      margin-bottom: 0px;
    }
  }
  &__agreement-title {
    font-size: 11px;
    color: $dark-color;
    @include tablet {
      font-size: 13px;
    }
  }
  &__agreement-link {
    color: $blue-color;
  }
  &__send-btn {
    background: #e9862a;
    color: $white-color;
    font-size: 14px;
    padding: 20px 0px;
    width: 100%;
    @include tablet {
      max-width: 200px;
    }

    &:hover {
      background: #e77e1e;
    }
    &--disable {
      background: #c3c8c8;
    }
  }
}
</style>
