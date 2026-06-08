# Virgopolis - x-template-html006

นี่คือเทมเพลต HTML5 ออฟไลน์สำหรับ `x-template-html006` ที่ออกแบบให้ทำงานได้โดยไม่ต้องพึ่งพาโค้ดออนไลน์หรือ CDN ใด ๆ

## คุณสมบัติหลัก

- ✅ แยกไฟล์ `CSS`, `JS`, และ `components` ชัดเจน
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
