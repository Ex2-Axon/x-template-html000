# Template x-template-html014 - ไทยรุ่งเรือง อลูมิเนียม

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**เว็บนี้เป็นตัวอย่างหน้าเว็บไซต์สำหรับธุรกิจก่อสร้างและงานอลูมิเนียม** ที่ออกแบบด้วยโทนสีฟ้า-เหลือง และมีฟีเจอร์สำคัญเช่นแบบฟอร์มติดต่อ, แกลเลอรี่ผลงาน, เครื่องคำนวณราคางานติดตั้ง และเมนูมือถือ

## คำอธิบาย

- `index.html` - หน้าเว็บหลักสำหรับลูกค้าที่มองหาบริการกั้นห้อง, ต่อเติมห้อง, ประตูหน้าต่างอลูมิเนียม และงานกระจก
- `css/styles.css` - สไตล์เสริมที่ใช้ร่วมกับ Tailwind CSS
- `js/main.js` - ตรรกะในการเปิดเมนูมือถือ, กรองแกลเลอรี่, อัปเดตสไลเดอร์, คำนวณราคา และแสดงการแจ้งเตือนแบบ Toast
- `assets/tailwind.min.css` - Tailwind CSS โหลดจากไฟล์ภายในเพื่อใช้แบบออฟไลน์
- `assets/fontawesome/css/all.min.css` + `assets/fontawesome/webfonts/` - ไอคอน FontAwesome โหลดในเครื่อง
- `assets/load-components.js` - สคริปต์โหลดส่วนหัวและส่วนท้ายจากไฟล์ component
- `components/header.html` - ส่วนหัวของเว็บ
- `components/footer.html` - ส่วนท้ายของเว็บ
- `assets/placeholder.svg` - รูปภาพตัวอย่างออฟไลน์ที่ใช้แทนรูปจากภายนอก

## คุณสมบัติเด่น

- โหลด Tailwind และ FontAwesome จากไฟล์ภายในโดยไม่พึ่งพา CDN
- โครงสร้างหน้าเว็บแยกส่วน header/footer เป็น component
- รองรับเมนูมือถือและเมนูป๊อปอัปเมื่อเลื่อนหน้าจอมือถือ
- มีเครื่องคำนวณราคาคร่าว ๆ สำหรับขนาดงานและชนิดบริการ
- ฟอร์มติดต่อและฟอร์มประเมินราคาส่งคำขอได้ทันที (แบบจำลอง)

## การใช้งาน

เปิด Terminal แล้วรัน:

```bash
cd x-template-html014
python -m http.server 8000
```

แล้วเปิดเบราว์เซอร์ที่:

```text
http://127.0.0.1:8000
```

## หมายเหตุ

เว็บไซต์นี้ออกแบบให้ทำงานได้โดยใช้ทรัพยากรภายในตัวโปรเจกต์เอง เพื่อรองรับการใช้งานแบบออฟไลน์และแสดงตัวอย่างการทำงานของเว็บไซต์หน้าเดียวได้อย่างครบถ้วน

