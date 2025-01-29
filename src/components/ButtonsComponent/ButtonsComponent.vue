<template>
  <div>
    <button @click="openReviewsList" class="button button-secondary">
      {{ $t("review") }}
    </button>
    <button class="button button-primary" @click="openModal">
      {{ $t("write") }}
    </button>
    <teleport to="body">
      <ModalComponent v-if="isModalOpen" @closeModal="handleCloseModal" />
    </teleport>
  </div>
</template>

<script src="./ButtonsComponent.ts" lang="ts" />

<style scoped lang="scss">
@use "../../styles/styles.scss";
.button-secondary {
  margin-right: 10px;
}

@media (max-width: 576px) {
  .button {
    width: 100%;
    &-secondary {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
}
</style>
