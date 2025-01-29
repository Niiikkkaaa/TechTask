import { defineComponent, ref, onMounted } from "vue";
import { useReviewsStore } from "@/store/reviews";
import { ReviewData } from "@/store/types";

export default defineComponent({
  name: "ReviewsList",

  setup() {
    const reviewsStore = useReviewsStore();
    const reviews = ref<ReviewData[]>([]);
    reviews.value = reviewsStore.reviews;
    onMounted(async () => {
      await reviewsStore.fetchReviewsData();
      reviews.value = reviewsStore.reviews;
    });

    const closeReviewsList = () => {
      reviewsStore.closeReviewsList();
    };

    return { reviews, closeReviewsList };
  },
});
