<script>
import mainHeader from "./components/main-header.vue";
import mainCard from "./components/main-card.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",

  components: {
    mainHeader,
    mainCard,
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
      activePizzaFilter: "pizza/ACTIVE_PIZZA_FILTER",
      pizzaList: "pizza/PIZZA_LIST"
    }),
  },

  mounted() {
   
},
};
</script>

<template>
  <mainHeader />
  <section class="main-pizza__section">
    <div class="container">
      <div class="main-pizza">
        <div class="main-pizza__title">
          {{ $t(activePizzaFilter.name) }} {{ $t("пиццы") }}
        </div>
        <div class="main-pizza__card-wrapper">
          <mainCard v-for="pizza in pizzaList" :key="`pizza-${pizza.id}`" :pizza="pizza" />
          <mainCard v-for="pizza in pizzaList" :key="`pizza-${pizza.id}`" :pizza="pizza" />
        </div>
      </div>
    </div>
  </section>
</template>
