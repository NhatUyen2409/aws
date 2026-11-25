const fs = require('fs');

// Read update_aws_workshop.js
const fullScript = fs.readFileSync('update_aws_workshop.js', 'utf8');

// We want lines 1 to 906.
// Let's find where pane-ws-5-5-3 ends
const end553Marker = "id=\"pane-ws-5-5-3\">";
const end553Idx = fullScript.indexOf(end553Marker);
if (end553Idx === -1) {
  console.error("Could not find end553Marker");
  process.exit(1);
}

// Find the closing </div> of pane-ws-5-5-3
const endPaneMarker = "<!-- EXISTING MODULE 5.6 (UNTOUCHED) -->";
const endPaneIdx = fullScript.indexOf(endPaneMarker);
if (endPaneIdx === -1) {
  console.error("Could not find endPaneMarker");
  process.exit(1);
}

// Extract up to endPaneIdx
// But wait! in update_aws_workshop.js, newFunction starts at line 753:
// const newFunction = `function getWorkshopViHtml() {\n  return \`\n    <div class="tech-report">\n      <!-- HEADER -->...
// We can define a runner script that evaluates the sections and exports the HTML directly!

// Let's create export_chunk_script.js:
// Take code from line 1 to line 751 (where sec553 ends)
const secDefs = fullScript.substring(0, fullScript.indexOf('// 3. ASSEMBLE NEW getWorkshopViHtml'));

// Now add code to build chunk and write to chunk.txt
const runner = secDefs + `

const headerAndNav = \`      <!-- HEADER -->
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
        \${secOverview}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">5.1 Giới thiệu →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">
        \${sec51}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-overview')">← Tổng quan</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">5.2 Điều kiện chuẩn bị →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">
        \${sec52}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">← 5.1 Giới thiệu</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">5.3 Hạ tầng cốt lõi →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">
        \${sec53}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">← 5.2 Điều kiện chuẩn bị</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">5.3.1 Tạo mạng VPC →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-1' ? 'active' : ''}" id="pane-ws-5-3-1">
        \${sec531}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">← 5.3 Hạ tầng cốt lõi</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">5.3.2 Tạo cơ sở dữ liệu RDS →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-2' ? 'active' : ''}" id="pane-ws-5-3-2">
        \${sec532}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">← 5.3.1 Tạo mạng VPC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">5.3.3 Cấu hình Cognito →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-3-3' ? 'active' : ''}" id="pane-ws-5-3-3">
        \${sec533}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">← 5.3.2 Tạo cơ sở dữ liệu RDS</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">5.4 Triển khai ứng dụng →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">
        \${sec54}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">← 5.3.3 Cấu hình Cognito</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">5.4.1 ECS Fargate và ALB →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-1' ? 'active' : ''}" id="pane-ws-5-4-1">
        \${sec541}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">← 5.4 Triển khai ứng dụng</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">5.4.2 Frontend trên S3 và CloudFront →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-2' ? 'active' : ''}" id="pane-ws-5-4-2">
        \${sec542}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">← 5.4.1 ECS Fargate và ALB</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">5.4.3 CI/CD với GitHub Actions OIDC →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-3' ? 'active' : ''}" id="pane-ws-5-4-3">
        \${sec543}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">← 5.4.2 Frontend trên S3 và CloudFront</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">5.4.4 Thanh toán VNPAY sandbox →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-4-4' ? 'active' : ''}" id="pane-ws-5-4-4">
        \${sec544}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">← 5.4.3 CI/CD với GitHub Actions OIDC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">5.5 AI tra cứu Bedrock →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">
        \${sec55}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">← 5.4.4 Thanh toán VNPAY sandbox</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">5.5.1 Bật Nova 2 Lite và Guardrails →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-1' ? 'active' : ''}" id="pane-ws-5-5-1">
        \${sec551}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">← 5.5 AI tra cứu Bedrock</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">5.5.2 Đánh giá AI →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-2' ? 'active' : ''}" id="pane-ws-5-5-2">
        \${sec552}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">← 5.5.1 Bật Nova 2 Lite và Guardrails</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-3')">5.5.3 Gợi ý bữa ăn (Bonus) →</button>
        </div>
      </div>

      <div class="ws-module-pane \${currentWorkshopStepId === 'ws-5-5-3' ? 'active' : ''}" id="pane-ws-5-5-3">
        \${sec553}
        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">← 5.5.2 Đánh giá AI</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6')">5.6 Giám sát & Chi phí →</button>
        </div>
      </div>\n\n      `;

fs.writeFileSync('workshop_chunk_raw.html', headerAndNav, 'utf8');
console.log('SUCCESS: Raw chunk generated successfully!');
`;

fs.writeFileSync('generate_chunk_runner.js', runner, 'utf8');
console.log('generate_chunk_runner.js created.');
