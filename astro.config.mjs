import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import cloudflare from '@astrojs/cloudflare'; // ใช้ Adapter คอนฟิกตัวเดิมที่คุณ Deploy บน Cloudflare

export default defineConfig({
  output: 'server', // ใช้โหมด Server/Hybrid เพื่อให้เวลาลูกค้ากดเข้าเว็บปุ๊บ คอนเทนต์จะดึงสดจาก Sanity ทันที
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: 'eh5ggljy', // รหัสโปรเจกต์ ULCCMS ของคุณ
      dataset: 'production',
      useCdn: false,         // ปิด CDN ไว้ เพื่อเวลาคุณแก้คอนเทนต์ที่ Sanity ปุ๊บ หน้าเว็บ Astro จะได้เห็นการเปลี่ยนแปลงทันทีโดยไม่ต้องรอแคช
      apiVersion: '2026-05-22', // ระบุเป็นวันที่ปัจจุบัน
    }),
  ],
});