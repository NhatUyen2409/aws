# AWS FCAJ Internship Report Website (Official Hugo Template)

Website báo cáo thực tập chương trình **AWS First Cloud AI Journey (FCAJ)** của sinh viên **Phan Nhật Uyên**, được xây dựng dựa trên template chuẩn chính thức của FCAJ ([fcj-workshop-template](https://github.com/thienluhoan/fcj-workshop-template)) sử dụng Static Site Generator **Hugo** kết hợp theme **Hugo Learn** (`themeVariant = "workshop"`).

---

## 📌 Thông tin dự án

- **Họ và tên sinh viên:** Phan Nhật Uyên
- **MSSV:** SE196682
- **Trường:** Trường Đại học FPT
- **Chuyên ngành:** An toàn thông tin
- **Đơn vị thực tập:** Công ty TNHH Amazon Web Services (AWS) Việt Nam
- **Vị trí:** Workforce Bootcamp - First Cloud AI Journey (FCAJ)
- **Thời gian thực tập:** 14/09/2026 – 30/11/2026
- **Trang web GitHub Pages:** [https://nhatuyen2409.github.io/aws/](https://nhatuyen2409.github.io/aws/)

---

## 🏗️ Cấu trúc hệ thống tài liệu Hugo

Website được tổ chức đầy đủ theo cấu trúc đa ngôn ngữ song ngữ (Tiếng Việt & English):

1. **Trang chủ (`content/_index.md`, `content/_index.vi.md`):** Thông tin sinh viên, ảnh đại diện, thông tin công ty và danh mục báo cáo.
2. **1. Worklog (`content/1-Worklog/`):** Nhật ký công việc 12 tuần thực tập (từ Tuần 1 đến Tuần 12 với đầy đủ ngày tháng 2026, mục tiêu, kết quả và bảng công việc hàng ngày kèm liên kết tài liệu).
3. **2. Proposal (`content/2-Proposal/`):** Đề xuất dự án *Personalized Nutrition E-Commerce Platform on AWS* (Spring Boot, React 19, RDS PostgreSQL, ECS Fargate, Amazon Bedrock AI) với đầy đủ 11 mục, kiến trúc AWS, luồng nghiệp vụ và phân tích chi phí.
4. **3. Blogs Posted (`content/3-BlogsPosted/`):** 3 bài viết chuyên môn sâu về AWS (Amazon S3 Express One Zone, Kiến trúc hướng sự kiện Event-Driven, EC2 Identity Containment) kèm link Facebook và hình ảnh kiến trúc.
5. **4. Events Participated (`content/4-EventParticipated/`):** 3 sự kiện công nghệ AWS (Hiện đại hóa CSDL & GenAI 29/09, First Cloud AI Journey Meetup 24/10, Enterprise AI on AWS Cloud 14/11 với dàn diễn giả Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh) kèm ảnh check-in và nội dung thu hoạch.
6. **5. Workshop (`content/5-Workshop/`):** Hướng dẫn thực hành kỹ thuật chuyên sâu từ 5.1 đến 5.7:
   - `5.1-Workshop-overview`: Tổng quan và kiến trúc lab.
   - `5.2-Prerequisites`: Điều kiện chuẩn bị môi trường, AWS CLI SSO, Terraform S3 Backend.
   - `5.3-Core-infrastructure`: Hạ tầng cốt lõi (VPC mạng con, RDS PostgreSQL, Cognito User Pool).
   - `5.4-Application-deployment`: Triển khai ứng dụng (ECS Fargate ALB, S3 CloudFront, CI/CD GitHub Actions OIDC, Cổng thanh toán VNPay sandbox).
   - `5.5-Bedrock-ai`: Tích hợp Amazon Bedrock Nova 2 Lite và Bedrock Guardrails cho trợ lý dinh dưỡng cá nhân hóa.
   - `5.6-Monitoring-cost`: Giám sát CloudWatch, AWS Budgets, Cost Explorer.
   - `5.7-Cleanup`: Quy trình dọn dẹp tài nguyên và teardown hạ tầng an toàn.
7. **6. Self-evaluation (`content/6-Self-evaluation/`):** Báo cáo tự đánh giá theo 12 tiêu chí chuẩn của AWS FCAJ.
8. **7. Feedback (`content/7-Feedback/`):** Chia sẻ trải nghiệm, mức độ hài lòng, đóng góp cải tiến và khuyến nghị.

---

## 🛠️ Hướng dẫn cài đặt và chạy thử nghiệm tại Local

### 1. Yêu cầu môi trường
- [Hugo Extended](https://gohugo.io/installation/) (khuyến nghị phiên bản `>= 0.134.0`)
- Git

### 2. Chạy website trên máy cục bộ
```bash
# Clone repository kèm submodules (chứa theme hugo-theme-learn)
git clone --recurse-submodules https://github.com/NhatUyen2409/aws.git
cd aws

# Khởi động máy chủ Hugo phát triển nội bộ
hugo server -D
```
Truy cập trình duyệt tại: `http://localhost:1313/` (hoặc `http://localhost:1313/aws/`).

### 3. Build tĩnh (Production Build)
```bash
hugo --minify
```
Mã nguồn tĩnh sau khi biên dịch sẽ được tạo tại thư mục `public/`.

---

## 🚀 CI/CD & Triển khai lên GitHub Pages

Repository được cấu hình quy trình GitHub Actions tự động tại `.github/workflows/hugo.yml`:
- Tự động kích hoạt khi có push vào nhánh `main`.
- Cài đặt Hugo Extended `0.134.3`.
- Chạy lệnh `hugo --minify`.
- Xuất bản thư mục `./public` lên nhánh `gh-pages` để GitHub Pages phục vụ tại `https://nhatuyen2409.github.io/aws/`.

---

## 🔄 Tương thích ngược đường dẫn cũ (Legacy Hash Routes)

Website đã tích hợp sẵn cơ chế chuyển hướng (redirect) tại `static/404.html` và `layouts/404.html` để tự động điều hướng người dùng mở các liên kết cũ dạng hash (`/#/worklog`, `/#/proposal`, `/#/blogs-posted`, `/#/events`, `/#/workshop`,...) sang cấu trúc đường dẫn mới của Hugo Learn.
