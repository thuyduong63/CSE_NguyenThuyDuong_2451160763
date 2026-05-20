PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — 3 Cách nhúng CSS
Tài liệu tham chiếu: tuan_2_css_core/08_introduction_css.md
1. Inline CSS
# Ví dụ
<p style="color: red; font-size: 20px;">
    Xin chào
</p>
- Ưu điểm
+ Viết nhanh, đơn giản
+ Áp dụng ngay cho 1 phần tử cụ thể
+ Không cần tạo file CSS riêng
- Nhược điểm
+Code HTML bị rối
+Khó bảo trì khi website lớn
+Không tái sử dụng được
+Vi phạm nguyên tắc tách giao diện và nội dung
- Khi nào nên dùng
+Test nhanh giao diện
+Chỉnh tạm thời một phần tử
+Email HTML hoặc trường hợp rất nhỏ

2.  Internal CSS
# Ví dụ
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>

<p>Xin chào</p>

</body>
</html>
- Ưu điểm
+ Dễ quản lý hơn inline
+Không cần file CSS riêng
+ Áp dụng cho nhiều phần tử trong cùng trang
- Nhược điểm
+ Không tái sử dụng cho nhiều trang
+ File HTML có thể dài và khó đọc
- Khi nào nên dùng
+Website nhỏ
+Trang đơn lẻ
+Học tập, demo, thử nghiệm

3. External CSS
# Ví dụ
File HTML
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<p>Xin chào</p>

</body>
</html>
File style.css
p {
    color: green;
    font-size: 22px;
}
- Ưu điểm
+ Quản lý tập trung
+ Tái sử dụng cho nhiều trang
+ Code sạch, chuyên nghiệp
+ Dễ bảo trì và mở rộng
+ Tăng hiệu suất nhờ cache trình duyệt
-Nhược điểm
+ Cần thêm file CSS riêng
+ Nếu file CSS lỗi hoặc không tải được thì giao diện mất style
- Khi nào nên dùng
+ Website thực tế
+ Dự án lớn
+ Hệ thống nhiều tranG

### CÂU A2 (8đ) — CSS Selectors — Dự đoán kết quả
1. h1 → Chọn: ShopTLU
2. price → Chọn: cả 2 thẻ p có class="price" (25.990.000đ và 45.990.000đ)
3. #app header → Chọn: thẻ header mà cha của nó có id="app" (toàn bộ nội dung thẻ header và các thẻ con của nó)
4. nav a:first-child → Chọn: thẻ a là con đầu tiên của thẻ nav (Home)
5. product.featured h2 → Chọn: thẻ h2 có cả 2 class là product và featured (MacBook Pro)
6. article > p → Chọn: tất cả thẻ p là con trực tiếp của thẻ article
7. a[href="/"] → Chọn: thẻ a có href="/" (Home)
8. top-bar.dark h1 → Chọn: thẻ h1 có class là top-bar và dark

