# Virgopolis (x-template-html006) - เมืองราศีกันย์ออฟไลน์

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html006/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html006/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## คำอธิบาย

**Virgopolis** (วิลโกโปลิส) คือเทมเพลตเว็บไซต์จำลองมหานครแห่งชาวราศีกันย์ ผู้รักความสมบูรณ์แบบ มีความเป็นระเบียบ และใส่ใจในรายละเอียด
โปรเจกต์นี้ถูกออกแบบมาในสไตล์ Dashboard/Information Hub ที่สามารถใช้งาน **ออฟไลน์** ได้ 100% โดยมีการแยกส่วน Component อย่างชัดเจน
- ✅ ไม่มีการเรียกใช้ CDN, Google Fonts, หรือ FontAwesome ออนไลน์
- ✅ โหลด UI component ผ่าน `assets/load-components.js`
- ✅ มีระบบตอบโต้นายกเทศมนตรีในโหมดออฟไลน์ด้วยคำตอบสำเร็จรูป
- ✅ ใช้ฟอนต์ระบบในเครื่องเท่านั้น (system fonts)

## โครงสร้างไฟล์

- `index.html` - หน้าเพจหลัก พร้อม `data-include` สำหรับโหลด header/footer
- `css/styles.css` - สไตล์เพจทั้งหมดแบบโลคอล
- `js/main.js` - ควบคุมการสลับแท็บ เมนูมือถือ ย่านเมือง เกม และแชทนายกฯ
- `components/header.html` - ส่วนหัวนำทางของเว็บไซต์
- `components/footer.html` - ส่วนท้ายของเว็บไซต์
- `assets/load-components.js` - โหลด component แบบไดนามิกจากไฟล์โลคอล

## วิธีใช้งาน

1. เปิด `x-template-html006/index.html` ด้วยเว็บเบราว์เซอร์ หรือ
2. เปิดผ่าน local server เช่น Live Server เพื่อให้ `fetch()` โหลด components ได้อย่างถูกต้อง

## Badge

![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)
![Componentized](https://img.shields.io/badge/Componentized-Yes-blue)
![JS%20%2B%20CSS-Separated](https://img.shields.io/badge/JS%20%2B%20CSS-Separated-orange)
![No-CDN](https://img.shields.io/badge/No-CDN-True-green)
