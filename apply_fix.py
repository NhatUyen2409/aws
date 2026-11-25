import os

dir_path = r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj"
update_js_path = os.path.join(dir_path, "update_aws_workshop.js")

with open(update_js_path, "r", encoding="utf-8") as f:
    code = f.read()

# Replace any occurrence of \${var. or \\${var. with \\\${var.
code = code.replace(r'"\${var.name_prefix}-frontend"', r'"\\\${var.name_prefix}-frontend"')
code = code.replace(r'"\\${var.name_prefix}-frontend"', r'"\\\${var.name_prefix}-frontend"')
code = code.replace(r'"\${var.name_prefix}-chat"', r'"\\\${var.name_prefix}-chat"')
code = code.replace(r'"\\${var.name_prefix}-chat"', r'"\\\${var.name_prefix}-chat"')
code = code.replace(r'"\${var.github_subject_prefix}:ref:refs/heads/\${var.deploy_branch}"', r'"\\\${var.github_subject_prefix}:ref:refs/heads/\\\${var.deploy_branch}"')
code = code.replace(r'"\\${var.github_subject_prefix}:ref:refs/heads/\\${var.deploy_branch}"', r'"\\\${var.github_subject_prefix}:ref:refs/heads/\\\${var.deploy_branch}"')

cut_marker = "// 3. ASSEMBLE NEW getWorkshopViHtml"
cut_idx = code.find(cut_marker)
if cut_idx == -1:
    raise Exception("Could not find cut_marker")

prefix = code[:cut_idx]

clean_assembly = r"""// 3. ASSEMBLE NEW getWorkshopViHtml (SECTIONS 5.1 TO 5.5.3 ONLY)
const newPanesContent = `<!-- HEADER -->
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
      
      `;

const wsViStart = appJs.indexOf('function getWorkshopViHtml() {');
const headerStart = appJs.indexOf('<!-- HEADER -->', wsViStart);
const m56Start = appJs.indexOf('<!-- MODULE 5.6 -->', wsViStart);

if (headerStart === -1 || m56Start === -1) {
  throw new Error("Could not find markers in app.js");
}

const updatedAppJs = appJs.substring(0, headerStart) + newPanesContent + appJs.substring(m56Start);
fs.writeFileSync(appJsPath, updatedAppJs, 'utf8');

console.log("[SUCCESS] app.js updated cleanly without touching 5.6 or 5.7!");
"""

with open(update_js_path, "w", encoding="utf-8") as f:
    f.write(prefix + clean_assembly)

print("update_aws_workshop.js rewritten successfully.")
