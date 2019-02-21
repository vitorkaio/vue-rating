<template>
  <div class="home">
    <div class="title-vue">
      <h1>Vue Rating</h1>
    </div>
    <div class="ratings">
      <Rating />
      <Rate />
    </div>
  </div>
</template>

<script>

  import Rating from './rating/Rating.vue';
  import Rate from './rate/Rate.vue';

  export default {
    components: {
      Rating,
      Rate
    }
  }
</script>

<style scoped>
  .home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .title-vue {
    margin-top: 2rem;
  }
  .ratings {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
</style>
