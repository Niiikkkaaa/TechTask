import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HeaderComponent",
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
