### Câu A1 

1. Thẻ chuẩn và giải thích thuộc tính
- Giải thích các thuộc tính bên trong cặp content="":
- width=device-width: Đặt độ rộng của vùng hiển thị (viewport) trên trình duyệt bằng đúng với độ rộng thực tế của màn hình thiết bị (tính theo pixel logic/CSS pixel, không phải pixel phần cứng).
- initial-scale=1.0: Đặt mức độ phóng to (zoom) ban đầu là 100% khi trang web vừa tải xong, ngăn trình duyệt tự động phóng to hay thu nhỏ nội dung.

2. Hiện tượng xảy ra trên iPhone nếu THIẾU thẻ này
- Nếu không có thẻ viewport, các trình duyệt di động (như Safari trên iPhone) sẽ tự động giả định rằng trang web này được thiết kế dành riêng cho màn hình máy tính lớn (Desktop).
- Cách hiển thị: iPhone sẽ ép toàn bộ trang web hiển thị trong một viewport ảo có độ rộng mặc định khoảng 980px, sau đó tự động thu nhỏ (zoom out) toàn cục để nhét vừa khít giao diện 980px đó vào màn hình điện thoại tí hon.
- Trải nghiệm người dùng: Trang web nhìn từ xa trông giống như một bức ảnh thu nhỏ. Chữ nghĩa, hình ảnh và các nút bấm sẽ trở nên bé tí tin hin, buộc người dùng phải dùng hai ngón tay phóng to (pinch-to-zoom) liên tục và cuộn ngang cuộn dọc mới có thể đọc được nội dung.

3. Phân biệt Mobile-First và Desktop-First
- Sự khác biệt cốt lõi nằm ở tư duy thiết kế và thứ tự ưu tiên viết mã CSS:
- Mobile-First (Ưu tiên di động): Viết CSS cơ bản cho màn hình nhỏ trước (không nằm trong Media Query). Sau đó, dùng các điều kiện kích thước tăng dần để bổ sung/ghi đè thuộc tính cho màn hình lớn. Dùng từ khóa min-width.
- Desktop-First (Ưu tiên máy tính): Viết CSS cơ bản cho màn hình lớn trước. Sau đó, dùng các điều kiện kích thước giảm dần để bóp nhỏ hoặc ẩn bớt các phần tử khi màn hình co lại. Dùng từ khóa max-width.

Ví dụ minh họa CSS (Breakpoint 768px): 
# Cách 1: Mobile-First (min-width)

/* Mặc định: Áp dụng cho Mobile (Dưới 768px) */
.content-box {
  width: 100%;
  font-size: 14px;
}

/* Khi màn hình RỘNG TỪ 768px trở lên (Tablet/Desktop) */
@media (min-width: 768px) {
  .content-box {
    width: 50%;
    font-size: 16px;
  }
}
# Cách 2: Desktop-First (max-width)

CSS
/* Mặc định: Áp dụng cho Desktop (Trên 768px) */
.content-box {
  width: 50%;
  font-size: 16px;
}

/* Khi màn hình CO LẠI DƯỚI 768px (Mobile) */
@media (max-width: 767.98px) {
  .content-box {
    width: 100%;
    font-size: 14px;
  }
}
4. Mobile-First được khuyên dùng rộng rãi vì:
- Chiến lược Mobile-First trở thành quy chuẩn ngành nhờ 3 lý do thực tế sau:

- Tối ưu hiệu năng (Performance): Thiết bị di động thường có cấu hình phần cứng yếu hơn và sử dụng mạng di động (3G/4G/5G) kém ổn định hơn máy tính. Viết CSS Mobile-First giúp trình duyệt điện thoại tải trực tiếp các dòng mã gọn nhẹ ngay từ đầu mà không phải tốn tài nguyên xử lý hay ghi đè các bộ khung nặng nề của bản Desktop.

- Tư duy tinh gọn nội dung (Content Strategy): Thiết kế cho màn hình nhỏ ép nhà phát triển và designer phải tập trung vào những tính năng cốt lõi và nội dung quan trọng nhất của doanh nghiệp. Bạn không thể nhồi nhét những thứ "rác giao diện" vào một màn hình rộng 375px. Khi mở rộng lên bản Desktop, giao diện sẽ phát triển một cách tự nhiên và mạch lạc.

- Tốt cho SEO (Google PageRank): Từ lâu, Google đã áp dụng thuật toán Mobile-First Indexing — nghĩa là Google sẽ ưu tiên sử dụng phiên bản di động của trang web để lập chỉ mục và xếp hạng trên công cụ tìm kiếm. Một trang web chuẩn Mobile-First sẽ ghi điểm tuyệt đối trong mắt Google.