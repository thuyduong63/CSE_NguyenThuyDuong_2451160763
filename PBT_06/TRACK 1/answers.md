### CÂU A1
| Kích thước           | < 768px (Mobile)     | 768px - 991px       | ≥ 992px (Desktop)    |
+----------------------+----------------------+----------------------+----------------------+
| Số cột              | 1 cột                | 2 cột                | 4 cột                |
+----------------------+----------------------+----------------------+----------------------+
| Box layout          | Box 1               | Box 1   Box 2        | Box 1  Box 2  Box 3  |
|                     | Box 2               | Box 3   Box 4        | Box 4                |
|                     | Box 3               |                      |                      |
|                     | Box 4               |                      |                      |
+----------------------+----------------------+----------------------+----------------------+
# Câu hỏi thêm 
- col-md-6 nghĩa là:
Khi màn hình ≥ 768px (md breakpoint)
Mỗi box chiếm 6/12 cột = 50% width
→ hiển thị 2 cột
- không cần viết col-sm-12 vì:
Bootstrap dùng mobile-first
Nếu không khai báo col-sm-* thì mặc định: col-12 (mobile)

### CÂU A2
1. Giải thích class .d-none .d-md-block
- Sự kết hợp của hai class này là một kỹ thuật responsive cực kỳ phổ biến để ẩn/hiện phần tử theo màn hình. Do viết theo tư duy Mobile-First (ưu tiên màn hình nhỏ), thuộc tính sẽ chạy từ bé đến lớn:
+ .d-none (Display None): Áp dụng từ màn hình nhỏ nhất (Mobile hắt lên), ra lệnh ẩn hoàn toàn phần tử này khỏi giao diện.
+ .d-md-block (Display Medium Block): Khi màn hình đạt mốc md (Medium 
≥ 768px), thuộc tính display: block được kích hoạt để hiện lại phần tử dưới dạng khối.

- Liệt kê 5 Spacing Utilities (Tiện ích khoảng cách)
+ Các class này giúp chỉnh nhanh khoảng cách margin (khoảng cách bên ngoài) hoặc padding (khoảng cách đệm bên trong) mà không cần viết CSS thủ công.

+ mt-3 (Margin Top 3): Thêm khoảng cách phía trên bên ngoài của phần tử. Mức số 3 thường tương đương với 1rem hoặc 16px (tùy cấu hình root).

+ mb-auto (Margin Bottom Auto): Tự động tính toán và chiếm trọn không gian trống còn thừa ở phía dưới bên ngoài. Thường dùng trong Flexbox để ghim nút bấm hoặc footer dính chặt xuống đáy khung chứa.

+ px-4 (Padding X 4): Thêm khoảng cách đệm bên trong đồng thời cho cả Trái (Left) và Phải (Right) theo trục hoành X. Mức số 4 thường tương đương 1.5rem hoặc 24px.

+ py-0 (Padding Y 0): Triệt tiêu hoàn toàn (bằng 0) khoảng cách đệm bên trong ở cả Trên (Top) và Dưới (Bottom) theo trục tung Y.

+ ms-2 (Margin Start 2): Thêm khoảng cách bên trái bên ngoài (Trong các phiên bản mới, start thay thế cho left để hỗ trợ các ngôn ngữ đọc từ phải sang trái).

3. Sự khác nhau giữa .container, .container-fluid, .containr-md
+-------------------+---------------------------+------------------------------+------------------------------+
| Loại container    | .container                | .container-fluid             | .container-md                |
+-------------------+---------------------------+------------------------------+------------------------------+
| Width             | Fixed theo breakpoint     | 100% toàn màn hình           | 100% (<768px), fixed (≥768px)|
+-------------------+---------------------------+------------------------------+------------------------------+
| Responsive        | Có                        | Không (luôn full width)      | Có theo mốc md (768px)       |
+-------------------+---------------------------+------------------------------+------------------------------+
| Max-width         | Có (tùy breakpoint)       | Không                        | Có từ md trở lên             |
+-------------------+---------------------------+------------------------------+------------------------------+
| Hành vi chính     | Canh giữa + giới hạn      | Tràn toàn màn hình           | Linh hoạt theo md breakpoint  |
+-------------------+---------------------------+------------------------------+------------------------------+