# AWS First Cloud AI Journey — Internship Report

[![Deploy to GitHub Pages](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml/badge.svg)](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?logo=github&logoColor=white)

Báo cáo thực tập **First Cloud AI Journey (FCAJ)** của **Phan Nhật Uyên**, trình bày nhật ký thực tập, đề xuất dự án, bài viết chuyên môn, sự kiện tham gia và các workshop thực hành AWS. Website được xây dựng dưới dạng ứng dụng web tĩnh, hỗ trợ nội dung **Tiếng Việt / English** và triển khai bằng **GitHub Pages**.

**[🌐 Xem báo cáo trực tuyến](https://nhatuyen2409.github.io/aws/)** · **[📁 Mã nguồn website](https://github.com/NhatUyen2409/aws)** · **[⚙️ Xem trạng thái triển khai](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml)**

## Thông tin báo cáo

| Thông tin | Chi tiết |
| --- | --- |
| Sinh viên | **Phan Nhật Uyên** |
| Trường | Đại học FPT |
| Chuyên ngành | An toàn thông tin |
| Chương trình | First Cloud AI Journey (FCAJ) |
| Giai đoạn báo cáo | 14/09/2026 – 30/11/2026 |
| Nền tảng xuất bản | GitHub Pages |
| Ngôn ngữ | Tiếng Việt / English |

## Nội dung báo cáo

| Phần | Nội dung | Ghi chú |
| --- | --- | --- |
| **1. Worklog** | Nhật ký học tập và công việc theo tuần | Theo dõi tiến độ thực tập; mặc định mở Tuần 1 |
| **2. Proposal** | Đề xuất nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên AWS | Mục tiêu, kiến trúc, dịch vụ và kế hoạch thực hiện |
| **3. Blogs Posted** | Các bài viết chia sẻ kiến thức AWS | Nội dung và liên kết bài đăng |
| **4. Events Participated** | Báo cáo tham gia các sự kiện công nghệ | Thông tin sự kiện, nội dung học hỏi và minh chứng |
| **5. Workshop** | Các bước thực hành triển khai hệ thống AWS | Các mục **5.1–5.8** trên website |
| **6. Self-Assessment** | Tự đánh giá quá trình thực tập | Điểm mạnh, hạn chế và hướng cải thiện |
| **7. Sharing and Feedback** | Chia sẻ trải nghiệm và phản hồi chương trình | Tổng kết và đề xuất |


## Tính năng website

- **Song ngữ:** truy cập nội dung tiếng Việt và tiếng Anh trong cùng website.
- **Điều hướng theo đề mục:** Worklog, Proposal, Blogs Posted, Events Participated, Workshop, Self-Assessment và Feedback.
- **Workshop có cấu trúc:** phân chia hướng dẫn theo các mục thực hành, hỗ trợ mở nội dung từ sidebar.
- **Trình bày tài liệu:** bảng, mã lệnh, liên kết, sơ đồ và ảnh minh chứng khi có dữ liệu.
- **Giao diện web responsive:** sử dụng HTML, CSS và JavaScript, không cần biên dịch React/Vite.
- **Tự động xuất bản:** GitHub Actions triển khai website khi cập nhật nhánh `main`.

## Workshop — Lộ trình thực hành AWS

Workshop trong báo cáo tập trung vào nền tảng **Personalized Nutrition E-Commerce Platform on AWS**, kết hợp hạ tầng đám mây, triển khai ứng dụng, AI và quản trị vận hành.

| Nhóm nội dung | Công việc chính |
| --- | --- |
| Tổng quan và chuẩn bị | Giới thiệu kiến trúc, tài khoản, công cụ và điều kiện thực hành |
| Hạ tầng nền tảng | Thiết lập mạng, cơ sở dữ liệu và các thành phần hỗ trợ ứng dụng |
| Triển khai ứng dụng | Cấu hình dịch vụ, kết nối thành phần hệ thống và quy trình triển khai |
| Tích hợp AI | Tìm hiểu và tích hợp các dịch vụ AI phù hợp với hệ thống dinh dưỡng |
| Giám sát và chi phí | Theo dõi hoạt động, quản lý ngân sách và quan sát tài nguyên |
| Hoàn tất và dọn dẹp | Kiểm tra, tổng kết và xử lý tài nguyên sau thực hành |

**[→ Mở trực tiếp mục Workshop trên website](https://nhatuyen2409.github.io/aws/#/workshop)**

## Cách hoạt động của website

Website báo cáo được xây dựng bằng **HTML, CSS và JavaScript**. `index.html` là trang khởi đầu; `styles.css` quản lý giao diện và bố cục; `app.js` xử lý nội dung, điều hướng giữa các phần báo cáo và hiển thị tiếng Việt/tiếng Anh.

Khi cập nhật mã nguồn lên nhánh `main`, **GitHub Actions** thực hiện quy trình xuất bản lên **GitHub Pages**. Người xem truy cập báo cáo tại [nhatuyen2409.github.io/aws](https://nhatuyen2409.github.io/aws/).

Website này dùng để **trình bày báo cáo thực tập**, không phải chính ứng dụng thương mại điện tử hoặc hạ tầng AWS được mô tả trong Workshop.

## Chạy website trên máy cục bộ

### 1. Tải mã nguồn

```bash
git clone https://github.com/NhatUyen2409/aws.git
cd aws
```

### 2. Chạy local

Repo có lệnh `start` sử dụng `serve` trên cổng **3000**. Khi có Node.js và npm, chạy:

```bash
npm start
```

Mở **http://localhost:3000**. Nếu hệ thống hỏi cài `serve` qua `npx`, xác nhận theo hướng dẫn của npm. Có thể dùng một HTTP server tĩnh tương đương để mở website.

### 3. Kiểm tra thay đổi JavaScript

```bash
node --check app.js
```

Đây là bước kiểm tra **cú pháp JavaScript**, không thay thế việc kiểm thử giao diện trong trình duyệt.

## Cấu trúc repository

```text
aws/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Triển khai GitHub Pages
├── assets/
│   └── images/             # Tài nguyên và minh chứng
├── .nojekyll               # Phục vụ website tĩnh trên Pages
├── 404.html                # Trang xử lý đường dẫn không tồn tại
├── index.html              # Điểm vào website
├── app.js                  # Nội dung và điều hướng ứng dụng
├── styles.css              # Giao diện và responsive
├── package.json            # Thông tin và lệnh chạy local
├── README.md               # Giới thiệu repository
├── CONTRIBUTING.md         # Hướng dẫn đóng góp
└── docs/
    ├── HOW_TO_EDIT_CONTENT.md
    └── DEPLOYMENT.md
```

> Các tệp `CONTRIBUTING.md` và `docs/` là bộ tài liệu đi kèm README này: thêm chúng vào repo để các liên kết bên dưới hoạt động.

## CI/CD và triển khai GitHub Pages

Quy trình triển khai được cấu hình tại [`.github/workflows/deploy.yml`](https://github.com/NhatUyen2409/aws/blob/main/.github/workflows/deploy.yml).

1. Push thay đổi lên nhánh `main`.
2. Job **build** checkout source, cấu hình Pages và upload artifact `github-pages`.
3. Job **deploy** sử dụng artifact đó để xuất bản website.
4. Kiểm tra kết quả tại [GitHub Actions](https://github.com/NhatUyen2409/aws/actions) và mở website chính thức.

**Production:** https://nhatuyen2409.github.io/aws/

**[Hướng dẫn triển khai và xử lý lỗi](docs/DEPLOYMENT.md)**

## Hướng dẫn biên tập nội dung

Nội dung và cách điều hướng báo cáo hiện được xử lý chủ yếu trong **`app.js`**; giao diện nằm ở `styles.css`, cấu trúc trang trong `index.html`. Không chỉnh theo hướng dẫn `content/vi/`, `src/config/structure.ts` hay Vite từ repo tham khảo — các đường dẫn đó không thuộc cấu trúc hiện tại.

Xem **[Hướng dẫn biên tập](docs/HOW_TO_EDIT_CONTENT.md)** để sửa Worklog, Workshop, nội dung song ngữ và bổ sung minh chứng.

## Tài liệu và đóng góp

- [Hướng dẫn biên tập nội dung](docs/HOW_TO_EDIT_CONTENT.md)
- [Hướng dẫn triển khai GitHub Pages](docs/DEPLOYMENT.md)
- [Quy trình đóng góp](CONTRIBUTING.md)
- [Báo lỗi hoặc đề xuất cải tiến](https://github.com/NhatUyen2409/aws/issues)

## English

This repository hosts **Phan Nhat Uyen's First Cloud AI Journey (FCAJ) internship report**, covering a worklog, project proposal, technical blog posts, events, hands-on AWS workshops, self-assessment, and program feedback.

The bilingual report website is a static HTML/CSS/JavaScript application hosted on **GitHub Pages**. The source is managed on GitHub, and deployment is automated through GitHub Actions.

**[Open report](https://nhatuyen2409.github.io/aws/)** · **[Deployment workflow](https://github.com/NhatUyen2409/aws/actions/workflows/deploy.yml)** · **[Contribution guide](CONTRIBUTING.md)**

---

**First Cloud AI Journey · Internship Report · Phan Nhật Uyên**
