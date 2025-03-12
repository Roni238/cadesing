<template>
  <section class="team">
    <div class="team__content">
      <div class="team__container swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="people in peoples" :key="people.img">
            <div class="swiper-slide__image-container">
              <img
                class="swiper-slide__img"
                :src="`/assets/images/${people.image}`"
                alt="people.image"
              />
            </div>

            <div class="swiper-slide__text">
              <p class="swiper-slide__name">{{ people.name }}</p>
              <p class="swiper-slide__position">{{ people.position }}</p>
              <p class="swiper-slide__citation">{{ people.citation }}</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const peoples = [
  {
    image: 'team-maya.png',
    name: 'Евдокимова Майя',
    position: 'Генеральный директор',
    citation:
      'Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.',
  },
  {
    image: 'team-tatyana.png',
    name: 'Рябова Татьяна',
    position: 'Ведущий аналитик',
    citation:
      'Наша задача — трансформировать данные в четкие, обоснованные решения. Мы помогаем бизнесу видеть полную картину, находить скрытые возможности и двигаться вперед уверенно, опираясь на аналитику.',
  },
  {
    image: 'team-dmitry.png',
    name: 'Васильев Дмитрий',
    position: 'Специалист по привлечению клиентов',
    citation:
      'Мы строим прочные связи с клиентами, помогая им найти решения, которые ускоряют рост их бизнеса. Наша цель — не просто привлечение, а создание партнерства, основанного на доверии и взаимной выгоде.',
  },
]

onMounted(() => {
  const swiper = new Swiper('.team__container.swiper', {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
</script>

<style lang="scss" scoped>
$desktop-breakpoint: 1480px;

.team {
  &__content {
    margin: auto;
    position: relative;
    padding: 0px 20px;

    @include tablet {
      padding: 0px;
      margin: 0px 40px;
    }
    @include desktop {
      margin: 0px auto;
    }
    @include desktop($desktop-breakpoint) {
      height: 446px;
      max-width: $desktop-breakpoint;
      background-color: $gray-color;
    }
  }

  &__container {
    overflow: hidden;
    height: 100%;
    margin: auto;
    width: 100%;
    @include tablet {
    }
    @include desktop($desktop-breakpoint) {
      max-width: $desktop-content;
    }
  }
}

.swiper {
  &-slide {
    @include desktop($desktop-breakpoint) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    &__image-container {
      height: 201px;
      width: 100%;
      margin-bottom: 25px;
      @include tablet {
        height: 404px;
      }
      @include desktop($desktop-breakpoint) {
        height: 100%;
        margin-bottom: 0px;
      }
    }
    &__img {
      background: $gray-color;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &__text {
      text-align: center;
      @include desktop($desktop-breakpoint) {
        text-align: start;
        max-width: 630px;
      }
    }
    &__name {
      font-size: 20px;
      color: $dark-color;
      margin-bottom: 5px;
      @include tablet {
        font-size: 28px;
        margin-bottom: 20px;
      }
      @include desktop($desktop-breakpoint) {
        font-size: 36px;
      }
    }
    &__position {
      font-size: 13px;
      color: $gray-dark-color;
      margin-bottom: 15px;
      @include tablet {
        font-size: 16px;
        margin-bottom: 35px;
      }
      @include desktop($desktop-breakpoint) {
        margin-bottom: 40px;
      }
    }
    &__citation {
      font-size: 13px;
      color: $dark-color;
      @include tablet {
        font-size: 18px;
      }
    }
  }

  &-button {
    &-prev,
    &-next {
      display: none !important;
      height: 94px;
      width: 52px;
      background: $white-color;
      opacity: 1;
      margin: 0px 26px;
      transform: translateY(-50%);
      @include tablet {
        display: flex !important;
        top: 201px;
        margin: 0px 30px;
      }
      @include desktop($desktop-breakpoint) {
        top: 50%;
      }

      &::after {
        color: $dark-color;
        font-size: 10px;
      }
    }
    &-disabled {
      border: 1px solid $border-color;
      background: none;
    }
  }

  &-pagination {
    margin-top: 34px;
    @include pagination;
    @include tablet {
      display: none;
    }
  }
}
</style>
