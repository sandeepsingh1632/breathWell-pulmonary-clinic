import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        service: resolve(__dirname, 'service.html'),
        serviceDetails: resolve(__dirname, 'service-details.html'),
        team: resolve(__dirname, 'team.html'),
        teamDetails: resolve(__dirname, 'team-details.html'),
        contact: resolve(__dirname, 'contact.html'),
        articles: resolve(__dirname, 'articles.html'),
        articlesDetails: resolve(__dirname, 'articles-details.html'),
        appointment: resolve(__dirname, 'appointment.html'),
      },
    },
  },
});
