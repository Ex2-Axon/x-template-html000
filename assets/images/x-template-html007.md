# Libra City (x-template-html007) - เมืองแห่งความสมดุลและศิลปะ

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html007/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html007/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## คำอธิบาย

**Librapolis** คือมหานครจำลองแห่งราศีตุลย์ ที่ผสมผสานความงาม ความยุติธรรม และมิตรภาพไว้ในหนึ่งเดียว
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆ

## โครงสร้างโปรเจค

- `index.html` — หน้าเว็บหลัก
- `css/styles.css` — สไตล์ทั้งหมดเก็บไว้ภายใน
- `js/components-loader.js` — โหลดส่วนประกอบ HTML แบบออฟไลน์
- `js/main.js` — สคริปต์ page interaction และ logic ของหน้า
- `components/header.html` — ส่วนหัวของเว็บ
- `components/footer.html` — ส่วนท้ายของเว็บ

## คุณสมบัติ

- แยก `js`, `css`, และ `components` อย่างชัดเจน
- ไม่มีการอ้างอิง CDN หรือไฟล์ออนไลน์จากภายนอก
- รองรับการใช้งานแบบออฟไลน์ผ่าน local server
- ใช้ฟอนต์ระบบเพื่อให้เปิดได้ทันทีโดยไม่ต้องดาวน์โหลด

## วิธีใช้งาน

เรียกดูด้วย local server เช่น:

```bash
python -m http.server 8000
```

จากนั้นเปิด `http://127.0.0.1:8000` ในเบราว์เซอร์

## หมายเหตุ

- หน้าคอมโพเนนต์จะถูกโหลดผ่าน `fetch()` จึงต้องรันผ่าน server ท้องถิ่น
- หากต้องการเพิ่มฟอนต์แบบออฟไลน์ ให้เพิ่มไฟล์ฟอนต์ในโฟลเดอร์ `assets/fonts` และปรับ `css/styles.css`
