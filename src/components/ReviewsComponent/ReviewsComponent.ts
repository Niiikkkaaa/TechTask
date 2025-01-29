import { useReviewsStore } from "@/store/reviews";
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "ReviewsComponent",
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n();
    const reviewsStore = useReviewsStore();
    const rating = ref(0);
    const reviewsCount = ref(0);

    onMounted(async () => {
      await reviewsStore.fetchReviewsData();
      rating.value = reviewsStore.rating;
      reviewsCount.value = reviewsStore.reviewsCount;
    });

    return { rating, reviewsCount, t };
  },
});
