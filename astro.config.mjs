import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // คืนค่าโหมดสถิตที่เรียบง่ายและปลอดภัยที่สุดสำหรับ Cloudflare Pages
  integrations: [],
});