<script>
export default {
  name: "MainCard",

  props:{
    pizza:Object
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {
    
  },
};
</script>

<template>
  <div class="main-card">
    <div class="main-card_header">
        <img :src="pizza.img" alt="" class="main-card__img" />
        <div class="main-card__title">
            {{ $t(pizza.name) }}
        </div>
    </div>
    <div class="main-card_body">
        <div class="main-card__filter">
            <div class="main-card__bread-size__list">
                <button class="main-card__bread-size__list-item" v-for="breadSize in pizza.breadSizes" :key="`breadSize-${breadSize.id}`">
                    {{ $t(breadSize.name) }}
                </button>
            </div>
            <div class="main-card__pizza-length__list">
                <button class="main-card__pizza-length__list-item" v-for="pizzaLength in pizza.pizzaLengths" :key="`pizzaLength-${pizzaLength.id}`">
                    {{ $t(pizzaLength.name) }}
                </button>
            </div>
        </div>
    </div>
    <div class="main-card_footer">
        <div class="main-card__pizza-price">
            от {{ (pizza.price) }} ₽
        </div>
        <button class="main-card__pizza-korzina-add-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="main-card__pizza-korzina-add-btn__icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
            </svg>
            <span class="main-card__pizza-korzina-add-btn__text">
                {{ $t('добавить') }}
            </span>
            <!-- <span class="main-card__pizza-korzina-add-btn__pizza-length">
                3
            </span> -->
        </button>
    </div>
  </div>
</template>
