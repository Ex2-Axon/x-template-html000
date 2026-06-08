# x-template-html009: Sagittarius City

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html009` เป็นธีมเว็บไซต์ "Sagittarius City" ที่ออกแบบโดยให้หน้าเว็บทำงานได้แบบออฟไลน์ทั้งหมด:

- แยก `js`, `css`, `components` อย่างชัดเจน
- โหลดฟอนต์แบบออฟไลน์จากโฟลเดอร์ `assets/fonts`
- ไม่พึ่งพา CDN, Google Fonts หรือ Tailwind CDN ใดๆ
- ใช้โครงสร้างแบบสลับหน้าจอ (slide) และมีระบบเลือกเมนูบน header

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
