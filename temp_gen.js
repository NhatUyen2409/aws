/**
 * UPDATE WORKSHOP 5.1 TO 5.5.3 IN web-worklog-fcaj/app.js ONLY
 */

const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Uyen\\Downloads\\Phan Nhật Uyên\\Phan Nhật Uyên';
const webWorklogDir = path.join(baseDir, 'web-worklog-fcaj');
const appJsPath = path.join(webWorklogDir, 'app.js');

const appJs = fs.readFileSync(appJsPath, 'utf8');

// Verified Links
const GITHUB_REPO = "https://github.com/trungnguyen-VNTN/nutrition-ecommerce";
const GITHUB_MASTER = `${GITHUB_REPO}/blob/master`;

const LINKS = {
  infraReadme: `${GITHUB_MASTER}/infra/README.md`,
  runbook: `${GITHUB_MASTER}/docs/runbook.md`,
  demoMd: `${GITHUB_MASTER}/docs/demo.md`,
  aiEvalMd: `${GITHUB_MASTER}/docs/ai-eval.md`,
  versionsTf: `${GITHUB_MASTER}/infra/envs/dev/versions.tf`,
  ciYml: `${GITHUB_MASTER}/.github/workflows/ci.yml`,
  networkTf: `${GITHUB_MASTER}/infra/modules/network/main.tf`,
  rdsTf: `${GITHUB_MASTER}/infra/modules/rds/main.tf`,
  cognitoTf: `${GITHUB_MASTER}/infra/modules/cognito/main.tf`,
  serviceTf: `${GITHUB_MASTER}/infra/modules/service/main.tf`,
  frontendTf: `${GITHUB_MASTER}/infra/modules/frontend/main.tf`,
  githubOidcTf: `${GITHUB_MASTER}/infra/modules/github-oidc/main.tf`,
  guardrailTf: `${GITHUB_MASTER}/infra/modules/guardrail/main.tf`,
  recService: `${GITHUB_MASTER}/backend/src/main/java/com/nutrition/profile/RecommendationService.java`,
  vnpaySigner: `${GITHUB_MASTER}/backend/src/main/java/com/nutrition/payments/VnpaySigner.java`,
  demoInfraPs1: `${GITHUB_MASTER}/scripts/demo-infra.ps1`,
  archStarTxt: `${GITHUB_MASTER}/docs/diagrams/architecture-star.txt`,
  archDrawio: `${GITHUB_MASTER}/docs/diagrams/aws-architecture.drawio`
};

// Helpers
function codeSnippet(lang, filename, code, gitUrl) {
  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  const fileHeader = gitUrl 
    ? `<a href="${gitUrl}" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> ${filename}</a>`
    : `<span class="code-filename">${filename}</span>`;

  return `
    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        ${fileHeader}
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-${lang}">${escapedCode}</code></pre>
    </div>
  `;
}

function figure(imgSrc, alt, caption) {
  return `
    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('${imgSrc}', '${alt}')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('${imgSrc}', '${alt}')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="${imgSrc}" alt="${alt}" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">${caption}</div>
    </div>
  `;
}

function metaRow(readTime) {
  return `
    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
      <span class="badge" style="background: #10B981; color: #fff; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.5rem; border-radius: 4px;">Hoàn thiện</span>
      <span class="read-time" style="color: #64748B; font-size: 0.85rem;"><i class="far fa-clock"></i> ${readTime}</span>
    </div>
  `;
}

// 1. EXTRACT EXISTING PANE 5.6 AND 5.7 IN APP.JS
const p56Index = appJs.indexOf('id="pane-ws-5-6"');
const p57Index = appJs.indexOf('id="pane-ws-5-7"');
const viEndIndex = appJs.indexOf('function getWorkshopEnHtml() {');

const pane56Html = appJs.substring(appJs.lastIndexOf('<div', p56Index), p57Index).trim();
const pane57Html = appJs.substring(appJs.lastIndexOf('<div', p57Index), viEndIndex).trim();

// 2. BUILD MODULES 5.1 TO 5.5.3

const secOverview = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">Workshop</h1>
      <p class="report-subtitle">Hướng dẫn thực hành kỹ thuật hoàn chỉnh: Nền tảng E-Commerce Dinh dưỡng Cá nhân hóa trên AWS.</p>
      <h2 class="report-h2" style="margin-top: 1.5rem; font-size: 1.35rem; color: #1E293B;">Xây dựng nền tảng thương mại điện tử dinh dưỡng minh bạch trên AWS</h2>
    </header>

    <section class="report-section">
      <h3 class="report-h3">Overview</h3>
      <p class="report-p">Workshop đi từ quyền truy cập và Terraform đến ứng dụng React, Spring Boot và PostgreSQL trên AWS. Môi trường dev chạy ở Singapore, chỉ lời gọi Bedrock và Guardrail ở Tokyo.</p>
      <p class="report-p">Các bước dùng cấu hình và lệnh trong repo dự án. Minh chứng thực tế được bổ sung sau mỗi bước; số liệu kiểm thử và chi phí được ghi kèm kỳ đo.</p>

      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-1');">5.1 Giới thiệu</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-2');">5.2 Điều kiện chuẩn bị</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3');">5.3 Hạ tầng cốt lõi</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4');">5.4 Triển khai ứng dụng</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5');">5.5 AI tra cứu với Amazon Bedrock</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-6');">5.6 Giám sát, bảo mật và chi phí</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-7');">5.7 Dọn tài nguyên</a></li>
        <li><a href="https://aws-fcaj-report.vercel.app/vi/5-workshop/5.8-testing-troubleshooting" target="_blank">5.8 Kiểm thử và xử lý sự cố</a></li>
      </ul>
    </section>
  </div>
