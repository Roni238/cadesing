<template>
  <footer class="footer">
    <div class="footer__liaison liaison">
      <p class="liaison__title">Отдел подбора персонала:</p>
      <p class="liaison__number">8 800 700 8000</p>
      <a class="liaison__email" href="mailto:oco_rabota@mail.ru">oco_rabota@mail.ru</a>
      <button class="liaison__cta-btn">Cтать частью команды</button>

      <div class="liaison__socials">
        <a
          v-for="social in socials"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="liaison__social-link"
        >
          <BaseIcon :icon="social.icon" :width="social.w" :height="social.h" />
        </a>
      </div>
    </div>

    <div class="footer__copirating copirating">
      <p class="copirating__title">
        © 1998–2019,«Компания», 53002, Иваново, Лежневская 34 корпус 1
      </p>
      <a class="copirating__link" href="/">Политика обработки персональных данных</a>
    </div>
  </footer>
</template>
<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'

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
</script>
<style lang="scss" scoped>
.footer {
  text-align: center;
}

.liaison {
  padding: 36px 40px;
  background-color: $gray-color;
  color: $dark-color;
  @include tablet {
    padding: 64px 0px;
  }
  @include desktop {
    padding: 72px 0px;
  }

  &__title {
    margin-bottom: 15px;
    font-size: 14px;
    @include tablet {
      font-size: 18px;
      margin-bottom: 19px;
    }
    @include desktop {
      margin-bottom: 23px;
    }
  }

  &__number {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 15px;

    @include tablet {
      font-size: 56px;
      margin-bottom: 22px;
    }
    @include desktop {
      font-size: 64px;
    }
  }

  &__email {
    font-size: 16px;
    color: $blue-color;
    display: block;
    margin-bottom: 30px;
    @include tablet {
      font-size: 18px;
      margin-bottom: 50px;
    }
  }

  &__cta-btn {
    margin-bottom: 30px;
    @include cta-btn;
    @include tablet {
      margin-bottom: 48px;
    }
  }

  &__socials {
    justify-content: center;
    display: flex;
    gap: 8px;
    @include tablet {
      gap: 16px;
    }
  }

  &__social-link {
    width: 48px;
    height: 35px;
    border: 1px solid $border-color;
    fill: $orange-color;
    @include center;
    @include tablet {
      height: 50px;
      width: 68px;
    }
    &:hover {
      fill: #003264;
    }
  }
}

.copirating {
  padding: 20px 40px;
  @include tablet {
    padding: 40px 0px;
  }
  &__title {
    color: $gray-dark-color;
    font-size: 11px;
    margin-bottom: 16px;
  }
  &__link {
    color: $blue-color;
    font-size: 11px;
    @include tablet {
      font-size: 14px;
    }
  }
}
</style>
