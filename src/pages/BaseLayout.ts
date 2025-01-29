import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useReviewsStore } from "@/store/reviews";
import ReviewsContainer from "../components/ReviewsContainer/ReviewsContainer.vue";
import ReviewsList from "../components/ReviewsList/ReviewsList.vue";

export default defineComponent({
  name: "BaseLayout",
  props: {
    msg: String,
  },
  components: {
    ReviewsContainer,
    ReviewsList,
  },
  setup() {
    const { t } = useI18n();
    const reviewsStore = useReviewsStore();

    return { t, reviewsStore };
  },
});
