import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import ModalComponent from "../ModalComponent/ModalComponent.vue";
import { useReviewsStore } from "@/store/reviews";

export default defineComponent({
  name: "ButtonsComponent",
  components: {
    ModalComponent,
  },
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n();
    const isModalOpen = ref(false);
    const reviewsStore = useReviewsStore();
    const redirectToGoogle = () => {
      window.open("https://google.com", "_blank");
    };

    const openReviewsList = () => {
      reviewsStore.openReviewsList();
      console.log(reviewsStore.isReviewsListOpen);
    };

    const openModal = () => {
      isModalOpen.value = true;
    };

    const handleCloseModal = () => {
      isModalOpen.value = false;
    };

    return {
      t,
      redirectToGoogle,
      isModalOpen,
      openReviewsList,
      openModal,
      handleCloseModal,
    };
  },
});
