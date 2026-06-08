# x-template-html009: Sagittarius City

## Sagittarius City (x-template-html009) - มหานครแห่งเสรีและปัญญาญาณ

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html009/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html009/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## คำอธิบาย

**Sagittarius City** คือมหานครจำลองแห่งราศีธนู ที่ออกแบบสำหรับผู้รักการเดินทาง เสรีภาพ และการเรียนรู้แบบไร้กรอบจำกัด
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆมีระบบเลือกเมนูบน header

## โครงสร้างไฟล์

- `index.html` — หน้าเว็บหลัก
- `css/styles.css` — สไตล์ทั้งหมดอยู่ในไฟล์นี้
- `js/main.js` — logic การสลับ slide และฟังก์ชันอินเทอร์แอคทีฟ
- `js/components-loader.js` — loader สำหรับคอมโพเนนต์ header/footer
- `components/header.html` — ส่วนหัวของเว็บ
- `components/footer.html` — ส่วนท้ายของเว็บ
- `assets/fonts/chakra-petch.css` — ฟอนต์ Chakra Petch แบบออฟไลน์
- `assets/fonts/chakra-petch/*.woff2` — ไฟล์ฟอนต์ออฟไลน์

## การใช้งาน

เปิดโฟลเดอร์ `x-template-html009` ด้วย local server เช่น:

```powershell
python -m http.server 8000
```

แล้วเข้าไปที่:

```text
http://127.0.0.1:8000
```

> เนื่องจากคอมโพเนนต์ใช้งาน `fetch()` จึงต้องรันผ่าน server ท้องถิ่น

## หมายเหตุ

- ฟอนต์ `Chakra Petch` ถูกเก็บในโฟลเดอร์ `assets/fonts/chakra-petch`
- หน้าเว็บสามารถทำงานได้แม้ไม่มีเน็ต
- หากต้องการเพิ่มฟอนต์อื่น ให้นำไฟล์ `.woff2` มาใส่ในโฟลเดอร์ `assets/fonts` และปรับ `assets/fonts/chakra-petch.css` หรือ `css/styles.css` ตามต้องการ
