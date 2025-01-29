<template>
  <div class="reviews-container">
    <button class="button-close" @click="closeReviewsList">
      <img src="../../assets/images/svg/CloseIcon.svg " alt="Close Icon" />
    </button>
    <h2 class="header font-medium text-3xl">{{ $t("reviewsList") }}:</h2>
    <div v-for="review in reviews" :key="review.id" class="review-item">
      <div v-if="review.rating" class="review-rating">{{ review.rating }}</div>
      <div class="review-content">{{ review.review }}</div>
    </div>
  </div>
</template>

<script src="./ReviewsList.ts" lang="ts" />

<style scoped lang="scss">
@use "../../styles/styles.scss";

.header {
  text-align: center;
}

.reviews-container {
  padding: 20px;
  position: relative;
  box-shadow: 0px 4px 15px 0px var(--box-shadow);
  border-radius: 8px;
}

.review-item {
  padding: 10px;
  border-bottom: 1px solid var(--primary-light-green);
  &:last-child {
    border-bottom: none;
  }
}

.review-rating {
  font-size: 34px;
}
.review-content {
  color: var(--secondary-text);
}
</style>
