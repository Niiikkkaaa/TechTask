<template>
  <div>
    <div class="container">
      <img
        class="logo"
        src="../../assets/images/svg/Google.svg "
        alt="Google Logo"
      />
      <p class="header">{{ $t("reviews") }}</p>
    </div>
  </div>
</template>

<script src="./HeaderComponent.ts" lang="ts" />

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.logo {
  display: block;
  margin-right: 20px;
}
.header {
  font-size: 20px;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .container {
    margin-bottom: 10px;
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  .header {
    width: 200px;
  }
  .container {
    margin-bottom: 20px;
  }
}
</style>
