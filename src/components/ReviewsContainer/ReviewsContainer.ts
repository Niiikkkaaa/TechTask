import { defineComponent } from "vue";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.vue";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent.vue";
import ButtonsComponent from "../../components/ButtonsComponent/ButtonsComponent.vue";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector.vue";

export default defineComponent({
  name: "ReviewsContainer",
  props: {
    msg: String,
  },
  components: {
    HeaderComponent,
    ReviewsComponent,
    ButtonsComponent,
    LanguageSelector,
  },
});
