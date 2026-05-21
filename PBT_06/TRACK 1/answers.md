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

### Câu C1
1. Quy trình đổi màu $primary sang #E63946 Để thay đổi tận gốc màu sắc chủ đạo của Bootstrap, bạn không sửa trực tiếp vào file mã nguồn của thư viện (vì khi cập nhật phiên bản mới sẽ bị ghi đè mất), mà thực hiện qua quy trình biên dịch Sass.

- Các công cụ cần thiết:
+ Node.js & npm để cài đặt trình biên dịch.
+ Bộ biên dịch Sass (Sass Compiler): Thường dùng thư viện sass (Dart Sass).
+ Mã nguồn Bootstrap Sass: Được cài đặt qua lệnh npm i bootstrap (thư mục nằm trong node_modules/bootstrap/scss/).

- Các file cần tạo và chỉnh sửa:

+ Cần tạo một file stylesheet riêng cho dự án, ví dụ: scss/custom.scss. Cấu trúc code viết trong file này phải tuân theo thứ tự sau:
// 1. Khai báo mã màu mới
$custom-primary: #E63946;

// 2. Ghi đè vào biến hệ thống $primary của Bootstrap
$primary: $custom-primary;

// 3. Tiến hành import file cấu hình tổng của Bootstrap vào sau
// Đường dẫn trỏ vào thư mục node_modules nơi cài đặt Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
- Bước biên dịch:

+ Chạy lệnh Terminal để biên dịch file SCSS tùy biến thành file CSS thuần cho trình duyệt đọc:
    sass scss/custom.scss dist/css/bootstrap.custom.css
+ Sau đó nhúng file bootstrap.custom.css này vào HTML là toàn bộ hệ thống đã chuyển sang màu đỏ mới.
- KHÔNG nên override trực tiếp bằng CSS thuần
Vì:
+ Hiệu ứng dây chuyền (Hệ sinh thái biến số) Trong Bootstrap, biến $primary không chỉ nuôi duy nhất một mình cái nút .btn-primary. Màu sắc này được liên kết tự động qua các hàm Sass để tạo ra hàng loạt thành phần khác:

+ Các trạng thái tương tác: Màu khi :hover, :active, :focus (nút bấm sẽ tự đậm lên hoặc nhạt đi).

+ Các biến thể component: Nút dạng viền .btn-outline-primary, màu nền thông báo .bg-primary, màu chữ định dạng .text-primary, viền khung .border-primary.

+ Các thành phần giao diện khác: Thanh tiến trình (progress-bar), thẻ màu (card), các icon điều hướng (nav-link).

# Câu C2 — So sánh CSS thuần vs Bootstrap (10đ)
 1. Đối chiếu (Navbar + Product Card)

| Tiêu chí | CSS thuần | Bootstrap |
|----------|----------|------------|
| Navbar responsive | Tự viết flex + media queries | navbar, navbar-expand-lg |
| Product card | Tự viết layout + spacing + hover | card, card-body, grid system |
| Responsive | Tự viết breakpoints | Có sẵn hệ grid + breakpoints |
| Code | Dài, chi tiết | Ngắn, tái sử dụng class |

2. Số dòng CSS cần viết

| Nội dung | CSS thuần | Bootstrap |
|----------|----------|------------|
| Navbar | ~40–80 dòng | ~5–10 class |
| Product card | ~30–60 dòng | ~3–6 class |
| Tổng | ~70–140 dòng | ~10–20 class |

 3. Thời gian phát triển

| Nội dung | CSS thuần | Bootstrap |
|----------|----------|------------|
| Setup UI | Chậm | Nhanh |
| Responsive | Phải tự làm | Có sẵn |
| Tốc độ dev | Thấp | Cao |

 4. Khả năng tùy biến

| CSS thuần | Bootstrap |
|----------|------------|
| Tùy biến 100% | Bị giới hạn theo framework |
| Kiểm soát chi tiết từng pixel | Dựa vào class có sẵn |
| Linh hoạt cao | Nhanh nhưng ít linh hoạt nếu không override |

 5. NÊN dùng Bootstrap khi:

- Cần làm nhanh UI (prototype, deadline gấp)
- Làm dashboard, admin panel
- Dự án cần responsive nhanh
- Team lớn cần chuẩn UI thống nhất
6. KHÔNG NÊN dùng Bootstrap khi:

- Cần UI độc quyền, thiết kế đặc biệt
- Muốn tối ưu performance tối đa (giảm CSS thừa)
- Dự án nhỏ nhưng cần tối giản code
- Cần design system riêng không phụ thuộc framework.
