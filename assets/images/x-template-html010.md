# Capricornia Metropolis
# Capricornia Metropolis (x-template-html010) - มหานครแห่งสัจจะและความมุ่งมั่น

[![Deploy to GitHub Pages](https://github.com/microtronic-thailand/x-template-html010/actions/workflows/deploy.yml/badge.svg)](https://microtronic-thailand.github.io/x-template-html010/)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## คำอธิบาย

**Capricornia Metropolis** คือมหานครจำลองแห่งราศีมังกร ที่สร้างจากวินัย ความอดทน และเป้าหมายระยะยาว
โปรเจกต์นี้ทำงาน **ออฟไลน์** ได้ 100% โดยไม่มีการเรียกใช้ CDN หรือทรัพยากรภายนอกใด ๆฟไลน์สำหรับเว็บ

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
