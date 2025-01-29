<template>
  <div>
    <svg
      class="icon"
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-for="i in 5"
      :key="i"
      :class="{ hovered: isHovered(i) }"
      @mouseover="hoverIcons(i)"
      @mouseleave="resetIcons"
      @click="selectRating(i)"
    >
      <path
        class="icon-path"
        d="M14 1.25955L17.279 7.9035C17.5703 8.49378 18.1334 8.90292 18.7849 8.99758L26.1169 10.063L20.8114 15.2346C20.34 15.694 20.1249 16.356 20.2362 17.0048L21.4886 24.3072L14.9307 20.8595C14.348 20.5532 13.652 20.5532 13.0693 20.8595L6.51135 24.3072L7.76381 17.0048C7.87509 16.3561 7.65999 15.694 7.18862 15.2346L1.88312 10.063L9.21514 8.99758C9.86656 8.90292 10.4297 8.49379 10.721 7.9035L14 1.25955Z"
        :stroke="isSelected(i) ? '#fcc141' : '#fcc141'"
        :fill="isSelected(i) ? '#fcc141' : isHovered(i) ? '#fcc141' : 'none'"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script src="./RatingSelector.ts" lang="ts" />

<style>
.icon {
  margin-right: 5px;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
}
</style>
