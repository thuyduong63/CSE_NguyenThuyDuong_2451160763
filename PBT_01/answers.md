### PHẦN A — KIỂM TRA ĐỌC HIỂU
# Câu A1 — HTTP & Browser
1. Nguồn tham chiếu: 01_introduction_html_universe.md phần Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương

Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter các bước xảy ra từ từ DNS lookup đến render là:

1 Phân giải tên miền (DNS Lookup)

Trình duyệt không hiểu địa chỉ chữ (shopee.vn), nó cần địa chỉ IP số (ví dụ: 104.18.2.159).

Trình duyệt kiểm tra bộ nhớ đệm (cache) của chính nó, sau đó đến cache của hệ điều hành.

Nếu không thấy, nó sẽ gửi yêu cầu đến DNS Resolver (thường là nhà mạng ISP) để tìm kiếm địa chỉ IP tương ứng với tên miền shopee.vn.

2 Thiết lập kết nối TCP và bắt tay TLS (TCP Handshake & TLS Negotiation)

Vì Shopee sử dụng giao thức https, trình duyệt phải thiết lập một kết nối an toàn.

TCP Handshake: Trình duyệt và máy chủ Shopee thực hiện quy trình "bắt tay 3 bước" (SYN, SYN-ACK, ACK) để thiết lập kết nối truyền tải dữ liệu.

TLS/SSL Handshake: Sau khi có kết nối TCP, hai bên sẽ thỏa thuận các phương thức mã hóa và kiểm tra chứng chỉ bảo mật để đảm bảo dữ liệu truyền đi không bị đánh cắp.

3 Gửi yêu cầu HTTP (HTTP Request)

Sau khi kênh truyền thông an toàn được thiết lập, trình duyệt sẽ gửi một HTTP GET Request đến máy chủ của Shopee. Yêu cầu này chứa các thông tin như loại trình duyệt (User-Agent), các cookie đã lưu trước đó và các loại tệp tin mà trình duyệt có thể xử lý.

4 Máy chủ phản hồi (Server Response)

Máy chủ của Shopee nhận yêu cầu, xử lý (có thể truy vấn cơ sở dữ liệu, chạy mã backend) và gửi trả lại một HTTP Response. Phản hồi này bao gồm mã trạng thái (ví dụ: 200 OK) và nội dung chính của trang web, thường là tệp mã HTML.

5 Trình duyệt hiển thị trang web (Rendering)

Đây là giai đoạn trình duyệt biến các dòng mã thành giao diện hình ảnh:

Xây dựng DOM & CSSOM: Trình duyệt đọc mã HTML để tạo cấu trúc cây (DOM Tree) và đọc mã CSS để tạo cây phong cách (CSSOM).

Render Tree: Kết hợp DOM và CSSOM để biết cái gì cần hiển thị và hiển thị ở đâu.

Layout & Painting: Tính toán vị trí chính xác của từng phần tử trên màn hình và cuối cùng là "vẽ" các điểm ảnh (pixel) để bạn thấy giao diện Shopee hoàn chỉnh.

2. Nguồn tham chiếu: 01_introduction_html_universe.md phần 1.3. Browser Rendering

Tab Network trong Chrome DevTools ghi lại mọi yêu cầu (request) và phản hồi (response) dữ liệu giữa trình duyệt và máy chủ.

# Câu A2 — Semantic HTML
Nguồn tham chiếu: 04_visible_part_html.md phần Semantic HTML5 — "Thẻ có ý nghĩa"

Trang web bị Google đánh giá SEO thấp vì toàn bộ các thẻ đều dùng
-> Google không hiểu nên đánh giá SEO thấp
4 lỗi semantic là:

<div class="header"> nên dùng thẻ <header> thay cho thẻ <div>

<div class="menu"> nên dùng thẻ <nav> thay cho thẻ <div>

<div class="main"> nên dùng thẻ <main> thay cho thẻ <div>

