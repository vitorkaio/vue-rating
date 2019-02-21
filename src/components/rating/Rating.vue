<template>
  <div class="rating">
    <template v-for="i in qtd">

      <v-icon v-if="i <= rating" 
        color="#00c853" 
        size="150" 
        @mouseenter="mouseEnterRatingHandler(i)"
        @mouseleave="mouseLeaveRatingHandler"
        @click="markRating"
        :key="i">
        star
      </v-icon>

      <v-icon v-else 
        color="#00c853" 
        size="150" 
        @mouseenter="mouseEnterRatingHandler(i)"
        @mouseleave="mouseLeaveRatingHandler"
        @click="markRating"
        :key="i">
        star_border
      </v-icon>

    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

/* eslint-disable */

export default {
  data() {
    return {
      rating: this.marks,
    }
  },
  computed: {
  ...mapGetters('ratings',{
      qtd: 'getQtd',
      marks: 'getMark',
    }),
  },
  methods: {
    ...mapActions('ratings', ['setMark']),

    mouseEnterRatingHandler(star) {
      this.rating = star;
    },
    mouseLeaveRatingHandler() {
      this.rating = this.marks;
    },
    markRating() {
      this.setMark(this.rating);
    }
  }
}
</script>

<style scoped>
  .rating i {
    cursor: pointer;
  }
</style>
