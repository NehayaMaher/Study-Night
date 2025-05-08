import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // يمكنك إضافة الإعدادات أو الاستماع للأحداث هنا
    },
  },
});
