# x-template-html008: Scorpio Metropolis

## Scorpio Metropolis (x-template-html008) - มหานครพิจิก

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html008/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html008/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## คำอธิบาย

**Scorpio Metropolis** คือมหานครจำลองแห่งราศีพิจิก ที่สร้างจากพลังแห่งความลึกซึ้ง ความมุ่งมั่น และสัญชาตญาณ
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆ mock

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
