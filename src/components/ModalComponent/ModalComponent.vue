<template>
  <div class="modal-container" @click="closeModal">
    <div class="modal" @click.stop>
      <button class="button-close" @click="closeModal">
        <img src="../../assets/images/svg/CloseIcon.svg " alt="Close Icon" />
      </button>
      <div v-if="!isRewiewSend">
        <h2 class="header">{{ $t("leaveAReview") }}</h2>
        <textarea class="textarea" v-model="reviewValue" />
        <RatingSelector
          class="rating-selector"
          @selectRating="handleSelectRating"
        />
        <button
          class="button button-primary"
          @click="sendReview"
          :disabled="!reviewValue || rating === null"
        >
          {{ $t("send") }}
        </button>
      </div>
      <div class="modal-container-inner" v-else>
        <div class="content-container">
          <h2 class="header">{{ $t("thankForReview") }}</h2>
          <button class="button button-primary" @click="closeModal">
            {{ $t("close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ModalComponent" lang="ts" />

<style scoped lang="scss">
@use "../../styles/styles.scss";
.modal {
  position: fixed;
  width: 500px;
  height: 400px;
  top: calc(50% - 200px);
  right: calc(50% - 250px);
  padding: 40px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px var(--box-shadow);
  z-index: 1000;
  &-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    &-inner {
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }
}

.textarea {
  display: block;
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  resize: none;
  color: grey;
  border: 1px solid var(--primary-border-box);
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    border-color: var(--primary);
  }
}

.header {
  margin-bottom: 20px;
}

.rating-selector {
  margin-bottom: 20px;
}

.content-container {
  width: fit-content;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .modal {
    position: fixed;
    width: 400px;
    height: 340px;
    right: calc(50% - 250px);
    top: calc(50% - 170px);
  }

  .textarea {
    height: 100px;
  }
}

@media (max-width: 576px) {
  .modal {
    position: fixed;
    width: 328px;
    height: 300px;
    right: calc(50% - 164px);
    top: calc(50% - 150px);
  }

  .header {
    margin-bottom: 10px;
  }

  .textarea {
    height: 100px;
    margin-bottom: 10px;
  }

  .rating-selector {
    margin-bottom: 10px;
  }
}
</style>
