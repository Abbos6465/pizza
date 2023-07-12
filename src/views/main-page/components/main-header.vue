<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters,mapActions } from "vuex";
import { Autoplay } from "swiper/modules";
import {$} from "@/utils/pulign";
import "swiper/css";

export default {
  name: "MainPageHeader",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },

  computed: {
    ...mapGetters({
      pizzaFilters: "pizza/PIZZA_FILTERS",
      pizzaSorts: "pizza/PIZZA_SORTS",
      activePizzaFilter: "pizza/ACTIVE_PIZZA_FILTER",
      activePizzaSort: "pizza/ACTIVE_PIZZA_SORT"
    }),
  },

  data() {
    return {
    };
  },

  methods: {
    ...mapActions({
        changePizzaFilter: "pizza/changePizzaFilter",
        changePizzaSort: "pizza/changePizzaSort",
    }),

    changePizzaFilterHandler(data){
        return this.changePizzaFilter(data);
    },

    changePizzaSortHandler(data){
        let dropdownIcon = $('.main__page-header-sorts__dropdown-icon');
        dropdownIcon.classList.toggle('icon-rotate');
        return this.changePizzaSort(data);
    },

    toggleDropdown(){
        let dropdownList = $('.main__page-header-sorts-dropdown');
        let dropdownIcon = $('.main__page-header-sorts__dropdown-icon');
        dropdownList.classList.toggle('sorts_dropdown');
        dropdownIcon.classList.toggle('icon-rotate');

        $('body').addEventListener('click', (event) => {
            if(event.target.parentElement.className != 'main__page-header-sorts__btn'){
                return dropdownList.classList.remove('sorts_dropdown');
            }
        });
    }
  },

  mounted() {
   
  },
};
</script>

<template>
  <section class="main__page-header-section">
    <div class="container">
      <div class="main__page-header">
        <div class="main__page-header-filters">
          <swiper
            :slidesPerView="1"
            :spaceBetween="1"
            :loop="true"
            :autoplay="{
              delay: 1500,
              disableOnInteraction: true,
            }"
            :breakpoints="{
              '576': {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 8,
              },

              '992': {
                slidesPerView: 4,
                spaceBetween: 10,
              },

              '1200': {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class=""
              v-for="data in pizzaFilters"
              :key="`pizzaFilter-${data.id}`"
            >
              <button
                class="main__page-header-filters__btn"
                @click="changePizzaFilterHandler(data)"
                :class="data.id == activePizzaFilter.id ? 'main__page-header-filters__btn-active' : ''"
              >
                <span class="main__page-header-filters__btn-text">
                  {{ $t(data.name) }}
                </span>
              </button>
            </swiper-slide>
          </swiper>
        </div>
        <div class="main__page-header-sorts">
            <button class="main__page-header-sorts__btn" @click="toggleDropdown">
                <img src="/images/svg/icon-dropdown.svg" alt="" class="main__page-header-sorts__dropdown-icon">
                <span class="main__page-header-sorts__title"> {{ $t("сортировка по") }}:</span>
                <span class="main__page-header-sorts__active-item">
                    {{ $t(activePizzaSort.name) }}
                </span>
            </button>
            <div class="main__page-header-sorts-dropdown">
                <button 
                v-for="data in pizzaSorts" :key="`pizzaSort-${data.id}`" 
                class="main__page-header-sorts-dropdown__btn" @click="changePizzaSortHandler(data)"
                :class="data.id == activePizzaSort.id ? 'main__page-header-sorts-dropdown__btn-active' : '' ">
                    <span class="main__page-header-sorts-dropdown__btn-text">
                        {{ $t(data.name) }}
                    </span>
                </button>
            </div>           
        </div>
      </div>
    </div>
  </section>
</template>
