# Pisces Sanctuary

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html012` เป็นเว็บไซต์ธีม `Pisces Sanctuary` ที่ปรับให้ทำงานได้แบบออฟไลน์โดยสมบูรณ์ โดยแยกไฟล์ออกเป็น:

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
