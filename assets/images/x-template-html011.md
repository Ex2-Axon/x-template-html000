# Aquarius Visionary City

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html011` เป็นเว็บไซต์ธีม `Aquarius Visionary City` ที่ถูกแปลงให้ทำงานได้เต็มรูปแบบในเครื่องเดียว โดยแยกไฟล์เป็น:

- `index.html` - โครงหน้าเว็บหลัก
- `css/styles.css` - สไตล์ทั้งหมดในเครื่อง
- `js/main.js` - สคริปต์ใช้งานภายในเว็บ
- `js/components-loader.js` - โหลดส่วนประกอบ `header` และ `footer` แบบไดนามิก
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
