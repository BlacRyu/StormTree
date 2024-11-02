import { defineStore } from 'pinia'
import versions from '~/assets/game_versions/versions.json';

export const useStringtableStore = defineStore('stringtables', () => {
    const availableLanguages = ['de', 'en', 'es-419', 'es-ES', 'fr', 'ko', 'pt-BR', 'ru', 'tr', 'zh-Hant', 'zh'];
    const currentLanguage = ref('en');
    const stringtable = ref({});

    async function setLanguage(newLanguage: string) {
      if (!availableLanguages.includes(newLanguage)) {
        return;
      }
      currentLanguage.value = newLanguage;
      stringtable.value = await import(`~/assets/stringtables/${newLanguage}.json`);
    }
    function getString(path: string) {
      const [library, key] = path.split('|');
      
      // return stringtable.value.then(table => table[library][key]);
    }
    

    return {
      availableLanguages, currentLanguage, stringtable
    }
  }
)
