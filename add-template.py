"""
add-template.py
===============
สคริปต์เพิ่ม template ID ใหม่เข้า TEMPLATE_IDS ใน js/main.js โดยอัตโนมัติ

วิธีใช้:
  python add-template.py

สิ่งที่สคริปต์ทำ:
  1. อ่าน TEMPLATE_IDS ปัจจุบันจาก js/main.js
  2. หา ID ล่าสุด (เช่น 012) แล้ว +1 → 013
  3. สร้างไฟล์ placeholder: assets/images/x-template-html013.png  (ถ้าไม่มี)
                              assets/images/x-template-html013.md   (ถ้าไม่มี)
  4. เขียน ID ใหม่ลงใน TEMPLATE_IDS ใน js/main.js
"""

import re
import os
import sys
from pathlib import Path

# ── Config ──────────────────────────────────────────────────────────────────
ROOT        = Path(__file__).parent
MAIN_JS     = ROOT / "js" / "main.js"
IMAGES_DIR  = ROOT / "assets" / "images"
ID_PATTERN  = re.compile(r"x-template-html(\d{3})")
# ────────────────────────────────────────────────────────────────────────────


def read_current_ids(js_text: str) -> list[str]:
    """ดึง list ของ ID จาก TEMPLATE_IDS ใน main.js"""
    block_match = re.search(
        r"const TEMPLATE_IDS\s*=\s*\[(.*?)\];",
        js_text,
        re.DOTALL,
    )
    if not block_match:
        print("ERROR: ไม่พบ TEMPLATE_IDS ใน main.js")
        sys.exit(1)
    raw = block_match.group(1)
    ids = re.findall(r"'(\d{3})'", raw)
    return ids


def next_id(ids: list[str]) -> str:
    """คำนวณ ID ถัดไปจาก ID ล่าสุด"""
    if not ids:
        return "001"
    return str(int(max(ids)) + 1).zfill(3)


def update_template_ids(js_text: str, ids: list[str]) -> str:
    """เขียน TEMPLATE_IDS ใหม่กลับเข้า js_text"""
    # จัด layout: 6 ต่อแถว
    rows = []
    for i in range(0, len(ids), 6):
        chunk = ids[i:i + 6]
        rows.append("  " + ", ".join(f"'{x}'" for x in chunk) + ",")
    block = "const TEMPLATE_IDS = [\n" + "\n".join(rows) + "\n];"

    updated = re.sub(
        r"const TEMPLATE_IDS\s*=\s*\[.*?\];",
        block,
        js_text,
        flags=re.DOTALL,
    )
    return updated


def create_placeholder_md(path: Path, new_id: str):
    """สร้างไฟล์ .md ตัวอย่างถ้ายังไม่มี"""
    num = int(new_id)
    content = f"""# Template x-template-html{new_id}

## คำอธิบาย

เทมเพลตหมายเลข {num} — แก้ไขไฟล์นี้เพื่อเพิ่มรายละเอียด

## โครงสร้างไฟล์

- `index.html` — หน้าเว็บหลัก
- `css/styles.css` — สไตล์ทั้งหมด
- `js/main.js` — โค้ด JavaScript

## วิธีใช้งาน

เปิดผ่าน local server เช่น:

```bash
python -m http.server 8000
```
"""
    path.write_text(content, encoding="utf-8")
    print(f"  ✔ สร้าง {path.name}")


def create_placeholder_png(path: Path):
    """สร้างไฟล์ .png placeholder (1x1 pixel สีเทา) ถ้ายังไม่มี"""
    # PNG 1×1 สีเทา (#888) — raw bytes
    PNG_1X1_GRAY = bytes([
        0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A,
        0x00,0x00,0x00,0x0D,0x49,0x48,0x44,0x52,
        0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,
        0x08,0x02,0x00,0x00,0x00,0x90,0x77,0x53,
        0xDE,0x00,0x00,0x00,0x0C,0x49,0x44,0x41,
        0x54,0x08,0xD7,0x63,0x88,0x88,0x88,0x00,
        0x00,0x00,0x04,0x00,0x01,0xA3,0x5B,0x82,
        0x7D,0x00,0x00,0x00,0x00,0x49,0x45,0x4E,
        0x44,0xAE,0x42,0x60,0x82,
    ])
    path.write_bytes(PNG_1X1_GRAY)
    print(f"  ✔ สร้าง {path.name} (placeholder 1×1px)")


def main():
    print("=" * 50)
    print("  add-template.py")
    print("=" * 50)

    # อ่าน main.js
    js_text = MAIN_JS.read_text(encoding="utf-8")
    current_ids = read_current_ids(js_text)
    print(f"\nID ปัจจุบัน : {', '.join(current_ids)}")

    new_id   = next_id(current_ids)
    new_name = f"x-template-html{new_id}"
    print(f"ID ใหม่     : {new_id}  →  {new_name}")

    # ตรวจสอบ / สร้างไฟล์ใน assets/images
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    png_path = IMAGES_DIR / f"{new_name}.png"
    md_path  = IMAGES_DIR / f"{new_name}.md"

    print(f"\nสร้างไฟล์ใน assets/images/")
    if not png_path.exists():
        create_placeholder_png(png_path)
    else:
        print(f"  ⚠ {png_path.name} มีอยู่แล้ว ข้าม")

    if not md_path.exists():
        create_placeholder_md(md_path, new_id)
    else:
        print(f"  ⚠ {md_path.name} มีอยู่แล้ว ข้าม")

    # อัปเดต TEMPLATE_IDS
    new_ids     = [new_id] + current_ids
    new_js_text = update_template_ids(js_text, new_ids)
    MAIN_JS.write_text(new_js_text, encoding="utf-8")
    print(f"\n✅ อัปเดต TEMPLATE_IDS → {', '.join(new_ids)}")
    print(f"✅ เสร็จสิ้น! แทนที่ {png_path.name} ด้วยรูปจริง และแก้ {md_path.name} ตามต้องการ")
    print("=" * 50)


if __name__ == "__main__":
    main()
