import { defineComponent, computed } from "vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LanguageSelector",
  props: {
    msg: String,
  },

  setup() {
    const { locale } = useI18n();
    const selectedLanguage = ref(locale.value);
    const dropdownOpen = ref(false);

    const languages = {
      en: "EN",
      uk: "UK",
    };

    const filteredLanguages = computed(() => {
      const selectedLang = selectedLanguage.value;
      return Object.fromEntries(
        Object.entries(languages).filter(([lang]) => lang !== selectedLang)
      );
    });

    const openMenu = () => {
      dropdownOpen.value = true;
    };

    const closeMenu = () => {
      dropdownOpen.value = false;
    };

    const changeLanguage = (lang: string) => {
      selectedLanguage.value = lang;
      locale.value = selectedLanguage.value;
      dropdownOpen.value = false;
    };

    return {
      filteredLanguages,
      selectedLanguage,
      changeLanguage,
      openMenu,
      closeMenu,
      dropdownOpen,
      languages,
    };
  },
});
