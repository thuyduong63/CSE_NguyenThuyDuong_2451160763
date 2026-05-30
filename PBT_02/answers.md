### PHẦN A — KIỂM TRA ĐỌC HIỂU
# Câu A1
Nguồn tham chiếu: 07_forms_interactive.md phần Các Input Types HTML5

type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký
type="text" → Ô nhập text, có thể kiểm tra minlength, maxlength, pattern → Dùng cho form đăng ký, ô tìm kiếm
type="password" → ẩn ký tự,tự kiểm tra minlength, pattern → Dùng cho ô nhập mật khẩu
type="number" → nút tăng/giảm, có thể set min, max, step → Dùng cho ô nhập dữ liệu số
type="tel" → Bàn phím số (mobile), tự kiểm tra pattern → Dùng cho ô nhập số điện thoại
type="date" → Date picker, tự kiểm tra min, max → Dùng cho ô chọn ngày, tháng, năm
type="color" → Color picker → Dùng cho ô chọn màu sắc
type="range" → Slider, có thể set min, max, step → Dùng cho ô nhập số
type="file" → Upload file, tự kiểm tra accept, multiple → Dùng cho ô chọn file
type="url" → Validate URL, tự kiểm tra http:// → Dùng cho ô nhập url

# Câu A2
<input type="text" required value="">
Dự đoán kết quả: Không hợp lệ. Trình duyệt sẽ hiển thị thông báo lỗi
Giải thích: Thuộc tính required bắt buộc người dùng phải nhập dữ liệu. Vì giá trị đang để trống (""), điều kiện validation không được thỏa mãn.
<input type="email" value="abc">
Dự đoán kết quả: Không hợp lệ. Trình duyệt sẽ chặn gửi form và yêu cầu nhập đúng định dạng email
Giải thích: Trình duyệt kiểm tra cú pháp của type="email". Chuỗi "abc" thiếu ký tự @ và phần tên miền phía sau nên không phải là một địa chỉ email hợp lệ.
<input type="number" min="1" max="10" value="15">
Dự đoán kết quả: Không hợp lệ. Trình duyệt sẽ hiển thị thông báo lỗi
Giải thích: Thuộc tính max="10" giới hạn giá trị tối đa mà người dùng có thể nhập. Giá trị hiện tại là 15, vượt quá giới hạn trên.
<input type="text" pattern="[0-9]{10}" value="abc123">
Dự đoán kết quả: Không hợp lệ. Trình duyệt sẽ hiển thị thông báo lỗi
Giải thích: Thuộc tính pattern yêu cầu chuỗi phải khớp với biểu thức chính quy [0-9]{10} (chính xác 10 chữ số từ 0-9). Chuỗi "abc123" chứa cả chữ cái và không đủ độ dài.
<input type="password" minlength="8" value="123">
Dự đoán kết quả: Không hợp lệ. Trình duyệt sẽ hiển thị thông báo lỗi
Giải thích: Thuộc tính minlength="8" yêu cầu độ dài tối thiểu của chuỗi là 8 ký tự. Chuỗi "123" chỉ có 3 ký tự, không đạt yêu cầu.

# Câu A3
quan trọng cho người dùng screen reader vì nếu Form không có thì người dùng screen reader không biết ô nhập gì
Dùng Fieldset + Legend cho nhóm liên quan. VD:
<fieldset>
  <legend>Thông tin giao hàng</legend>
  <label for="addr">Địa chỉ:</label>
  <input type="text" id="addr" name="addr" />
</fieldset>
Nên dùng aria-lable cho các thành phần không có nhãn văn bản trực quan, phổ biến nhất là nút bấm chỉ chứa icon (ví dụ: nút đóng, nút tìm kiếm, menu).

KHÔNG nên dùng aria-label khi đã có vì:

Mất tính tương tác: Click vào sẽ trỏ đến ô input (tăng vùng bấm), trong khi aria-label chỉ là thuộc tính ẩn cho trình đọc màn hình.
Giảm trải nghiệm (UX): Người dùng bình thường sẽ không thấy nhãn nếu chỉ dùng aria-label thay vì thẻ .
Khó dịch thuật: Nội dung trong thuộc tính khó hỗ trợ đa ngôn ngữ hơn nội dung HTML thông thường.

# Câu A4
Thuộc tính loading="lazy" trên thẻ <img>
Chức năng: Trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn trang đến gần vị trí của nó.
Cải thiện:
Tốc độ tải trang ban đầu (Initial Page Load): Giảm dung lượng và số lượng tài nguyên cần tải khi mới mở trang.
Băng thông: Tiết kiệm dữ liệu mạng cho người dùng nếu họ không cuộn xuống hết trang.
Khi nào KHÔNG nên dùng:
Ảnh "Above the fold": Các ảnh nằm ở phần đầu trang (nhìn thấy ngay khi tải trang, ví dụ: ảnh banner, logo) vì nó làm chậm quá trình hiển thị nội dung chính.
Dùng nhiều <source> trong thẻ <video>
Giúp trình duyệt chọn được định dạng video phù hợp nhất với thiết bị và trình duyệt của người dùng, đảm bảo tính tương thích (cross-browser compatibility).
Format video web phổ biến:
MP4 (video/mp4 - dùng codec H.264, hỗ trợ rộng rãi nhất).
WebM (video/webm - dùng codec VP8/VP9/AV1, tối ưu tốt cho web).
Ogg (video/ogg - dùng codec Theora, ít phổ biến hơn nhưng vẫn được hỗ trợ).
Thuộc tính alt trên thẻ <img>
Chức năng: Cung cấp văn bản thay thế cho hình ảnh. Hiển thị khi ảnh bị lỗi (broken link) và hỗ trợ các công cụ đọc màn hình (screen reader) cho người khiếm thị.

Viết alt cho 3 trường hợp:
- Ảnh sản phẩm iPhone 16:
alt="Điện thoại iPhone 16 màu đen chính hãng"
- Ảnh trang trí (decorative):
alt="" (Bỏ trống thuộc tính alt để trình đọc màn hình bỏ qua, tránh gây nhiễu thông tin).
- Ảnh biểu đồ doanh thu Q1/2026:
alt="Biểu đồ cột thể hiện doanh thu Q1 năm 2026, đạt mức tăng trưởng 15% so với cùng kỳ năm ngoái"

# Câu A5
Khi nào nên dùng Cách 1 (<img> đơn lẻ)
Mục đích: Dùng khi hình ảnh mang tính chất độc lập, không cần chú thích (caption) đi kèm hoặc nội dung hình ảnh không phụ thuộc vào dòng chảy chính của văn bản.
Ví dụ thực tế:
Logo thương hiệu trên thanh điều hướng (Header) của website.
Banner quảng cáo hoặc ảnh đại diện (avatar) của người dùng trong phần thông tin cá nhân.
Khi nào nên dùng Cách 2 (<figure> kèm <figcaption>)
Mục đích: Dùng khi hình ảnh cần chú thích, giải thích hoặc là một phần nội dung độc lập (như biểu đồ, hình minh họa, sơ đồ) có thể di chuyển ra một vị trí khác mà không làm mất ngữ cảnh của tài liệu.
Ví dụ thực tế:
Ảnh sản phẩm trên trang thương mại điện tử kèm theo tên sản phẩm và giá bán ngay bên dưới.
Biểu đồ thống kê hoặc sơ đồ khối trong một bài báo cáo, kèm theo đoạn chú thích giải thích số liệu.