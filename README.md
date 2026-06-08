# x-template-html000

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html000` เป็นเว็บไซต์ gallery สำหรับขาย landing page HTML ในราคา 800 บาทต่อเพจ โดยจัดแสดงตัวอย่างเพจ landing page พร้อมสไตล์และสคริปต์ทั้งหมดในเครื่องเดียว

### โครงสร้างไฟล์

- `index.html` - หน้าเว็บหลัก
- `css/styles.css` - สไตล์ทั้งหมด
- `js/main.js` - ฟังก์ชันการกรองหมวดหมู่
- `js/components-loader.js` - โหลดส่วนประกอบ header/footer
- `components/header.html` - ส่วนหัวเว็บ
- `components/footer.html` - ส่วนท้ายเว็บ
- `assets/fonts/chakra-petch.css` - กำหนดฟอนต์ออฟไลน์
- `assets/fonts/chakra-petch/` - ไฟล์ font binary ที่ต้องคัดลอกมาใช้งาน

### คุณสมบัติ

- ไม่พึ่งพา Tailwind CDN
- ไม่พึ่งพา Google Fonts
- โหลดฟอนต์ออฟไลน์จาก `assets/fonts`
- ทำงานได้เต็มรูปแบบแม้ไม่มีอินเทอร์เน็ต

### วิธีรัน

```bash
cd x-template-html000
python -m http.server 8000
```

แล้วเปิด:

```text
http://127.0.0.1:8000
```
