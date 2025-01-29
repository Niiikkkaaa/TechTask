<template>
  <div class="container-desktop flex items-center">
    <p class="rating-count">{{ rating }}</p>
    <img
      class="rating"
      src="../../assets/images/svg/Rating.svg "
      alt="Rating"
    />
    <p class="rating-reviews">{{ reviewsCount }} {{ $t("reviewsCount") }}</p>
  </div>
  <div class="container-mobile">
    <div class="container-mobile-inner">
      <p class="rating-count">{{ rating }}</p>
      <img
        class="rating"
        src="../../assets/images/svg/Rating.svg "
        alt="Rating"
      />
    </div>
    <p class="rating-reviews">{{ reviewsCount }} {{ $t("reviewsCount") }}</p>
  </div>
</template>

<script src="./ReviewsComponent.ts" lang="ts" />

<style scoped lang="scss">
.container-mobile {
  display: none;
}

.rating {
  margin: 0 20px;
  &-count {
    font-size: 36px;
    font-weight: 500;
  }
  &-reviews {
    font-size: 14px;
    color: var(--secondary-text);
  }
}

@media (max-width: 1200px) {
  .rating {
    &-count {
      font-size: 24px;
    }
    &-reviews {
      font-size: 14px;
      font-weight: 400px;
    }
  }
}

@media (max-width: 576px) {
  .container-desktop {
    display: none;
  }
  .container-mobile {
    display: block;
    align-items: center;
    &-inner {
      display: flex;
      align-items: center;
    }
  }
  .rating {
    &-reviews {
      margin-bottom: 20px;
    }
  }
}
</style>
