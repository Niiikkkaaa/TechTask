import { defineComponent, ref } from "vue";
import { useReviewsStore } from "@/store/reviews";
import { useI18n } from "vue-i18n";
import RatingSelector from "../RatingSelector/RatingSelector.vue";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  name: "ModalComponent",
  props: {
    msg: String,
  },
  components: {
    RatingSelector,
  },
  setup(props, { emit }) {
    const { t } = useI18n();
    const reviewValue = ref("");
    const rating = ref<number | null>(null);
    const reviewsStore = useReviewsStore();
    const isRewiewSend = ref(false);

    const handleSelectRating = (data: number) => {
      rating.value = data;
    };

    const sendReview = () => {
      reviewsStore
        .addReview({
          id: uuidv4(),
          review: reviewValue.value,
          rating: rating.value ? rating.value : 0,
        })
        .then(() => {
          isRewiewSend.value = true;
          reviewValue.value = "";
        });
    };

    const closeModal = () => {
      emit("closeModal");
    };

    return {
      t,
      reviewValue,
      handleSelectRating,
      sendReview,
      isRewiewSend,
      closeModal,
    };
  },
});
