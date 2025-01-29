<template>
  <div>
    <div class="reviews-container">
      <LanguageSelector class="selector" />
      <div class="desktop">
        <div class="inner-container">
          <HeaderComponent />
          <ReviewsComponent />
          <ButtonsComponent />
        </div>
      </div>
      <div class="tablet">
        <div class="inner-container">
          <div>
            <HeaderComponent />
            <ReviewsComponent />
          </div>
          <ButtonsComponent />
        </div>
      </div>
      <div class="mobile">
        <HeaderComponent />
        <ReviewsComponent />
        <ButtonsComponent />
      </div>
    </div>
  </div>
</template>

<script src="./ReviewsContainer.ts" lang="ts" />

<style scoped lang="scss">
@use "../../styles/styles.scss";
.reviews-container {
  position: relative;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px var(--box-shadow);
  font-size: 20px;
}

.inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selector {
  position: absolute;
  top: -50px;
  right: 0px;
  width: fit-content;
  margin: right auto;
  &-container {
    position: relative;
  }
}

.desktop {
  display: block;
}

.tablet {
  display: none;
}

.mobile {
  display: none;
}

@media (max-width: 1366px) {
  .desktop {
    display: block;
  }

  .tablet {
    display: none;
  }

  .mobile {
    display: none;
  }
}

@media (max-width: 1200px) {
  .reviews-container {
    width: 912px;
  }
  .desktop {
    display: none;
  }

  .tablet {
    display: block;
  }

  .mobile {
    display: none;
  }
}

@media (max-width: 576px) {
  .reviews-container {
    width: 328px;
  }

  .desktop {
    display: none;
  }

  .tablet {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
