<template>
  <section class="advantages">
    <button class="advantages__button" v-for="advantage in advantages" :key="advantage.icon">
      <h2>{{ advantage.title }}</h2>
      <p>{{ advantage.description }}</p>
    </button>
  </section>
</template>
<script setup>
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
</script>
<style lang="scss" scoped>
.advantages {
  &__button {
    background: none;
    border: 1px solid $border-color;
  }
}
</style>
