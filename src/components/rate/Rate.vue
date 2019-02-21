<template>
  <div class="rate">
    <h2>{{ getRate }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
  ...mapGetters('ratings',{
      qtd: 'getQtd',
      marks: 'getMark',
    }),
    getRate() {
      const rates = ['Muito ruim', 'Ruim', 'Bom', 'Muito bom', 'Maravilhoso'];
      return rates[this.marks - 1];
    },
  },
}
</script>

<style scoped>
  .rate {
    height: 60px;
  }
</style>
