# Leo Metropolis - Offline-ready Template

## Overview

`x-template-html005` เป็นหน้าเว็บนำเสนอธีมเมืองสิงโต (Leo Metropolis) ที่ออกแบบให้ใช้งานได้ทั้งในสถานะออนไลน์และออฟไลน์ โดยแยกส่วนงานออกเป็น:

- `index.html` - หน้าเพจหลัก
- `css/styles.css` - สไตล์ทั้งหมดถูกแยกออกมาเป็นไฟล์เดียว
- `js/main.js` - โค้ดอินเตอร์แอคทีฟทั้งหมดย้ายมาอยู่ภายนอก
- `components/header.html` - ส่วนหัวของหน้าเว็บ
- `components/footer.html` - ส่วนท้ายของหน้าเว็บ

## Offline Support

ไฟล์นี้ไม่พึ่งพา CDN, Google Fonts หรือ FontAwesome ออนไลน์อีกต่อไป:

- ใช้ฟอนต์ระบบในเครื่องแทน Google Fonts
- ไม่มีการโหลด Tailwind CSS ผ่านเน็ต
- ไอคอนและสไตล์สร้างด้วย CSS/HTML ภายใน
- เพียงเปิด `index.html` ในเบราว์เซอร์ ก็สามารถใช้งานได้ทันที

## Component Loading

การโหลดส่วนหัวและท้ายของหน้าเว็บทำผ่านไฟล์ `../assets/load-components.js` โดยใช้ `data-include="components/header.html"` และ `data-include="components/footer.html"`

## Interactive Features

ระบบ JavaScript ใน `js/main.js` รองรับ:

- เปลี่ยนข้อมูลย่านของเมืองโดยไม่รีโหลดหน้า
- คำนวณความเข้ากันได้ของราศีแบบอินเตอร์แอคทีฟ
- เปิดและสลับการ์ดทำนายคำทำนายรายวัน
- แชทเทียมกับ "Lord Leonel" พร้อมตอบกลับอัตโนมัติ

## Badges

![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)
![Componentized](https://img.shields.io/badge/Componentized-Yes-blue)
![JS%20%2B%20CSS%20Separated](https://img.shields.io/badge/JS%20%2B%20CSS-Separated-orange)

## Usage

1. เปิดไฟล์ `index.html` ในเบราว์เซอร์
2. แน่ใจว่า `css/styles.css`, `js/main.js`, และ `components/*` อยู่ในโฟลเดอร์เดียวกับ `index.html`
3. หากต้องการทดสอบในเครื่อง ให้เปิดผ่านไฟล์ระบบไม่ต้องใช้เว็บเซิร์ฟเวอร์

## Notes

- ไฟล์นี้ออกแบบเพื่อให้ทำงานในสถานะออฟไลน์ได้ทันที
- ถ้าอยากเพิ่มฟีเจอร์ใหม่ ให้แก้ใน `js/main.js` และ `css/styles.css`
