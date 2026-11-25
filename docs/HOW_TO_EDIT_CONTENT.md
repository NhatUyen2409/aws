# Biên tập nội dung báo cáo FCAJ

Tài liệu này áp dụng cho repository [`NhatUyen2409/aws`](https://github.com/NhatUyen2409/aws), website tĩnh sử dụng `index.html`, `app.js` và `styles.css`.

## 1. Vị trí cần chỉnh sửa

| Nhu cầu | File |
| --- | --- |
| Sửa nội dung Worklog, Proposal, Blogs, Events, Workshop, Self-Assessment, Feedback | `app.js` |
| Sửa bố cục, màu sắc, khoảng cách, responsive | `styles.css` |
| Sửa khung trang, metadata, đường dẫn tài nguyên | `index.html` |
| Thêm hình minh chứng | `assets/images/` hoặc thư mục tài nguyên đang được website sử dụng |
| Sửa quy trình xuất bản | `.github/workflows/deploy.yml` (chỉ khi thực sự cần) |

Không sử dụng hướng dẫn `content/vi/`, `content/en/` hoặc `src/config/structure.ts`: đó là cấu trúc của một dự án khác.

## 2. Chỉnh nội dung đang có

1. Mở repository bằng VS Code.
2. Trong `app.js`, nhấn **Ctrl + F** và tìm đúng tiêu đề mục cần sửa (ví dụ `Workshop`, `Worklog` hoặc `5.6`).
3. Chỉnh nội dung trong mục tương ứng, giữ cú pháp JavaScript và cấu trúc đối tượng/hàm hiện hữu.
4. Nếu mục có tiếng Việt và tiếng Anh, cập nhật **cả hai bản**.
5. Không đổi ID hoặc hash route nếu chưa kiểm tra các liên kết đang sử dụng.
6. Chạy `node --check app.js`, mở local và kiểm tra phần vừa sửa.

## 3. Cập nhật Workshop

- Kiểm tra thứ tự nhóm và đề mục 5.1–5.8 trên sidebar sau khi sửa.
- Giữ nhất quán tên bước, nội dung mô tả và các liên kết điều hướng.
- Chỉ ghi "hoàn thành" hoặc "đã triển khai" khi có kết quả thực tế.
- Với lệnh AWS hoặc mã cấu hình, đặt trong khối code phù hợp và **che khóa bí mật**.
- Kiểm tra các liên kết đến hình minh chứng có trỏ tới file tồn tại trong repo.

## 4. Ảnh và minh chứng

Đặt ảnh trong thư mục tài nguyên mà trang đang tham chiếu. Dùng tên rõ nghĩa, ví dụ `workshop-vpc-overview.png` hoặc `workshop-cloudwatch-dashboard.png`.

Trước khi thêm ảnh công khai, che account ID, access key, secret, token, dữ liệu khách hàng và thông tin nhạy cảm. Nếu chưa có ảnh, **không tạo placeholder giả hoặc khẳng định đã xác minh**.

## 5. Kiểm tra tại local

```bash
node --check app.js
npm start
```

Mở `http://localhost:3000`, kiểm tra:

- Trang chủ và 7 mục chính.
- Worklog mở đúng tuần mặc định.
- Workshop hiển thị đúng nội dung đã sửa.
- Điều hướng tiếng Việt và tiếng Anh.
- Bảng, ảnh, link và hiển thị trên điện thoại.

## 6. Đưa nội dung lên GitHub

```bash
git status
git add app.js index.html styles.css
git commit -m "docs: update FCAJ report content"
git push aws HEAD:main
```

**Lưu ý:** Chỉ `git add` đúng các file bạn thực sự sửa; ví dụ trên không bao gồm ảnh mới. Nếu thêm ảnh, hãy stage đúng file ảnh đó. Không sử dụng `git add .` khi còn file backup hoặc tài liệu không muốn công khai.

Sau khi deploy hoàn thành, mở website chính thức và nhấn **Ctrl + F5** nếu trình duyệt còn giữ cache.