`;

const sec51 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.1. Giới thiệu</h1>
      ${metaRow("4 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <h3 class="report-h3">CloudFront → ALB → ECS</h3>
      <p class="report-p">Theo dõi luồng từ trình duyệt tới DB và AI, xác định môi trường dev duy nhất.</p>

      <h3 class="report-h3">Bedrock và Guardrails</h3>
      <p class="report-p">Nova 2 Lite diễn giải yêu cầu thành tool chỉ đọc. Code ghép số liệu từ PostgreSQL và kiểm tra đầu ra trước khi trả lời.</p>

      <h2 class="report-h2">Workshop overview</h2>
      <h3 class="report-h3">AWS architecture reference</h3>
      ${figure("assets/images/workshop/5.1-overview/aws-architecture.png", "AWS architecture reference", "Sơ đồ kiến trúc AWS vẽ trên draw.io bằng bộ AWS Architecture Icons, cập nhật Multi-AZ và AWS STS ngày 25/11/2026")}
      <p class="report-p" style="margin-top: 0.5rem;">Tải file draw.io gốc để xem và chỉnh sửa: <a href="${LINKS.archDrawio}" target="_blank"><strong>aws-architecture.drawio</strong></a>.</p>

      <p class="report-p">Từ 22/11/2026 (D33), môi trường dev chạy 2 task ECS, mỗi Availability Zone một task, và RDS ở chế độ Multi-AZ với bản dự phòng (Standby) ở AZ thứ hai. Diễn tập Reboot with failover ngày 22/11 chuyển AZ chính từ ap-southeast-1a sang ap-southeast-1b trong khoảng 20–45 giây; API gián đoạn khoảng nửa phút rồi tự phục hồi, không mất dữ liệu.</p>

      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Dịch vụ</th>
            <th>Vai trò</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>CloudFront + S3</strong></td><td>React SPA và ảnh qua OAC; Function viết lại đường dẫn; hai bucket riêng tư</td></tr>
          <tr><td><strong>ALB + ECS Fargate + ECR</strong></td><td>ALB nhận CloudFront + header bí mật; Spring Boot 4 / Java 21, ARM64, 0,5 vCPU / 1 GB, 2 task ở 2 AZ</td></tr>
          <tr><td><strong>RDS PostgreSQL + Secrets Manager</strong></td><td>db.t4g.micro, 20 GB gp3, Multi-AZ (standby ở AZ thứ hai), private subnet, mã hóa; Flyway V1–V11</td></tr>
          <tr><td><strong>Cognito</strong></td><td>JWT sub và cognito:groups; USER / ADMIN</td></tr>
          <tr><td><strong>Bedrock + Guardrails</strong></td><td>Nova 2 Lite ở Tokyo; tool chỉ đọc, số liệu do code lấy từ DB</td></tr>
          <tr><td><strong>CloudWatch + SNS + Budgets</strong></td><td>Log 14 ngày, 7 alarm, cảnh báo thư điện tử; ngân sách 100 USD</td></tr>
          <tr><td><strong>CloudTrail + S3 audit + WAF</strong></td><td>Audit và ALB logs lưu 30 ngày; WAF chỉ bật khi demo; KMS do AWS quản lý</td></tr>
          <tr><td><strong>Terraform + IAM + STS + GitHub Actions</strong></td><td>State S3 use_lockfile; SSO, boundary; CI/CD qua OIDC, AWS STS cấp quyền tạm thời</td></tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">Đọc sơ đồ và quyết định D15/D17/D18. React và API đi qua CloudFront. Cognito cấp JWT; ALB chuyển yêu cầu tới Spring Boot trên ECS. Catalog, giỏ và đơn dùng RDS. Bộ gợi ý D32 tính bằng code, model chỉ chọn intent.</p>

      ${codeSnippet('text', 'docs/diagrams/architecture-star.txt', `1. Amazon CloudFront phân phối React SPA và ảnh sản phẩm từ hai bucket Amazon S3 riêng tư, qua Origin Access Control. 2. Các yêu cầu /api/* đi qua Internet Gateway tới Application Load Balancer. ALB chỉ nhận lưu lượng từ dải IP của CloudFront và kèm header bí mật. 3. Backend Spring Boot (Java 21) chạy trên Amazon ECS Fargate (ARM64), đặt ở public subnet và không dùng NAT để tiết kiệm chi phí. ECS service chạy 2 task trên 2 Availability Zone: một AZ gặp sự cố thì task ở AZ còn lại vẫn phục vụ. Mỗi lớp có security group riêng: ALB chỉ nhận từ CloudFront, ECS chỉ nhận từ ALB, RDS chỉ nhận từ ECS qua cổng 5432. 4. Dữ liệu nằm trên Amazon RDS for PostgreSQL Multi-AZ ở private subnet: có bản dự phòng ở AZ thứ hai, tự chuyển sang khi AZ chính lỗi. Dữ liệu được mã hoá bằng khoá AWS KMS. Mật khẩu do AWS Secrets Manager quản lý. Truy vấn dùng SQL tham số hoá; trừ kho bằng UPDATE có điều kiện trong transaction.`, LINKS.archStarTxt)}

      <h3 class="report-h3">Sản phẩm chạy thực tế (Demo)</h3>
      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Minh chứng</th>
            <th>Liên kết</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ứng dụng (production trên môi trường dev)</td><td><a href="https://ddn09pubqlwme.cloudfront.net" target="_blank">https://ddn09pubqlwme.cloudfront.net</a></td></tr>
          <tr><td>Mã nguồn</td><td><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce" target="_blank">github.com/trungnguyen-VNTN/nutrition-ecommerce</a></td></tr>
          <tr><td>Video demo đầy đủ (4:57)</td><td><a href="https://youtu.be/_yt_s3DTMr0" target="_blank">https://youtu.be/_yt_s3DTMr0</a></td></tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">Để tiết kiệm chi phí, ứng dụng chỉ bật trong buổi demo và chấm bài (demo-infra.ps1 up), thời gian còn lại tắt (down). Khi app đang tắt, trang web vẫn mở nhưng API báo tạm ngưng; video demo ghi lại toàn bộ luồng: đăng nhập, lọc sản phẩm, hồ sơ dinh dưỡng, AI tra cứu, giỏ hàng, đặt hàng và trang quản trị.</p>

      <h3 class="report-h3">Kiểm chứng và nguồn</h3>
      <h4 class="report-h4" style="color: #1E293B; font-weight: 600; margin-top: 1rem;">Tổng quan</h4>
      ${figure("assets/images/workshop/5.1-overview/cloudfront-evidence.png", "Tổng quan", "CloudFront distribution: tên miền *.cloudfront.net, hỗ trợ HTTP/3, root object index.html")}

      <p class="report-p">Đối chiếu /api/products, đăng nhập và kịch bản demo trong docs/demo.md. Snapshot test ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Đây là kết quả được ghi lại, không phải lượt chạy trong báo cáo.</p>
      <p class="report-p">Các bước kiểm thử bằng lệnh và những sự cố thực tế đã gặp được ghi ở 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.archStarTxt}" target="_blank">docs/diagrams/architecture-star.txt</a>.</p>
    </section>
  </div>
`;

const sec52 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.2. Điều kiện chuẩn bị</h1>
      ${metaRow("3 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <h3 class="report-h3">Quyền IAM</h3>
      <p class="report-p">Chuẩn bị công cụ và quyền trước khi dựng hạ tầng.</p>
      <p class="report-p">Cài Terraform ≥1.10, AWS CLI, Java 21, Node và Docker. Tạo nutrition-boundary bằng quyền quản trị. Gán nutrition-plan và nutrition-apply qua IAM Identity Center theo docs/aws-setup/README.md. Plan dùng ReadOnlyAccess và quyền state cần thiết; apply có quyền dịch vụ theo vùng và ràng buộc role nutrition-*. Cập nhật ngoại lệ Bedrock Tokyo và WAF us-east-1 theo phần cuối tài liệu.</p>

      ${codeSnippet('powershell', 'infra/README.md', `aws sso login --sso-session nutrition
$env:TF_VAR_owner = "<tên bạn>"`, LINKS.infraReadme)}

      <h3 class="report-h3">Điều kiện chuẩn bị</h3>
      ${figure("assets/images/workshop/5.2-prerequisites/iam-identity-center.png", "Điều kiện chuẩn bị", "IAM Identity Center: hai permission set nutrition-plan (chỉ đọc) và nutrition-apply (triển khai)")}

      <p class="report-p">Kiểm tra profile đăng nhập và boundary trước bước bootstrap. Không ghi thông tin phiên, token hay dữ liệu đăng nhập vào báo cáo.</p>
      <p class="report-p">InvalidGrantException: phiên SSO hết hạn. Đăng nhập lại bằng aws sso login --sso-session nutrition trước khi tiếp tục.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>.</p>

      <h3 class="report-h3">Dựng tài nguyên bằng Terraform</h3>
      <p class="report-p">Khởi tạo state S3 và quy trình kiểm tra plan.</p>
      <p class="report-p">Từ gốc repo, thực hiện bootstrap theo infra/README.md. Bucket state có prevent_destroy. Điền backend.hcl từ bản example với tên bucket thực tế ở terminal riêng. CI chạy fmt và validate với backend=false; khi vận hành dev dùng init backend S3, plan -out=tfplan, đọc thay đổi rồi người dùng mới apply. Brief ghi ngân sách 100 USD. Mã bootstrap hiện chỉ quản lý bucket state, chưa có tài nguyên Budgets.</p>

      ${codeSnippet('hcl', 'infra/envs/dev/versions.tf', `backend "s3" {
  key          = "envs/dev/terraform.tfstate"
  region       = "ap-southeast-1"
  encrypt      = true
  use_lockfile = true
}
}`, LINKS.versionsTf)}

      ${codeSnippet('yaml', '.github/workflows/ci.yml', `- name: Format check
  run: terraform fmt -check -recursive infra

- name: Validate bootstrap
  run: |
    terraform -chdir=infra/bootstrap init -backend=false -input=false
    terraform -chdir=infra/bootstrap validate

- name: Validate envs/dev
  run: |
    terraform -chdir=infra/envs/dev init -backend=false -input=false
    terraform -chdir=infra/envs/dev validate`, LINKS.ciYml)}

      ${codeSnippet('powershell', 'infra/README.md', `terraform -chdir=infra/bootstrap init
terraform -chdir=infra/bootstrap plan -out=tfplan

# Đọc plan xong, bạn tự apply:
$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/bootstrap apply tfplan

terraform -chdir=infra/bootstrap output state_bucket`, LINKS.infraReadme)}

      <h3 class="report-h3">Bootstrap Terraform</h3>
      ${figure("assets/images/workshop/5.2-prerequisites/aws-budgets.png", "Bootstrap Terraform", "AWS Budgets: ngân sách 100 USD, đã dùng 15,06 USD, dự báo 26,95 USD")}

      <p class="report-p">Kiểm tra key envs/dev/terraform.tfstate, mã hóa và use_lockfile=true. Đọc plan để phát hiện thay thế, xóa và quyền IAM trước apply.</p>
      <p class="report-p">Khóa state từng bị kẹt sau apply dở. Chỉ khi xác nhận không còn tiến trình đang dùng state, chủ repo mới dùng terraform force-unlock ; không xóa khóa đang hoạt động.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.versionsTf}" target="_blank">infra/envs/dev/versions.tf</a>.</p>
      <p class="report-p">Ngân sách 100 USD được tạo thủ công trên Console (không nằm trong Terraform). Ngày 25/11/2026: đã dùng 15,06 USD, dự báo cả tháng 26,95 USD, trạng thái Healthy.</p>
    </section>
  </div>
`;

const sec53 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3. Hạ tầng cốt lõi</h1>
      ${metaRow("1 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Chuẩn bị mạng, cơ sở dữ liệu và xác thực làm nền cho backend. Thực hiện các bước dưới đây theo thứ tự.</p>

      ${figure("assets/images/workshop/5.3-core-infra/core-infra.png", "5.3 Hạ tầng cốt lõi", "Sơ đồ thành phần: VPC hai AZ, subnet, security group, RDS chính và bản dự phòng, Cognito")}
      <p class="report-p" style="margin-top: 0.5rem;">File draw.io để chỉnh sửa: <a href="https://aws-fcaj-report.vercel.app/vi/files/5.3-core-infra.drawio" target="_blank"><strong>5.3-core-infra.drawio</strong></a>.</p>

      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-1');">Tạo mạng VPC</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-2');">Tạo cơ sở dữ liệu RDS</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-3');">Cấu hình Cognito</a></li>
      </ul>
    </section>
  </div>
`;

const sec531 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.1. Tạo mạng VPC</h1>
      ${metaRow("2 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Tách luồng truy cập ALB, ECS và RDS.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Module network tạo VPC, hai public subnet và hai private-db subnet, Internet Gateway và các SG. Public subnet có tuyến ra Internet. ALB nhận prefix list origin-facing CloudFront; ECS chỉ nhận SG ALB, RDS chỉ nhận cổng 5432 từ SG ECS. S3 gateway endpoint gắn route table public và db. D15 giữ task ở public subnet có IP công khai để tiết kiệm NAT.</p>

      ${codeSnippet('hcl', 'infra/modules/network/main.tf', `data "aws_ec2_managed_prefix_list" "cloudfront" {
  name = "com.amazonaws.global.cloudfront.origin-facing"
}`, LINKS.networkTf)}

      <h3 class="report-h3">5.3.1-network-step1</h3>
      ${figure("assets/images/workshop/5.3-core-infra/network-step1.png", "5.3.1-network-step1", "VPC resource map: 4 subnet ở 2 AZ (public và db), route table, Internet Gateway và S3 endpoint")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Đối chiếu VPC resource map, route table và chuỗi SG với Terraform. Không diễn giải hai subnet DB thành RDS Multi-AZ.</p>

      <h3 class="report-h3">Mạng VPC</h3>
      ${figure("assets/images/workshop/5.3-core-infra/network-step2.png", "Mạng VPC", "Security group nutrition-dev-rds: chỉ nhận PostgreSQL 5432 từ security group của ECS")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.networkTf}" target="_blank">infra/modules/network/main.tf</a>.</p>
    </section>
  </div>
`;

const sec532 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.2. Tạo cơ sở dữ liệu RDS</h1>
      ${metaRow("2 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Dựng PostgreSQL private và quản lý schema có phiên bản.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Module rds cấu hình db.t4g.micro, 20 GB gp3, mã hóa và Multi-AZ (bản dự phòng ở AZ thứ hai, tự chuyển khi AZ chính lỗi; D33). Biến rds_multi_az trong infra/envs/dev mặc định true. Mật khẩu do RDS quản lý trong Secrets Manager, khóa mã hóa do AWS quản lý. Bật deletion protection. Spring Boot chạy migration Flyway V1–V11. V10 lưu payment_events; V11 lưu nutrition_profiles. Schema và API cũ chỉ là bản nền, đối chiếu migration và D32 khi mô tả phần mở rộng.</p>

      ${codeSnippet('hcl', 'infra/modules/rds/main.tf', `manage_master_user_password = true
db_subnet_group_name        = aws_db_subnet_group.main.name
vpc_security_group_ids      = [var.security_group_id]
publicly_accessible         = false

# Standby copy in the second AZ with automatic failover (prod-like HA; adds instance hours
# while the app is on and doubles storage).
multi_az = var.multi_az`, LINKS.rdsTf)}

      <h3 class="report-h3">5.3.2-database-step1</h3>
      ${figure("assets/images/workshop/5.3-core-infra/database-step1.png", "5.3.2-database-step1", "RDS: db.t4g.micro, PostgreSQL 17.9, mã hóa KMS, Multi-AZ = Yes, secondary zone ap-southeast-1b")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Kiểm tra RDS không public, mã hóa bật và task đọc được secret theo role. Đối chiếu migration trong backend/src/main/resources/db/migration.</p>

      <h3 class="report-h3">RDS và Flyway</h3>
      ${figure("assets/images/workshop/5.3-core-infra/database-step2.png", "RDS và Flyway", "RDS Connectivity & security: Publicly accessible = No, subnet group nutrition-dev-db gồm 2 subnet riêng")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Terraform không tự bật RDS đang stopped. demo-infra.ps1 up gọi start-db-instance và chờ available trước apply.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.rdsTf}" target="_blank">infra/modules/rds/main.tf</a>.</p>
    </section>
  </div>
`;

const sec533 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.3. Cấu hình Cognito</h1>
      ${metaRow("1 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Cấp danh tính từ JWT và phân quyền USER / ADMIN.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Tạo User Pool và SPA client không có client secret qua module cognito. Client dùng SRP, không hosted UI. Hai nhóm USER và ADMIN được khai báo bằng Terraform. Backend kiểm issuer, token_use, client_id và hạn token; lấy sub và cognito:groups từ JWT.</p>

      ${codeSnippet('hcl', 'infra/modules/cognito/main.tf', `resource "aws_cognito_user_group" "admin" {
  name         = "ADMIN"
  user_pool_id = aws_cognito_user_pool.users.id
}

resource "aws_cognito_user_group" "user" {
  name         = "USER"
  user_pool_id = aws_cognito_user_pool.users.id
}`, LINKS.cognitoTf)}

      <h3 class="report-h3">5.3.3-cognito-step1</h3>
      ${figure("assets/images/workshop/5.3-core-infra/cognito-step1.png", "5.3.3-cognito-step1", "Cognito user pool nutrition-dev-users ở Singapore")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Theo docs/demo.md: API thiếu token trả 401, người dùng thường gọi API admin trả 403. Không chụp token hoặc dữ liệu người dùng.</p>

      <h3 class="report-h3">Đăng nhập Cognito</h3>
      ${figure("assets/images/workshop/5.3-core-infra/cognito-step2.png", "Đăng nhập Cognito", "Cognito user pool: hai nhóm ADMIN và USER")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.cognitoTf}" target="_blank">infra/modules/cognito/main.tf</a>.</p>
    </section>
  </div>
`;

const sec54 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4. Triển khai ứng dụng</h1>
      ${metaRow("1 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Triển khai backend ARM64, web React và thanh toán thử. Pipeline dùng token OIDC của GitHub, được AWS STS đổi lấy phiên AWS tạm thời của role deploy.</p>

      ${figure("assets/images/workshop/5.4-deployment/deploy-app.png", "5.4 Triển khai ứng dụng", "Sơ đồ thành phần: CloudFront → S3 / ALB → 2 task ECS, ECR, GitHub Actions OIDC qua AWS STS, VNPAY")}
      <p class="report-p" style="margin-top: 0.5rem;">File draw.io để chỉnh sửa: <a href="https://aws-fcaj-report.vercel.app/vi/files/5.4-deploy-app.drawio" target="_blank"><strong>5.4-deploy-app.drawio</strong></a>.</p>

      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-1');">ECS Fargate và ALB</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-2');">Frontend trên S3 và CloudFront</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-3');">CI/CD với GitHub Actions OIDC</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-4');">Thanh toán VNPAY sandbox</a></li>
      </ul>
    </section>
  </div>
`;

const sec541 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.1. ECS Fargate và ALB</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Triển khai backend ARM64 với origin được giới hạn.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">ECR giữ image backend. Workflow build linux/arm64 để khớp runtime_platform. Task chạy 0,5 vCPU / 1 GB, desired count 1 trong public subnet có IP công khai. ALB listener chỉ forward khi header bí mật khớp, SG giới hạn CloudFront. Header sinh trong Terraform state, không chép vào báo cáo. Health check dùng /actuator/health.</p>

      ${codeSnippet('hcl', 'infra/modules/service/main.tf', `runtime_platform {
  operating_system_family = "LINUX"
  cpu_architecture       = "ARM64"
}`, LINKS.serviceTf)}

      <h3 class="report-h3">5.4.1-ecs-alb-step1</h3>
      ${figure("assets/images/workshop/5.4-deployment/ecs-alb-step1.png", "5.4.1-ecs-alb-step1", "ECS service nutrition-dev-backend: 2 task đang chạy, deployment Success")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Kiểm tra task RUNNING, target healthy và tag image. CloudFront → ALB dùng HTTP do chưa có domain; đây là hạn chế được chấp nhận, chưa có HTTPS origin.</p>

      <h3 class="report-h3">ECS Fargate và ALB</h3>
      ${figure("assets/images/workshop/5.4-deployment/ecs-alb-step2.png", "ECS Fargate và ALB", "Target group nutrition-dev-api: 2 target khỏe mạnh ở cổng 8080")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.serviceTf}" target="_blank">infra/modules/service/main.tf</a>.</p>
    </section>
  </div>
`;

const sec542 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.2. Frontend trên S3 và CloudFront</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Phân phối SPA và ảnh từ bucket riêng tư.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Build React theo workflow deploy. Module frontend dùng OAC SigV4 để CloudFront đọc S3. Function viết lại đường dẫn SPA sang index.html, không thay lỗi API bằng HTML. Behavior /api/* tắt cache, chuyển Authorization tới ALB. Bucket ảnh tách riêng để s3 sync --delete frontend không xóa ảnh.</p>

      ${codeSnippet('hcl', 'infra/modules/frontend/main.tf', `resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "\${var.name_prefix}-frontend"
  description                       = "CloudFront access to the frontend bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}`, LINKS.frontendTf)}

      <h3 class="report-h3">5.4.2-cloudfront-frontend-step1</h3>
      ${figure("assets/images/workshop/5.4-deployment/cloudfront-step1.png", "5.4.2-cloudfront-frontend-step1", "CloudFront behaviors: /images/* → S3 ảnh, /api/* → ALB (HTTPS only), mặc định → S3 frontend")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Mở route sâu của SPA và tải lại; kiểm tra API trả JSON và ảnh tải qua /images/*. Đối chiếu bucket chặn public.</p>

      <h3 class="report-h3">Frontend S3 và CloudFront</h3>
      ${figure("assets/images/workshop/5.4-deployment/cloudfront-step2.png", "Frontend S3 và CloudFront", "Bucket frontend: Block all public access = On, chỉ CloudFront đọc qua OAC")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Favicon không hiện trên trang thật vì CloudFront trả 403: bước build tắt thư mục public nên file icon không được tải lên S3. Đã sửa cấu hình Vite và thêm bước kiểm tra icon trong bản build production. Các sự cố khác xem 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.frontendTf}" target="_blank">infra/modules/frontend/main.tf</a>.</p>
    </section>
  </div>
`;

const sec543 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.3. CI/CD với GitHub Actions OIDC</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Kiểm tra và deploy mà không lưu access key dài hạn.</p>

      <h3 class="report-h3">1. Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">ci.yml chạy Terraform fmt/validate, backend verify và frontend checks. deploy.yml chạy trên master hoặc workflow_dispatch. Workflow xin GitHub một token OIDC rồi gọi AWS STS (sts:AssumeRoleWithWebIdentity) để đổi lấy quyền tạm thời của role nutrition-dev-github-deploy; trust policy chỉ chấp nhận token của nhánh master trong repo dự án, và quyền hết hạn sau khoảng 1 giờ nên GitHub không phải lưu access key. Sau đó workflow build image ARM64, đẩy tag SHA và latest vào ECR. Nếu ECS đang tắt thì chỉ đẩy image; up dùng latest. Frontend build, sync S3 và invalidate index.html. Điền repository variables theo infra/README.md.</p>

      ${codeSnippet('hcl', 'infra/modules/github-oidc/main.tf', `    variable = "token.actions.githubusercontent.com:sub"
    values   = ["\${var.github_subject_prefix}:ref:refs/heads/\${var.deploy_branch}"]
  }
}`, LINKS.githubOidcTf)}

      ${figure("assets/images/workshop/5.4-deployment/cicd-step1.png", "IAM role nutrition-dev-github-deploy", "IAM role nutrition-dev-github-deploy: chỉ tin GitHub OIDC cho nhánh master của repo dự án")}

      <h3 class="report-h3">2. Kiểm tra kết quả</h3>
      <p class="report-p">Đối chiếu workflow với một run thực tế của chủ repo; kiểm tra trust policy aud và immutable subject prefix cùng nhánh master.</p>

      <p class="report-p"><a href="https://aws-fcaj-report.vercel.app/images/workshop/step9-result.png" target="_blank"><strong>[CI/CD qua OIDC]</strong></a></p>
      ${figure("assets/images/workshop/5.4-deployment/cicd-step2.png", "CI/CD qua OIDC", "GitHub Actions: workflow Deploy to AWS dev chạy thành công (backend image, frontend, publish)")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">PR #36 sửa OIDC trust policy theo immutable subject. Đối chiếu github_subject_prefix trong module và cấu hình hiện tại của GitHub.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.githubOidcTf}" target="_blank">infra/modules/github-oidc/main.tf</a>.</p>
    </section>
  </div>
`;

const sec544 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.4. Thanh toán VNPAY sandbox</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Xác minh sandbox, phân quyền và các luồng demo.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Bật app bằng demo-infra.ps1 up -Vnpay theo runbook. VNPAY sandbox dùng HMAC-SHA512, IPN chỉ cập nhật đơn khi chữ ký và số tiền đúng. Return URL chỉ đọc. Đơn bỏ dở tự hủy sau 15 phút và trả kho đúng một lần. V10 ghi payment_events, API admin lọc/phân trang nhật ký; không lưu chữ ký hay thông tin bí mật. Chạy các kịch bản docs/demo.md, gồm fail-closed và COD.</p>

      ${codeSnippet('java', 'backend/src/main/java/com/nutrition/payments/VnpaySigner.java', `static String canonical(Map<String, String> params) {
  return new TreeMap<>(params)
      .entrySet().stream()
      .filter(e -> e.getValue() != null && !e.getValue().isEmpty())
      .filter(e -> !e.getKey().equals(HASH) && !e.getKey().equals(HASH_TYPE))
      .map(e -> encode(e.getKey()) + "=" + encode(e.getValue()))
      .collect(Collectors.joining("&"));
}`, LINKS.vnpaySigner)}

      ${codeSnippet('powershell', 'scripts/demo-infra.ps1', `.\\scripts\\demo-infra.ps1 up -Vnpay          # also enable VNPAY sandbox payments (D27)
.\\scripts\\demo-infra.ps1 up -Vnpay -Waf     # also put AWS WAF in front of CloudFront`, LINKS.demoInfraPs1)}

      <h3 class="report-h3">5.4.4-payments-step1</h3>
      ${figure("assets/images/workshop/5.4-deployment/payments-step1.png", "5.4.4-payments-step1", "Đơn #10 thanh toán qua VNPAY sandbox: Đã đặt, Đã thanh toán VNPAY")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Theo PROGRESS ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Lệnh nguồn trong CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 và npm run test:e2e. Cần ghi biên bản thử web đã đăng nhập, hồ sơ, gợi ý và VNPAY vì PROGRESS còn để bước này mở.</p>

      <div class="code-snippet-wrap" style="margin: 1.5rem 0;">
        <div class="code-snippet-header"><span class="code-filename">:::figure source reference (báo cáo nhóm)</span></div>
        <pre class="code-snippet-pre"><code class="language-text">:::figure{src="/images/workshop/step13-result.png" alt="Thanh toán và kiểm thử" caption="Trang admin Nhật ký thanh toán: IPN VNPAY sandbox của đơn #10 ghi nhận \"Đã thanh toán\""}</code></pre>
      </div>

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Sau khi thanh toán thử bằng thẻ NCB, đơn đứng ở trạng thái "Đang chờ VNPAY xác nhận": log ALB cho thấy VNPAY trả mã 00 về Return URL nhưng không gọi IPN. Nguyên nhân là tài khoản sandbox chưa đăng ký IPN URL; sau khi khai báo https://&lt;cloudfront&gt;/api/payments/vnpay/ipn với VNPAY, đơn #10 chuyển sang "Đã thanh toán" và nhật ký thanh toán ghi nhận IPN. Các sự cố khác xem 5.8 Kiểm thử và xử lý sự cố.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.vnpaySigner}" target="_blank">backend/src/main/java/com/nutrition/payments/VnpaySigner.java</a>.</p>
    </section>
  </div>
`;

const sec55 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5. AI tra cứu với Amazon Bedrock</h1>
      ${metaRow("1 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Cấu hình Bedrock tại Tokyo rồi kiểm tra tool, Guardrail và bộ prompt. Phần bonus bổ sung hồ sơ và gợi ý tính bằng code.</p>

      ${figure("assets/images/workshop/5.5-bedrock/bedrock-ai.png", "5.5 AI tra cứu với Amazon Bedrock", "Sơ đồ thành phần: ECS gọi Bedrock ở Tokyo qua Guardrails, số liệu lấy từ PostgreSQL")}
      <p class="report-p" style="margin-top: 0.5rem;">File draw.io để chỉnh sửa: <a href="https://aws-fcaj-report.vercel.app/vi/files/5.5-bedrock-ai.drawio" target="_blank"><strong>5.5-bedrock-ai.drawio</strong></a>.</p>

      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-1');">Bật Nova 2 Lite và Guardrails</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-2');">Đánh giá AI</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-3');">Gợi ý bữa ăn (Bonus)</a></li>
      </ul>
    </section>
  </div>
`;

const sec551 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.1. Bật Nova 2 Lite và Guardrails</h1>
      ${metaRow("2 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Gọi Nova 2 Lite và kiểm chứng độ an toàn theo bộ prompt.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">D18 đặt BEDROCK_REGION=ap-northeast-1, model amazon.nova-2-lite-v1:0, profile jp.amazon.nova-2-lite-v1:0. Guardrail cùng vùng. searchProducts là tool duy nhất; backend kiểm schema và truy vấn SQL tham số hóa. Intent search, facts, compare, plan dùng DB để ghép số liệu. D32 tính mục tiêu và gợi ý bằng code, không gửi dữ liệu cơ thể cho model. Quota chat 30 câu/ngày/người.</p>

      ${codeSnippet('hcl', 'infra/modules/guardrail/main.tf', `resource "aws_bedrock_guardrail" "chat" {
  # Must match the region the backend calls Bedrock in (BEDROCK_REGION, D18).
  region      = var.region
  name        = "\${var.name_prefix}-chat"
  description = "Food catalog search: no medical advice, no prompt attacks."

  blocked_input_messaging   = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."
  blocked_outputs_messaging = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."`, LINKS.guardrailTf)}

      <h3 class="report-h3">5.5.1-bedrock-guardrails-step1</h3>
      ${figure("assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png", "5.5.1-bedrock-guardrails-step1", "Guardrail nutrition-dev-chat ở Tokyo: chặn lời khuyên y tế và prompt attack")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Bộ prompts.json hiện có 45 câu. Ngày 21/11/2026: an toàn 17/17, tra cứu 27/28 (ngưỡng 85%), 7 câu P01–P07 đều đạt. L01 dao động vì model bỏ category, cần theo dõi. docs/ai-eval.md còn mô tả các lượt 30/38 câu trước đó; dùng PROGRESS.md và bộ prompt hiện hành để đối chiếu. Eval gọi model có phí, không thuộc CI.</p>

      <h3 class="report-h3">AI tra cứu và Guardrails</h3>
      ${figure("assets/images/workshop/5.5-bedrock/bedrock-quotas.png", "AI tra cứu và Guardrails", "Service Quotas: Nova 2 Lite cross-region 8.000.000 token mỗi phút")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Quota Singapore của tài khoản bằng 0. D18 chuyển sang Tokyo; theo dõi quota L-C6F5908D và L-210172B5. AccessDenied với Guardrail cần bedrock:ApplyGuardrail ở Tokyo trong policy và boundary.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.aiEvalMd}" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>
`;

const sec552 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.2. Đánh giá AI</h1>
      ${metaRow("2 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Gọi Nova 2 Lite và kiểm chứng độ an toàn theo bộ prompt.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      ${codeSnippet('powershell', 'docs/ai-eval.md', `$env:AWS_PROFILE = "nutrition-apply"
$env:BEDROCK_REGION = "ap-northeast-1"                 # D18: Tokyo
$env:BEDROCK_MODEL_ID = "amazon.nova-2-lite-v1:0"
$env:BEDROCK_INFERENCE_PROFILE_ID = "jp.amazon.nova-2-lite-v1:0"
$env:BEDROCK_GUARDRAIL_ID = "<terraform output bedrock_guardrail_id>"   # tùy chọn
$env:BEDROCK_GUARDRAIL_VERSION = "1"                                    # tùy chọn

cd backend
./mvnw.cmd test -Pbedrock-eval`, LINKS.aiEvalMd)}

      <h3 class="report-h3">5.5.2-ai-evaluation-step1</h3>
      ${figure("assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png", "5.5.2-ai-evaluation-step1", "Bộ đánh giá với model thật (-Pbedrock-eval): BUILD SUCCESS ngày 25/11/2026")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Bộ prompts.json hiện có 45 câu. Ngày 21/11/2026: an toàn 17/17, tra cứu 27/28 (ngưỡng 85%), 7 câu P01–P07 đều đạt. L01 dao động vì model bỏ category, cần theo dõi. docs/ai-eval.md còn mô tả các lượt 30/38 câu trước đó; dùng PROGRESS.md và bộ prompt hiện hành để đối chiếu. Eval gọi model có phí, không thuộc CI.</p>
      <p class="report-p">Theo PROGRESS ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Lệnh nguồn trong CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 và npm run test:e2e. Cần ghi biên bản thử web đã đăng nhập, hồ sơ, gợi ý và VNPAY vì PROGRESS còn để bước này mở.</p>

      <h3 class="report-h3">AI tra cứu và Guardrails</h3>
      ${figure("assets/images/workshop/5.5-bedrock/bedrock-quotas.png", "AI tra cứu và Guardrails", "Service Quotas: Nova 2 Lite cross-region 8.000.000 token mỗi phút")}

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Quota Singapore của tài khoản bằng 0. D18 chuyển sang Tokyo; theo dõi quota L-C6F5908D và L-210172B5. AccessDenied với Guardrail cần bedrock:ApplyGuardrail ở Tokyo trong policy và boundary.</p>
      <p class="report-p">Nguồn: <a href="${LINKS.infraReadme}" target="_blank">infra/README.md</a>, <a href="${LINKS.runbook}" target="_blank">docs/runbook.md</a>, docs/PROGRESS.md, <a href="${LINKS.aiEvalMd}" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>
`;

const sec553 = `
  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.3. Gợi ý bữa ăn (Bonus)</h1>
      ${metaRow("4 phút thời gian đọc")}
    </header>

    <section class="report-section">
      <p class="report-p">Kiểm tra hồ sơ và gợi ý bữa tính từ dữ liệu DB.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">D32 bổ sung hồ sơ và gợi ý bữa ăn. Backend lấy danh tính từ JWT sub. API GET/PUT/DELETE /api/me/profile lưu hồ sơ và sự đồng ý; GET /api/me/targets tính mục tiêu, GET /api/me/recommendations gợi ý bữa. Mifflin-St Jeor × hệ số vận động là phép tính trong code. Mục tiêu giảm −15%, giữ nguyên hoặc tăng cơ +10%, không thấp hơn năng lượng nghỉ. Tuổi ngoài 18–65, BMI ngoài 17–35, mang thai/cho con bú hoặc bệnh cần giám sát không nhận mục tiêu cá nhân.</p>

      ${codeSnippet('java', 'backend/src/main/java/com/nutrition/profile/RecommendationService.java', `public class RecommendationService {
  /** Share of the day's targets each meal aims for. */
  public enum Meal {
    BREAKFAST(0.25),
    LUNCH(0.375),
    DINNER(0.375);`, LINKS.recService)}

      <h3 class="report-h3">5.5.3-meal-recommendations-step1</h3>
      ${figure("assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png", "5.5.3-meal-recommendations-step1", "Gợi ý bữa trưa theo hồ sơ: số liệu tính từ DB, so với mục tiêu của bữa")}

      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Tạo hồ sơ với dữ liệu thử và sự đồng ý. Kiểm tra sửa/xóa, các trường hợp không đủ điều kiện và gợi ý gồm món protein, rau/trái cây, tinh bột. Chỉ dùng sản phẩm còn hàng, đủ dữ liệu; allergen được loại theo fail-closed. Số gram làm tròn 10 và số liệu tính lại từ DB. Intent plan gọi cùng bộ gợi ý; model chỉ chọn bữa và allergen, không nhận dữ liệu cơ thể. PROGRESS ngày 21/11/2026 ghi test tự động đã qua, nhưng thử web đã đăng nhập còn mở.</p>

      <p class="report-p">Biên bản thử trên web (25/11/2026, tài khoản khách, môi trường dev trên AWS):</p>

      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Bước</th>
            <th>Thao tác</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td>/profile: nhập năm sinh, giới tính, chiều cao, cân nặng, mức vận động, mục tiêu Tăng cơ; tích đồng ý rồi lưu</td>
            <td>Mục tiêu 2.700 kcal/ngày: protein 96 g, carbohydrate 377 g, chất béo 90 g. Năng lượng nghỉ 1.590 kcal, BMI 20. Trang hiện nhắc "không phải lời khuyên y tế"</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td>/suggestions → Bữa trưa</td>
            <td>Mục tiêu bữa 1.013 kcal · 36 g protein. Gợi ý: cá ngừ ngâm nước (hộp) 130 g – 111,8 kcal, 25,2 g protein; cải xoăn kale 150 g – 52,5 kcal, 4,4 g protein; đậu gà 200 g – 756 kcal, 41 g protein. Tổng 920,3 kcal (91% mục tiêu), protein 70,6 g (196%)</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td>Hỏi trợ lý AI: "Gợi ý bữa trưa cho tôi"</td>
            <td>AI trả về đúng ba món, đúng số gram và số liệu như trang Gợi ý, tổng 920,3 kcal (91%), kèm dòng "Số liệu tính từ dữ liệu cửa hàng và hồ sơ của bạn. Thông tin tham khảo, không phải tư vấn y tế"</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td>Trường hợp không đủ điều kiện (mang thai/cho con bú, bệnh cần giám sát, tuổi hoặc BMI ngoài ngưỡng)</td>
            <td>Kiểm bằng test tự động NutritionTargetsTest: hệ thống trả về lý do không đủ điều kiện và không tính mục tiêu cá nhân. Trên form, ô "Có bệnh cần chế độ ăn có giám sát" ghi rõ hệ thống sẽ khuyên gặp chuyên gia</td>
          </tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">Kết quả bước 3 chứng minh model không tự tính số: intent plan gọi cùng bộ gợi ý với trang web, mọi con số do backend lấy từ PostgreSQL và hồ sơ của người dùng.</p>

      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không phát sinh lỗi trong lần thử. Ghi nhận một điểm cần cải thiện: bộ gợi ý ưu tiên đủ năng lượng nên protein có thể vượt khá xa mục tiêu bữa (196% trong lần thử) khi món tinh bột giàu đạm như đậu gà được chọn; có thể giới hạn thêm theo protein ở phiên bản sau.</p>
    </section>
  </div>
`;

// 3. ASSEMBLE NEW getWorkshopViHtml
const newFunction = `function getWorkshopViHtml() {
  return \`
    <div class="tech-report">
      <!-- HEADER -->
      <header>
        <div class="report-eyebrow">Technical Workshop Guide</div>
        <h1 class="report-title">Workshop</h1>
        <p class="report-subtitle">Hướng dẫn thực hành kỹ thuật hoàn chỉnh: Nền tảng E-Commerce Dinh dưỡng Cá nhân hóa trên AWS.</p>
        <p class="report-intro">
          Workshop đi từ quyền truy cập và Terraform đến ứng dụng React, Spring Boot và PostgreSQL trên AWS. Môi trường dev chạy ở Singapore, chỉ lời gọi Bedrock và Guardrail ở Tokyo.
          Các bước dùng cấu hình và lệnh trong repo dự án. Minh chứng thực tế được bổ sung sau mỗi bước; số liệu kiểm thử và chi phí được ghi kèm kỳ đo.
        </p>
      </header>

      <!-- NAVIGATION TABS -->
      <nav class="ws-nav-tabs" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-overview' ? 'active' : ''}" data-step="ws-overview" onclick="switchWorkshopTab('ws-overview')">Tổng quan</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" data-step="ws-5-1" onclick="switchWorkshopTab('ws-5-1')">5.1 Giới thiệu</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" data-step="ws-5-2" onclick="switchWorkshopTab('ws-5-2')">5.2 Điều kiện chuẩn bị</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-3' || currentWorkshopStepId.startsWith('ws-5-3-') ? 'active' : ''}" data-step="ws-5-3" onclick="switchWorkshopTab('ws-5-3')">5.3 Hạ tầng cốt lõi</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-4' || currentWorkshopStepId.startsWith('ws-5-4-') ? 'active' : ''}" data-step="ws-5-4" onclick="switchWorkshopTab('ws-5-4')">5.4 Triển khai ứng dụng</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-5' || currentWorkshopStepId.startsWith('ws-5-5-') ? 'active' : ''}" data-step="ws-5-5" onclick="switchWorkshopTab('ws-5-5')">5.5 AI tra cứu Bedrock</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" data-step="ws-5-6" onclick="switchWorkshopTab('ws-5-6')">5.6 Giám sát & Chi phí</button>
        <button type="button" class="ws-tab-btn \${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" data-step="ws-5-7" onclick="switchWorkshopTab('ws-5-7')">5.7 Dọn tài nguyên</button>
      </nav>

      <!-- MODULE PANES -->
      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-overview' ? 'active' : ''}" id="pane-ws-overview">
        ${secOverview}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">5.1 Giới thiệu →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">
        ${sec51}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-overview')">← Tổng quan</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">5.2 Điều kiện chuẩn bị →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">
        ${sec52}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">← 5.1 Giới thiệu</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">5.3 Hạ tầng cốt lõi →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">
        ${sec53}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">← 5.2 Điều kiện chuẩn bị</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">5.3.1 Tạo mạng VPC →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-1' ? 'active' : ''}" id="pane-ws-5-3-1">
        ${sec531}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">← 5.3 Hạ tầng cốt lõi</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">5.3.2 Tạo cơ sở dữ liệu RDS →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-2' ? 'active' : ''}" id="pane-ws-5-3-2">
        ${sec532}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">← 5.3.1 Tạo mạng VPC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">5.3.3 Cấu hình Cognito →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-3' ? 'active' : ''}" id="pane-ws-5-3-3">
        ${sec533}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">← 5.3.2 Tạo cơ sở dữ liệu RDS</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">5.4 Triển khai ứng dụng →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">
        ${sec54}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">← 5.3.3 Cấu hình Cognito</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">5.4.1 ECS Fargate và ALB →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-1' ? 'active' : ''}" id="pane-ws-5-4-1">
        ${sec541}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">← 5.4 Triển khai ứng dụng</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">5.4.2 Frontend trên S3 và CloudFront →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-2' ? 'active' : ''}" id="pane-ws-5-4-2">
        ${sec542}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">← 5.4.1 ECS Fargate và ALB</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">5.4.3 CI/CD với GitHub Actions OIDC →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-3' ? 'active' : ''}" id="pane-ws-5-4-3">
        ${sec543}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">← 5.4.2 Frontend trên S3 và CloudFront</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">5.4.4 Thanh toán VNPAY sandbox →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-4' ? 'active' : ''}" id="pane-ws-5-4-4">
        ${sec544}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">← 5.4.3 CI/CD với GitHub Actions OIDC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">5.5 AI tra cứu Bedrock →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">
        ${sec55}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">← 5.4.4 Thanh toán VNPAY sandbox</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">5.5.1 Bật Nova 2 Lite và Guardrails →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-1' ? 'active' : ''}" id="pane-ws-5-5-1">
        ${sec551}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">← 5.5 AI tra cứu Bedrock</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">5.5.2 Đánh giá AI →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-2' ? 'active' : ''}" id="pane-ws-5-5-2">
        ${sec552}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">← 5.5.1 Bật Nova 2 Lite và Guardrails</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-3')">5.5.3 Gợi ý bữa ăn (Bonus) →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-3' ? 'active' : ''}" id="pane-ws-5-5-3">
        ${sec553}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">← 5.5.2 Đánh giá AI</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6')">5.6 Giám sát & Chi phí →</button>
        </div>
      </div>

      
  fs.writeFileSync('generated_panes_raw.html', 
    `${secOverview}
    <!-- SPLIT -->
    ${sec51}
    <!-- SPLIT -->
    ${sec52}
    <!-- SPLIT -->
    ${sec53}
    <!-- SPLIT -->
    ${sec531}
    <!-- SPLIT -->
    ${sec532}
    <!-- SPLIT -->
    ${sec533}
    <!-- SPLIT -->
    ${sec54}
    <!-- SPLIT -->
    ${sec541}
    <!-- SPLIT -->
    ${sec542}
    <!-- SPLIT -->
    ${sec543}
    <!-- SPLIT -->
    ${sec544}
    <!-- SPLIT -->
    ${sec55}
    <!-- SPLIT -->
    ${sec551}
    <!-- SPLIT -->
    ${sec552}
    <!-- SPLIT -->
    ${sec553}`, 'utf8');
  console.log("SUCCESS: Raw panes generated.");
