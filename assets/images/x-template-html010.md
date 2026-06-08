# Capricornia Metropolis

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html010` เป็นเว็บไซต์ธีม `Capricornia Metropolis` ที่ออกแบบให้ทำงานได้แบบออฟไลน์ โดยแยกไฟล์ออกเป็น:

- `index.html` - โครงหน้าหลัก
- `css/styles.css` - สไตล์ทั้งหมดในเครื่อง
- `js/main.js` - ตรรกะอินเทอร์แอคทีฟ เช่น นโยบายเมืองและคำปรึกษาสภา
- `js/components-loader.js` - ตัวโหลด component แบบไดนามิก
- `components/header.html` และ `components/footer.html` - ส่วนหัวและส่วนท้ายที่โหลดจากไฟล์แยก
- `assets/fonts` - ฟอนต์ออฟไลน์สำหรับเว็บ

## คุณสมบัติสำคัญ

- ไม่มีการพึ่งพา CDN / Tailwind CSS / Google Fonts / FontAwesome
- ฟอนต์ถูกโหลดจาก `assets/fonts/chakra-petch`
- รองรับการรันในเครื่องผ่านเว็บเซิร์ฟเวอร์แบบ local
- UI ออกแบบใหม่ให้ใช้งานได้ด้วย CSS แบบกำหนดเอง

## การรัน

ใช้เว็บเซิร์ฟเวอร์ท้องถิ่นเพื่อให้ตัวโหลด component ทำงานได้:

```bash
cd x-template-html010
python -m http.server 8000
```

แล้วเปิด:

```text
http://127.0.0.1:8000
```

## หมายเหตุ

เว็บไซต์นี้ออกแบบให้สามารถทำงานได้แม้ไม่มีเน็ต โดยใช้ทรัพยากรทั้งหมดจากไฟล์ในโฟลเดอร์เดียวกัน
