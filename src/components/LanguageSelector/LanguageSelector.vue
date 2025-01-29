<template>
  <div class="language-selector-container">
    <div
      class="language-selector-wrapper"
      @mouseover="openMenu"
      @mouseleave="closeMenu"
    >
      <div class="language-selector">
        <span>{{ languages[selectedLanguage] }}</span>
        <img
          src="../../assets/images/svg/ArrowDown.svg "
          class="arrow"
          :class="{ up: dropdownOpen, down: !dropdownOpen }"
        />
      </div>
      <div class="language-dropdown" v-if="dropdownOpen">
        <div
          class="language-option"
          v-for="(label, lang) in filteredLanguages"
          :key="lang"
          :value="lang"
          @click="changeLanguage(lang)"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./LanguageSelector.ts" lang="ts" />

<style scoped lang="scss">
.language-selector {
  display: flex;
  align-items: center;

  &-wrapper {
    width: 70px;
    padding: 10px 15px;
    background-color: var(--white);
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      border-color: var(--primary);
      transition: 0.3s;
    }
  }
  & .arrow {
    transition: transform 0.3s ease;
  }

  & .arrow.down {
    transform: rotate(0deg);
  }

  & .arrow.up {
    transform: rotate(180deg);
  }
}

.language-dropdown {
  flex-direction: column;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
  animation: slideIn 0.3s ease-out;
}

.language-option {
  padding: 5px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      90deg,
      var(--primary-light-green) 0%,
      var(--secondary-light-green) 100%
    );
  }
  &:last-child {
    border-bottom: none;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
