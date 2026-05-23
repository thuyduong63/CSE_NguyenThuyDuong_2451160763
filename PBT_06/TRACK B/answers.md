### PHẦN A
### CÂU A1
flex → display: flex
items-center → align-items: center
justify-between → justify-content: space-between
p-4 → padding: 1rem (16px)
bg-white → nền màu trắng
shadow-md → đổ bóng mức vừa
rounded-lg → bo góc lớn
hover:shadow-xl → hover vào sẽ đổ bóng lớn hơn
transition-shadow → hiệu ứng chuyển đổi cho shadow
duration-300 → thời gian hiệu ứng 300ms
w-16 → width: 4rem (64px)
h-16 → height: 4rem (64px)
rounded-full → bo tròn thành hình tròn
object-cover → ảnh tự căn để vừa khung
ml-4 → margin-left: 1rem (16px)
flex-1 → chiếm hết phần không gian còn lại
text-lg → font-size lớn
font-semibold → chữ hơi đậm
text-gray-800 → màu xám đậm
truncate → cắt chữ dài bằng dấu ...
text-sm → font-size nhỏ
text-gray-500 → màu xám nhạt hơn
px-4 → padding trái phải 1rem
py-2 → padding trên dưới 0.5rem
bg-blue-500 → nền màu xanh
text-white → chữ màu trắng
rounded-md → bo góc vừa
hover:bg-blue-600 → hover đổi sang xanh đậm hơn
focus:ring-2 → hiện viền khi focus dày 2px
focus:ring-blue-300 → viền màu xanh nhạt

### CÂU A2
1. Responsive prefix
md: → áp dụng từ màn hình medium trở lên (≥ 768px)
lg: → áp dụng từ màn hình large trở lên (≥ 1024px)
xl: → áp dụng từ màn hình extra large trở lên (≥ 1280px)
- Ví dụ:
md:grid-cols-2 → từ màn hình tablet trở lên thì grid có 2 cột
lg:grid-cols-4 → từ màn hình lớn trở lên thì grid có 4 cột
2. State modifiers
hover: → áp dụng khi rê chuột vào
- VD: hover:bg-blue-500
focus: → áp dụng khi input/button được focus
- VD: focus:ring-2
active: → áp dụng khi đang click giữ chuột
- VD: active:scale-95
group-hover: → phần tử con thay đổi khi hover vào phần tử cha có class group
- VD:

<div class="group">
    <p class="group-hover:text-red-500">Text</p>
</div>

3. Class Tailwind yêu cầu
Ẩn trên mobile, hiện flex từ tablet trở lên:
hidden md:flex
hidden → ẩn trên mobile
md:flex → từ màn hình md trở lên hiển thị flex