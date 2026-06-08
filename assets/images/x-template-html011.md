# Aquarius Visionary City

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html011/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html011/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Aquarius Visionary City (x-template-html011) - มหานครแห่งวิสัยทัศน์ราศีกุมภ์

## คำอธิบาย

**Aquarius Visionary City** คือมหานครจำลองแห่งราศีกุมภ์ ที่สร้างจากความคิดสร้างสรรค์ นวัตกรรม และความอิสระ
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆ `footer` แบบไดนามิก
- `components/header.html` และ `components/footer.html` - ส่วนประกอบ UI แบบแยกไฟล์
- `assets/fonts` - ฟอนต์ออฟไลน์สำหรับใช้งานโดยไม่ต้องเชื่อมต่อเน็ต

## คุณสมบัติ

- ไม่มีการพึ่งพา Tailwind CDN
- ไม่มีการพึ่งพา Google Fonts
- ไม่มีการพึ่งพา FontAwesome หรือ CDN ภายนอก
- โหลดฟอนต์จาก `assets/fonts/chakra-petch`
- รองรับการรันบนเว็บเซิร์ฟเวอร์ local เพื่อให้ตัวโหลดส่วนประกอบทำงานได้

## การรัน

```bash
cd x-template-html011
python -m http.server 8000
```

เปิดเบราว์เซอร์ที่:

```text
http://127.0.0.1:8000
```

## หมายเหตุ

เว็บไซต์นี้ออกแบบมาให้ใช้งานได้อบย่างออฟไลน์ แม้ไม่มีอินเทอร์เน็ตก็ยังแสดงผลได้ครบถ้วน
