<template>
  <div class="wrapper">
    <ReviewsContainer class="container mb-4" />
    <ReviewsList
      v-if="reviewsStore.isReviewsListOpen"
      @closeReviewsList="handleCloseErviewsList"
    />
  </div>
</template>

<script src="./BaseLayout.ts" lang="ts" />

<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  width: 1458px;
}

@media (max-width: 1366px) {
  .wrapper {
    width: 1286px;
  }
}

@media (max-width: 1200px) {
  .wrapper {
    width: 912px;
  }
}

@media (max-width: 576px) {
  .wrapper {
    width: 328px;
  }
}
</style>
