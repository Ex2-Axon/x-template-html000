# Pisces Sanctuary

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html012/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html012/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Pisces Sanctuary (x-template-html012) - ดินแดนแห่งความฝัน

## คำอธิบาย

**Pisces Sanctuary** คือดินแดนแห่งราศีมีน ที่ถูกสร้างขึ้นจากความฝัน จินตนาการ และความเห็นอกเห็นใจ
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆ

- `index.html` - หน้าเว็บหลัก
- `css/styles.css` - สไตล์ทั้งหมดโหลดในเครื่อง
- `js/main.js` - โค้ด JavaScript ภายในเว็บ
- `js/components-loader.js` - โหลดส่วนประกอบ header/footer แบบไดนามิก
- `components/header.html` และ `components/footer.html` - ส่วนประกอบ UI แบบไฟล์แยก
- `assets/fonts` - ฟอนต์ออฟไลน์สำหรับใช้งานโดยไม่ต้องเชื่อมต่ออินเทอร์เน็ต

## คุณสมบัติ

- ไม่มีการพึ่งพา Tailwind CSS CDN
- ไม่มีการพึ่งพา Google Fonts
- ไม่มีการพึ่งพา FontAwesome หรือ CDN ภายนอก
- โหลดฟอนต์จาก `assets/fonts/chakra-petch`
- รองรับการรันบนเว็บเซิร์ฟเวอร์ local

## การรัน

```bash
cd x-template-html012
python -m http.server 8000
```

เปิดในเบราว์เซอร์:

```text
http://127.0.0.1:8000
```

## หมายเหตุ

เว็บไซต์นี้สร้างมาให้ใช้งานได้แม้ไม่มีอินเทอร์เน็ต โดยใช้ทรัพยากรทั้งหมดที่อยู่ภายในโฟลเดอร์เดียวกัน
