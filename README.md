## Angular router best prctices

Sample : Angular routes ใช้ข้อมูล Blognone ในการแสดงผลข้อมูลแต่เนื่องจากติด CORS จึงใช้วิธีการ mockup data แทน
พร้อมการทำ search with routing

### Note: เนื่องจากเป็นข้อมูล mock การโชว์ข้อมูลจะใช้ได้เฉพาะบางส่วนเท่านั้น

ในการใช้ฟังก์ชันค้นหา ให้เข้าไปที่เมนู search แล้วพิมพ์ c# หรือไปที่เมนู search แล้วเลือกข้อมูลจาก Paging ได้ไม่เกิน 10 หน้า
โดยหลักๆ จะเน้นให้ดูตัวอย่างการ เปลี่ยน route เมื่อเลือก filter เป็นหลัก

### Development & Run

- npm install

- npm run start
