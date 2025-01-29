import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RatingSelector",
  props: {
    msg: String,
  },
  setup(props, { emit }) {
    const rating = ref<number | null>(null);
    const hoveredIndex = ref<number | null>(null);

    const isHovered = (index: number) => {
      if (hoveredIndex.value) {
        return hoveredIndex.value >= index;
      }
    };

    const isSelected = (index: number) => {
      return rating.value !== null && index <= rating.value;
    };

    const hoverIcons = (index: number) => {
      hoveredIndex.value = index;
    };
    const selectRating = (index: number) => {
      rating.value = index;
      emit("selectRating", rating.value);
    };
    const resetIcons = () => {
      hoveredIndex.value = null;
    };

    return {
      hoveredIndex,
      isHovered,
      isSelected,
      hoverIcons,
      selectRating,
      resetIcons,
    };
  },
});
