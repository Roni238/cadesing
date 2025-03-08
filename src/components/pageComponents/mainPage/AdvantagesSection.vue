<template>
  <section class="advantages">
    <div class="advantages__container swaper">
      <div class="swiper-wrapper">
        <button
          class="swiper-slide"
          :class="{ 'swiper-slide--active': activeIndex === index }"
          v-for="(advantage, index) in advantages"
          :key="advantage.icon"
          @click="toggleButton(index)"
        >
          <BaseIcon class="swiper-slide__icon" :icon="advantage.icon" />
          <h3 class="swiper-slide__title">{{ advantage.title }}</h3>
          <p class="swiper-slide__discription">
            {{ advantage.description }}
          </p>
        </button>
      </div>

      <div class="swiper__pagination" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const advantages = [
  {
    title: 'Развитие',
    icon: 'progress',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Обучение',
    icon: 'training',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Ответственность',
    icon: 'responsibility',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Динамика',
    icon: 'dynamics',
    description: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы',
  },
  {
    title: 'Комфорт',
    icon: 'comfort',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Надежность',
    icon: 'reliability',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

onMounted(() => {
  const swiper = new Swiper('.advantages__container.swaper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper__pagination',
      clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1180: {
        slidesPerView: 6,
      },
    },
    on: {
      slideChange: () => {
        if (window.innerWidth < 768) {
          activeIndex.value = swiper.realIndex
        }
      },
    },
  })
})

const activeIndex = ref(3)

const toggleButton = (index) => {
  activeIndex.value = index
}
</script>

<style lang="scss" scoped>
.advantages {
  @include padding;
  &__container {
    margin: 0 auto;
    overflow: hidden;
    @include container;
    @include desktop {
      overflow: visible;
    }
  }
}

.swiper {
  &-slide {
    background: none;
    @include tablet {
      border: 1px solid $border-color;
      height: 344px;
      padding: 0px 20px;
    }
    @include desktop {
      height: 100%;
      width: 100% !important;
    }
    &--active {
      border: none;
      @include tablet {
        box-shadow: 0px 0px 46px 0px rgba(0, 0, 0, 0.1);
      }

      .swiper-slide__icon {
        fill: $orange-color !important;
        stroke: $orange-color !important;
      }
      .swiper-slide__discription {
        display: block;
      }
    }

    &__icon {
      fill: #4f4f4f;
      margin-bottom: 42px;
    }
    &__title {
      font-size: 18px;
      font-weight: 400;
      color: $dark-color;
      margin-bottom: 18px;
      @include tablet {
        font-size: 20px;
      }
    }
    &__discription {
      color: #646464;
      font-size: 14px;
      line-height: 26px;
      display: none;
      @include tablet {
        font-size: 16px;
      }
    }
  }

  &-wrapper {
    height: 210px;

    @include tablet {
      height: auto;
    }
    @include desktop {
      display: grid;
      grid-template-columns: repeat(3, 393px);
      grid-template-rows: 377px 377px;
    }
  }

  &__pagination {
    margin-top: 40px;
    justify-content: center;
    display: flex;
    @include pagination {
      @include tablet {
        height: 10px;
        width: 10px;
      }
    }
    @include tablet {
      margin-top: 48px;
    }
    @include desktop {
      display: none;
    }
  }
}
</style>
