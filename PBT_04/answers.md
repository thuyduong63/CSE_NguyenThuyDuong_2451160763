### CÂU A1

| Position | Vẫn chiếm chỗ? | Tham chiếu vị trí           | Cuộn theo trang?   | Use case         |
| -------- | -------------- | --------------------------- | ------------------ | ---------------- |
| static   | Có             | Không có                    | Có                 | mặc định         |
| relative | Có             | chính nó                    | Có                 | chỉnh vị trí nhẹ |
| absolute | Không          | nearest positioned ancestor | Không              | badge, popup     |
| fixed    | Không          | viewport                    | Không              | header cố định   |
| sticky   | Có             | scroll + parent             | Có (đến điểm dính) | sticky menu      |

- Absolute tham chiếu body Khi không có parent nào có position khác static