### CÂU A3 (7đ) — Box Model — Tính toán kích thước
# /* Trường hợp 1: content-box (mặc định) */
.box-1 {
  width: 400px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

# /* Trường hợp 2: border-box */
.box-2 {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px

# /* Trường hợp 3: Margin collapse */
.box-a {
  margin-bottom: 25px;
}
.box-b {
  margin-top: 40px;
}
→ Khoảng cách giữa box-a và box-b = 40px → Giải thích tại sao KHÔNG PHẢI 65px Trong CSS, khi các lề dọc (margins) gặp nhau, chúng không cộng dồn lại mà bị "gộp" (collapse).
Quy tắc là: Giá trị lề lớn hơn sẽ được giữ lại, và giá trị nhỏ hơn sẽ bị triệt tiêu bên trong lề lớn đó.
Ở đây, 40px (margin-top của box-b) lớn hơn 25px (margin-bottom của box-a), vì vậy trình duyệt chọn 40px làm khoảng cách thực tế.

### Câu A4 (5đ) — Specificity (Độ ưu tiên)
1. Tính Specificity Score (a, b, c)
+ Rude A: p -> Score: (0, 0, 1) -> Giải thích: 1 Element
+ Rude B: .price -> Score: (0, 1, 0) -> Giải thích: 1 Class
+ Rude C: #main-price -> Score: (1, 0, 0) -> Giải thích: 1 Id
+ Rude D: p.price -> Score: (0, 1, 1) -> Giải thích: 1 Class + 1 Element
2. Element sẽ có màu đỏ vì: Trình duyệt sẽ so sánh điểm số từ trái sang phải. Rule C (#main-price) có điểm ở cột a (ID) là 1, cao nhất trong tất cả các rule. Dù Rule D có cả class và element nhưng vẫn không thể vượt qua sức mạnh của một ID selector.
3. Nếu thêm Inline Style (màu orange) thì Element sẽ có màu cam vì: Inline style có độ ưu tiên cao hơn tất cả các selector trong file CSS bên ngoài (điểm số của nó có thể coi là 1, 0, 0, 0 nếu tính cả cột thứ 4).
4. Nếu Rule A thêm !important thì Element sẽ có màu đen vì: Khi một thuộc tính được đánh dấu !important, nó sẽ phá vỡ mọi quy tắc về Specificity thông thường và giành quyền ưu tiên cao nhất (cao hơn cả ID và Inline style). Vì vậy, màu đen của Rule A sẽ được hiển thị.

### CÂU B1
- Các selector đã sử dụng

1. Element selector
Ví dụ:
body
header
table
footer
2. Class selector
Ví dụ: 
.active
3. ID selector
Ví dụ:
#about
#skills
#contact
4. Descendant selector
Ví dụ:
nav a
tbody tr
5. Pseudo-class selector
Ví dụ:
nav a:hover
tbody tr:nth-child(even)
tbody tr:hover

### BÀI B2 — BOX MODEL LAB
PHẦN 1 — content-box vs border-box
- Hộp 1 (content-box)
Chiều rộng thực tế≈ 350px (theo DevTools)
Giải thích:
+ width: 300px chỉ tính phần content
+ padding (20px + 20px) và border (5px + 5px) được cộng thêm vào
+ nên hộp bị rộng hơn 300px
+ Công thức:
300 + 20 + 20 + 5 + 5 = 350px
- Hộp 2 (border-box)
Chiều rộng thực tế: 300px (theo DevTools)
Giải thích:
+ padding và border nằm trong width 300px
+ nên tổng kích thước không bị tăng lên

PHẦN 2 — Layout 3 cột
- Không dùng border-box (no-box)
Kết quả:
+ Layout bị phình / dễ tràn khỏi 1000px
Giải thích:
+ padding + border làm tăng kích thước từng cột
+ tổng 3 cột > 1000px nên không còn khớp container
- Có dùng border-box (yes-box)
Kết quả:
+ 3 cột vừa khít 1000px
+ không bị tràn layout
Giải thích:
+ padding + border được tính trong width
+ nên tổng vẫn giữ đúng 1000px

### BÀI B3 — SPECIFICITY BATTLE
 10 CSS rules + specificity

1. p → 0,0,1 → gray  
2. .text → 0,1,0 → blue  
3. .highlight → 0,1,0 → green  
4. p.text → 0,1,1 → orange  
5. p.highlight → 0,1,1 → pink  
6. .text.highlight → 0,2,0 → purple  
7. p.text.highlight → 0,2,1 → brown  
8. #demo → 1,0,0 → red  
9. #demo.text → 1,1,0 → black  
10. #demo.text.highlight → 1,2,0 → gold  
- Kết quả cuối cùng hiển thị màu vàng
+Vì rule cuối có specificity cao nhất: 1,2,0 > tất cả rule còn lại. Nên nó override toàn bộ CSS khác.

- Nếu đổi thứ tự CSS không thay đổi kết quả
- CSS ưu tiên theo:
1. Specificity (quan trọng nhất)
2. Nếu bằng nhau → mới xét thứ tự code
vì rule #10 có specificity cao nhất nên luôn thắng.

### CÂU C1
1. chiều rộng thực tế của sidebar và content (content-box!)
Sidebar: 300 + 202 + 12 = 342 px
Content: 660 + 302 + 12 = 722 px
2. Layout bị vỡ vì:
Tổng Chiều rộng thực tế của sidebar và content lớn hơn chiều rộng của container chứa nó nên theo cơ chế của float content sẽ bị đẩy xuống dưới
3. Đưa ra 2 cách sửa:
- Cách 1: Dùng border-box Thêm box-sizing = border-box cho cả 2 khi đó chiều rộng của 2 phần tử sẽ là chiều rộng của border, content bị thu nhỏ cho vừa với border
- Cách 2: Không dùng border-box Phải tính toán chiều rộng của content sao cho khi cộng thêm padding và border thì bằng với chiều rộng mong muốn
+ Sidebar = 300 - 202 - 12 = 258 px
+ Content = 660 - 302 + 12 = 598 px