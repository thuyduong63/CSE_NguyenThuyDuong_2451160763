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

### CÂU C1
1. Navigation bar (logo + menu + buttons)
- Dùng: Flexbox
- Giải thích:
+ Layout 1 chiều (ngang)
+ Căn trái – giữa – phải dễ dàng bằng justify-content
+ Align items theo trục dọc đơn giản
2. Lưới ảnh Instagram (3 cột, số ảnh không biết trước)
- Dùng: Grid
- Giải thích:
+ Layout 2 chiều (hàng + cột)
+ Số item thay đổi nhưng vẫn giữ 3 cột cố định
+ Grid tự wrap theo hàng
3. Layout blog (main + sidebar)
- Dùng: Grid (hoặc kết hợp Flexbox trong content)
- Giải thích:
+ Layout 2 cột rõ ràng (sidebar + main)
+ Grid giúp chia layout tổng thể dễ hơn
+ Flexbox có thể dùng bên trong từng section
4. Footer 4 cột thông tin
- Dùng: Grid
- Giải thích:
+ Chia đều nhiều cột (4 cột cố định)
+ Grid giúp kiểm soát layout ngang chuẩn và đều
+ Dễ responsive hơn Flexbox trong trường hợp này
5. Card sản phẩm (ảnh trên, text giữa, nút dưới dính đáy)
- Dùng: Flexbox
- Giải thích:
+ Layout 1 chiều (dọc)
+ flex-direction: column
+ margin-top: auto để đẩy nút xuống đáy card