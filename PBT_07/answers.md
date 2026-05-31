### Phần A

# Câu A1 (5đ) — var / let / const

**Đoạn 1**

- Dự đoán Output: undefined
- Giải thích: Do cơ chế Hoisting (nâng biến) của từ khóa var. Khi thực thi, phần khai báo var x; sẽ được đưa lên đầu phạm vi, còn phần gán giá trị x = 5; vẫn giữ nguyên vị trí cũ

**Đoạn 2**

- Dự đoán Output: ReferenceError: Cannot access 'y' before initialization (Lỗi tham chiếu).
- Giải thích: Biến khai báo bằng let (và cả const) cũng bị hoisting, nhưng chúng bị rơi vào vùng Temporal Dead Zone (TDZ) (Vùng chết tạm thời) từ đầu block cho đến khi dòng khai báo được chạy tới. Truy cập biến trong vùng TDZ sẽ gây ra lỗi lập tức thay vì trả về undefined như var.

**Đoạn 3**

- Dự đoán Output: TypeError: Assignment to constant variable. (Lỗi kiểu dữ liệu).
- Giải thích: Biến khai báo với từ khóa const là một hằng số. Khi đã gán giá trị ban đầu (giai đoạn khởi tạo), bạn không thể tái gán (re-assign) một giá trị hoàn toàn mới cho biến đó. Lỗi sẽ bị bắn ra ngay tại dòng z = 20;.

**Đoạn 4**

- Dự đoán Output: [1, 2, 3, 4]
- Giải thích: const chỉ ngăn chặn việc tái gán địa chỉ vùng nhớ (không thể viết arr = [5, 6]), chứ nó không cấm việc thay đổi nội dung bên trong của một Object hoặc Array (đây gọi là tính chất Mutable). Hàm push(4) chỉ sửa đổi mảng hiện tại chứ không gán lại mảng mới.

**Đoạn 5**

- Dự đoán Output:
  Trong block: 2
  Ngoài block: 1
- Giải thích: Từ khóa let có tính chất Block Scope (phạm vi trong cặp ngoặc nhọn {}). Biến let a = 2; nằm bên trong block là một biến hoàn toàn độc lập với biến let a = 1; ở bên ngoài. Khi ra khỏi block, biến a = 2 bị hủy, lệnh console.log phía dưới sẽ đọc biến a ở scope ngoài cùng.

