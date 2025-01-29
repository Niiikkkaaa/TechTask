<template>
  <BaseLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "./pages/BaseLayout.vue";
import "./styles/fonts.scss";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
  },
});
</script>

<style>
@import "./styles/styles.scss";
@import "./styles/tailwind.css";
@import "./styles/pallette.scss";
</style>
