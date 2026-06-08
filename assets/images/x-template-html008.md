# x-template-html008: Scorpio Metropolis

![HTML5](https://img.shields.io/badge/HTML5-Offline-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Offline-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JS-Offline-yellow?logo=javascript)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)

## คำอธิบาย

`x-template-html008` เป็นหน้าตัวอย่างธีม "Scorpio Metropolis" ซึ่งออกแบบมาเป็นเว็บไซต์หนึ่งหน้าที่มี:

- ส่วนแนะนำเมืองและสัญลักษณ์
- แผนที่เชิงโต้ตอบสำหรับเลือกย่านสำรวจ
- โปรไฟล์ลักษณะนิสัยของราศีพิจิก
- ตารางความเข้ากันได้กับราศีอื่น
- มินิเกมสัญชาตญาณแบบออฟไลน์
- ผู้พิทักษ์ดวงดาวจำลองไว้ในส่วน AI แบบ mock

## โครงสร้างไฟล์

- `index.html` — หน้าเว็บหลัก
- `css/styles.css` — สไตล์ทั้งหมดอยู่ในไฟล์นี้
- `js/main.js` — วิชวลและ logic หน้าเว็บทั้งหมด
- `js/components-loader.js` — โหลด header/footer แบบแยกคอมโพเนนต์
- `components/header.html` — ส่วนหัวของเว็บไซต์
- `components/footer.html` — ส่วนท้ายของเว็บไซต์

## คุณสมบัติสำคัญ

- ไม่มีการอ้างอิง CDN หรือ Tailwind CSS ภายนอก
- ไม่มีการเรียกใช้ฟอนต์จาก Google Fonts หรือบริการออนไลน์อื่นๆ
- เหมาะสำหรับการรันแบบออฟไลน์ผ่าน local server
- โมดูลคอมโพเนนต์แยกตาม `components` folder

## วิธีใช้งาน

1. เปิด terminal ในโฟลเดอร์ `x-template-html008`
2. รัน local server เช่น:

```powershell
python -m http.server 8000
```

3. เปิดเบราว์เซอร์และเข้าถึง:

```text
http://127.0.0.1:8000
```

> เนื่องจากส่วนคอมโพเนนต์โหลดด้วย `fetch()` จึงต้องใช้ server ท้องถิ่น ไม่ควรเปิดด้วย `file://`

## หมายเหตุ

- หน้าเว็บนี้ใช้ฟอนต์ระบบเพื่อให้ทำงานได้ทันทีทั้งในสถานะออนไลน์และออฟไลน์
- หากต้องการเพิ่มไฟล์ฟอนต์ออฟไลน์ ให้เพิ่มโฟลเดอร์ `assets/fonts` และปรับ `css/styles.css`
