# Đóng góp cho báo cáo FCAJ

Cảm ơn bạn đã quan tâm đến website báo cáo thực tập First Cloud AI Journey của **Phan Nhật Uyên**.

## Phạm vi đóng góp

Có thể đề xuất chỉnh sửa lỗi chính tả, cải thiện nội dung song ngữ, bổ sung minh chứng đã xác minh, sửa lỗi điều hướng, responsive hoặc tài liệu hướng dẫn.

## Chuẩn bị

```bash
git clone https://github.com/NhatUyen2409/aws.git
cd aws
npm start
```

Website sử dụng HTML, CSS và JavaScript. Nội dung chính nằm trong `app.js`; vui lòng đọc [hướng dẫn biên tập](docs/HOW_TO_EDIT_CONTENT.md) trước khi sửa.

## Nguyên tắc nội dung

- Diễn đạt kỹ thuật chính xác, phân biệt việc đã hoàn thành với nội dung đang dự kiến.
- Đồng bộ tiếng Việt và tiếng Anh khi sửa nội dung có hai bản.
- Ghi nguồn cho số liệu hoặc thông tin bên ngoài.
- Không công khai thông tin đăng nhập, token, AWS account ID hoặc dữ liệu cá nhân.
- Hình minh chứng cần có nguồn gốc và bối cảnh rõ ràng; không sử dụng ảnh giả làm kết quả triển khai.

## Kiểm tra trước khi gửi

```bash
node --check app.js
git diff --check
```

Mở website local và kiểm tra khu vực đã sửa trên màn hình máy tính và điện thoại. Nếu sửa Workshop, kiểm tra menu và các bước liên quan.

## Gửi đề xuất thay đổi

1. Tạo một branch riêng có tên mô tả thay đổi.
2. Commit các file cần thiết (không đính kèm backup hoặc file chứa bí mật).
3. Mở pull request vào `main`, mô tả **đã sửa gì**, **vì sao** và **đã kiểm tra thế nào**.
4. Nếu chưa sẵn sàng tạo PR, có thể mở [Issue](https://github.com/NhatUyen2409/aws/issues) để thảo luận.

Việc chấp nhận và triển khai thay đổi thuộc quyền quản lý của chủ repository.
