### CÂU A1

| Position | Vẫn chiếm chỗ? | Tham chiếu vị trí           | Cuộn theo trang?   | Use case         |
| -------- | -------------- | --------------------------- | ------------------ | ---------------- |
| static   | Có             | Không có                    | Có                 | mặc định         |
| relative | Có             | chính nó                    | Có                 | chỉnh vị trí nhẹ |
| absolute | Không          | nearest positioned ancestor | Không              | badge, popup     |
| fixed    | Không          | viewport                    | Không              | header cố định   |
| sticky   | Có             | scroll + parent             | Có (đến điểm dính) | sticky menu      |

- Absolute tham chiếu body Khi không có parent nào có position khác static

### CÂU A2
/TH1 / .container { display: flex; } .item { flex: 1; } / 4 items → Bố cục = ??? _/
- Dự đoán: 1 hàng duy nhất gồm 4 cột.
[1][1][1][1]
/TH2 / .container { display: flex; flex-wrap: wrap; } .item { width: 45%; margin: 2.5%; } / 6 items → Bố cục = ??? (mấy hàng, mấy cột?) _/
- Dự đoán: 3 hàng, mỗi hàng 2 cột. 
[1][2]
[3][4]
[5][6]

/TH3 / .container { display: flex; justify-content: space-between; align-items: center; } / 3 items → Bố cục = ??? _/
- Dự đoán: 1 hàng gồm 3 items dàn đều sang 2 bên biên và ở giữa.
[1     2     3]
(dàn đều ngang, căn giữa dọc)

/TH4 / .container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; } / 3 items → Bố cục = ??? _/
- Dự đoán: Bố cục dạng Holy Grail (3 cột) trên 1 hàng. Cột trái và cột phải cố định kích thước 200px. Cột giữa dùng 1fr nên sẽ tự co giãn chiếm trọn toàn bộ khoảng trống còn lại ở giữa. Giữa các cột có khoảng cách (gap) 20px. 
[200px][auto][200px]

/TH5 / .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; } / 7 items → Bố cục = ??? (mấy hàng? item cuối ở đâu?) _/
- Dự đoán: 3 hàng, 3 cột.
Hàng 1: Gồm Item 1, 2, 3 (mỗi item chiếm 1/3 chiều rộng nhờ 1fr).
Hàng 2: Gồm Item 4, 5, 6.
Hàng 3: Chỉ có duy nhất Item 7 và nó nằm ở cột đầu tiên (bên trái ngoài cùng). Các ô còn lại của hàng 3 để trống. 
[1][2][3]
[4][5][6]
[7]