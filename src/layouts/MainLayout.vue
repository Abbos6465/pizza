<script>
import NavBar from "@/components/nav-bar/index.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div class="layout-main">
    <!-- Header Start -->
    <header>
      <div class="container">
        <NavBar/>
      </div>
    </header>
    <!-- Header End -->
    <!-- Main Start -->
    <main>
      <RouterView />
    </main>
  </div>
</template>
