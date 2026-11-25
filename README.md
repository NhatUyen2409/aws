<div align="center">

# ☁️ AWS First Cloud AI Journey — Internship Report

### Báo cáo thực tập | Phan Nhật Uyên

[![Deploy to GitHub Pages](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=github&logoColor=white)

**Website báo cáo thực tập chương trình First Cloud AI Journey (FCAJ)**, tổng hợp nhật ký học tập, đề xuất dự án, bài viết chuyên môn, sự kiện, workshop AWS và phần tự đánh giá.

**[🌐 Xem website báo cáo](https://nhatuyen2409.github.io/aws/)** · **[📖 Worklog](https://nhatuyen2409.github.io/aws/#/worklog)** · **[🧪 Workshop](https://nhatuyen2409.github.io/aws/#/workshop)** · **[⚙️ GitHub Actions](https://github.com/NhatUyen2409/aws/actions)**

</div>

---

## 📌 Giới thiệu dự án

| Thông tin | Chi tiết |
| --- | --- |
| **Sinh viên** | Phan Nhật Uyên |
| **Trường** | Đại học FPT |
| **Chuyên ngành** | An toàn thông tin |
| **Chương trình** | AWS First Cloud AI Journey (FCAJ) — Workforce Bootcamp |
| **Nền tảng triển khai** | GitHub Pages |
| **Ngôn ngữ website** | Tiếng Việt / English |
| **Mã nguồn** | [NhatUyen2409/aws](https://github.com/NhatUyen2409/aws) |

Website được thiết kế để trình bày báo cáo trực tuyến theo từng chuyên mục, thuận tiện đọc trên máy tính và thiết bị di động. Nội dung có thể được cập nhật liên tục trên GitHub, sau đó tự động xuất bản qua GitHub Actions.

## 📚 Nội dung báo cáo

| Phần | Nội dung chính |
| --- | --- |
| **1. Worklog** | Nhật ký học tập và công việc theo **12 tuần**, gồm mục tiêu, hoạt động và tài liệu tham khảo. |
| **2. Proposal** | Đề xuất nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên AWS; mô tả kiến trúc, dịch vụ và quy trình triển khai. |
| **3. Blogs Posted** | Các bài viết chia sẻ kiến thức AWS, kiến trúc hệ thống và kinh nghiệm kỹ thuật. |
| **4. Events Participated** | Tổng hợp các sự kiện công nghệ, nội dung tiếp thu và ghi chú liên quan. |
| **5. Workshop** | Hướng dẫn thực hành AWS theo các mục **5.1–5.8**, bao gồm chuẩn bị, hạ tầng, triển khai ứng dụng, AI, giám sát và các bước thực hành liên quan. |
| **6. Self-Assessment** | Tự đánh giá kiến thức, kỹ năng và kết quả thực tập. |
| **7. Sharing & Feedback** | Chia sẻ trải nghiệm và đề xuất cải thiện chương trình. |

> Nội dung báo cáo và minh chứng được cập nhật theo tiến độ. Vui lòng đối chiếu từng chuyên mục trên website để xem phiên bản mới nhất.

## ✨ Tính năng website

- **Song ngữ Việt / Anh**, chuyển đổi ngôn ngữ ngay trong giao diện.
- **Điều hướng theo chuyên mục** với sidebar và các mục Workshop có thể mở/thu gọn.
- **Worklog 12 tuần**, chọn tuần để xem mục tiêu và công việc chi tiết.
- **Workshop có hướng dẫn chi tiết**, trình bày nội dung theo từng bước thực hành.
- **Giao diện responsive**, sử dụng trên máy tính và điện thoại.
- **Liên kết nội bộ bằng hash route** (`#/worklog`, `#/proposal`, `#/workshop`...), thuận tiện chia sẻ trực tiếp.
- **Triển khai tự động** lên GitHub Pages khi cập nhật nhánh `main`.

## 🧪 Workshop và công nghệ AWS

Workshop tập trung vào bài toán triển khai một nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên hạ tầng AWS. Các thành phần kỹ thuật được đề cập trong nội dung dự án bao gồm:

| Nhóm | Công nghệ / dịch vụ |
| --- | --- |
| **Networking** | Amazon VPC, Subnet, Security Group |
| **Compute & deployment** | Amazon ECS, AWS Fargate, Application Load Balancer |
| **Database & storage** | Amazon RDS, Amazon S3 |
| **AI** | Amazon Bedrock |
| **Monitoring & cost** | Amazon CloudWatch, AWS Budgets, Cost Explorer |
| **Infrastructure & CI/CD** | Terraform, GitHub Actions |

> Bảng trên mô tả các công nghệ trong nội dung workshop, không khẳng định tất cả tài nguyên đang vận hành trên một môi trường AWS production.

## 🧱 Công nghệ xây dựng website

Website báo cáo sử dụng **HTML5, CSS3 và JavaScript thuần**. Đây là website tĩnh, không cần React, Vite, Hugo hoặc một bước build frontend riêng để xuất bản.

```text
index.html    Giao diện và các khu vực hiển thị
styles.css    Kiểu dáng, bố cục và responsive
app.js        Nội dung, điều hướng và tương tác
assets/       Hình ảnh và tài nguyên minh chứng
```

## 🚀 Chạy website trên máy cá nhân

**Yêu cầu:** Git và trình duyệt hiện đại. Có thể chạy bằng VS Code Live Server hoặc một HTTP server đơn giản.

### 1. Tải mã nguồn

```bash
git clone https://github.com/NhatUyen2409/aws.git
cd aws
```

### 2. Chạy local

Mở thư mục dự án bằng **VS Code**, sau đó dùng tiện ích **Live Server** để mở `index.html` trong trình duyệt.

Hoặc, nếu máy đã có Python, chạy:

```bash
python -m http.server 8000
```

Truy cập **http://localhost:8000**.

### 3. Kiểm tra JavaScript (tùy chọn)

Nếu đã cài Node.js:

```bash
node --check app.js
```

## 📁 Cấu trúc repository

```text
aws/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow triển khai GitHub Pages
├── index.html              # Trang web chính
├── app.js                  # Nội dung và tương tác
├── styles.css              # Giao diện và responsive
├── README.md               # Giới thiệu dự án
└── ...                     # Các tài nguyên khác của báo cáo
```

## ⚙️ CI/CD & Triển khai GitHub Pages

Repository sử dụng workflow [`deploy.yml`](https://github.com/NhatUyen2409/aws/blob/main/.github/workflows/deploy.yml) để triển khai website.

**Quy trình:**

1. Thay đổi mã nguồn và push lên nhánh `main`.
2. GitHub Actions chuẩn bị các file tĩnh và tạo deployment artifact.
3. GitHub Pages triển khai bản mới lên website.
4. Kiểm tra kết quả ở mục [Actions](https://github.com/NhatUyen2409/aws/actions).

**Website chính thức:** https://nhatuyen2409.github.io/aws/

### Cập nhật nội dung

```bash
git add README.md
git commit -m "docs: update GitHub README"
git push aws HEAD:main
```

> Lệnh `git push aws HEAD:main` áp dụng cho môi trường làm việc đã cấu hình remote tên `aws`. Nếu clone repository mới, remote mặc định thường là `origin`; khi đó dùng `git push origin main`.

## ✅ Kiểm tra trước khi xuất bản

- [ ] Kiểm tra nội dung tiếng Việt và tiếng Anh.
- [ ] Mở Worklog, Proposal, Blogs, Events, Workshop, Self-Assessment và Feedback.
- [ ] Kiểm tra các liên kết và nội dung từng chuyên mục.
- [ ] Chạy `node --check app.js`.
- [ ] Kiểm tra hiển thị trên máy tính và điện thoại.
- [ ] Xác nhận GitHub Actions triển khai thành công.

## 🔗 Liên kết

- [Website báo cáo](https://nhatuyen2409.github.io/aws/)
- [Repository GitHub](https://github.com/NhatUyen2409/aws)
- [GitHub Actions](https://github.com/NhatUyen2409/aws/actions)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Study Group](https://000001.awsstudygroup.com/)

## 🌍 English overview

This repository hosts **Phan Nhat Uyen's AWS First Cloud AI Journey internship report**, featuring a 12-week worklog, project proposal, AWS technical blogs, events, hands-on workshops, self-assessment, and feedback.

The bilingual website is built with **HTML, CSS, and vanilla JavaScript** and deployed to **GitHub Pages** through GitHub Actions.

**[Visit the live website](https://nhatuyen2409.github.io/aws/)** · **[Browse source code](https://github.com/NhatUyen2409/aws)**

---

<div align="center">

**AWS First Cloud AI Journey · Internship Report · 2026**

Made for learning, documenting, and sharing cloud knowledge.

</div>