<div class="footer"> nên dùng thẻ <footer> thay cho thẻ <div>

# Câu A3 — Block vs Inline
Kết quả hiển thị của đoạn HTML là:

Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

#Câu A4 — Table
Nguồn tham chiếu: 05_tables_hyperlinks.md phần Table — Bảng dữ liệu

1. Sự khác nhau giữa <thead>, <tbody>, <tfoot>

<thead>: Tiêu đề cột

<tbody>: Dữ liệu chính

<tfoot>: Tổng kết

2. KHÔNG NÊN dùng table để tạo layout trang web vì

Không thân thiện với thiết bị di động (Responsive kém) Bản chất của bảng là cấu trúc cứng nhắc. Một bảng có 5 cột sẽ rất khó để hiển thị đẹp trên một màn hình điện thoại hẹp.

Vấn đề: Với CSS (Flexbox/Grid), bạn có thể dễ dàng chuyển các cột thành hàng khi xem trên điện thoại. Với bạn gần như bị "chết cứng" với cấu trúc hàng/cột đó, khiến trang web dễ bị vỡ hoặc người dùng phải kéo ngang rất khó chịu.
Ảnh hưởng tiêu cực đến SEO và khả năng tiếp cận (Accessibility) Google và các công cụ tìm kiếm sử dụng "bot" để đọc hiểu nội dung trang web của bạn.

Vấn đề: Khi bạn dùng bảng, bot sẽ hiểu rằng đây là nơi chứa dữ liệu bảng biểu (như bảng lương, bảng điểm). Nếu bạn dùng nó để chia cột nội dung, bot sẽ bị bối rối về thứ tự ưu tiên của thông tin.

Accessibility: Những người khiếm thị sử dụng trình đọc màn hình (Screen Readers) sẽ gặp thảm họa. Trình đọc sẽ đọc lần lượt từng ô (cell) theo thứ tự máy móc, khiến nội dung bài viết bị cắt vụn và vô nghĩa đối với họ.

Hiệu suất tải trang chậm (Rendering Performance) Trình duyệt xử lý bảng khác với cách nó xử lý các thẻ <div>.

Vấn đề: Thông thường, trình duyệt cần nhận được toàn bộ dữ liệu của bảng </table> thì nó mới bắt đầu tính toán kích thước và hiển thị. Điều này tạo ra cảm giác trang web bị "khựng" lại một lúc.

Ngược lại, các layout bằng CSS được trình duyệt render dần dần (progressive rendering), giúp người dùng thấy nội dung ngay lập tức khi nó vừa được tải xuống.

### PHẦN B
# CÂU B3
Lỗi 1: Dòng 1 - Thiếu loại tài liệu - <!DOCTYPE html> 
Lỗi 2: Dòng 2 - Thiếu ngôn ngữ - <html lang="vi"> 
Lỗi 3: Dòng 4 - Thiếu thẻ đóng - <title>Trang web</title> 
Lỗi 4: Dòng 5 - Sai giá trị của thuộc tính charset - <meta charset="utf-8"> 
Lỗi 5: Dòng 8 - Sai thẻ đóng - <h1>Welcome to ShopTLU</h1> 
Lỗi 6: Dòng 12 - Sai thẻ đóng - <a href="home">Trang chủ</a> 
Lỗi 7: Dòng 22 - Sai vị trí thẻ <b> và <p> -
Giá: 25.990.000đ
Lỗi 8: Dòng 28 - Phải dùng <thead></thead> cho tiêu đề bảng - <thead></thead>
Lỗi 9: Dòng 29 và 30 - Dùng <th></th> cho tiêu đề - <th></th> Lỗi 10: Dòng 44 - 1 trang web chỉ dùng 1 thẻ <main> - <aside></aside> Lỗi 11: Dòng 49 - Thiếu thẻ đóng - <p>Copyright 2026</p>