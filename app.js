
/**
 * AWS FIRST CLOUD AI JOURNEY (FCAJ) - INTERNSHIP REPORT SCRIPT
 * Comprehensive Bilingual System (Vietnamese / English)
 * Pure language switching with zero mixed bilingual text
 * Student: Phan Nhat Uyen
 */

// ==========================================
// 1. I18N DICTIONARY (VIETNAMESE & ENGLISH)
// ==========================================
const I18N_DICTIONARY = {
  vi: {
    brandName: "Báo cáo thực tập",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Tìm kiếm nội dung báo cáo...",
    reportContentTitle: "NỘI DUNG BÁO CÁO",
    externalLinksTitle: "LIÊN KẾT NGOÀI",

    // Nav items
    navStudentInfo: "Thông tin sinh viên",
    navWorklog: "Nhật ký công việc",
    navProposal: "Đề xuất đồ án",
    navBlogs: "Bài viết Blog",
    navEvents: "Sự kiện tham gia",
    navWorkshop: "Bài thực hành Workshop",
    navSelfAssessment: "Tự đánh giá",
    navFeedback: "Chia sẻ & Góp ý",
    navSettings: "Xuất & In báo cáo",

    // Sidebar profile
    sidebarCompany: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
    sidebarViewProfile: "Xem thông tin chi tiết",

    // Header
    btnPrintPdf: "In / Xuất PDF",
    btnAddWorklog: "+ Thêm Worklog",
    greeting: "Xin chào",
    greetingMorning: "Chào buổi sáng",
    greetingAfternoon: "Chào buổi chiều",
    greetingEvening: "Chào buổi tối",
    modalDayPlaceholder: "VD: Thứ Hai hoặc Thứ 2 - Thứ 4",
    modalDescPlaceholder: "Mô tả công việc hoặc đầu mục chi tiết...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",

    // Page titles (Header)
    title_thong_tin: "Thông tin sinh viên & Báo cáo",
    title_worklog: "1. Nhật ký công việc (12 Tuần)",
    title_proposal: "2. Đề xuất đồ án thực tập",
    title_blogs_posted: "3. Bài viết kỹ thuật đã đăng",
    title_blogs_s3_express_one_zone: "3. Bài viết kỹ thuật – Amazon S3 Express One Zone",
    title_blogs_aws_event_driven_architecture: "3. Bài viết kỹ thuật – AWS Event-Driven Architecture",
    title_blogs_aws_ec2_identity_containment: "3. Bài viết kỹ thuật – EC2 Identity Containment",
    title_events: "4. Sự kiện đã tham gia",
    title_workshop: "5. Bài thực hành kỹ thuật",
    title_self_evaluation: "6. Tự đánh giá kết quả thực tập",
    title_feedback: "7. Chia sẻ & Đóng góp ý kiến",
    title_cai_dat: "Cài đặt & Quản lý dữ liệu",

    // Student info section
    infoNotice: "Ghi chú quan trọng: Báo cáo thực tập tốt nghiệp này được xây dựng chuẩn theo khung cấu trúc yêu cầu của chương trình First Cloud AI Journey (FCAJ) thuộc Amazon Web Services (AWS) Việt Nam. Toàn bộ nội dung bên dưới có thể tự do chỉnh sửa và lưu trữ trực tiếp.",
    infoCardTitle: "Thông tin sinh viên thực tập",
    infoCardSubtitle: "Hồ sơ thực tập chính thức tại AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Chính thức • AWS FCAJ",
    photoBoxTitle: "Ảnh thẻ / Cá nhân",
    photoBoxHint: "Bấm để tải ảnh",
    photoChangeText: "Thay đổi ảnh",
    photoFitCover: "Cắt vừa",
    photoFitFull: "Nguyên ảnh",
    photoViewHd: "Xem HD",
    hdModalTitle: "Ảnh cá nhân (Độ nét cao)",
    hdModalDesc: "Ảnh được giữ nguyên độ phân giải gốc cao nhất, không bị mờ nhòe hay vỡ hạt.",
    btnModalClose: "Đóng",
    btnUploadPhoto: "Tải ảnh lên",
    btnRemovePhoto: "Gỡ ảnh",
    photoFormatNote: "PNG, JPG, WEBP (Ảnh nét < 10MB)",
    toastPhotoUpdated: "Đã cập nhật ảnh cá nhân với độ nét tối ưu!",
    toastPhotoRemoved: "Đã gỡ ảnh cá nhân!",
    toastPhotoError: "Không thể xử lý ảnh, vui lòng thử lại tệp ảnh khác!",
    toastPhotoSizeLimit: "Dung lượng ảnh tối đa 10MB!",
    toastPhotoInvalidType: "Vui lòng chọn tệp hình ảnh hợp lệ!",
    toastFitCover: "Đã chuyển sang chế độ Cắt vừa khung (Cover)!",
    toastFitContain: "Đã chuyển sang chế độ Hiển thị nguyên ảnh (không bị cắt/vỡ nét)!",
    labelFullName: "Họ và tên",
    labelStudentId: "Mã số sinh viên",
    labelPhone: "Số điện thoại",
    labelEmail: "Email",
    labelUniversity: "Trường Đại học",
    labelMajor: "Chuyên ngành",
    labelClass: "Lớp / Khóa",
    labelCompany: "Đơn vị thực tập",
    labelPosition: "Chương trình thực tập",
    labelDuration: "Thời gian thực tập",
    btnSaveInfo: "Lưu cập nhật thông tin",

    // TOC
    tocTitle: "Cấu trúc các mục báo cáo",
    tocSubtitle: "Nhấp vào từng mục để xem báo cáo chi tiết:",
    toc1Title: "1. Nhật ký công việc",
    toc1Desc: "Nhật ký chi tiết 12 tuần thực tập (Mục tiêu, Bảng phân công công việc, Kết quả đạt được).",
    toc2Title: "2. Đề xuất đồ án",
    toc2Desc: "Đề xuất đồ án: IoT Weather Platform - Giải pháp AWS Serverless Real-Time Monitoring.",
    toc3Title: "3. Bài viết kỹ thuật",
    toc3Desc: "Các bài viết kỹ thuật đã đăng tải trên AWS Study Group (S3 Express One Zone, Event-Driven Architecture, EC2 Identity Containment).",
    zoomDiagramTooltip: "Nhấp để xem ảnh kiến trúc độ nét cao (HD)",
    btnExpandSnippet: "Đọc tiếp nội dung đầy đủ ▼",
    btnCollapseSnippet: "Thu gọn bài viết ▲",
    diagModalTitle: "Sơ đồ kiến trúc (Độ nét cao)",
    diagModalDesc: "Sơ đồ so sánh kiến trúc giữa Amazon S3 Standard và Amazon S3 Express One Zone trong luồng xử lý AI/ML.",
    btnOpenTab: "Mở ảnh trong tab mới ↗",
    toc4Title: "4. Sự kiện tham gia",
    toc4Desc: "Báo cáo tham dự các sự kiện công nghệ AWS thực tế: Modernization Workshop tại Bitexco, Voice AI Meetup và Enterprise AI trên AWS Cloud.",
    toc5Title: "5. Bài thực hành Workshop",
    toc5Desc: "Bài thực hành chuyên sâu: Truy cập Amazon S3 an toàn từ môi trường hybrid qua Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Tự đánh giá",
    toc6Desc: "Bảng 12 tiêu chí tự đánh giá năng lực cá nhân và các điểm cần tiếp tục hoàn thiện.",
    toc7Title: "7. Chia sẻ & Góp ý",
    toc7Desc: "Đánh giá 6 khía cạnh môi trường làm việc, sự hỗ trợ từ Mentor, cơ hội phát triển tại FCAJ.",

    // 1. Worklog
    worklogSectionTitle: "1. Nhật ký 12 tuần thực tập",
    worklogSectionSubtitle: "Ghi lại mục tiêu, nhiệm vụ từng ngày và kết quả đạt được qua từng tuần",
    btnAddTaskThisWeek: "+ Thêm công việc vào tuần này",
    weekPrefix: "Tuần",
    weekHeadingPrefix: "Nhật ký Tuần",
    bootcampSubtitle: "Chương trình đào tạo First Cloud AI Journey",
    btnEditWeekMeta: "Sửa mục tiêu & thành tích",
    metaObjectivesTitle: "Mục tiêu tuần",
    metaAchievementsTitle: "Thành tích đạt được",
    tasksTableTitle: "Nội dung công việc thực hiện trong tuần",
    thDay: "Thứ",
    thTaskDesc: "Nội dung công việc",
    thStartDate: "Ngày bắt đầu",
    thEndDate: "Ngày hoàn thành",
    thRef: "Tài liệu tham khảo",
    thActions: "Thao tác",
    viewRefLink: "Xem tài liệu ↗",
    btnDelete: "Xóa",
    btnEdit: "Sửa",
    btnClearWeek: "Đặt lại tuần này",
    worklogToolsLabel: "Thao tác nhanh:",
    btnExportWorklog: "Xuất JSON",
    btnImportWorklog: "Nhập JSON",
    modalMetaTitle: "Chỉnh sửa Mục tiêu & Thành tích",
    modalMetaObjectivesLabel: "Mục tiêu trọng tâm tuần",
    modalMetaObjectivesPlaceholder: "Nhập mục tiêu trọng tâm trong tuần...",
    modalMetaAchievementsLabel: "Thành tích đạt được (mỗi ý một dòng, gạch đầu dòng -)",
    modalMetaAchievementsPlaceholder: "- Hoàn thành nhiệm vụ...\n- Nắm vững kiến thức...",
    btnModalSaveMeta: "Lưu mục tiêu & thành tích",
    modalEditTaskTitle: "Chỉnh sửa công việc",
    btnUpdateTask: "Cập nhật công việc",
    toastUpdateTaskSuccess: "✓ Đã cập nhật công việc thành công!",
    toastSaveMetaSuccess: "✓ Đã lưu mục tiêu & thành tích tuần thành công!",
    toastResetWeekSuccess: "✓ Đã đặt lại nội dung tuần này thành trang trắng!",
    confirmResetWeek: "Bạn có chắc chắn muốn xóa toàn bộ công việc và mục tiêu của tuần này để tự viết lại từ đầu?",
    toastExportSuccess: "✓ Đã tải xuống file sao lưu Worklog JSON thành công!",
    toastImportSuccess: "✓ Đã nhập dữ liệu Worklog thành công!",
    emptyObjectivesMsg: "Chưa có mục tiêu tuần. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyAchievementsMsg: "Chưa có thành tích đạt được. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyTasksMsg: "Chưa có đầu việc nào được ghi cho tuần này. Bấm nút \"+ Thêm công việc vào tuần này\" để thêm!",

    // 2. Proposal
    proposalSectionTitle: "2. Đề xuất đồ án thực tập",
    proposalSectionSubtitle: "Giải pháp AWS Serverless toàn diện cho giám sát thời tiết thời gian thực",
    btnSaveProposal: "Lưu đề xuất đồ án",
    proposalNotice: "Đề tài nghiên cứu: Nền tảng quan trắc thời tiết IoT cho phòng thí nghiệm - Giải pháp AWS Serverless Real-Time Monitoring sử dụng AWS IoT Core, Lambda, S3 Data Lake, AWS Glue và Amplify Next.js.",
    prop1Heading: "1. Tóm tắt điều hành",
    prop2Heading: "2. Đặt vấn đề & Giải pháp",
    propProblemLabel: "Thách thức hiện tại",
    propSolutionLabel: "Giải pháp & Lợi ích mang lại",
    prop3Heading: "3. Kiến trúc giải pháp & Dịch vụ AWS sử dụng",
    prop4Heading: "4. Dự toán chi phí hạ tầng AWS hàng tháng",

    // 3. Blogs
    blogsSectionTitle: "3. Các bài viết kỹ thuật đã đăng",
    blogsSectionSubtitle: "Chia sẻ kiến thức chuyên sâu trên cộng đồng AWS Study Group",
    btnAddBlog: "+ Viết bài blog mới",
    readArticleLink: "Xem bài viết ↗",
    publishedDateLabel: "Ngày đăng:",

    // 4. Events
    eventsSectionTitle: "4. Sự kiện thực tế đã tham gia",
    eventsSectionSubtitle: "Tham gia các buổi hội thảo công nghệ AWS chuyên sâu",
    btnAddEvent: "+ Thêm sự kiện mới",
    eventBadge: "Hội thảo công nghệ",
    eventRoleLabel: "Vai trò:",
    eventSpeakersLabel: "Diễn giả:",
    eventHighlightsLabel: "Nội dung trọng tâm & Bài học rút ra:",
    btnDeleteEvent: "Xóa sự kiện",
    btnViewFullReport: "Xem báo cáo chi tiết →",
    btnBackToEvents: "← Quay lại danh sách sự kiện",
    eventsBreadcrumb: "4. Sự kiện thực tế đã tham gia",
    eventReportBadge: "Báo cáo thu hoạch sự kiện",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Đã tải báo cáo Session 1 Voice AI",

    // 5. Workshop
    workshopSectionTitle: "5. Bài thực hành: Truy cập S3 an toàn qua VPC Endpoints",
    workshopSectionSubtitle: "Bài thực hành chuyên sâu về AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "In nội dung Workshop",
    wsTabOverview: "5.1 Tổng quan",
    wsTabPrereq: "5.2 Điều kiện tiên quyết",
    wsTabVpc: "5.3 Truy cập S3 từ VPC",
    wsTabOnPrem: "5.4 Truy cập từ On-Premises",
    wsTabPolicy: "5.5 Chính sách Endpoint",
    wsTabCleanup: "5.6 Dọn dẹp tài nguyên",

    wsOverviewTitle: "5.1 Tổng quan & Kiến trúc bài thực hành",
    wsOverviewDesc: "AWS PrivateLink cung cấp kết nối riêng tư an toàn tới các dịch vụ AWS từ VPC và mạng On-premises nội bộ mà không cần đưa lưu lượng truy cập qua Internet công cộng.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Sử dụng cho tài nguyên bên trong VPC truy cập vào Amazon S3 và Amazon DynamoDB. Định tuyến lưu lượng thông qua Route Table mà không phát sinh thêm chi phí theo giờ.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Được cấp phát Elastic Network Interface (ENI) với địa chỉ IP riêng trong Subnet của bạn. Hỗ trợ truy cập cả từ VPC lẫn mạng On-premises thông qua AWS Site-to-Site VPN hoặc Direct Connect.",

    wsPrereqTitle: "5.2 Điều kiện tiên quyết & Chính sách IAM",
    wsPrereqDesc: "Chính sách IAM quyền tối thiểu để khởi tạo tài nguyên CloudFormation và Transit Gateway:",

    wsVpcTitle: "5.3 Truy cập S3 từ VPC (Gateway Endpoint)",
    wsVpcDesc: "Các bước thực hiện tạo Gateway Endpoint và kiểm thử kết nối riêng tư:",
    wsVpcStep1: "Vào VPC Console > Endpoints > Chọn Create Endpoint.",
    wsVpcStep2: "Chọn Service: com.amazonaws.us-east-1.s3 dạng Gateway.",
    wsVpcStep3: "Gắn Route Table của VPC Cloud để tự động cập nhật route prefix S3.",
    wsVpcStep4: "Kiểm tra lệnh từ EC2 instance:",

    wsOnpremTitle: "5.4 Truy cập S3 từ On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Mô phỏng môi trường On-Premises kết nối qua strongSwan VPN và cấu hình Route 53 Resolver Rule:",

    wsPolicyTitle: "5.5 Chính sách VPC Endpoint (Kiểm soát quyền truy cập)",
    wsPolicyDesc: "Chính sách giới hạn chỉ cho phép truy cập vào duy nhất bucket yourbucketname-2:",

    wsCleanupTitle: "5.6 Dọn dẹp tài nguyên (Tối ưu chi phí)",
    wsCleanupStep1: "Xóa Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Hủy liên kết Route 53 Resolver Rule myS3Rule khỏi VPC On-prem.",
    wsCleanupStep3: "Xóa 2 CloudFormation Stacks: PLOnpremSetup và PLCloudSetup.",
    wsCleanupStep4: "Empty và Delete các S3 buckets đã tạo trong bài lab.",

    // 6. Self-assessment
    selfSectionTitle: "6. Tự đánh giá kết quả thực tập",
    selfSectionSubtitle: "Bảng 12 tiêu chí đánh giá năng lực của sinh viên Phan Nhật Uyên",
    btnSaveAssessment: "Lưu tự đánh giá",
    assessNarrativeLabel: "Tóm tắt quá trình rèn luyện & công tác",
    criteriaTableTitle: "Bảng đánh giá theo 12 tiêu chí chuẩn của AWS FCAJ",
    thCriteriaNo: "STT",
    thCriteriaName: "Tiêu chí đánh giá",
    thCriteriaDesc: "Mô tả chi tiết",
    thGood: "Tốt",
    thFair: "Khá",
    thAvg: "Trung bình",
    needsImprovementLabel: "Các điểm cần tiếp tục hoàn thiện",

    // 7. Feedback
    feedbackSectionTitle: "7. Chia sẻ & Đóng góp ý kiến",
    feedbackSectionSubtitle: "Đóng góp ý kiến cải tiến cho chương trình First Cloud AI Journey",
    btnSaveFeedback: "Lưu ý kiến đóng góp",
    fb1Label: "1. Môi trường làm việc",
    fb2Label: "2. Sự hỗ trợ từ Mentor & Ban tổ chức",
    fb3Label: "3. Mức độ phù hợp với ngành học",
    fb4Label: "4. Cơ hội học tập & Phát triển kỹ năng",
    fb5Label: "5. Văn hóa công ty & Tinh thần đồng đội",
    fb6Label: "6. Chính sách & Chế độ đãi ngộ",
    fbSuggestionsLabel: "Đề xuất & Kỳ vọng phát triển tương lai",

    // Settings
    settingsSectionTitle: "Xuất dữ liệu & In báo cáo",
    settingsSectionSubtitle: "Xuất toàn bộ báo cáo thực tập thành file JSON hoặc in sang định dạng PDF",
    settingsCardTitle: "Xuất dữ liệu & In báo cáo",
    settingsCardDesc: "Toàn bộ dữ liệu báo cáo thực tập (12 tuần worklog, proposal, bài viết kỹ thuật, sự kiện, workshop, đánh giá) đã được hoàn thiện. Bạn có thể tải file dữ liệu JSON hoặc in báo cáo:",
    btnExportJson: "Tải file sao lưu (worklog-fcaj-backup.json)",
    btnPrintReport: "In báo cáo (Print / PDF)",
    btnImportJson: "Khôi phục từ file JSON",
    btnResetData: "Đặt lại mẫu báo cáo chuẩn FCAJ",

    // Modal
    modalTitle: "+ Thêm nhiệm vụ vào Worklog",
    modalWeekSelectLabel: "Chọn tuần áp dụng",
    modalDayLabel: "Thứ trong tuần",
    modalTaskDescLabel: "Nội dung nhiệm vụ",
    modalStartLabel: "Ngày bắt đầu",
    modalEndLabel: "Ngày hoàn thành",
    modalRefLabel: "Tài liệu tham khảo (URL hoặc ghi chú)",
    btnModalCancel: "Hủy bỏ",
    btnModalSave: "Lưu công việc",

    // Alerts and prompts
    toastSaveInfo: "Đã lưu thông tin sinh viên thành công!",
    toastSaveProposal: "Đã lưu nội dung Proposal thành công!",
    toastAddBlog: "Đã thêm bài blog mới!",
    toastDeleteBlog: "Đã xóa bài blog.",
    toastAddEvent: "Đã thêm sự kiện mới!",
    toastDeleteEvent: "Đã xóa sự kiện.",
    toastSaveAssessment: "Đã lưu kết quả tự đánh giá 12 tiêu chí!",
    toastSaveFeedback: "Đã lưu ý kiến đóng góp cho chương trình FCAJ!",
    toastExportJson: "Đã xuất file sao lưu dữ liệu JSON thành công!",
    toastImportSuccess: "Khôi phục dữ liệu thành công!",
    toastImportError: "Lỗi đọc file JSON!",
    toastResetSuccess: "Đã khôi phục dữ liệu chuẩn FCAJ!",
    toastAddTaskSuccess: "Đã thêm công việc vào tuần",
    toastDeleteTask: "Đã xóa công việc.",
    toastLangSwitch: "Đã chuyển sang Tiếng Việt",
    confirmReset: "CẢNH BÁO: Đặt lại toàn bộ dữ liệu mẫu ban đầu theo chuẩn AWS FCAJ?",
    confirmDeleteTask: "Bạn có chắc muốn xóa công việc này?",
    confirmDeleteBlog: "Xóa bài blog này khỏi danh sách?",
    confirmDeleteEvent: "Xóa sự kiện này khỏi báo cáo?",
    pageTitleDoc: "Báo cáo thực tập :: Phan Nhật Uyên - AWS First Cloud AI Journey",

    // Static tooltips, image alt text & modals
    photoFrameTooltip: "Bấm để xem ảnh phóng to độ nét cao",
    photoFitTooltip: "Đổi chế độ: Cắt vừa (Cover) / Hiển thị toàn ảnh không bị vỡ (Contain)",
    photoViewHdTooltip: "Xem ảnh kích thước lớn độ nét cao",
    photoAlt: "Ảnh thẻ sinh viên Phan Nhật Uyên",
    photoHdAlt: "Ảnh cá nhân HD",
    diagModalAlt: "Sơ đồ kiến trúc HD",
    exportModalTitle: "Dữ liệu sao lưu Worklog (JSON)",
    exportModalDesc: "Dưới đây là toàn bộ nội dung 12 tuần bạn đã viết trên trình duyệt. Bạn có thể sao chép đoạn mã này để lưu trữ hoặc gửi vào chat để được cập nhật vĩnh viễn vào mã nguồn GitHub:",
    btnCopyClipboard: "Sao chép vào bộ nhớ tạm",
    toastCopyJsonFull: "✓ Đã sao chép toàn bộ mã JSON vào bộ nhớ tạm!",
    toastCopyJsonShort: "✓ Đã sao chép!",
    reportUnavailable: "Báo cáo chưa khả dụng",
    btnBackToEventsShort: "Quay lại sự kiện",
    wsOnpremCmt1: "# Kiểm tra phân giải DNS nội bộ từ On-Premises",
    wsOnpremCmt2: "# Tải file qua Interface Endpoint riêng tư",
    minutesUnit: "phút",
    viewPostOnCommunity: "Xem bài viết trên cộng đồng AWS Study Group VN"
  },

  en: {
    brandName: "Internship Report",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Search report content...",
    reportContentTitle: "REPORT CONTENT",
    externalLinksTitle: "EXTERNAL LINKS",

    // Nav items
    navStudentInfo: "Student Information",
    navWorklog: "Worklog",
    navProposal: "Proposal",
    navBlogs: "Blogs Posted",
    navEvents: "Events Participated",
    navWorkshop: "Workshop",
    navSelfAssessment: "Self-Assessment",
    navFeedback: "Sharing and Feedback",
    navSettings: "Export & Print",

    // Sidebar profile
    sidebarCompany: "Amazon Web Services (AWS) Vietnam Company Limited",
    sidebarViewProfile: "View detailed profile",

    // Header
    btnPrintPdf: "Print / Export PDF",
    btnAddWorklog: "+ Add Worklog",
    greeting: "Hello",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    modalDayPlaceholder: "e.g. Monday or Mon - Wed",
    modalDescPlaceholder: "Detailed task description or deliverable...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",

    // Page titles (Header)
    title_thong_tin: "Student Information & Report",
    title_worklog: "1. Worklog (12 Weeks)",
    title_proposal: "2. Internship Proposal",
    title_blogs_posted: "3. Blogs Posted",
    title_blogs_s3_express_one_zone: "3. Technical Blog – Amazon S3 Express One Zone",
    title_blogs_aws_event_driven_architecture: "3. Technical Blog – AWS Event-Driven Architecture",
    title_blogs_aws_ec2_identity_containment: "3. Technical Blog – EC2 Identity Containment",
    title_events: "4. Events Participated",
    title_workshop: "5. Technical Workshop",
    title_self_evaluation: "6. Internship Self-Assessment",
    title_feedback: "7. Sharing and Feedback",
    title_cai_dat: "Settings & Data Management",

    // Student info section
    infoNotice: "Important Note: This internship report is structured in accordance with the official First Cloud AI Journey (FCAJ) requirements by Amazon Web Services (AWS) Vietnam. All information below can be freely customized and saved directly.",
    infoCardTitle: "Student Information",
    infoCardSubtitle: "Official internship profile at AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Official • AWS FCAJ",
    photoBoxTitle: "Portrait / Profile Photo",
    photoBoxHint: "Click to upload photo",
    photoChangeText: "Change Photo",
    photoFitCover: "Cover",
    photoFitFull: "Contain",
    photoViewHd: "View HD",
    hdModalTitle: "Personal Photo (High Definition)",
    hdModalDesc: "Photo displayed in full original resolution without blur or pixelation.",
    btnModalClose: "Close",
    btnUploadPhoto: "Upload Photo",
    btnRemovePhoto: "Remove Photo",
    photoFormatNote: "PNG, JPG, WEBP (HD < 10MB)",
    toastPhotoUpdated: "Personal photo updated in high resolution!",
    toastPhotoRemoved: "Personal photo removed!",
    toastPhotoError: "Could not process photo, please try another image file!",
    toastPhotoSizeLimit: "Photo file size must be under 10MB!",
    toastPhotoInvalidType: "Please select a valid image file!",
    toastFitCover: "Switched to Fill/Cover mode!",
    toastFitContain: "Switched to Full/Contain mode (crisp, uncropped)!",
    labelFullName: "Full Name",
    labelStudentId: "Student ID",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelUniversity: "University",
    labelMajor: "Major",
    labelClass: "Class",
    labelCompany: "Internship Company",
    labelPosition: "Internship Program",
    labelDuration: "Internship Duration",
    btnSaveInfo: "Save Information Updates",

    // TOC
    tocTitle: "Report Content Structure",
    tocSubtitle: "Click each section below to view detailed report:",
    toc1Title: "1. Worklog",
    toc1Desc: "Detailed 12-week worklog (Objectives, Task assignments table, Achievements).",
    toc2Title: "2. Proposal",
    toc2Desc: "Project Proposal: IoT Weather Platform - Real-Time AWS Serverless Monitoring Solution.",
    toc3Title: "3. Blogs Posted",
    toc3Desc: "Technical blog articles published on AWS Study Group (S3 Express One Zone, Event-Driven Architecture, EC2 Identity Containment).",
    zoomDiagramTooltip: "Click to view the architecture diagram in high resolution (HD)",
    btnExpandSnippet: "Read full content ▼",
    btnCollapseSnippet: "Collapse article ▲",
    diagModalTitle: "Architecture Diagram (High Resolution)",
    diagModalDesc: "Architecture comparison between Amazon S3 Standard and Amazon S3 Express One Zone in an AI/ML processing pipeline.",
    btnOpenTab: "Open image in new tab ↗",
    toc4Title: "4. Events Participated",
    toc4Desc: "Technical reports on AWS events attended: Modernization Workshop at Bitexco, Voice AI Meetup, and Enterprise AI on AWS Cloud.",
    toc5Title: "5. Workshop",
    toc5Desc: "Hands-on technical lab: Secure Hybrid Access to S3 using Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Self-Assessment",
    toc6Desc: "12-criteria self-evaluation matrix and identified areas for continuous improvement.",
    toc7Title: "7. Sharing and Feedback",
    toc7Desc: "Evaluation across 6 dimensions: work environment, mentor support, and career growth at FCAJ.",

    // 1. Worklog
    worklogSectionTitle: "1. 12-Week Worklog",
    worklogSectionSubtitle: "Record weekly objectives, daily tasks, and accomplishments throughout the internship",
    btnAddTaskThisWeek: "+ Add Task to This Week",
    weekPrefix: "Week",
    weekHeadingPrefix: "Week",
    bootcampSubtitle: "First Cloud AI Journey Bootcamp",
    btnEditWeekMeta: "Edit Objectives & Achievements",
    metaObjectivesTitle: "Week Objectives",
    metaAchievementsTitle: "Week Achievements",
    tasksTableTitle: "Tasks to be carried out this week",
    thDay: "Day",
    thTaskDesc: "Task Description",
    thStartDate: "Start Date",
    thEndDate: "Completion Date",
    thRef: "Reference Material",
    thActions: "Actions",
    viewRefLink: "View Document ↗",
    btnDelete: "Delete",
    btnEdit: "Edit",
    btnClearWeek: "Reset Week",
    worklogToolsLabel: "Quick Tools:",
    btnExportWorklog: "Export JSON",
    btnImportWorklog: "Import JSON",
    modalMetaTitle: "Edit Objectives & Achievements",
    modalMetaObjectivesLabel: "Core Week Objectives",
    modalMetaObjectivesPlaceholder: "Enter core technical/research objectives for this week...",
    modalMetaAchievementsLabel: "Week Achievements (one per line, starting with -)",
    modalMetaAchievementsPlaceholder: "- Mastered concepts...\n- Completed lab exercises...",
    btnModalSaveMeta: "Save Objectives & Achievements",
    modalEditTaskTitle: "Edit Task",
    btnUpdateTask: "Update Task",
    toastUpdateTaskSuccess: "✓ Task updated successfully!",
    toastSaveMetaSuccess: "✓ Objectives & achievements saved successfully!",
    toastResetWeekSuccess: "✓ Week content reset to blank successfully!",
    confirmResetWeek: "Are you sure you want to clear all tasks and objectives for this week to write from scratch?",
    toastExportSuccess: "✓ Worklog JSON backup downloaded successfully!",
    toastImportSuccess: "✓ Worklog data imported successfully!",
    emptyObjectivesMsg: "No objectives set yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyAchievementsMsg: "No achievements recorded yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyTasksMsg: "No tasks recorded for this week. Click \"+ Add Task to This Week\" to add tasks!",

    // 2. Proposal
    proposalSectionTitle: "2. Internship Proposal",
    proposalSectionSubtitle: "A Unified AWS Serverless Solution for Real-Time Weather Monitoring",
    btnSaveProposal: "Save Proposal",
    proposalNotice: "Research Topic: IoT Weather Platform for Lab Research - A Unified AWS Serverless Real-Time Monitoring Solution utilizing AWS IoT Core, Lambda, S3 Data Lake, AWS Glue, and Amplify Next.js.",
    prop1Heading: "1. Executive Summary",
    prop2Heading: "2. Problem Statement & Solution",
    propProblemLabel: "What’s the Problem?",
    propSolutionLabel: "The Solution & Benefits",
    prop3Heading: "3. Solution Architecture & AWS Services Used",
    prop4Heading: "4. Monthly Infrastructure Budget Estimation",

    // 3. Blogs
    blogsSectionTitle: "3. Blogs Posted",
    blogsSectionSubtitle: "Technical articles shared with the AWS Study Group community",
    btnAddBlog: "+ Write New Blog",
    readArticleLink: "Read Article ↗",
    publishedDateLabel: "Published:",

    // 4. Events
    eventsSectionTitle: "4. Events Participated",
    eventsSectionSubtitle: "Attendance at in-depth AWS technology conferences and workshops",
    btnAddEvent: "+ Add New Event",
    eventBadge: "Tech Conference",
    eventRoleLabel: "Role:",
    eventSpeakersLabel: "Speakers:",
    eventHighlightsLabel: "Key Highlights & Takeaways:",
    btnDeleteEvent: "Delete Event",
    btnViewFullReport: "View Full Report →",
    btnBackToEvents: "← Back to Events",
    eventsBreadcrumb: "4. Events Participated",
    eventReportBadge: "Event Harvest Report",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Loaded Session 1 Voice AI Report",

    // 5. Workshop
    workshopSectionTitle: "5. Workshop: Secure Hybrid Access to S3 using VPC Endpoints",
    workshopSectionSubtitle: "Hands-on technical lab covering AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "Print Workshop Content",
    wsTabOverview: "5.1 Overview",
    wsTabPrereq: "5.2 Prerequisites",
    wsTabVpc: "5.3 Access S3 from VPC",
    wsTabOnPrem: "5.4 Access from On-Premises",
    wsTabPolicy: "5.5 Endpoint Policies",
    wsTabCleanup: "5.6 Clean Up",

    wsOverviewTitle: "5.1 Workshop Overview & Architecture",
    wsOverviewDesc: "AWS PrivateLink provides private connectivity to AWS services from VPCs and on-premises networks without exposing your traffic to the public internet.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Used for resources inside your VPC to reach Amazon S3 and Amazon DynamoDB. Routes traffic using Route Tables without hourly charges.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Allocates an Elastic Network Interface (ENI) with private IP addresses in your subnet. Supports access from both VPC and On-premises networks via AWS Site-to-Site VPN or Direct Connect.",

    wsPrereqTitle: "5.2 Prerequisites & IAM Permissions",
    wsPrereqDesc: "Minimum IAM permission policy required to deploy CloudFormation and Transit Gateway resources:",

    wsVpcTitle: "5.3 Access S3 from VPC (Gateway Endpoint)",
    wsVpcDesc: "Procedure to create a Gateway Endpoint and test private connectivity:",
    wsVpcStep1: "Navigate to VPC Console > Endpoints > Click Create Endpoint.",
    wsVpcStep2: "Select Service: com.amazonaws.us-east-1.s3 with Gateway type.",
    wsVpcStep3: "Associate the Cloud VPC Route Table to automatically inject S3 prefix routes.",
    wsVpcStep4: "Verify connectivity from your EC2 instance:",

    wsOnpremTitle: "5.4 Access S3 from On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Simulate On-Premises connectivity via strongSwan VPN and configure Route 53 Resolver Rules:",

    wsPolicyTitle: "5.5 VPC Endpoint Policies (Access Control)",
    wsPolicyDesc: "Endpoint policy restricting access exclusively to yourbucketname-2:",

    wsCleanupTitle: "5.6 Clean Up (Resource Decommissioning)",
    wsCleanupStep1: "Delete Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Disassociate Route 53 Resolver Rule myS3Rule from On-prem VPC.",
    wsCleanupStep3: "Delete the 2 CloudFormation Stacks: PLOnpremSetup and PLCloudSetup.",
    wsCleanupStep4: "Empty and Delete all S3 buckets provisioned in this lab.",

    // 6. Self-assessment
    selfSectionTitle: "6. Internship Self-Assessment",
    selfSectionSubtitle: "12-criteria competence evaluation of student Phan Nhat Uyen",
    btnSaveAssessment: "Save Assessment",
    assessNarrativeLabel: "Summary of Internship Practice and Conduct",
    criteriaTableTitle: "AWS FCAJ Standard 12-Criteria Evaluation Matrix",
    thCriteriaNo: "No.",
    thCriteriaName: "Evaluation Criteria",
    thCriteriaDesc: "Detailed Description",
    thGood: "Good",
    thFair: "Fair",
    thAvg: "Average",
    needsImprovementLabel: "Needs Improvement",

    // 7. Feedback
    feedbackSectionTitle: "7. Sharing and Feedback",
    feedbackSectionSubtitle: "Constructive suggestions for the First Cloud AI Journey program",
    btnSaveFeedback: "Save Feedback",
    fb1Label: "1. Working Environment",
    fb2Label: "2. Support from Mentor & Organizers",
    fb3Label: "3. Alignment with Academic Major",
    fb4Label: "4. Learning Opportunities & Skill Development",
    fb5Label: "5. Company Culture & Team Spirit",
    fb6Label: "6. Policies / Benefits",
    fbSuggestionsLabel: "Suggestions & Future Expectations",

    // Settings
    settingsSectionTitle: "Export Data & Print Report",
    settingsSectionSubtitle: "Export entire internship report to JSON file or print to PDF",
    settingsCardTitle: "Export Data & Print Report",
    settingsCardDesc: "All internship report records (12 weeks worklog, proposal, technical blogs, events, workshop, evaluations) are finalized. You can download the JSON backup or print the report:",
    btnExportJson: "Download Backup File (worklog-fcaj-backup.json)",
    btnPrintReport: "Print Report (PDF)",
    btnImportJson: "Restore from JSON File",
    btnResetData: "Reset to Standard FCAJ Report",

    // Modal
    modalTitle: "+ Add Task to Worklog",
    modalWeekSelectLabel: "Select Week",
    modalDayLabel: "Day of Week",
    modalTaskDescLabel: "Task Description",
    modalStartLabel: "Start Date",
    modalEndLabel: "Completion Date",
    modalRefLabel: "Reference Material (URL or note)",
    btnModalCancel: "Cancel",
    btnModalSave: "Save Task",

    // Alerts and prompts
    toastSaveInfo: "Student information saved successfully!",
    toastSaveProposal: "Proposal saved successfully!",
    toastAddBlog: "New blog post added!",
    toastDeleteBlog: "Blog post deleted.",
    toastAddEvent: "New event added!",
    toastDeleteEvent: "Event deleted.",
    toastSaveAssessment: "12-criteria self-assessment saved!",
    toastSaveFeedback: "Feedback saved for FCAJ program!",
    toastExportJson: "JSON backup file exported successfully!",
    toastImportSuccess: "Data restored successfully!",
    toastImportError: "Error reading JSON file!",
    toastResetSuccess: "Standard FCAJ report data restored!",
    toastAddTaskSuccess: "Task added to week",
    toastDeleteTask: "Task deleted.",
    toastLangSwitch: "Switched to English",
    confirmReset: "WARNING: Reset all data to standard AWS FCAJ template?",
    confirmDeleteTask: "Are you sure you want to delete this task?",
    confirmDeleteBlog: "Delete this blog from the list?",
    confirmDeleteEvent: "Delete this event from the report?",
    pageTitleDoc: "Internship Report :: Phan Nhat Uyen - AWS First Cloud AI Journey",

    // Static tooltips, image alt text & modals
    photoFrameTooltip: "Click to view the photo in high resolution",
    photoFitTooltip: "Switch mode: Fill (Cover) / Show the whole photo without cropping (Contain)",
    photoViewHdTooltip: "View the photo in full size, high resolution",
    photoAlt: "Student ID photo of Phan Nhat Uyen",
    photoHdAlt: "Personal photo in HD",
    diagModalAlt: "Architecture diagram in HD",
    exportModalTitle: "Worklog Backup Data (JSON)",
    exportModalDesc: "Below is the full 12-week content you wrote in the browser. You can copy this code to keep a backup or send it in chat to have it permanently updated in the GitHub source code:",
    btnCopyClipboard: "Copy to clipboard",
    toastCopyJsonFull: "✓ Copied the full JSON code to the clipboard!",
    toastCopyJsonShort: "✓ Copied!",
    reportUnavailable: "Report not available",
    btnBackToEventsShort: "Back to events",
    wsOnpremCmt1: "# Check internal DNS resolution from On-Premises",
    wsOnpremCmt2: "# Upload a file through the private Interface Endpoint",
    minutesUnit: "minutes",
    viewPostOnCommunity: "View post on AWS Study Group VN community"
  }
};

// ==========================================
// 2. DEFAULT BILINGUAL REPORT DATA
// (CHỈNH SỬA THÔNG TIN SINH VIÊN TRỰC TIẾP TẠI ĐÂY TỪ CODE)
// ==========================================
const DEFAULT_BILINGUAL_DATA = {
  studentInfo: {
    fullName: "Phan Nhật Uyên",
    studentId: "SE196682",
    avatar: "assets/images/profile.jpg",
    phone: "0394728982",
    email: "nhatuien218@gmail.com",
    vi: {
      university: "Trường Đại học FPT",
      major: "An toàn thông tin",
      company: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "Từ 14/09/2026 đến 30/11/2026"
    },
    en: {
      university: "FPT University",
      major: "Information Assurance",
      company: "Amazon Web Services (AWS) Vietnam Company Limited",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "From 14/09/2026 to 30/11/2026"
    }
  },
  currentWeek: 5,
  worklogs: [
    {
        "weekNum": 1,
        "vi": {
            "topic": "Tuần 1: AWS Fundamentals & IAM (14/09/2026 – 18/09/2026)",
            "objectives": "Làm quen với AWS và tìm hiểu dịch vụ quản lý quyền truy cập IAM.",
            "achievements": "- Hiểu tổng quan về AWS và hạ tầng AWS.\n- Biết cách quản lý người dùng và quyền truy cập bằng IAM.\n- Hiểu IAM Roles, Policies và Least Privilege.",
            "tasks": [
                {
                    "day": "Thứ Hai",
                    "desc": "Main Task: AWS Fundamentals & Cloud Infrastructure.\nDetailed Activities: Tìm hiểu tổng quan AWS, AWS Management Console, Regions và Availability Zones.",
                    "start": "2026-09-14",
                    "end": "2026-09-14",
                    "ref": "[Tổng quan hạ tầng AWS](https://aws.amazon.com/about-aws/global-infrastructure/)"
                },
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: IAM Users & Groups.\nDetailed Activities: Tìm hiểu dịch vụ IAM, cấu hình IAM Users, User Groups và quản lý quyền truy cập.",
                    "start": "2026-09-16",
                    "end": "2026-09-16",
                    "ref": "[Quản lý IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: IAM Roles & Policies.\nDetailed Activities: Tìm hiểu IAM Roles, Policies và áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege).",
                    "start": "2026-09-18",
                    "end": "2026-09-18",
                    "ref": "[IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 1: AWS Fundamentals & IAM (14/09/2026 – 18/09/2026)",
            "objectives": "Get familiar with AWS and learn about the IAM access management service.",
            "achievements": "- Understood the overview of AWS and AWS infrastructure.\n- Learned how to manage users and access permissions using IAM.\n- Understood IAM Roles, Policies and Least Privilege.",
            "tasks": [
                {
                    "day": "Monday",
                    "desc": "Main Task: AWS Fundamentals & Cloud Infrastructure.\nDetailed Activities: Learn about AWS overview, AWS Management Console, Regions and Availability Zones.",
                    "start": "2026-09-14",
                    "end": "2026-09-14",
                    "ref": "[AWS Global Infrastructure Overview](https://aws.amazon.com/about-aws/global-infrastructure/)"
                },
                {
                    "day": "Wednesday",
                    "desc": "Main Task: IAM Users & Groups.\nDetailed Activities: Learn about IAM service, configuring IAM Users, User Groups and access management.",
                    "start": "2026-09-16",
                    "end": "2026-09-16",
                    "ref": "[Managing IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: IAM Roles & Policies.\nDetailed Activities: Learn about IAM Roles, Policies and applying the Least Privilege principle.",
                    "start": "2026-09-18",
                    "end": "2026-09-18",
                    "ref": "[IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)"
                }
            ]
        }
    },
    {
        "weekNum": 2,
        "vi": {
            "topic": "Tuần 2: Amazon EC2 (21/09/2026 – 25/09/2026)",
            "objectives": "Tìm hiểu dịch vụ máy chủ ảo Amazon EC2 và cách quản lý Instance.",
            "achievements": "- Hiểu cách hoạt động của Amazon EC2.\n- Biết cách khởi tạo và cấu hình EC2 Instance.\n- Hiểu vai trò của Key Pair và Security Group.",
            "tasks": [
                {
                    "day": "Thứ Hai",
                    "desc": "Main Task: EC2 Fundamentals & Instance Types.\nDetailed Activities: Tìm hiểu Amazon EC2, các loại Instance và cách khởi tạo máy chủ ảo.",
                    "start": "2026-09-21",
                    "end": "2026-09-21",
                    "ref": "[Bắt đầu với EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)"
                },
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: EC2 Configuration & Security Groups.\nDetailed Activities: Tìm hiểu cách cấu hình EC2, Key Pair và Security Group.",
                    "start": "2026-09-23",
                    "end": "2026-09-23",
                    "ref": "[EC2 Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: EC2 Instance Management & Lifecycle.\nDetailed Activities: Tìm hiểu cách kết nối, khởi động, dừng và quản lý EC2 Instance.",
                    "start": "2026-09-25",
                    "end": "2026-09-25",
                    "ref": "[EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 2: Amazon EC2 (21/09/2026 – 25/09/2026)",
            "objectives": "Learn about the Amazon EC2 virtual server service and Instance management.",
            "achievements": "- Understood how Amazon EC2 works.\n- Learned how to launch and configure EC2 Instances.\n- Understood the role of Key Pairs and Security Groups.",
            "tasks": [
                {
                    "day": "Monday",
                    "desc": "Main Task: EC2 Fundamentals & Instance Types.\nDetailed Activities: Learn about Amazon EC2, Instance types and how to launch virtual servers.",
                    "start": "2026-09-21",
                    "end": "2026-09-21",
                    "ref": "[Getting Started with EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)"
                },
                {
                    "day": "Wednesday",
                    "desc": "Main Task: EC2 Configuration & Security Groups.\nDetailed Activities: Learn how to configure EC2, Key Pairs and Security Groups.",
                    "start": "2026-09-23",
                    "end": "2026-09-23",
                    "ref": "[EC2 Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: EC2 Instance Management & Lifecycle.\nDetailed Activities: Learn how to connect, start, stop and manage EC2 Instances.",
                    "start": "2026-09-25",
                    "end": "2026-09-25",
                    "ref": "[EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)"
                }
            ]
        }
    },
    {
        "weekNum": 3,
        "vi": {
            "topic": "Tuần 3: Amazon VPC & Mạng cơ bản (01/10/2026 – 02/10/2026)",
            "objectives": "Tìm hiểu kiến trúc mạng riêng ảo Amazon VPC, phân chia Subnet và cấu hình bảo mật mạng.",
            "achievements": "- Hiểu cách khởi tạo và quy hoạch mạng riêng ảo Amazon VPC với CIDR block.\n- Phân định rõ vai trò của Public Subnet, Private Subnet, Route Table và Internet Gateway.",
            "tasks": [
                {
                    "day": "Thứ Năm",
                    "desc": "Main Task: VPC Architecture & Subnets.\nDetailed Activities: Tìm hiểu tổng quan Amazon VPC, phân dải địa chỉ CIDR block, cấu hình Public Subnet và Private Subnet.",
                    "start": "2026-10-01",
                    "end": "2026-10-01",
                    "ref": "[Tài liệu Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Route Tables & Internet Gateway.\nDetailed Activities: Tìm hiểu định tuyến qua Route Table, kết nối Internet Gateway cho Public Subnet và bảo vệ tài nguyên với Security Groups & Network ACLs.",
                    "start": "2026-10-02",
                    "end": "2026-10-02",
                    "ref": "[Định tuyến mạng VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 3: Amazon VPC & Networking Fundamentals (01/10/2026 – 02/10/2026)",
            "objectives": "Learn Amazon VPC networking fundamentals, subnet segmentation, and network security.",
            "achievements": "- Understood how to create and plan virtual private clouds using Amazon VPC with CIDR blocks.\n- Clearly distinguished the roles of Public Subnets, Private Subnets, Route Tables, and Internet Gateways.",
            "tasks": [
                {
                    "day": "Thursday",
                    "desc": "Main Task: VPC Architecture & Subnets.\nDetailed Activities: Learn Amazon VPC overview, CIDR block allocation, and configure Public and Private Subnets.",
                    "start": "2026-10-01",
                    "end": "2026-10-01",
                    "ref": "[Amazon VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Route Tables & Internet Gateway.\nDetailed Activities: Learn routing via Route Tables, connect Internet Gateway for Public Subnets, and secure resources with Security Groups & Network ACLs.",
                    "start": "2026-10-02",
                    "end": "2026-10-02",
                    "ref": "[VPC Route Tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)"
                }
            ]
        }
    },
    {
        "weekNum": 4,
        "vi": {
            "topic": "Tuần 4: AWS Lambda, S3, Cloud9, RDS & DynamoDB (06/10/2026 – 08/10/2026)",
            "objectives": "Tìm hiểu dịch vụ tính toán không máy chủ Lambda, lưu trữ đối tượng S3, môi trường Cloud9 và cơ sở dữ liệu RDS, DynamoDB.",
            "achievements": "- Nắm vững nguyên lý hoạt động của AWS Lambda và cơ chế lưu trữ Amazon S3.\n- Phân biệt trường hợp sử dụng phù hợp giữa Amazon RDS (quan hệ) và DynamoDB (NoSQL).",
            "tasks": [
                {
                    "day": "Thứ Ba",
                    "desc": "Main Task: AWS Lambda & Amazon S3.\nDetailed Activities: Tìm hiểu mô hình tính toán Serverless với AWS Lambda, quản lý Bucket và Object trên Amazon S3, tích hợp sự kiện S3 kích hoạt Lambda.",
                    "start": "2026-10-06",
                    "end": "2026-10-06",
                    "ref": "[Tài liệu AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)"
                },
                {
                    "day": "Thứ Năm",
                    "desc": "Main Task: Cloud9, Amazon RDS & DynamoDB.\nDetailed Activities: Thiết lập môi trường phát triển trên AWS Cloud9; so sánh đặc tính của cơ sở dữ liệu quan hệ Amazon RDS và cơ sở dữ liệu NoSQL Amazon DynamoDB.",
                    "start": "2026-10-08",
                    "end": "2026-10-08",
                    "ref": "[Tài liệu Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 4: AWS Lambda, S3, Cloud9, RDS & DynamoDB (06/10/2026 – 08/10/2026)",
            "objectives": "Learn serverless compute with AWS Lambda, object storage with S3, Cloud9 IDE, and databases with RDS and DynamoDB.",
            "achievements": "- Mastered core concepts of AWS Lambda serverless execution and Amazon S3 storage.\n- Understood suitable use cases for relational Amazon RDS versus NoSQL DynamoDB.",
            "tasks": [
                {
                    "day": "Tuesday",
                    "desc": "Main Task: AWS Lambda & Amazon S3.\nDetailed Activities: Learn serverless compute with AWS Lambda, manage buckets and objects in Amazon S3, and integrate S3 event notifications with Lambda.",
                    "start": "2026-10-06",
                    "end": "2026-10-06",
                    "ref": "[AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)"
                },
                {
                    "day": "Thursday",
                    "desc": "Main Task: Cloud9, Amazon RDS & DynamoDB.\nDetailed Activities: Set up development environment on AWS Cloud9; compare relational database Amazon RDS with NoSQL database Amazon DynamoDB.",
                    "start": "2026-10-08",
                    "end": "2026-10-08",
                    "ref": "[Amazon RDS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)"
                }
            ]
        }
    },
    {
        "weekNum": 5,
        "vi": {
            "topic": "Tuần 5: Định hướng đề xuất dự án & Chuẩn bị kiến trúc (14/10/2026 – 16/10/2026)",
            "objectives": "Thống nhất chủ đề dự án Nutrition E-Commerce, nghiên cứu kiến trúc giải pháp và lập đề xuất đồ án thực tập.",
            "achievements": "- Thống nhất mục tiêu và phạm vi nghiệp vụ của đồ án Nutrition E-Commerce.\n- Hoàn thành tài liệu Đề xuất đồ án (Proposal) với sơ đồ kiến trúc phân tầng trên AWS.",
            "tasks": [
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: Thảo luận và thống nhất đề xuất đồ án Nutrition E-Commerce.\nDetailed Activities: Họp nhóm thảo luận yêu cầu bài toán thương mại điện tử dinh dưỡng, xác định đối tượng người dùng, tính năng gợi ý khẩu phần và phạm vi triển khai trên AWS.",
                    "start": "2026-10-14",
                    "end": "2026-10-14",
                    "ref": "[AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Khảo sát kiến trúc kỹ thuật và lập sơ đồ phân tầng hệ thống.\nDetailed Activities: Phân tích mô hình kiến trúc dự kiến gồm Frontend, Backend Microservices, Cơ sở dữ liệu và tích hợp GenAI; hoàn thiện bản đề xuất đồ án (Proposal).",
                    "start": "2026-10-16",
                    "end": "2026-10-16",
                    "ref": "[Kiến trúc ứng dụng Web trên AWS](https://aws.amazon.com/solutions/implementations/serverless-image-handler/)"
                }
            ]
        },
        "en": {
            "topic": "Week 5: Project Ideation & Architecture Preparation (14/10/2026 – 16/10/2026)",
            "objectives": "Finalize Nutrition E-Commerce project topic, research solution architecture, and prepare internship proposal.",
            "achievements": "- Finalized objectives and business scope for the Nutrition E-Commerce project.\n- Completed the Proposal document featuring a tiered AWS cloud architecture diagram.",
            "tasks": [
                {
                    "day": "Wednesday",
                    "desc": "Main Task: Discuss and finalize Nutrition E-Commerce project proposal.\nDetailed Activities: Group discussion on nutrition e-commerce requirements, identifying user personas, meal recommendation features, and scope of deployment on AWS.",
                    "start": "2026-10-14",
                    "end": "2026-10-14",
                    "ref": "[AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Technical architecture research and system tier diagramming.\nDetailed Activities: Analyze target architecture including Frontend, Backend Microservices, Database, and GenAI integration; finalize project proposal document.",
                    "start": "2026-10-16",
                    "end": "2026-10-16",
                    "ref": "[Web Application Architecture on AWS](https://aws.amazon.com/solutions/implementations/serverless-image-handler/)"
                }
            ]
        }
    },
    {
        "weekNum": 6,
        "vi": {
            "topic": "Tuần 6: Docker & Amazon ECR (21/10/2026 – 23/10/2026)",
            "objectives": "Nắm vững kiến thức nền tảng về Docker, container hóa ứng dụng và tìm hiểu quản lý image container với Amazon ECR.",
            "achievements": "- Nắm vững kiến thức đóng gói ứng dụng bằng Docker.\n- Hiểu quy trình tạo và quản lý kho lưu trữ container image trên Amazon ECR.",
            "tasks": [
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: Học kiến thức nền tảng về Docker và container hóa ứng dụng.\nDetailed Activities: Tìm hiểu kiến trúc Docker, Dockerfile và cách container hóa các thành phần của ứng dụng Nutrition E-Commerce.",
                    "start": "2026-10-21",
                    "end": "2026-10-21",
                    "ref": "[Docker – Container Fundamentals](https://docs.docker.com/get-started/)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Tìm hiểu Amazon ECR và quản lý image container.\nDetailed Activities: Tìm hiểu cấu hình repository Amazon ECR, cơ chế xác thực IAM và theo dõi quy trình đẩy container image lên Amazon ECR.",
                    "start": "2026-10-23",
                    "end": "2026-10-23",
                    "ref": "[Amazon ECR – User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 6: Docker & Amazon ECR (21/10/2026 – 23/10/2026)",
            "objectives": "Master Docker fundamentals, containerization concepts, and explore container image management with Amazon ECR.",
            "achievements": "- Mastered application containerization concepts using Docker.\n- Understood how to create and manage container image repositories on Amazon ECR.",
            "tasks": [
                {
                    "day": "Wednesday",
                    "desc": "Main Task: Learn Docker fundamentals and containerize applications.\nDetailed Activities: Study Docker architecture, images, containers, and write Dockerfiles to containerize application components.",
                    "start": "2026-10-21",
                    "end": "2026-10-21",
                    "ref": "[Docker – Container Fundamentals](https://docs.docker.com/get-started/)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Explore Amazon ECR and container image management.\nDetailed Activities: Create Amazon ECR repositories, configure IAM permissions, and practice authentication and pushing container images to ECR.",
                    "start": "2026-10-23",
                    "end": "2026-10-23",
                    "ref": "[Amazon ECR – User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)"
                }
            ]
        }
    },
    {
        "weekNum": 7,
        "vi": {
            "topic": "Tuần 7: Amazon ECS Fargate & Application Load Balancer (27/10/2026 – 28/10/2026)",
            "objectives": "Tìm hiểu nền tảng điều phối container Amazon ECS với AWS Fargate và cân bằng tải Application Load Balancer (ALB).",
            "achievements": "- Hiểu cách vận hành container không máy chủ với Amazon ECS Fargate.\n- Nắm vững cơ chế phân phối tải và kiểm tra sức khỏe dịch vụ thông qua Application Load Balancer.",
            "tasks": [
                {
                    "day": "Thứ Ba",
                    "desc": "Main Task: Tìm hiểu nền tảng Amazon ECS và AWS Fargate.\nDetailed Activities: Tìm hiểu mô hình điều phối container Amazon ECS, cấu hình Task Definition, Service và chế độ thực thi serverless AWS Fargate.",
                    "start": "2026-10-27",
                    "end": "2026-10-27",
                    "ref": "[Tài liệu Amazon ECS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)"
                },
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: Tìm hiểu Application Load Balancer và kết nối mạng container.\nDetailed Activities: Cấu hình Application Load Balancer (ALB), Target Group, định tuyến lưu lượng đến các container ECS Fargate và kiểm tra tính sẵn sàng (Health Check).",
                    "start": "2026-10-28",
                    "end": "2026-10-28",
                    "ref": "[Tài liệu Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 7: Amazon ECS Fargate & Application Load Balancer (27/10/2026 – 28/10/2026)",
            "objectives": "Learn Amazon ECS container orchestration with AWS Fargate serverless launch type and Application Load Balancer (ALB).",
            "achievements": "- Understood serverless container operations using Amazon ECS Fargate.\n- Mastered traffic distribution and service health checks through Application Load Balancers.",
            "tasks": [
                {
                    "day": "Tuesday",
                    "desc": "Main Task: Explore Amazon ECS and AWS Fargate serverless compute.\nDetailed Activities: Learn Amazon ECS container orchestration, configuring Task Definitions, Services, and AWS Fargate serverless launch type.",
                    "start": "2026-10-27",
                    "end": "2026-10-27",
                    "ref": "[Amazon ECS Fargate Documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)"
                },
                {
                    "day": "Wednesday",
                    "desc": "Main Task: Explore Application Load Balancer and container networking.\nDetailed Activities: Configure Application Load Balancer (ALB), Target Groups, traffic routing to ECS Fargate containers, and health check monitoring.",
                    "start": "2026-10-28",
                    "end": "2026-10-28",
                    "ref": "[Elastic Load Balancing Documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)"
                }
            ]
        }
    },
    {
        "weekNum": 8,
        "vi": {
            "topic": "Tuần 8: CloudFront & Cognito (03/11/2026 – 06/11/2026)",
            "objectives": "Tìm hiểu tăng tốc phân phối nội dung với Amazon CloudFront và quản lý định danh người dùng với Amazon Cognito.",
            "achievements": "- Nắm vững cơ chế caching và phân phối nội dung tĩnh/động tại biên qua Amazon CloudFront.\n- Hiểu quy trình xác thực người dùng dựa trên JWT token với Amazon Cognito User Pools.\n- Đánh giá kiến trúc tích hợp an toàn giữa CloudFront và Cognito trong dự án Nutrition E-Commerce.",
            "tasks": [
                {
                    "day": "Thứ Ba",
                    "desc": "Main Task: Tìm hiểu Amazon CloudFront và phân phối nội dung.\nDetailed Activities: Cấu hình phân phối Amazon CloudFront, Origin Access Control (OAC), chứng chỉ SSL/TLS và bộ nhớ đệm tại biên cho tài nguyên web.",
                    "start": "2026-11-03",
                    "end": "2026-11-03",
                    "ref": "[Amazon CloudFront – Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)"
                },
                {
                    "day": "Thứ Năm",
                    "desc": "Main Task: Tìm hiểu xác thực người dùng với Amazon Cognito.\nDetailed Activities: Cấu hình Amazon Cognito User Pools, App Clients và quy trình xác thực dựa trên token cho đăng ký và đăng nhập người dùng.",
                    "start": "2026-11-05",
                    "end": "2026-11-05",
                    "ref": "[Amazon Cognito – Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Đánh giá tích hợp CloudFront và Cognito trong kiến trúc Nutrition E-Commerce.\nDetailed Activities: Phân tích luồng xác thực an toàn, phân quyền API gateway và phân phối nội dung tại biên trong giải pháp Nutrition E-Commerce.",
                    "start": "2026-11-06",
                    "end": "2026-11-06",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)"
                }
            ]
        },
        "en": {
            "topic": "Week 8: CloudFront & Cognito (03/11/2026 – 06/11/2026)",
            "objectives": "Learn content delivery acceleration using Amazon CloudFront and user identity management using Amazon Cognito.",
            "achievements": "- Mastered caching and edge distribution mechanisms via Amazon CloudFront.\n- Understood JWT token-based user authentication flows with Amazon Cognito User Pools.\n- Evaluated secure architecture combining CloudFront and Cognito in Nutrition E-Commerce.",
            "tasks": [
                {
                    "day": "Tuesday",
                    "desc": "Main Task: Explore Amazon CloudFront and content delivery.\nDetailed Activities: Set up Amazon CloudFront distribution, origin access control (OAC), SSL/TLS certificates, and edge caching for web assets.",
                    "start": "2026-11-03",
                    "end": "2026-11-03",
                    "ref": "[Amazon CloudFront – Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)"
                },
                {
                    "day": "Thursday",
                    "desc": "Main Task: Learn Amazon Cognito user authentication.\nDetailed Activities: Configure Amazon Cognito User Pools, App Clients, and token-based authentication workflows for user signup and signin.",
                    "start": "2026-11-05",
                    "end": "2026-11-05",
                    "ref": "[Amazon Cognito – Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Review CloudFront and Cognito integration in the Nutrition E-Commerce architecture.\nDetailed Activities: Analyze secure authentication flow, API gateway authorization, and edge distribution in the Nutrition E-Commerce solution.",
                    "start": "2026-11-06",
                    "end": "2026-11-06",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)"
                }
            ]
        }
    },
    {
        "weekNum": 9,
        "vi": {
            "topic": "Tuần 9: Terraform, GitHub Actions & Bedrock (10/11/2026 – 13/11/2026)",
            "objectives": "Tìm hiểu Hạ tầng dưới dạng mã nguồn (IaC) với Terraform, CI/CD với GitHub Actions OIDC và ứng dụng Generative AI với Amazon Bedrock.",
            "achievements": "- Hiểu cú pháp Terraform và cách quản lý tài nguyên hạ tầng AWS tự động.\n- Nắm vững quy trình CI/CD an toàn qua GitHub Actions và IAM OIDC không dùng Access Key cố định.\n- Khảo sát các mô hình nền tảng Amazon Bedrock phục vụ tính năng gợi ý thực đơn thông minh.",
            "tasks": [
                {
                    "day": "Thứ Ba",
                    "desc": "Main Task: Tìm hiểu Terraform và Hạ tầng dưới dạng mã nguồn (IaC).\nDetailed Activities: Tìm hiểu nền tảng HashiCorp Terraform, cú pháp HCL, cấu hình provider, khai báo tài nguyên và quản lý file trạng thái trên AWS.",
                    "start": "2026-11-10",
                    "end": "2026-11-10",
                    "ref": "[Terraform – AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)"
                },
                {
                    "day": "Thứ Năm",
                    "desc": "Main Task: Tìm hiểu GitHub Actions và xác thực AWS OIDC.\nDetailed Activities: Xây dựng pipeline CI/CD tự động hóa bằng GitHub Actions và cấu hình xác thực không dùng khóa bảo mật lâu dài với AWS qua OpenID Connect (OIDC).",
                    "start": "2026-11-12",
                    "end": "2026-11-12",
                    "ref": "[AWS Security – OpenID Connect with GitHub Actions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Tìm hiểu nền tảng Amazon Bedrock và tích hợp AI.\nDetailed Activities: Tìm hiểu các mô hình nền tảng trên Amazon Bedrock, gọi API mô hình, khái niệm kỹ thuật prompt và tính năng Generative AI trong ứng dụng.",
                    "start": "2026-11-13",
                    "end": "2026-11-13",
                    "ref": "[Amazon Bedrock – User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 9: Terraform, GitHub Actions & Bedrock (10/11/2026 – 13/11/2026)",
            "objectives": "Learn Infrastructure as Code (IaC) with Terraform, CI/CD with GitHub Actions OIDC, and Generative AI applications with Amazon Bedrock.",
            "achievements": "- Understood Terraform syntax and automated AWS infrastructure provisioning.\n- Mastered secure CI/CD workflows using GitHub Actions and IAM OIDC keyless authentication.\n- Explored Amazon Bedrock foundation models for smart meal recommendation features.",
            "tasks": [
                {
                    "day": "Tuesday",
                    "desc": "Main Task: Learn Terraform and Infrastructure as Code.\nDetailed Activities: Study HashiCorp Terraform fundamentals, HCL syntax, provider configurations, resource declarations, and state management on AWS.",
                    "start": "2026-11-10",
                    "end": "2026-11-10",
                    "ref": "[Terraform – AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)"
                },
                {
                    "day": "Thursday",
                    "desc": "Main Task: Explore GitHub Actions and AWS OIDC authentication.\nDetailed Activities: Build automated CI/CD workflows using GitHub Actions and configure secure keyless authentication to AWS via OpenID Connect (OIDC).",
                    "start": "2026-11-12",
                    "end": "2026-11-12",
                    "ref": "[AWS Security – OpenID Connect with GitHub Actions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Learn Amazon Bedrock fundamentals and AI integration.\nDetailed Activities: Explore Amazon Bedrock foundation models, API invocations, prompt engineering concepts, and generative AI features in the application.",
                    "start": "2026-11-13",
                    "end": "2026-11-13",
                    "ref": "[Amazon Bedrock – User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)"
                }
            ]
        }
    },
    {
        "weekNum": 10,
        "vi": {
            "topic": "Tuần 10: Rà soát phát triển & Tích hợp hoàn thiện dự án Nutrition E-Commerce (18/11/2026 – 20/11/2026)",
            "objectives": "Rà soát các tính năng ứng dụng Nutrition E-Commerce, kiểm tra tích hợp hạ tầng AWS và chuẩn bị kế hoạch kiểm thử.",
            "achievements": "- Hoàn tất rà soát tính toàn vẹn của hạ tầng đám mây và mã nguồn ứng dụng.\n- Xây dựng hoàn chỉnh kế hoạch và kịch bản kiểm thử chức năng cho dự án.",
            "tasks": [
                {
                    "day": "Thứ Tư",
                    "desc": "Main Task: Rà soát hạ tầng AWS và tích hợp triển khai.\nDetailed Activities: Kiểm tra triển khai container trên ECS Fargate, kết nối cơ sở dữ liệu RDS và cấu hình phân phối nội dung tĩnh qua CloudFront.",
                    "start": "2026-11-18",
                    "end": "2026-11-18",
                    "ref": "[Hướng dẫn triển khai AWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-best-practices.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Rà soát hoàn thiện phát triển và chuẩn bị kế hoạch kiểm thử.\nDetailed Activities: Tổng hợp các tính năng đã hoàn thiện của ứng dụng Nutrition E-Commerce, rà soát mã nguồn và xây dựng kịch bản kiểm thử cho tuần tiếp theo.",
                    "start": "2026-11-20",
                    "end": "2026-11-20",
                    "ref": "[Kiểm thử ứng dụng trên AWS](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/testing-for-reliability.html)"
                }
            ]
        },
        "en": {
            "topic": "Week 10: Development Review & System Integration for Nutrition E-Commerce (18/11/2026 – 20/11/2026)",
            "objectives": "Review Nutrition E-Commerce application features, verify AWS infrastructure integration, and prepare test plans.",
            "achievements": "- Completed review of cloud infrastructure integrity and application codebase.\n- Established a comprehensive functional testing plan and test scenarios for the project.",
            "tasks": [
                {
                    "day": "Wednesday",
                    "desc": "Main Task: Review AWS infrastructure and deployment integration.\nDetailed Activities: Inspect container deployment on ECS Fargate, RDS database connectivity, and CloudFront static content distribution.",
                    "start": "2026-11-18",
                    "end": "2026-11-18",
                    "ref": "[AWS ECS Deployment Best Practices](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-best-practices.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Development completion review and test plan preparation.\nDetailed Activities: Consolidate completed Nutrition E-Commerce application features, review codebase, and design test scenarios for the final testing phase.",
                    "start": "2026-11-20",
                    "end": "2026-11-20",
                    "ref": "[Testing for Reliability on AWS](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/testing-for-reliability.html)"
                }
            ]
        }
    },
    {
        "weekNum": 11,
        "vi": {
            "topic": "Tuần 11: Kiểm thử dự án cuối kỳ và nộp dự án (23/11/2026 – 27/11/2026)",
            "objectives": "Kiểm thử và xác thực các chức năng chính của ứng dụng; hoàn thiện tài liệu kỹ thuật và nộp dự án nhóm hoàn chỉnh.",
            "achievements": "- Đã kiểm thử các luồng hoạt động chính của ứng dụng và ghi nhận các điểm cần tối ưu.\n- Xác nhận các lỗi đã được xử lý và hoàn thiện tài liệu dự án.\n- Hoàn tất nộp dự án nhóm Nutrition E-Commerce.",
            "tasks": [
                {
                    "day": "Thứ Hai",
                    "desc": "Main Task: Kiểm thử hệ thống dự án cuối kỳ (Final Project Testing).\nDetailed Activities: Kiểm thử các chức năng chính của Nutrition E-Commerce, rà soát trạng thái triển khai AWS và ghi nhận các điểm cần hoàn thiện trước khi nộp.",
                    "start": "2026-11-23",
                    "end": "2026-11-23",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)\n[AWS Well-Architected – Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)"
                },
                {
                    "day": "Thứ Sáu",
                    "desc": "Main Task: Hoàn thiện tài liệu và nộp dự án (Project Finalization & Submission).\nDetailed Activities: Xác nhận các vấn đề kỹ thuật đã được xử lý, đóng gói tài liệu dự án và nộp hoàn tất đồ án Nutrition E-Commerce.",
                    "start": "2026-11-27",
                    "end": "2026-11-27",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)"
                }
            ]
        },
        "en": {
            "topic": "Week 11: Final Project Testing & Project Submission (23/11/2026 – 27/11/2026)",
            "objectives": "Test and validate core application features across user journeys; finalize technical documentation and submit the team project.",
            "achievements": "- Verified primary application user flows and identified optimization areas during testing.\n- Confirmed resolved issues and finalized project documentation.\n- Completed final submission of the Nutrition E-Commerce team project.",
            "tasks": [
                {
                    "day": "Monday",
                    "desc": "Main Task: Final Project Testing.\nDetailed Activities: Test the main features of Nutrition E-Commerce, review AWS deployment status, and identify remaining issues before final submission.",
                    "start": "2026-11-23",
                    "end": "2026-11-23",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)\n[AWS Well-Architected – Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)"
                },
                {
                    "day": "Friday",
                    "desc": "Main Task: Project Finalization and Submission.\nDetailed Activities: Verify resolved issues, finalize project documentation, and submit the completed Nutrition E-Commerce project.",
                    "start": "2026-11-27",
                    "end": "2026-11-27",
                    "ref": "[Nutrition E-Commerce – Project Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce)"
                }
            ]
        }
    },
    {
        "weekNum": 12,
        "vi": {
            "topic": "Tuần 12: Ôn tập kiến thức AWS (30/11/2026)",
            "objectives": "Củng cố kiến thức AWS đã tích lũy trong kỳ thực tập; ôn tập các khái niệm kiến trúc đám mây cốt lõi và tổng kết các bài học kỹ thuật đã học.",
            "achievements": "- Nắm vững và hệ thống hóa các khái niệm AWS cốt lõi.\n- Ôn tập các bài học liên quan đến kiến trúc ứng dụng và vận hành đám mây.\n- Tổng kết những kiến thức quan trọng thu nhận được từ kỳ thực tập.",
            "tasks": [
                {
                    "day": "Thứ Hai",
                    "desc": "Main Task: Ôn tập kiến thức AWS và tổng kết nội dung đã học trong kỳ thực tập.\nDetailed Activities: Ôn tập các dịch vụ AWS cốt lõi và các khái niệm kiến trúc đám mây đã học trong suốt kỳ thực tập. Tổng hợp các bài học kỹ thuật quan trọng từ dự án Nutrition E-Commerce và đúc kết kinh nghiệm học tập thực tế.",
                    "start": "2026-11-30",
                    "end": "2026-11-30",
                    "ref": "[AWS Skill Builder](https://explore.skillbuilder.aws/)"
                }
            ]
        },
        "en": {
            "topic": "Week 12: AWS Knowledge Review (30/11/2026)",
            "objectives": "Consolidate AWS knowledge gained during the internship; review key cloud architecture concepts and summarize technical lessons learned.",
            "achievements": "- Consolidated understanding of core AWS concepts.\n- Reviewed lessons related to application architecture and cloud operations.\n- Summarized key knowledge gained from the internship.",
            "tasks": [
                {
                    "day": "Monday",
                    "desc": "Main Task: Review AWS Knowledge and Internship Learnings.\nDetailed Activities: Review core AWS services and cloud architecture concepts learned throughout the internship. Consolidate key technical lessons from the Nutrition E-Commerce project and reflect on the overall learning experience.",
                    "start": "2026-11-30",
                    "end": "2026-11-30",
                    "ref": "[AWS Skill Builder](https://explore.skillbuilder.aws/)"
                }
            ]
        }
    }
],
  proposal: {
    vi: {
      summary: "Hệ thống IoT Weather Platform được thiết kế nhằm nâng cao năng lực thu thập và phân tích dữ liệu thời tiết cho phòng thí nghiệm tại TP.HCM. Giải pháp hỗ trợ kết nối từ 5 đến 15 trạm quan trắc sử dụng vi điều khiển ESP32 và Raspberry Pi truyền tin qua giao thức MQTT. Nền tảng tận dụng tối đa các dịch vụ AWS Serverless giúp giám sát thời gian thực, dự báo xu hướng với chi phí vận hành tối ưu, phân quyền truy cập an toàn qua Amazon Cognito.",
      problem: "Các trạm khí tượng hiện tại yêu cầu thu thập số liệu thủ công, dễ thất thoát và khó quản lý khi số lượng trạm tăng lên. Chưa có hệ thống tập trung cung cấp dữ liệu tức thời và các giải pháp thương mại bên ngoài quá đắt đỏ, phức tạp đối với nhu cầu nghiên cứu học thuật.",
      solution: "Nền tảng sử dụng AWS IoT Core tiếp nhận dữ liệu MQTT, AWS Lambda và API Gateway xử lý logic, Amazon S3 lưu trữ dữ liệu dạng Data Lake, kết hợp AWS Glue Crawlers và ETL jobs trích xuất dữ liệu phục vụ phân tích. Giao diện trực quan được xây dựng trên AWS Amplify với Next.js.\nLợi ích: Giảm thiểu thao tác báo cáo thủ công, cung cấp kho dữ liệu chuẩn hóa cho các nhà nghiên cứu AI huấn luyện mô hình dự báo thời tiết, và giữ chi phí đám mây ở mức dưới 10 USD/tháng.",
      arch: "Cảm biến ESP32 -> Giao thức MQTT bảo mật TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Kiểm tra & Chuẩn hóa) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Dashboard Next.js qua API Gateway.",
      budget: "- AWS IoT Core (500.000 bản tin/tháng): $0.50\n- AWS Lambda (1 triệu lượt gọi, 128MB): $0.20 (Thuộc gói miễn phí)\n- Amazon S3 lưu trữ và truy xuất: $1.20\n- AWS Glue ETL Jobs (Chạy theo lịch): $3.50\n- Amazon Cognito User Pool: $0.00 (Miễn phí)\n-> Tổng chi phí ước tính: ~$5.40 USD/tháng."
    },
    en: {
      summary: "The IoT Weather Platform is designed for the ITea Lab team in Ho Chi Minh City to enhance weather data collection and analysis. It supports up to 5 weather stations, with potential scalability to 10-15, utilizing Raspberry Pi edge devices with ESP32 sensors to transmit data via MQTT. The platform leverages AWS Serverless services to deliver real-time monitoring, predictive analytics, and cost efficiency, with access restricted to lab members via Amazon Cognito.",
      problem: "Current weather stations require manual data collection, becoming unmanageable with multiple units. There is no centralized system for real-time data or analytics, and third-party commercial platforms are costly and overly complex for academic research.",
      solution: "The platform uses AWS IoT Core to ingest MQTT data, AWS Lambda and API Gateway for processing, Amazon S3 for storage (including a data lake), and AWS Glue Crawlers/ETL jobs to extract, transform, and load data for analysis. AWS Amplify with Next.js provides the web dashboard.\nBenefits: Reduces manual reporting, provides centralized live data, enables AI researchers to train climate models, and optimizes operational cloud costs to under $10/month.",
      arch: "ESP32 Sensors -> MQTT over TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Validation & Formatting) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Next.js Dashboard via API Gateway.",
      budget: "- AWS IoT Core (500k messages/month): $0.50\n- AWS Lambda (1M executions, 128MB): $0.20 (Covered by Free Tier)\n- Amazon S3 Storage & API Calls: $1.20\n- AWS Glue ETL Jobs (On-demand): $3.50\n- Amazon Cognito User Pool: $0.00 (Free)\n-> Estimated total cost: ~$5.40 USD/month."
    }
  },
  blogs: {
    vi: [
      {
        id: "blog-1",
        slug: "s3-express-one-zone",
        category: "AWS / Storage / Performance",
        title: "AMAZON S3 EXPRESS ONE ZONE – NHANH HƠN TỚI 10 LẦN, NHƯNG HỆ THỐNG CÓ THỰC SỰ HIỆU QUẢ HƠN?",
        url: "#/blogs/s3-express-one-zone",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: "Trong các hệ thống AI/ML, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu đòi hỏi ứng dụng liên tục truy xuất dữ liệu từ Amazon S3. Khi tốc độ đọc không theo kịp CPU/GPU, hệ thống gặp I/O Bottleneck làm lãng phí compute. Amazon S3 Express One Zone cung cấp độ trễ sub-10ms với Directory Bucket trong cùng 1 AZ. Tuy nhiên, theo định luật Amdahl, tối ưu 10x I/O chỉ giúp tổng thời gian hoàn thành tác vụ giảm 18% nếu tác vụ bị nghẽn ở compute."
      },
      {
        id: "blog-2",
        slug: "aws-event-driven-architecture",
        category: "AWS Cloud / Distributed Systems / Architecture",
        title: "AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?",
        url: "#/blogs/aws-event-driven-architecture",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        date: "04/11/2026",
        image: "assets/images/aws-event-driven-architecture.png",
        snippet: "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB: Một hệ thống có thể xử lý tất cả sự kiện thành công 100% nhưng vẫn tạo ra kết quả sai do Race Condition. Phân tích nguyên nhân tại sao Idempotency và SQS FIFO chưa đủ, và đề xuất mô hình giải pháp kết hợp S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Write và Reconciliation worker."
      },
      {
        id: "blog-3",
        slug: "aws-ec2-identity-containment",
        category: "AWS Study Group",
        title: "CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG",
        subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
        url: "#/blogs/aws-ec2-identity-containment",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        date: "15/11/2026",
        image: "assets/images/aws-ec2-identity-containment-architecture.png",
        snippet: "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích sự khác biệt cốt lõi giữa Network Containment và Identity Containment: Security Group không thu hồi IAM Session, IMDSv2 không bảo vệ credentials khi máy chủ bị thực thi mã từ xa. Đề xuất quy trình Automated Incident Response kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC."
      }
    ],
    en: [
      {
        id: "blog-1",
        slug: "s3-express-one-zone",
        category: "AWS / Storage / Performance",
        title: "AMAZON S3 EXPRESS ONE ZONE – UP TO 10X FASTER, BUT IS THE SYSTEM TRULY MORE EFFICIENT?",
        url: "#/blogs/s3-express-one-zone",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: "In modern AI/ML systems, continuously fetching millions of images from S3 often creates I/O bottlenecks where compute sits idle. Amazon S3 Express One Zone delivers single-digit millisecond latency with Directory Buckets in a single AZ. However, according to Amdahl's Law, a 10x I/O speedup only reduces total execution time by 18% if the workload is compute-heavy."
      },
      {
        id: "blog-2",
        slug: "aws-event-driven-architecture",
        category: "AWS Cloud / Distributed Systems / Architecture",
        title: "AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?",
        url: "#/blogs/aws-event-driven-architecture",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        date: "04/11/2026",
        image: "assets/images/aws-event-driven-architecture.png",
        snippet: "In AWS Event-Driven Architectures combining Amazon S3, EventBridge, SQS, Lambda, and DynamoDB: a system can process all events with 100% success yet produce incorrect business state due to Race Conditions. An investigation into why Idempotency and SQS FIFO are not enough, proposing S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Writes, and Reconciliation."
      },
      {
        id: "blog-3",
        slug: "aws-ec2-identity-containment",
        category: "AWS Study Group",
        title: "EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED",
        subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
        url: "#/blogs/aws-ec2-identity-containment",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        date: "15/11/2026",
        image: "assets/images/aws-ec2-identity-containment-architecture.png",
        snippet: "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth analysis of Network Containment vs Identity Containment: why Security Groups do not terminate active IAM sessions, and how IMDSv2 falls short after remote code execution. Architecting automated incident response combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys."
      }
    ]
  },
  events: {
    vi: [
      {
        id: "event-1",
        slug: "aws-cloud-ai-day-hanoi-2026",
        name: "Sự kiện 1 - AWS Cloud and AI Day Hanoi 2026 (29/09/2026)",
        dateTime: "07:30 – 17:00, 29/09/2026",
        location: "Theo dõi trực tiếp tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh (Sự kiện chính tại JW Marriott Hotel Hanoi)",
        role: "Người tham dự Watch Party (Watch Party Attendee)",
        speakers: "Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner",
        topic: "Điện toán Đám mây, Agentic AI và Hiện đại hóa Hạ tầng Doanh nghiệp",
        category: "Cloud Computing & Agentic AI",
        shortDesc: "Tham dự theo dõi trực tiếp hội nghị thường niên AWS Cloud and AI Day Hanoi 2026 tại điểm cầu FCAJ HCMC Watch Party: chiến lược AI quốc gia, Agentic AI, Amazon Bedrock và hiện đại hóa hạ tầng doanh nghiệp.",
        highlights: "• Theo dõi trực tiếp từ Hà Nội tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh.\n• Bài phát biểu của Dr. Werner Vogels (CTO Amazon.com) về tư duy xây dựng hệ thống phân tán tin cậy và vai trò của AI.\n• Chuyên đề Agentic AI, Amazon Bedrock, hiện đại hóa cơ sở dữ liệu và bảo mật đám mây quy mô doanh nghiệp.",
        hasFullReport: true
      },
      {
        id: "event-2",
        slug: "fireside-chat-dr-werner-vogels",
        name: "Sự kiện 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud & AI in Vietnam (02/10/2026)",
        dateTime: "08:30 – 12:00, 02/10/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Dr. Werner Vogels (Phó Chủ tịch kiêm CTO, Amazon.com)",
        topic: "Kỹ thuật xây dựng hệ thống quy mô lớn, Renaissance Developer và tương lai của trí tuệ nhân tạo",
        category: "Cloud Computing & Artificial Intelligence",
        shortDesc: "Buổi trò chuyện trực tiếp cùng Dr. Werner Vogels (VP & CTO Amazon.com) về tương lai Cloud & AI tại Việt Nam, nguyên lý thiết kế hệ thống quy mô lớn và hình mẫu Renaissance Developer trong kỷ nguyên AI.",
        highlights: "• Định hướng tương lai Cloud & AI tại Việt Nam và vai trò của kỹ sư phần mềm trong kỷ nguyên AI.\n• Hình mẫu Renaissance Developer: kết hợp chiều sâu kỹ thuật, tư duy hệ thống và hiểu biết nghiệp vụ.\n• Nguyên lý vận hành hệ thống tin cậy ở quy mô lớn (Design for Failure, Observability, Cost-aware Architecture).",
        hasFullReport: true
      },
      {
        id: "event-3",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "Sự kiện 3 - First Cloud AI Journey Meetup: Khám phá AWS Cloud, Cloud Security & AI Agents (24/10/2026)",
        dateTime: "08:00 – 12:00, 24/10/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)",
        topic: "Khám phá AWS Cloud, Cloud Security và Tương lai của AI Agents",
        category: "Cloud Computing, Cloud Security & AI Agents",
        shortDesc: "Khám phá 5 phiên kỹ thuật chuyên sâu: Voice AI Contact Center độ trễ thấp, chia sẻ tài nguyên AWS RAM, kiểm thử bảo mật Shift-Left DevSecOps, Amazon Bedrock AgentCore và tự động hóa phát triển phần mềm với Kiro Crew.",
        highlights: "• Voice AI Contact Center: Đàm thoại tiếng Việt thời gian thực, tối ưu độ trễ ~1.8s và phỏng vấn sơ loại tự động.\n• AWS RAM: Chia sẻ tài nguyên an toàn đa tài khoản, kết hợp AWS Organizations, IAM và SCPs.\n• AWS Pentest & DevSecOps: Kiểm thử bảo mật Shift-Left trên mã nguồn Terraform, PR GitHub/GitLab và Security Agent.\n• Amazon Bedrock AgentCore: Môi trường thực thi AgentCore Runtime độc lập và quản lý bộ nhớ AgentCore Memory (Short-term & Long-term).\n• Kiro Crew: Tự động hóa phát triển phần mềm, Artifact Generation, quản trị Context Window (Auto Compact, Context Breakdown) và Security Guardrails.",
        hasFullReport: true
      },
      {
        id: "event-4",
        slug: "enterprise-ai-on-aws-cloud",
        name: "Sự kiện 4 - Enterprise AI on AWS Cloud: Từ Prototype đến Production (14/11/2026)",
        dateTime: "09:00 – 12:00, 14/11/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
        topic: "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
        category: "Artificial Intelligence & Cloud Computing",
        shortDesc: "Thách thức chuyển đổi AI từ thử nghiệm sang môi trường doanh nghiệp: 4 trụ cột vận hành (Security, Reliability, Scalability, Cost), co giãn linh hoạt trên AWS và 4 mô hình Multi-Agent.",
        highlights: "• Khác biệt cốt lõi giữa Academic AI (Độ chính xác) và Enterprise AI (Giá trị kinh doanh & Vận hành liên tục).\n• 4 thành phần nền tảng của hệ thống AI: Data → Model → Feature → User.\n• Phân định Training (học từ dữ liệu) và Inference (suy luận lặp lại), tác động của LLM Tokens đến chi phí và độ trễ.\n• 4 trụ cột vận hành Production AI: Security, Reliability, Scalability, Cost Optimization.\n• Co giãn linh hoạt với AWS Lambda, Auto Scaling và Elastic Load Balancer.\n• 4 mô hình Multi-Agent phổ biến: Routing/Supervisor, Sequential, Parallel, Evaluator-Optimizer.",
        hasFullReport: true
      }
    ],
    en: [
      {
        id: "event-1",
        slug: "aws-cloud-ai-day-hanoi-2026",
        name: "Event 1 - AWS Cloud and AI Day Hanoi 2026 (September 29, 2026)",
        dateTime: "07:30 AM – 05:00 PM, September 29, 2026",
        location: "Watched live at FCAJ HCMC Watch Party, Ho Chi Minh City (Main venue: JW Marriott Hotel Hanoi)",
        role: "Watch Party Attendee",
        speakers: "Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner",
        topic: "Cloud Computing, Agentic AI, and Enterprise Infrastructure Modernization",
        category: "Cloud Computing & Agentic AI",
        shortDesc: "Attended the live broadcast of AWS Cloud and AI Day Hanoi 2026 at the FCAJ HCMC Watch Party: national cloud & AI strategy, Agentic AI, Amazon Bedrock, and enterprise infrastructure modernization.",
        highlights: "• Watched the live stream from Hanoi at the FCAJ HCMC Watch Party in Ho Chi Minh City.\n• Keynote by Dr. Werner Vogels (CTO, Amazon.com) on building reliable distributed systems and the evolving role of AI.\n• Technical tracks on Agentic AI, Amazon Bedrock, database modernization, and enterprise cloud security.",
        hasFullReport: true
      },
      {
        id: "event-2",
        slug: "fireside-chat-dr-werner-vogels",
        name: "Event 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud & AI in Vietnam (October 2, 2026)",
        dateTime: "08:30 AM – 12:00 PM, October 2, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Dr. Werner Vogels (Vice President & CTO, Amazon.com)",
        topic: "Engineering at Scale, the Renaissance Developer, and the Future of Artificial Intelligence",
        category: "Cloud Computing & Artificial Intelligence",
        shortDesc: "Fireside Chat with Dr. Werner Vogels (VP & CTO, Amazon.com) on the future of Cloud & AI in Vietnam, engineering principles for reliable large-scale systems, and the Renaissance Developer mindset.",
        highlights: "• Exploring the future of AWS Cloud and AI adoption in Vietnam.\n• The Renaissance Developer model combining deep technical mastery, systems thinking, and domain understanding.\n• Principles for building reliable systems at scale (Design for Failure, Observability, Cost-aware Architecture).",
        hasFullReport: true
      },
      {
        id: "event-3",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "Event 3 - First Cloud AI Journey Meetup: AWS Cloud, Cloud Security & AI Agents (October 24, 2026)",
        dateTime: "08:00 AM – 12:00 PM, October 24, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)",
        topic: "Exploring AWS Cloud, Cloud Security, and the Future of AI Agents",
        category: "Cloud Computing, Cloud Security & AI Agents",
        shortDesc: "Five technical sessions: Voice AI Contact Center, cross-account resource sharing with AWS RAM, Shift-Left automated pentesting, Amazon Bedrock AgentCore, and AI-powered software automation with Kiro Crew.",
        highlights: "• Voice AI Contact Center: Real-time Vietnamese voice processing, ~1.8s latency optimization, and automated preliminary screening.\n• AWS RAM: Secure cross-account resource sharing combined with AWS Organizations, IAM, and SCPs.\n• Cloud Security & DevSecOps: Shift-Left security validation on Terraform code, GitHub/GitLab PRs, and AI Security Agents.\n• Amazon Bedrock AgentCore: Production AgentCore Runtime isolation and dual-tier AgentCore Memory (Short-term & Long-term).\n• Kiro Crew: AI-assisted development, Artifact Generation, Context Window Management (Auto Compact, Context Breakdown), and Security Guardrails.",
        hasFullReport: true
      },
      {
        id: "event-4",
        slug: "enterprise-ai-on-aws-cloud",
        name: "Event 4 - Enterprise AI on AWS Cloud: From Prototype to Production (November 14, 2026)",
        dateTime: "09:00 AM – 12:00 PM, November 14, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
        topic: "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
        category: "Artificial Intelligence & Cloud Computing",
        shortDesc: "Challenges of transitioning AI from prototype to enterprise production: 4 operational pillars (Security, Reliability, Scalability, Cost), elastic AWS scaling, and 4 common Multi-Agent architectures.",
        highlights: "• Fundamental differences between Academic AI (Model Accuracy) and Enterprise AI (Business Value & Continuous Operations).\n• 4 Core Components of Enterprise AI Systems: Data → Model → Feature → User.\n• Distinguishing Training vs. Inference, token economics, and operational latency impacts.\n• 4 Pillars of Production AI: Security, Reliability, Scalability, and Cost Optimization.\n• Elastic Scalability using AWS Lambda, Auto Scaling, and Elastic Load Balancing.\n• 4 Common Multi-Agent Architecture Patterns: Routing/Supervisor, Sequential, Parallel, and Evaluator-Optimizer.",
        hasFullReport: true
      }
    ]
  },
  criteria: [
    { id: 1, title_vi: "Kiến thức & Kỹ năng chuyên môn", desc_vi: "Hiểu biết ngành, ứng dụng kiến thức vào thực tế, thành thạo công cụ, chất lượng công việc", title_en: "Professional knowledge & skills", desc_en: "Understanding of the field, applying knowledge in practice, proficiency with tools, work quality", rating: "good" },
    { id: 2, title_vi: "Khả năng học hỏi", desc_vi: "Khả năng tiếp thu kiến thức mới và học nhanh", title_en: "Ability to learn", desc_en: "Ability to absorb new knowledge and learn quickly", rating: "fair" },
    { id: 3, title_vi: "Tính chủ động", desc_vi: "Chủ động tìm kiếm công việc, không chờ đợi nhắc nhở", title_en: "Proactiveness", desc_en: "Taking initiative, seeking out tasks without waiting for instructions", rating: "good" },
    { id: 4, title_vi: "Tinh thần trách nhiệm", desc_vi: "Hoàn thành công việc đúng hạn và đảm bảo chất lượng", title_en: "Sense of responsibility", desc_en: "Completing tasks on time and ensuring quality", rating: "good" },
    { id: 5, title_vi: "Tính kỷ luật", desc_vi: "Tuân thủ lịch trình, nội quy và quy trình làm việc", title_en: "Discipline", desc_en: "Adhering to schedules, rules, and work processes", rating: "good" },
    { id: 6, title_vi: "Tinh thần cầu tiến", desc_vi: "Sẵn sàng tiếp thu phản hồi và hoàn thiện bản thân", title_en: "Progressive mindset", desc_en: "Willingness to receive feedback and improve oneself", rating: "fair" },
    { id: 7, title_vi: "Kỹ năng giao tiếp", desc_vi: "Trình bày ý tưởng và báo cáo công việc rõ ràng, mạch lạc", title_en: "Communication", desc_en: "Presenting ideas and reporting work clearly", rating: "fair" },
    { id: 8, title_vi: "Làm việc nhóm", desc_vi: "Phối hợp hiệu quả với đồng nghiệp và tham gia hoạt động nhóm", title_en: "Teamwork", desc_en: "Working effectively with colleagues and participating in teams", rating: "good" },
    { id: 9, title_vi: "Tác phong chuyên nghiệp", desc_vi: "Tôn trọng đồng nghiệp, đối tác và môi trường làm việc", title_en: "Professional conduct", desc_en: "Respecting colleagues, partners, and the work environment", rating: "good" },
    { id: 10, title_vi: "Kỹ năng giải quyết vấn đề", desc_vi: "Phát hiện vấn đề, đề xuất giải pháp và thể hiện tư duy sáng tạo", title_en: "Problem-solving skills", desc_en: "Identifying problems, proposing solutions, and showing creativity", rating: "fair" },
    { id: 11, title_vi: "Đóng góp cho dự án / đội ngũ", desc_vi: "Hiệu quả công việc, ý tưởng cải tiến, được đội ngũ ghi nhận", title_en: "Contribution to project/team", desc_en: "Work effectiveness, innovative ideas, recognition from the team", rating: "good" },
    { id: 12, title_vi: "Đánh giá tổng thể", desc_vi: "Đánh giá chung cho toàn bộ thời gian thực tập", title_en: "Overall evaluation", desc_en: "General evaluation of the entire internship period", rating: "good" }
  ],
  selfNarrative: {
    vi: "Trong suốt kỳ thực tập tại Amazon Web Services Việt Nam từ 10/08/2026 đến 10/11/2026, em đã có cơ hội quý báu để học hỏi, thực hành và vận dụng kiến thức chuyên ngành vào các dự án Cloud quy mô thực tế. Em luôn chủ động hoàn thành các bài tập lab, tham gia đầy đủ các sự kiện kỹ thuật và tích cực thảo luận cùng Mentor Trần Anh Dũng.",
    en: "During my internship at Amazon Web Services Vietnam from 10/08/2026 to 10/11/2026, I had valuable opportunities to learn, practice, and apply academic knowledge to real-world cloud architectures. I consistently took the initiative to complete hands-on labs, attended technical events, and actively collaborated with Mentor Tran Anh Dung."
  },
  needsImprovement: {
    vi: "1. Tiếp tục rèn luyện tính kỷ luật, quản lý thời gian hiệu quả hơn khi xử lý nhiều đầu việc song song.\n2. Nâng cao tư duy phân tích và xử lý sự cố kỹ thuật khi đối mặt với các kiến trúc phân tán phức tạp.\n3. Tự tin hơn khi thuyết trình và báo cáo tiến độ kỹ thuật bằng tiếng Anh trong các cuộc họp quốc tế.",
    en: "1. Continue strengthening personal discipline and time management when balancing multiple deliverables.\n2. Further enhance troubleshooting acumen when diagnosing complex distributed cloud environments.\n3. Increase confidence when presenting technical milestones in English during cross-border meetings."
  },
  feedback: {
    vi: {
      env: "Chương trình AWS First Cloud AI Journey mang đến môi trường học tập và thực tập chuyên nghiệp, thân thiện, giúp em có thêm nhiều trải nghiệm và kiến thức bổ ích.",
      mentor: "Mentor và Ban tổ chức luôn nhiệt tình hướng dẫn, hỗ trợ và giải đáp những thắc mắc khi em gặp khó khăn hoặc có nội dung chưa hiểu trong quá trình tham gia chương trình.",
      relevance: "Chương trình có sự liên hệ với ngành học của em ở một số khía cạnh, đồng thời giúp em mở rộng kiến thức về điện toán đám mây và bảo mật hệ thống.",
      learning: "Thông qua chương trình, em có cơ hội tiếp cận kiến thức thực tế, rèn luyện khả năng tự học và tích lũy thêm kinh nghiệm hữu ích."
    },
    en: {
      env: "The AWS First Cloud AI Journey program provided a professional and welcoming learning and internship environment, giving me valuable practical experience and knowledge.",
      mentor: "The Mentor and organizing team were consistently supportive and dedicated, answering questions whenever I faced challenges or needed clarification throughout the program.",
      relevance: "The program connects with my academic major across several aspects while helping me broaden my knowledge of cloud computing and system security.",
      learning: "Through the program, I had the opportunity to access real-world knowledge, cultivate independent learning skills, and gain meaningful practical experience."
    }
  }
};

// ==========================================
// 3. PERSISTENCE & STATE MANAGEMENT
// ==========================================
const STORAGE_KEY = 'fcaj_report_bilingual_v23';
const LANG_KEY = 'fcaj_report_lang';

class AppLanguageManager {
  constructor() {
    this.cleanupLegacyStorage();
    this.currentLang = localStorage.getItem(LANG_KEY) || 'vi';
    this.data = this.loadData();
  }

  cleanupLegacyStorage() {
    const legacyKeys = [
      'fcaj_report_bilingual_v22',
      'fcaj_report_bilingual_v21',
      'fcaj_report_bilingual_v20',
      'fcaj_report_bilingual_v19',
      'fcaj_report_bilingual_v18',
      'fcaj_report_bilingual_v17',
      'fcaj_report_bilingual_v16',
      'fcaj_report_bilingual_v15',
      'fcaj_report_bilingual_v14',
      'fcaj_report_bilingual_v13',
      'fcaj_report_bilingual_v12',
      'fcaj_report_bilingual_v11',
      'fcaj_report_bilingual_v10',
      'fcaj_report_bilingual_v9',
      'fcaj_report_bilingual_v8',
      'fcaj_report_bilingual_v7',
      'fcaj_report_bilingual_v6',
      'fcaj_report_bilingual_v5',
      'fcaj_report_bilingual_v4',
      'fcaj_report_bilingual_v3',
      'fcaj_report_bilingual_v2',
      'fcaj_report_bilingual_v1',
      'fcaj_internship_report_v2',
      'fcaj_internship_report_v1'
    ];
    legacyKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });
  }

  loadData() {
    // Single Source of Truth in Read-Only Mode: always load pure DEFAULT_BILINGUAL_DATA from source code
    return JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
  }

  saveData() {
    // Read-only mode: no-op to prevent UI modification
  }

  saveCurrentInputs() {
    // Read-only mode: no-op
  }

  setLang(newLang) {
    if (newLang !== 'vi' && newLang !== 'en') return;
    this.currentLang = newLang;
    try {
      localStorage.setItem(LANG_KEY, newLang);
    } catch (e) {}
    this.applyLanguage();
  }

  applyLanguage() {
    const lang = this.currentLang;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.vi;

    // Set HTML lang attribute
    document.documentElement.lang = lang;

    // Update active class on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Document Title
    document.title = dict.pageTitleDoc;

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update all titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    // Update all image alt texts
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key]) {
        el.alt = dict[key];
      }
    });

    // Update dynamic header title according to current active view
    updateHeaderPageTitle();

    // Update current date in header
    updateHeaderDate();

    // Update greeting
    updateHeaderGreeting();

    // Re-render views with language specific data
    renderStudentInfoInputs();
    renderWeekTabs();
    renderWorklogView();
    renderProposalInputs();
    renderWorkshopView();
    renderBlogsList();
    renderEventsList();
    const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
    if (currentHash.startsWith('events/')) {
      const slug = currentHash.replace('events/', '');
      renderEventDetail(slug);
    } else {
      renderEventDetail('aws-cloud-ai-day-hanoi-2026');
      renderEventDetail('fireside-chat-dr-werner-vogels');
      renderEventDetail('first-cloud-ai-journey-24-10-2026');
      renderEventDetail('enterprise-ai-on-aws-cloud');
    }
    if (currentHash.startsWith('blogs/')) {
      const slug = currentHash.replace('blogs/', '');
      renderBlogDetail(slug);
    } else {
      renderBlogDetail('s3-express-one-zone');
    }
    syncWorkshopSidebar();
    updateDetailPager(currentHash);
    renderCriteriaTable();
    renderSelfAssessmentInputs();
    renderFeedbackInputs();
  }
}

const app = new AppLanguageManager();

// ==========================================
// 4. UI HELPERS & NOTIFICATIONS
// ==========================================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'all 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function t(key) {
  const dict = I18N_DICTIONARY[app.currentLang] || I18N_DICTIONARY.vi;
  return dict[key] || key;
}

// ==========================================
// 5. NAVIGATION & ROUTING
// ==========================================
function updateHeaderPageTitle() {
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  const titleEl = document.getElementById('page-title');
  if (!titleEl) return;

  if (currentHash.startsWith('events/')) {
    titleEl.textContent = app.currentLang === 'vi'
      ? '4. Sự kiện thực tế đã tham gia — Báo cáo thu hoạch'
      : '4. Events Participated — Harvest Report';
    return;
  }
  if (currentHash.startsWith('blogs/')) {
    const slug = currentHash.replace('blogs/', '');
    if (slug === 'aws-ec2-identity-containment') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — EC2 Identity Containment'
        : '3. Technical Blog — EC2 Identity Containment';
    } else if (slug === 'aws-event-driven-architecture') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — AWS Event-Driven Architecture'
        : '3. Technical Blog — AWS Event-Driven Architecture';
    } else if (slug === 's3-express-one-zone') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — Amazon S3 Express One Zone'
        : '3. Technical Blog — Amazon S3 Express One Zone';
    } else {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Các bài viết kỹ thuật đã đăng'
        : '3. Published Technical Blogs';
    }
    return;
  }

  const key = `title_${currentHash.replace(/-/g, '_')}`;
  titleEl.textContent = t(key);
}

function updateHeaderDate() {
  const dateEl = document.getElementById('current-date');
  if (!dateEl) return;
  const now = new Date();

  if (app.currentLang === 'vi') {
    const daysVi = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysVi[now.getDay()]}, ${dd}/${mm}/${now.getFullYear()}`;
  } else {
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysEn[now.getDay()]}, ${mm}/${dd}/${now.getFullYear()}`;
  }
}

function updateHeaderGreeting() {
  const greetingEl = document.getElementById('greeting-display');
  if (!greetingEl) return;
  const firstName = (app.data.studentInfo.fullName || 'Phan Nhật Uyên').split(' ').pop();
  const hour = new Date().getHours();
  let greetKey = 'greetingMorning';
  if (hour >= 12 && hour < 18) {
    greetKey = 'greetingAfternoon';
  } else if (hour >= 18 || hour < 5) {
    greetKey = 'greetingEvening';
  }
  greetingEl.textContent = `${t(greetKey)}, ${firstName}`;
}

function navigateTo(pageId) {
  const cleanId = (pageId || '').replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  // Mỗi lần mở Worklog, mặc định hiển thị Tuần 1
if (cleanId === 'worklog') {
  app.data.currentWeek = 1;
  renderWeekTabs();
  renderWorklogView();
}
  if (['cai-dat', 'settings', 'export-print'].includes(cleanId)) {
    navigateTo('thong-tin');
    return;
  }

  // Highlight active nav link in sidebar
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    const isMatching = linkPage === cleanId ||
      (cleanId.startsWith('events') && linkPage === 'events') ||
      (cleanId.startsWith('blogs') && linkPage === 'blogs-posted');
    link.classList.toggle('active', isMatching);
  });

  // Deactivate all page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  // Determine target element
  let viewId = `view-${cleanId.replace(/\//g, '-')}`;
  let target = document.getElementById(viewId);
  if (!target && cleanId.startsWith('events/')) {
    target = document.getElementById('view-events-enterprise-ai-on-aws-cloud') ||
             document.getElementById('view-events-aws-cloud-ai-day-hanoi-2026') ||
             document.getElementById('view-events-fireside-chat-dr-werner-vogels') ||
             document.getElementById('view-events-first-cloud-ai-journey-24-10-2026');
  }
  if (!target && cleanId.startsWith('blogs/')) {
    target = document.getElementById('view-blogs-s3-express-one-zone');
  }

  if (target) {
    target.classList.add('active');
  }

  // Update URL hash if needed
  if (window.location.hash !== `#/${cleanId}`) {
    window.location.hash = `#/${cleanId}`;
  }

  // If navigating to event report or blog detail, render the detailed view
  if (cleanId.startsWith('events/')) {
    const slug = cleanId.replace('events/', '') || 'first-cloud-ai-journey-24-10-2026';
    renderEventDetail(slug);
  } else if (cleanId === 'events') {
    renderEventsList();
  } else if (cleanId.startsWith('blogs/')) {
    const slug = cleanId.replace('blogs/', '') || 's3-express-one-zone';
    renderBlogDetail(slug);
  } else if (cleanId === 'blogs-posted') {
    renderBlogsList();
  } else if (cleanId === 'proposal') {
    renderProposalView();
  } else if (cleanId === 'workshop') {
    renderWorkshopView();
  }

  updateDetailPager(cleanId);
  syncWorkshopSidebar();
  updateHeaderPageTitle();
  document.getElementById('sidebar')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const rawHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(rawHash);
}

// ==========================================
// 6. STUDENT INFO (READ-ONLY)
// ==========================================
const AVATAR_FIT_KEY = 'fcaj_student_avatar_fit';

function getAvatarFitMode() {
  // The fit toggle button was removed: always use the default "cover" mode
  return 'cover';
}

function setAvatarFitMode(mode) {
  try { localStorage.setItem(AVATAR_FIT_KEY, mode); } catch (e) {}
  applyAvatarFitMode();
}

function applyAvatarFitMode() {
  const mode = getAvatarFitMode();
  const imgEl = document.getElementById('student-photo-img');
  const fitBtn = document.getElementById('btn-toggle-fit');
  const fitLabel = document.getElementById('fit-label');

  if (imgEl) {
    if (mode === 'contain') {
      imgEl.classList.add('fit-contain');
    } else {
      imgEl.classList.remove('fit-contain');
    }
  }

  if (fitBtn && fitLabel) {
    if (mode === 'contain') {
      fitLabel.textContent = t('photoFitFull') || 'Nguyên ảnh';
      fitBtn.classList.add('active');
    } else {
      fitLabel.textContent = t('photoFitCover') || 'Cắt vừa';
      fitBtn.classList.remove('active');
    }
  }
}

function updateStudentAvatarDisplay() {
  const info = app.data.studentInfo || {};
  const avatar = info.avatar || 'assets/images/profile.jpg';

  const imgEl = document.getElementById('student-photo-img');
  const placeholderEl = document.getElementById('student-photo-placeholder');
  const toolbarEl = document.getElementById('photo-action-toolbar');

  const sidebarAvatar = document.getElementById('sidebar-avatar');
  const headerAvatar = document.querySelector('.user-greeting-pill .avatar-sm');
  const parts = (info.fullName || 'Phan Nhật Uyên').trim().split(' ');
  const initial = (parts[parts.length - 1] || 'U')[0].toUpperCase();

  if (avatar) {
    if (imgEl) {
      imgEl.onerror = () => {
        imgEl.style.display = 'none';
        if (placeholderEl) placeholderEl.style.display = 'flex';
        if (toolbarEl) toolbarEl.style.display = 'none';
        if (sidebarAvatar) {
          sidebarAvatar.innerHTML = '';
          sidebarAvatar.textContent = initial;
        }
        if (headerAvatar) {
          headerAvatar.innerHTML = '';
          headerAvatar.textContent = initial;
        }
      };
      imgEl.onload = () => {
        imgEl.style.display = 'block';
        if (placeholderEl) placeholderEl.style.display = 'none';
        if (toolbarEl) toolbarEl.style.display = 'flex';
      };
      imgEl.src = avatar;
      imgEl.style.display = 'block';
    }
    if (placeholderEl) placeholderEl.style.display = 'none';
    if (toolbarEl) toolbarEl.style.display = 'flex';
    applyAvatarFitMode();

    if (sidebarAvatar) sidebarAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
    if (headerAvatar) headerAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
  } else {
    if (imgEl) {
      imgEl.src = '';
      imgEl.style.display = 'none';
    }
    if (placeholderEl) placeholderEl.style.display = 'flex';
    if (toolbarEl) toolbarEl.style.display = 'none';

    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = '';
      sidebarAvatar.textContent = initial;
    }
    if (headerAvatar) {
      headerAvatar.innerHTML = '';
      headerAvatar.textContent = initial;
    }
  }
}

function renderStudentInfoInputs() {
  const info = app.data.studentInfo;
  const lang = app.currentLang;
  const loc = info[lang] || info.vi;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('info-fullname', info.fullName);
  setVal('info-student-id', info.studentId);
  setVal('info-phone', info.phone);
  setVal('info-email', info.email);
  setVal('info-university', loc.university);
  setVal('info-major', loc.major);
  setVal('info-company', loc.company);
  setVal('info-position', loc.position);
  setVal('info-duration', loc.duration);

  // Update sidebar company label and name
  const sidebarCompany = document.getElementById('sidebar-company');
  if (sidebarCompany) sidebarCompany.textContent = loc.company;
  const sidebarUser = document.getElementById('sidebar-username');
  if (sidebarUser && info.fullName) sidebarUser.textContent = info.fullName;

  // Update student avatar
  updateStudentAvatarDisplay();
  updateHeaderGreeting();
}

function setupStudentInfo() {
  const form = document.getElementById('student-info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  const photoFrame = document.getElementById('student-photo-frame');
  const hdModal = document.getElementById('photo-hd-modal');
  const hdPreview = document.getElementById('photo-hd-preview');
  const btnCloseHd = document.getElementById('btn-close-hd-modal');
  const btnCloseHdBtn = document.getElementById('btn-close-hd-btn');

  // Click the photo to open it enlarged (HD modal)
  const openHdModal = (e) => {
    if (e) e.stopPropagation();
    const info = app.data.studentInfo || {};
    const avatarSrc = info.avatar || 'assets/images/profile.jpg';
    if (avatarSrc && hdModal && hdPreview) {
      hdPreview.onload = () => {
        const resBadge = document.getElementById('hd-modal-resolution');
        if (resBadge && hdPreview.naturalWidth && hdPreview.naturalHeight) {
          resBadge.textContent = `${hdPreview.naturalWidth} × ${hdPreview.naturalHeight} px`;
          resBadge.style.display = 'inline-block';
        }
      };
      hdPreview.src = avatarSrc;
      hdModal.classList.add('active');
    }
  };

  if (photoFrame) {
    photoFrame.addEventListener('click', openHdModal);
  }

  const closeHdModal = () => {
    if (hdModal) hdModal.classList.remove('active');
  };
  if (btnCloseHd) btnCloseHd.addEventListener('click', closeHdModal);
  if (btnCloseHdBtn) btnCloseHdBtn.addEventListener('click', closeHdModal);
  if (hdModal) {
    hdModal.addEventListener('click', (e) => {
      if (e.target === hdModal) closeHdModal();
    });
  }
}

// ==========================================
// 7. 1. WORKLOG (12 WEEKS)
// ==========================================
function getCurrentWeekWorklog() {
  const weekNum = app.data.currentWeek || 1;
  let week = app.data.worklogs.find(w => w.weekNum === weekNum);
  if (!week) {
    week = {
      weekNum: weekNum,
      vi: { objectives: '', achievements: '', tasks: [] },
      en: { objectives: '', achievements: '', tasks: [] }
    };
    app.data.worklogs.push(week);
  }
  if (!week.vi) week.vi = { objectives: '', achievements: '', tasks: [] };
  if (!week.en) week.en = { objectives: '', achievements: '', tasks: [] };
  if (!Array.isArray(week.vi.tasks)) week.vi.tasks = [];
  if (!Array.isArray(week.en.tasks)) week.en.tasks = [];
  return week;
}

function renderWeekTabs() {
  const container = document.getElementById('week-tabs-bar');
  if (!container) return;

  const prefix = t('weekPrefix');
  container.innerHTML = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const isActive = num === (app.data.currentWeek || 1);
    return `
      <button type="button" class="week-tab-btn ${isActive ? 'active' : ''}" onclick="selectWeek(${num})">
        ${prefix} ${num}
      </button>
    `;
  }).join('');
}

function selectWeek(num) {
  app.data.currentWeek = num;
  app.saveData();
  renderWeekTabs();
  renderWorklogView();
}

function renderRefLinks(refStr) {
  if (!refStr || !refStr.trim()) return '-';
  // Normalize markdown links or slash separated links into individual lines
  let normalized = refStr.replace(/\s*\/\s*(?=\[|https?:\/\/)/g, '\n');
  const lines = normalized.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    // Check for markdown link [Title](https://...)
    const mdMatch = line.match(/^\[(.*?)\]\((https?:\/\/[^\s\)]+)\)$/);
    if (mdMatch) {
      const title = mdMatch[1];
      const url = mdMatch[2];
      return `<div style="margin-bottom: 6px; font-size: 13.5px; line-height: 1.5;">
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; display:inline-flex; align-items:center; gap:4px;">
          <span>${escapeHtml(title)}</span>
          <span style="font-size:11px; text-decoration:none;">↗</span>
        </a>
      </div>`;
    }
    const match = line.match(/(https?:\/\/[^\s]+)/);
    if (match) {
      let url = match[1];
      url = url.replace(/\)+$/, '');
      let prefix = line.replace(match[1], '').replace(/[\[\]\(\)]/g, '').trim();
      const label = prefix || url;
      return `<div style="margin-bottom: 6px; font-size: 13.5px; line-height: 1.5;">
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; display:inline-flex; align-items:center; gap:4px;">
          <span>${escapeHtml(label)}</span>
          <span style="font-size:11px; text-decoration:none;">↗</span>
        </a>
      </div>`;
    }
    return `<div style="margin-bottom: 5px; font-size: 13px; color:var(--text-subtle);">${escapeHtml(line)}</div>`;
  }).join('');
}

function formatWorklogDate(dateStr) {
  if (!dateStr) return '-';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  }
  return dateStr;
}

function renderWorklogView() {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const content = week[lang] || week.vi;

  const heading = document.getElementById('current-week-heading');
  const objText = document.getElementById('week-objectives-text');
  const achText = document.getElementById('week-achievements-text');
  const tbody = document.getElementById('week-tasks-tbody');

  if (heading) heading.textContent = `${t('weekHeadingPrefix')} ${week.weekNum}`;
  const subtitle = document.getElementById('current-week-subtitle');
  if (subtitle) {
    if (content.topic) {
      subtitle.textContent = content.topic;
    } else {
      subtitle.textContent = t('bootcampSubtitle');
    }
  }

  if (objText) {
    if (content.objectives && content.objectives.trim()) {
      objText.innerHTML = escapeHtml(content.objectives).replace(/\n/g, '<br>');
      objText.style.color = '';
      objText.style.fontStyle = '';
      objText.style.lineHeight = '1.6';
      objText.style.whiteSpace = 'pre-wrap';
    } else {
      objText.textContent = t('emptyObjectivesMsg');
      objText.style.color = '#94A3B8';
      objText.style.fontStyle = 'italic';
    }
  }

  if (achText) {
    if (content.achievements && content.achievements.trim()) {
      achText.innerHTML = escapeHtml(content.achievements).replace(/\n/g, '<br>');
      achText.style.color = '';
      achText.style.fontStyle = '';
      achText.style.lineHeight = '1.65';
      achText.style.whiteSpace = 'pre-wrap';
    } else {
      achText.textContent = t('emptyAchievementsMsg');
      achText.style.color = '#94A3B8';
      achText.style.fontStyle = 'italic';
    }
  }

  if (tbody) {
    if (!content.tasks || content.tasks.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding: 32px 16px; color: #64748B;">
            <div style="font-size: 14px;">${t('emptyTasksMsg')}</div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = content.tasks.map((task) => `
      <tr>
        <td style="font-weight:700; text-align:center; vertical-align:top; font-size:14px;">${escapeHtml(task.day)}</td>
        <td style="white-space:pre-wrap; line-height: 1.6; font-size:13.5px; vertical-align:top;">${escapeHtml(task.desc)}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top;">${escapeHtml(formatWorklogDate(task.start))}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top;">${escapeHtml(formatWorklogDate(task.end))}</td>
        <td style="vertical-align:top;">
          ${renderRefLinks(task.ref)}
        </td>
      </tr>
    `).join('');
  }
}

function exportWorklogJson() {
  const exportData = {
    appName: "AWS FCAJ Internship Report",
    exportedAt: new Date().toISOString(),
    currentWeek: app.data.currentWeek || 1,
    worklogs: app.data.worklogs
  };
  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `worklog-fcaj-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('toastExportSuccess'));
}

function showExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  const textarea = document.getElementById('export-worklog-textarea');
  if (!modal || !textarea) return;

  const exportData = {
    exportedAt: new Date().toISOString(),
    worklogs: app.data.worklogs
  };
  textarea.value = JSON.stringify(exportData, null, 2);
  modal.classList.add('show');
}

function closeExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  modal?.classList.remove('show');
}

function setupWorklog() {
  // Export / Code modal listeners
  document.getElementById('btn-export-worklog-json')?.addEventListener('click', exportWorklogJson);
  document.getElementById('btn-view-worklog-code')?.addEventListener('click', showExportCodeModal);
  document.getElementById('btn-close-export-modal')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-close-export-btn')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-copy-export-json')?.addEventListener('click', () => {
    const textarea = document.getElementById('export-worklog-textarea');
    if (textarea) {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showToast(t('toastCopyJsonFull'));
      }).catch(() => {
        textarea.select();
        document.execCommand('copy');
        showToast(t('toastCopyJsonShort'));
      });
    }
  });
}

// ==========================================
// 8. 2. PROPOSAL MODULE (READ-ONLY)
// ==========================================
function setContent(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if ('value' in el && el.tagName !== 'DIV') {
    el.value = val || '';
  } else {
    el.textContent = val || '';
  }
}


// ==========================================
// 8. 2. PROJECT PROPOSAL (NUTRITION E-COMMERCE - MINIMAL REPORT)
// ==========================================

function getProposalViHtml() {
  const archImg = 'assets/images/workshop/5.1-overview/aws-architecture.png';

  return `
<div class="tech-report">
  <header>
    <div class="report-eyebrow">Đề xuất dự án</div>
    <p class="report-intro">Thiết kế kiến trúc, phạm vi, vấn đề giải quyết, kế hoạch và ước tính chi phí cho dự án workshop.</p>
    <h1 class="report-title">Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa trên AWS</h1>
    <p class="report-subtitle">Tra cứu dinh dưỡng có nguồn và mua sắm trên hạ tầng AWS</p>
  </header>

  <!-- 1. 1. TÓM TẮT ĐỀ XUẤT -->
  <section class="report-section">
    <h2 class="report-h2">1. Tóm tắt đề xuất</h2>
    <p class="report-p">Nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên AWS hỗ trợ tra cứu thực phẩm, mua hàng và gợi ý bữa ăn từ dữ liệu có nguồn. React gọi Spring Boot qua CloudFront và ALB; PostgreSQL lưu dữ liệu, Bedrock chỉ diễn giải yêu cầu. Sản phẩm thiếu dữ liệu bị loại khi lọc dinh dưỡng hoặc allergen. Số liệu trả lời do code lấy từ DB, kết hợp vận hành theo buổi demo để kiểm soát chi phí.</p>
  </section>

  <!-- 2. 2. VẤN ĐỀ CẦN GIẢI QUYẾT -->
  <section class="report-section">
    <h2 class="report-h2">2. Vấn đề cần giải quyết</h2>
    <h3 class="report-h3">Vấn đề là gì?</h3>
    <p class="report-p">Người mua khó so sánh thực phẩm khi dữ liệu dinh dưỡng và allergen thiếu nhất quán. Câu trả lời AI có thể chứa con số thiếu căn cứ nếu model tự sinh nội dung.</p>
    <h3 class="report-h3">Giải pháp</h3>
    <p class="report-p">Người mua khó đối chiếu dữ liệu dinh dưỡng và allergen giữa các sản phẩm. Chatbot sinh văn bản có thể đưa ra con số không có căn cứ. MVP gồm catalog 152 sản phẩm USDA, tài khoản, bộ lọc theo dinh dưỡng, 9 allergen và 6 nhãn chế độ ăn; phân tích bữa ăn; AI tra cứu chỉ đọc; giỏ hàng, đặt hàng, quản lý sản phẩm, ảnh, đơn, thống kê và nhật ký thanh toán. COD và VNPAY sandbox nằm trong phạm vi.</p>
    <p class="report-p">D32 bổ sung hồ sơ và gợi ý một bữa gồm món protein, rau/trái cây và tinh bột. Mục tiêu tính bằng Mifflin-St Jeor × mức vận động. Chỉ áp dụng cho tuổi 18–65, BMI 17–35, loại trừ mang thai, cho con bú và bệnh cần giám sát. Không có thanh toán thật, hoàn tiền tự động hoặc tư vấn y tế. Danh tính lấy từ JWT; trừ kho bằng UPDATE có điều kiện trong transaction.</p>
    <h3 class="report-h3">Lợi ích và hiệu quả đầu tư</h3>
    <p class="report-p">Người mua tra cứu thông tin từ DB, lọc theo nhu cầu và xem giới hạn dữ liệu. Cửa hàng quản lý catalog, ảnh, đơn và nhật ký thanh toán trong cùng ứng dụng. Cost Explorer ghi 6,44 USD cho 01–21/11/2026, toàn bộ được credit bù. Chưa có số liệu doanh thu hay tiết kiệm lao động để tính ROI tài chính.</p>
  </section>

  <!-- 3. 3. KIẾN TRÚC GIẢI PHÁP -->
  <section class="report-section">
    <h2 class="report-h2">3. Kiến trúc giải pháp</h2>
    <h3 class="report-h3">AWS architecture reference</h3>
    <p class="report-p">Nhấp vào hình để phóng to / tương tác thu phóng</p>
    <div class="report-figure">
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('${archImg}', 'Sơ đồ kiến trúc hạ tầng AWS')" title="Nhấp để phóng to">
        <img src="${archImg}" alt="Sơ đồ kiến trúc hạ tầng AWS" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption">Sơ đồ kiến trúc AWS vẽ trên draw.io bằng bộ AWS Architecture Icons, cập nhật Multi-AZ và AWS STS ngày 25/11/2026</div>
    </div>

    <p class="report-p">Từ 22/11/2026 (D33), môi trường dev chạy 2 task ECS, mỗi Availability Zone một task, và RDS ở chế độ Multi-AZ với bản dự phòng (Standby) ở AZ thứ hai. Diễn tập Reboot with failover ngày 22/11 chuyển AZ chính từ ap-southeast-1a sang ap-southeast-1b trong khoảng 20–45 giây; API gián đoạn khoảng nửa phút rồi tự phục hồi, không mất dữ liệu.</p>
    <h3 class="report-h3">Các dịch vụ AWS sử dụng</h3>
    <p class="report-p">CloudFront + S3 — React SPA và ảnh qua OAC; Function viết lại đường dẫn; hai bucket riêng tư.</p>
    <p class="report-p">ALB + ECS Fargate + ECR — ALB nhận CloudFront + header bí mật; Spring Boot 4 / Java 21, ARM64, 0,5 vCPU / 1 GB, 2 task ở 2 AZ.</p>
    <p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby ở AZ thứ hai), private subnet, mã hóa; Flyway V1–V11.</p>
    <p class="report-p">Cognito — JWT sub và cognito:groups; USER / ADMIN.</p>
    <p class="report-p">Bedrock + Guardrails — Nova 2 Lite ở Tokyo; tool chỉ đọc, số liệu do code lấy từ DB.</p>
    <p class="report-p">CloudWatch + SNS + Budgets — Log 14 ngày, 7 alarm, cảnh báo thư điện tử; ngân sách 100 USD.</p>
    <p class="report-p">CloudTrail + S3 audit + WAF — Audit và ALB logs lưu 30 ngày; WAF chỉ bật khi demo; KMS do AWS quản lý.</p>
    <p class="report-p">Terraform + IAM + STS + GitHub Actions — State S3 use_lockfile; SSO, boundary; CI/CD qua OIDC, AWS STS cấp quyền tạm thời (AssumeRoleWithWebIdentity), không lưu access key.</p>
    <p class="report-p">Ứng dụng ở ap-southeast-1, tiền tố nutrition-dev, chỉ một môi trường dev. D15 đặt ECS ở public subnet với IP công khai để tránh chi phí NAT, còn RDS giữ private. D17 chọn một môi trường để phù hợp đồ án. D18 chuyển lời gọi Bedrock và Guardrail sang ap-northeast-1 vì quota Singapore của tài khoản bằng 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 giới hạn model vào searchProducts với intent search, facts, compare, plan; số liệu do backend ghép. CloudFront → ALB hiện dùng HTTP vì chưa có domain riêng.</p>
    <h3 class="report-h3">Thiết kế thành phần</h3>
    <p class="report-p">Frontend React + TypeScript hiển thị catalog, giỏ hàng, hồ sơ, gợi ý và trang quản trị.</p>
    <p class="report-p">Backend Spring Boot 4 / Java 21: catalog quản lý tra cứu; commerce xử lý giỏ/đơn; payments xác minh IPN; ai trích ý định; admin cung cấp API quản trị; profile tính mục tiêu và gợi ý.</p>
    <p class="report-p">Database PostgreSQL dùng SQL tham số hóa và Flyway V1–V11.</p>
    <p class="report-p">AI dùng Nova 2 Lite với Guardrails; code kiểm bộ lọc và ghép số liệu từ DB.</p>
    <p class="report-p">CI/CD GitHub Actions kiểm thử, build ARM64, lấy quyền tạm thời từ AWS STS qua OIDC, đẩy ECR và deploy.</p>
  </section>

  <!-- 4. 4. TRIỂN KHAI KỸ THUẬT -->
  <section class="report-section">
    <h2 class="report-h2">4. Triển khai kỹ thuật</h2>
    <p class="report-p">Terraform dựng hạ tầng; Maven wrapper và Flyway quản lý backend/schema; React + TypeScript tạo frontend. Pipeline OIDC build, kiểm thử và triển khai theo nhánh master. Các pha được nhóm theo mốc đã ghi trong repo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 15%;">Pha</th>
            <th style="width: 25%;">Thời gian 2026</th>
            <th style="width: 60%;">Nội dung thực tế</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>29/10–01/11</td>
            <td>Repo, khung frontend, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>2</td>
            <td>03–10/11</td>
            <td>Thiết kế giao diện, dữ liệu USDA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>11–12/11</td>
            <td>Terraform mạng/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; chạy AWS lần đầu</td>
          </tr>
          <tr>
            <td>4</td>
            <td>13–18/11</td>
            <td>AI, Guardrails, alarm; tìm kiếm, giới hạn tốc độ, phân tích bữa ăn, VNPAY sandbox, giao diện</td>
          </tr>
          <tr>
            <td>5</td>
            <td>20–22/11</td>
            <td>Tokyo, E2E, audit/WAF tùy chọn; AI đủ intent, D32, apply audit và đo chi phí</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 5. 5. KẾ HOẠCH VÀ MỐC TRIỂN KHAI -->
  <section class="report-section">
    <h2 class="report-h2">5. Kế hoạch và mốc triển khai</h2>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Ngày</th>
            <th style="width: 70%;">Mốc thực tế</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29/10/2026</td>
            <td>Khởi tạo repo</td>
          </tr>
          <tr>
            <td>01/11/2026</td>
            <td>Khung frontend, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>03–06/11/2026</td>
            <td>Thiết kế lại giao diện</td>
          </tr>
          <tr>
            <td>10/11/2026</td>
            <td>Dữ liệu USDA</td>
          </tr>
          <tr>
            <td>11/11/2026</td>
            <td>Terraform mạng, RDS, ECR, Cognito, ALB, ECS và CloudFront</td>
          </tr>
          <tr>
            <td>12/11/2026</td>
            <td>OIDC, ảnh sản phẩm và lần chạy AWS đầu tiên</td>
          </tr>
          <tr>
            <td>13/11/2026</td>
            <td>AI, Guardrails, đánh giá và alarm</td>
          </tr>
          <tr>
            <td>14–15/11/2026</td>
            <td>Tìm kiếm, quên mật khẩu, thống kê, giới hạn tốc độ, Spring Boot 4</td>
          </tr>
          <tr>
            <td>16/11/2026</td>
            <td>Mở rộng catalog, nhãn chế độ ăn, phân tích bữa, VNPAY sandbox</td>
          </tr>
          <tr>
            <td>17–18/11/2026</td>
            <td>Hoàn thiện giao diện</td>
          </tr>
          <tr>
            <td>20/11/2026</td>
            <td>Tokyo, E2E, audit, WAF tùy chọn, nhật ký thanh toán</td>
          </tr>
          <tr>
            <td>21/11/2026</td>
            <td>AI đủ intent, hồ sơ và gợi ý D32</td>
          </tr>
          <tr>
            <td>22/11/2026</td>
            <td>Apply audit và đo chi phí</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 6. 6. ƯỚC TÍNH NGÂN SÁCH -->
  <section class="report-section">
    <h2 class="report-h2">6. Ước tính ngân sách</h2>
    <h3 class="report-h3">Chi phí hạ tầng</h3>
    <p class="report-p">Ước tính USD/tháng, đối chiếu AWS Pricing Calculator ngày 25/11/2026 cho cấu hình Multi-AZ và 2 task (D33), chưa thuế, sai lệch có thể ±10%. Production là phương án tương lai chưa triển khai. Bedrock thực tế gọi tại Tokyo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 40%;">Dịch vụ / Cấu hình</th>
            <th class="text-right" style="width: 20%;">Demo (~4h/ngày)</th>
            <th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
            <th class="text-right" style="width: 20%;">Production đề xuất</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
            <td class="text-right">~11,6</td>
            <td class="text-right">42,75</td>
            <td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
          </tr>
          <tr>
            <td>ECS Fargate ARM64, 0,5 vCPU / 1 GB, 2 task</td>
            <td class="text-right">~5,9</td>
            <td class="text-right">35,98</td>
            <td class="text-right">~36–72 (2–4 task, auto scaling)</td>
          </tr>
          <tr>
            <td>Application Load Balancer</td>
            <td class="text-right">~3,1</td>
            <td class="text-right">18,63</td>
            <td class="text-right">~22</td>
          </tr>
          <tr>
            <td>Public IPv4, 4 địa chỉ</td>
            <td class="text-right">~2,4</td>
            <td class="text-right">14,60</td>
            <td class="text-right">~15</td>
          </tr>
          <tr>
            <td>Secrets Manager, 2 secret</td>
            <td class="text-right">0,85</td>
            <td class="text-right">0,85</td>
            <td class="text-right">0,85</td>
          </tr>
          <tr>
            <td>Bedrock (Nova Lite làm giá tham chiếu, Tokyo)</td>
            <td class="text-right">&lt;0,7</td>
            <td class="text-right">0,70</td>
            <td class="text-right">Theo lượng dùng</td>
          </tr>
          <tr>
            <td>CloudFront 1,02 · CloudWatch 1,70 · ECR 0,10 · S3 0,07 · Cognito 0 · CloudTrail 0</td>
            <td class="text-right">~2,9</td>
            <td class="text-right">2,89</td>
            <td class="text-right">~5</td>
          </tr>
          <tr class="total-row">
            <td>Tổng (không WAF)</td>
            <td class="text-right">~27</td>
            <td class="text-right">116,40</td>
            <td class="text-right">~150–190</td>
          </tr>
          <tr>
            <td>WAF (tùy chọn, nhóm Optional)</td>
            <td class="text-right">0</td>
            <td class="text-right">9,60</td>
            <td class="text-right">~10</td>
          </tr>
          <tr class="total-row">
            <td>Tổng có WAF</td>
            <td class="text-right">—</td>
            <td class="text-right">126,00</td>
            <td class="text-right">~160–200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cost Explorer ghi nhận 6,44 USD cho 01–21/11/2026, được credit bù toàn bộ. RDS 2,77; ALB 1,29; ECS 1,21; IPv4 0,74; Bedrock 0,21; Secrets Manager 0,20 USD. Các khoản liệt kê là những khoản lớn, không phải phép cộng chi tiết toàn bộ hóa đơn. App chỉ bật khi demo nên không dùng số thực tế này để suy ra mức chạy 24/7. Số thực tế này ghi nhận trước khi bật Multi-AZ.</p>
    <p class="report-p">Bảng giá AWS Pricing Calculator: estimate ngày 25/11/2026. Cột 24/7 lấy đúng số của Calculator (Singapore, riêng Bedrock ở Tokyo). Cột Demo quy đổi từ đó cho khoảng 120 giờ chạy mỗi tháng: các khoản tính theo giờ (RDS instance, Fargate, ALB, IPv4) nhân 120/730, còn ổ đĩa RDS (5,52 USD) và các khoản theo lượng dùng giữ nguyên. Giả định tải: 50 người dùng/tháng, 5 GB CloudFront, khoảng 3.600 câu hỏi AI/tháng (1 câu/phút trong 2 giờ/ngày, 1.500 token vào, 300 token ra). Calculator chưa có Amazon Nova 2 Lite nên dùng Amazon Nova Lite làm giá tham chiếu. Estimate không tính RDS Proxy và Database Insights Advanced vì dự án không dùng.</p>
  </section>

  <!-- 7. 7. ĐÁNH GIÁ RỦI RO -->
  <section class="report-section">
    <h2 class="report-h2">7. Đánh giá rủi ro</h2>
    <h3 class="report-h3">Ma trận rủi ro</h3>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Rủi ro</th>
            <th style="width: 20%;">Ảnh hưởng</th>
            <th style="width: 25%;">Khả năng</th>
            <th style="width: 25%;">Mức độ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chi phí ngoài dự kiến</td>
            <td>Trung bình</td>
            <td>Trung bình</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>Lộ dữ liệu cá nhân</td>
            <td>Cao</td>
            <td>Thấp</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>AI trả lời sai/y tế</td>
            <td>Cao</td>
            <td>Trung bình</td>
            <td>Cao</td>
          </tr>
          <tr>
            <td>Quota Bedrock</td>
            <td>Trung bình</td>
            <td>Cao (đã xảy ra ở Singapore)</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>HTTP từ CloudFront tới ALB</td>
            <td>Trung bình</td>
            <td>Thấp</td>
            <td>Thấp</td>
          </tr>
          <tr>
            <td>Sự cố một Availability Zone</td>
            <td>Cao</td>
            <td>Thấp</td>
            <td>Trung bình (đã giảm nhờ Multi-AZ)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cách chấm: Ảnh hưởng và Khả năng theo ba mức Thấp / Trung bình / Cao; Mức độ là kết hợp của hai yếu tố, sau khi tính các biện pháp giảm thiểu bên dưới. Rủi ro AI được xếp Cao vì sai số liệu dinh dưỡng hoặc lời khuyên y tế có thể ảnh hưởng tới sức khỏe người dùng, nên được ưu tiên kiểm soát nhiều lớp.</p>
    <h3 class="report-h3">Biện pháp giảm thiểu</h3>
    <p class="report-p">Chi phí: Budgets 100 USD, alarm và up/down. RDS có thể tự bật sau 7 ngày dừng.</p>
    <p class="report-p">Dữ liệu cá nhân: JWT và phân quyền; tránh log PII, dữ liệu cơ thể không gửi model; người dùng tự xóa hồ sơ.</p>
    <p class="report-p">AI: Guardrails, tool chỉ đọc, số liệu từ DB; đánh giá 45 câu ngày 21/11/2026 đạt an toàn 17/17, tra cứu 27/28, ngưỡng 85%. Câu L01 còn dao động.</p>
    <p class="report-p">Quota: Tokyo thay cho Singapore theo D18; theo dõi quyền ApplyGuardrail.</p>
    <p class="report-p">Origin: prefix list CloudFront và header bí mật giảm truy cập trực tiếp; HTTP tới ALB vẫn là hạn chế. HTTPS origin cần domain và chứng chỉ trong tương lai.</p>
    <h3 class="report-h3">Phương án dự phòng</h3>
    <p class="report-p">Khi Bedrock không gọi được, duy trì catalog và luồng mua hàng, trả lỗi AI có kiểm soát. Nếu chi phí tăng, dùng down theo runbook. Khi cần khôi phục DB, làm theo quy trình snapshot trong docs/runbook.md; biên bản diễn tập vẫn chờ chủ repo thực hiện.</p>
  </section>

  <!-- 8. 8. KẾT QUẢ KỲ VỌNG -->
  <section class="report-section">
    <h2 class="report-h2">8. Kết quả kỳ vọng</h2>
    <h3 class="report-h3">Cải thiện kỹ thuật:</h3>
    <p class="report-p">Web React và API trên CloudFront.</p>
    <p class="report-p">Mã nguồn, kiểm thử và workflow OIDC trên GitHub.</p>
    <p class="report-p">Terraform và hướng dẫn vận hành theo buổi demo.</p>
    <p class="report-p">Bộ workshop 7 mục lớn cùng các bước con và báo cáo song ngữ.</p>
    <h3 class="report-h3">Nguồn đối chiếu:</h3>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
    <h3 class="report-h3">Giá trị dài hạn</h3>
    <p class="report-p">Lộ trình production chưa triển khai gồm RDS Multi-AZ, hai task, domain riêng với HTTPS tới ALB và WAF thường trực. Mỗi thay đổi cần plan, đánh giá khả năng chịu lỗi và cập nhật ước tính chi phí.</p>
  </section>
</div>
  `;
}

function getProposalEnHtml() {
  const archImg = 'assets/images/workshop/5.1-overview/aws-architecture.png';

  return `
<div class="tech-report">
  <header>
    <div class="report-eyebrow">Project Proposal</div>
    <p class="report-intro">Architecture design, scope, problem statement, timeline, and cost estimate for the workshop project.</p>
    <h1 class="report-title">Personalized Nutrition E-Commerce Platform on AWS</h1>
    <p class="report-subtitle">Sourced nutrition lookup and shopping on AWS infrastructure</p>
  </header>

  <!-- 1. 1. PROPOSAL SUMMARY -->
  <section class="report-section">
    <h2 class="report-h2">1. Proposal Summary</h2>
    <p class="report-p">The personalized nutrition e-commerce platform on AWS supports food lookup, purchasing, and meal recommendations from sourced data. React invokes Spring Boot via CloudFront and ALB; PostgreSQL stores data, while Bedrock only interprets requests. Products with missing data are excluded during nutrition or allergen filtering. Response metrics are retrieved by code directly from the DB, combined with demo-session-based operation to control costs.</p>
  </section>

  <!-- 2. 2. PROBLEM STATEMENT -->
  <section class="report-section">
    <h2 class="report-h2">2. Problem Statement</h2>
    <h3 class="report-h3">What is the problem?</h3>
    <p class="report-p">Buyers struggle to compare food products when nutrition and allergen data are inconsistent. AI responses may contain unfounded figures if the model generates content autonomously.</p>
    <h3 class="report-h3">Solution</h3>
    <p class="report-p">Buyers struggle to cross-reference nutrition and allergen data across products. Text-generating chatbots can produce unfounded figures. The MVP includes a catalog of 152 USDA products, accounts, filtering by nutrition, 9 allergens, and 6 diet labels; meal analysis; read-only AI lookup; shopping cart, ordering, product management, images, orders, analytics, and payment logs. COD and VNPAY sandbox are within scope.</p>
    <p class="report-p">D32 adds profiles and single-meal recommendations consisting of a protein dish, vegetables/fruit, and carbohydrates. Targets are calculated using Mifflin-St Jeor × activity level. Applicable only for ages 18–65, BMI 17–35, excluding pregnancy, lactation, and conditions requiring medical supervision. There are no real payments, automated refunds, or medical advice. Identity is extracted from JWT; inventory deduction uses conditional UPDATE within transactions.</p>
    <h3 class="report-h3">Benefits and Return on Investment</h3>
    <p class="report-p">Buyers look up information from the DB, filter according to needs, and view data limitations. Store owners manage catalog, images, orders, and payment logs within the same application. Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. There are no revenue or labor-saving figures yet to calculate financial ROI.</p>
  </section>

  <!-- 3. 3. SOLUTION ARCHITECTURE -->
  <section class="report-section">
    <h2 class="report-h2">3. Solution Architecture</h2>
    <h3 class="report-h3">AWS architecture reference</h3>
    <p class="report-p">Click on the image to expand / interactive zoom</p>
    <div class="report-figure">
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('${archImg}', 'AWS Architecture Diagram')" title="Click to zoom">
        <img src="${archImg}" alt="AWS Architecture Diagram" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption">AWS architecture diagram drawn on draw.io using AWS Architecture Icons, updated with Multi-AZ and AWS STS on Nov 25, 2026</div>
    </div>
    <p class="report-p">From Nov 22, 2026 (D33), the dev environment runs 2 ECS tasks, one task per Availability Zone, and RDS in Multi-AZ mode with a standby replica in the second AZ. Reboot with failover drill on Nov 22 switched the primary AZ from ap-southeast-1a to ap-southeast-1b in about 20–45 seconds; API experienced roughly half a minute of disruption then automatically recovered, with zero data loss.</p>
    <h3 class="report-h3">AWS services used</h3>
    <p class="report-p">CloudFront + S3 — React SPA and images via OAC; Function for path rewrites; two private buckets.</p>
    <p class="report-p">ALB + ECS Fargate + ECR — ALB accepts CloudFront + secret header; Spring Boot 4 / Java 21, ARM64, 0.5 vCPU / 1 GB, 2 tasks across 2 AZs.</p>
    <p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby in the second AZ), private subnet, encrypted; Flyway V1–V11.</p>
    <p class="report-p">Cognito — JWT sub and cognito:groups; USER / ADMIN.</p>
    <p class="report-p">Bedrock + Guardrails — Nova 2 Lite in Tokyo; read-only tools, metrics retrieved by code from the DB.</p>
    <p class="report-p">CloudWatch + SNS + Budgets — 14-day logs, 7 alarms, email alerts; 100 USD budget.</p>
    <p class="report-p">CloudTrail + S3 audit + WAF — Audit and ALB logs retained for 30 days; WAF only enabled during demo; AWS-managed KMS.</p>
    <p class="report-p">Terraform + IAM + STS + GitHub Actions — S3 state use_lockfile; SSO, boundary; CI/CD via OIDC, AWS STS grants temporary credentials (AssumeRoleWithWebIdentity), no static access keys stored.</p>
    <p class="report-p">Application deployed in ap-southeast-1, prefix nutrition-dev, single dev environment. D15 places ECS in public subnets with public IP to avoid NAT costs, while RDS remains private. D17 chooses a single environment to fit the capstone project. D18 shifts Bedrock and Guardrail invocations to ap-northeast-1 because Singapore quota for the account is 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 restricts model to searchProducts with search, facts, compare, plan intents; metrics are assembled by the backend. CloudFront → ALB currently uses HTTP due to lack of a custom domain.</p>
    <h3 class="report-h3">Component design</h3>
    <p class="report-p">Frontend React + TypeScript displays catalog, shopping cart, profiles, recommendations, and admin dashboard.</p>
    <p class="report-p">Backend Spring Boot 4 / Java 21: catalog manages lookups; commerce handles cart/orders; payments verifies IPN; ai extracts intent; admin provides management APIs; profile calculates targets and recommendations.</p>
    <p class="report-p">Database PostgreSQL uses parameterized SQL and Flyway V1–V11.</p>
    <p class="report-p">AI uses Nova 2 Lite with Guardrails; code validates filters and aggregates metrics from DB.</p>
    <p class="report-p">CI/CD GitHub Actions runs tests, builds ARM64, obtains temporary credentials from AWS STS via OIDC, pushes to ECR, and deploys.</p>
  </section>

  <!-- 4. 4. TECHNICAL IMPLEMENTATION -->
  <section class="report-section">
    <h2 class="report-h2">4. Technical Implementation</h2>
    <p class="report-p">Terraform provisions infrastructure; Maven wrapper and Flyway manage backend/schema; React + TypeScript builds frontend. OIDC pipeline builds, tests, and deploys along the master branch. Phases are grouped according to milestones recorded in the repository.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 15%;">Phase</th>
            <th style="width: 25%;">2026 Timeline</th>
            <th style="width: 60%;">Actual Scope</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Oct 29–Nov 01</td>
            <td>Repository, frontend skeleton, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nov 03–10</td>
            <td>UI design, USDA data</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nov 11–12</td>
            <td>Terraform network/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; first AWS run</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nov 13–18</td>
            <td>AI, Guardrails, alarms; search, rate limiting, meal analysis, VNPAY sandbox, UI</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nov 20–22</td>
            <td>Tokyo, E2E, audit/optional WAF; AI full intent, D32, audit apply and cost measurement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 5. 5. IMPLEMENTATION PLAN AND MILESTONES -->
  <section class="report-section">
    <h2 class="report-h2">5. Implementation Plan and Milestones</h2>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Date</th>
            <th style="width: 70%;">Actual Milestone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29/10/2026</td>
            <td>Repository initialization</td>
          </tr>
          <tr>
            <td>01/11/2026</td>
            <td>Frontend skeleton, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>03–06/11/2026</td>
            <td>UI redesign</td>
          </tr>
          <tr>
            <td>10/11/2026</td>
            <td>USDA data</td>
          </tr>
          <tr>
            <td>11/11/2026</td>
            <td>Terraform networking, RDS, ECR, Cognito, ALB, ECS, and CloudFront</td>
          </tr>
          <tr>
            <td>12/11/2026</td>
            <td>OIDC, product images, and first AWS run</td>
          </tr>
          <tr>
            <td>13/11/2026</td>
            <td>AI, Guardrails, evaluation, and alarms</td>
          </tr>
          <tr>
            <td>14–15/11/2026</td>
            <td>Search, password reset, statistics, rate limiting, Spring Boot 4</td>
          </tr>
          <tr>
            <td>16/11/2026</td>
            <td>Catalog expansion, diet labels, meal analysis, VNPAY sandbox</td>
          </tr>
          <tr>
            <td>17–18/11/2026</td>
            <td>UI finalization</td>
          </tr>
          <tr>
            <td>20/11/2026</td>
            <td>Tokyo, E2E, audit, optional WAF, payment logs</td>
          </tr>
          <tr>
            <td>21/11/2026</td>
            <td>AI full intent, profiles, and D32 recommendations</td>
          </tr>
          <tr>
            <td>22/11/2026</td>
            <td>Audit apply and cost measurement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 6. 6. BUDGET ESTIMATE -->
  <section class="report-section">
    <h2 class="report-h2">6. Budget Estimate</h2>
    <h3 class="report-h3">Infrastructure cost</h3>
    <p class="report-p">Estimated USD/month, cross-referenced with AWS Pricing Calculator on Nov 25, 2026 for Multi-AZ configuration and 2 tasks (D33), exclusive of tax, variance may be ±10%. Production is a future proposal not yet deployed. Bedrock actually invoked in Tokyo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 40%;">Service / Configuration</th>
            <th class="text-right" style="width: 20%;">Demo (~4h/day)</th>
            <th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
            <th class="text-right" style="width: 20%;">Proposed Production</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
            <td class="text-right">~11.6</td>
            <td class="text-right">42.75</td>
            <td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
          </tr>
          <tr>
            <td>ECS Fargate ARM64, 0.5 vCPU / 1 GB, 2 tasks</td>
            <td class="text-right">~5.9</td>
            <td class="text-right">35.98</td>
            <td class="text-right">~36–72 (2–4 tasks, auto scaling)</td>
          </tr>
          <tr>
            <td>Application Load Balancer</td>
            <td class="text-right">~3.1</td>
            <td class="text-right">18.63</td>
            <td class="text-right">~22</td>
          </tr>
          <tr>
            <td>Public IPv4, 4 addresses</td>
            <td class="text-right">~2.4</td>
            <td class="text-right">14.60</td>
            <td class="text-right">~15</td>
          </tr>
          <tr>
            <td>Secrets Manager, 2 secrets</td>
            <td class="text-right">0.85</td>
            <td class="text-right">0.85</td>
            <td class="text-right">0.85</td>
          </tr>
          <tr>
            <td>Bedrock (Nova Lite as pricing reference, Tokyo)</td>
            <td class="text-right">&lt;0.7</td>
            <td class="text-right">0.70</td>
            <td class="text-right">Based on usage</td>
          </tr>
          <tr>
            <td>CloudFront 1.02 · CloudWatch 1.70 · ECR 0.10 · S3 0.07 · Cognito 0 · CloudTrail 0</td>
            <td class="text-right">~2.9</td>
            <td class="text-right">2.89</td>
            <td class="text-right">~5</td>
          </tr>
          <tr class="total-row">
            <td>Total (without WAF)</td>
            <td class="text-right">~27</td>
            <td class="text-right">116.40</td>
            <td class="text-right">~150–190</td>
          </tr>
          <tr>
            <td>WAF (optional, Optional group)</td>
            <td class="text-right">0</td>
            <td class="text-right">9.60</td>
            <td class="text-right">~10</td>
          </tr>
          <tr class="total-row">
            <td>Total with WAF</td>
            <td class="text-right">—</td>
            <td class="text-right">126.00</td>
            <td class="text-right">~160–200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. RDS 2.77; ALB 1.29; ECS 1.21; IPv4 0.74; Bedrock 0.21; Secrets Manager 0.20 USD. The listed items represent the major charges, not an itemized sum of the entire invoice. Since the app is only turned on during demo sessions, these actual numbers must not be used to extrapolate 24/7 operation. These actual figures were recorded before enabling Multi-AZ.</p>
    <p class="report-p">AWS Pricing Calculator estimate dated Nov 25, 2026. The 24/7 column uses the exact figures from Calculator (Singapore, except Bedrock in Tokyo). The Demo column converts from that for approximately 120 operating hours per month: hourly charges (RDS instance, Fargate, ALB, IPv4) multiplied by 120/730, while RDS storage (5.52 USD) and usage-based items remain unchanged. Load assumptions: 50 users/month, 5 GB CloudFront, approximately 3,600 AI queries/month (1 query/minute for 2 hours/day, 1,500 input tokens, 300 output tokens). Since the Calculator did not yet list Amazon Nova 2 Lite, Amazon Nova Lite was used as the pricing reference. The estimate excludes RDS Proxy and Database Insights Advanced as they are not used by the project.</p>
  </section>

  <!-- 7. 7. RISK ASSESSMENT -->
  <section class="report-section">
    <h2 class="report-h2">7. Risk Assessment</h2>
    <h3 class="report-h3">Risk matrix</h3>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Risk</th>
            <th style="width: 20%;">Impact</th>
            <th style="width: 25%;">Probability</th>
            <th style="width: 25%;">Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unexpected cost</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Personal data exposure</td>
            <td>High</td>
            <td>Low</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>AI incorrect/medical response</td>
            <td>High</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Bedrock quota</td>
            <td>Medium</td>
            <td>High (already occurred in Singapore)</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>HTTP from CloudFront to ALB</td>
            <td>Medium</td>
            <td>Low</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Single Availability Zone failure</td>
            <td>High</td>
            <td>Low</td>
            <td>Medium (reduced via Multi-AZ)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Scoring methodology: Impact and Probability are evaluated across three levels: Low / Medium / High; Level is a combination of the two factors, after factoring in mitigation measures below. AI risk is classified as High because incorrect nutrition figures or medical advice can affect user health, thus prioritized for multi-layered controls.</p>
    <h3 class="report-h3">Mitigation measures</h3>
    <p class="report-p">Cost: 100 USD Budgets, alarms, and up/down scripts. RDS may automatically turn back on after 7 days stopped.</p>
    <p class="report-p">Personal data: JWT and authorization; avoid logging PII, physical biometric data is not sent to the model; users can delete their own profiles.</p>
    <p class="report-p">AI: Guardrails, read-only tools, metrics from DB; evaluation of 45 queries on Nov 21, 2026 achieved 17/17 safety, 27/28 lookup, 85% threshold. Query L01 still fluctuates.</p>
    <p class="report-p">Quota: Tokyo replaces Singapore per D18; monitor ApplyGuardrail permissions.</p>
    <p class="report-p">Origin: CloudFront prefix list and secret header reduce direct access; HTTP to ALB remains a constraint. HTTPS origin will require a custom domain and certificate in the future.</p>
    <h3 class="report-h3">Contingency plan</h3>
    <p class="report-p">When Bedrock is unreachable, maintain catalog and shopping flows, returning controlled AI errors. If costs rise, scale down following the runbook. When DB restoration is needed, follow the snapshot procedure in docs/runbook.md; drill record still awaits repository owner execution.</p>
  </section>

  <!-- 8. 8. EXPECTED OUTCOMES -->
  <section class="report-section">
    <h2 class="report-h2">8. Expected Outcomes</h2>
    <h3 class="report-h3">Technical improvements:</h3>
    <p class="report-p">React Web and API on CloudFront.</p>
    <p class="report-p">Source code, tests, and OIDC workflow on GitHub.</p>
    <p class="report-p">Terraform and demo-session operational guidelines.</p>
    <p class="report-p">Workshop package with 7 major sections, sub-steps, and bilingual report.</p>
    <h3 class="report-h3">Reference sources:</h3>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
    <h3 class="report-h3">Long-term value</h3>
    <p class="report-p">The yet-to-be-deployed production roadmap includes RDS Multi-AZ, two tasks, a custom domain with HTTPS to ALB, and persistent WAF. Every change requires planning, fault-tolerance assessment, and updated cost estimates.</p>
  </section>
</div>
  `;
}

function renderProposalView() {
  const container = document.getElementById('proposal-content-container');
  if (!container) return;

  const lang = (window.app && window.app.currentLang) || 'vi';
  container.innerHTML = lang === 'en' ? getProposalEnHtml() : getProposalViHtml();
}

function renderProposalInputs() {
  renderProposalView();
}

function setupProposal() {
  renderProposalView();
}

// ==========================================
// 9. 3. BLOGS POSTED MODULE
// ==========================================
function renderBlogsList() {
  const container = document.getElementById('blogs-list-container');
  if (!container) return;

  const lang = app.currentLang;
  const blogs = app.data.blogs[lang] || app.data.blogs.vi;

  container.innerHTML = blogs.map(b => {
    const isS3Express = b.id === 'blog-1' || b.id === 'blog-4' || b.slug === 's3-express-one-zone';

    if (isS3Express) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/';
      const excerpt = lang === 'vi'
        ? "Trong các hệ thống AI/ML, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu từ Amazon S3 thường gặp I/O Bottleneck khiến CPU/GPU phải nhàn rỗi chờ dữ liệu. Amazon S3 Express One Zone mang lại độ trễ sub-10ms với Directory Bucket trong cùng 1 AZ. Tuy nhiên, theo định luật Amdahl, tối ưu 10x I/O chỉ giúp tổng thời gian hoàn thành tác vụ giảm 18% nếu hệ thống bị nghẽn ở compute."
        : "In modern AI/ML systems, continuously fetching millions of images from S3 often creates I/O bottlenecks where expensive compute sits idle. Amazon S3 Express One Zone delivers single-digit millisecond latency with Directory Buckets in a single AZ. However, according to Amdahl's Law, a 10x I/O speedup only reduces total execution time by 18% if the workload is compute-heavy.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS / Cloud Computing</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '18/10/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/s3-express-one-zone')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/s3-express-one-zone-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/s3-express-one-zone-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Hiệu năng Sub-10ms:</strong> Directory Bucket trong cùng 1 AZ với máy chủ EC2/GPU.' : '<strong>Sub-10ms Latency:</strong> Single-AZ Directory Bucket co-located with compute.'}</li>
                <li>${lang === 'vi' ? '<strong>Phân tích Định luật Amdahl:</strong> Tối ưu 10x I/O chỉ rút ngắn 18% tổng thời gian nếu compute chiếm 80%.' : '<strong>Amdahl\'s Law Analysis:</strong> 10x storage speedup yields only 18% total system gain.'}</li>
                <li>${lang === 'vi' ? '<strong>Kiến trúc lưu trữ hai lớp:</strong> Kết hợp S3 Standard (Data Lake) và S3 Express One Zone (Active Working Set).' : '<strong>Two-Tier Architecture:</strong> Blending S3 Standard (Data Lake) with S3 Express (Active Working Set).'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/s3-express-one-zone')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-minimal-outline"
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isEventDriven = b.id === 'blog-2' || b.id === 'blog-5' || b.slug === 'aws-event-driven-architecture';

    if (isEventDriven) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/';
      const excerpt = lang === 'vi'
        ? "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB: Một hệ thống có thể xử lý tất cả sự kiện thành công 100% nhưng vẫn tạo ra kết quả sai do Race Condition. Phân tích nguyên nhân tại sao Idempotency và SQS FIFO chưa đủ, và đề xuất mô hình giải pháp kết hợp S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Write và Reconciliation worker."
        : "In AWS Event-Driven Architectures combining Amazon S3, EventBridge, SQS, Lambda, and DynamoDB: a system can process all events with 100% success yet produce incorrect business state due to Race Conditions. An investigation into why Idempotency and SQS FIFO are not enough, proposing S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Writes, and Reconciliation.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS / Distributed Systems / Architecture</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '04/11/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/aws-event-driven-architecture')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/aws-event-driven-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/aws-event-driven-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Race Condition trong At-Least-Once:</strong> Thời gian thực thi Lambda không đồng đều khiến sự kiện cũ ghi đè dữ liệu mới.' : '<strong>Race Condition in At-Least-Once:</strong> Varying Lambda runtimes cause stale events to overwrite newer data.'}</li>
                <li>${lang === 'vi' ? '<strong>Hạn chế của Idempotency & SQS:</strong> Không thể đảo ngược thứ tự nếu sự kiện đã bị đảo lộn trước khi vào hàng đợi (vấn đề TOCTOU).' : '<strong>Limits of Idempotency & SQS:</strong> Cannot restore ordering once events arrive out-of-sequence (TOCTOU hazard).'}</li>
                <li>${lang === 'vi' ? '<strong>Kiến trúc bảo toàn tính đúng đắn:</strong> Kết hợp S3 Versioning, S3 Sequencer, Immutable Output và DynamoDB Conditional Write.' : '<strong>Correctness-First Architecture:</strong> S3 Versioning, S3 Sequencer, Immutable Output, and DynamoDB Conditional Writes.'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/aws-event-driven-architecture')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-minimal-outline"
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isIdentityContainment = b.id === 'blog-3' || b.slug === 'aws-ec2-identity-containment' || (b.title && b.title.includes('CÔ LẬP EC2')) || (b.title && b.title.includes('EC2 ISOLATION'));

    if (isIdentityContainment) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/';
      const excerpt = lang === 'vi'
        ? "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích sự khác biệt cốt lõi giữa Network Containment và Identity Containment: Security Group không thu hồi IAM Session, IMDSv2 không bảo vệ credentials khi máy chủ bị thực thi mã từ xa. Đề xuất quy trình Automated Incident Response kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC."
        : "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth analysis of Network Containment vs Identity Containment: why Security Groups do not terminate active IAM sessions, and how IMDSv2 falls short after remote code execution. Architecting automated incident response combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS Study Group</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '15/11/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/aws-ec2-identity-containment')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="font-size:14px; font-weight:600; color:#555555; margin:-4px 0 8px 0; font-style:italic;">
            ${escapeHtml(b.subtitle || 'Beyond Network Isolation: Rethinking Identity Containment on AWS')}
          </div>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/aws-ec2-identity-containment-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/aws-ec2-identity-containment-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Network Containment ≠ Identity Containment:</strong> Cô lập mạng qua Security Group không thu hồi session IAM đang hoạt động.' : '<strong>Network Containment ≠ Identity Containment:</strong> Network isolation via Security Groups does not revoke active IAM sessions.'}</li>
                <li>${lang === 'vi' ? '<strong>Ràng buộc ngữ cảnh Credentials:</strong> Sử dụng VPC Condition Keys (aws:EC2InstanceSourceVPC) để vô hiệu hóa credentials bị lộ ngoài VPC.' : '<strong>Credential Context Enforcement:</strong> Restricting access with VPC Condition Keys (aws:EC2InstanceSourceVPC) renders stolen tokens useless out-of-context.'}</li>
                <li>${lang === 'vi' ? '<strong>Quy trình phản ứng 3 lớp:</strong> Tự động hóa kết hợp Quarantine Security Group, thay thế Instance Profile và thu hồi Active IAM Sessions.' : '<strong>Three-Tier Containment Workflow:</strong> Automating Network Quarantine, Instance Profile swap, and IAM Session Revocation.'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/aws-ec2-identity-containment')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-minimal-outline"
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isLongSnippet = (b.snippet || '').length > 360;
    const imgHtml = b.image ? `
      <div class="blog-img-box" onclick="openBlogImageModal('${escapeHtml(b.image)}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
        <img src="${escapeHtml(b.image)}" alt="${escapeHtml(b.title)}" loading="lazy">
        <div class="blog-img-overlay">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>${t('zoomDiagramTooltip')}</span>
        </div>
      </div>
    ` : '';

    return `
      <div class="blog-card" id="${escapeHtml(b.id)}">
        <div class="blog-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="badge badge-purple">AWS Study Group</span>
            <span style="font-size:12px; color:var(--text-subtle);">${t('publishedDateLabel')} ${escapeHtml(b.date || '-')}</span>
          </div>
          <h3>${escapeHtml(b.title)}</h3>
        </div>
        ${imgHtml}
        <div class="blog-snippet-wrap">
          <div id="wrap-${escapeHtml(b.id)}" class="${isLongSnippet ? 'blog-snippet-collapsed' : ''}">
            <p class="blog-snippet" id="snippet-${escapeHtml(b.id)}">${escapeHtml(b.snippet)}</p>
          </div>
          ${isLongSnippet ? `
            <button type="button" class="blog-toggle-snippet-btn" id="btn-toggle-${escapeHtml(b.id)}" onclick="toggleBlogSnippet('${escapeHtml(b.id)}')">
              <span>${t('btnExpandSnippet')}</span>
            </button>
          ` : ''}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:12px; margin-top:auto;">
          <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:12px; padding:6px 14px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${t('readArticleLink')}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBlogSnippet(id) {
  const wrap = document.getElementById('wrap-' + id);
  const btn = document.getElementById('btn-toggle-' + id);
  if (!wrap || !btn) return;
  const isCollapsed = wrap.classList.contains('blog-snippet-collapsed');
  if (isCollapsed) {
    wrap.classList.remove('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnCollapseSnippet')}</span>`;
  } else {
    wrap.classList.add('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnExpandSnippet')}</span>`;
  }
}

let blogImageZoomFactor = 1;
let blogImageFitScale = 1;
let blogImageNaturalWidth = 0;
let blogImageNaturalHeight = 0;

function updateBlogImageZoom() {
  const preview = document.getElementById('blog-image-modal-preview');
  const stage = document.getElementById('blog-image-stage');
  const level = document.getElementById('image-zoom-level');
  const viewer = document.getElementById('blog-image-viewer');
  if (!preview || !stage || !viewer || !blogImageNaturalWidth || !blogImageNaturalHeight) return;

  const scale = blogImageFitScale * blogImageZoomFactor;
  const width = Math.max(1, Math.round(blogImageNaturalWidth * scale));
  const height = Math.max(1, Math.round(blogImageNaturalHeight * scale));
  preview.style.width = `${width}px`;
  preview.style.height = `${height}px`;
  stage.style.width = `${width}px`;
  stage.style.height = `${height}px`;
  if (level) level.textContent = `${Math.round(blogImageZoomFactor * 100)}%`;
}

function fitBlogImageToViewer() {
  const preview = document.getElementById('blog-image-modal-preview');
  const viewer = document.getElementById('blog-image-viewer');
  if (!preview || !viewer || !preview.naturalWidth || !preview.naturalHeight) return;

  blogImageNaturalWidth = preview.naturalWidth;
  blogImageNaturalHeight = preview.naturalHeight;
  const availableWidth = Math.max(100, viewer.clientWidth - 24);
  const availableHeight = Math.max(100, viewer.clientHeight - 24);
  blogImageFitScale = Math.min(1, availableWidth / blogImageNaturalWidth, availableHeight / blogImageNaturalHeight);
  blogImageZoomFactor = 1;
  updateBlogImageZoom();
  requestAnimationFrame(() => {
    viewer.scrollLeft = Math.max(0, (viewer.scrollWidth - viewer.clientWidth) / 2);
    viewer.scrollTop = Math.max(0, (viewer.scrollHeight - viewer.clientHeight) / 2);
  });
}

function changeBlogImageZoom(multiplier) {
  const viewer = document.getElementById('blog-image-viewer');
  if (!viewer) return;
  const oldWidth = viewer.scrollWidth;
  const oldHeight = viewer.scrollHeight;
  const centerX = viewer.scrollLeft + viewer.clientWidth / 2;
  const centerY = viewer.scrollTop + viewer.clientHeight / 2;

  blogImageZoomFactor = Math.max(0.25, Math.min(8, blogImageZoomFactor * multiplier));
  updateBlogImageZoom();

  requestAnimationFrame(() => {
    const ratioX = oldWidth ? centerX / oldWidth : 0.5;
    const ratioY = oldHeight ? centerY / oldHeight : 0.5;
    viewer.scrollLeft = Math.max(0, ratioX * viewer.scrollWidth - viewer.clientWidth / 2);
    viewer.scrollTop = Math.max(0, ratioY * viewer.scrollHeight - viewer.clientHeight / 2);
  });
}

function openBlogImageModal(src, title) {
  const modal = document.getElementById('blog-image-modal');
  const preview = document.getElementById('blog-image-modal-preview');
  const titleEl = document.getElementById('blog-image-modal-title');
  const descEl = document.getElementById('blog-image-modal-desc');
  const openTab = document.getElementById('btn-blog-img-open-tab');
  if (!modal || !preview || !src) return;

  preview.onload = () => fitBlogImageToViewer();
  preview.onerror = () => {
    const level = document.getElementById('image-zoom-level');
    if (level) level.textContent = 'Không tải được ảnh';
  };
  preview.src = src;
  if (titleEl) titleEl.textContent = title || t('diagModalTitle');
  if (descEl) descEl.textContent = t('diagModalDesc');
  if (openTab) {
    openTab.href = src;
    openTab.textContent = t('btnOpenTab');
  }
  modal.classList.add('active');
  if (preview.complete && preview.naturalWidth) requestAnimationFrame(() => fitBlogImageToViewer());
}

function closeBlogImageModal() {
  const modal = document.getElementById('blog-image-modal');
  if (modal) modal.classList.remove('active');
}

function setupBlogs() {
  // Blog image modal event listeners
  const btnCloseModal = document.getElementById('btn-close-blog-img-modal');
  const btnCloseBtn = document.getElementById('btn-close-blog-img-btn');
  const modal = document.getElementById('blog-image-modal');

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeBlogImageModal);
  if (btnCloseBtn) btnCloseBtn.addEventListener('click', closeBlogImageModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBlogImageModal();
    });
  }

  // Inject viewer styles once so report images can be inspected at full resolution.
  if (!document.getElementById('report-image-zoom-styles')) {
    const style = document.createElement('style');
    style.id = 'report-image-zoom-styles';
    style.textContent = `
      #blog-image-modal .modal-dialog { width: 96vw; max-width: 1280px; }
      #blog-image-modal .image-zoom-toolbar { display:flex; align-items:center; justify-content:center; gap:10px; padding:2px 0 10px; color:#E2E8F0; }
      #blog-image-modal .image-zoom-toolbar button { border:1px solid #475569; border-radius:7px; background:#1E293B; color:#F8FAFC; min-width:38px; height:34px; padding:0 10px; font:600 14px 'Plus Jakarta Sans',sans-serif; cursor:pointer; }
      #blog-image-modal .image-zoom-toolbar button:hover { background:#334155; }
      #blog-image-modal #image-zoom-level { min-width:58px; text-align:center; font:600 12px 'Plus Jakarta Sans',sans-serif; }
      #blog-image-modal .image-zoom-viewport { width:100%; height:min(72vh,780px); min-height:260px; overflow:auto; background:#080B12; border:1px solid #334155; border-radius:8px; cursor:grab; overscroll-behavior:contain; }
      #blog-image-modal .image-zoom-viewport.is-dragging { cursor:grabbing; user-select:none; }
      #blog-image-modal .image-zoom-stage { min-width:100%; min-height:100%; display:flex; align-items:flex-start; justify-content:flex-start; }
      #blog-image-modal #blog-image-modal-preview { display:block; max-width:none; max-height:none; width:auto; height:auto; object-fit:contain; border-radius:3px; background:#fff; box-shadow:0 8px 28px rgba(0,0,0,.45); pointer-events:none; }
      .content-body img:not(#student-photo-img):not(.user-avatar img) { cursor:zoom-in; }
      @media (max-width:640px) { #blog-image-modal .image-zoom-viewport { height:65vh; } #blog-image-modal .image-zoom-toolbar { gap:6px; } }
    `;
    document.head.appendChild(style);
  }

  const zoomIn = document.getElementById('image-zoom-in');
  const zoomOut = document.getElementById('image-zoom-out');
  const zoomReset = document.getElementById('image-zoom-reset');
  const viewer = document.getElementById('blog-image-viewer');
  const preview = document.getElementById('blog-image-modal-preview');
  if (zoomIn) zoomIn.addEventListener('click', () => changeBlogImageZoom(1.25));
  if (zoomOut) zoomOut.addEventListener('click', () => changeBlogImageZoom(0.8));
  if (zoomReset) zoomReset.addEventListener('click', () => fitBlogImageToViewer());

  if (viewer && !viewer.dataset.zoomEventsReady) {
    viewer.dataset.zoomEventsReady = 'true';
    viewer.addEventListener('wheel', (e) => {
      if (!preview || !preview.src) return;
      e.preventDefault();
      changeBlogImageZoom(e.deltaY < 0 ? 1.15 : 1 / 1.15);
    }, { passive: false });

    let dragState = null;
    viewer.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      dragState = { x: e.clientX, y: e.clientY, left: viewer.scrollLeft, top: viewer.scrollTop };
      viewer.classList.add('is-dragging');
      viewer.setPointerCapture(e.pointerId);
    });
    viewer.addEventListener('pointermove', (e) => {
      if (!dragState) return;
      viewer.scrollLeft = dragState.left - (e.clientX - dragState.x);
      viewer.scrollTop = dragState.top - (e.clientY - dragState.y);
    });
    const stopDrag = () => {
      dragState = null;
      viewer.classList.remove('is-dragging');
    };
    viewer.addEventListener('pointerup', stopDrag);
    viewer.addEventListener('pointercancel', stopDrag);
    viewer.addEventListener('lostpointercapture', stopDrag);
  }

  // Any report image in the main content can be opened in the same zoomable viewer.
  if (!document.body.dataset.reportImageZoomReady) {
    document.body.dataset.reportImageZoomReady = 'true';
    document.addEventListener('click', (e) => {
      const image = e.target.closest && e.target.closest('.content-body img');
      if (!image || image.id === 'student-photo-img' || image.closest('#blog-image-modal')) return;
      if (!image.currentSrc && !image.src) return;
      e.preventDefault();
      e.stopPropagation();
      openBlogImageModal(image.currentSrc || image.src, image.alt || 'Hình ảnh báo cáo');
    }, true);
  }

  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
      if (e.key === '+' || e.key === '=') changeBlogImageZoom(1.25);
      if (e.key === '-') changeBlogImageZoom(0.8);
      if (e.key === '0') fitBlogImageToViewer();
    }
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeBlogImageModal();
    }
  });
}

// ==========================================
// 9.1 DEDICATED TECHNICAL BLOG ARTICLES
// ==========================================
const BLOG_ARTICLES = {
  's3-express-one-zone': {
    vi: {
      category: "AWS / Cloud Computing",
      date: "18/10/2026",
      title: "AMAZON S3 EXPRESS ONE ZONE – NHANH HƠN TỚI 10 LẦN, NHƯNG HỆ THỐNG CÓ THỰC SỰ HIỆU QUẢ HƠN?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
      leadSummary: "Trong các hệ thống AI/ML và Data Analytics hiện đại, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu đòi hỏi ứng dụng liên tục truy xuất dữ liệu từ Amazon S3. Tuy nhiên, khi tốc độ đọc dữ liệu không theo kịp khả năng xử lý của CPU/GPU, hệ thống dễ rơi vào tình trạng I/O Bottleneck – tài nguyên tính toán đắt đỏ phải nhàn rỗi chờ dữ liệu, kéo dài thời gian thực thi và làm tăng chi phí hạ tầng. Để giải quyết bài toán này, AWS cung cấp Amazon S3 Express One Zone – một storage class được tối ưu hóa chuyên biệt cho các ứng dụng đòi hỏi độ trễ truy cập cực thấp.",
      coverImage: "assets/images/s3-express-one-zone-architecture.png",
      coverCaption: "Hình 1: Mô hình kiến trúc Amazon S3 Express One Zone với Directory Bucket đặt cùng Availability Zone với cụm máy chủ EC2 / GPU.",
      sections: [
        {
          id: "section-1",
          num: "1",
          title: "1. Amazon S3 Express One Zone là gì?",
          paragraphs: [
            "Amazon S3 Express One Zone là storage class hiệu năng cao nhất của dịch vụ lưu trữ đối tượng Amazon S3, được thiết kế chuyên biệt để phục vụ các ứng dụng phân tích dữ liệu chuyên sâu và huấn luyện mô hình học máy (Machine Learning). Thay vì sử dụng General Purpose Bucket như thông thường, S3 Express One Zone hoạt động dựa trên cấu trúc Directory Bucket hoàn toàn mới.",
            "Điểm khác biệt cốt lõi nằm ở vị trí địa lý của dữ liệu: Thay vì phân tán và nhân bản dữ liệu qua tối thiểu 3 Availability Zones (AZ) như S3 Standard, S3 Express One Zone lưu trữ dữ liệu tập trung trong một Availability Zone (Single-AZ) duy nhất do người dùng chỉ định. Điều này cho phép bạn đặt tài nguyên tính toán (chẳng hạn như Amazon EC2, Amazon EKS, hay AWS SageMaker GPU instances) trong cùng AZ với dữ liệu lưu trữ, loại bỏ hoàn toàn độ trễ truyền tải qua mạng liên vùng và phí inter-AZ data transfer.",
            "Theo công bố chính thức từ AWS, S3 Express One Zone có khả năng cung cấp độ trễ truy xuất dữ liệu ở mức một chữ số mili-giây (single-digit millisecond latency – thông thường dao động từ 1ms đến 3ms) và tốc độ truy cập nhanh hơn tới 10 lần so với S3 Standard trong điều kiện tải cao và tần suất I/O liên tục."
          ],
          callout: {
            title: "Khái niệm kỹ thuật trọng tâm:",
            items: [
              "<strong>Directory Bucket:</strong> Kiến trúc bucket mới tối ưu cho tổ chức dạng cây phân cấp, tăng tốc độ tra cứu metadata gấp nhiều lần so với bucket truyền thống.",
              "<strong>Single Availability Zone (Single-AZ):</strong> Giới hạn dữ liệu trong 1 AZ để đạt độ trễ tiệm cận phần cứng mạng nội bộ của trung tâm dữ liệu.",
              "<strong>Fast Session-Based Authentication:</strong> Cơ chế xác thực thông qua phiên ngắn hạn giúp giảm thiểu độ trễ handshake của từng lệnh đọc/ghi đối tượng."
            ]
          }
        },
        {
          id: "section-2",
          num: "2",
          title: "2. Ưu điểm và hạn chế",
          introText: "Bất kỳ quyết định kiến trúc nào trên nền tảng đám mây cũng là sự đánh đổi (Trade-off). Để ứng dụng hiệu quả S3 Express One Zone, kiến trúc sư giải pháp cần nhìn nhận đa chiều giữa lợi thế hiệu năng và những ranh giới kỹ thuật:",
          advantages: [
            "<strong>Giảm độ trễ truy cập dữ liệu cực thấp (Sub-10ms Latency):</strong> Cung cấp tốc độ đọc/ghi dữ liệu liên tục ở mức một chữ số mili-giây, giải phóng băng thông cho các workload có tần suất I/O dày đặc.",
            "<strong>Tối đa hóa hiệu năng CPU/GPU (Triệt tiêu I/O Bottleneck):</strong> Giảm thiểu tối đa thời gian vi xử lý và card đồ họa GPU đắt tiền phải nhàn rỗi chờ đợi nạp dữ liệu (I/O Wait), nâng cao hiệu suất tính toán thực tế.",
            "<strong>Tiềm năng tiết kiệm chi phí Compute:</strong> Bằng cách rút ngắn thời gian xử lý các tác vụ batch hoặc huấn luyện mô hình, doanh nghiệp có thể tắt sớm các máy ảo EC2/GPU đắt đỏ, từ đó giảm chi phí tổng thể.",
            "<strong>Tương thích liền mạch với AWS Ecosystem:</strong> Hỗ trợ đầy đủ Amazon S3 API tiêu chuẩn, dễ dàng tích hợp với Apache Spark, PyTorch, TensorFlow và AWS SDK mà không cần viết lại mã nguồn ứng dụng."
          ],
          limitations: [
            "<strong>Lưu trữ đơn vùng (Single-AZ Durability):</strong> Dữ liệu chỉ nằm trong một Availability Zone duy nhất. Khi xảy ra sự cố cấp trung tâm dữ liệu hoặc mất điện diện rộng tại AZ đó, dữ liệu có thể tạm thời không khả dụng hoặc bị ảnh hưởng, không có tính năng tự động chuyển vùng như S3 Standard.",
            "<strong>Chi phí lưu trữ và request đặc thù:</strong> Chi phí lưu trữ mỗi GB/tháng và chi phí yêu cầu (PUT/GET requests) cao hơn so với S3 Standard. Nếu workload không tận dụng hết tốc độ I/O, chi phí hóa đơn AWS sẽ tăng lên đáng kể.",
            "<strong>Chưa hỗ trợ một số tính năng mở rộng của S3:</strong> Không hỗ trợ S3 Versioning (quản lý phiên bản đối tượng), S3 Replication (sao chép liên vùng CRR/SRR), và các quy tắc S3 Lifecycle chuyển tầng tự động.",
            "<strong>Định luật Amdahl – Giới hạn tăng tốc toàn trình:</strong> Tốc độ truy xuất dữ liệu tăng 10 lần hoàn toàn không đồng nghĩa với việc toàn bộ pipeline hệ thống của bạn sẽ chạy nhanh gấp 10 lần."
          ]
        },
        {
          id: "section-3",
          num: "3",
          title: "3. Phân tích hiệu năng qua ví dụ (Định luật Amdahl)",
          introText: "Để làm rõ câu hỏi 'Hệ thống có thực sự hiệu quả hơn?', hãy cùng phân tích định lượng một bài toán huấn luyện AI xử lý dữ liệu hình ảnh thực tế dựa trên Định luật Amdahl (Amdahl's Law):",
          baselineDesc: "Giả sử một pipeline AI hoàn tất việc xử lý một đợt hình ảnh trong tổng thời gian <strong>100 phút</strong> với tỷ trọng các giai đoạn như sau:",
          baselineIo: "Đọc nạp dữ liệu từ S3: 20 phút (chiếm 20% tổng thời gian)",
          baselineCompute: "Tiền xử lý, trích xuất đặc trưng & tính toán CPU/GPU: 80 phút (chiếm 80% tổng thời gian)",
          expressDesc: "Khi chuyển đổi tầng lưu trữ sang <strong>Amazon S3 Express One Zone</strong> (tốc độ đọc dữ liệu được tăng tốc <strong>10 lần</strong> trong điều kiện tối ưu):",
          expressIo: "20 phút ÷ 10 = 2 phút",
          expressCompute: "80 phút (không đổi vì năng lực tính toán CPU/GPU giữ nguyên)",
          expressTotal: "2 phút + 80 phút = 82 phút",
          speedupSummary: "Mặc dù thời gian đọc I/O đã được rút ngắn tới 10 lần (giảm từ 20 phút xuống chỉ còn 2 phút), tổng thời gian hoàn thành toàn bộ tác vụ chỉ giảm từ 100 phút xuống 82 phút – tức là toàn hệ thống chỉ nhanh hơn 18%!",
          amdahlQuote: "Định luật Amdahl (Amdahl's Law) khẳng định: Tốc độ tăng tốc tối đa của toàn bộ hệ thống bị giới hạn bởi tỷ lệ thời gian của thành phần được cải thiện. Do đó, trước khi đầu tư nâng cấp lên storage class đắt tiền, kỹ sư Cloud bắt buộc phải tiến hành profiling để xác định chính xác nút thắt cổ chai (bottleneck) của hệ thống đang nằm ở I/O hay ở Compute/GPU."
        },
        {
          id: "section-4",
          num: "4",
          title: "4. Góc nhìn và đề xuất ứng dụng (Kiến trúc lưu trữ 2 lớp)",
          introText: "Từ thực tế phân tích trên, thay vì di chuyển toàn bộ Data Lake hoặc cơ sở dữ liệu sang S3 Express One Zone (gây lãng phí ngân sách và mất đi khả năng bảo vệ Multi-AZ), kiến trúc tối ưu nhất chính là áp dụng <strong>Kiến trúc lưu trữ hai lớp (Two-Tier Storage Architecture)</strong>:",
          tiers: [
            {
              title: "Lớp 1: Amazon S3 Standard",
              sub: "Data Lake & Master Storage",
              desc: "Lưu trữ toàn bộ tập dữ liệu gốc (Golden Dataset) với độ bền 99.999999999% (11 số 9) trên nhiều Availability Zones. Đảm bảo an toàn dữ liệu tuyệt đối trước mọi sự cố thiên tai với chi phí lưu trữ theo GB rẻ nhất."
            },
            {
              title: "Lớp 2: S3 Express One Zone",
              sub: "Hot Working Set / Cache",
              desc: "Chỉ lưu trữ tạm thời tập dữ liệu đang trực tiếp tham gia tính toán (Active Batch). Được đặt trong Directory Bucket cùng AZ với máy chủ EC2/GPU để cung cấp độ trễ dưới 10ms."
            },
            {
              title: "Tầng Điện toán: EC2 / GPU",
              sub: "Co-located Compute Nodes",
              desc: "Cụm máy tính huấn luyện mô hình được khởi chạy trong cùng Availability Zone với S3 Express One Zone, xóa bỏ chi phí truyền tải liên vùng và khai thác tối đa băng thông mạng nội bộ."
            }
          ],
          caseStudy: "<strong>Ví dụ bài toán thực tế:</strong> Một hệ thống AI quản lý một kho dữ liệu gồm 1.000.000 hình ảnh, nhưng mỗi ngày chu trình phân tích chỉ cần xử lý một tập dữ liệu làm việc (Active Working Set) gồm 100.000 hình ảnh. Thay vì chuyển đổi toàn bộ 1 triệu ảnh, hệ thống chỉ sao chép 100.000 ảnh cần xử lý sang Directory Bucket của S3 Express One Zone trước khi bắt đầu job tính toán, và dọn dẹp sau khi hoàn thành.",
          roiQuestion: "Điều kiện kinh tế (ROI Break-even):",
          roiMath: "Chi phí Copy dữ liệu + Thời gian Transfer < Lợi ích tiết kiệm chi phí thuê Compute (GPU/EC2)",
          roiExplanation: "Nếu chi phí sao chép dữ liệu và thời gian chờ chuyển tập tin lớn hơn số tiền tiết kiệm được từ việc xử lý nhanh hơn trên máy chủ GPU, việc giữ nguyên dữ liệu tại S3 Standard kết hợp kỹ thuật multi-part read hoặc bộ đệm RAM cục bộ vẫn sẽ là phương án kinh tế và hiệu quả hơn nhiều."
        },
        {
          id: "section-5",
          num: "5",
          title: "5. Kết luận & Đúc kết kiến trúc",
          paragraphs: [
            "Amazon S3 Express One Zone thực sự là một vũ khí công nghệ mạnh mẽ dành cho các ứng dụng trí tuệ nhân tạo (AI/ML), phân tích dữ liệu lớn (Big Data) và các hệ thống tài chính yêu cầu tần suất đọc/ghi cao cùng độ trễ cực thấp.",
            "Tuy nhiên, giá trị của một công nghệ không thể chỉ được đo bằng những con số marketing ấn tượng như 'nhanh gấp 10 lần'. Một kiến trúc sư điện toán đám mây chuyên nghiệp cần xác định rõ ràng: tập dữ liệu nào thực sự cần tăng tốc, mức độ cải thiện thời gian toàn trình của hệ thống sau khi áp dụng định luật Amdahl, và điểm hòa vốn kinh tế giữa chi phí lưu trữ với chi phí điện toán."
          ],
          goldenQuote: "Hiệu quả của kiến trúc Cloud không nằm ở việc sử dụng dịch vụ nhanh nhất, mà ở việc lựa chọn đúng giải pháp cho từng phần của workload.",
          checklistTitle: "Checklist 4 bước trước khi triển khai S3 Express One Zone:",
          checklistItems: [
            "1. <strong>System Profiling:</strong> Đo đạc thời gian I/O Wait so với Compute Time. Chỉ triển khai khi I/O thực sự là điểm nghẽn chính.",
            "2. <strong>Isolate Working Set:</strong> Chỉ chuyển tập dữ liệu nóng (Hot working data) vào S3 Express One Zone, giữ nguyên Master Data trên S3 Standard.",
            "3. <strong>AZ Co-location:</strong> Đảm bảo toàn bộ máy tính ảo EC2 / EKS Pods / GPU đặt trong cùng Availability Zone với Directory Bucket.",
            "4. <strong>Financial ROI Check:</strong> Đảm bảo chi phí lưu trữ và request phát sinh thấp hơn ngân sách GPU/Compute tiết kiệm được."
          ]
        }
      ],
      referencesTitle: "Tài liệu tham khảo chính thức từ AWS",
      references: [
        {
          title: "AWS Documentation – S3 Express One Zone Performance",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Storage Classes",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
        },
        {
          title: "AWS Documentation – S3 Express One Zone Best Practices",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Pricing & Cost Calculator",
          url: "https://aws.amazon.com/s3/pricing/"
        },
        {
          title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Lên đầu trang ↑"
    },
    en: {
      category: "AWS / Cloud Computing",
      date: "18/10/2026",
      title: "AMAZON S3 EXPRESS ONE ZONE – UP TO 10X FASTER, BUT IS THE SYSTEM TRULY MORE EFFICIENT?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
      leadSummary: "In modern AI/ML and Data Analytics architectures, ingesting and processing millions of images or unstructured files requires continuous high-frequency access to Amazon S3. When data read speeds cannot keep pace with CPU/GPU processing capabilities, the system encounters an I/O Bottleneck — expensive compute clusters sit idle waiting for bytes, inflating execution time and infrastructure costs. To eliminate this friction, AWS introduced Amazon S3 Express One Zone, a specialized high-performance storage class engineered for ultra-low latency workloads.",
      coverImage: "assets/images/s3-express-one-zone-architecture.png",
      coverCaption: "Figure 1: Architectural model of Amazon S3 Express One Zone utilizing Directory Buckets co-located within the identical Availability Zone as EC2 / GPU compute clusters.",
      sections: [
        {
          id: "section-1",
          num: "1",
          title: "1. What is Amazon S3 Express One Zone?",
          paragraphs: [
            "Amazon S3 Express One Zone is the highest-performing storage class within Amazon S3, purpose-built to accelerate data-intensive analytics and machine learning model training workloads. Instead of standard general-purpose buckets, S3 Express One Zone operates on a newly re-architected Directory Bucket model.",
            "The pivotal architectural distinction lies in data locality: Rather than replicating and dispersing objects across a minimum of three Availability Zones (Multi-AZ) like S3 Standard, S3 Express One Zone co-locates data within a single, dedicated Availability Zone (Single-AZ) of your choice. This enables architects to place high-throughput compute instances (such as Amazon EC2, Amazon EKS, or SageMaker GPU workers) inside the identical AZ as your storage, completely eliminating cross-AZ network transit latency and inter-AZ data transfer fees.",
            "According to official AWS benchmarks, S3 Express One Zone consistently achieves single-digit millisecond access latencies (typically ranging between 1ms and 3ms) and throughput up to 10x faster than S3 Standard under sustained, concurrent request workloads."
          ],
          callout: {
            title: "Core Technical Concepts:",
            items: [
              "<strong>Directory Bucket:</strong> A re-engineered hierarchical bucket architecture designed for ultra-low latency metadata lookups and high request rates.",
              "<strong>Single Availability Zone (Single-AZ):</strong> Localized storage placement delivering sub-10ms latency comparable to high-performance local network storage.",
              "<strong>Fast Session-Based Authentication:</strong> Lightweight, session-based security credentials that remove signature verification overhead on high-frequency API calls."
            ]
          }
        },
        {
          id: "section-2",
          num: "2",
          title: "2. Advantages & Limitations",
          introText: "Every cloud architectural decision represents a deliberate trade-off. To effectively leverage S3 Express One Zone, engineers must evaluate both its raw performance gains and its operational boundaries:",
          advantages: [
            "<strong>Sub-10ms Access Latency:</strong> Delivers single-digit millisecond read/write latencies, dramatically reducing turnaround time for high-frequency I/O workloads.",
            "<strong>Eliminates I/O Wait on Expensive Compute:</strong> Drastically reduces CPU/GPU idle wait cycles, ensuring costly machine learning accelerators operate at maximum utilization.",
            "<strong>Potential to Lower Compute Bills:</strong> Accelerating batch processing times allows organizations to shut down pricey EC2/GPU compute clusters earlier, generating net cost savings.",
            "<strong>Seamless AWS API Compatibility:</strong> Retains standard S3 API compatibility, enabling frictionless integration with PyTorch, TensorFlow, Apache Spark, and AWS SDKs without code refactoring."
          ],
          limitations: [
            "<strong>Single-AZ Durability Model:</strong> Data is restricted to a single Availability Zone. In the rare event of a datacenter-level outage within that specific AZ, data is not redundantly available elsewhere like S3 Standard.",
            "<strong>Higher Unit Cost Structure:</strong> Storage capacity fees per GB/month and API request charges (PUT/GET) are significantly higher than S3 Standard. Viability hinges on workload access density.",
            "<strong>Lack of Certain S3 Enterprise Features:</strong> Does not currently support S3 Versioning, S3 Cross-Region Replication (CRR/SRR), or automated S3 Lifecycle tiering.",
            "<strong>Amdahl's Law Reality:</strong> A 10x acceleration in storage I/O does not equate to a 10x acceleration of the end-to-end processing pipeline."
          ]
        },
        {
          id: "section-3",
          num: "3",
          title: "3. Performance Analysis via Example (Amdahl's Law)",
          introText: "To definitively answer whether the system is truly more efficient, let us examine a quantitative scenario modeling an AI image processing pipeline based on Amdahl's Law:",
          baselineDesc: "Suppose an end-to-end AI batch processing task currently takes <strong>100 minutes</strong> to complete, broken down as follows:",
          baselineIo: "Fetching raw images from S3: 20 minutes (20% of total runtime)",
          baselineCompute: "Preprocessing, feature extraction, GPU inference: 80 minutes (80% of total runtime)",
          expressDesc: "When migrating the storage layer to <strong>Amazon S3 Express One Zone</strong> (assuming a <strong>10x speedup</strong> in data read time under optimal conditions):",
          expressIo: "20 minutes ÷ 10 = 2 minutes",
          expressCompute: "80 minutes (remains unchanged as CPU/GPU processing capability is unchanged)",
          expressTotal: "2 minutes + 80 minutes = 82 minutes",
          speedupSummary: "Even though storage I/O was accelerated by a massive 10x (shrinking from 20 minutes down to 2 minutes), the total end-to-end runtime only dropped from 100 minutes to 82 minutes — representing an overall system gain of just 18%!",
          amdahlQuote: "Amdahl's Law states: The overall performance speedup of a system is strictly bounded by the proportion of time spent in the component being improved. Cloud architects must perform rigorous profiling before committing to premium storage tiers to determine whether the bottleneck is genuinely I/O-bound or compute-bound."
        },
        {
          id: "section-4",
          num: "4",
          title: "4. Architectural Perspectives & Recommendations (Two-Tier Storage)",
          introText: "Based on these empirical insights, rather than prematurely migrating an entire Data Lake to S3 Express One Zone (incurring unnecessary storage expenses and losing Multi-AZ disaster durability), the recommended pattern is a <strong>Two-Tier Storage Architecture</strong>:",
          tiers: [
            {
              title: "Layer 1: Amazon S3 Standard",
              sub: "Master Data Lake",
              desc: "Houses the persistent, authoritative master dataset with 99.999999999% (11 9s) durability across multiple Availability Zones. Provides disaster resilience and lowest cost per GB."
            },
            {
              title: "Layer 2: S3 Express One Zone",
              sub: "Active Working Set / Scratchpad",
              desc: "Temporarily stages only the active working set needed for the current batch training epoch. Co-located in the same AZ Directory Bucket for sub-10ms access speeds."
            },
            {
              title: "Compute Layer: EC2 / GPU Nodes",
              sub: "Co-located Compute Clusters",
              desc: "Training workers are spun up inside the identical AZ as the S3 Express One Zone Directory Bucket, achieving maximum network throughput and zero cross-AZ data fees."
            }
          ],
          caseStudy: "<strong>Real-world Case Study:</strong> An AI vision pipeline maintains 1,000,000 reference images, but daily training iterations only require an active working set of 100,000 images. Instead of migrating all 1 million files, the orchestration layer syncs only the 100,000 active images to S3 Express One Zone before the run, wiping the scratchpad after completion.",
          roiQuestion: "Investment Break-Even Formula (ROI Equation):",
          roiMath: "Data Staging Cost + Transfer Overhead < Compute (GPU/EC2) Cost Savings",
          roiExplanation: "If data staging costs and time overhead exceed the financial savings gained from reduced GPU instance hours, keeping the files in S3 Standard with tuned multi-part reads or local RAM caching may remain the superior, cost-effective architecture."
        },
        {
          id: "section-5",
          num: "5",
          title: "5. Conclusion & Architectural Principles",
          paragraphs: [
            "Amazon S3 Express One Zone represents a transformative leap for machine learning, real-time analytics, and latency-critical cloud workflows requiring sustained, high-frequency object access.",
            "However, true architectural excellence is never defined by headline speeds like '10x faster'. Seasoned cloud architects must isolate which working set genuinely requires acceleration, project end-to-end system speedup through Amdahl's Law, and calculate the cost break-even threshold between storage and compute."
          ],
          goldenQuote: "Cloud architectural excellence does not lie in adopting the fastest individual service, but in selecting the right tool for each distinct phase of the workload.",
          checklistTitle: "4-Step Pre-Flight Migration Checklist:",
          checklistItems: [
            "1. <strong>System Profiling:</strong> Profile I/O Wait vs. Compute time. Migrate only when I/O represents the primary execution bottleneck.",
            "2. <strong>Isolate Working Set:</strong> Stage hot working data into S3 Express One Zone while maintaining master datasets on S3 Standard.",
            "3. <strong>AZ Co-location:</strong> Ensure compute instances (EC2 / EKS / SageMaker) reside in the exact same AZ as the Directory Bucket.",
            "4. <strong>Financial ROI Check:</strong> Verify that incremental storage and API costs remain strictly lower than the compute savings achieved."
          ]
        }
      ],
      referencesTitle: "Official AWS Documentation & Resources",
      references: [
        {
          title: "AWS Documentation – S3 Express One Zone Performance",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Storage Classes",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
        },
        {
          title: "AWS Documentation – S3 Express One Zone Best Practices",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Pricing & Cost Calculator",
          url: "https://aws.amazon.com/s3/pricing/"
        },
        {
          title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  },
  'aws-event-driven-architecture': {
    vi: {
      category: "AWS / Distributed Systems / Architecture",
      date: "04/11/2026",
      title: "AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
      leadSummary: "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS, mình nhận thấy một vấn đề: Một hệ thống có thể xử lý tất cả sự kiện thành công nhưng vẫn tạo ra kết quả sai do Race Condition. Điều này xuất phát từ đặc điểm xử lý bất đồng bộ, đặc biệt khi kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB.",
      coverImage: "assets/images/aws-event-driven-architecture.png",
      coverCaption: "Kiến trúc Event-Driven trên AWS – Xử lý sự kiện, kiểm soát thứ tự và công bố kết quả nguyên tử",
      sections: [
        {
          id: "eda-sec-1",
          num: "1",
          title: "1. VẤN ĐỀ Ở ĐÂY LÀ GÌ?",
          paragraphs: [
            "Amazon S3 Event Notifications sử dụng cơ chế At-Least-Once Delivery, không bảo đảm sự kiện được gửi duy nhất một lần hoặc theo đúng thứ tự.",
            "Giả sử một hệ thống AI xử lý tài liệu được cập nhật từ phiên bản A sang B:",
            "Cả hai Lambda đều thực thi thành công (HTTP 200), nhưng kết quả cuối cùng lại sai."
          ],
          scenarioItems: [
            "<strong>Lambda A:</strong> Xử lý phiên bản gốc A trong 15 giây.",
            "<strong>Lambda B:</strong> Xử lý phiên bản cập nhật B chỉ trong 4 giây.",
            "<strong>Hậu quả:</strong> B hoàn thành trước, nhưng A hoàn thành sau và ghi đè kết quả cũ lên kết quả mới."
          ],
          table: {
            headers: ["Luồng xử lý", "Phiên bản tài liệu", "Thời điểm bắt đầu", "Thời gian xử lý", "Thời điểm ghi kết quả", "Hậu quả thực tế"],
            rows: [
              ["<strong>Worker A</strong>", "Phiên bản A (v1)", "T0", "15 giây", "T0 + 15s", "<strong>Ghi đè sai kết quả của B</strong>"],
              ["<strong>Worker B</strong>", "Phiên bản B (v2 - Mới nhất)", "T0 + 2s", "4 giây", "T0 + 6s", "Bị kết quả cũ của A ghi đè mất"]
            ]
          },
          keyInsight: "Mấu chốt vấn đề: Không có bất kỳ lỗi ứng dụng nào xảy ra và 100% lời gọi hàm Lambda đều thành công, nhưng kết quả nghiệp vụ cuối cùng vẫn bị sai lệch do sự chênh lệch thời gian xử lý trong môi trường bất đồng bộ."
        },
        {
          id: "eda-sec-2",
          num: "2",
          title: "2. VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ?",
          paragraphs: [
            "Nhiều kỹ sư thường mặc định rằng việc áp dụng Idempotency và Message Queuing sẽ giải quyết được bài toán Race Condition. Tuy nhiên trên thực tế, các cơ chế này có những giới hạn cốt lõi:"
          ],
          points: [
            "<strong>Idempotency:</strong> Giúp ngăn tác động xử lý trùng lặp của cùng một sự kiện, nhưng không tự động ngăn sự kiện cũ ghi đè kết quả mới.",
            "<strong>Amazon SQS FIFO:</strong> Duy trì thứ tự theo Message Group, nhưng không thể khôi phục thứ tự gốc nếu các sự kiện đã đến sai trước khi vào hàng đợi.",
            "<strong>Vấn đề TOCTOU (Time-of-Check to Time-of-Use):</strong> Ngay cả khi Lambda kiểm tra phiên bản trước khi xử lý, dữ liệu vẫn có thể thay đổi trong lúc thực thi."
          ]
        },
        {
          id: "eda-sec-3",
          num: "3",
          title: "3. ĐỀ XUẤT",
          introText: "Thay vì để Lambda ghi đè trực tiếp kết quả vào vị trí lưu trữ dùng chung, mình đề xuất mô hình kiến trúc kết hợp 5 cơ chế cốt lõi:",
          solutions: [
            "<strong>S3 Versioning:</strong> Truy xuất đúng phiên bản dữ liệu đầu vào. Đảm bảo worker đọc đúng phiên bản tương ứng với sự kiện, tránh đọc nhầm dữ liệu đang bị thay đổi.",
            "<strong>S3 Sequencer:</strong> Xác định thứ tự các thao tác được hỗ trợ trên cùng object key. Chuỗi ký tự thập lục phân trong payload sự kiện cung cấp thứ tự vật lý tin cậy tuyệt đối.",
            "<strong>Immutable Output:</strong> Mỗi Lambda ghi kết quả vào đường dẫn riêng (ví dụ: output/{key}/{version_id}/result.json), tuyệt đối không ghi đè trực tiếp.",
            "<strong>DynamoDB Conditional Write:</strong> Kiểm soát việc công bố kết quả bằng điều kiện cập nhật nguyên tử. Chỉ cho phép cập nhật con trỏ trạng thái nếu sequencer mới hơn.",
            "<strong>Reconciliation:</strong> Phục hồi tác vụ bị gián đoạn và đối chiếu trạng thái khi cần."
          ],
          table: {
            headers: ["Thành phần", "Vai trò trong giải pháp", "Cơ chế bảo đảm tính đúng đắn"],
            rows: [
              ["<strong>Amazon S3 Versioning</strong>", "Bảo toàn dữ liệu nguồn đầu vào", "Version ID bất biến cho từng lần tải lên đối tượng"],
              ["<strong>S3 Object Sequencer</strong>", "Xác định thứ tự nghiệp vụ gốc", "So sánh chuỗi thập lục phân biểu diễn timestamp vật lý từ S3"],
              ["<strong>Immutable Output</strong>", "Lưu trữ trung gian độc lập", "Mỗi worker ghi vào prefix riêng, triệt tiêu xung đột ghi đè"],
              ["<strong>DynamoDB Conditional Write</strong>", "Công bố kết quả nguyên tử", "Compare-and-Swap: chỉ cập nhật nếu s3_sequencer mới hơn"],
              ["<strong>Reconciliation Worker</strong>", "Xử lý lỗi cục bộ (Partial Failure)", "Đối chiếu trạng thái giữa S3 và con trỏ DynamoDB"]
            ]
          },
          conditionTitle: "Cơ chế cập nhật nguyên tử DynamoDB Conditional Write (Compare-and-Swap):",
          conditionCode: `UpdateItem(
  Key = { "object_key": "document-123.pdf" },
  UpdateExpression = "SET latest_version = :v, result_uri = :uri, s3_sequencer = :seq, updated_at = :ts",
  ConditionExpression = "attribute_not_exists(object_key) OR s3_sequencer < :seq",
  ExpressionAttributeValues = {
    ":seq": event.s3.object.sequencer,
    ":v": event.s3.object.versionId,
    ":uri": "s3://bucket/output/doc-123/v2/result.json",
    ":ts": "2026-11-04T10:30:00Z"
  }
)`,
          postText: "Với kiến trúc này, Lambda A có thể hoàn thành sau B nhưng không được ghi đè kết quả B đã công bố.",
          partialFailureNote: "Tuy nhiên, S3 và DynamoDB không hỗ trợ một transaction nguyên tử chung. Vì vậy, hệ thống vẫn cần cơ chế Retry và Recovery để xử lý Partial Failure khi ghi S3 thành công nhưng cập nhật DynamoDB bị gián đoạn."
        },
        {
          id: "eda-sec-4",
          num: "4",
          title: "4. KẾT LUẬN",
          paragraphs: [
            "Theo mình, một vấn đề đáng quan tâm trong Cloud Architecture là: 100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.",
            "Thay vì cố gắng buộc mọi sự kiện xử lý đúng thứ tự, kiến trúc nên kiểm soát phiên bản nào được phép thay đổi kết quả chính thức."
          ],
          goldenQuote: "100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.",
          checklistTitle: "Đúc kết nguyên tắc thiết kế phân tán:",
          checklistItems: [
            "1. <strong>Tách biệt tính toán và công bố:</strong> Sử dụng Immutable Output cho lưu trữ trung gian và DynamoDB làm con trỏ công bố trạng thái chính thức.",
            "2. <strong>Kiểm soát thứ tự tại đích:</strong> Sử dụng S3 Sequencer và DynamoDB ConditionExpression thay vì dựa vào thứ tự đến của hàng đợi.",
            "3. <strong>Thiết kế sẵn sàng cho Partial Failure:</strong> Luôn xây dựng Reconciliation Worker để tự động đối chiếu và khôi phục trạng thái nhất quán."
          ]
        }
      ],
      tags: ["#AWS", "#EventDrivenArchitecture", "#AWSLambda", "#DynamoDB", "#DistributedSystems", "#CloudArchitecture"],
      referencesTitle: "Tài liệu tham khảo chính thức từ AWS",
      references: [
        {
          title: "AWS Documentation – Amazon S3 Event Notifications & Object Sequencer",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html"
        },
        {
          title: "AWS Documentation – Working with Queries and Conditional Writes in DynamoDB",
          url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"
        },
        {
          title: "AWS Architecture Center – Event-Driven Architecture Patterns and Best Practices",
          url: "https://aws.amazon.com/event-driven-architecture/"
        },
        {
          title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Lên đầu trang ↑"
    },
    en: {
      category: "AWS / Distributed Systems / Architecture",
      date: "04/11/2026",
      title: "AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
      leadSummary: "While researching Event-Driven Architecture on AWS, I identified a critical paradox: A system can process all events with 100% success yet still generate incorrect business data due to Race Conditions. This stems directly from the asynchronous nature of decoupled services, particularly when orchestrating Amazon S3, EventBridge, SQS, AWS Lambda, and DynamoDB.",
      coverImage: "assets/images/aws-event-driven-architecture.png",
      coverCaption: "AWS Event-Driven Architecture – Event Processing, Ordering and Atomic Publishing",
      sections: [
        {
          id: "eda-sec-1",
          num: "1",
          title: "1. WHAT IS THE PROBLEM HERE?",
          paragraphs: [
            "Amazon S3 Event Notifications operate on an At-Least-Once Delivery model, providing no inherent guarantee that events arrive exactly once or in chronological order.",
            "Suppose an AI document processing pipeline updates a file from Version A to Version B:",
            "Both Lambda invocations succeed with HTTP 200, yet the final persisted business outcome is completely corrupted."
          ],
          scenarioItems: [
            "<strong>Lambda A:</strong> Processes baseline Version A in 15 seconds.",
            "<strong>Lambda B:</strong> Processes updated Version B in only 4 seconds.",
            "<strong>Outcome:</strong> B completes first, but Lambda A finishes later and overwrites the newer result with stale data."
          ],
          table: {
            headers: ["Worker / Invocation", "Document Version", "Start Time", "Duration", "Write Time", "Actual Outcome"],
            rows: [
              ["<strong>Worker A</strong>", "Version A (v1)", "T0", "15 seconds", "T0 + 15s", "<strong>Overwrites newer result of B</strong>"],
              ["<strong>Worker B</strong>", "Version B (v2 - Latest)", "T0 + 2s", "4 seconds", "T0 + 6s", "Overwritten by stale output from A"]
            ]
          },
          keyInsight: "Core reality: Every individual AWS service worked as designed, yet the business result became corrupted due to uneven invocation latency across distributed workers."
        },
        {
          id: "eda-sec-2",
          num: "2",
          title: "2. WHY ARE IDEMPOTENCY AND SQS NOT ENOUGH?",
          paragraphs: [
            "Engineers commonly assume that applying Idempotency and SQS FIFO queues will eliminate race conditions in event-driven systems. In practice, both exhibit fundamental boundaries:"
          ],
          points: [
            "<strong>Idempotency:</strong> Prevents duplicate side-effects from identical event retries, but cannot prevent an older stale event from overwriting a newer result.",
            "<strong>Amazon SQS FIFO:</strong> Enforces strict ordering within Message Groups, but cannot restore chronological order if events were already delivered out-of-order prior to entering the queue.",
            "<strong>TOCTOU (Time-of-Check to Time-of-Use):</strong> Even when a Lambda inspects object versions before processing, underlying data can change during execution."
          ]
        },
        {
          id: "eda-sec-3",
          num: "3",
          title: "3. PROPOSED ARCHITECTURAL SOLUTION",
          introText: "Rather than allowing Lambda functions to directly overwrite shared storage, the recommended pattern blends five core mechanisms:",
          solutions: [
            "<strong>S3 Versioning:</strong> Retrieve the exact input data version. Guarantees workers read the specific object version tied to the event.",
            "<strong>S3 Sequencer:</strong> Determine event sequence order on the same object key using the physical hexadecimal timestamp in S3 event payloads.",
            "<strong>Immutable Output:</strong> Each Lambda writes results to a dedicated immutable path (e.g., output/{key}/{version_id}/result.json), preventing direct overwrite conflicts.",
            "<strong>DynamoDB Conditional Write:</strong> Control result publishing using atomic Compare-and-Swap conditional updates. Only updates state if the sequencer is newer.",
            "<strong>Reconciliation:</strong> Recover interrupted tasks and reconcile state inconsistencies when partial failures occur."
          ],
          table: {
            headers: ["Component", "Role in Architecture", "Correctness Guarantee Mechanism"],
            rows: [
              ["<strong>Amazon S3 Versioning</strong>", "Input source data preservation", "Immutable Version ID per PutObject invocation"],
              ["<strong>S3 Object Sequencer</strong>", "Original event ordering authority", "Hexadecimal string reflecting physical S3 commit order"],
              ["<strong>Immutable Output</strong>", "Isolated intermediate storage", "Dedicated prefix per worker, zero direct overwrite"],
              ["<strong>DynamoDB Conditional Write</strong>", "Atomic result pointer publishing", "Compare-and-Swap: updates state only if s3_sequencer is newer"],
              ["<strong>Reconciliation Worker</strong>", "Partial failure recovery", "Audits state discrepancies between S3 and DynamoDB pointer"]
            ]
          },
          conditionTitle: "DynamoDB Atomic Conditional Update Pattern (Compare-and-Swap):",
          conditionCode: `UpdateItem(
  Key = { "object_key": "document-123.pdf" },
  UpdateExpression = "SET latest_version = :v, result_uri = :uri, s3_sequencer = :seq, updated_at = :ts",
  ConditionExpression = "attribute_not_exists(object_key) OR s3_sequencer < :seq",
  ExpressionAttributeValues = {
    ":seq": event.s3.object.sequencer,
    ":v": event.s3.object.versionId,
    ":uri": "s3://bucket/output/doc-123/v2/result.json",
    ":ts": "2026-11-04T10:30:00Z"
  }
)`,
          postText: "Under this architecture, Lambda A can finish after B without ever overwriting B's published result.",
          partialFailureNote: "However, Amazon S3 and DynamoDB do not share an atomic two-phase commit transaction. Systems must incorporate Retry and Recovery mechanisms to handle partial failures when S3 writes succeed but DynamoDB updates are interrupted."
        },
        {
          id: "eda-sec-4",
          num: "4",
          title: "4. CONCLUSION & PRINCIPLES",
          paragraphs: [
            "In cloud architecture: 100% successful Lambda invocations do not equate to 100% correct business state.",
            "Instead of attempting to force every distributed event to process in strict serial order, architectures should control which version is permitted to publish the authoritative result."
          ],
          goldenQuote: "100% Lambda Invocations successful does not equal 100% business correctness.",
          checklistTitle: "Core Distributed Design Principles:",
          checklistItems: [
            "1. <strong>Decouple Processing from Publishing:</strong> Leverage Immutable Output for processing and atomic pointers for publishing.",
            "2. <strong>Enforce Ordering at the Destination:</strong> Use S3 Sequencers and DynamoDB ConditionExpression instead of fragile queue arrival order.",
            "3. <strong>Design for Partial Failure:</strong> Build Reconciliation Workers to automatically heal cross-service inconsistencies."
          ]
        }
      ],
      tags: ["#AWS", "#EventDrivenArchitecture", "#AWSLambda", "#DynamoDB", "#DistributedSystems", "#CloudArchitecture"],
      referencesTitle: "Official AWS Documentation & Resources",
      references: [
        {
          title: "AWS Documentation – Amazon S3 Event Notifications & Object Sequencer",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html"
        },
        {
          title: "AWS Documentation – Working with Queries and Conditional Writes in DynamoDB",
          url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"
        },
        {
          title: "AWS Architecture Center – Event-Driven Architecture Patterns and Best Practices",
          url: "https://aws.amazon.com/event-driven-architecture/"
        },
        {
          title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  },
  'aws-ec2-identity-containment': {
    vi: {
      category: "AWS STUDY GROUP / CLOUD SECURITY",
      date: "15/11/2026",
      title: "CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG",
      subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
      leadSummary: "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích chuyên sâu về sự khác biệt giữa Network Containment và Identity Containment: Vì sao Security Group không thể thu hồi IAM Sessions, giới hạn của IMDSv2 trước Remote Code Execution, và mô hình phản ứng sự cố tự động (Automated Incident Response) kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC.",
      coverImage: "assets/images/aws-ec2-identity-containment-architecture.png",
      coverCaption: "Hình 1: Mô hình Automated Incident Response trên AWS – Kết hợp Network Containment, Credential Issuance Containment và Identity Containment.",
      sections: [
        {
          id: "sec-1",
          num: "1",
          title: "1. Khi thứ bị đánh cắp không chỉ là dữ liệu, mà còn là danh tính",
          paragraphs: [
            "Giả sử một doanh nghiệp triển khai backend trên Amazon EC2, sử dụng Amazon S3 để lưu trữ dữ liệu và Amazon DynamoDB để quản lý thông tin giao dịch.",
            "Thay vì lưu Access Key trực tiếp trong mã nguồn, EC2 được gắn IAM Role thông qua Instance Profile và sử dụng Temporary Security Credentials được cung cấp bởi Instance Metadata Service (IMDS).",
            "Đây là một phương pháp bảo mật được AWS khuyến nghị. Tuy nhiên, hãy xét một kịch bản giả định:"
          ],
          timeline: [
            { time: "09:00", event: "EC2 bị xâm nhập", desc: "Kẻ tấn công khai thác lỗ hổng ứng dụng để thực thi mã từ xa (RCE) trên instance." },
            { time: "09:05", event: "Temporary Credentials bị đánh cắp", desc: "Kẻ tấn công trích xuất token xác thực tạm thời từ Instance Metadata Service (IMDS)." },
            { time: "09:10", event: "Đội ngũ Security phát hiện sự cố", desc: "Hệ thống giám sát ghi nhận hoạt động bất thường và phát tín hiệu cảnh báo." },
            { time: "09:15", event: "Quarantine Security Group được áp dụng để cô lập EC2", desc: "Cô lập EC2 ở tầng mạng bằng cách gỡ bỏ toàn bộ inbound/outbound rules thông thường." },
            { time: "09:20", event: "Kẻ tấn công vẫn có thể gửi yêu cầu truy cập Amazon S3 từ một môi trường khác", desc: "Từ một máy chủ ngoài Internet, kẻ tấn công dùng credentials vừa lấy cắp để gửi request trực tiếp đến S3 API." }
          ],
          whyTitle: "Tại sao điều này lại xảy ra?",
          whyParagraph: "Bởi vì Temporary Credentials không mặc định bị ràng buộc với môi trường mạng của EC2 đã nhận chúng. Nếu credentials chưa hết hạn và quyền truy cập chưa bị từ chối bởi các chính sách bảo mật, kẻ tấn công vẫn có thể lợi dụng danh tính của workload để tương tác với AWS API mà không cần kết nối lại với EC2 ban đầu."
        },
        {
          id: "sec-2",
          num: "2",
          title: "2. Network Containment ≠ Identity Containment",
          paragraphs: [
            "Một trong những vấn đề khi xử lý sự cố trên Cloud là sự khác biệt giữa hai lớp kiểm soát: Network Containment (Cô lập tài nguyên ở cấp độ mạng) và Identity Containment (Kiểm soát và vô hiệu hóa quyền truy cập của danh tính đã bị xâm phạm).",
            "Security Group kiểm soát lưu lượng mạng nhưng không có chức năng thu hồi IAM Sessions. Hơn nữa, việc thay đổi Security Group không nhất thiết chấm dứt ngay những kết nối đang được theo dõi trước đó (stateful connection tracking).",
            "Private Subnet hạn chế khả năng truy cập trực tiếp từ Internet, nhưng không đảm bảo rằng danh tính của workload không thể bị lợi dụng từ bên ngoài.",
            "Ngay cả IMDSv2, mặc dù giúp giảm thiểu một số hình thức khai thác SSRF, cũng không bảo vệ tuyệt đối credentials khi kẻ tấn công đã có khả năng thực thi mã trên instance.",
            "Mỗi cơ chế bảo mật giải quyết một vấn đề khác nhau. Vì vậy, việc triển khai nhiều công cụ bảo mật chưa chắc đã tạo ra một kiến trúc an toàn nếu chúng ta không hiểu rõ giới hạn của từng công cụ."
          ],
          comparison: [
            { layer: "Network Containment", scope: "Tầng mạng (Network Layer)", mechanism: "Quarantine Security Group, NACL, Private Subnet", capability: "Chặn ingress/egress lưu lượng mạng vào/ra EC2", limitation: "Không vô hiệu hóa IAM token; không cắt đứt kết nối stateful đang theo dõi." },
            { layer: "Identity Containment", scope: "Tầng định danh (Identity Layer)", mechanism: "Revoke Active Sessions, Policy Deny, Gỡ Instance Profile", capability: "Hủy bỏ hiệu lực của token bảo mật tạm thời (STS temporary credentials)", limitation: "Nếu không gỡ Instance Profile, instance vẫn có thể xin token mới từ IMDS." }
          ]
        },
        {
          id: "sec-3",
          num: "3",
          title: "3. Nếu credentials bị đánh cắp, liệu có thể khiến chúng trở nên vô dụng khi được sử dụng sai ngữ cảnh?",
          paragraphs: [
            "AWS cung cấp các Global Condition Keys cho phép kiểm soát ngữ cảnh sử dụng credentials:",
            "Trong kiến trúc minh họa, EC2 nằm trong Private Subnet và truy cập Amazon S3, DynamoDB thông qua hai Gateway Endpoint tương ứng.",
            "Bằng cách xây dựng IAM Policy đối chiếu ngữ cảnh cấp credentials với ngữ cảnh thực tế của request, chúng ta có thể từ chối những yêu cầu xuất phát từ môi trường không được phép, ngay cả khi thông tin xác thực vẫn còn hiệu lực."
          ],
          conditionKeys: [
            { key: "aws:EC2InstanceSourceVPC", desc: "Ràng buộc yêu cầu phải xuất phát từ đúng VPC nơi EC2 instance được cấp credentials." },
            { key: "aws:EC2InstanceSourcePrivateIPv4", desc: "Ràng buộc yêu cầu phải xuất phát từ đúng địa chỉ IP riêng của instance trong VPC." },
            { key: "aws:SourceVpc", desc: "Kiểm tra request có đi qua VPC Endpoint cụ thể hay không khi truy cập tài nguyên AWS." },
            { key: "aws:VpcSourceIp", desc: "Xác thực địa chỉ IP nguồn bên trong không gian mạng VPC nội bộ." }
          ],
          policySnippet: `{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "EnforceVpcSourceContext",\n      "Effect": "Deny",\n      "Action": ["s3:*", "dynamodb:*"],\n      "Resource": "*",\n      "Condition": {\n        "StringNotEquals": {\n          "aws:EC2InstanceSourceVPC": "vpc-0123456789abcdef0"\n        }\n      }\n    }\n  ]\n}`,
          warningParagraphs: [
            "Tuy nhiên, cần lưu ý rằng không phải mọi AWS API đều sử dụng VPC Endpoint. Chính sách quá nghiêm ngặt có thể ảnh hưởng đến workload hợp lệ.",
            "Phương pháp này cũng không ngăn được mọi hành vi độc hại diễn ra ngay trên EC2 đã bị xâm nhập.",
            "Đó là lý do cần kết hợp nhiều lớp phòng thủ — Defense in Depth."
          ]
        },
        {
          id: "sec-4",
          num: "4",
          title: "4. Khi giải pháp bảo mật có thể trở thành nguyên nhân gây gián đoạn hệ thống",
          paragraphs: [
            "AWS IAM cung cấp cơ chế Revoke Active Sessions, sử dụng chính sách AWSRevokeOlderSessions và điều kiện aws:TokenIssueTime để từ chối quyền của các phiên xác thực được cấp trước một thời điểm xác định.",
            "Nhưng hãy tưởng tượng có 10 EC2 instance cùng sử dụng một IAM Role, trong đó chỉ một instance bị xâm nhập.",
            "Việc thu hồi toàn bộ session cũ của IAM Role có thể ảnh hưởng đến cả những instance đang hoạt động bình thường, gây gián đoạn dịch vụ diện rộng.",
            "Bên cạnh đó, Revoke Active Sessions không tự động ngăn EC2 nhận credentials mới. Vì vậy, cần kết hợp việc gỡ hoặc thay thế Instance Profile bằng một cấu hình hạn chế quyền phù hợp.",
            "Lúc này, chúng ta phải đối mặt với sự đánh đổi giữa Security và Availability.",
            "Điều đó cho thấy thiết kế IAM không chỉ là câu chuyện cấp quyền tối thiểu (Least Privilege), mà còn là bài toán giới hạn phạm vi ảnh hưởng (Blast Radius) khi sự cố xảy ra."
          ]
        },
        {
          id: "sec-5",
          num: "5",
          title: "5. Hướng tiếp cận kiến trúc trên AWS",
          introText: "Dựa trên sơ đồ Architecture đính kèm, chúng ta có thể xây dựng một quy trình Automated Incident Response như sau:",
          components: [
            { name: "AWS CloudTrail", role: "Hỗ trợ ghi nhận và điều tra các hoạt động AWS API. Đối với những thao tác ở cấp dữ liệu trên S3 và DynamoDB, cần cấu hình Data Events phù hợp." },
            { name: "Amazon GuardDuty", role: "Phân tích các nguồn dữ liệu bảo mật để phát hiện dấu hiệu sử dụng credentials bất thường (ví dụ: finding InstanceCredentialExfiltration.OutsideAWS)." },
            { name: "Amazon EventBridge", role: "Tiếp nhận GuardDuty Findings theo mẫu sự kiện bảo mật và kích hoạt AWS Lambda." },
            { name: "AWS Lambda", role: "Khởi chạy runbook được cấu hình trong AWS Systems Manager Automation để thực thi các bước cô lập." }
          ],
          actionsIntro: "Quy trình ứng phó thực hiện ba nhóm hành động chính:",
          actions: [
            { title: "Network Containment", desc: "Áp dụng Quarantine Security Group và kiểm tra các kết nối mạng hiện có." },
            { title: "Credential Issuance Containment", desc: "Gỡ hoặc thay thế Instance Profile để hạn chế việc tiếp tục nhận credentials có quyền truy cập." },
            { title: "Identity Containment", desc: "Thu hồi quyền của các IAM Role Sessions đã được cấp và kiểm tra hiệu quả sau khi chính sách có hiệu lực." }
          ],
          conclusionText: "Đối với môi trường production, những hành động có khả năng gây gián đoạn hệ thống nên được kiểm soát bằng cơ chế phê duyệt phù hợp. Mục tiêu không phải là triển khai càng nhiều dịch vụ càng tốt, mà là đảm bảo mỗi lớp bảo mật có thể giới hạn thiệt hại khi một lớp khác thất bại."
        }
      ],
      keyTakeaway: {
        title: "Đúc kết chính",
        p1: "Một quy trình Incident Response trên AWS cần kiểm soát đồng thời cả Network Containment và Identity Containment. Việc cô lập EC2 chỉ giải quyết một phần sự cố nếu quyền truy cập của danh tính đã bị xâm phạm vẫn chưa được vô hiệu hóa.",
        p2: "Bởi trong môi trường Cloud, một cuộc tấn công có thể bắt đầu từ máy chủ nhưng tiếp tục dưới hình thức lạm dụng danh tính."
      },
      hashtags: "#AWS #AWSStudyGroup #CloudSecurity #CyberSecurity #IAM #AmazonEC2 #GuardDuty #IncidentResponse #DefenseInDepth #CloudArchitecture",
      referencesTitle: "Tài liệu tham khảo",
      references: [
        {
          title: "AWS Security Incident Response Guide – Containment and Remediation Strategies",
          url: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html"
        },
        {
          title: "AWS IAM Documentation – Revoking IAM Role Temporary Security Credentials",
          url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html"
        },
        {
          title: "Amazon GuardDuty Finding Types – InstanceCredentialExfiltration.OutsideAWS",
          url: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html"
        },
        {
          title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Về đầu trang ↑"
    },
    en: {
      category: "AWS STUDY GROUP / CLOUD SECURITY",
      date: "15/11/2026",
      title: "EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED",
      subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
      leadSummary: "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth architectural analysis of Network Containment versus Identity Containment: why Security Groups cannot terminate active IAM sessions, the limitations of IMDSv2 against remote code execution, and designing an automated incident response workflow combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys.",
      coverImage: "assets/images/aws-ec2-identity-containment-architecture.png",
      coverCaption: "Figure 1: Automated Incident Response architecture on AWS – Combining Network Containment, Credential Issuance Containment, and Identity Containment.",
      sections: [
        {
          id: "sec-1",
          num: "1",
          title: "1. When What Is Stolen Is Not Just Data, But Identity",
          paragraphs: [
            "Consider an enterprise deploying its backend workload on Amazon EC2, using Amazon S3 for durable object storage and Amazon DynamoDB for transactional state.",
            "Rather than embedding long-lived Access Keys into source code, EC2 is attached to an IAM Role via an Instance Profile, consuming Temporary Security Credentials issued dynamically by the Instance Metadata Service (IMDS).",
            "While this aligns with AWS security best practices, examine this realistic incident timeline:"
          ],
          timeline: [
            { time: "09:00", event: "EC2 Host Compromise", desc: "Attacker exploits an application vulnerability to achieve arbitrary remote code execution (RCE) on the host." },
            { time: "09:05", event: "Credentials Exfiltration", desc: "Attacker queries IMDS and extracts temporary security tokens (AccessKey, SecretKey, SessionToken)." },
            { time: "09:10", event: "Security Team Detects Anomaly", desc: "Security operations center (SOC) detects suspicious host behavior or unexpected API calls." },
            { time: "09:15", event: "Quarantine Security Group Applied", desc: "EC2 is isolated at the network layer by stripping standard inbound and outbound traffic rules." },
            { time: "09:20", event: "Attacker Accesses S3 from Outside", desc: "From an external Internet environment, the attacker successfully dispatches requests to Amazon S3 using the stolen credentials." }
          ],
          whyTitle: "Why does this happen?",
          whyParagraph: "Because Temporary Credentials are not inherently bound to the network origin of the EC2 instance that received them. As long as the credentials have not expired and access has not been denied by security policies, an attacker can exploit the workload identity directly against AWS APIs without needing any ongoing network connection to the original EC2 instance."
        },
        {
          id: "sec-2",
          num: "2",
          title: "2. Network Containment ≠ Identity Containment",
          paragraphs: [
            "A critical pitfall in cloud incident response is failing to distinguish between two distinct control planes: Network Containment (isolating resources at the network perimeter) and Identity Containment (governing and revoking the operational permissions of compromised identities).",
            "Security Groups filter network ingress and egress traffic, but possess zero awareness or authority over IAM sessions. Furthermore, modifying a Security Group does not automatically terminate existing tracked stateful TCP connections.",
            "Private Subnets prevent direct inbound connections from the public Internet, but do not protect against an attacker utilizing exfiltrated credentials from an external machine.",
            "Even IMDSv2, while highly effective against Server-Side Request Forgery (SSRF) exploits, offers no protection once an attacker has established arbitrary code execution on the instance.",
            "Each security mechanism addresses a different failure domain. Stacking security tools without understanding their architectural boundaries does not produce a secure architecture."
          ],
          comparison: [
            { layer: "Network Containment", scope: "Network Layer", mechanism: "Quarantine Security Group, NACLs, Private Subnets", capability: "Blocks network ingress/egress to and from the EC2 instance", limitation: "Cannot invalidate active IAM credentials; does not drop tracked stateful connections immediately." },
            { layer: "Identity Containment", scope: "Identity Layer (IAM)", mechanism: "Revoke Active Sessions, Policy Denials, Detach Instance Profile", capability: "Revokes operational validity of temporary STS credentials", limitation: "Without detaching the Instance Profile, the instance can immediately request new credentials from IMDS." }
          ]
        },
        {
          id: "sec-3",
          num: "3",
          title: "3. If Credentials Are Stolen, Can We Render Them Useless Out of Context?",
          paragraphs: [
            "AWS provides Global Condition Keys that enable organizations to restrict credential usage based on operational context, verifying that request attributes match the issuance environment:",
            "In the illustrated architecture, EC2 resides within a Private Subnet and connects to Amazon S3 and DynamoDB via dedicated Gateway Endpoints.",
            "By authoring IAM Policies that compare credential issuance context with runtime request context, we can deny unauthorized requests originating outside the legitimate network boundary, even when the security token is valid."
          ],
          conditionKeys: [
            { key: "aws:EC2InstanceSourceVPC", desc: "Enforces that requests must originate from the exact VPC where the EC2 instance was granted credentials." },
            { key: "aws:EC2InstanceSourcePrivateIPv4", desc: "Verifies the private IPv4 address assigned to the instance when the credentials were issued." },
            { key: "aws:SourceVpc", desc: "Checks whether the request passed through a specific VPC Endpoint when accessing AWS service APIs." },
            { key: "aws:VpcSourceIp", desc: "Validates the source IP address within the private VPC network space." }
          ],
          policySnippet: `{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "EnforceVpcSourceContext",\n      "Effect": "Deny",\n      "Action": ["s3:*", "dynamodb:*"],\n      "Resource": "*",\n      "Condition": {\n        "StringNotEquals": {\n          "aws:EC2InstanceSourceVPC": "vpc-0123456789abcdef0"\n        }\n      }\n    }\n  ]\n}`,
          warningParagraphs: [
            "However, architects must keep in mind that not all AWS APIs utilize VPC Endpoints. Overly restrictive policies can break legitimate operational workloads.",
            "This mechanism also does not prevent malicious actions carried out directly on the compromised EC2 instance itself.",
            "This is why a robust cloud security strategy demands layered Defense in Depth."
          ]
        },
        {
          id: "sec-4",
          num: "4",
          title: "4. When Security Remediation Causes Operational Outages",
          paragraphs: [
            "AWS IAM provides an Active Session Revocation mechanism using the managed AWSRevokeOlderSessions policy and the aws:TokenIssueTime condition to deny requests from credentials issued prior to a specific cutoff timestamp.",
            "However, imagine a production fleet where 10 EC2 instances share a single IAM Role, but only one instance has been compromised.",
            "Executing a blanket session revocation on that IAM Role immediately disrupts all 9 healthy instances, inducing a widespread cascading outage.",
            "Furthermore, Revoke Active Sessions does not stop the compromised EC2 from immediately querying IMDS for fresh credentials. Therefore, security teams must detach or swap the Instance Profile with a restricted quarantine profile.",
            "At this point, engineering teams confront the delicate trade-off between Security and Availability.",
            "This demonstrates that IAM architecture is not just about granting Least Privilege, but equally about strictly limiting the Blast Radius when an incident occurs."
          ]
        },
        {
          id: "sec-5",
          num: "5",
          title: "5. Architectural Approach on AWS",
          introText: "Synthesizing the architecture diagram, we can construct an Automated Incident Response workflow as follows:",
          components: [
            { name: "AWS CloudTrail", role: "Captures and records AWS API activity. Data Events must be enabled on S3 and DynamoDB for granular data-tier visibility." },
            { name: "Amazon GuardDuty", role: "Continuously monitors security data sources to detect anomalous credential usage (e.g. InstanceCredentialExfiltration.OutsideAWS finding)." },
            { name: "Amazon EventBridge", role: "Matches GuardDuty finding event patterns and triggers automated incident response handlers." },
            { name: "AWS Lambda", role: "Executes an AWS Systems Manager Automation runbook to carry out multi-tiered containment actions." }
          ],
          actionsIntro: "The containment workflow executes across three synchronized action tiers:",
          actions: [
            { title: "Network Containment", desc: "Attaches a Quarantine Security Group and inspects existing stateful connections." },
            { title: "Credential Issuance Containment", desc: "Detaches or swaps the Instance Profile to prevent the instance from receiving fresh privileged credentials." },
            { title: "Identity Containment", desc: "Revokes active IAM Role sessions and verifies policy propagation across AWS endpoints." }
          ],
          conclusionText: "In production environments, actions that carry high operational disruption risks should be governed by appropriate approval workflows. The ultimate goal is not simply deploying more tools, but ensuring that each defensive layer successfully contains damage when another layer fails."
        }
      ],
      keyTakeaway: {
        title: "Key Takeaway",
        p1: "An AWS Incident Response workflow must govern both Network Containment and Identity Containment simultaneously. Isolating EC2 only solves part of the problem if the operational permissions of the compromised identity have not been revoked.",
        p2: "Because in cloud environments, an attack may begin on a host but propagates through identity abuse."
      },
      hashtags: "#AWS #AWSStudyGroup #CloudSecurity #CyberSecurity #IAM #AmazonEC2 #GuardDuty #IncidentResponse #DefenseInDepth #CloudArchitecture",
      referencesTitle: "Official Documentation & References",
      references: [
        {
          title: "AWS Security Incident Response Guide – Containment and Remediation Strategies",
          url: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html"
        },
        {
          title: "AWS IAM Documentation – Revoking IAM Role Temporary Security Credentials",
          url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html"
        },
        {
          title: "Amazon GuardDuty Finding Types – InstanceCredentialExfiltration.OutsideAWS",
          url: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html"
        },
        {
          title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  }
};

function renderBlogDetail(slug = 's3-express-one-zone') {
  const container = document.getElementById('blog-detail-s3-express-container');
  if (!container) return;

  const lang = app.currentLang || 'vi';
  const targetSlug = slug || 's3-express-one-zone';
  const article = (BLOG_ARTICLES[targetSlug] && BLOG_ARTICLES[targetSlug][lang])
    ? BLOG_ARTICLES[targetSlug][lang]
    : (BLOG_ARTICLES['s3-express-one-zone'] ? BLOG_ARTICLES['s3-express-one-zone'].vi : null);

  if (!article) {
    container.innerHTML = `
      <article class="minimal-article-container" style="text-align:center; padding:60px 20px;">
        <h3 style="font-size:20px; font-weight:700; color:#171717; margin-bottom:16px;">
          ${lang === 'vi' ? 'Bài viết chưa khả dụng' : 'Article Not Found'}
        </h3>
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          ${lang === 'vi' ? '← Quay lại danh sách bài viết' : '← Back to Articles'}
        </button>
      </article>
    `;
    return;
  }

  if (targetSlug === 'aws-event-driven-architecture') {
    renderEventDrivenBlogDetail(container, article, lang);
    return;
  }

  if (targetSlug === 'aws-ec2-identity-containment') {
    renderIdentityContainmentBlogDetail(container, article, lang);
    return;
  }

  const a = article;

  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>

        <!-- Community Post Link under Title -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/')}"
             target="_blank"
             rel="noopener noreferrer"
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}"
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')"
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1: Amazon S3 Express One Zone là gì? -->
      <section class="minimal-section" id="s3-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        ${a.sections[0].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <div class="minimal-callout">
          <div style="font-weight:700; color:#171717; margin-bottom:8px;">${escapeHtml(a.sections[0].callout.title)}</div>
          <ul class="minimal-list" style="margin:0; padding-left:18px;">
            ${a.sections[0].callout.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2: Ưu điểm và hạn chế -->
      <section class="minimal-section" id="s3-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].introText)}</p>

        <!-- Comparison Table: S3 Standard vs S3 Express One Zone -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:26%;">${lang === 'vi' ? 'Tiêu chí kỹ thuật' : 'Architectural Criteria'}</th>
                <th style="width:37%;">Amazon S3 Standard</th>
                <th style="width:37%;">Amazon S3 Express One Zone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${lang === 'vi' ? 'Vị trí lưu trữ dữ liệu' : 'Data Locality'}</strong></td>
                <td>${lang === 'vi' ? 'Tối thiểu 3 Availability Zones (Multi-AZ)' : 'Multi-AZ (Minimum 3 AZs across region)'}</td>
                <td>${lang === 'vi' ? '1 Availability Zone duy nhất (Single-AZ)' : 'Single-AZ (Co-located with compute)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Độ trễ truy xuất' : 'Access Latency'}</strong></td>
                <td>${lang === 'vi' ? 'Hàng chục mili-giây (Tens of ms)' : 'Tens of milliseconds'}</td>
                <td>${lang === 'vi' ? 'Một chữ số mili-giây (1ms – 3ms)' : 'Single-digit milliseconds (1ms – 3ms)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tốc độ truy xuất tương đối' : 'Relative Throughput'}</strong></td>
                <td>${lang === 'vi' ? 'Chuẩn cơ sở (Baseline 1x)' : 'Baseline reference (1x)'}</td>
                <td>${lang === 'vi' ? 'Nhanh hơn tới 10 lần (Up to 10x)' : 'Up to 10x faster'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Kiến trúc Bucket' : 'Bucket Model'}</strong></td>
                <td>General Purpose Bucket</td>
                <td>Directory Bucket</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Cơ chế xác thực' : 'Authentication Model'}</strong></td>
                <td>${lang === 'vi' ? 'Ký từng request (IAM / Signature V4)' : 'Per-request signature (IAM / SigV4)'}</td>
                <td>Fast Session-Based Authentication</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Chi phí lưu trữ & API' : 'Pricing Structure'}</strong></td>
                <td>${lang === 'vi' ? 'Thấp hơn trên mỗi GB/tháng' : 'Lower baseline capacity cost per GB/mo'}</td>
                <td>${lang === 'vi' ? 'Cao hơn cho dung lượng và thao tác API' : 'Higher GB/mo and API request fees'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tính năng nâng cao' : 'Advanced Feature Support'}</strong></td>
                <td>${lang === 'vi' ? 'Hỗ trợ đầy đủ: Versioning, CRR, Lifecycle' : 'Full support: Versioning, CRR, Lifecycle'}</td>
                <td>${lang === 'vi' ? 'Chưa hỗ trợ Versioning, CRR, Lifecycle' : 'Versioning, CRR, Lifecycle not supported'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 10px 0;">
            ${lang === 'vi' ? 'Ưu điểm' : 'Core Advantages'}
          </h3>
          <ul class="minimal-list">
            ${a.sections[1].advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 10px 0;">
            ${lang === 'vi' ? 'Hạn chế & Ranh giới kỹ thuật' : 'Limitations & Caveats'}
          </h3>
          <ul class="minimal-list">
            ${a.sections[1].limitations.map(lim => `<li>${lim}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 3: Phân tích hiệu năng qua ví dụ (Định luật Amdahl) -->
      <section class="minimal-section" id="s3-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].introText)}</p>

        <!-- Benchmark Calculation Breakdown -->
        <div style="background:#FAFAFA; border:1px solid #E5E5E5; border-radius:4px; padding:18px 20px; margin:20px 0;">
          <div style="font-size:15px; font-weight:700; color:#171717; margin-bottom:8px;">
            ${lang === 'vi' ? '1. Hệ thống cơ sở (Sử dụng Amazon S3 Standard):' : '1. Baseline System (Using Amazon S3 Standard):'}
          </div>
          <ul class="minimal-list" style="margin:0 0 14px 0; padding-left:20px;">
            <li>${a.sections[2].baselineIo}</li>
            <li>${a.sections[2].baselineCompute}</li>
            <li><strong>${lang === 'vi' ? 'Tổng thời gian' : 'Total Baseline Time'}: 20 + 80 = 100 ${t('minutesUnit')}</strong></li>
          </ul>

          <div style="font-size:15px; font-weight:700; color:#171717; margin-bottom:8px;">
            ${lang === 'vi' ? '2. Nâng cấp sang Amazon S3 Express One Zone (I/O nhanh gấp 10 lần):' : '2. Upgraded to Amazon S3 Express One Zone (10x Faster I/O):'}
          </div>
          <ul class="minimal-list" style="margin:0; padding-left:20px;">
            <li>${lang === 'vi' ? 'Thời gian đọc dữ liệu mới' : 'New Storage Read Time'}: <code>${escapeHtml(a.sections[2].expressIo)}</code></li>
            <li>${lang === 'vi' ? 'Thời gian tính toán CPU/GPU' : 'Compute Processing Time'}: <code>${escapeHtml(a.sections[2].expressCompute)}</code></li>
            <li><strong>${lang === 'vi' ? 'Tổng thời gian mới' : 'New Total Runtime'}: <code>${escapeHtml(a.sections[2].expressTotal)}</code></strong></li>
          </ul>
        </div>

        <!-- Performance Summary Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th>${lang === 'vi' ? 'Giai đoạn thực thi' : 'Execution Stage'}</th>
                <th>S3 Standard (Baseline)</th>
                <th>S3 Express One Zone</th>
                <th>${lang === 'vi' ? 'Mức cải thiện' : 'Improvement'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${lang === 'vi' ? 'Đọc nạp dữ liệu (I/O Read)' : 'Data Read Time (I/O)'}</strong></td>
                <td>20 ${t('minutesUnit')} (20%)</td>
                <td>2 ${t('minutesUnit')} (2.4%)</td>
                <td>${lang === 'vi' ? 'Nhanh hơn 10 lần (-90%)' : '10x Faster (-90%)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Xử lý tính toán (Compute / GPU)' : 'Compute & Processing'}</strong></td>
                <td>80 ${t('minutesUnit')} (80%)</td>
                <td>80 ${t('minutesUnit')} (97.6%)</td>
                <td>${lang === 'vi' ? '0% (Không đổi)' : '0% (Unchanged)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tổng thời gian hoàn thành' : 'Total End-to-End Time'}</strong></td>
                <td><strong>100 ${t('minutesUnit')}</strong></td>
                <td><strong>82 ${t('minutesUnit')}</strong></td>
                <td><strong>${lang === 'vi' ? 'Rút ngắn 18% (Speedup 1.22x)' : '18% faster (Speedup 1.22x)'}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[2].speedupSummary)}</p>

        <!-- Amdahl's Law Formula Block -->
        <div class="minimal-formula-box">
          <strong>${lang === 'vi' ? 'Công thức Định luật Amdahl (Amdahl\'s Law Speedup Formula):' : 'Amdahl\'s Law Speedup Formula:'}</strong><br><br>
          Speedup(overall) = 1 / [ (1 - Fraction_enhanced) + (Fraction_enhanced / Speedup_component) ]<br>
          Speedup = 1 / [ (1 - 0.20) + (0.20 / 10) ]<br>
          Speedup = 1 / [ 0.80 + 0.02 ]<br>
          Speedup = 1 / 0.82 ≈ <strong>1.22x (${lang === 'vi' ? 'Tương đương rút ngắn ~18% tổng thời gian toàn hệ thống' : 'Equivalent to ~18% end-to-end runtime reduction'})</strong>
        </div>

        <div class="minimal-callout">
          <strong>${lang === 'vi' ? 'Đúc kết kỹ thuật quan trọng:' : 'Crucial Technical Insight:'}</strong>
          <p style="margin:6px 0 0 0;">${escapeHtml(a.sections[2].amdahlQuote)}</p>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 4: Góc nhìn và Đề xuất ứng dụng (Kiến trúc lưu trữ 2 lớp) -->
      <section class="minimal-section" id="s3-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        <p class="minimal-p">${a.sections[3].introText}</p>

        <!-- Two-Tier Storage Architecture Diagram -->
        <div class="minimal-tier-diagram">
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[0].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[0].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[0].desc)}</div>
          </div>
          <div class="minimal-tier-arrow">→</div>
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[1].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[1].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[1].desc)}</div>
          </div>
          <div class="minimal-tier-arrow">↔</div>
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[2].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[2].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[2].desc)}</div>
          </div>
        </div>

        <p class="minimal-p">${a.sections[3].caseStudy}</p>

        <!-- ROI Formula Box -->
        <div class="minimal-formula-box">
          <strong>${escapeHtml(a.sections[3].roiQuestion)}</strong><br><br>
          <code>${escapeHtml(a.sections[3].roiMath)}</code>
        </div>
        <p class="minimal-p">${escapeHtml(a.sections[3].roiExplanation)}</p>
      </section>

      <hr class="minimal-divider">

      <!-- Section 5: Kết luận & Đúc kết kiến trúc -->
      <section class="minimal-section" id="s3-sec-5">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[4].title)}</h2>
        ${a.sections[4].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <div class="minimal-callout">
          “${escapeHtml(a.sections[4].goldenQuote)}”
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
            ${escapeHtml(a.sections[4].checklistTitle)}
          </h3>
          <ul class="minimal-list">
            ${a.sections[4].checklistItems.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Official AWS References -->
      <section class="minimal-section">
        <h2 class="minimal-section-title">${escapeHtml(a.referencesTitle)}</h2>
        <ol class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener" class="minimal-ref-link">
                ${escapeHtml(ref.title)}
              </a>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Bottom Navigation Footer -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

function renderEventDrivenBlogDetail(container, a, lang) {
  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>

        <!-- Community Post Link under Title -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/')}"
             target="_blank"
             rel="noopener noreferrer"
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}"
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')"
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1: VẤN ĐỀ Ở ĐÂY LÀ GÌ? -->
      <section class="minimal-section" id="eda-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[0])}</p>
        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[1])}</p>

        <ul class="minimal-list">
          ${a.sections[0].scenarioItems.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[2])}</p>

        <!-- Race Condition Timeline Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                ${a.sections[0].table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${a.sections[0].table.rows.map(r => `
                <tr>
                  ${r.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="minimal-callout">
          ${escapeHtml(a.sections[0].keyInsight)}
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2: VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ? -->
      <section class="minimal-section" id="eda-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].paragraphs[0])}</p>

        <ul class="minimal-list">
          ${a.sections[1].points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </section>

      <hr class="minimal-divider">

      <!-- Section 3: ĐỀ XUẤT -->
      <section class="minimal-section" id="eda-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].introText)}</p>

        <ul class="minimal-list">
          ${a.sections[2].solutions.map(sol => `<li>${sol}</li>`).join('')}
        </ul>

        <!-- Solution Component Role Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                ${a.sections[2].table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${a.sections[2].table.rows.map(r => `
                <tr>
                  ${r.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- DynamoDB Conditional Write Code Box -->
        <div class="minimal-formula-box">
          <strong>${escapeHtml(a.sections[2].conditionTitle)}</strong><br><br>
          <pre style="margin:0; font-family:inherit; font-size:inherit; white-space:pre-wrap;">${escapeHtml(a.sections[2].conditionCode)}</pre>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[2].postText)}</p>

        <div class="minimal-callout">
          ${escapeHtml(a.sections[2].partialFailureNote)}
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 4: KẾT LUẬN -->
      <section class="minimal-section" id="eda-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        ${a.sections[3].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <div class="minimal-callout">
          “${escapeHtml(a.sections[3].goldenQuote)}”
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
            ${escapeHtml(a.sections[3].checklistTitle)}
          </h3>
          <ul class="minimal-list">
            ${a.sections[3].checklistItems.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Official AWS References -->
      <section class="minimal-section">
        <h2 class="minimal-section-title">${escapeHtml(a.referencesTitle)}</h2>
        <ol class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener" class="minimal-ref-link">
                ${escapeHtml(ref.title)}
              </a>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Bottom Navigation Footer -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

function renderIdentityContainmentBlogDetail(container, a, lang) {
  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>
        <div style="font-size:16px; font-weight:600; color:#555555; margin:-4px 0 10px 0; font-style:italic;">
          ${escapeHtml(a.subtitle)}
        </div>

        <!-- Community Post Link under Title & Subtitle -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/')}"
             target="_blank"
             rel="noopener noreferrer"
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}"
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')"
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1 -->
      <section class="minimal-section" id="ic-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        ${a.sections[0].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <!-- Incident Timeline Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:16%;">${lang === 'vi' ? 'Thời điểm' : 'Time'}</th>
                <th style="width:32%;">${lang === 'vi' ? 'Sự kiện / Hành động' : 'Event / Action'}</th>
                <th style="width:52%;">${lang === 'vi' ? 'Ý nghĩa kỹ thuật & Trạng thái' : 'Technical Implication & State'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[0].timeline.map(row => `
                <tr>
                  <td><strong>${escapeHtml(row.time)}</strong></td>
                  <td>${escapeHtml(row.event)}</td>
                  <td>${escapeHtml(row.desc)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="minimal-callout">
          <div style="font-weight:700; color:#171717; margin-bottom:6px;">
            ${escapeHtml(a.sections[0].whyTitle)}
          </div>
          <p style="margin:0; font-size:15px; line-height:1.7;">
            ${escapeHtml(a.sections[0].whyParagraph)}
          </p>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2 -->
      <section class="minimal-section" id="ic-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].paragraphs[0])}</p>

        <!-- Comparison Table: Network vs Identity Containment -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:24%;">${lang === 'vi' ? 'Lớp kiểm soát' : 'Control Layer'}</th>
                <th style="width:22%;">${lang === 'vi' ? 'Cơ chế triển khai' : 'Mechanism'}</th>
                <th style="width:27%;">${lang === 'vi' ? 'Khả năng bảo vệ' : 'Capability'}</th>
                <th style="width:27%;">${lang === 'vi' ? 'Giới hạn cốt lõi' : 'Core Limitation'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[1].comparison.map(c => `
                <tr>
                  <td><strong>${escapeHtml(c.layer)}</strong><br><small style="color:#666;">${escapeHtml(c.scope)}</small></td>
                  <td>${escapeHtml(c.mechanism)}</td>
                  <td>${escapeHtml(c.capability)}</td>
                  <td>${escapeHtml(c.limitation)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${a.sections[1].paragraphs.slice(1).map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 3 -->
      <section class="minimal-section" id="ic-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[0])}</p>

        <ul class="minimal-list">
          ${a.sections[2].conditionKeys.map(k => `
            <li><code>${escapeHtml(k.key)}</code>: ${escapeHtml(k.desc)}</li>
          `).join('')}
        </ul>

        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[1])}</p>
        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[2])}</p>

        <!-- Monospace IAM Condition Code Block -->
        <div class="minimal-formula-box">
          <div style="font-size:12px; color:#666; margin-bottom:8px; font-family:sans-serif; font-weight:600;">
            ${lang === 'vi' ? 'Ví dụ: IAM Policy Deny truy cập ngoài VPC nguồn (Context-Aware Enforcement)' : 'Example: IAM Policy Deny access outside source VPC (Context-Aware Enforcement)'}
          </div>
          <pre style="margin:0; font-family:inherit; white-space:pre-wrap;">${escapeHtml(a.sections[2].policySnippet)}</pre>
        </div>

        ${a.sections[2].warningParagraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 4 -->
      <section class="minimal-section" id="ic-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        ${a.sections[3].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 5 -->
      <section class="minimal-section" id="ic-sec-5">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[4].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[4].introText)}</p>

        <!-- Components Breakdown Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:28%;">${lang === 'vi' ? 'Dịch vụ AWS' : 'AWS Service'}</th>
                <th style="width:72%;">${lang === 'vi' ? 'Vai trò trong quy trình Incident Response' : 'Role in Incident Response'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[4].components.map(comp => `
                <tr>
                  <td><strong>${escapeHtml(comp.name)}</strong></td>
                  <td>${escapeHtml(comp.role)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <p class="minimal-p"><strong>${escapeHtml(a.sections[4].actionsIntro)}</strong></p>

        <div class="minimal-callout">
          <ul class="minimal-list" style="margin:0; padding-left:18px;">
            ${a.sections[4].actions.map(act => `
              <li><strong>${escapeHtml(act.title)}:</strong> ${escapeHtml(act.desc)}</li>
            `).join('')}
          </ul>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[4].conclusionText)}</p>
      </section>

      <!-- Key Takeaway Callout -->
      <div class="minimal-callout" style="border-left: 3px solid #171717; background:#F8FAFC; margin:32px 0;">
        <div style="font-size:16px; font-weight:700; color:#171717; margin-bottom:8px;">
          ${escapeHtml(a.keyTakeaway.title)}
        </div>
        <p style="margin:0 0 10px 0; font-size:15px; line-height:1.7;">
          ${escapeHtml(a.keyTakeaway.p1)}
        </p>
        <p style="margin:0; font-size:15.5px; font-weight:700; color:#171717; line-height:1.7;">
          ${escapeHtml(a.keyTakeaway.p2)}
        </p>
      </div>

      <!-- Hashtags -->
      <div style="margin:24px 0; font-size:13.5px; color:#555555; line-height:1.8; word-spacing:4px;">
        ${escapeHtml(a.hashtags)}
      </div>

      <hr class="minimal-divider">

      <!-- References Section -->
      <section class="minimal-section" id="ic-sec-refs">
        <h2 class="minimal-section-title" style="font-size:18px;">
          ${a.referencesTitle || (lang === 'vi' ? 'Tài liệu tham khảo' : 'Official Documentation & References')}
        </h2>
        <ol class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
                ${escapeHtml(ref.title || ref.linkText || ref.url)}
              </a>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Minimal Footer Navigation -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

// ==========================================
// 10. 4. EVENTS PARTICIPATED MODULE
// ==========================================
const EVENT_REPORTS = {
  'first-cloud-ai-journey-24-10-2026': {
    vi: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "BÁO CÁO THU HOẠCH SỰ KIỆN",
      sessionTag: "Session 1 • Voice AI & Contact Center trên AWS",
      title: "BÁO CÁO THU HOẠCH – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Thông tin sự kiện chính thức",
      lblEventName: "Tên sự kiện",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Ngày & Giờ tham gia",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Địa điểm",
      location: "Chưa xác nhận",
      lblRole: "Vai trò tham gia",
      role: "Người tham dự (Attendee)",
      lblSpeaker: "Diễn giả Session 1",
      speaker: "Kiệt Trần – AI Engineer tại Re AI (AWS Partner)",
      lblTopic: "Chủ đề Session 1",
      topic: "Tích hợp Voice AI vào Contact Center doanh nghiệp trên nền tảng AWS",
      metaNotice: "* Lưu ý: Thời gian 08:30 – 12:00 là khung giờ tham dự sự kiện tổng thể, không phản ánh riêng thời lượng Session 1. Địa điểm ghi nhận chính thức theo ban tổ chức (không suy đoán địa chỉ).",
      complianceTitle: "Khung 7 Tiêu chí Báo cáo Sự kiện của Doanh nghiệp",
      crit1: "Tên sự kiện: First Cloud AI Journey 24/10",
      crit2: "Thời gian: 08:30 – 12:00, 24/10/2026",
      crit3: "Địa điểm: Chưa xác nhận",
      crit4: "Vai trò: Người tham dự (Attendee)",
      crit5: "Nội dung tiếp thu: Session 1 Voice AI",
      crit6: "Hình ảnh check-in rõ mặt (Đang chờ cập nhật)",
      crit7: "Bài học rút ra & Đóng góp cá nhân",

      sec1Num: "01",
      sec1Title: "Tổng quan phiên chia sẻ",
      sec1Problem: "Session 1 tập trung giải quyết bài toán cốt lõi:",
      sec1Quote: "“Làm thế nào để tích hợp Voice AI vào hệ thống Contact Center doanh nghiệp, đảm bảo khả năng đàm thoại hai chiều với độ trễ thấp, chi phí vận hành hợp lý và trải nghiệm tự nhiên?”",
      sec1P1: "Theo nội dung diễn giả chia sẻ, con người có thể phản xạ tự nhiên trong khoảng <strong>200ms</strong> ở một số tình huống giao tiếp đời thực. Khi hệ thống Voice AI phản hồi chậm từ <strong>3–5 giây</strong>, trải nghiệm hội thoại có thể bị ảnh hưởng đáng kể: tạo ra những khoảng lặng ngắt quãng, làm gián đoạn nhịp đàm thoại (turn-taking) và gây cảm giác khó chịu cho khách hàng.",
      sec1P2: "Do đó, việc giảm độ trễ phản hồi toàn trình (End-to-End Latency) xuống ngưỡng tự nhiên (< 2 giây) là một trong những mục tiêu kỹ thuật quan trọng hàng đầu khi thiết kế hệ thống Contact Center doanh nghiệp.",

      sec2Num: "02",
      sec2Title: "Kiến trúc Voice AI (Mô hình Cascade)",
      sec2Desc: "Phiên chia sẻ trình bày kiến trúc xử lý tuần tự (Cascade Architecture) bao gồm các thành phần:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Chuyển đổi dòng âm thanh đầu vào của người dùng thành văn bản theo thời gian thực.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Đóng vai trò bộ não suy luận, hiểu ngữ cảnh hội thoại và sinh nội dung phản hồi logic.",
      sec2Guardrails: "<strong>Guardrails:</strong> Lớp kiểm tra, kiểm soát nội dung phản hồi, rà soát ảo giác (hallucination), lọc bỏ thông tin định danh nhạy cảm (PII) và bảo đảm tuân thủ chính sách doanh nghiệp.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Chuyển văn bản phản hồi đã kiểm duyệt thành giọng nói tự nhiên trước khi phát lại cho người nghe.",
      sec2Advantage: "<strong>Ưu điểm nổi bật:</strong> Trong bài toán được chia sẻ, ưu điểm then chốt của kiến trúc này là khả năng kiểm soát nội dung chặt chẽ qua lớp Guardrails trước khi phát âm, đảm bảo tính an toàn thương hiệu và tuân thủ các quy định bảo mật nghiệp vụ.",
      sec2Nuance: "<strong>Đánh giá kiến trúc:</strong> Cần lưu ý rằng Cascade không phải là kiến trúc tối ưu tuyệt đối cho mọi bài toán do sự tích lũy độ trễ qua từng bước nối tiếp (STT + LLM + Guardrails + TTS). Mặc dù các mô hình Speech-to-Speech trực tiếp (End-to-End S2S) có thể giảm độ trễ, Cascade vẫn là lựa chọn thực tiễn hàng đầu trong môi trường doanh nghiệp nhờ tính mô-đun hóa cao, dễ dàng kiểm toán từng khâu và cho phép linh hoạt nâng cấp độc lập từng thành phần.",
      diagramCaption: "Sơ đồ luồng xử lý Voice AI Cascade tích hợp lớp bảo vệ Guardrails trên hạ tầng AWS",

      sec3Num: "03",
      sec3Title: "Hạ tầng AWS & Kỹ thuật Mạng đám mây",
      sec3Desc: "Các công nghệ hạ tầng cốt lõi được đề cập và phân tích trong session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Hỗ trợ truyền âm thanh thời gian thực hai chiều với độ trễ thấp. Giao thức UDP loại bỏ độ trễ do cơ chế retransmission và head-of-line blocking của TCP, duy trì luồng audio ổn định ngay cả trong điều kiện mạng biến động.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Cung cấp hạ tầng tính toán tăng tốc phần cứng (GPU instances) để tối ưu hóa thời gian suy luận (inference latency) của các mô hình STT và TTS cục bộ.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Hỗ trợ kết nối riêng tư, an toàn giữa VPC và các dịch vụ tương thích trong AWS mà không cần định tuyến qua Internet công cộng, giúp giảm số lượng network hops và bảo vệ dữ liệu hội thoại nhạy cảm.",
      sec3Networking: "<strong>Cloud Networking:</strong> Thiết kế VPC, Subnet, Route Table và vị trí Availability Zone ảnh hưởng trực tiếp đến độ trễ truyền gói tin (RTT), tính ổn định và khả năng vận hành liên tục của hệ thống.",
      sec3Insight: "<strong>Nhận định kỹ thuật quan trọng:</strong> <em>Hiệu năng của mô hình LLM đơn thuần không thể quyết định toàn bộ hiệu năng của hệ thống Voice AI.</em> Độ trễ người dùng cảm nhận là tổng hòa của cả chuỗi truyền dẫn: từ việc stream gói tin qua UDP, xử lý Voice Activity Detection (VAD), thời gian nhận dạng STT, độ trễ sinh token đầu tiên của LLM (TTFT), quá trình duyệt qua Guardrails, cho đến việc tổng hợp TTS thành từng audio chunk để phát lại. Tối ưu hạ tầng mạng và pipeline streaming quan trọng không kém việc lựa chọn mô hình LLM.",

      sec4Num: "04",
      sec4Title: "Tối ưu hóa Hiệu năng & Chi phí vận hành",
      sec4P1: "Theo số liệu trình bày từ diễn giả trong phiên chia sẻ, các chỉ số đo lường hiệu năng và chi phí được cân đối cụ thể:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Mốc phản xạ tự nhiên",
      sec4Metric1Sub: "Được đề cập làm chuẩn tham chiếu",
      sec4Metric2Val: "< 2 giây",
      sec4Metric2Lbl: "Độ trễ toàn trình",
      sec4Metric2Sub: "Mục tiêu phản hồi của hệ thống",
      sec4Metric3Val: "~3.000 VNĐ",
      sec4Metric3Lbl: "Chi phí / cuộc gọi",
      sec4Metric3Sub: "Mức chi phí bình quân chia sẻ",
      sec4Attribution: "* Các chỉ số trên được trích dẫn trực tiếp từ bài thuyết trình của diễn giả tại phiên chia sẻ.",
      sec4LessonQuote: "“Một giải pháp AI triển khai thực tế không chỉ cần khả năng phản hồi thông minh, mà còn phải tối ưu độ trễ, chi phí và độ ổn định.”",

      sec5Num: "05",
      sec5Title: "Nghiên cứu điển hình tại VPBank (VPBank Case Study)",
      sec5Desc: "Theo số liệu diễn giả chia sẻ trong bài trình bày, dự án triển khai Voice AI thực tế tại VPBank đạt được các kết quả ban đầu:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Ứng viên",
      sec5Metric1Sub: "Được phỏng vấn tự động hoàn toàn",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Độ chính xác",
      sec5Metric2Sub: "Nhận diện ý định được báo cáo",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Tỷ lệ nộp đơn",
      sec5Metric3Sub: "Tỷ lệ ứng viên hoàn thành hồ sơ",
      sec5Disclaimer: "* Lưu ý: Các chỉ số trên do diễn giả chia sẻ trong phiên trình bày nhằm minh họa cho bài toán thực tế, chưa qua kiểm chứng độc lập.",

      sec6Num: "06",
      sec6Title: "Trực quan Live Demo tại Hội trường",
      sec6Desc: "Hệ thống Voice AI được demo trực tiếp thông qua cuộc gọi điện thoại phỏng vấn ứng viên tuyển dụng vị trí Cloud Architect:",
      sec6Item1: "<strong>Kiến trúc VPC ba tầng:</strong> Voice AI đặt câu hỏi kiểm tra kiến thức thiết kế 3-tier VPC (Public Subnet cho ALB, Private Subnet cho App/EKS, Isolated Subnet cho Database).",
      sec6Item2: "<strong>Đánh giá năng lực Cloud Architecture:</strong> Thẩm định tư duy phân tầng bảo mật, Route Table, NAT Gateway và tính sẵn sàng cao (High Availability).",
      sec6Item3: "<strong>Thương lượng kỳ vọng thu nhập:</strong> Trao đổi linh hoạt về mức lương mong muốn khoảng 20 triệu đồng và ghi nhận phản hồi một cách tự nhiên.",
      sec6Item4: "<strong>Cuộc gọi ngẫu hứng:</strong> Diễn giả thực hiện gọi trực tiếp với một người tham dự tại khán phòng để chứng minh khả năng phản hồi linh hoạt với các biến số âm thanh bất ngờ.",
      sec6Summary: "Buổi demo cho thấy rõ khả năng ứng dụng thực tế của Voice AI trong việc tự động hóa sàng lọc sơ bộ nhân sự, giảm tải cho bộ phận tuyển dụng và chuẩn hóa chất lượng đánh giá ứng viên trong quy trình doanh nghiệp.",

      sec7Num: "07",
      sec7Title: "Những bài học thu hoạch chuyên sâu",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "Một giải pháp AI thành công cần cân bằng hiệu quả kỹ thuật và hiệu quả kinh tế. Không phải mô hình có số lượng tham số lớn nhất luôn là phương án phù hợp nhất; mô hình có kích thước vừa phải, tối ưu hóa theo domain cụ thể sẽ mang lại chi phí vận hành và độ trễ vượt trội.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "LLM chỉ là một mắt xích trong toàn bộ hệ thống. Kiến thức nền tảng về WebRTC, giao thức UDP, năng lực tính toán GPU và hạ tầng Cloud Networking đóng vai trò sống còn đối với hiệu suất xử lý đàm thoại thời gian thực.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Quá trình xử lý tiếng Việt thực tế đối mặt với nhiều bài toán kỹ thuật đặc thù: chuẩn hóa từ viết tắt và định dạng tiền tệ (ví dụ: '500k' trong ngữ cảnh số tiền cần được chuẩn hóa thành 'năm trăm nghìn đồng' trước khi chuyển sang TTS), tinh chỉnh độ nhạy Voice Activity Detection (VAD), xử lý tiếng ồn môi trường và kiểm soát ngắt lời (turn-taking) để tránh cướp lời khi người dùng chỉ đang tạm ngắt câu.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Lớp Guardrails giữ vai trò quyết định trong việc kiểm soát nội dung phản hồi an toàn. Bên cạnh đó, việc lưu trữ call recordings và transcripts hỗ trợ kiểm toán, phân tích lỗi và cải tiến hệ thống, đồng thời bắt buộc phải đáp ứng các tiêu chuẩn bảo mật dữ liệu và quyền riêng tư cá nhân.",

      sec8Num: "08",
      sec8Title: "Bài học rút ra và Đóng góp cá nhân",
      lessonHeading: "Bài học rút ra:",
      lessonQuote: "“Session 1 giúp làm rõ cách một giải pháp AI được triển khai thành hệ thống thực tế phục vụ doanh nghiệp.\n\nViệc xây dựng Voice AI không chỉ phụ thuộc vào LLM mà cần sự kết hợp giữa Cloud Infrastructure, Networking, Real-time Processing, AI Safety và Cost Optimization.\n\nNhững kiến thức này là nền tảng hữu ích cho quá trình học tập, nghiên cứu và thực hành AWS Cloud Engineering.”",
      contribHeading: "Đóng góp cá nhân:",
      contribQuote: "“Tổng hợp và hệ thống hóa nội dung của Session 1, phân tích các thành phần của kiến trúc Voice AI và ghi nhận những kinh nghiệm có thể áp dụng vào quá trình học tập và thực hành.”",

      sec9Num: "09",
      sec9Title: "Hình ảnh Check-in & Hoạt động sự kiện",
      photoPendingBadge: "⏳ Đang chờ cập nhật ảnh chính thức",
      photoPendingTitle: "Hình ảnh Check-in tham gia sự kiện",
      photoPendingDesc: "Theo tiêu chí báo cáo số 6 của công ty (Hình ảnh check-in rõ mặt), khu vực này sẽ hiển thị ảnh check-in thực tế của sinh viên tại sự kiện sau khi có ảnh chính thức. Hệ thống tuân thủ nguyên tắc không sử dụng ảnh giả lập hoặc ảnh không chính chủ nhằm bảo đảm tính minh bạch và trung thực.",
      photoPendingNote: "Khu vực hiển thị ảnh đã sẵn sàng hỗ trợ định dạng độ phân giải cao và tính năng phóng to (lightbox) ngay khi ảnh thực tế được tải lên."
    },
    en: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "EVENT HARVEST REPORT",
      sessionTag: "Session 1 • Voice AI & Contact Center on AWS",
      title: "HARVEST REPORT – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Official Event Record",
      lblEventName: "Event Name",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Date & Time",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Location",
      location: "Unconfirmed",
      lblRole: "Participation Role",
      role: "Attendee",
      lblSpeaker: "Session 1 Speaker",
      speaker: "Kiệt Trần – AI Engineer at Re AI (AWS Partner)",
      lblTopic: "Session 1 Topic",
      topic: "Integrating Voice AI into Enterprise Contact Centers on AWS",
      metaNotice: "* Note: 08:30 – 12:00 is the overall event attendance window and does not solely reflect Session 1 duration. Location is recorded per official organizer details (no address invented).",
      complianceTitle: "Company 7 Reporting Criteria Verification Framework",
      crit1: "Event Name: First Cloud AI Journey 24/10",
      crit2: "Time: 08:30 – 12:00, 24/10/2026",
      crit3: "Location: Unconfirmed",
      crit4: "Role: Attendee",
      crit5: "Key Content: Session 1 Voice AI",
      crit6: "Clear Check-in Photo (Pending Upload)",
      crit7: "Lessons Learned & Personal Contribution",

      sec1Num: "01",
      sec1Title: "Session Overview",
      sec1Problem: "Session 1 focused on solving a core enterprise engineering challenge:",
      sec1Quote: "“How can enterprises integrate Voice AI into contact center systems, ensuring low-latency two-way voice conversations, reasonable operational costs, and natural user experience?”",
      sec1P1: "According to the speaker, humans exhibit a natural conversational reflex latency of around <strong>200ms</strong> in certain real-life conversational contexts. When a Voice AI system responds with a <strong>3–5 second</strong> delay, the conversational experience deteriorates substantially: awkward pauses appear, conversational turn-taking breaks down, and caller frustration rises quickly.",
      sec1P2: "Consequently, driving down end-to-end response latency to a natural conversational threshold (< 2 seconds) is one of the highest priority technical objectives when architecting modern enterprise contact centers.",

      sec2Num: "02",
      sec2Title: "Voice AI Architecture (Cascade Model)",
      sec2Desc: "The session presented a sequential processing pipeline known as the Cascade Architecture:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Converts the incoming real-time audio stream from the user into text transcripts.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Serves as the cognitive reasoning engine, understanding context, retrieving business knowledge, and synthesizing logical responses.",
      sec2Guardrails: "<strong>Guardrails:</strong> A safety and policy enforcement layer that verifies responses, catches hallucinations, redacts PII, and enforces corporate compliance.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Synthesizes verified text responses back into natural-sounding speech audio before streaming to the listener.",
      sec2Advantage: "<strong>Key Advantage:</strong> In this enterprise problem setting, the paramount strength of Cascade is the capability to strictly inspect and govern responses via Guardrails prior to vocalization, ensuring brand safety and regulatory compliance.",
      sec2Nuance: "<strong>Architectural Assessment:</strong> Cascade should not be viewed as universally superior for every scenario due to cumulative latency across sequential hops (STT + LLM + Guardrails + TTS). While direct Speech-to-Speech (End-to-End S2S) models reduce latency, Cascade remains the pragmatic enterprise choice thanks to modularity, auditability, and the ability to independently upgrade each pipeline stage.",
      diagramCaption: "Voice AI Cascade pipeline flow with pre-vocalization Guardrails on AWS Cloud Infrastructure",

      sec3Num: "03",
      sec3Title: "AWS Infrastructure & Cloud Networking",
      sec3Desc: "Core infrastructure technologies highlighted and analyzed during the session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Powers low-latency bidirectional real-time audio streaming. UDP avoids TCP retransmission and head-of-line blocking delays, keeping the audio stream smooth and continuous.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Delivers hardware-accelerated computing (GPU instances) to minimize inference latency for locally hosted STT and TTS models.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Establishes private, secure connectivity between VPCs and AWS managed services without routing traffic over the public internet, eliminating unnecessary hops and protecting sensitive voice data.",
      sec3Networking: "<strong>Cloud Networking:</strong> VPC subnet architecture, routing tables, and Availability Zone placement directly determine round-trip time (RTT), jitter, and enterprise system SLA.",
      sec3Insight: "<strong>Critical Engineering Insight:</strong> <em>LLM inference performance alone does not determine the overall performance of a Voice AI system.</em> End-to-end user perceived latency is governed by the entire chain: UDP audio packet streaming, jitter buffering, VAD processing, STT transcription, LLM Time-to-First-Token (TTFT), Guardrails inspection, TTS audio chunk generation, and playback. Network and streaming optimization is just as decisive as model selection.",

      sec4Num: "04",
      sec4Title: "Performance & Cost Optimization",
      sec4P1: "According to figures presented by the speaker during the session, performance and cost parameters were balanced as follows:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Natural Reflex Benchmark",
      sec4Metric1Sub: "Human reflex reference cited",
      sec4Metric2Val: "< 2 seconds",
      sec4Metric2Lbl: "End-to-End Latency",
      sec4Metric2Sub: "Target system response time",
      sec4Metric3Val: "~3,000 VND",
      sec4Metric3Lbl: "Cost per Call",
      sec4Metric3Sub: "Average operational cost shared",
      sec4Attribution: "* All numbers above are attributed directly to the speaker's presentation during the session.",
      sec4LessonQuote: "“A real-world production AI solution requires not just intelligent responses, but relentless optimization of latency, operating cost, and systemic stability.”",

      sec5Num: "05",
      sec5Title: "VPBank Case Study",
      sec5Desc: "According to metrics shared by the speaker during the presentation, an initial enterprise Voice AI deployment at VPBank yielded:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Candidates",
      sec5Metric1Sub: "Automatically interviewed end-to-end",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Intent Accuracy",
      sec5Metric2Sub: "Reported intent recognition rate",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Submission Rate",
      sec5Metric3Sub: "Reported application completion rate",
      sec5Disclaimer: "* Note: Metrics were reported by the speaker during the session as an illustrative case study and are not independently verified.",

      sec6Num: "06",
      sec6Title: "Live Demonstration Walkthrough",
      sec6Desc: "The Voice AI system was demonstrated live through an automated screening interview call for a Cloud Architect position:",
      sec6Item1: "<strong>3-Tier VPC Architecture:</strong> Voice AI probed candidate knowledge on multi-tier network isolation (Public Subnets for ALB, Private Subnets for App/EKS, Isolated Subnets for Database).",
      sec6Item2: "<strong>Cloud Architecture Depth:</strong> Evaluated understanding of high availability, Route Tables, NAT Gateways, and security boundaries.",
      sec6Item3: "<strong>Salary Expectation Negotiation:</strong> Seamlessly discussed salary expectations around 20 million VND, recording candidate responses naturally.",
      sec6Item4: "<strong>Spontaneous Test Call:</strong> The speaker placed a live, unscripted call directly to an audience member to test real-time handling of unexpected acoustics and responses.",
      sec6Summary: "The live demonstration vividly highlighted Voice AI's value in automating repetitive preliminary talent screening, easing HR workloads, and standardizing assessment consistency in enterprise hiring workflows.",

      sec7Num: "07",
      sec7Title: "Key Technical Takeaways",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "A successful AI solution must strike a balance between technical sophistication and economic viability. The largest parameter model is rarely the most suitable; right-sized models tuned for specific domains deliver vastly superior latency and operational costs.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "The LLM is only one cog in the machine. Solid foundations in WebRTC, UDP protocols, GPU hardware computing, and Cloud Infrastructure are decisive for real-time conversational responsiveness.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Production Vietnamese speech processing involves crucial technical nuances: normalizing abbreviations and currency figures (e.g. '500k' in a financial context must normalize to 'năm trăm nghìn đồng' before TTS), tuning Voice Activity Detection (VAD) thresholds, ambient noise suppression, and managing turn-taking to avoid interrupting speakers during natural pauses.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Guardrails play an indispensable role in governing safe and compliant responses. Furthermore, call recordings and transcripts support auditing, error analysis, and continuous model improvement while strictly complying with enterprise security and privacy regulations.",

      sec8Num: "08",
      sec8Title: "Lessons Learned & Personal Contribution",
      lessonHeading: "Lessons Learned:",
      lessonQuote: "“Session 1 helped clarify how an AI solution is deployed into a real-world enterprise system.\n\nBuilding Voice AI relies not solely on LLMs, but requires the synthesis of Cloud Infrastructure, Networking, Real-time Processing, AI Safety, and Cost Optimization.\n\nThis knowledge forms a valuable foundation for my ongoing study, research, and hands-on practice in AWS Cloud Engineering.”",
      contribHeading: "Personal Contribution:",
      contribQuote: "“Synthesized and structured the key technical takeaways of Session 1, analyzed the components of the Voice AI architecture, and documented engineering practices applicable to my AWS Cloud learning and hands-on projects.”",

      sec9Num: "09",
      sec9Title: "Event Check-in Photos & Activity",
      photoPendingBadge: "⏳ Pending Authentic Upload",
      photoPendingTitle: "Event Participant Check-in Photo",
      photoPendingDesc: "In accordance with Company Reporting Criterion 6 (Clear participant check-in photo), this section is reserved for the authentic check-in photo of the student attending the event. In adherence to transparency and integrity standards, no artificial or unverified images are used.",
      photoPendingNote: "The display container is configured to support high-fidelity aspect ratio rendering and click-to-enlarge lightbox zoom as soon as the authentic photograph is supplied."
    }
  },
  'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai': {
    vi: {
      breadcrumb: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
      badgeText: "BÁO CÁO THU HOẠCH SỰ KIỆN",
      sessionTag: "GenAI & Microservices Modernization",
      title: "BÁO CÁO THU HOẠCH – HIỆN ĐẠI HÓA ỨNG DỤNG & CSDL VỚI GENAI",
      subtitle: "Hội thảo chuyên sâu AWS tại Bitexco Financial Tower, TP.HCM",
      metaHeader: "Thông tin sự kiện chính thức",
      lblEventName: "Tên sự kiện",
      eventName: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
      lblDateTime: "Ngày & Giờ tham gia",
      dateTime: "09:00, 12/08/2026",
      lblLocation: "Địa điểm",
      location: "Tầng 26, Bitexco Financial Tower, Số 02 Hải Triều, Q.1, TP.HCM",
      lblRole: "Vai trò tham gia",
      role: "Khách mời tham dự (Attendee)",
      lblSpeaker: "Diễn giả sự kiện",
      speaker: "Jignesh Shah (Giám đốc CSDL Mã nguồn mở), Erica Liu (Chuyên gia AppMod), Fabrianne Effendi (Kiến trúc sư giải pháp Serverless)",
      lblTopic: "Chủ đề hội thảo",
      topic: "Hiện đại hóa ứng dụng nguyên khối sang Microservices & Tự động hóa nâng cấp mã nguồn với GenAI",
      metaNotice: "* Báo cáo thu hoạch kỹ thuật ghi nhận tại buổi hội thảo công nghệ AWS chuyên sâu.",
      complianceTitle: "Khung 7 Tiêu chí Báo cáo Sự kiện của Doanh nghiệp",
      crit1: "Tên sự kiện: Hội thảo Hiện đại hóa Ứng dụng & CSDL",
      crit2: "Thời gian: 09:00, 12/08/2026",
      crit3: "Địa điểm: Bitexco Tower, Q.1, TP.HCM",
      crit4: "Vai trò: Khách mời tham dự",
      crit5: "Nội dung tiếp thu: Monolith to Microservices, DDD, Amazon Q",
      crit6: "Hình ảnh check-in rõ mặt (Đang chờ cập nhật)",
      crit7: "Bài học rút ra & Đóng góp cá nhân",

      sec1Num: "01",
      sec1Title: "Hạn chế của Kiến trúc Nguyên khối truyền thống",
      sec1Problem: "Thực trạng kiến trúc Monolith trong doanh nghiệp hiện nay:",
      sec1Quote: "“Các hệ thống nguyên khối truyền thống đối mặt với chu kỳ phát hành kéo dài, chi phí vận hành tăng vọt và rủi ro gián đoạn toàn bộ khi chỉ một module gặp lỗi.”",
      sec1P1: "Trong buổi chia sẻ, các chuyên gia AWS đã chỉ ra những nút thắt cố hữu của Monolith: mã nguồn phức tạp (tight coupling), khó mở rộng theo chiều ngang (horizontal scaling), và rủi ro triển khai cao khiến việc phát hành tính năng mới mất nhiều tháng thay vì vài ngày.",
      sec1P2: "Doanh nghiệp cần một lộ trình chuyển đổi kiến trúc có phương pháp, chuyển dịch dần dần sang Microservices mà không làm gián đoạn các luồng kinh doanh đang hoạt động.",

      sec2Num: "02",
      sec2Title: "3 Trụ cột Chuyển đổi Microservices Hiện đại",
      sec2Desc: "Để giải quyết bài toán phân tách hệ thống, chuyên gia AWS đã trình bày 3 trụ cột kỹ thuật trọng tâm:",
      sec2Pipeline: "Queue Management → Caching Strategies → Flexible Message Handling",
      sec2STT: "<strong>1. Quản lý hàng đợi (Queue Management):</strong> Sử dụng Amazon SQS để đệm và tách rời các tiến trình xử lý, đảm bảo khả năng chịu tải và không làm mất thông điệp khi lưu lượng tăng đột biến.",
      sec2LLM: "<strong>2. Chiến lược bộ nhớ đệm (Caching Strategies):</strong> Tận dụng Amazon ElastiCache (Redis/Memcached) để giảm áp lực đọc trực tiếp lên cơ sở dữ liệu quan hệ, đưa độ trễ phản hồi xuống mức dưới một mili-giây.",
      sec2Guardrails: "<strong>3. Xử lý thông điệp linh hoạt (Flexible Messaging):</strong> Áp dụng Amazon SNS và Amazon EventBridge để định tuyến sự kiện và phân tán dữ liệu không đồng bộ giữa các dịch vụ độc lập.",
      sec2Advantage: "<strong>Lợi ích then chốt:</strong> Hệ thống đạt được tính sẵn sàng cao (High Availability), khả năng co giãn độc lập từng dịch vụ và cô lập lỗi hoàn toàn giữa các thành phần.",
      sec2Nuance: "<strong>Lưu ý kiến trúc:</strong> Việc phân rã sang Microservices đòi hỏi quản lý tính nhất quán dữ liệu (eventual consistency) và cơ chế distributed tracing (AWS X-Ray) để giám sát các luồng gọi xuyên suốt.",
      diagramCaption: "Kiến trúc Microservices hiện đại dựa trên Queue, Caching và Event-Driven trên AWS",

      sec3Num: "03",
      sec3Title: "Phương pháp Thiết kế Hướng tên miền (Domain-Driven Design)",
      sec3Desc: "Quy trình thiết kế DDD gồm 4 bước có cấu trúc để phân định ranh giới nghiệp vụ chuẩn xác:",
      sec3WebRTC: "<strong>Bước 1 - Xác định sự kiện nghiệp vụ (Identify Domain Events):</strong> Liệt kê tất cả các sự kiện cốt lõi diễn ra trong quy trình nghiệp vụ của doanh nghiệp (ví dụ: Đơn hàng đã tạo, Thanh toán hoàn tất, Giao hàng bắt đầu).",
      sec3EC2: "<strong>Bước 2 - Sắp xếp dòng thời gian (Arrange Timeline):</strong> Phác thảo chuỗi sự kiện theo trục thời gian tuyến tính để làm rõ luồng phụ thuộc và nguyên nhân - kết quả.",
      sec3PrivateLink: "<strong>Bước 3 - Xác định các tác nhân (Identify Actors):</strong> Xác định các bên kích hoạt hoặc tiếp nhận sự kiện (người dùng, hệ thống bên ngoài, tiến trình chạy ngầm).",
      sec3Networking: "<strong>Bước 4 - Xác định ngữ cảnh bị giới hạn (Define Bounded Contexts):</strong> Gom nhóm các sự kiện và mô hình dữ liệu có tính gắn kết cao vào từng Bounded Context riêng biệt, tạo tiền đề để ánh xạ trực tiếp thành các Microservices độc lập.",
      sec3Insight: "<strong>Nhận định phương pháp luận:</strong> <em>Thiết kế đúng ranh giới Bounded Context ngay từ đầu giúp tránh tình trạng tạo ra 'Distributed Monolith' (nguyên khối phân tán) – một trong những lỗi phổ biến nhất khi chuyển dịch Cloud.</em>",

      sec4Num: "04",
      sec4Title: "Kiến trúc Hướng sự kiện (Event-Driven Architecture)",
      sec4P1: "Hội thảo phân tích sâu 3 mô hình luồng thông điệp chính trong kiến trúc hiện đại:",
      sec4Metric1Val: "Pub/Sub",
      sec4Metric1Lbl: "Mô hình Phát tán",
      sec4Metric1Sub: "Amazon SNS & EventBridge",
      sec4Metric2Val: "P2P",
      sec4Metric2Lbl: "Point-to-Point Queue",
      sec4Metric2Sub: "Amazon SQS Buffer",
      sec4Metric3Val: "Streaming",
      sec4Metric3Lbl: "Luồng Dữ liệu",
      sec4Metric3Sub: "Amazon Kinesis Data Streams",
      sec4Attribution: "* Phân loại dựa trên tài liệu kiến trúc chính thức từ AWS Application Modernization Workshop.",
      sec4LessonQuote: "“Kiến trúc Event-Driven giúp các microservices giao tiếp hoàn toàn phi tập trung, dễ mở rộng và phản ứng linh hoạt với các thay đổi nghiệp vụ theo thời gian thực.”",

      sec5Num: "05",
      sec5Title: "Ứng dụng Trợ lý AI Amazon Q Developer",
      sec5Desc: "Trợ lý AI chuyên biệt của AWS giúp tự động hóa và tăng tốc chu trình hiện đại hóa mã nguồn:",
      sec5Metric1Val: "AppMod",
      sec5Metric1Lbl: "Tự động hóa di chuyển",
      sec5Metric1Sub: "Chuyển đổi Java/Legacy lên Cloud",
      sec5Metric2Val: "Database",
      sec5Metric2Lbl: "Chuyển dịch CSDL",
      sec5Metric2Sub: "Tự động hóa Schema & Code Migration",
      sec5Metric3Val: "Review",
      sec5Metric3Lbl: "Đánh giá An ninh mã nguồn",
      sec5Metric3Sub: "Tích hợp trực tiếp trong IDE",
      sec5Disclaimer: "* Trải nghiệm demo thực tế trong phần chia sẻ của chuyên gia Erica Liu và Fabrianne Effendi.",

      sec6Num: "06",
      sec6Title: "Trực quan Hướng dẫn Demo & Thực hành",
      sec6Desc: "Các nội dung minh họa kỹ thuật nổi bật được diễn giả trình diễn tại Bitexco Financial Tower:",
      sec6Item1: "<strong>Tự động phân tích mã nguồn:</strong> Amazon Q Developer quét kho mã nguồn ứng dụng Java cũ, phát hiện các thư viện lỗi thời và đề xuất phương án refactor lên Java 17/21.",
      sec6Item2: "<strong>Chuyển đổi CSDL thương mại sang mã nguồn mở:</strong> Mô phỏng quy trình dịch chuyển từ Microsoft SQL Server / Oracle sang Amazon Aurora PostgreSQL.",
      sec6Item3: "<strong>Thiết lập hàng đợi bất đồng bộ:</strong> Demo kết nối SQS với Lambda Function và cấu hình Dead-Letter Queue (DLQ) để xử lý thông điệp lỗi.",
      sec6Item4: "<strong>Q&A Chuyên gia:</strong> Phiên giải đáp kỹ thuật chuyên sâu cùng Giám đốc CSDL Mã nguồn mở Jignesh Shah.",
      sec6Summary: "Buổi hội thảo cung cấp bức tranh toàn cảnh và các công cụ thực tế giúp doanh nghiệp và kỹ sư rút ngắn thời gian hiện đại hóa hệ thống từ nhiều năm xuống chỉ còn vài tháng.",

      sec7Num: "07",
      sec7Title: "Những bài học thu hoạch chuyên sâu",
      takeaway1Num: "01",
      takeaway1Title: "Modernization Requires Strategy",
      takeaway1Body: "Hiện đại hóa không chỉ là việc chuyển mã nguồn lên đám mây (Lift and Shift), mà cần tái cấu trúc kiến trúc theo hướng phi tập trung, áp dụng triệt để Domain-Driven Design để chia nhỏ bài toán phức tạp.",
      takeaway2Num: "02",
      takeaway2Title: "Asynchronous Decoupling",
      takeaway2Body: "Sử dụng hàng đợi (SQS) và cơ chế Publish/Subscribe (SNS/EventBridge) là chìa khóa để bảo vệ hệ thống trước sự cố lan chuyền (cascading failures) và hấp thụ lưu lượng tải đột biến.",
      takeaway3Num: "03",
      takeaway3Title: "Database Freedom",
      takeaway3Body: "Chuyển dịch từ các cơ sở dữ liệu thương mại độc quyền sang cơ sở dữ liệu mã nguồn mở tương thích (như PostgreSQL trên Aurora) giúp tối ưu hóa chi phí bản quyền khổng lồ mà vẫn đảm bảo hiệu năng và độ ổn định cấp doanh nghiệp.",
      takeaway4Num: "04",
      takeaway4Title: "AI-Assisted Engineering",
      takeaway4Body: "Trợ lý AI như Amazon Q Developer đang định hình lại phương thức phát triển phần mềm: từ nâng cấp runtime, viết test cases, đến tối ưu hóa truy vấn CSDL, giúp kỹ sư tập trung vào tư duy kiến trúc và logic nghiệp vụ cốt lõi.",

      sec8Num: "08",
      sec8Title: "Bài học rút ra và Đóng góp cá nhân",
      lessonHeading: "Bài học rút ra:",
      lessonQuote: "“Hội thảo giúp em nắm vững tư duy chuyển đổi kiến trúc hệ thống quy mô lớn, từ việc phân tích nghiệp vụ với DDD đến triển khai hạ tầng Serverless và Event-Driven.\n\nĐây là kiến thức nền tảng vô cùng giá trị để em ứng dụng vào quá trình xây dựng đồ án thực tập và định hướng nghề nghiệp Cloud Solutions Architect.”",
      contribHeading: "Đóng góp cá nhân:",
      contribQuote: "“Tham dự đầy đủ buổi hội thảo, ghi chép và hệ thống hóa 4 bước thiết kế DDD, phân tích các trụ cột Microservices và chia sẻ các đúc kết này trong báo cáo thực tập tại AWS.”",

      sec9Num: "09",
      sec9Title: "Hình ảnh tham dự & Hoạt động sự kiện",
      photoPendingBadge: "⏳ Đang chờ cập nhật ảnh chính thức",
      photoPendingTitle: "Hình ảnh tham dự tại Bitexco Financial Tower",
      photoPendingDesc: "Khu vực hiển thị ảnh lưu niệm và check-in tham gia sự kiện của người tham dự. Hệ thống tuân thủ tiêu chuẩn minh bạch và không sử dụng ảnh giả lập.",
      photoPendingNote: "Hỗ trợ tải lên hình ảnh thực tế với chất lượng cao và tính năng phóng to (lightbox) trực tiếp."
    },
    en: {
      breadcrumb: "Event 1 - GenAI App & DB Modernization Workshop",
      badgeText: "EVENT HARVEST REPORT",
      sessionTag: "GenAI & Microservices Modernization",
      title: "HARVEST REPORT – APP & DATABASE MODERNIZATION WITH GENAI",
      subtitle: "In-depth AWS Workshop at Bitexco Financial Tower, HCMC",
      metaHeader: "Official Event Record",
      lblEventName: "Event Name",
      eventName: "Event 1 - GenAI-powered App-DB Modernization Workshop",
      lblDateTime: "Date & Time",
      dateTime: "09:00, August 12, 2026",
      lblLocation: "Location",
      location: "26th Floor, Bitexco Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
      lblRole: "Role",
      role: "Attendee",
      lblSpeaker: "Speakers",
      speaker: "Jignesh Shah (Director, Open Source DBs), Erica Liu (Sr. GTM Specialist), Fabrianne Effendi (Assc. Specialist SA)",
      lblTopic: "Topic",
      topic: "Monolith to Microservices Transformation & AI-Automated Code Migration",
      metaNotice: "* Technical harvest report recorded from the deep-dive AWS architecture workshop.",
      complianceTitle: "Company 7 Reporting Criteria Verification Framework",
      crit1: "Event Name: App & DB Modernization Workshop",
      crit2: "Time: 09:00, August 12, 2026",
      crit3: "Location: Bitexco Tower, District 1, HCMC",
      crit4: "Role: Attendee",
      crit5: "Key Takeaways: Microservices, DDD & Amazon Q Developer",
      crit6: "Check-in Photo (Pending Official Upload)",
      crit7: "Lessons Learned & Personal Contribution",

      sec1Num: "01",
      sec1Title: "Limitations of Legacy Monolithic Architectures",
      sec1Problem: "The challenges of legacy monoliths in modern enterprise environments:",
      sec1Quote: "“Legacy monolithic architectures suffer from protracted release cycles, mounting infrastructure expenses, and high risk of widespread outages caused by a single failing component.”",
      sec1P1: "AWS experts outlined the core bottlenecks of monoliths: tight coupling, inability to scale targeted sub-components horizontally, and high deployment risk leading to feature rollouts taking months instead of days.",
      sec1P2: "Enterprises require a disciplined, phased migration strategy to decouple systems into independent microservices without interrupting ongoing business operations.",

      sec2Num: "02",
      sec2Title: "3 Pillars of Modern Microservices Transition",
      sec2Desc: "To decouple monolithic dependencies, AWS specialists presented three technical pillars:",
      sec2Pipeline: "Queue Management → Caching Strategies → Flexible Message Handling",
      sec2STT: "<strong>1. Queue Management:</strong> Utilizing Amazon SQS to buffer and decouple processes, ensuring resilience and zero message loss during peak traffic bursts.",
      sec2LLM: "<strong>2. Caching Strategies:</strong> Leveraging Amazon ElastiCache (Redis/Memcached) to alleviate database read pressure, delivering sub-millisecond response latencies.",
      sec2Guardrails: "<strong>3. Flexible Message Handling:</strong> Adopting Amazon SNS and EventBridge for asynchronous event routing and publish/subscribe fan-out across independent services.",
      sec2Advantage: "<strong>Core Benefits:</strong> High availability, independent autoscaling per service domain, and complete fault isolation.",
      sec2Nuance: "<strong>Architectural Caution:</strong> Microservices introduce eventual consistency and require distributed tracing (AWS X-Ray) to monitor cross-service request flows.",
      diagramCaption: "Modern Microservices architecture based on Queues, Caching, and Event-Driven workflows on AWS",

      sec3Num: "03",
      sec3Title: "Domain-Driven Design (DDD) 4-Step Methodology",
      sec3Desc: "A structured 4-step framework for establishing clean bounded contexts:",
      sec3WebRTC: "<strong>Step 1 - Identify Domain Events:</strong> Inventory all core events that occur within the business lifecycle (e.g. Order Placed, Payment Authorized, Shipment Dispatched).",
      sec3EC2: "<strong>Step 2 - Arrange Timeline:</strong> Map events chronologically to clarify dependencies, triggers, and cause-and-effect relationships.",
      sec3PrivateLink: "<strong>Step 3 - Identify Actors:</strong> Determine the initiators and recipients of each event (end users, external systems, automated workers).",
      sec3Networking: "<strong>Step 4 - Define Bounded Contexts:</strong> Cluster related events and data models into discrete Bounded Contexts, mapping directly to microservice boundaries.",
      sec3Insight: "<strong>Methodological Insight:</strong> <em>Defining accurate Bounded Contexts prevents creating a 'Distributed Monolith' — the most frequent pitfall in cloud migration.</em>",

      sec4Num: "04",
      sec4Title: "Event-Driven Architecture Patterns",
      sec4P1: "The workshop examined three core asynchronous messaging patterns:",
      sec4Metric1Val: "Pub/Sub",
      sec4Metric1Lbl: "Publish / Subscribe",
      sec4Metric1Sub: "Amazon SNS & EventBridge",
      sec4Metric2Val: "P2P",
      sec4Metric2Lbl: "Point-to-Point Queue",
      sec4Metric2Sub: "Amazon SQS Buffer",
      sec4Metric3Val: "Streaming",
      sec4Metric3Lbl: "High-Throughput Streams",
      sec4Metric3Sub: "Amazon Kinesis Streams",
      sec4Attribution: "* Categorized from AWS Application Modernization technical blueprints.",
      sec4LessonQuote: "“Event-Driven Architecture empowers microservices to communicate asynchronously, achieving elastic scalability and real-time agility.”",

      sec5Num: "05",
      sec5Title: "Amazon Q Developer AI Acceleration",
      sec5Desc: "Specialized generative AI assistant accelerating cloud transformation:",
      sec5Metric1Val: "AppMod",
      sec5Metric1Lbl: "Automated Migration",
      sec5Metric1Sub: "Legacy Java Runtime Upgrades",
      sec5Metric2Val: "Database",
      sec5Metric2Lbl: "DB Transformation",
      sec5Metric2Sub: "Automated Schema & Query Translation",
      sec5Metric3Val: "Review",
      sec5Metric3Lbl: "Code Security Scanning",
      sec5Metric3Sub: "Integrated within IDE",
      sec5Disclaimer: "* Live demonstration conducted by Erica Liu and Fabrianne Effendi.",

      sec6Num: "06",
      sec6Title: "Live Demonstrations & Highlights",
      sec6Desc: "Key architectural demonstrations conducted at Bitexco Financial Tower:",
      sec6Item1: "<strong>Automated Code Transformation:</strong> Amazon Q Developer scanned legacy Java repositories, identified deprecated dependencies, and generated refactored Java 17/21 code.",
      sec6Item2: "<strong>Commercial to Open-Source DB Migration:</strong> Simulated schema conversion from Microsoft SQL Server/Oracle to Amazon Aurora PostgreSQL.",
      sec6Item3: "<strong>Asynchronous Queue Decoupling:</strong> Configured SQS integrations with Lambda and set up Dead-Letter Queues (DLQ) for error handling.",
      sec6Item4: "<strong>Expert Roundtable:</strong> Deep technical Q&A session with Jignesh Shah, Director of Open Source Databases.",
      sec6Summary: "The workshop provided actionable architectural blueprints and cutting-edge GenAI tooling to accelerate enterprise modernization roadmaps.",

      sec7Num: "07",
      sec7Title: "Key Technical Takeaways",
      takeaway1Num: "01",
      takeaway1Title: "Modernization Requires Strategy",
      takeaway1Body: "Cloud modernization goes far beyond lift-and-shift migration; it requires structural architectural refactoring and rigorous Domain-Driven Design.",
      takeaway2Num: "02",
      takeaway2Title: "Asynchronous Decoupling",
      takeaway2Body: "Decoupling workloads via queues (SQS) and event routers (EventBridge/SNS) prevents cascading failures and absorbs sudden traffic spikes.",
      takeaway3Num: "03",
      takeaway3Title: "Database Freedom",
      takeaway3Body: "Migrating from proprietary engines to cloud-native open-source databases (Amazon Aurora) yields massive licensing savings alongside enterprise-grade scalability.",
      takeaway4Num: "04",
      takeaway4Title: "AI-Assisted Engineering",
      takeaway4Body: "Generative AI tools such as Amazon Q Developer streamline tedious refactoring and testing, allowing cloud engineers to focus on architectural problem solving.",

      sec8Num: "08",
      sec8Title: "Lessons Learned & Personal Contribution",
      lessonHeading: "Lessons Learned:",
      lessonQuote: "“The workshop provided valuable insights into enterprise-scale modernization, from DDD domain modeling to resilient serverless event-driven design.\n\nThese principles directly enrich my AWS internship project and career roadmap as a Cloud Solutions Architect.”",
      contribHeading: "Personal Contribution:",
      contribQuote: "“Attended the full workshop, synthesized the 4-step DDD methodology, evaluated microservices queuing patterns, and documented key findings in my AWS internship report.”",

      sec9Num: "09",
      sec9Title: "Event Check-in Photos & Activity",
      photoPendingBadge: "⏳ Pending Authentic Upload",
      photoPendingTitle: "Event Attendance Photo at Bitexco Tower",
      photoPendingDesc: "Reserved for the authentic check-in photo of the student at the Bitexco Financial Tower event. In accordance with transparency standards, no unverified images are used.",
      photoPendingNote: "Supports high-resolution preview and click-to-enlarge lightbox view as soon as authentic evidence is uploaded."
    }
  }
};

function renderEventsList() {
  const container = document.getElementById('events-report-container');
  if (!container) return;

  const lang = app.currentLang;
  const events = app.data.events[lang] || app.data.events.vi;

  container.innerHTML = events.map(ev => {
    let detailRoute = null;
    if (ev.slug) {
      detailRoute = `events/${ev.slug}`;
    } else if (ev.id === 'event-2') {
      detailRoute = 'events/first-cloud-ai-journey-24-10-2026';
    } else if (ev.id === 'event-1') {
      detailRoute = 'events/hoi-thao-hien-dai-hoa-ung-dung-csdl-genai';
    } else if (ev.hasFullReport) {
      detailRoute = 'events/first-cloud-ai-journey-24-10-2026';
    }

    const isVoiceAI = ev.slug === 'first-cloud-ai-journey-24-10-2026' || ev.id === 'event-2';
    const descText = ev.shortDesc || (ev.highlights ? ev.highlights.split('\n')[0].replace(/^•\s*/, '') : '');

    // Check if authentic check-in photo exists for thumbnail
    const targetSlug = ev.slug || (ev.id === 'event-2' ? 'first-cloud-ai-journey-24-10-2026' : (ev.id === 'event-1' ? 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai' : ev.id));
    const savedPhoto = localStorage.getItem('fcaj_event_checkin_photo_' + targetSlug);

    // Extract clean date badge from dateTime string (e.g. "24/10/2026" or "12/08/2026")
    let dateBadge = '';
    if (ev.dateTime) {
      const parts = ev.dateTime.split(',');
      if (parts.length > 1) {
        if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(parts[0])) {
          dateBadge = parts[0].trim();
        } else if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(parts[1])) {
          dateBadge = parts[1].trim();
        } else {
          dateBadge = parts[1].trim();
        }
      } else {
        dateBadge = ev.dateTime.trim();
      }
    }

    let badgeText = '';
    let badgeClass = 'badge-blue';
    if (ev.id === 'event-1' || ev.slug === 'aws-cloud-ai-day-hanoi-2026') {
      badgeText = lang === 'vi' ? 'Sự kiện 1 • 29/09/2026' : 'Event 1 • 29/09/2026';
      badgeClass = 'badge-blue';
    } else if (ev.id === 'event-2' || ev.slug === 'fireside-chat-dr-werner-vogels') {
      badgeText = lang === 'vi' ? 'Sự kiện 2 • 02/10/2026' : 'Event 2 • 02/10/2026';
      badgeClass = 'badge-purple';
    } else if (ev.id === 'event-3' || ev.slug === 'first-cloud-ai-journey-24-10-2026') {
      badgeText = lang === 'vi' ? 'Sự kiện 3 • 24/10/2026' : 'Event 3 • 24/10/2026';
      badgeClass = 'badge-purple';
    } else if (ev.id === 'event-4' || ev.slug === 'enterprise-ai-on-aws-cloud') {
      badgeText = lang === 'vi' ? 'Sự kiện 4 • 14/11/2026' : 'Event 4 • 14/11/2026';
      badgeClass = 'badge-blue';
    } else {
      badgeText = ev.hasFullReport ? (lang === 'vi' ? 'Báo cáo chuyên sâu' : 'Full Report Available') : t('eventBadge');
      badgeClass = 'badge-gray';
    }

    return `
      <div class="event-card ${isVoiceAI ? 'event-card-featured' : ''}"
           ${detailRoute ? `onclick="navigateTo('${detailRoute}')" style="cursor:pointer;"` : ''}>
        <div class="event-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px;">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <span style="font-size:12px; font-weight:600; color:var(--text-subtle);">${escapeHtml(dateBadge)}</span>
          </div>
          <h3 class="event-title">${escapeHtml(ev.name)}</h3>
          <div class="event-meta-compact">
            <div class="event-meta-row">
              <span class="meta-label">📅 ${lang === 'vi' ? 'Thời gian:' : 'Date & Time:'}</span>
              <span class="meta-value">${escapeHtml(ev.dateTime)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">📍 ${lang === 'vi' ? 'Địa điểm:' : 'Location:'}</span>
              <span class="meta-value">${escapeHtml(ev.location)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">👤 ${t('eventRoleLabel')}</span>
              <span class="meta-value"><strong>${escapeHtml(ev.role)}</strong></span>
            </div>
            ${ev.speakers ? `
              <div class="event-meta-row">
                <span class="meta-label">🎙️ ${t('eventSpeakersLabel')}</span>
                <span class="meta-value">${escapeHtml(ev.speakers)}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div style="margin: 10px 0; border-radius: var(--radius-sm); overflow: hidden; max-height: 160px; border: 1px solid var(--border-card); background: #FAFAFA; text-align: center;">
          <img src="assets/images/events/${ev.id}.jpg" alt="${escapeHtml(ev.name)}" style="width: 100%; height: 160px; object-fit: cover; object-position: center top;" onerror="this.parentElement.style.display='none';" />
        </div>

        <div class="event-short-desc">
          <p>${escapeHtml(descText)}</p>
        </div>

        <div class="event-card-footer">
          ${detailRoute ? `
            <button type="button" class="btn btn-primary btn-sm event-view-report-btn" onclick="event.stopPropagation(); navigateTo('${detailRoute}')">
              <span>${lang === 'vi' ? 'Xem báo cáo chi tiết →' : 'View Full Report →'}</span>
            </button>
          ` : `
            <div></div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function renderEventDetail(slug = 'first-cloud-ai-journey-24-10-2026') {
  const containerId = slug === 'aws-cloud-ai-day-hanoi-2026'
    ? 'event-detail-cloud-ai-day-container'
    : (slug === 'fireside-chat-dr-werner-vogels'
      ? 'event-detail-fireside-chat-container'
      : (slug === 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai'
        ? 'event-detail-modernization-container'
        : (slug === 'enterprise-ai-on-aws-cloud'
          ? 'event-detail-enterprise-ai-container'
          : 'event-detail-content-container')));
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = app.currentLang || 'vi';
  const targetSlug = slug || 'first-cloud-ai-journey-24-10-2026';

  if (targetSlug === 'aws-cloud-ai-day-hanoi-2026') {
    renderCloudAIDayEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'fireside-chat-dr-werner-vogels') {
    renderFiresideChatEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'enterprise-ai-on-aws-cloud') {
    renderEnterpriseAIEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'first-cloud-ai-journey-24-10-2026') {
    renderMeetupEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai') {
    renderModernizationEventDetail(container, lang);
    return;
  }
  const reportData = (EVENT_REPORTS[targetSlug] && EVENT_REPORTS[targetSlug][lang])
    ? EVENT_REPORTS[targetSlug][lang]
    : (EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'] ? EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'].vi : null);

  if (!reportData) {
    container.innerHTML = `<div class="card" style="padding:40px; text-align:center;"><h3>${t('reportUnavailable')}</h3><button class="btn btn-outline" onclick="navigateTo('events')">${t('btnBackToEventsShort')}</button></div>`;
    return;
  }

  const r = reportData;
  const isVoiceAI = targetSlug === 'first-cloud-ai-journey-24-10-2026';
  const savedPhoto = localStorage.getItem('fcaj_event_checkin_photo_' + targetSlug);
  const hasAuthenticPhoto = Boolean(savedPhoto);

  // Responsive SVG Architecture Diagram
  let svgDiagram = '';
  if (isVoiceAI) {
    svgDiagram = `
      <div class="arch-diagram-wrapper">
        <svg class="arch-svg-container" viewBox="0 0 940 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
            </filter>
            <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0F172A"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
            <linearGradient id="guardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E3A8A"/>
              <stop offset="100%" stop-color="#2563EB"/>
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B"/>
            </marker>
          </defs>

          <!-- AWS Cloud Boundary Box -->
          <rect x="180" y="20" width="580" height="215" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1.5" />
          <text x="200" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="0.5">AWS CLOUD INFRASTRUCTURE &amp; SECURE VPC</text>
          <text x="610" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#2563EB">WebRTC / UDP • AWS PrivateLink</text>

          <!-- Node 1: User Audio In -->
          <g transform="translate(15, 80)" filter="url(#cardShadow)">
            <rect width="135" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="67" cy="30" r="14" fill="#F1F5F9"/>
            <path d="M67 22 v10 M62 27 a5 5 0 0 0 10 0" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <text x="67" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#0F172A">Speech Input</text>
            <text x="67" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#64748B">User Voice (SIP/Mic)</text>
            <text x="67" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#2563EB">WebRTC / UDP</text>
          </g>

          <!-- Connector 1 -> 2 -->
          <line x1="150" y1="127" x2="195" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

          <!-- Node 2: STT (EC2 GPU) -->
          <g transform="translate(200, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">STT Engine</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Speech-to-Text</text>
            <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">⚡ Low Latency</text>
          </g>

          <!-- Connector 2 -> 3 -->
          <line x1="325" y1="127" x2="355" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="340" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Text</text>

          <!-- Node 3: LLM Reasoning -->
          <g transform="translate(360, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">LLM Core</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Context &amp; Logic</text>
            <rect x="12" y="60" width="101" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">AWS PrivateLink</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#2563EB">Stream Tokens</text>
          </g>

          <!-- Connector 3 -> 4 -->
          <line x1="485" y1="127" x2="515" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="500" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Draft</text>

          <!-- Node 4: Guardrails (Highlighted) -->
          <g transform="translate(520, 68)" filter="url(#cardShadow)">
            <rect width="130" height="118" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
            <rect x="0" y="0" width="130" height="6" rx="3" fill="#2563EB"/>
            <text x="65" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#1E40AF">🛡️ Guardrails</text>
            <text x="65" y="44" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Safety &amp; Compliance</text>
            <text x="65" y="62" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• Anti-Hallucination</text>
            <text x="65" y="76" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• PII &amp; Policy Shield</text>
            <rect x="15" y="86" width="100" height="20" rx="4" fill="#DBEAFE"/>
            <text x="65" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#1E40AF">Pre-Speech Check</text>
          </g>

          <!-- Connector 4 -> 5 -->
          <line x1="650" y1="127" x2="675" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="662" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#16A34A">Safe</text>

          <!-- Node 5: TTS (EC2 GPU) -->
          <g transform="translate(680, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">TTS Engine</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Text-to-Speech</text>
            <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">Natural Voice</text>
          </g>

          <!-- Connector 5 -> 6 -->
          <line x1="805" y1="127" x2="840" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

          <!-- Node 6: Voice Output -->
          <g transform="translate(845, 80)" filter="url(#cardShadow)">
            <rect width="80" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="40" cy="30" r="14" fill="#F1F5F9"/>
            <path d="M35 30 l5 -4 v8 z M43 27 a4 4 0 0 1 0 6" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <text x="40" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">Voice Out</text>
            <text x="40" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#64748B">WebRTC</text>
            <text x="40" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#16A34A">&lt;2s Total</text>
          </g>
        </svg>
        <div class="arch-caption">${escapeHtml(r.diagramCaption || '')}</div>
      </div>
    `;
  } else {
    // Microservices Modernization Diagram for Event 1
    svgDiagram = `
      <div class="arch-diagram-wrapper">
        <svg class="arch-svg-container" viewBox="0 0 940 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cardShadow1" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
            </filter>
            <marker id="arrow1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B"/>
            </marker>
          </defs>

          <!-- AWS Cloud Boundary Box -->
          <rect x="230" y="20" width="690" height="215" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1.5" />
          <text x="250" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="0.5">AWS EVENT-DRIVEN MICROSERVICES INFRASTRUCTURE</text>
          <text x="730" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#2563EB">Amazon Q Developer AppMod</text>

          <!-- Node 1: Legacy Monolith -->
          <g transform="translate(15, 65)" filter="url(#cardShadow1)">
            <rect width="180" height="125" rx="10" fill="#FEF2F2" stroke="#F87171" stroke-width="1.5"/>
            <rect x="0" y="0" width="180" height="6" rx="3" fill="#DC2626"/>
            <text x="90" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#991B1B">Legacy Monolith</text>
            <text x="90" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#7F1D1D">Tightly Coupled Code</text>
            <rect x="15" y="55" width="150" height="22" rx="4" fill="#FFFFFF" stroke="#FECACA"/>
            <text x="90" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#DC2626">Single SQL DB Bottleneck</text>
            <text x="90" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#B91C1C">⚠️ Long Release Cycles</text>
            <text x="90" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#B91C1C">⚠️ Cascading Failures</text>
          </g>

          <!-- Connector 1 -> 2 -->
          <line x1="195" y1="127" x2="245" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>
          <text x="220" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#2563EB">DDD</text>

          <!-- Node 2: Domain-Driven Bounded Contexts -->
          <g transform="translate(250, 65)" filter="url(#cardShadow1)">
            <rect width="180" height="125" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="180" height="6" rx="3" fill="#0F172A"/>
            <text x="90" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0F172A">Bounded Contexts</text>
            <text x="90" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#475569">Domain-Driven Design</text>
            <rect x="15" y="55" width="150" height="22" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="90" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#0F172A">4-Step Domain Modeling</text>
            <text x="90" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#16A34A">✓ High Cohesion</text>
            <text x="90" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#16A34A">✓ Loose Coupling</text>
          </g>

          <!-- Connector 2 -> 3 -->
          <line x1="430" y1="127" x2="475" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>
          <text x="452" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#64748B">Events</text>

          <!-- Node 3: Asynchronous Queues & Messaging -->
          <g transform="translate(480, 60)" filter="url(#cardShadow1)">
            <rect width="195" height="135" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
            <rect x="0" y="0" width="195" height="6" rx="3" fill="#2563EB"/>
            <text x="97" y="26" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12.5" font-weight="800" fill="#1E40AF">Asynchronous Layer</text>
            <text x="97" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Queue • Cache • Messaging</text>
            <rect x="12" y="52" width="171" height="20" rx="4" fill="#DBEAFE"/>
            <text x="97" y="66" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#1E40AF">Amazon SQS + SNS + EventBridge</text>
            <text x="97" y="88" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#334155">• Elastic Spike Buffering</text>
            <text x="97" y="102" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#334155">• ElastiCache Redis Fast Read</text>
            <text x="97" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="600" fill="#16A34A">Fault-Tolerant DLQ</text>
          </g>

          <!-- Connector 3 -> 4 -->
          <line x1="675" y1="127" x2="715" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>

          <!-- Node 4: Cloud-Native Microservices & Modern DB -->
          <g transform="translate(720, 65)" filter="url(#cardShadow1)">
            <rect width="185" height="125" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
            <rect x="0" y="0" width="185" height="6" rx="3" fill="#16A34A"/>
            <text x="92" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#15803D">Modern Services &amp; DB</text>
            <text x="92" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#166534">Serverless &amp; Cloud-Native</text>
            <rect x="12" y="55" width="161" height="22" rx="4" fill="#FFFFFF" stroke="#BBF7D0"/>
            <text x="92" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#15803D">Amazon Aurora &amp; DynamoDB</text>
            <text x="92" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#166534">⚡ Sub-second Scalability</text>
            <text x="92" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#166534">⚡ Zero Licensing Overhead</text>
          </g>
        </svg>
        <div class="arch-caption">${escapeHtml(r.diagramCaption || '')}</div>
      </div>
    `;
  }

  const photoSectionHtml = hasAuthenticPhoto ? `
    <div class="event-uploaded-photo-box">
      <div class="event-uploaded-img-wrap" onclick="window.open('${savedPhoto}', '_blank')">
        <img src="${savedPhoto}" alt="${escapeHtml(r.title)}" class="event-uploaded-img" />
      </div>
    </div>
  ` : `
    <div class="photo-pending-box">
      <div class="photo-pending-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div>
      <span class="photo-pending-badge">${escapeHtml(r.photoPendingBadge)}</span>
      <h3 class="photo-pending-title" style="margin-top:12px;">${escapeHtml(r.photoPendingTitle)}</h3>
      <p class="photo-pending-desc">${escapeHtml(r.photoPendingDesc)}</p>
      <p style="font-size:12px; color:#92400E; margin:0; font-style:italic;">${escapeHtml(r.photoPendingNote)}</p>
    </div>
  `;

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${t('eventsBreadcrumb')}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(r.breadcrumb)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(r.badgeText)}</span>
          <span class="badge badge-blue">${escapeHtml(r.sessionTag)}</span>
          <span class="badge badge-gray">📅 ${escapeHtml(r.dateTime.split(',')[0])}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(r.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(r.subtitle)}</p>
      </header>

      <!-- Official Event Metadata Box -->
      <section class="report-meta-box">
        <div class="report-meta-box-header">
          <h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            ${escapeHtml(r.metaHeader)}
          </h4>
          <span class="badge badge-blue">Official FCAJ Record</span>
        </div>
        <div class="report-meta-grid">
          <div class="report-meta-item"><strong>${escapeHtml(r.lblEventName)}:</strong> ${escapeHtml(r.eventName)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblDateTime)}:</strong> ${escapeHtml(r.dateTime)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblLocation)}:</strong> ${escapeHtml(r.location)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblRole)}:</strong> ${escapeHtml(r.role)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblSpeaker)}:</strong> ${escapeHtml(r.speaker)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblTopic)}:</strong> ${escapeHtml(r.topic)}</div>
        </div>
        <div class="report-meta-notice">${escapeHtml(r.metaNotice)}</div>
      </section>

      <!-- Company 7 Reporting Criteria Verification Framework -->
      <section class="report-compliance-card">
        <div class="report-compliance-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${escapeHtml(r.complianceTitle)}</span>
        </div>
        <div class="compliance-pills">
          <span class="compliance-pill pill-pass">✓ 1. ${escapeHtml(r.crit1)}</span>
          <span class="compliance-pill pill-pass">✓ 2. ${escapeHtml(r.crit2)}</span>
          <span class="compliance-pill pill-pass">✓ 3. ${escapeHtml(r.crit3)}</span>
          <span class="compliance-pill pill-pass">✓ 4. ${escapeHtml(r.crit4)}</span>
          <span class="compliance-pill pill-pass">✓ 5. ${escapeHtml(r.crit5)}</span>
          <span class="compliance-pill ${hasAuthenticPhoto ? 'pill-pass' : 'pill-pending'}">${hasAuthenticPhoto ? '✓' : '⏳'} 6. ${escapeHtml(r.crit6)}</span>
          <span class="compliance-pill pill-pass">✓ 7. ${escapeHtml(r.crit7)}</span>
        </div>
      </section>

      <!-- SECTION 1 – TỔNG QUAN PHIÊN CHIA SẺ -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec1Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec1Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec1Problem)}</p>
          <div class="report-quote-box">${escapeHtml(r.sec1Quote)}</div>
          <p>${r.sec1P1}</p>
          <p>${r.sec1P2}</p>
        </div>
      </section>

      <!-- SECTION 2 – KIẾN TRÚC -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec2Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec2Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec2Desc)}</p>
          <div style="background:#F1F5F9; padding:10px 16px; border-radius:8px; font-family:var(--font-mono); font-size:13px; font-weight:700; color:#0F172A; margin-bottom:16px;">
            ${escapeHtml(r.sec2Pipeline)}
          </div>
          <ul>
            <li>${r.sec2STT}</li>
            <li>${r.sec2LLM}</li>
            <li>${r.sec2Guardrails}</li>
            <li>${r.sec2TTS}</li>
          </ul>
          <p>${r.sec2Advantage}</p>
          ${svgDiagram}
          <p>${r.sec2Nuance}</p>
        </div>
      </section>

      <!-- SECTION 3 – AWS INFRASTRUCTURE & NETWORKING -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec3Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec3Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec3Desc)}</p>
          <ul>
            <li>${r.sec3WebRTC}</li>
            <li>${r.sec3EC2}</li>
            <li>${r.sec3PrivateLink}</li>
            <li>${r.sec3Networking}</li>
          </ul>
          <div class="report-quote-box" style="border-left-color:#2563EB; font-style:normal;">
            ${r.sec3Insight}
          </div>
        </div>
      </section>

      <!-- SECTION 4 – PERFORMANCE & COST OPTIMIZATION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec4Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec4Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec4P1)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec4Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec4Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec4Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec4Attribution)}</div>
          <div class="report-quote-box" style="margin-top:20px;">
            ${escapeHtml(r.sec4LessonQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 5 – CASE STUDY / BENCHMARK -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec5Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec5Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec5Desc)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec5Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec5Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec5Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec5Disclaimer)}</div>
        </div>
      </section>

      <!-- SECTION 6 – LIVE DEMO -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec6Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec6Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec6Desc)}</p>
          <ul>
            <li>${r.sec6Item1}</li>
            <li>${r.sec6Item2}</li>
            <li>${r.sec6Item3}</li>
            <li>${r.sec6Item4}</li>
          </ul>
          <p>${escapeHtml(r.sec6Summary)}</p>
        </div>
      </section>

      <!-- SECTION 7 – NHỮNG BÀI HỌC THU HOẠCH -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec7Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec7Title)}</h2>
        </div>
        <div class="takeaways-grid">
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway1Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway1Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway1Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway2Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway2Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway2Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway3Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway3Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway3Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway4Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway4Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway4Body)}</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8 – BÀI HỌC RÚT RA VÀ ĐÓNG GÓP CÁ NHÂN -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec8Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec8Title)}</h2>
        </div>
        <div class="report-prose">
          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:14px 0 8px 0;">${escapeHtml(r.lessonHeading)}</h4>
          <div class="report-quote-box" style="white-space:pre-line; font-style:normal; margin-bottom:20px;">
            ${escapeHtml(r.lessonQuote)}
          </div>

          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:20px 0 8px 0;">${escapeHtml(r.contribHeading)}</h4>
          <div class="report-quote-box" style="font-style:normal; border-left-color:#2563EB;">
            ${escapeHtml(r.contribQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 9 – EVENT CHECK-IN & PHOTOS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec9Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec9Title)}</h2>
        </div>
        ${photoSectionHtml}
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}


function renderModernizationEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 1 - First Cloud AI Journey (29/09/2026)" : "Event 1 - First Cloud AI Journey (29/09/2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Application & Database Modernization",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FIRST CLOUD AI JOURNEY – 29/09/2026",
    subtitle: isVi
      ? "Hội thảo chuyên sâu về Hiện đại hóa Ứng dụng, Cơ sở dữ liệu và Tự động hóa mã nguồn với GenAI trên AWS"
      : "In-depth Workshop on Application & Database Modernization and GenAI-powered Code Transformation on AWS",
    eventName: "First Cloud AI Journey – 29/09/2026",
    dateTime: isVi ? "08:00 – 17:00, 29/09/2026" : "08:00 AM – 05:00 PM, September 29, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 1 Check-in Photo -->
      <div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-1.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-1-cover-img"
               src="assets/images/events/event-1.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện First Cloud AI Journey (29/09/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at First Cloud AI Journey (September 29, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo <strong>First Cloud AI Journey</strong> tập trung vào chiến lược hiện đại hóa ứng dụng và cơ sở dữ liệu doanh nghiệp trên nền tảng AWS Cloud, chuyển dịch từ kiến trúc nguyên khối (Monolith) sang kiến trúc dịch vụ vi mô (Microservices) và ứng dụng Trí tuệ nhân tạo tạo sinh (GenAI) để tự động hóa nâng cấp mã nguồn.'
            : 'The <strong>First Cloud AI Journey</strong> workshop focused on enterprise application and database modernization strategies on AWS Cloud, transitioning from monolithic architectures to cloud-native microservices, and leveraging Generative AI (GenAI) for automated code transformation.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Nội dung hội thảo bao gồm các bài thuyết trình chuyên sâu về nút thắt của kiến trúc nguyên khối, phương pháp luận Domain-Driven Design (DDD), các mẫu giao tiếp hướng sự kiện (Event-Driven Architecture) và giải pháp tự động hóa mã nguồn với Amazon Q Developer.”'
              : '“The workshop featured deep technical sessions covering monolithic architecture bottlenecks, Domain-Driven Design (DDD) methodologies, Event-Driven Architecture (EDA) patterns, and automated code migration with Amazon Q Developer.”'}
          </div>

          <p>${isVi
            ? 'Chương trình được dẫn dắt bởi các chuyên gia kỹ thuật từ AWS: <strong>Jignesh Shah</strong> (Giám đốc CSDL Mã nguồn mở), <strong>Erica Liu</strong> (Chuyên gia Cao cấp Hiện đại hóa Ứng dụng - AppMod), và <strong>Fabrianne Effendi</strong> (Kiến trúc sư giải pháp Serverless), mang đến các kiến thức chuyên môn, kịch bản thực hành và thảo luận mở về chuyển dịch hạ tầng đám mây.'
            : 'The program was delivered by senior technical leaders from AWS: <strong>Jignesh Shah</strong> (Director, Open Source Databases), <strong>Erica Liu</strong> (Senior GTM Specialist, AppMod), and <strong>Fabrianne Effendi</strong> (Associate Specialist Solutions Architect), providing comprehensive architectural insights and technical demonstrations.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu kỹ thuật và nội dung kiến trúc trọng tâm được trình bày tại hội thảo bao gồm:'
            : 'Core technical and architectural objectives established during the workshop:'}</p>
          <ul>
            <li>${isVi ? '<strong>Phân tích hạn chế của kiến trúc nguyên khối:</strong> Nhận diện các điểm nghẽn về khớp nối mã nguồn (tight coupling), chu kỳ phát hành kéo dài và rủi ro gián đoạn dịch vụ diện rộng.' : '<strong>Analyze monolithic bottlenecks:</strong> Identify challenges related to tight coupling, protracted release cycles, and excessive failure blast radius in legacy systems.'}</li>
            <li>${isVi ? '<strong>3 trụ cột chuyển đổi Microservices hiện đại:</strong> Tiếp cận nguyên lý phân tách hệ thống dựa trên Quản lý hàng đợi (Queue Management), Chiến lược bộ nhớ đệm (Caching Strategies) và Xử lý thông điệp linh hoạt (Flexible Messaging).' : '<strong>3 pillars of modern Microservices decoupling:</strong> Introduce foundational decoupling mechanisms using Queue Management, Caching Strategies, and Flexible Messaging.'}</li>
            <li>${isVi ? '<strong>Phương pháp thiết kế hướng tên miền (DDD):</strong> Trình bày quy trình 4 bước phân định ranh giới ngữ cảnh (Bounded Contexts) để phân chia microservices chuẩn xác.' : '<strong>Domain-Driven Design (DDD) framework:</strong> Apply the 4-step domain modeling framework to establish precise Bounded Contexts.'}</li>
            <li>${isVi ? '<strong>Kiến trúc hướng sự kiện (EDA):</strong> Khảo sát các mẫu giao tiếp bất đồng bộ Pub/Sub, Point-to-Point Queue và Data Streaming nhằm phi tập trung hóa các dịch vụ.' : '<strong>Event-Driven Architecture (EDA):</strong> Explore asynchronous Pub/Sub, Point-to-Point Queue, and Data Streaming patterns for decentralized communication.'}</li>
            <li>${isVi ? '<strong>Ứng dụng GenAI trong hiện đại hóa phần mềm:</strong> Giới thiệu năng lực của Amazon Q Developer trong tự động quét mã nguồn Java cũ, refactor cú pháp và chuyển đổi cơ sở dữ liệu thương mại sang Aurora PostgreSQL.' : '<strong>GenAI for automated modernization:</strong> Demonstrate Amazon Q Developer capabilities in legacy Java upgrades, automated refactoring, and commercial database conversions.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung trọng tâm tại sự kiện (Key Topics & Technical Content)' : 'III. Key Topics & Technical Content'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Limitations of Legacy Monoliths -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Hạn chế của Kiến trúc Nguyên khối truyền thống (Limitations of Legacy Monolithic Architectures)' : '1. Limitations of Legacy Monolithic Architectures'}</h3>
          <p>${isVi
            ? 'Phần đầu hội thảo phân tích chi tiết các nguyên nhân khiến kiến trúc Monolith gặp khó khăn trong môi trường doanh nghiệp hiện đại. Việc toàn bộ các module nghiệp vụ được đóng gói chung trong một khối mã nguồn duy nhất tạo ra các điểm nghẽn cố hữu:'
            : 'The opening session examined the fundamental challenges of legacy monolithic systems in modern enterprise environments. Bundling all business domains into a single monolithic codebase creates critical bottlenecks:'}</p>
          <ul>
            <li>${isVi ? '<strong>Chu kỳ phát hành kéo dài:</strong> Triển khai một thay đổi nhỏ đòi hỏi kiểm thử và phát hành lại toàn bộ ứng dụng, kéo dài thời gian release từ nhiều tuần đến nhiều tháng.' : '<strong>Protracted release cycles:</strong> Deploying minor updates requires rebuilding and releasing the entire application, slowing deployment cadences.'}</li>
            <li>${isVi ? '<strong>Khó khăn khi mở rộng theo chiều ngang:</strong> Hệ thống buộc phải nhân bản toàn bộ ứng dụng khi chỉ một module cục bộ cần thêm tài nguyên, gây lãng phí hạ tầng nghiêm trọng.' : '<strong>Horizontal scalability bottlenecks:</strong> The entire application must be cloned when only a specific sub-component experiences high load.'}</li>
            <li>${isVi ? '<strong>Phạm vi ảnh hưởng sự cố lớn (Blast Radius):</strong> Lỗi phát sinh trong một module đơn lẻ có thể làm tê liệt toàn bộ ứng dụng đang phục vụ người dùng.' : '<strong>Excessive blast radius:</strong> Failures or resource leaks in a single module can compromise the availability of the entire platform.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 2. 3 Pillars of Modern Microservices Transition -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '2. Ba trụ cột chuyển đổi Microservices hiện đại (3 Pillars of Modern Microservices Transition)' : '2. 3 Pillars of Modern Microservices Transition'}</h3>
          <p>${isVi
            ? 'Để phân rã kiến trúc Monolith sang Microservices mà không làm gián đoạn luồng vận hành kinh doanh, chuyên gia AWS đã trình bày 3 trụ cột kỹ thuật trọng tâm:'
            : 'To decouple monolithic dependencies without disrupting continuous operations, AWS specialists presented three technical pillars:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Trụ cột kỹ thuật' : 'Technical Pillar'}</th>
                  <th style="width: 25%;">${isVi ? 'Dịch vụ AWS tương ứng' : 'AWS Service'}</th>
                  <th style="width: 50%;">${isVi ? 'Vai trò &amp; Chức năng kiến trúc' : 'Architectural Role &amp; Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Quản lý hàng đợi (Queue Management)' : 'Queue Management'}</strong></td>
                  <td>Amazon SQS (Simple Queue Service)</td>
                  <td>${isVi ? 'Đệm dữ liệu và tách rời các tiến trình xử lý, đảm bảo khả năng chịu lỗi và không làm mất thông điệp khi lưu lượng truy cập tăng vọt.' : 'Buffers requests and decouples processing stages, ensuring resilience and zero message loss during peak traffic bursts.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Chiến lược bộ nhớ đệm (Caching Strategies)' : 'Caching Strategies'}</strong></td>
                  <td>Amazon ElastiCache (Redis/Memcached)</td>
                  <td>${isVi ? 'Lưu trữ tạm thời dữ liệu thường xuyên truy cập vào bộ nhớ RAM, giảm áp lực đọc trực tiếp lên CSDL quan hệ và đưa độ trễ phản hồi xuống dưới một mili-giây.' : 'Caches frequent queries in in-memory storage, drastically relieving database load and achieving sub-millisecond latencies.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Xử lý thông điệp linh hoạt (Flexible Messaging)' : 'Flexible Messaging'}</strong></td>
                  <td>Amazon SNS &amp; Amazon EventBridge</td>
                  <td>${isVi ? 'Định tuyến sự kiện và phân tán dữ liệu không đồng bộ (Publish/Subscribe) giữa các microservices độc lập, đảm bảo khả năng mở rộng phi tập trung.' : 'Routes events asynchronously via pub/sub fanout across independent microservices, facilitating loosely coupled integrations.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 3. Domain-Driven Design (DDD) 4-Step Methodology -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. Phương pháp Thiết kế Hướng tên miền (Domain-Driven Design 4-Step Methodology)' : '3. Domain-Driven Design 4-Step Methodology'}</h3>
          <p>${isVi
            ? 'Quy trình phân chia microservices được tiếp cận từ góc độ mô hình hóa nghiệp vụ thông qua phương pháp luận Domain-Driven Design (DDD) gồm 4 bước có cấu trúc:'
            : 'Decomposing microservices was structured around domain-driven modeling principles via a 4-step framework:'}</p>

          <ul>
            <li>${isVi ? '<strong>Bước 1 - Xác định sự kiện nghiệp vụ (Identify Domain Events):</strong> Liệt kê tất cả các sự kiện cốt lõi diễn ra trong quy trình kinh doanh (ví dụ: Đơn hàng đã tạo, Thanh toán hoàn tất, Hàng đã xuất kho).' : '<strong>Step 1 - Identify Domain Events:</strong> Inventory all core events that occur within the business lifecycle (e.g. Order Placed, Payment Authorized, Shipment Dispatched).'}</li>
            <li>${isVi ? '<strong>Bước 2 - Sắp xếp dòng thời gian (Arrange Timeline):</strong> Phác thảo chuỗi sự kiện theo trục thời gian tuyến tính để nhận diện rõ các quan hệ phụ thuộc và nguyên nhân - kết quả.' : '<strong>Step 2 - Arrange Timeline:</strong> Map events sequentially on a chronological timeline to clarify triggers, dependencies, and cause-and-effect flows.'}</li>
            <li>${isVi ? '<strong>Bước 3 - Xác định các tác nhân (Identify Actors):</strong> Xác định các đối tượng kích hoạt hoặc tiếp nhận kết quả của sự kiện (người dùng, hệ thống tích hợp, tiến trình tự động).' : '<strong>Step 3 - Identify Actors:</strong> Determine the initiators and consumers of each event (end users, external systems, automated background jobs).'}</li>
            <li>${isVi ? '<strong>Bước 4 - Xác định ngữ cảnh bị giới hạn (Define Bounded Contexts):</strong> Gom nhóm các sự kiện và mô hình dữ liệu có tính gắn kết cao vào từng Bounded Context riêng biệt, tạo tiền đề để ánh xạ trực tiếp thành các Microservices độc lập.' : '<strong>Step 4 - Define Bounded Contexts:</strong> Cluster related domain events and data models into discrete Bounded Contexts, mapping directly to microservice boundaries.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 4. Event-Driven Architecture Patterns -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '4. Các mẫu Kiến trúc Hướng sự kiện (Event-Driven Architecture Patterns)' : '4. Event-Driven Architecture Patterns'}</h3>
          <p>${isVi
            ? 'Hội thảo đi sâu phân tích 3 mô hình giao tiếp bất đồng bộ chính giúp các dịch vụ trao đổi thông điệp phi tập trung:'
            : 'The workshop examined three asynchronous messaging patterns that enable decoupled service communications:'}</p>

          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi
              ? 'Publish/Subscribe (Amazon SNS & EventBridge) | Point-to-Point Queue (Amazon SQS) | High-Throughput Streaming (Amazon Kinesis)'
              : 'Publish/Subscribe (Amazon SNS & EventBridge) | Point-to-Point Queue (Amazon SQS) | High-Throughput Streaming (Amazon Kinesis)'}
          </div>

          <ul>
            <li>${isVi ? '<strong>Publish/Subscribe:</strong> Cho phép một producer phát tán thông điệp đồng thời tới nhiều consumers độc lập thông qua Amazon SNS và EventBridge.' : '<strong>Publish/Subscribe:</strong> Enables an event producer to broadcast messages simultaneously to multiple decoupled consumers via SNS and EventBridge.'}</li>
            <li>${isVi ? '<strong>Point-to-Point Queue:</strong> Đảm bảo mỗi thông điệp được tiêu thụ bởi duy nhất một consumer tại một thời điểm qua Amazon SQS, hỗ trợ cơ chế Dead-Letter Queue (DLQ) để cô lập thông điệp lỗi.' : '<strong>Point-to-Point Queue:</strong> Ensures single-worker message processing backed by Dead-Letter Queues (DLQ) for error containment.'}</li>
            <li>${isVi ? '<strong>Data Streaming:</strong> Thu nhận và xử lý hàng triệu bản ghi mỗi giây theo thứ tự thời gian thực phục vụ phân tích dữ liệu lớn với Amazon Kinesis Data Streams.' : '<strong>Data Streaming:</strong> Ingests and processes millions of ordered records per second in real time for live analytics using Amazon Kinesis.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 5. Amazon Q Developer -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Ứng dụng Trợ lý AI Amazon Q Developer trong Hiện đại hóa phần mềm (AI-Assisted Modernization with Amazon Q Developer)' : '5. AI-Assisted Modernization with Amazon Q Developer'}</h3>
          <p>${isVi
            ? 'Phiên chia sẻ của chuyên gia Erica Liu và Fabrianne Effendi giới thiệu giải pháp ứng dụng Trí tuệ nhân tạo tạo sinh (GenAI) nhằm tự động hóa các tác vụ chuyển đổi mã nguồn:'
            : 'Presentations by specialists Erica Liu and Fabrianne Effendi demonstrated how Generative AI tools accelerate labor-intensive modernization stages:'}</p>

          <ul>
            <li>${isVi ? '<strong>Tự động hóa nâng cấp runtime ứng dụng (AppMod):</strong> Amazon Q Developer tự động phân tích toàn bộ repository mã nguồn Java cũ (Java 8/11), phát hiện các thư viện lỗi thời, tự động refactor mã nguồn và nâng cấp lên Java 17/21.' : '<strong>Application transformation (AppMod):</strong> Amazon Q Developer analyzes legacy Java repositories, identifies outdated dependencies, refactors deprecated syntax, and automates upgrades to Java 17/21.'}</li>
            <li>${isVi ? '<strong>Chuyển đổi cơ sở dữ liệu:</strong> Hỗ trợ dịch chuyển schema và mã nguồn stored procedures từ các cơ sở dữ liệu thương mại độc quyền (Oracle, Microsoft SQL Server) sang các hệ quản trị CSDL mã nguồn mở trên AWS (Amazon Aurora PostgreSQL/MySQL).' : '<strong>Database conversion:</strong> Assists in converting schemas and stored procedures from commercial proprietary engines (Oracle, MS SQL) to open-source Amazon Aurora PostgreSQL/MySQL.'}</li>
            <li>${isVi ? '<strong>Rà soát an ninh mã nguồn tự động:</strong> Tích hợp trực tiếp trong IDE (VS Code, IntelliJ) để phát hiện tức thì các lỗ hổng OWASP, hardcoded secrets và đề xuất giải pháp vá lỗi.' : '<strong>Security code review:</strong> Operates directly inside developer IDEs to pinpoint OWASP vulnerabilities and hardcoded credentials, generating remediation diffs.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 6. Technical Demos & Q&A -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '6. Trực quan Hướng dẫn Demo &amp; Phiên giải đáp Chuyên gia (Technical Demonstrations &amp; Expert Q&amp;A)' : '6. Technical Demonstrations &amp; Expert Q&amp;A'}</h3>
          <p>${isVi
            ? 'Chương trình bao gồm các phần trình diễn kỹ thuật trực tiếp trên hệ thống AWS:'
            : 'The workshop included live technical demonstrations executed directly on AWS environments:'}</p>
          <ul>
            <li>${isVi ? '<strong>Demo quét mã nguồn tự động:</strong> Minh họa quá trình Amazon Q Developer quét một dự án Java nguyên khối, tự động sinh test cases và hoàn tất nâng cấp framework.' : '<strong>Automated code scanning demo:</strong> Demonstrated Amazon Q Developer scanning a monolithic Java project, generating test suites, and completing framework upgrades.'}</li>
            <li>${isVi ? '<strong>Demo chuyển đổi CSDL:</strong> Trực quan hóa quy trình chuyển đổi cơ sở dữ liệu sử dụng AWS Schema Conversion Tool (SCT) và AWS Database Migration Service (DMS) sang Amazon Aurora.' : '<strong>Database migration demo:</strong> Visualized database schema conversions using AWS SCT and AWS DMS targeting Amazon Aurora.'}</li>
            <li>${isVi ? '<strong>Demo cô lập lỗi với SQS và DLQ:</strong> Mô phỏng sự cố microservice thanh toán gặp lỗi và cách hàng đợi SQS bảo toàn dữ liệu giao dịch không bị thất thoát.' : '<strong>Resilience demo with SQS and DLQ:</strong> Simulated a downstream payment service outage, verifying how SQS preserved incoming customer transactions without data loss.'}</li>
            <li>${isVi ? '<strong>Phiên Q&amp;A chuyên sâu:</strong> Thảo luận cùng Giám đốc CSDL Jignesh Shah về tính nhất quán dữ liệu (eventual consistency) và chiến lược tối ưu hóa chi phí khi dịch chuyển CSDL doanh nghiệp.' : '<strong>Expert Q&amp;A with Director Jignesh Shah:</strong> Technical discussion on eventual consistency across distributed domains and cost governance strategies for cloud database migrations.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Nội dung hội thảo đúc kết các bài học kiến trúc trọng tâm trong việc xây dựng hệ thống phân tán:'
            : 'The workshop synthesized foundational architectural lessons in distributed software engineering:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kỹ thuật (Technical Area)' : 'Technical Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monolith Limitations</strong></td>
                  <td>${isVi ? 'Nhận diện các điểm nghẽn về khớp nối chặt (tight coupling), chu kỳ phát hành và rủi ro gián đoạn toàn bộ hệ thống.' : 'Understanding tight coupling bottlenecks, protracted release cycles, and excessive failure blast radius.'}</td>
                </tr>
                <tr>
                  <td><strong>Queue Management</strong></td>
                  <td>${isVi ? 'Sử dụng Amazon SQS để đệm dữ liệu, phân tách tiến trình xử lý và hấp thụ lưu lượng tải đột biến.' : 'Leveraging Amazon SQS to buffer requests, decouple processing stages, and absorb traffic spikes.'}</td>
                </tr>
                <tr>
                  <td><strong>Caching Strategy</strong></td>
                  <td>${isVi ? 'Tận dụng Amazon ElastiCache để lưu trữ tạm thời trong RAM, giảm tải CSDL và đạt độ trễ phản hồi dưới 1 mili-giây.' : 'Utilizing Amazon ElastiCache to alleviate database read pressure and achieve sub-millisecond latencies.'}</td>
                </tr>
                <tr>
                  <td><strong>Event-Driven Messaging</strong></td>
                  <td>${isVi ? 'Áp dụng các mẫu Pub/Sub và Streaming với Amazon SNS, EventBridge, Kinesis để phi tập trung hóa giao tiếp.' : 'Applying Pub/Sub and Streaming patterns with Amazon SNS, EventBridge, and Kinesis for loose coupling.'}</td>
                </tr>
                <tr>
                  <td><strong>Domain-Driven Design</strong></td>
                  <td>${isVi ? 'Làm chủ quy trình 4 bước DDD để phân định Bounded Contexts chuẩn xác, tránh tạo ra Distributed Monolith.' : 'Mastering the 4-step DDD methodology to delineate clean bounded contexts and avoid distributed monoliths.'}</td>
                </tr>
                <tr>
                  <td><strong>Database Modernization</strong></td>
                  <td>${isVi ? 'Chuyển dịch cơ sở dữ liệu thương mại sang Amazon Aurora PostgreSQL để giải phóng chi phí bản quyền và tăng khả năng co giãn.' : 'Migrating commercial proprietary databases to Amazon Aurora PostgreSQL for cost freedom and high scalability.'}</td>
                </tr>
                <tr>
                  <td><strong>AI-Assisted Modernization</strong></td>
                  <td>${isVi ? 'Ứng dụng Amazon Q Developer để tự động hóa quét mã nguồn, refactor runtime cũ và kiểm toán an ninh trong IDE.' : 'Employing Amazon Q Developer to automate repository analysis, legacy runtime refactoring, and code reviews.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Các nguyên tắc kiến trúc cốt lõi:' : 'Core architectural principles established:'}
          </p>
          <ul>
            <li>${isVi ? 'Hiện đại hóa là một hành trình tái cấu trúc có phương pháp (Architecture-led), không đơn thuần là di chuyển mã nguồn nguyên trạng lên đám mây (Lift and Shift).' : 'Modernization is an architecture-driven evolution, not a mere lift-and-shift code relocation.'}</li>
            <li>${isVi ? 'Phân tách bất đồng bộ (Asynchronous Decoupling) là chìa khóa bảo vệ hệ thống trước sự cố lan chuyền và giúp từng thành phần co giãn độc lập.' : 'Asynchronous decoupling is essential to preventing cascading failures and ensuring independent scalability.'}</li>
            <li>${isVi ? 'Thiết kế ranh giới nghiệp vụ chuẩn xác theo Domain-Driven Design là điều kiện tiên quyết để xây dựng Microservices bền vững.' : 'Accurate domain boundaries defined through DDD are the foundation of successful, sustainable microservices.'}</li>
            <li>${isVi ? 'Cơ sở dữ liệu đám mây mã nguồn mở mang lại sự tự do công nghệ và tối ưu hóa chi phí vượt bậc so với các giải pháp độc quyền.' : 'Cloud-native open-source databases deliver technological independence and substantial cost savings over proprietary engines.'}</li>
            <li>${isVi ? 'Trợ lý AI đang định hình lại phương thức kỹ thuật phần mềm, tự động hóa các tác vụ lặp lại để kỹ sư tập trung vào tư duy kiến trúc.' : 'AI assistants are redefining software engineering, empowering engineers to focus on high-value architectural reasoning.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Tư duy chuyển đổi hệ thống lớn:</strong> Thấu hiểu rằng hiện đại hóa ứng dụng là một lộ trình tái cấu trúc có phương pháp (Architecture-led), phân rã nghiệp vụ theo miền thay vì chỉ di chuyển hạ tầng nguyên trạng (Lift-and-Shift).' : '<strong>Enterprise modernization mindset:</strong> Understood that application modernization is an architecture-driven evolution requiring domain-based decoupling rather than a simple infrastructure lift-and-shift.'}</li>
            <li>${isVi ? '<strong>Vai trò của phân tách bất đồng bộ:</strong> Nhận thức rõ ràng cách thức hàng đợi (Amazon SQS) và cơ chế Pub/Sub (Amazon SNS, EventBridge) giúp loại bỏ điểm lỗi đơn lẻ (SPOF) và bảo vệ hệ thống trước sự cố lan chuyền.' : '<strong>Role of asynchronous decoupling:</strong> Recognized how message buffering with Amazon SQS and event routing via SNS/EventBridge eliminate single points of failure and prevent cascading outages.'}</li>
            <li>${isVi ? '<strong>Phân định ranh giới nghiệp vụ chuẩn xác:</strong> Nắm vững quy trình 4 bước của Domain-Driven Design (DDD) để xác định các Bounded Contexts, phòng ngừa rủi ro tạo ra kiến trúc "Distributed Monolith".' : '<strong>Domain boundary precision:</strong> Mastered the 4-step Domain-Driven Design (DDD) methodology to establish clean bounded contexts and avoid distributed monolith antipatterns.'}</li>
            <li>${isVi ? '<strong>Tối ưu hóa cơ sở dữ liệu trên đám mây:</strong> Nhận thức lợi ích kinh tế và tính linh hoạt khi dịch chuyển từ CSDL thương mại độc quyền sang Amazon Aurora PostgreSQL.' : '<strong>Cloud database optimization:</strong> Acknowledged the strategic economic and operational advantages of migrating proprietary commercial databases to Amazon Aurora PostgreSQL.'}</li>
            <li>${isVi ? '<strong>Đòn bẩy tự động hóa từ GenAI:</strong> Nhận thấy tiềm năng của các trợ lý AI như Amazon Q Developer trong việc tự động hóa nâng cấp runtime, refactor mã nguồn cũ và rà soát an ninh.' : '<strong>GenAI automation leverage:</strong> Realized the transformative capability of GenAI engineering assistants like Amazon Q Developer to automate routine migration and refactoring tasks.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Áp dụng Domain-Driven Design vào đồ án:</strong> Vận dụng phương pháp phân tích 4 bước DDD để phân rã các miền nghiệp vụ và thiết kế kiến trúc vi dịch vụ cho đồ án tốt nghiệp và các dự án phần mềm cá nhân.' : '<strong>Apply Domain-Driven Design to coursework:</strong> Leverage the 4-step DDD methodology to analyze business requirements and define modular service boundaries in academic capstone projects.'}</li>
            <li>${isVi ? '<strong>Thiết kế luồng bất đồng bộ trên AWS:</strong> Sử dụng Amazon SQS và EventBridge để xây dựng các kênh giao tiếp hướng sự kiện có khả năng chịu lỗi và hấp thụ lưu lượng tải đột biến trong các bài thực hành đám mây.' : '<strong>Design asynchronous AWS workflows:</strong> Implement Amazon SQS and EventBridge to build fault-tolerant, event-driven architectures capable of handling bursty workloads in cloud labs.'}</li>
            <li>${isVi ? '<strong>Nghiên cứu quy trình chuyển dịch CSDL:</strong> Thử nghiệm quy trình chuyển dịch schema và dữ liệu sang Amazon Aurora PostgreSQL nhằm rèn luyện kỹ năng quản trị và tối ưu hóa chi phí CSDL.' : '<strong>Explore database migration workflows:</strong> Experiment with schema conversion and data migration workflows targeting Amazon Aurora PostgreSQL for cost governance and query optimization.'}</li>
            <li>${isVi ? '<strong>Tích hợp trợ lý AI vào IDE cá nhân:</strong> Sử dụng Amazon Q Developer trong môi trường phát triển (VS Code/IntelliJ) phục vụ việc rà soát an ninh mã nguồn và chuẩn hóa chất lượng phần mềm theo chuẩn AWS Well-Architected.' : '<strong>Integrate AI assistants into IDE:</strong> Utilize Amazon Q Developer in daily developer environments to audit security vulnerabilities and standardize code quality against AWS Well-Architected practices.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia đầy đủ chương trình hội thảo với vai trò người tham dự (Attendee) từ 08:00 đến 17:00 ngày 29/09/2026 tại tầng 26, Bitexco Financial Tower.' : 'Participated fully in the workshop as an Attendee from 08:00 AM to 05:00 PM on September 29, 2026, on the 26th Floor of Bitexco Financial Tower.'}</li>
            <li>${isVi ? 'Tiếp thu, ghi chép và tổng hợp các kiến thức chuyên môn về Microservices, DDD, Event-Driven Architecture và Amazon Q Developer từ các chuyên gia AWS.' : 'Listened attentively, took detailed technical notes, and consolidated domain knowledge on Microservices, DDD, Event-Driven Architecture, and Amazon Q Developer from AWS specialists.'}</li>
            <li>${isVi ? 'Hệ thống hóa các nội dung kỹ thuật, xây dựng bảng so sánh và sơ đồ quy trình để phục vụ việc lưu trữ tri thức bài bản.' : 'Systematized technical concepts, comparison matrices, and workflow blueprints for structured knowledge retention.'}</li>
            <li>${isVi ? 'Xây dựng bài báo cáo sự kiện chi tiết trên website cá nhân (Personal Worklog) trong khuôn khổ chương trình First Cloud AI Journey.' : 'Authored and published a detailed technical event report on the Personal Worklog website within the First Cloud AI Journey program.'}</li>
            <li>${isVi ? 'Lưu trữ, duy trì và chia sẻ các tài liệu kỹ thuật thu hoạch được thông qua mã nguồn mở trên GitHub Pages.' : 'Maintained and published the acquired technical documentation openly via GitHub Pages.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo First Cloud AI Journey ngày 29/09/2026 mang lại giá trị kiến thức thực tiễn to lớn về lộ trình hiện đại hóa phần mềm cấp doanh nghiệp.'
            : 'The First Cloud AI Journey workshop on September 29, 2026, delivered substantial practical value regarding enterprise cloud software modernization.'}</p>

          <p>${isVi
            ? 'Qua sự kiện, tư duy kỹ thuật của bản thân đã có bước chuyển biến rõ nét: từ cách nhìn nhận việc phát triển ứng dụng đơn lẻ sang tư duy kiến trúc phân tán toàn diện, nơi tính module hóa, khả năng chịu lỗi và tính độc lập của từng miền nghiệp vụ đóng vai trò quyết định. Đồng thời, nhận thức về vai trò hỗ trợ của GenAI trong kỹ thuật phần mềm cũng được định hình cụ thể — AI đóng vai trò đòn bẩy tự động hóa mạnh mẽ giúp kỹ sư tập trung vào tư duy kiến trúc cốt lõi.'
            : 'The event fostered significant growth in my technical mindset: transitioning from isolated application development to holistic distributed system architecture, where modularity, fault tolerance, and domain independence are essential. It also provided a grounded perspective on GenAI in software engineering — AI serves as an automated accelerator empowering engineers to focus on core architectural reasoning.'}</p>

          <p>${isVi
            ? 'Đây là nền tảng tri thức quan trọng định hình quá trình học tập chuyên sâu về Cloud Solutions Architecture và hướng đi nghề nghiệp lâu dài trên nền tảng AWS.'
            : 'These insights establish a strong foundational knowledge base guiding my deep-dive studies in Cloud Solutions Architecture and long-term career growth on AWS.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Hiện đại hóa không chỉ là việc chuyển mã nguồn lên đám mây, mà là cuộc cách mạng về tư duy kiến trúc — nơi tính module hóa, kiến trúc hướng sự kiện và tự động hóa AI hội tụ để kiến tạo các hệ thống bền vững.”'
              : '“Modernization is not merely lifting code to the cloud, but an architectural paradigm shift — where modularity, event-driven decoupling, and AI automation converge to build resilient enterprise systems.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #FirstCloudAIJourney #AppMod #Microservices #DDD #EventDriven #AmazonQ #DatabaseModernization #Serverless
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}



function renderCloudAIDayEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';
  container.innerHTML = isVi
    ? `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Sự kiện tham gia</span>
</a>
<span class="sep">/</span>
<span class="current">Sự kiện 1 - AWS Cloud and AI Day Hanoi 2026 (29/09/2026)</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">BÁO CÁO THU HOẠCH SỰ KIỆN</span>
<span class="badge badge-blue">Cloud Computing &amp; Agentic AI</span>
<span class="badge badge-gray">Chính thức • AWS FCAJ</span>
</div>
<h1 class="report-main-title">AWS CLOUD AND AI DAY HANOI 2026</h1>
<p class="report-main-subtitle">Hội nghị toàn thể về Điện toán Đám mây, Trí tuệ nhân tạo Agentic AI và Hiện đại hóa Hạ tầng Doanh nghiệp</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Tên sự kiện:</span>
<span class="meta-strip-val"><strong>AWS Cloud and AI Day Hanoi 2026</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Thời gian:</span>
<span class="meta-strip-val">07:30 – 17:00, Thứ Ba, 29/09/2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Địa điểm chính:</span>
<span class="meta-strip-val">JW Marriott Hotel Hanoi, Hà Nội, Việt Nam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Hình thức tham dự:</span>
<span class="meta-strip-val">Theo dõi trực tiếp từ Hà Nội tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Vai trò:</span>
<span class="meta-strip-val"><strong>Người tham dự Watch Party (Watch Party Attendee)</strong></span>
</div>
</div>
</header>

<!-- Event 1 Check-in Photo -->
<div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Nhấp để xem ảnh độ nét cao (HD)">
<img id="event-1-cover-img" src="assets/images/events/event-1.jpg"  alt="AWS Cloud and AI Day Hanoi 2026 – FCAJ HCMC Watch Party" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Ảnh minh chứng sinh viên tham dự theo dõi trực tiếp sự kiện AWS Cloud and AI Day Hanoi 2026 tại điểm cầu FCAJ HCMC Watch Party (29/09/2026)
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Thông tin sự kiện (Event Information)</h2>
</div>
<div class="report-prose">
<p><strong>AWS Cloud and AI Day Hanoi 2026</strong> là hội nghị thường niên quy mô lớn do Amazon Web Services (AWS) tổ chức, quy tụ các kỹ sư giải pháp, kiến trúc sư trưởng, lãnh đạo công nghệ cùng đại diện các cơ quan ban ngành và doanh nghiệp đối tác hàng đầu tại Việt Nam.</p>
<ul>
<li><strong>Tên chính thức:</strong> AWS Cloud and AI Day Hanoi 2026</li>
<li><strong>Ngày diễn ra:</strong> Thứ Ba, ngày 29 tháng 09 năm 2026</li>
<li><strong>Địa điểm chính:</strong> Khách sạn JW Marriott Hotel Hanoi, Hà Nội, Việt Nam</li>
<li><strong>Hình thức tham dự thực tế:</strong> Tham dự điểm cầu trực tiếp <em>FCAJ HCMC Watch Party</em> tại TP. Hồ Chí Minh, theo dõi tiếp sóng trực tuyến toàn bộ chương trình và các bài thuyết trình kỹ thuật từ Hà Nội.</li>
<li><strong>Vai trò:</strong> Người tham dự Watch Party (Watch Party Attendee).</li>
</ul>
</div>
</section>

<!-- SECTION 2 – KEYNOTE SPEAKERS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Diễn giả chính (Keynote Speakers)</h2>
</div>
<div class="report-prose">
<p>Hội nghị quy tụ các diễn giả và nhà lãnh đạo công nghệ cấp cao trình bày tại phiên khai mạc toàn thể (Keynote):</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 35%;">Diễn giả (Speaker)</th>
<th style="width: 65%;">Chức vụ &amp; Đơn vị công tác (Role &amp; Organization)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hoang Minh</strong></td>
<td>Thứ trưởng Bộ Khoa học và Công nghệ (Deputy Minister of Science and Technology)</td>
</tr>
<tr>
<td><strong>Jennifer Wicks</strong></td>
<td>Đại sứ Hợp chủng quốc Hoa Kỳ tại Việt Nam (U.S. Ambassador to Vietnam)</td>
</tr>
<tr>
<td><strong>Dr. Werner Vogels</strong></td>
<td>Giám đốc Công nghệ (Chief Technology Officer), Amazon.com</td>
</tr>
<tr>
<td><strong>Eric Yeo</strong></td>
<td>Tổng Giám đốc AWS khu vực Malaysia, Việt Nam và Đông Dương (AWS Country General Manager for Malaysia, Vietnam, and Indochina)</td>
</tr>
<tr>
<td><strong>Mai Le</strong></td>
<td>Giám đốc Quản lý Sản phẩm (Director of Product Management), Katalon</td>
</tr>
<tr>
<td><strong>Dr. Jens Lottner</strong></td>
<td>Tổng Giám đốc (Chief Executive Officer), Techcombank</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
<p style="margin: 0; font-size: 13.5px; color: #1e293b;">
<strong>Danh sách 6 diễn giả chính thức:</strong> <strong>Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner</strong>.
</p>
</div>
</div>
</section>

<!-- SECTION 3 – EVENT OVERVIEW -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Tổng quan sự kiện (Event Overview)</h2>
</div>
<div class="report-prose">
<p>Hội nghị tập trung vào các trụ cột công nghệ trọng tâm: Điện toán đám mây hiện đại, dữ liệu nền tảng cho AI (AI-ready Data), ứng dụng các tác tử thông minh (Agentic AI) trong phát triển phần mềm, quy trình di chuyển hạ tầng và tối ưu hóa vận hành đám mây.</p>

<h4 style="font-size: 14.5px; font-weight: 700; color: #171717; margin: 16px 0 8px 0;">Lịch trình hoạt động tổng thể (Official Schedule)</h4>
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Thời gian (UTC+7)</th>
<th style="width: 75%;">Hoạt động chính (Activity)</th>
</tr>
</thead>
<tbody>
<tr>
<td>07:30</td>
<td>Đón khách, check-in và mở cửa khu vực triển lãm công nghệ (Expo)</td>
</tr>
<tr>
<td>09:00</td>
<td>Phiên khai mạc chính thức (Keynote KEY001) tại Grand Ballroom Hà Nội</td>
</tr>
<tr>
<td>10:15</td>
<td>Giải lao kết nối mạng lưới (Networking break) và tham quan triển lãm Expo</td>
</tr>
<tr>
<td>11:00</td>
<td>Chuỗi các phiên thuyết trình kỹ thuật buổi sáng (Morning Technical Sessions)</td>
</tr>
<tr>
<td>12:05</td>
<td>Nghỉ trưa, networking và trải nghiệm giải pháp tại khu triển lãm</td>
</tr>
<tr>
<td>13:10</td>
<td>Chuỗi các phiên kỹ thuật chuyên sâu đầu giờ chiều (Early Afternoon Sessions)</td>
</tr>
<tr>
<td>14:50</td>
<td>Nghỉ giải lao kỹ thuật và trao đổi với các chuyên gia AWS</td>
</tr>
<tr>
<td>15:20</td>
<td>Chuỗi các phiên kỹ thuật cuối buổi chiều (Late Afternoon Sessions)</td>
</tr>
<tr>
<td>17:00</td>
<td>Bế mạc hội nghị (Event Close)</td>
</tr>
</tbody>
</table>
</div>

<p>Tại điểm cầu <em>FCAJ HCMC Watch Party</em>, sinh viên và cộng đồng kỹ sư tại TP. Hồ Chí Minh đã theo dõi trực tiếp bài Keynote KEY001 từ 09:00 và tham gia thảo luận song song phiên kỹ thuật <strong>DVT205 (HCMC Watch Party)</strong> kết nối đồng bộ với phiên <strong>DVT203 (Building software like never before with agentic AI)</strong> tại Grand Ballroom 3 Hà Nội.</p>
</div>
</section>

<!-- SECTION 4 – MAIN TOPICS AND ACTIVITIES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Nội dung chính và hoạt động kỹ thuật (Main Topics & Activities)</h2>
</div>
<div class="report-prose">

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:20px 0 10px 0;">4.1. Keynote và Agentic AI trong phát triển phần mềm</h3>
<ul>
<li><strong>Phiên Keynote KEY001:</strong> Đặt ra bài toán giải quyết các thách thức công nghệ phức tạp bằng các công cụ đám mây thế hệ mới, định hình ba xu hướng chủ đạo: áp dụng AI Agent trong vòng đời phần mềm, hiện đại hóa tải công việc và bảo vệ an ninh hệ thống ngay từ khâu thiết kế.</li>
<li><strong>Phiên DVT205 / DVT203 (Building software like never before with agentic AI):</strong> Phân tích cách thức các tác tử AI tham gia trực tiếp vào quy trình kỹ thuật phần mềm, tự động hóa phân tích mã nguồn, sinh kiểm thử và hỗ trợ lập trình viên cộng tác.</li>
<li><strong>Chuyển đổi từ thử nghiệm sang vận hành thực tế:</strong> Các phiên AIM201 (From Demo to Deployment) và AIM301 (Scaling Multi-Agent Architectures) giải quyết rào cản đưa tác tử AI vào dây chuyền sản xuất; kết hợp cùng phiên PRT301-S và PRT201-S nhấn mạnh yếu tố tin cậy, an toàn và duy trì quyền kiểm soát con người trong luồng nghiệp vụ.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.2. Phân tích dữ liệu và Hạ tầng sẵn sàng cho AI (Data Analytics & AI-Ready Infrastructure)</h3>
<ul>
<li><strong>Nền tảng dữ liệu cho AI:</strong> Các phiên ANT202 và ANT211 làm rõ tầm quan trọng của việc chuẩn hóa chất lượng dữ liệu (Data Quality) và cấu trúc dữ liệu AI-ready trước khi áp dụng các mô hình học máy và tác tử thông minh.</li>
<li><strong>Ứng dụng trong khối tài chính ngân hàng:</strong> Phiên ANT201 hướng dẫn xây dựng các Agent dựa trên dữ liệu cho ngành FSI, kết hợp cùng phiên ANT214 chia sẻ hành trình VPBank quy mô hóa nền tảng dữ liệu với Amazon Redshift.</li>
<li><strong>Xóa bỏ ốc đảo dữ liệu:</strong> Phiên ANT205 trình bày phương thức liên kết các nguồn dữ liệu rời rạc thông qua Amazon Quick Suite, hỗ trợ trích xuất thông tin chi tiết phục vụ kinh doanh.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.3. Hiện đại hóa ứng dụng và An ninh đám mây (Application Modernization & Cloud Security)</h3>
<ul>
<li><strong>Platform Engineering trên EKS:</strong> Phiên DEV205 phân tích mô hình nền tảng lập trình viên nội bộ trên nền tảng Amazon EKS quy mô lớn; phiên DEV208 chia sẻ bài học di chuyển ứng dụng NestJS từ EC2/PM2 sang EKS áp dụng GitOps tự động hóa.</li>
<li><strong>Phân rã nguyên khối sang Microservices:</strong> Phiên MAM203 chia sẻ phương pháp chia nhỏ hệ thống Monolith lên EKS, cùng phiên AIM303 ứng dụng AWS Transform AI Agent để hiện đại hóa đồng bộ các ứng dụng .NET và CSDL SQL Server.</li>
<li><strong>Bảo mật danh tính và ứng dụng:</strong> Phiên DEV401 hướng dẫn kỹ thuật quản trị danh tính khối lượng công việc (Workload Identity); phiên DVT305 giới thiệu AWS Security Agent bảo vệ an ninh ứng dụng chủ động từ thiết kế đến triển khai; phiên AIM203 xây dựng cơ chế phòng thủ chiều sâu (Defense in Depth) cho tải công việc AI.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.4. Vận hành đám mây và Tối ưu hóa chi phí (Cloud Operations & Cost Optimization)</h3>
<ul>
<li><strong>Tối ưu hóa chi phí lưu trữ:</strong> Phiên DEV204 do cộng đồng FCAJ đóng góp hướng dẫn làm chủ các hạng lưu trữ Amazon S3 (S3 Storage Classes), giảm lãng phí tài nguyên lưu trữ dữ liệu tĩnh.</li>
<li><strong>Tự động xử lý lệch hạ tầng:</strong> Phiên DEV206 ứng dụng hệ thống Multi-Agent tự động phát hiện và khắc phục độ lệch hạ tầng (Infrastructure Drift Remediation) trong mã hạ tầng IaC.</li>
<li><strong>Kiểm soát chi phí AI quy mô lớn:</strong> Phiên DEV210 chia sẻ giải pháp thực thi giới hạn ngân sách và giám sát chi tiêu Amazon Bedrock theo thời gian thực tại Vietnam International Bank.</li>
<li><strong>Giám sát toàn diện:</strong> Phiên PRT203-S (Datadog) giới thiệu phương pháp giám sát các chỉ số vận hành vượt ra ngoài Golden Signals truyền thống trong kỷ nguyên GenAI.</li>
</ul>
</div>
</section>

<!-- SECTION 5 – KNOWLEDGE AND LESSONS LEARNED -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Kiến thức và bài học tiếp thu (Knowledge & Lessons Learned)</h2>
</div>
<div class="report-prose">
<p>Thông qua chuỗi bài thuyết trình và thảo luận chuyên sâu tại sự kiện, các bài học kỹ thuật cốt lõi được đúc kết bao gồm:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Trụ cột kiến thức</th>
<th style="width: 75%;">Nội dung đúc kết &amp; Ứng dụng thực tế</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. AI Reliability &amp; Security</strong></td>
<td>Xác định rõ phạm vi quyền hạn và cơ chế xác thực kết quả của tác tử AI trước khi tích hợp vào hệ thống. Cần thiết lập kiểm soát tính chính xác, tỷ lệ lỗi và luôn có cơ chế người duyệt (Human-in-the-loop) đối với các hành động quan trọng.</td>
</tr>
<tr>
<td><strong>2. Data Quality</strong></td>
<td>Dữ liệu là nền móng của hệ thống AI. Cần xác định rõ nguồn dữ liệu có thẩm quyền (authoritative source), thiết lập kiểm soát phân quyền truy cập chặt chẽ và cơ chế đồng bộ làm mới dữ liệu liên tục.</td>
</tr>
<tr>
<td><strong>3. Cloud Architecture</strong></td>
<td>Lựa chọn giải pháp hiện đại hóa ứng dụng phù hợp với hiện trạng hệ thống: chuyển đổi sang container trên Amazon ECS hoặc EKS, kết hợp triển khai tự động qua GitOps để rút ngắn chu kỳ release và giảm thiểu sự cố thủ công.</td>
</tr>
<tr>
<td><strong>4. Monitoring &amp; Cost</strong></td>
<td>Tính toán chi phí và vận hành ngay từ giai đoạn thiết kế kiến trúc. Áp dụng chính sách vòng đời S3 Lifecycle theo tần suất truy cập; đồng thời giám sát lưu lượng token, độ trễ và tỷ lệ lỗi để tối ưu ngân sách Amazon Bedrock.</td>
</tr>
</tbody>
</table>
</div>

<h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 10px 0;">Ứng dụng thực tiễn vào Dự án nhóm (Nutrition E-Commerce)</h4>
<p>Các kiến thức thu hoạch từ sự kiện được đối chiếu và áp dụng trực tiếp vào kiến trúc của dự án nhóm <strong>Nutrition E-Commerce</strong>:</p>
<ul>
<li><strong>Tích hợp Amazon Bedrock cho dữ liệu dinh dưỡng:</strong> Áp dụng Amazon Bedrock để trích xuất tự động thành phần dinh dưỡng từ bảng nhãn thực phẩm và hồ sơ sản phẩm, đồng thời xây dựng giao diện cho phép người dùng xem xét, hiệu chỉnh trước khi lưu vào cơ sở dữ liệu.</li>
<li><strong>Tối ưu hóa chi phí lưu trữ ảnh với Amazon S3:</strong> Phân loại các nhóm dữ liệu hình ảnh sản phẩm và tài liệu kiểm định dinh dưỡng; áp dụng chính sách vòng đời lưu trữ tự động chuyển từ S3 Standard sang S3 Standard-IA sau 30 ngày và S3 Glacier Flexible Retrieval sau 90 ngày cho dữ liệu lịch sử.</li>
<li><strong>Hiện đại hóa nền tảng triển khai với Amazon ECS Fargate:</strong> Đóng gói các dịch vụ API dinh dưỡng vào container và triển khai trên hạ tầng không máy chủ AWS Fargate, kết hợp cấu hình kiểm tra sức khỏe tác vụ (health checks) và Application Load Balancer để đảm bảo độ tin cậy vận hành.</li>
<li><strong>Bảo mật danh tính và quản trị chi phí:</strong> Thiết lập IAM least privilege và Workload Identity cho các microservices, mã hóa dữ liệu với AWS KMS, và giám sát chi tiêu API Amazon Bedrock qua CloudWatch Metrics.</li>
</ul>
</div>
</section>

<!-- SECTION 6 – PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Cảm nhận cá nhân (Personal Reflection)</h2>
</div>
<div class="report-prose">
<p>Việc tham gia theo dõi sự kiện <strong>AWS Cloud and AI Day Hanoi 2026</strong> tại điểm cầu <em>FCAJ HCMC Watch Party</em> là một trải nghiệm học tập công nghệ giá trị trong quá trình thực tập. Dù tham dự từ xa qua tiếp sóng trực tiếp, không khí trao đổi kỹ thuật sôi nổi cùng các đồng nghiệp và cố vấn tại TP. Hồ Chí Minh đã giúp tôi tiếp thu kiến thức một cách chủ động và sâu sắc.</p>
<p>Các bài chia sẻ thực tế từ các diễn giả đầu ngành (Techcombank, VPBank, Katalon, AWS) đã mở rộng tầm nhìn của tôi về bức tranh chuyển đổi số: việc áp dụng Trí tuệ nhân tạo không dừng lại ở mức mô hình trình diễn (demo) mà đòi hỏi nền tảng dữ liệu sạch, kiến trúc đám mây vững chắc, khả năng kiểm soát ngân sách vận hành và an ninh đa tầng. Đây là những nguyên lý chỉ đạo trực tiếp giúp tôi hoàn thiện hệ thống báo cáo thực tập và đóng góp hiệu quả vào dự án công nghệ của nhóm.</p>
</div>
</section>

</article>`
    : `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Events Participated</span>
</a>
<span class="sep">/</span>
<span class="current">Event 1 - AWS Cloud and AI Day Hanoi 2026 (September 29, 2026)</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">EVENT HARVEST REPORT</span>
<span class="badge badge-blue">Cloud Computing &amp; Agentic AI</span>
<span class="badge badge-gray">Official • AWS FCAJ</span>
</div>
<h1 class="report-main-title">AWS CLOUD AND AI DAY HANOI 2026</h1>
<p class="report-main-subtitle">Flagship Conference on Cloud Computing, Agentic AI, and Enterprise Infrastructure Modernization</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Event Name:</span>
<span class="meta-strip-val"><strong>AWS Cloud and AI Day Hanoi 2026</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Date &amp; Time:</span>
<span class="meta-strip-val">07:30 AM – 05:00 PM, Tuesday, September 29, 2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Main Venue:</span>
<span class="meta-strip-val">JW Marriott Hotel Hanoi, Hanoi, Vietnam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Actual Participation:</span>
<span class="meta-strip-val">Watched the live stream from Hanoi at the FCAJ HCMC Watch Party in Ho Chi Minh City</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Role:</span>
<span class="meta-strip-val"><strong>Watch Party Attendee</strong></span>
</div>
</div>
</header>

<!-- Event 1 Check-in Photo -->
<div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Click to view high-definition image">
<img id="event-1-cover-img" src="assets/images/events/event-1.jpg"  alt="AWS Cloud and AI Day Hanoi 2026 – FCAJ HCMC Watch Party" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Authentic student check-in evidence attending the live broadcast of AWS Cloud and AI Day Hanoi 2026 at the FCAJ HCMC Watch Party (September 29, 2026)
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Event Information</h2>
</div>
<div class="report-prose">
<p><strong>AWS Cloud and AI Day Hanoi 2026</strong> was a major one-day flagship conference organized by Amazon Web Services (AWS), bringing together solutions architects, lead engineers, enterprise technology executives, and government representatives in Vietnam.</p>
<ul>
<li><strong>Official Event Name:</strong> AWS Cloud and AI Day Hanoi 2026</li>
<li><strong>Date:</strong> Tuesday, September 29, 2026</li>
<li><strong>Main Venue:</strong> JW Marriott Hotel Hanoi, Hanoi, Vietnam</li>
<li><strong>Actual Participation:</strong> Watched the live stream from Hanoi at the <em>FCAJ HCMC Watch Party</em> in Ho Chi Minh City, actively participating in technical discussions with peers and mentors.</li>
<li><strong>Role:</strong> Watch Party Attendee.</li>
</ul>
</div>
</section>

<!-- SECTION 2 – KEYNOTE SPEAKERS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Keynote Speakers</h2>
</div>
<div class="report-prose">
<p>The conference featured distinguished keynote speakers and senior executives at the plenary opening session:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 35%;">Speaker</th>
<th style="width: 65%;">Role &amp; Organization</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hoang Minh</strong></td>
<td>Deputy Minister of Science and Technology</td>
</tr>
<tr>
<td><strong>Jennifer Wicks</strong></td>
<td>U.S. Ambassador to Vietnam</td>
</tr>
<tr>
<td><strong>Dr. Werner Vogels</strong></td>
<td>Chief Technology Officer, Amazon.com</td>
</tr>
<tr>
<td><strong>Eric Yeo</strong></td>
<td>AWS Country General Manager for Malaysia, Vietnam, and Indochina</td>
</tr>
<tr>
<td><strong>Mai Le</strong></td>
<td>Director of Product Management, Katalon</td>
</tr>
<tr>
<td><strong>Dr. Jens Lottner</strong></td>
<td>Chief Executive Officer, Techcombank</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
<p style="margin: 0; font-size: 13.5px; color: #1e293b;">
<strong>Official Keynote Speakers:</strong> <strong>Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner</strong>.
</p>
</div>
</div>
</section>

<!-- SECTION 3 – EVENT OVERVIEW -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Event Overview</h2>
</div>
<div class="report-prose">
<p>The program comprehensively explored foundational pillars of enterprise technology: modern cloud computing, AI-ready data infrastructure, agentic AI in software engineering, workload migration, and cloud operational excellence.</p>

<h4 style="font-size: 14.5px; font-weight: 700; color: #171717; margin: 16px 0 8px 0;">Main Event Schedule (UTC+7)</h4>
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Time</th>
<th style="width: 75%;">Activity</th>
</tr>
</thead>
<tbody>
<tr>
<td>07:30</td>
<td>Check-in, badge collection, and Expo opening</td>
</tr>
<tr>
<td>09:00</td>
<td>Opening Keynote (KEY001) at Grand Ballroom, JW Marriott Hanoi</td>
</tr>
<tr>
<td>10:15</td>
<td>Networking break and technology exhibition exploration</td>
</tr>
<tr>
<td>11:00</td>
<td>Morning technical breakout sessions</td>
</tr>
<tr>
<td>12:05</td>
<td>Networking lunch and partner showcase</td>
</tr>
<tr>
<td>13:10</td>
<td>Early afternoon specialized technical tracks</td>
</tr>
<tr>
<td>14:50</td>
<td>Technical break and consultations with AWS specialists</td>
</tr>
<tr>
<td>15:20</td>
<td>Late afternoon deep-dive sessions</td>
</tr>
<tr>
<td>17:00</td>
<td>Event close</td>
</tr>
</tbody>
</table>
</div>

<p>At the <em>FCAJ HCMC Watch Party</em>, attendees joined the live stream of the KEY001 keynote at 09:00 and engaged directly with the <strong>DVT205 (HCMC Watch Party)</strong> session, which matched the topic of <strong>DVT203 (Building software like never before with agentic AI)</strong> held in Grand Ballroom 3 in Hanoi.</p>
</div>
</section>

<!-- SECTION 4 – MAIN TOPICS AND ACTIVITIES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Main Topics &amp; Technical Activities</h2>
</div>
<div class="report-prose">

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:20px 0 10px 0;">4.1. Keynote and Agentic AI in Software Development</h3>
<ul>
<li><strong>Keynote KEY001:</strong> Framed around solving ambitious technological challenges with cloud and AI primitives, highlighting three core directions: embedding AI agents in software pipelines, workload modernization, and defense-in-depth system security.</li>
<li><strong>DVT205 / DVT203 (Building software like never before with agentic AI):</strong> Detailed how autonomous AI agents actively assist developers throughout the software lifecycle, from requirements analysis and code generation to automated testing and code review.</li>
<li><strong>Transitioning from Demo to Production:</strong> Sessions AIM201 (From Demo to Deployment) and AIM301 (Scaling Multi-Agent Architectures) addressed practical hurdles in operationalizing AI agents; PRT301-S and PRT201-S emphasized human governance, reliability, and security guardrails.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.2. Data Analytics and AI-Ready Infrastructure</h3>
<ul>
<li><strong>Building AI-Ready Data Foundations:</strong> Sessions ANT202 and ANT211 established the critical necessity of authoritative data quality, cataloging, and low-latency access before deploying generative AI models.</li>
<li><strong>Financial Services Industry Applications:</strong> ANT201 provided builder guidance on data-driven agents for FSI, complemented by ANT214 highlighting VPBank's experience scaling enterprise data on Amazon Redshift.</li>
<li><strong>Unifying Siloed Data:</strong> ANT205 demonstrated cross-silo analytics using Amazon Quick Suite to derive complete business insights.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.3. Application Modernization and Cloud Security</h3>
<ul>
<li><strong>Internal Developer Platforms on EKS:</strong> DEV205 illustrated platform engineering at scale on Amazon EKS; DEV208 shared lessons from migrating NestJS workloads from EC2/PM2 to EKS powered by GitOps.</li>
<li><strong>Monolith to Microservices:</strong> MAM203 outlined structured patterns for decomposing monolithic services onto EKS; AIM303 introduced AWS Transform AI Agent to automate the modernization of .NET and SQL Server workloads.</li>
<li><strong>Workload Identity &amp; AppSec:</strong> DEV401 explored advanced workload identity engineering; DVT305 showcased AWS Security Agent for proactive security from code to production; AIM203 addressed multi-tier defense in depth for agentic systems.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.4. Cloud Operations and Cost Optimization</h3>
<ul>
<li><strong>Storage Cost Optimization:</strong> DEV204, contributed by FCAJ, provided practical strategies for mastering Amazon S3 Storage Classes to eliminate unnecessary cloud expenditure.</li>
<li><strong>Infrastructure Drift Remediation:</strong> DEV206 detailed multi-agent workflows for automated drift detection and correction in Terraform / IaC repositories.</li>
<li><strong>Amazon Bedrock Spend Governance:</strong> DEV210 analyzed real-time cost control mechanisms and spend enforcement for enterprise Amazon Bedrock deployments at scale.</li>
<li><strong>Observability in the GenAI Era:</strong> PRT203-S (Datadog) detailed monitoring strategies beyond traditional golden signals for non-deterministic AI workloads.</li>
</ul>
</div>
</section>

<!-- SECTION 5 – KNOWLEDGE AND LESSONS LEARNED -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Knowledge &amp; Lessons Learned</h2>
</div>
<div class="report-prose">
<p>Key takeaways and technical insights acquired from the conference tracks:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Core Domain</th>
<th style="width: 75%;">Key Insights &amp; Engineering Principles</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. AI Reliability &amp; Security</strong></td>
<td>Define explicit boundaries, evaluation metrics, and verification mechanisms before deploying autonomous agents. Ensure strict guardrails against hallucinations, measure error rates, and mandate human-in-the-loop sign-off for state-modifying actions.</td>
</tr>
<tr>
<td><strong>2. Data Quality</strong></td>
<td>Authoritative, well-governed, and continuously refreshed data is the non-negotiable foundation for intelligent agents and analytics workloads.</td>
</tr>
<tr>
<td><strong>3. Cloud Architecture</strong></td>
<td>Align application modernization with concrete operational bottlenecks: leverage containerization (Amazon ECS/EKS) and declarative GitOps delivery to shorten release cycles and minimize deployment blast radius.</td>
</tr>
<tr>
<td><strong>4. Monitoring &amp; Cost</strong></td>
<td>Integrate operational observability and cost tracking into system architecture from day one. Apply lifecycle tiering to Amazon S3 data and continuously track token spend and inference latency on Amazon Bedrock.</td>
</tr>
</tbody>
</table>
</div>

<h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 10px 0;">Application to Nutrition E-Commerce Project</h4>
<p>The architectural concepts gained from the conference directly inform our group capstone project, <strong>Nutrition E-Commerce</strong>:</p>
<ul>
<li><strong>Amazon Bedrock for Nutrition Extraction:</strong> Deploying foundation models on Amazon Bedrock to extract nutritional profiles and allergen data from food label uploads, accompanied by a verification UI where users confirm extracted information before database persistence.</li>
<li><strong>S3 Storage Lifecycle Optimization:</strong> Applying automated S3 Lifecycle policies to product imagery and inspection documents, transitioning files from S3 Standard to S3 Standard-IA after 30 days and archiving historical compliance logs to S3 Glacier Flexible Retrieval after 90 days.</li>
<li><strong>Microservices on Amazon ECS Fargate:</strong> Containerizing the core product catalog and nutritional recommendation APIs onto serverless AWS Fargate, paired with automated Application Load Balancer health checks for high service availability.</li>
<li><strong>Identity &amp; Cost Control:</strong> Enforcing least-privilege IAM roles and Workload Identity for containerized services, encrypting sensitive personal dietary records with AWS KMS, and implementing CloudWatch budget alerts on Amazon Bedrock invocation costs.</li>
</ul>
</div>
</section>

<!-- SECTION 6 – PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Personal Reflection</h2>
</div>
<div class="report-prose">
<p>Attending the live broadcast of <strong>AWS Cloud and AI Day Hanoi 2026</strong> from the <em>FCAJ HCMC Watch Party</em> in Ho Chi Minh City provided immense technical value and inspiration. Participating in discussions alongside fellow student builders and experienced AWS community mentors helped bridge theoretical cloud concepts with enterprise realities.</p>
<p>Presentations from enterprise leaders (Techcombank, VPBank, Katalon, and AWS) reinforced that sustainable AI adoption requires more than proof-of-concept demos—it demands dependable data engineering, robust container platforms, strict governance, and real-time operational discipline. These takeaways directly guided my contributions to our team project and elevated the technical rigor of this internship report.</p>
</div>
</section>

</article>`;
}

function renderFiresideChatEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';
  container.innerHTML = isVi
    ? `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Sự kiện tham gia</span>
</a>
<span class="sep">/</span>
<span class="current">Sự kiện 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">BÁO CÁO THU HOẠCH SỰ KIỆN</span>
<span class="badge badge-blue">Điện toán Đám mây &amp; Trí tuệ Nhân tạo</span>
<span class="badge badge-gray">Chính thức • AWS Community</span>
</div>
<h1 class="report-main-title">FIRESIDE CHAT WITH DR. WERNER VOGELS</h1>
<p class="report-main-subtitle">Kỹ thuật xây dựng hệ thống quy mô lớn, Renaissance Developer và tương lai của trí tuệ nhân tạo</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Tên sự kiện:</span>
<span class="meta-strip-val"><strong>Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Ngày tổ chức:</span>
<span class="meta-strip-val">Thứ Sáu, ngày 02/10/2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Thời gian:</span>
<span class="meta-strip-val">08:30 – 12:00 (giờ Việt Nam)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Địa điểm / Hình thức:</span>
<span class="meta-strip-val">Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Diễn giả:</span>
<span class="meta-strip-val"><strong>Dr. Werner Vogels</strong> (Phó Chủ tịch kiêm CTO, Amazon.com)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Vai trò:</span>
<span class="meta-strip-val"><strong>Người tham dự (Attendee)</strong></span>
</div>
</div>
</header>

<!-- Event 2 Cover Photo -->
<div id="event-2-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Nhấp để xem ảnh độ nét cao (HD)">
<img id="event-2-cover-img" src="assets/images/events/event-2.jpg"  alt="Fireside Chat with Dr. Werner Vogels – Cloud &amp; AI in Vietnam" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Ảnh 1: Hình ảnh tập thể tại sự kiện Fireside Chat với Dr. Werner Vogels – Navigating the Future of Cloud & AI in Vietnam, ngày 02/10/2026.
</div>
</div>

<!-- PHẦN 1 – THÔNG TIN SỰ KIỆN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Thông tin sự kiện</h2>
</div>
<div class="report-prose">
<ul>
<li><strong>Tên sự kiện:</strong> Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</li>
<li><strong>Ngày tổ chức:</strong> Thứ Sáu, ngày 02/10/2026</li>
<li><strong>Thời gian:</strong> 08:30 – 12:00 (giờ Việt Nam)</li>
<li><strong>Diễn giả:</strong> Dr. Werner Vogels</li>
<li><strong>Chức danh:</strong> Phó Chủ tịch kiêm Giám đốc Công nghệ (CTO), Amazon.com</li>
<li><strong>Vai trò:</strong> Người tham dự</li>
<li><strong>Địa điểm / Hình thức tham gia:</strong> Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam</li>
<li><strong>Video sự kiện:</strong> <a href="https://www.youtube.com/watch?v=jWjOIfMA9qc&t=1s" target="_blank" rel="noopener noreferrer">Xem trên YouTube</a></li>
</ul>
</div>
</section>

<!-- PHẦN 2 – MỤC TIÊU SỰ KIỆN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Mục tiêu sự kiện</h2>
</div>
<div class="report-prose">
<p>Buổi Fireside Chat mang đến những góc nhìn về tương lai của điện toán đám mây và trí tuệ nhân tạo tại Việt Nam.</p>
<p>Các mục tiêu chính gồm:</p>
<ul>
<li>Tìm hiểu xu hướng phát triển AWS Cloud và AI tại Việt Nam.</li>
<li>Tiếp cận tư duy thiết kế, xây dựng và vận hành hệ thống quy mô lớn.</li>
<li>Khám phá sự thay đổi của quy trình phát triển ứng dụng khi AI ngày càng phổ biến.</li>
<li>Hiểu rõ vai trò và trách nhiệm của lập trình viên trong kỷ nguyên AI.</li>
<li>Học hỏi tư duy kỹ thuật từ lãnh đạo công nghệ của Amazon.</li>
</ul>
</div>
</section>

<!-- PHẦN 3 – DIỄN GIẢ -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Diễn giả</h2>
</div>
<div class="report-prose">
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 16px; margin: 16px 0;">
<h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Dr. Werner Vogels</h3>
<p style="margin: 0; font-size: 14px; color: #475569; font-weight: 600;">Phó Chủ tịch kiêm Giám đốc Công nghệ (CTO), Amazon.com</p>
</div>
<p>Dr. Werner Vogels là nhà lãnh đạo công nghệ có nhiều kinh nghiệm trong lĩnh vực điện toán đám mây, hệ thống phân tán và kiến trúc phần mềm quy mô lớn.</p>
<p>Trong buổi trao đổi, ông chia sẻ những góc nhìn về sự hình thành và phát triển của AWS, tư duy xây dựng hệ thống lớn và tương lai của ngành phát triển phần mềm dưới tác động của AI.</p>
<p>Những nội dung này nhấn mạnh vai trò lâu dài của kiến thức nền tảng, khả năng đưa ra quyết định kỹ thuật và tinh thần học tập liên tục.</p>
</div>
</section>

<!-- PHẦN 4 – NỘI DUNG NỔI BẬT -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Nội dung nổi bật</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">4.1. Sự hình thành và phát triển của AWS</h3>
<p>Buổi trao đổi đề cập đến quá trình hình thành Amazon Web Services và sự phát triển của nền tảng điện toán đám mây.</p>
<p>Các nội dung chính gồm:</p>
<ul>
<li>Tư duy ban đầu trong việc xây dựng hạ tầng đám mây.</li>
<li>Phát triển dịch vụ phù hợp với nhiều nhóm khách hàng.</li>
<li>Thiết kế hệ thống có thể mở rộng từ ứng dụng nhỏ đến quy mô toàn cầu.</li>
<li>Lấy nhu cầu thực tế của khách hàng làm cơ sở cho các quyết định công nghệ.</li>
</ul>
<p>Chủ đề này cho thấy điện toán đám mây giúp tổ chức tiếp cận hạ tầng linh hoạt mà không cần tự xây dựng toàn bộ hệ thống.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.2. Tư duy kỹ thuật khi xây dựng hệ thống quy mô lớn</h3>
<p>Một chủ đề quan trọng khác là những thách thức trong thiết kế và vận hành hệ thống phục vụ lượng lớn người dùng.</p>
<p>Các yếu tố được nhấn mạnh gồm:</p>
<ul>
<li>Khả năng mở rộng hệ thống (Scalability).</li>
<li>Độ tin cậy và tính sẵn sàng (Reliability &amp; Availability).</li>
<li>Tự động hóa quy trình vận hành (Operational Automation).</li>
<li>Khả năng phục hồi khi xảy ra sự cố (Resilience).</li>
<li>Giám sát và bảo trì hệ thống lâu dài (Observability &amp; Maintainability).</li>
</ul>
<p>Qua đó, tôi hiểu rằng phát triển phần mềm không chỉ là xây dựng chức năng mà còn phải đảm bảo hệ thống có khả năng vận hành ổn định trong dài hạn.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.3. Khái niệm Renaissance Developer</h3>
<p>Dr. Werner Vogels giới thiệu khái niệm <em>Renaissance Developer</em>, thể hiện sự thay đổi trong vai trò của lập trình viên khi các công cụ AI ngày càng phát triển.</p>
<p>Lập trình viên hiện đại không chỉ cần biết viết mã nguồn mà còn cần hiểu kiến trúc hệ thống, có khả năng giải quyết vấn đề, giao tiếp hiệu quả và đánh giá các quyết định kỹ thuật.</p>
<p>Các công cụ AI có thể hỗ trợ công việc phát triển phần mềm, nhưng kiến thức và trách nhiệm của con người vẫn giữ vai trò quan trọng.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.4. AI, phát triển nguyên mẫu và trách nhiệm kỹ thuật</h3>
<p>Trí tuệ nhân tạo giúp rút ngắn thời gian chuyển ý tưởng thành sản phẩm nguyên mẫu.</p>
<p>AI có thể hỗ trợ sinh mã, gợi ý giải pháp và tự động hóa các công việc lặp lại.</p>
<p>Tuy nhiên, tốc độ phát triển nhanh hơn không đồng nghĩa với chất lượng phần mềm tốt hơn.</p>
<p>Lập trình viên vẫn cần:</p>
<ul>
<li>Kiểm tra mã nguồn do AI tạo ra.</li>
<li>Xác minh hoạt động của ứng dụng.</li>
<li>Kiểm thử các chức năng quan trọng.</li>
<li>Xác định những rủi ro bảo mật và độ tin cậy.</li>
<li>Đưa ra quyết định thiết kế kiến trúc phù hợp.</li>
</ul>
<p>Điều này cho thấy AI là công cụ hỗ trợ năng lực kỹ thuật, không thay thế trách nhiệm của người phát triển.</p>
</div>
</section>

<!-- PHẦN 5 – KIẾN THỨC VÀ BÀI HỌC TIẾP THU -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Kiến thức và bài học tiếp thu</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">5.1. Tư duy kỹ thuật và kiến trúc hệ thống</h3>
<ul>
<li><strong>Tư duy khả năng mở rộng:</strong> Khi thiết kế ứng dụng, cần cân nhắc khả năng mở rộng trong tương lai nhưng vẫn phải lựa chọn kiến trúc phù hợp với yêu cầu thực tế.</li>
<li><strong>Tư duy xây dựng nguyên mẫu:</strong> AI có thể giúp thử nghiệm ý tưởng nhanh hơn. Tuy nhiên, trước khi triển khai thực tế, nguyên mẫu vẫn cần được kiểm thử và đánh giá.</li>
<li><strong>Kiến thức nền tảng:</strong> Kiến thức về lập trình, kiến trúc hệ thống, hệ thống phân tán và kỹ năng giải quyết vấn đề vẫn cần thiết ngay cả khi công cụ AI ngày càng hiện đại.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.2. Sự thay đổi của ngành phát triển phần mềm</h3>
<p>Buổi trao đổi giúp tôi hiểu rõ hơn sự thay đổi trong vai trò của kỹ sư phần mềm.</p>
<p>Lập trình viên cần kết hợp kỹ năng lập trình với tư duy kiến trúc, khả năng phân tích và kỹ năng sử dụng AI một cách hiệu quả.</p>
<p>AI có thể giảm bớt những công việc lặp lại để lập trình viên dành nhiều thời gian hơn cho các vấn đề kỹ thuật phức tạp và chất lượng sản phẩm.</p>
<p>Việc liên tục học hỏi và cập nhật công nghệ là yếu tố quan trọng đối với định hướng nghề nghiệp.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.3. Ứng dụng thực tế</h3>
<ul>
<li><strong>Tích hợp AI vào quy trình phát triển:</strong> Có thể sử dụng các công cụ AI để hỗ trợ lập trình, viết tài liệu, chuẩn bị kiểm thử và xây dựng nguyên mẫu. Tuy nhiên, kết quả do AI tạo ra vẫn cần được kiểm tra.</li>
<li><strong>Cải thiện thiết kế hệ thống:</strong> Tư duy xây dựng hệ thống quy mô lớn có thể được vận dụng trong thiết kế kiến trúc, triển khai, giám sát và đảm bảo độ tin cậy cho các dự án cá nhân hoặc dự án nhóm.</li>
<li><strong>Nâng cao khả năng tự học:</strong> Sự kiện khuyến khích tinh thần chủ động tìm hiểu AWS Cloud, AI và các công nghệ mới thông qua tài liệu chính thức, dự án thực tế và chương trình First Cloud AI Journey.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.4. Liên hệ với dự án Nutrition E-Commerce</h3>
<p>Những kiến thức từ buổi Fireside Chat có thể liên hệ với dự án nhóm Nutrition E-Commerce:</p>
<ul>
<li><strong>Kiến trúc đám mây:</strong> Tìm hiểu vai trò của Amazon ECS Fargate, Application Load Balancer, Amazon RDS và Amazon CloudFront trong thiết kế tổng thể.</li>
<li><strong>Tích hợp AI:</strong> Xem xét cách Amazon Bedrock hỗ trợ các chức năng ứng dụng và tầm quan trọng của việc đánh giá kết quả AI.</li>
<li><strong>Độ tin cậy phần mềm:</strong> Hiểu rõ vai trò của kiểm thử, xác minh triển khai và giám sát hệ thống trước khi đưa ứng dụng vào sử dụng.</li>
<li><strong>Năng suất phát triển:</strong> Tìm hiểu cách AI hỗ trợ xây dựng nguyên mẫu và tài liệu kỹ thuật nhưng không thay thế việc đánh giá của lập trình viên.</li>
</ul>
<p><em>Đây là những nội dung liên hệ kiến thức với dự án, không phải khẳng định tôi đã trực tiếp triển khai tất cả dịch vụ trong buổi sự kiện.</em></p>
</div>
</section>

<!-- PHẦN 6 – TRẢI NGHIỆM VÀ CẢM NHẬN CÁ NHÂN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Trải nghiệm và cảm nhận cá nhân</h2>
</div>
<div class="report-prose">
<p>Tham gia buổi Fireside Chat với Dr. Werner Vogels là cơ hội hữu ích để tìm hiểu tương lai của điện toán đám mây và trí tuệ nhân tạo dưới góc nhìn của một nhà lãnh đạo công nghệ giàu kinh nghiệm.</p>
<p>Có hai nội dung khiến tôi đặc biệt quan tâm:</p>
<ul>
<li><strong>Học hỏi từ chuyên gia công nghệ:</strong> Buổi trao đổi giúp tôi có góc nhìn rộng hơn về những nguyên tắc xây dựng nền tảng đám mây và các thách thức khi phát triển hệ thống có quy mô lớn.</li>
<li><strong>Nhận thức về Renaissance Developer:</strong> Tôi hiểu rõ hơn rằng lập trình viên hiện đại không chỉ cần kiến thức lập trình mà còn phải có tư duy hệ thống, kỹ năng giao tiếp, khả năng đánh giá kỹ thuật và tinh thần học hỏi liên tục.</li>
</ul>
<div class="report-quote-box" style="border-left-color: #171717; font-weight: 700; color: #171717; font-size: 15px; margin: 22px 0;">
“AI có thể giúp tăng tốc quá trình phát triển phần mềm, nhưng con người vẫn phải chịu trách nhiệm về chất lượng, bảo mật và độ tin cậy của sản phẩm.”
</div>
<p>Trải nghiệm này giúp tôi có thêm động lực tiếp tục học tập AWS Cloud, kiến trúc ứng dụng và các công nghệ AI trong chương trình First Cloud AI Journey.</p>

<!-- Tags -->
<div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
#AWS #WernerVogels #FiresideChat #CloudAI #RenaissanceDeveloper #EngineeringAtScale #FirstCloudAIJourney
</div>
</div>
</section>

<!-- Bottom Navigation Actions -->
<div class="report-bottom-actions">
<button type="button" class="btn btn-outline" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
<button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<span>↑ Lên đầu trang</span>
</button>
</div>
</article>`
    : `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Events Participated</span>
</a>
<span class="sep">/</span>
<span class="current">Event 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">EVENT HARVEST REPORT</span>
<span class="badge badge-blue">Cloud Computing &amp; Artificial Intelligence</span>
<span class="badge badge-gray">Official • AWS Community</span>
</div>
<h1 class="report-main-title">FIRESIDE CHAT WITH DR. WERNER VOGELS</h1>
<p class="report-main-subtitle">Engineering at Scale, the Renaissance Developer, and the Future of Artificial Intelligence</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Event Name:</span>
<span class="meta-strip-val"><strong>Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Event Date:</span>
<span class="meta-strip-val">Friday, October 2, 2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Date &amp; Time:</span>
<span class="meta-strip-val">08:30 AM – 12:00 PM, October 2, 2026 (UTC+7)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Location / Format:</span>
<span class="meta-strip-val">26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Speaker:</span>
<span class="meta-strip-val"><strong>Dr. Werner Vogels</strong> (Vice President &amp; CTO, Amazon.com)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Role:</span>
<span class="meta-strip-val"><strong>Attendee</strong></span>
</div>
</div>
</header>

<!-- Event 2 Cover Photo -->
<div id="event-2-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Click to view high-definition image">
<img id="event-2-cover-img" src="assets/images/events/event-2.jpg"  alt="Fireside Chat with Dr. Werner Vogels – Cloud &amp; AI in Vietnam" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Photo 1: Group photo from the Fireside Chat with Dr. Werner Vogels – Navigating the Future of Cloud & AI in Vietnam, October 2, 2026.
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Event Information</h2>
</div>
<div class="report-prose">
<ul>
<li><strong>Event Name:</strong> Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</li>
<li><strong>Event Date:</strong> Friday, October 2, 2026</li>
<li><strong>Date &amp; Time:</strong> 08:30 AM – 12:00 PM, October 2, 2026 (UTC+7)</li>
<li><strong>Speaker:</strong> Dr. Werner Vogels</li>
<li><strong>Speaker Position:</strong> Vice President and Chief Technology Officer (CTO), Amazon.com</li>
<li><strong>Participation Role:</strong> Attendee</li>
<li><strong>Event Location / Participation Format:</strong> 26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam</li>
<li><strong>Event Video:</strong> <a href="https://www.youtube.com/watch?v=jWjOIfMA9qc&t=1s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></li>
</ul>
</div>
</section>

<!-- SECTION 2 – EVENT OBJECTIVES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Event Objectives</h2>
</div>
<div class="report-prose">
<p>The Fireside Chat aimed to provide insights into the future of cloud computing and artificial intelligence in Vietnam.</p>
<p>The main objectives included:</p>
<ul>
<li>Exploring the future of AWS Cloud and AI adoption in Vietnam.</li>
<li>Understanding engineering principles for building reliable systems at scale.</li>
<li>Discovering how AI is transforming application development and software engineering.</li>
<li>Learning about the evolving responsibilities of developers in the AI era.</li>
<li>Developing a broader engineering mindset through the experiences of AWS technology leadership.</li>
</ul>
</div>
</section>

<!-- SECTION 3 – SPEAKER -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Speaker</h2>
</div>
<div class="report-prose">
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 16px; margin: 16px 0;">
<h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Dr. Werner Vogels</h3>
<p style="margin: 0; font-size: 14px; color: #475569; font-weight: 600;">Vice President and Chief Technology Officer (CTO), Amazon.com</p>
</div>
<p>Dr. Werner Vogels is a technology leader known for his experience in cloud computing, distributed systems, and large-scale software architectures.</p>
<p>During the discussion, he shared perspectives on the development of AWS, engineering at scale, and the future of software development in an AI-driven world.</p>
<p>His insights emphasized the continuing importance of engineering fundamentals, technical judgment, and lifelong learning.</p>
</div>
</section>

<!-- SECTION 4 – KEY HIGHLIGHTS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Key Highlights</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">4.1. The Origins and Evolution of AWS</h3>
<p>The discussion explored the origins of Amazon Web Services and its evolution into a major cloud computing platform.</p>
<p>Key points included:</p>
<ul>
<li>The early thinking behind developing cloud infrastructure.</li>
<li>Building cloud services that support different customer needs.</li>
<li>Designing systems that can grow from small applications to global-scale workloads.</li>
<li>Using customer requirements to guide technology decisions.</li>
</ul>
<p>This topic highlighted how cloud computing enables organizations to access scalable infrastructure without building every component themselves.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.2. Engineering at Scale</h3>
<p>Another major theme was the challenge of designing and operating systems serving large numbers of users.</p>
<p>Important engineering considerations included:</p>
<ul>
<li>Scalability and workload growth.</li>
<li>Reliability and service availability.</li>
<li>Automation and operational efficiency.</li>
<li>Resilient system design.</li>
<li>Monitoring and long-term maintainability.</li>
</ul>
<p>The discussion emphasized that successful software engineering involves more than building features. Systems must also remain dependable as their complexity and usage increase.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.3. The Renaissance Developer</h3>
<p>Dr. Werner Vogels introduced the concept of the <em>Renaissance Developer</em>, describing how software engineers must adapt as AI tools become more capable.</p>
<p>Modern developers need to develop skills beyond writing source code.</p>
<p>They should also understand system architecture, solve complex problems, communicate effectively, and evaluate technical decisions.</p>
<p>AI assistants can support everyday development activities, but human knowledge and responsibility remain essential.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.4. AI, Prototyping, and Engineering Responsibility</h3>
<p>Artificial intelligence can significantly accelerate the process of turning ideas into working prototypes.</p>
<p>AI tools may help developers generate initial code, explore solutions, and automate repetitive tasks.</p>
<p>However, faster development does not automatically guarantee software quality.</p>
<p>Developers must still:</p>
<ul>
<li>Review AI-generated code.</li>
<li>Validate application behavior.</li>
<li>Test important functionalities.</li>
<li>Identify security and reliability risks.</li>
<li>Make informed architectural decisions.</li>
</ul>
<p>The discussion reinforced the idea that AI should support engineering expertise rather than replace it.</p>
</div>
</section>

<!-- SECTION 5 – KEY LEARNINGS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Key Learnings</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">5.1. Engineering Mindset and Architecture</h3>
<ul>
<li><strong>Scalability-first thinking:</strong> Developers should consider how their systems might evolve as application requirements and workloads change. Scalability is important, but the chosen architecture should remain appropriate to actual project needs.</li>
<li><strong>Prototyping mindset:</strong> AI tools can help teams evaluate ideas quickly and experiment with different approaches. Before deployment, prototypes still require testing, refinement, and technical validation.</li>
<li><strong>Engineering fundamentals:</strong> Core knowledge of programming, system architecture, distributed systems, and problem-solving remains valuable even as development tools evolve.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.2. The Evolution of Software Development</h3>
<p>The discussion helped me better understand the changing role of software engineers.</p>
<p>Developers are increasingly expected to combine coding skills with architecture, analytical thinking, and the ability to work effectively with AI assistants.</p>
<p>AI can reduce repetitive work, allowing developers to devote more attention to technical challenges and software quality.</p>
<p>Continuous learning is essential to staying current with cloud computing and AI technologies.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.3. Practical Applications</h3>
<ul>
<li><strong>Integrating AI into development workflows:</strong> AI assistants can support coding, documentation, code review, testing preparation, and rapid prototyping. Their results still require human validation.</li>
<li><strong>Improving system design:</strong> Engineering-at-scale principles can guide decisions about reliability, deployment, monitoring, and scalability in individual or group projects.</li>
<li><strong>Strengthening self-learning:</strong> The session encouraged proactive learning through AWS documentation, practical projects, and programs such as First Cloud AI Journey.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.4. Application to Nutrition E-Commerce</h3>
<p>The ideas discussed in the Fireside Chat are relevant to the Nutrition E-Commerce group project:</p>
<ul>
<li><strong>Cloud architecture:</strong> Reviewing the roles of Amazon ECS Fargate, Application Load Balancer, Amazon RDS, and Amazon CloudFront in the overall system design.</li>
<li><strong>AI integration:</strong> Considering how Amazon Bedrock can support application features while maintaining appropriate validation and security controls.</li>
<li><strong>Software reliability:</strong> Understanding the importance of testing, deployment verification, and monitoring before considering an application ready for users.</li>
<li><strong>Development productivity:</strong> Exploring how AI-assisted development can help with prototyping and documentation without replacing human technical judgment.</li>
</ul>
<p><em>These points describe how the session's concepts relate to the project. They do not imply that every technology was personally implemented during the event.</em></p>
</div>
</section>

<!-- SECTION 6 – EVENT EXPERIENCE AND PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Event Experience and Personal Reflection</h2>
</div>
<div class="report-prose">
<p>Attending the Fireside Chat with Dr. Werner Vogels was a valuable opportunity to explore the future of cloud computing and artificial intelligence from the perspective of an experienced technology leader.</p>
<p>Two ideas stood out to me:</p>
<ul>
<li><strong>Learning from technology leadership:</strong> The discussion provided a broader perspective on the principles behind cloud platforms and the challenges of building reliable systems at scale.</li>
<li><strong>Understanding the Renaissance Developer:</strong> I gained a clearer understanding that modern developers need more than programming knowledge. They must develop systems thinking, communication skills, technical judgment, and the ability to learn continuously.</li>
</ul>
<div class="report-quote-box" style="border-left-color: #171717; font-weight: 700; color: #171717; font-size: 15px; margin: 22px 0;">
“AI can make software development faster, but developers remain responsible for the quality, security, and reliability of their solutions.”
</div>
<p>This experience strengthened my motivation to continue learning AWS Cloud, application architecture, and AI technologies throughout my First Cloud AI Journey.</p>

<!-- Tags -->
<div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
#AWS #WernerVogels #FiresideChat #CloudAI #RenaissanceDeveloper #EngineeringAtScale #FirstCloudAIJourney
</div>
</div>
</section>

<!-- Bottom Navigation Actions -->
<div class="report-bottom-actions">
<button type="button" class="btn btn-outline" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
<button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<span>↑ Back to top</span>
</button>
</div>
</article>`;
}

function renderMeetupEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 3 - First Cloud AI Journey Meetup (24/10/2026)" : "Event 3 - First Cloud AI Journey Meetup (October 24, 2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Cloud Computing, Cloud Security & AI Agents",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FIRST CLOUD AI JOURNEY MEETUP",
    subtitle: isVi
      ? "Khám phá AWS Cloud, Cloud Security và Tương lai của AI Agents"
      : "Exploring AWS Cloud, Cloud Security, and the Future of AI Agents",
    eventName: "First Cloud AI Journey Meetup – 24/10/2026",
    dateTime: isVi ? "08:00 – 12:00, 24/10/2026" : "08:00 AM – 12:00 PM, October 24, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 2 Check-in Photo -->
      <div id="event-3-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-3.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-3-cover-img"
               src="assets/images/events/event-3.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-3-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-3-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện First Cloud AI Journey Meetup (24/10/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at First Cloud AI Journey Meetup (October 24, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? '<strong>First Cloud AI Journey Meetup</strong> tập trung vào năm chủ đề chính: <strong>Voice AI</strong>, <strong>AWS Resource Access Manager (RAM)</strong>, <strong>AI-assisted Penetration Testing</strong>, <strong>Amazon Bedrock AgentCore</strong> và <strong>Kiro Crew</strong>.'
            : 'The <strong>First Cloud AI Journey Meetup</strong> focused on five core technical domains: <strong>Voice AI</strong>, <strong>AWS Resource Access Manager (RAM)</strong>, <strong>AI-assisted Penetration Testing</strong>, <strong>Amazon Bedrock AgentCore</strong>, and <strong>Kiro Crew</strong>.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Sự kiện quy tụ các chuyên gia công nghệ, kỹ sư giải pháp và cộng đồng AWS tại Việt Nam, mang đến chuỗi bài trình bày kỹ thuật chuyên sâu, phiên live demo kiến trúc và thảo luận mở về ứng dụng thực tiễn của Cloud Computing và Trí tuệ nhân tạo trong doanh nghiệp.”'
              : '“The meetup gathered technology leaders, solutions engineers, and the AWS community in Vietnam, presenting technical lectures, live architecture demonstrations, and discussions on practical cloud and artificial intelligence applications in enterprise environments.”'}
          </div>

          <p>${isVi
            ? 'Nội dung kỹ thuật xuyên suốt sự kiện bao quát từ các giải pháp xử lý giọng nói thời gian thực với độ trễ thấp, cơ chế chia sẻ tài nguyên đám mây đa tài khoản, kiểm thử an ninh tự động dịch chuyển trái (Shift-Left Security), đến môi trường thực thi và quản lý ngữ cảnh cho các AI Agent cấp sản xuất.'
            : 'The technical scope spanned real-time low-latency voice AI systems, secure cross-account cloud resource sharing, Shift-Left automated penetration testing, and production runtime environments and memory management for AI Agents.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu kỹ thuật và nội dung chuyên môn trọng tâm được giới thiệu tại buổi meetup bao gồm:'
            : 'Core technical and architectural objectives established during the meetup:'}</p>
          <ul>
            <li>${isVi ? '<strong>Khám phá các ứng dụng thực tiễn của AWS Cloud và Trí tuệ nhân tạo:</strong> Giới thiệu các giải pháp công nghệ tiên tiến đang được áp dụng trực tiếp vào sản phẩm thực tế.' : '<strong>Explore practical applications of AWS Cloud and Artificial Intelligence:</strong> Present cutting-edge cloud and AI services deployed directly into production systems.'}</li>
            <li>${isVi ? '<strong>Nắm vững cơ chế chia sẻ tài nguyên đám mây và quản trị an ninh tập trung:</strong> Phân tích cơ chế tối ưu hóa hạ tầng đa tài khoản với AWS RAM, AWS Organizations và SCPs.' : '<strong>Understand cloud resource sharing and security management:</strong> Analyze multi-account governance structured via AWS RAM, AWS Organizations, and SCPs.'}</li>
            <li>${isVi ? '<strong>Tìm hiểu kiến trúc Voice AI và hệ thống AI Agents:</strong> Khảo sát mô hình đàm thoại hai chiều thời gian thực và kiến trúc thực thi tác tử thông minh.' : '<strong>Learn about Voice AI and AI Agent architectures:</strong> Examine real-time bidirectional conversational workflows and agentic execution engines.'}</li>
            <li>${isVi ? '<strong>Khám phá kiểm thử an ninh tự động và phát triển phần mềm bằng AI:</strong> Tiếp cận tư duy Shift-Left Security và các tác tử AI hỗ trợ chu trình kỹ thuật phần mềm liên tục.' : '<strong>Explore automated security testing and AI-powered development:</strong> Review Shift-Left Security methodologies and AI agents accelerating software engineering lifecycles.'}</li>
            <li>${isVi ? '<strong>Kết nối cộng đồng kỹ sư AWS:</strong> Tạo không gian trao đổi kỹ thuật thực chiến giữa các kiến trúc sư, kỹ sư đầu ngành và cộng đồng sinh viên.' : '<strong>Connect with the AWS engineering community:</strong> Provide an open technical exchange among architects, industry engineers, and builders.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung chuyên môn tại sự kiện (Event Content & Technical Sessions)' : 'III. Event Content & Technical Sessions'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Voice AI Contact Center -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Hear, Think, Speak – Xây dựng Contact Center Voice-AI tiếng Việt trên AWS (Hear, Think, Speak – Building a Vietnamese Voice-AI Contact Center on AWS)' : '1. Hear, Think, Speak – Building a Vietnamese Voice-AI Contact Center on AWS'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Kiệt Trần – Revve AI
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ tập trung vào ba yếu tố chính trong quá trình xây dựng hệ thống Voice AI: <strong>Response Accuracy</strong>, <strong>Low Latency</strong> và <strong>Natural Conversational Experience</strong>.'
            : 'The session focused on three primary criteria in engineering production Voice AI systems: <strong>Response Accuracy</strong>, <strong>Low Latency</strong>, and <strong>Natural Conversational Experience</strong>.'}</p>
          <p>${isVi
            ? 'Nội dung trình diễn trực tiếp bao gồm hệ thống AI thực hiện cuộc gọi phỏng vấn sơ tuyển ứng viên Cloud Engineer bằng tiếng Việt, với mục tiêu tối ưu độ trễ phản hồi toàn trình xuống khoảng <strong>1,8 giây</strong> nhằm duy trì nhịp đối thoại tự nhiên giữa người và máy.'
            : 'The live demonstration showcased an AI-powered voice interview screening Cloud Engineer candidates in Vietnamese, engineered to reduce end-to-end response latency to approximately <strong>1.8 seconds</strong> for smooth conversational turn-taking.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Quy trình xử lý Voice AI (Voice AI Processing Workflow)' : 'Voice AI Processing Workflow'}</h4>
          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi
              ? 'Voice Input (Âm thanh vào) → Speech Recognition (Nhận dạng STT) → AI Processing (Xử lý LLM) → Speech Generation (Tổng hợp TTS) → Voice Response (Âm thanh ra)'
              : 'Voice Input → Speech Recognition → AI Processing → Speech Generation → Voice Response'}
          </div>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Thành phần (Component)' : 'Component'}</th>
                  <th style="width: 75%;">${isVi ? 'Chức năng kỹ thuật (Technical Function)' : 'Technical Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hear</strong></td>
                  <td>${isVi ? 'Tiếp nhận và xử lý tín hiệu âm thanh giọng nói của người dùng thời gian thực.' : 'Receive and process incoming user speech streams in real time.'}</td>
                </tr>
                <tr>
                  <td><strong>Think</strong></td>
                  <td>${isVi ? 'Phân tích ngữ nghĩa yêu cầu, tra cứu tri thức và sinh phản hồi phù hợp với ngữ cảnh hội thoại.' : 'Interpret requests, query contextual knowledge, and generate appropriate responses.'}</td>
                </tr>
                <tr>
                  <td><strong>Speak</strong></td>
                  <td>${isVi ? 'Chuyển đổi câu trả lời dạng văn bản thành giọng nói tự nhiên để phát hồi tiếp cho người dùng.' : 'Synthesize generated text responses into natural spoken language for playback.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 2. AWS Resource Access Manager (AWS RAM) -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">2. AWS Resource Access Manager (AWS RAM)</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Long Huỳnh – Styl Solution
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ thứ hai tập trung vào giải pháp chia sẻ tài nguyên an toàn giữa nhiều tài khoản AWS khác nhau trong cùng một tổ chức (Cross-Account Resource Sharing).'
            : 'The second session addressed secure cross-account resource sharing across multiple AWS accounts within an enterprise organization.'}</p>
          <p>${isVi
            ? 'AWS Resource Access Manager (AWS RAM) cho phép chia sẻ các tài nguyên được hỗ trợ (Subnet VPC, Transit Gateway, Route 53 Resolver Rules...) mà không yêu cầu mỗi tài khoản AWS con phải khởi tạo hạ tầng trùng lặp, giúp giảm thiểu chi phí dư thừa, đơn giản hóa cấu hình mạng và nâng cao hiệu quả quản trị tập trung.'
            : 'AWS Resource Access Manager allows supported resources (VPC Subnets, Transit Gateways, Route 53 Resolver Rules) to be shared without requiring duplicated infrastructure across sub-accounts, reducing overhead and streamlining centralized management.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Các thành phần chính (Key Components)' : 'Key Components'}</h4>
          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Thành phần (Component)' : 'Component'}</th>
                  <th style="width: 70%;">${isVi ? 'Chức năng chính (Primary Function)' : 'Primary Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AWS RAM</strong></td>
                  <td>${isVi ? 'Cho phép chia sẻ tài nguyên đám mây an toàn giữa các tài khoản AWS trong tổ chức.' : 'Enables secure cross-account resource sharing across organizational accounts.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Organizations</strong></td>
                  <td>${isVi ? 'Hỗ trợ quản trị, cấu trúc phân cấp và kiểm soát tập trung môi trường đa tài khoản.' : 'Supports centralized hierarchy, multi-account governance, and consolidated billing.'}</td>
                </tr>
                <tr>
                  <td><strong>IAM Policies</strong></td>
                  <td>${isVi ? 'Quy định chi tiết quyền hạn truy cập của người dùng và tài nguyên điện toán.' : 'Defines fine-grained access permissions for users and compute resources.'}</td>
                </tr>
                <tr>
                  <td><strong>Service Control Policies (SCPs)</strong></td>
                  <td>${isVi ? 'Thiết lập ranh giới an toàn (guardrails) và giới hạn quyền tối đa trên quy mô toàn tổ chức.' : 'Establishes organization-level permission guardrails and maximum permission boundaries.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 3. AWS Pentest with AWS Continuum / Security Agent -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. AWS Pentest với AWS Continuum / Security Agent (AWS Pentest with AWS Continuum / Security Agent)' : '3. AWS Pentest with AWS Continuum / Security Agent'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Thịnh Nguyễn – Styl Solution
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ thứ ba giới thiệu phương pháp đánh giá an ninh hạ tầng tự động và kiểm thử thâm nhập (penetration testing) với sự hỗ trợ của các AI Security Agent, nhấn mạnh việc phát hiện sớm lỗ hổng ngay từ giai đoạn đầu của vòng đời phát triển phần mềm (SDLC).'
            : 'The third session introduced automated infrastructure security assessment and penetration testing assisted by AI Security Agents, emphasizing early vulnerability identification during the software development lifecycle (SDLC).'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Bảo mật dịch chuyển trái (Shift-Left Security)' : 'Shift-Left Security'}</h4>
          <p>${isVi
            ? 'Phương pháp tiếp cận Shift-Left Security được phân tích qua bốn bước kiểm soát an ninh:'
            : 'The Shift-Left Security methodology was outlined through four progressive validation checkpoints:'}</p>
          <ul>
            <li>${isVi ? 'Rà soát và đánh giá an ninh trực tiếp trên mã nguồn hạ tầng Terraform (IaC Review).' : 'Reviewing Terraform infrastructure-as-code (IaC) definitions.'}</li>
            <li>${isVi ? 'Tích hợp các bước kiểm tra an ninh tự động vào Pull Request trên GitHub và GitLab.' : 'Integrating automated security checks into GitHub and GitLab pull requests.'}</li>
            <li>${isVi ? 'Phát hiện sớm các cấu hình sai lệch và lỗ hổng tiềm ẩn trước khi tiến hành triển khai.' : 'Pinpointing misconfigurations and security exposures prior to deployment.'}</li>
            <li>${isVi ? 'Sử dụng AI Security Agent để thực hiện kiểm thử thâm nhập tự động trong các môi trường SIT và UAT được cấp phép.' : 'Deploying AI Security Agents to execute automated penetration tests in authorized SIT and UAT environments.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Quy trình đánh giá an ninh (Security Assessment Workflow)' : 'Security Assessment Workflow'}</h4>
          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi
              ? 'Mã nguồn (Source Code) → Đánh giá an ninh (Security Review) → Môi trường thử nghiệm (Testing Env) → Xác thực bảo mật (Security Validation) → Triển khai Production'
              : 'Source Code → Security Review → Testing Environment → Security Validation → Production Deployment'}
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 4. Amazon Bedrock AgentCore -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4. Amazon Bedrock AgentCore</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Xuân An – Leader AWS Student Builder Group HCMUTE
          </p>
          <p>${isVi
            ? 'Nội dung phiên chia sẻ tập trung vào hai thành phần cốt lõi của Amazon Bedrock AgentCore: <strong>AgentCore Runtime</strong> và <strong>AgentCore Memory</strong>.'
            : 'The session focused on two primary architectural components of Amazon Bedrock AgentCore: <strong>AgentCore Runtime</strong> and <strong>AgentCore Memory</strong>.'}</p>
          <p>${isVi
            ? 'Các nội dung kỹ thuật liên quan bao gồm môi trường thực thi, quản lý ngữ cảnh, khả năng mở rộng và vận hành AI Agent trong môi trường Production.'
            : 'Associated technical topics addressed execution environments, context management, scalability, and operating AI Agents within production workloads.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">4.1. AgentCore Runtime</h4>
          <p>${isVi
            ? 'AgentCore Runtime cung cấp môi trường thực thi được quản trị (managed runtime) chuyên biệt cho việc triển khai và vận hành các AI Agent. Các yếu tố kiến trúc quan trọng bao gồm:'
            : 'AgentCore Runtime provides a managed execution environment for deploying and operating AI Agents. Key architectural factors include:'}</p>
          <ul>
            <li>${isVi ? 'Khả năng cô lập phiên thực thi và phân tách khối lượng công việc của từng Agent (Agent execution & workload isolation).' : 'Agent execution and workload isolation.'}</li>
            <li>${isVi ? 'Khả năng mở rộng hạ tầng tính toán tự động và linh hoạt (Infrastructure scalability).' : 'Elastic infrastructure scalability matching demand.'}</li>
            <li>${isVi ? 'Tối ưu hóa hiệu suất sử dụng tài nguyên điện toán (Resource utilization).' : 'Optimized compute resource utilization.'}</li>
            <li>${isVi ? 'Đáp ứng các yêu cầu khắt khe khi đưa tác tử AI vào vận hành sản xuất thực tế (Production deployment requirements).' : 'Enterprise production deployment requirements.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">4.2. AgentCore Memory</h4>
          <p>${isVi
            ? 'AgentCore Memory đảm bảo việc lưu trữ, quản trị ngữ cảnh hội thoại và thông tin liên quan xuyên suốt chuỗi tương tác nhiều lượt của AI Agent.'
            : 'AgentCore Memory manages conversational context and persistent interaction states across multi-turn AI Agent workflows.'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Loại bộ nhớ (Memory Type)' : 'Memory Type'}</th>
                  <th style="width: 70%;">${isVi ? 'Mô tả chức năng (Description)' : 'Description'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Short-term Memory</strong></td>
                  <td>${isVi ? 'Duy trì ngữ cảnh trao đổi gần nhất và lịch sử tương tác ngắn hạn giữa người dùng và Agent.' : 'Maintains recent conversational context and immediate interaction history.'}</td>
                </tr>
                <tr>
                  <td><strong>Long-term Memory</strong></td>
                  <td>${isVi ? 'Lưu trữ bền vững các thông tin quan trọng để tái sử dụng và tham chiếu cho các phiên tương tác trong tương lai.' : 'Retains persistent knowledge and preferences for cross-session retrieval.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 5. Kiro Crew -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Kiro Crew – Tự động hóa và Phát triển phần mềm bằng AI (Kiro Crew – AI-Powered Development and Automation)' : '5. Kiro Crew – AI-Powered Development and Automation'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speakers:'}</strong> Khoa Kiều – Tech Lead, ACB &amp; Nghi Danh – AWS Community Builder
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ cuối cùng khám phá cách các nhóm AI Agent (AI Agent Crew) phối hợp hỗ trợ chu trình phát triển phần mềm liên tục, rà soát mã nguồn tự động và kiểm tra trạng thái vận hành hệ thống.'
            : 'The final session explored how autonomous AI Agent groups support continuous software development, automated code inspection, and system status monitoring.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.1. Khởi tạo Artifact trực quan (Artifact Generation)' : '5.1. Artifact Generation'}</h4>
          <p>${isVi
            ? 'Phiên demo thực tế minh họa cách AI Agent tự động thu thập thông tin tuyển dụng việc làm, xử lý dữ liệu và trực tiếp sinh các báo cáo trực quan, biểu đồ thống kê tương tác ngay trong giao diện làm việc.'
            : 'The live demonstration showed AI Agents collecting real-world job postings, parsing data streams, and generating interactive visual reports and analytical charts directly within the workspace.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.2. Quản trị cửa sổ ngữ cảnh (Context Window Management)' : '5.2. Context Window Management'}</h4>
          <p>${isVi
            ? 'Các diễn giả phân tích các kỹ thuật tối ưu hóa khối lượng thông tin xử lý trong các luồng tương tác dài hạn qua hai khái niệm then chốt:'
            : 'The speakers analyzed context window optimization techniques for long-running workflows via two core mechanisms:'}</p>
          <ul>
            <li>${isVi ? '<strong>Auto Compact:</strong> Tự động nén và cô đọng ngữ cảnh cuộc trò chuyện khi dung lượng chạm ngưỡng giới hạn của Context Window.' : '<strong>Auto Compact:</strong> Automatically condenses conversation context as token usage approaches context limits.'}</li>
            <li>${isVi ? '<strong>Context Breakdown:</strong> Phân tích chi tiết mức độ đóng góp của từng thành phần vào lượng token tiêu thụ, giúp định vị chính xác nguyên nhân phình to ngữ cảnh.' : '<strong>Context Breakdown:</strong> Analyzes token distribution across components to isolate context expansion factors.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.3. Quản lý bộ nhớ và Ranh giới an ninh (Memory Management &amp; Security Guardrails)' : '5.3. Memory Management &amp; Security Guardrails'}</h4>
          <p>${isVi
            ? 'Phiên chia sẻ nhấn mạnh tầm quan trọng của việc duy trì bộ nhớ chọn lọc và thiết lập các ranh giới bảo mật (Security Guardrails) nhằm ngăn chặn AI Agent:'
            : 'The presentation emphasized selective memory retention and establishing strict security guardrails preventing AI Agents from:'}</p>
          <ul>
            <li>${isVi ? 'Tự ý xóa bỏ tài nguyên hoặc phá hủy hạ tầng đám mây khi chưa có ủy quyền rõ ràng.' : 'Deleting cloud infrastructure without explicit authorization.'}</li>
            <li>${isVi ? 'Làm lộ lọt các khóa bí mật, API credentials và thông tin định danh nhạy cảm.' : 'Exposing sensitive secrets, access keys, or API credentials.'}</li>
            <li>${isVi ? 'Thực hiện các thao tác sửa đổi cấu hình hệ thống ngoài phạm vi cho phép.' : 'Performing unauthorized system or configuration modifications.'}</li>
            <li>${isVi ? 'Thực thi các hoạt động có tính chất phá hoại hoặc nguy hiểm mà thiếu cơ chế kiểm soát của con người.' : 'Executing destructive or high-risk operations without human oversight.'}</li>
          </ul>

        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Năm phiên chia sẻ kỹ thuật tại sự kiện đã tổng kết khối lượng kiến thức thực tiễn trải rộng trên các lĩnh vực then chốt của Cloud Computing, AI và An ninh đám mây:'
            : 'The five technical sessions consolidated practical knowledge across foundational areas of Cloud Computing, AI, and Cloud Security:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kỹ thuật (Technical Area)' : 'Technical Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Voice AI</strong></td>
                  <td>${isVi ? 'Xử lý giọng nói thời gian thực và kỹ thuật tối ưu hóa độ trễ phản hồi (< 2s).' : 'Real-time voice processing and latency optimization (< 2s).'}</td>
                </tr>
                <tr>
                  <td><strong>AWS RAM</strong></td>
                  <td>${isVi ? 'Cơ chế chia sẻ tài nguyên an toàn giữa các tài khoản AWS trong tổ chức.' : 'Secure cross-account resource sharing across organizational accounts.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Organizations</strong></td>
                  <td>${isVi ? 'Quản trị và phân cấp tập trung kiến trúc đa tài khoản đám mây.' : 'Centralized multi-account governance and organizational guardrails.'}</td>
                </tr>
                <tr>
                  <td><strong>Cloud Security</strong></td>
                  <td>${isVi ? 'Bảo mật dịch chuyển trái (Shift-Left Security) và kiểm thử thâm nhập tự động.' : 'Shift-Left Security and automated penetration testing.'}</td>
                </tr>
                <tr>
                  <td><strong>AgentCore Runtime</strong></td>
                  <td>${isVi ? 'Môi trường thực thi độc lập, ổn định và co giãn cho AI Agents trên Production.' : 'Production execution environments and workload isolation for AI Agents.'}</td>
                </tr>
                <tr>
                  <td><strong>AgentCore Memory</strong></td>
                  <td>${isVi ? 'Cơ chế quản trị bộ nhớ ngắn hạn và dài hạn cho tương tác tác tử nhiều lượt.' : 'Short-term and long-term memory governance for multi-turn agent interactions.'}</td>
                </tr>
                <tr>
                  <td><strong>Kiro Crew</strong></td>
                  <td>${isVi ? 'Tự động hóa phát triển phần mềm và rà soát hệ thống liên tục bằng AI Agents.' : 'AI-powered continuous development, code reviews, and system inspection.'}</td>
                </tr>
                <tr>
                  <td><strong>Context Management</strong></td>
                  <td>${isVi ? 'Kiểm soát mức tiêu thụ token và tối ưu hóa cửa sổ ngữ cảnh (Auto Compact, Context Breakdown).' : 'Token consumption governance and context optimization (Auto Compact, Context Breakdown).'}</td>
                </tr>
                <tr>
                  <td><strong>Security Guardrails</strong></td>
                  <td>${isVi ? 'Thiết lập rào chắn an ninh ngăn chặn các hành vi phá hoại hoặc sửa đổi trái phép của AI.' : 'Enforcing security guardrails preventing unauthorized or destructive AI actions.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Các nguyên tắc kiến trúc cốt lõi:' : 'Core architectural principles established:'}
          </p>
          <ul>
            <li>${isVi ? 'Kiến trúc Cloud và AI bắt buộc phải dung hòa giữa hiệu năng cao, an ninh nghiêm ngặt và hiệu quả vận hành kinh tế.' : 'Cloud and AI architectures must balance performance, security, and operational efficiency.'}</li>
            <li>${isVi ? 'Cơ chế chia sẻ tài nguyên tập trung giúp loại bỏ hạ tầng dư thừa và tinh gọn hóa công tác quản trị.' : 'Centralized resource sharing simplifies multi-account infrastructure management.'}</li>
            <li>${isVi ? 'Kiểm định an ninh cần được dịch chuyển về phía trước (Shift-Left), tích hợp ngay vào chu trình phát triển phần mềm.' : 'Security assessments should be integrated directly into the software development lifecycle.'}</li>
            <li>${isVi ? 'AI Agent trong sản xuất đòi hỏi nền tảng thực thi ổn định và cơ chế quản trị bộ nhớ đáng tin cậy.' : 'Production AI Agents depend on reliable runtime environments and structured memory management.'}</li>
            <li>${isVi ? 'Tự động hóa bằng AI phải luôn vận hành trong ranh giới an ninh kiểm soát được và có sự giám sát của con người.' : 'AI automation must operate strictly within verified security guardrails.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? 'Thấu hiểu tầm quan trọng của việc tối ưu hóa độ trễ phản hồi trong các hệ thống Voice AI để mang lại trải nghiệm đàm thoại tự nhiên.' : 'Understand the importance of latency optimization in Voice AI systems.'}</li>
            <li>${isVi ? 'Nhận thức rõ lợi ích của cơ chế chia sẻ tài nguyên tập trung và quản trị đám mây đa tài khoản (AWS RAM, AWS Organizations, SCPs).' : 'Recognize the benefits of centralized resource sharing and cloud governance.'}</li>
            <li>${isVi ? 'Hiểu sâu sắc tầm quan trọng của việc tích hợp bảo mật sớm vào từng giai đoạn của vòng đời phát triển phần mềm (Shift-Left Security).' : 'Understand the importance of integrating security into the software development lifecycle.'}</li>
            <li>${isVi ? 'Nhận biết vai trò sống còn của môi trường thực thi (Runtime) và cơ chế quản trị bộ nhớ (Memory) đối với các AI Agent trong môi trường sản xuất.' : 'Recognize the role of Runtime and Memory in production AI Agents.'}</li>
            <li>${isVi ? 'Thấu hiểu sự cần thiết của các ranh giới bảo vệ an ninh (Security Guardrails) trong tự động hóa bằng AI để ngăn ngừa các tác vụ phá hoại hoặc trái phép.' : 'Understand the importance of security guardrails in AI automation.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Tối ưu hóa pipeline xử lý giọng nói:</strong> Nghiên cứu và ứng dụng mô hình cascade (STT → LLM → TTS) kết hợp bộ đệm thời gian thực và WebRTC vào các bài toán xây dựng trợ lý ảo tương tác hai chiều.' : '<strong>Voice processing pipeline optimization:</strong> Research and apply cascade architectures (STT → LLM → TTS) with real-time buffering and WebRTC protocols in interactive conversational applications.'}</li>
            <li>${isVi ? '<strong>Áp dụng chia sẻ tài nguyên an toàn:</strong> Vận dụng AWS RAM và Service Control Policies (SCPs) để thiết kế mô hình phân quyền và chia sẻ VPC Subnets trong các bài thực hành kiến trúc đa tài khoản.' : '<strong>Implement secure resource sharing:</strong> Apply AWS RAM and SCP guardrails to design secure multi-account VPC sharing topologies in cloud architecture coursework.'}</li>
            <li>${isVi ? '<strong>Tích hợp rà soát an ninh vào CI/CD:</strong> Áp dụng công cụ kiểm tra bảo mật mã nguồn IaC Terraform vào quy trình GitHub Actions cá nhân để phát hiện lỗ hổng cấu hình trước khi triển khai.' : '<strong>Embed security linting in CI/CD:</strong> Incorporate automated Terraform IaC security checks into personal GitHub Actions workflows to identify misconfigurations before deployment.'}</li>
            <li>${isVi ? '<strong>Quản trị ngữ cảnh và guardrails cho AI Agent:</strong> Ứng dụng các kỹ thuật Auto Compact, phân tích token và Bedrock Guardrails khi phát triển các tác tử AI phục vụ hỗ trợ kỹ thuật và học tập.' : '<strong>Govern context and guardrails for AI Agents:</strong> Implement Auto Compact, token breakdown metrics, and security guardrails when building AI agents on Amazon Bedrock.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia sự kiện meetup với tư cách người tham dự (Attendee) đầy đủ và nghiêm túc từ 08:00 đến 12:00 ngày 24/10/2026 tại Bitexco Financial Tower.' : 'Participated in the meetup as an Attendee from 08:00 AM to 12:00 PM on October 24, 2026, at Bitexco Financial Tower.'}</li>
            <li>${isVi ? 'Tích cực theo dõi các bài thuyết trình chuyên sâu và các phiên demo kỹ thuật trực tiếp.' : 'Followed technical presentations and live demonstrations across all technical sessions.'}</li>
            <li>${isVi ? 'Hệ thống hóa và đúc kết toàn bộ kiến thức chuyên môn tiếp thu được vào báo cáo sự kiện cá nhân.' : 'Consolidated technical knowledge into a personal event report.'}</li>
            <li>${isVi ? 'Xác định các cơ hội ứng dụng kiến thức về an ninh đám mây và tự động hóa AI vào các hoạt động học tập và dự án tương lai.' : 'Identified opportunities to apply cloud security and AI automation concepts in future learning activities.'}</li>
            <li>${isVi ? 'Xây dựng bài báo cáo sự kiện chi tiết và lưu trữ, chia sẻ kiến thức thông qua website cá nhân và kho lưu trữ mã nguồn mở trên GitHub.' : 'Built a detailed event report and published, shared technical knowledge transparently via the personal website and GitHub repository.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'First Cloud AI Journey Meetup ngày 24/10/2026 mang lại giá trị kiến thức thực tiễn phong phú về sự giao thoa giữa Cloud Computing, Cloud Security và Trí tuệ nhân tạo.'
            : 'The First Cloud AI Journey Meetup on October 24, 2026, delivered substantial practical value regarding the convergence of Cloud Computing, Cloud Security, and Artificial Intelligence.'}</p>

          <p>${isVi
            ? 'Qua sự kiện, tư duy kỹ thuật của bản thân được mở rộng rõ rệt: nhận thức rõ việc triển khai AI trong thực tế không chỉ dừng lại ở các tương tác hỏi đáp đơn giản, mà đòi hỏi hạ tầng thực thi tin cậy, khả năng quản trị ngữ cảnh và ranh giới an toàn nghiêm ngặt. Đồng thời, tư duy DevSecOps và phương pháp kiểm thử thâm nhập tự động Shift-Left củng cố thêm ý thức về an ninh đám mây ngay từ những dòng mã đầu tiên.'
            : 'The meetup substantially broadened my technical mindset: recognizing that real-world AI deployment extends beyond simple conversational prompts to require reliable runtimes, structured context governance, and rigorous security boundaries. Furthermore, Shift-Left security practices and automated penetration testing reinforced the discipline of embedding cloud security directly into code from the start.'}</p>

          <p>${isVi
            ? 'Đây là những định hướng kiến thức quan trọng để tiếp tục đào sâu nghiên cứu về AI Agents và an ninh hạ tầng AWS trong các giai đoạn học tập tiếp theo.'
            : 'These insights establish vital guidance for advancing my specialized studies in AI Agents and AWS cloud infrastructure security in future learning milestones.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Hành trình chinh phục điện toán đám mây không chỉ dừng lại ở việc làm chủ công nghệ, mà quan trọng hơn là thấu hiểu cách ứng dụng công nghệ một cách an toàn, bền vững và hiệu quả vào thực tiễn doanh nghiệp.”'
              : '“The journey to the cloud is not only about mastering technology, but also about understanding how to apply it securely and effectively in real-world environments.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #AWSStudyGroup #FirstCloudAIJourney #VoiceAI #AWSRAM #CloudSecurity #DevSecOps #AmazonBedrock #AIAgents #KiroCrew
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}


function renderEnterpriseAIEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 4 - Enterprise AI on AWS Cloud (14/11/2026)" : "Event 4 - Enterprise AI on AWS Cloud (November 14, 2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Artificial Intelligence & Cloud Computing",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FROM AI PROTOTYPE TO PRODUCTION: DEPLOYING AND OPERATING ENTERPRISE AI ON AWS CLOUD",
    subtitle: isVi
      ? "Chiến lược chuyển đổi từ mô hình AI thử nghiệm sang hệ thống sản xuất cấp doanh nghiệp vận hành trên AWS Cloud"
      : "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
    eventName: "Enterprise AI on AWS Cloud – 14/11/2026",
    dateTime: isVi ? "09:00 – 12:00, 14/11/2026" : "09:00 AM – 12:00 PM, November 14, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Diễn giả:' : 'Speakers:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.speakers)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 3 Check-in Photo -->
      <div id="event-4-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-4.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-4-cover-img"
               src="assets/images/events/event-4.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-4-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-4-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện Enterprise AI on AWS Cloud (14/11/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at Enterprise AI on AWS Cloud (November 14, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo <strong>Enterprise AI on AWS Cloud</strong> tập trung vào các thách thức kỹ thuật cốt lõi khi chuyển đổi một giải pháp Trí tuệ nhân tạo (AI) từ phiên bản thử nghiệm (prototype) sang hệ thống sản xuất cấp doanh nghiệp (production-ready enterprise system).'
            : 'The <strong>Enterprise AI on AWS Cloud</strong> workshop addressed the paramount engineering challenges of transitioning artificial intelligence from an experimental prototype into a production-grade enterprise system.'}</p>

          <p>${isVi
            ? 'Sự kiện quy tụ các diễn giả giàu kinh nghiệm từ AWS và cộng đồng công nghệ: <strong>Khang Duong</strong>, <strong>Phuong Huyen</strong>, <strong>Bao Nguyen</strong> và <strong>Khuong Huynh</strong>, cùng chia sẻ về chiến lược kiến trúc và bài học thực tiễn khi đưa AI vào vận hành thực tế.'
            : 'The event featured experienced speakers from AWS and the tech community: <strong>Khang Duong</strong>, <strong>Phuong Huyen</strong>, <strong>Bao Nguyen</strong>, and <strong>Khuong Huynh</strong>, who shared architectural strategies and practical lessons for bringing AI into production.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Nội dung sự kiện đi sâu phân tích 4 trụ cột vận hành sản xuất: An ninh (Security), Độ tin cậy (Reliability), Khả năng mở rộng (Scalability) và Tối ưu chi phí (Cost Optimization). Đồng thời, hội thảo làm sáng tỏ vai trò của nền tảng AWS Cloud trong việc cung cấp hạ tầng tính toán co giãn linh hoạt và điều phối các quy trình nghiệp vụ phức tạp thông qua các mô hình kiến trúc Multi-Agent.”'
              : '“The session analyzed the four core operational pillars of production AI: Security, Reliability, Scalability, and Cost Optimization. In addition, the presentations highlighted the strategic role of AWS Cloud infrastructure in delivering elastic compute scalability and coordinating complex enterprise workflows through Multi-Agent architecture patterns.”'}
          </div>

          <p>${isVi
            ? 'Các phiên chia sẻ làm rõ sự khác biệt giữa mô hình AI hoạt động trong môi trường nghiên cứu có kiểm soát với một hệ thống sản xuất liên tục phục vụ hàng triệu người dùng, nơi các yếu tố về đường ống dữ liệu (Data Pipelines), an ninh bảo mật và giám sát vận hành (Monitoring) giữ vai trò quyết định tính bền vững của giải pháp.'
            : 'The presentations clearly differentiated AI models running in controlled academic environments from production systems serving millions of real-world users, where continuous data pipelines, robust security frameworks, and proactive operational monitoring dictate project success.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu học thuật và nội dung kiến trúc trọng tâm được thiết lập xuyên suốt phiên hội thảo bao gồm:'
            : 'Core technical and architectural objectives established during the session:'}</p>
          <ul>
            <li>${isVi ? '<strong>Khác biệt giữa Academic AI và Enterprise AI:</strong> Phân tích sự chuyển dịch từ mục tiêu tối ưu độ chính xác mô hình sang giá trị kinh doanh và khả năng vận hành sản xuất liên tục.' : '<strong>Understand Academic AI vs Enterprise AI:</strong> Differentiate experimental model accuracy from production business value and continuous operations.'}</li>
            <li>${isVi ? '<strong>Thành phần nền tảng của hệ thống AI:</strong> Giới thiệu chuỗi mắt xích liên kết giữa Data, Model, Feature và User.' : '<strong>Fundamental Components of an AI System:</strong> Analyze the value chain linking Data, Model, Feature, and User.'}</li>
            <li>${isVi ? '<strong>Phân định Training, Inference, LLMs và Tokens:</strong> Nắm vững cơ chế vận hành, sự khác biệt tài nguyên và tác động kinh tế của tokens.' : '<strong>Training, Inference, LLMs, and Tokens:</strong> Understand operational differences, computing requirements, and token economics.'}</li>
            <li>${isVi ? '<strong>Yêu cầu vận hành của Production AI:</strong> Phân tích 4 trụ cột an ninh, độ tin cậy, khả năng mở rộng và tối ưu chi phí.' : '<strong>Operational Requirements of Production AI:</strong> Explore the operational principles across security, reliability, scalability, and cost optimization.'}</li>
            <li>${isVi ? '<strong>Co giãn linh hoạt trên AWS:</strong> Khảo sát cách các dịch vụ AWS Lambda, Auto Scaling và Elastic Load Balancing hỗ trợ co giãn theo tải thực tế.' : '<strong>Elastic Scalability on AWS:</strong> Learn how AWS services support dynamic and automated workload scaling.'}</li>
            <li>${isVi ? '<strong>Mô hình kiến trúc Multi-Agent phổ biến:</strong> Tiếp cận 4 mô hình điều phối: Routing/Supervisor, Sequential, Parallel và Evaluator–Optimizer.' : '<strong>Multi-Agent Architecture Patterns:</strong> Understand common multi-agent coordination patterns and their practical application.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung chuyên môn tại sự kiện (Event Content & Technical Sessions)' : 'III. Event Content & Technical Sessions'}</h2>
        </div>
        <div class="report-prose">

          <!-- III.1 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Từ Academic AI đến Enterprise AI (From Academic AI to Enterprise AI)' : '1. From Academic AI to Enterprise AI'}</h3>
          <p>${isVi
            ? 'Để phân định rõ nét sự khác biệt giữa AI thử nghiệm và AI quy mô doanh nghiệp, diễn giả đã sử dụng phép ẩn dụ trực quan giữa <strong>Bếp ăn gia đình (Home Kitchen)</strong> và <strong>Chuỗi nhà hàng tiêu chuẩn (Restaurant Chain)</strong>:'
            : 'The speaker used the vivid analogy of a home kitchen and a restaurant chain to explain the fundamental differences between experimental AI and enterprise AI:'}</p>

          <div class="minimal-table-wrap" style="overflow-x:auto;">
            <table class="minimal-table" style="min-width:640px;">
              <thead>
                <tr>
                  <th style="width: 20%;">${isVi ? 'Tiêu chí' : 'Criteria'}</th>
                  <th style="width: 40%;">Academic AI (${isVi ? 'AI Hàn lâm / Thử nghiệm' : 'Experimental'})</th>
                  <th style="width: 40%;">Enterprise AI (${isVi ? 'AI Doanh nghiệp' : 'Production'})</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Phép so sánh (Analogy)' : 'Analogy'}</strong></td>
                  <td>${isVi ? 'Bếp ăn gia đình (Home Kitchen)' : 'Home Kitchen'}</td>
                  <td>${isVi ? 'Chuỗi nhà hàng quy chuẩn (Restaurant Chain)' : 'Restaurant Chain'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Mục tiêu tối thượng' : 'Primary Goal'}</strong></td>
                  <td>${isVi ? 'Độ chính xác cao nhất trên tập dữ liệu cố định (Benchmark / Accuracy)' : 'Highest accuracy on fixed benchmark datasets (Benchmark / Accuracy)'}</td>
                  <td>${isVi ? 'Giá trị kinh doanh liên tục, tính sẵn sàng cao và ROI bền vững (Business Value & High ROI)' : 'Continuous Business Value, High Availability & High ROI'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Môi trường vận hành' : 'Operating Environment'}</strong></td>
                  <td>${isVi ? 'Môi trường thử nghiệm tĩnh, có kiểm soát, tài nguyên biệt lập' : 'Static, controlled experimental environment with isolated resources'}</td>
                  <td>${isVi ? 'Môi trường động, lưu lượng truy cập biến động, phục vụ khách hàng theo thời gian thực (Real-time Customer Facing)' : 'Dynamic, Unpredictable Traffic, Real-time Customer Facing'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Quy chuẩn an ninh' : 'Security Standard'}</strong></td>
                  <td>${isVi ? 'Tối thiểu, ưu tiên tốc độ ra kết quả nghiên cứu' : 'Minimal, prioritizing research speed and experimentation'}</td>
                  <td>${isVi ? 'Tuân thủ nghiêm ngặt (GDPR, HIPAA, SOC 2), IAM, mã hóa dữ liệu khi lưu trữ và truyền tải (Encryption at Rest/Transit)' : 'Strict Compliance (GDPR, HIPAA, SOC 2), IAM, Encryption at Rest/Transit'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Chi phí vận hành' : 'Operational Cost'}</strong></td>
                  <td>${isVi ? 'Chi trả một lần theo đợt huấn luyện nghiên cứu' : 'One-time expenditure per research training run'}</td>
                  <td>${isVi ? 'Chi phí liên tục tính theo từng token tiêu thụ, co giãn linh hoạt và quản trị ngân sách chặt chẽ (Cost per Token & Elastic Scaling)' : 'Continuous Cost per Token, Elastic Scaling, Budget Governance'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.2 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '2. 4 Thành phần nền tảng của hệ thống AI (4 Fundamental Components of an AI System)' : '2. 4 Fundamental Components of an AI System'}</h3>
          <p>${isVi
            ? 'Một hệ thống AI toàn diện trong doanh nghiệp được cấu thành từ chuỗi mắt xích liên kết chặt chẽ gồm 4 thành phần:'
            : 'An enterprise AI system relies on an interconnected 4-part value chain:'}</p>

          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi
              ? 'Dữ liệu (Data) → Mô hình (Model) → Tính năng nghiệp vụ (Feature) → Người dùng (User)'
              : 'Data → Model → Feature → User'}
          </div>

          <ul>
            <li>${isVi ? '<strong>Dữ liệu (Data):</strong> Nguồn nguyên liệu thô đầu vào quyết định trực tiếp chất lượng đầu ra của mọi thuật toán học máy, đòi hỏi thu thập, làm sạch và gán nhãn bài bản.' : '<strong>Data:</strong> The foundational fuel determining algorithm quality. Requires structured ingestion, curation, and governance.'}</li>
            <li>${isVi ? '<strong>Mô hình (Model):</strong> Thuật toán máy học đã được huấn luyện hoặc tinh chỉnh (Fine-tuned/Pre-trained LLM) để chuyển hóa dữ liệu đầu vào thành tri thức và dự đoán.' : '<strong>Model:</strong> Machine learning algorithms or foundation LLMs transforming data inputs into predictions and reasoning.'}</li>
            <li>${isVi ? '<strong>Tính năng (Feature):</strong> Lớp giao diện nghiệp vụ đóng gói mô hình thành chức năng hữu ích (như gợi ý sản phẩm, tóm tắt tài liệu, phát hiện gian lận).' : '<strong>Feature:</strong> The business application layer encapsulating models into actionable services (e.g. recommendation, document summarization).'}</li>
            <li>${isVi ? '<strong>Người dùng (User):</strong> Đối tượng trực tiếp thụ hưởng giá trị, đồng thời liên tục cung cấp dữ liệu phản hồi (Feedback Loop) để tinh chỉnh hệ thống ngày càng hoàn thiện.' : '<strong>User:</strong> The end beneficiary whose continuous interactions provide essential feedback loops to iteratively improve the entire system.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.3 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. Phân định Training, Inference, LLMs và Tokens' : '3. Training, Inference, LLMs and Tokens'}</h3>
          <p>${isVi
            ? 'Hội thảo làm rõ sự khác biệt bản chất giữa hai chu trình tính toán cơ bản trong vòng đời AI:'
            : 'The workshop clearly delineated the operational differences between the two core computing phases in the AI lifecycle:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 20%;">${isVi ? 'Tiêu chí' : 'Criteria'}</th>
                  <th style="width: 40%;">${isVi ? 'Training (Huấn luyện)' : 'Training'}</th>
                  <th style="width: 40%;">${isVi ? 'Inference (Suy luận)' : 'Inference'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Bản chất' : 'Nature'}</strong></td>
                  <td>${isVi ? 'Dạy mô hình học hỏi từ khối lượng dữ liệu khổng lồ trong quá khứ' : 'Teach the model to learn from large volumes of historical data'}</td>
                  <td>${isVi ? 'Áp dụng mô hình đã học để đưa ra câu trả lời cho yêu cầu mới' : 'Apply the learned model to answer new, real-time requests'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Tần suất &amp; Thời gian' : 'Frequency &amp; Duration'}</strong></td>
                  <td>${isVi ? 'Không liên tục (định kỳ theo mẻ, vài ngày đến vài tháng)' : 'Intermittent (periodic batches, from days to months)'}</td>
                  <td>${isVi ? 'Liên tục 24/7/365 theo thời gian thực' : 'Continuous, 24/7/365 in real time'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Tài nguyên tính toán' : 'Compute Resources'}</strong></td>
                  <td>${isVi ? 'Cụm GPU/Trainium công suất lớn, xử lý tập trung' : 'Large GPU/Trainium clusters with centralized processing'}</td>
                  <td>${isVi ? 'Cụm suy luận nhẹ hơn (EC2 Inf2/G5, Serverless Bedrock)' : 'Lighter inference fleets (EC2 Inf2/G5, serverless Amazon Bedrock)'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Độ trễ yêu cầu' : 'Latency Requirement'}</strong></td>
                  <td>${isVi ? 'Chấp nhận kéo dài nhiều giờ hoặc nhiều tuần' : 'Can run for hours or even weeks'}</td>
                  <td>${isVi ? 'Rất khắt khe (từ mili-giây đến vài giây)' : 'Very strict (milliseconds to a few seconds)'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>${isVi
            ? '<strong>Kinh tế học về Tokens (Token Economics):</strong> Đối với các mô hình ngôn ngữ lớn (LLMs), token là đơn vị cơ bản cấu thành văn bản. Số lượng tokens truyền vào (Input Tokens) và sinh ra (Output Tokens) tỷ lệ thuận trực tiếp với độ trễ phản hồi và chi phí vận hành hóa đơn đám mây. Do đó, việc tối ưu hóa prompt, nén ngữ cảnh và quản lý bộ nhớ đệm (Prompt Caching) là yêu cầu kỹ thuật sống còn.'
            : '<strong>Token Economics:</strong> In foundation LLMs, tokens represent text chunks. Input and output tokens directly dictate API costs and inference latency. Prompt optimization, context window compression, and prompt caching are essential architectural capabilities.'}</p>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.4 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '4. 4 Trụ cột Vận hành của Production AI (4 Production AI Pillars)' : '4. 4 Production AI Pillars'}</h3>
          <p>${isVi
            ? 'Một hệ thống AI muốn tồn tại và phục vụ khách hàng trên môi trường sản xuất phải thỏa mãn 4 trụ cột kiến trúc cốt lõi:'
            : 'Operating enterprise AI in production requires four foundational architectural pillars:'}</p>

          <ul>
            <li>${isVi ? '<strong>1. An toàn &amp; Bảo mật (Security):</strong> Bảo vệ quyền riêng tư dữ liệu khách hàng, mã hóa hai chiều (KMS), kiểm soát truy cập nghiêm ngặt (IAM, VPC Endpoints) và thiết lập rào chắn an toàn (Bedrock Guardrails) ngăn chặn rò rỉ dữ liệu hoặc đầu ra độc hại.' : '<strong>1. Security:</strong> Protect customer privacy, end-to-end encryption (KMS), fine-grained access control (IAM), and guardrails preventing prompt injection or data leakage.'}</li>
            <li>${isVi ? '<strong>2. Độ tin cậy &amp; Sẵn sàng cao (Reliability):</strong> Đảm bảo hệ thống duy trì thời gian hoạt động (Uptime) theo cam kết SLA, triển khai kiến trúc đa vùng khả dụng (Multi-AZ), cơ chế thử lại tự động (Exponential Backoff) và dự phòng chuyển đổi vùng linh hoạt.' : '<strong>2. Reliability:</strong> Maintain high availability across Multi-AZ deployments, resilient fallback mechanisms, and circuit breakers.'}</li>
            <li>${isVi ? '<strong>3. Khả năng mở rộng (Scalability):</strong> Hệ thống tự động co giãn thích ứng mượt mà khi lưu lượng người dùng tăng đột biến mà không bị nghẽn cổ chai hay suy giảm tốc độ xử lý.' : '<strong>3. Scalability:</strong> Seamlessly handle unpredictable traffic surges via horizontal elastic compute without performance degradation.'}</li>
            <li>${isVi ? '<strong>4. Tối ưu hóa chi phí (Cost Optimization):</strong> Sử dụng đúng loại tài nguyên (Right-sizing), tận dụng tính năng Serverless (trả tiền theo mức sử dụng thực tế), định tuyến mô hình linh hoạt (Model Routing: dùng mô hình nhỏ cho câu hỏi dễ và mô hình lớn cho bài toán phức tạp).' : '<strong>4. Cost Optimization:</strong> Right-size inference instances, leverage serverless architectures, and use dynamic model routing (lightweight models for routine tasks, frontier models for complex reasoning).'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.5 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Co giãn linh hoạt trên AWS (Elastic Scalability on AWS)' : '5. Elastic Scalability on AWS'}</h3>
          <p>${isVi
            ? 'Diễn giả đã phân tích cơ chế co giãn đàn hồi của AWS giúp giải quyết bài toán tải biến động mạnh trong các ứng dụng AI:'
            : 'The speaker analyzed AWS elastic infrastructure components that address fluctuating AI workloads:'}</p>

          <ul>
            <li>${isVi ? '<strong>AWS Lambda:</strong> Kiến trúc tính toán không máy chủ (Serverless), tự động nhân bản tức thì theo từng yêu cầu đến và tự động hạ về 0 khi không có lưu lượng, triệt tiêu chi phí tài nguyên nhàn rỗi.' : '<strong>AWS Lambda:</strong> Serverless compute automatically scaling to zero during idle periods, eliminating overprovisioning costs.'}</li>
            <li>${isVi ? '<strong>Auto Scaling Groups (ASG):</strong> Tự động bổ sung hoặc giảm bớt số lượng máy chủ ảo Amazon EC2 (GPU/Inference instances) dựa trên các chỉ số giám sát thời gian thực như CPU Utilization, GPU Memory hoặc hàng đợi tin nhắn.' : '<strong>Auto Scaling Groups:</strong> Automatically adjust EC2 compute instances based on real-time CloudWatch metrics.'}</li>
            <li>${isVi ? '<strong>Elastic Load Balancing (ALB/NLB):</strong> Phân phối đồng đều lưu lượng truy cập khổng lồ đến cụm máy chủ suy luận, đồng thời tự động kiểm tra tình trạng sức khỏe (Health Check) để cô lập các node gặp lỗi.' : '<strong>Elastic Load Balancing:</strong> Distributes user traffic evenly across inference targets while performing continuous health checks.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.6 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '6. 4 Mô hình Kiến trúc Multi-Agent phổ biến (4 Common Multi-Agent Architecture Patterns)' : '6. 4 Common Multi-Agent Architecture Patterns'}</h3>
          <p>${isVi
            ? 'Khi một tác vụ kinh doanh trở nên quá phức tạp đối với một mô hình LLM đơn lẻ, kiến trúc Multi-Agent cho phép chia nhỏ bài toán và điều phối nhiều tác tử chuyên biệt cùng phối hợp xử lý:'
            : 'When complex enterprise workflows exceed single-prompt capabilities, Multi-Agent patterns coordinate specialized agents:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Mô hình Multi-Agent' : 'Pattern'}</th>
                  <th style="width: 40%;">${isVi ? 'Cơ chế điều phối' : 'Coordination Mechanism'}</th>
                  <th style="width: 35%;">${isVi ? 'Trường hợp ứng dụng tối ưu' : 'Best Use Case'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Routing / Supervisor</strong></td>
                  <td>${isVi ? 'Một Agent giám sát trung tâm phân tích câu hỏi người dùng và định tuyến đến đúng Agent chuyên môn tương ứng.' : 'Central supervisor inspects queries and routes to domain-specific specialist agents.'}</td>
                  <td>${isVi ? 'Cổng chăm sóc khách hàng đa dịch vụ, tổng đài hỏi đáp đa lĩnh vực.' : 'Enterprise multi-service customer portals.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Sequential (Tuần tự)' : 'Sequential'}</strong></td>
                  <td>${isVi ? 'Các Agent hoạt động như một dây chuyền lắp ráp: kết quả đầu ra của Agent này là đầu vào của Agent tiếp theo.' : 'Agents execute in a linear pipeline: Agent A output becomes Agent B input.'}</td>
                  <td>${isVi ? 'Quy trình thẩm định hồ sơ vay vốn, phân tích báo cáo tài chính qua nhiều bước.' : 'Multi-step financial loan appraisal and document processing.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Parallel (Song song)' : 'Parallel'}</strong></td>
                  <td>${isVi ? 'Nhiều Agent cùng thực thi đồng thời các tác vụ độc lập trên cùng một yêu cầu, sau đó một Agent tổng hợp gom kết quả.' : 'Multiple agents execute independent sub-tasks concurrently, aggregated by a final synthesizer.'}</td>
                  <td>${isVi ? 'Phân tích dữ liệu từ nhiều nguồn độc lập, rà soát mã nguồn từ nhiều góc độ.' : 'Concurrent research across independent data repositories.'}</td>
                </tr>
                <tr>
                  <td><strong>Evaluator – Optimizer</strong></td>
                  <td>${isVi ? 'Một Agent sinh kết quả và một Agent đánh giá đóng vai trò kiểm định, lặp lại quy trình cho đến khi đạt chuẩn chất lượng.' : 'One agent generates output while an evaluator critiques it in an iterative loop until passing.'}</td>
                  <td>${isVi ? 'Viết mã nguồn phần mềm tự động, soạn thảo văn bản pháp lý đòi hỏi độ chính xác tuyệt đối.' : 'Automated software code generation and legal document drafting.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.7 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '7. Vai trò của AWS Cloud trong Triển khai Enterprise AI (The Role of AWS Cloud in Enterprise AI)' : '7. The Role of AWS Cloud in Enterprise AI'}</h3>
          <p>${isVi
            ? 'AWS Cloud cung cấp hệ sinh thái dịch vụ hoàn chỉnh, khép kín từ hạ tầng phần cứng chuyên biệt (Trainium/Inferentia), nền tảng dịch vụ mô hình nền tảng toàn diện (Amazon Bedrock, Amazon SageMaker), đến các công cụ tích hợp dữ liệu và quản trị an ninh cấp cao (AWS IAM, KMS, CloudTrail).'
            : 'AWS Cloud provides a comprehensive ecosystem bridging hardware accelerators, foundation models (Amazon Bedrock, SageMaker), and centralized governance tools (IAM, KMS, CloudTrail).'}</p>
          <p>${isVi
            ? 'Nền tảng này giúp doanh nghiệp rút ngắn đáng kể thời gian đưa sản phẩm AI ra thị trường, kiểm soát chi phí vận hành minh bạch và bảo vệ an toàn dữ liệu khách hàng theo các tiêu chuẩn khắt khe nhất.'
            : 'This foundation accelerates enterprise time-to-market, ensures transparent cost governance, and protects sensitive customer data under strict compliance frameworks.'}</p>
        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Nội dung hội thảo đã đúc kết các bài học kiến trúc mang tính sống còn đối với việc đưa AI vào môi trường sản xuất:'
            : 'The session crystallized vital architectural lessons for bringing AI systems into real-world production:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kiến trúc' : 'Architectural Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Academic vs Enterprise AI</strong></td>
                  <td>${isVi ? 'Chuyển đổi trọng tâm từ độ chính xác thuần túy sang giá trị kinh doanh, tính sẵn sàng cao và khả năng duy trì vận hành liên tục.' : 'Shifting focus from model accuracy to continuous business value and high availability.'}</td>
                </tr>
                <tr>
                  <td><strong>AI System Components</strong></td>
                  <td>${isVi ? 'Nắm vững chuỗi giá trị Data → Model → Feature → User và vòng lặp phản hồi cải tiến hệ thống.' : 'Mastering the Data → Model → Feature → User value chain and continuous feedback loops.'}</td>
                </tr>
                <tr>
                  <td><strong>Training vs Inference</strong></td>
                  <td>${isVi ? 'Phân định rõ yêu cầu tài nguyên không liên tục của Training và tính liên tục, yêu cầu độ trễ thấp của Inference.' : 'Differentiating batch periodic training compute from real-time low-latency inference demands.'}</td>
                </tr>
                <tr>
                  <td><strong>Token Economics</strong></td>
                  <td>${isVi ? 'Hiểu rõ tác động của Input/Output Tokens đến độ trễ và chi phí hóa đơn, áp dụng kỹ thuật tối ưu prompt và caching.' : 'Managing prompt token consumption to control operating expenses and inference latency.'}</td>
                </tr>
                <tr>
                  <td><strong>4 Production Pillars</strong></td>
                  <td>${isVi ? 'Xây dựng hệ thống vững chắc dựa trên 4 trụ cột: An ninh (Security), Độ tin cậy (Reliability), Mở rộng (Scalability) và Tối ưu chi phí (Cost).' : 'Ensuring systems meet Security, Reliability, Scalability, and Cost Optimization criteria.'}</td>
                </tr>
                <tr>
                  <td><strong>Elastic Scalability</strong></td>
                  <td>${isVi ? 'Tận dụng AWS Lambda, Auto Scaling và ALB để hệ thống co giãn tự động thích ứng với lưu lượng biến động.' : 'Employing AWS Lambda, ASGs, and ALB to adapt dynamically to unpredictable traffic.'}</td>
                </tr>
                <tr>
                  <td><strong>Multi-Agent Patterns</strong></td>
                  <td>${isVi ? 'Ứng dụng 4 mô hình: Supervisor, Sequential, Parallel và Evaluator-Optimizer để giải quyết quy trình nghiệp vụ phức tạp.' : 'Applying Supervisor, Sequential, Parallel, and Evaluator-Optimizer coordination patterns.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Cloud Role</strong></td>
                  <td>${isVi ? 'Đám mây AWS là bệ phóng hạ tầng, dữ liệu và công cụ quản trị giúp hiện thực hóa các giải pháp Enterprise AI quy mô lớn.' : 'AWS Cloud serves as the foundational compute, database, and governance engine for enterprise AI.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Những nguyên lý vận hành cốt lõi:' : 'Core operational principles:'}
          </p>
          <ul>
            <li>${isVi ? 'Độ chính xác của mô hình đơn thuần là chưa đủ cho các hệ thống AI cấp sản xuất.' : 'Model accuracy alone is insufficient for production AI systems.'}</li>
            <li>${isVi ? 'Enterprise AI đòi hỏi một kiến trúc đám mây toàn diện đảm bảo tính tin cậy, an toàn, có khả năng mở rộng cao và tối ưu chi phí.' : 'Enterprise AI requires reliable, secure, scalable, and cost-effective architecture.'}</li>
            <li>${isVi ? 'Hiệu năng suy luận và mức tiêu thụ token ảnh hưởng trực tiếp đến chi phí vận hành và trải nghiệm khách hàng.' : 'Inference performance and token consumption influence operational costs.'}</li>
            <li>${isVi ? 'Kiến trúc Multi-Agent là chìa khóa phân rã và tự động hóa các luồng quy trình nghiệp vụ phức tạp.' : 'Multi-Agent architecture supports complex AI workflows.'}</li>
            <li>${isVi ? 'Hạ tầng điện toán đám mây đóng vai trò nền tảng không thể thiếu trong việc triển khai và duy trì các hệ thống AI doanh nghiệp.' : 'Cloud infrastructure plays an important role in enterprise AI operations.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? 'Độ chính xác của mô hình đơn thuần là chưa đủ cho các hệ thống AI cấp sản xuất.' : 'Model accuracy alone is insufficient for production AI systems.'}</li>
            <li>${isVi ? 'Enterprise AI đòi hỏi một kiến trúc đám mây toàn diện đảm bảo tính tin cậy, an toàn, có khả năng mở rộng cao và tối ưu chi phí.' : 'Enterprise AI requires reliable, secure, scalable, and cost-effective architecture.'}</li>
            <li>${isVi ? 'Hiệu năng suy luận và mức tiêu thụ token ảnh hưởng trực tiếp đến chi phí vận hành.' : 'Inference performance and token consumption influence operational costs.'}</li>
            <li>${isVi ? 'Kiến trúc Multi-Agent hỗ trợ giải quyết hiệu quả các luồng quy trình nghiệp vụ phức tạp.' : 'Multi-Agent architecture supports complex AI workflows.'}</li>
            <li>${isVi ? 'Hạ tầng điện toán đám mây đóng vai trò quan trọng trong việc vận hành các hệ thống AI doanh nghiệp.' : 'Cloud infrastructure plays an important role in enterprise AI operations.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Đánh giá hệ thống theo 4 trụ cột vận hành:</strong> Vận dụng khung 4 trụ cột (Security, Reliability, Scalability, Cost) vào việc phân tích và thiết kế các ứng dụng AI trong quá trình thực tập và đồ án.' : '<strong>Apply 4-pillar production framework:</strong> Apply the 4 operational pillars (Security, Reliability, Scalability, Cost) to evaluate and architect production AI applications in internship projects.'}</li>
            <li>${isVi ? '<strong>Kiểm soát chi phí suy luận và token:</strong> Áp dụng các kỹ thuật nén ngữ cảnh, tối ưu prompt và prompt caching nhằm kiểm soát hóa đơn tài nguyên và cải thiện độ trễ khi gọi mô hình trên Amazon Bedrock.' : '<strong>Govern token and inference economics:</strong> Implement context window compression, prompt optimization, and caching strategies to control resource costs and reduce latency on Amazon Bedrock.'}</li>
            <li>${isVi ? '<strong>Thiết kế điều phối Multi-Agent:</strong> Ứng dụng các mô hình phối hợp Supervisor và Evaluator-Optimizer để phân tách các bài toán tự động hóa dữ liệu và kiểm thử phần mềm đa bước.' : '<strong>Design Multi-Agent workflows:</strong> Leverage Supervisor and Evaluator-Optimizer coordination patterns to automate multi-stage data processing and software testing tasks.'}</li>
            <li>${isVi ? '<strong>Tận dụng co giãn linh hoạt trên AWS:</strong> Khai thác các dịch vụ Serverless (AWS Lambda) và Auto Scaling Groups để xây dựng hạ tầng suy luận tự động thích ứng với biến động lưu lượng.' : '<strong>Leverage elastic AWS scaling:</strong> Utilize serverless services (AWS Lambda) and Auto Scaling Groups to host inference pipelines that dynamically scale with traffic.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia sự kiện với vai trò người tham dự (Attendee) nghiêm túc từ 09:00 đến 12:00 ngày 14/11/2026 tại tầng 26, Bitexco Financial Tower.' : 'Participated in the event as an attendee.'}</li>
            <li>${isVi ? 'Nghiên cứu và tiếp thu các khái niệm kỹ thuật chuyên môn được giới thiệu trong các bài chia sẻ.' : 'Studied the technical concepts introduced during the presentations.'}</li>
            <li>${isVi ? 'Hệ thống hóa và tổng hợp kiến thức về Enterprise AI và AWS Cloud vào bài báo cáo kỹ thuật cá nhân.' : 'Consolidated knowledge of enterprise AI and AWS Cloud into a personal technical report.'}</li>
            <li>${isVi ? 'Xác định các cơ hội ứng dụng tiềm năng của kiến trúc Multi-Agent và hạ tầng đám mây vào các dự án trong tương lai.' : 'Identified potential applications of Multi-Agent architectures and cloud infrastructure in future projects.'}</li>
            <li>${isVi ? 'Lưu trữ và chia sẻ kiến thức thu hoạch được thông qua website cá nhân và kho lưu trữ mã nguồn mở trên GitHub.' : 'Stored and shared the acquired technical knowledge via the personal website and open GitHub repository.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo Enterprise AI on AWS Cloud ngày 14/11/2026 mang lại bước ngoặt quan trọng trong nhận thức về Trí tuệ nhân tạo cấp doanh nghiệp.'
            : 'The Enterprise AI on AWS Cloud workshop on November 14, 2026, marked a significant milestone in my understanding of production-grade artificial intelligence.'}</p>

          <p>${isVi
            ? 'Sự kiện đã dịch chuyển hoàn toàn tư duy của bản thân từ việc chỉ quan tâm đến độ chính xác thuần túy của mô hình (Model Accuracy) sang tư duy kỹ sư giải pháp đám mây toàn diện — nơi kiến trúc hạ tầng, tính bảo mật dữ liệu, độ ổn định và chi phí vận hành mới là nền tảng quyết định sự thành bại của dự án. Các mô hình kiến trúc Multi-Agent mở ra hướng tiếp cận thực tiễn trong việc tự động hóa các bài toán nghiệp vụ phức tạp.'
            : 'The event fundamentally evolved my engineering perspective: moving beyond isolated model benchmark accuracy to a comprehensive cloud solutions architecture mindset — where infrastructure reliability, data privacy, scalability, and cost optimization dictate real-world success. The Multi-Agent architecture patterns provided a practical and robust paradigm for decomposing complex enterprise workflows.'}</p>

          <p>${isVi
            ? 'Những kiến thức thu hoạch được từ sự kiện sẽ là kim chỉ nam quan trọng cho các hoạt động nghiên cứu, thực hành và định hướng phát triển sự nghiệp chuyên sâu về Cloud Architecture và Enterprise AI trên nền tảng AWS.'
            : 'These insights establish vital guidance for advancing my specialized studies in Cloud Architecture and Enterprise AI on AWS in upcoming learning milestones.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Sự thành công của Enterprise AI không chỉ phụ thuộc vào sự thông minh của mô hình, mà phụ thuộc vào kiến trúc đám mây nâng đỡ phía sau nó.”'
              : '“The success of enterprise AI depends not only on the intelligence of the model, but also on the architecture that supports it.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #AWSStudyGroup #EnterpriseAI #ArtificialIntelligence #CloudArchitecture #MultiAgent #LLM #Scalability #FirstCloudAIJourney
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}

function setupEvents() {}

// ==========================================
// 11. 5. WORKSHOP STEPS
// ==========================================
// Workshop Full Implementation
let currentWorkshopStepId = 'ws-5-1';
// Sidebar-only Workshop navigation. The actual report content remains untouched.
const WORKSHOP_SIDEBAR_ITEMS = [
  { id:'ws-overview', vi:'Tổng quan', en:'Overview' },
  { id:'ws-5-1', vi:'5.1 Giới thiệu', en:'5.1 Introduction' },
  { id:'ws-5-2', vi:'5.2 Điều kiện chuẩn bị', en:'5.2 Prerequisites' },
  { id:'ws-5-3', vi:'5.3 Hạ tầng cốt lõi', en:'5.3 Core Infrastructure', children:[
    { id:'ws-5-3-1', vi:'5.3.1 Network', en:'5.3.1 Network' },
    { id:'ws-5-3-2', vi:'5.3.2 Database', en:'5.3.2 Database' },
    { id:'ws-5-3-3', vi:'5.3.3 Cognito', en:'5.3.3 Cognito' }
  ]},
  { id:'ws-5-4', vi:'5.4 Triển khai ứng dụng', en:'5.4 Application Deployment', children:[
    { id:'ws-5-4-1', vi:'5.4.1 ECS & ALB', en:'5.4.1 ECS & ALB' },
    { id:'ws-5-4-2', vi:'5.4.2 CloudFront', en:'5.4.2 CloudFront' },
    { id:'ws-5-4-3', vi:'5.4.3 CI/CD', en:'5.4.3 CI/CD' },
    { id:'ws-5-4-4', vi:'5.4.4 VNPAY', en:'5.4.4 Payments' }
  ]},
  { id:'ws-5-5', vi:'5.5 AI Bedrock', en:'5.5 Bedrock AI Search', children:[
    { id:'ws-5-5-1', vi:'5.5.1 Guardrails', en:'5.5.1 Guardrails' },
    { id:'ws-5-5-2', vi:'5.5.2 Service Quotas', en:'5.5.2 Service Quotas' },
    { id:'ws-5-5-3', vi:'5.5.3 Meal Recommendations', en:'5.5.3 Meal Recommendations' }
  ]},
  { id:'ws-5-6', vi:'5.6 Giám sát & Chi phí', en:'5.6 Monitoring & Costs', children:[
    { id:'ws-5-6-1', vi:'5.6.1 CloudWatch', en:'5.6.1 CloudWatch' },
    { id:'ws-5-6-2', vi:'5.6.2 CloudTrail, ALB, WAF', en:'5.6.2 CloudTrail, ALB, WAF' },
    { id:'ws-5-6-3', vi:'5.6.3 Chi phí', en:'5.6.3 Cost Optimization' }
  ]},
  { id:'ws-5-7', vi:'5.7 Dọn tài nguyên', en:'5.7 Resource Cleanup' },
  { id:'ws-5-8', vi:'5.8 Kiểm thử & Xử lý sự cố', en:'5.8 Testing & Troubleshooting' }
];
let workshopSidebarOpen = false;
let workshopSidebarLastRoute = null;
const workshopExpandedGroups = new Set();
let currentWorkshopInnerPart = null;

function workshopSidebarStep(step) {
  if (step.startsWith('ws-5-2-part-')) return 'ws-5-2';
  if (step.startsWith('ws-5-8-part-')) return 'ws-5-8';
  return step;
}

function openWorkshopSidebarStep(stepId) {
  const targetId = workshopSidebarStep(stepId);
  currentWorkshopInnerPart = /^(ws-5-2|ws-5-8)-part-/.test(stepId) ? stepId : null;
  const activeRoute = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (activeRoute !== 'workshop') navigateTo('workshop');

  const parentId = stepId.startsWith('ws-5-2-part-') ? 'ws-5-2' :
    stepId.startsWith('ws-5-8-part-') ? 'ws-5-8' :
    (stepId.match(/^ws-5-[3456](?=-)/) || [null])[0];
  if (parentId) workshopExpandedGroups.add(parentId);
  workshopSidebarOpen = true;
  switchWorkshopTab(targetId);

  if (currentWorkshopInnerPart) {
    const parent = currentWorkshopInnerPart.startsWith('ws-5-2-part-') ? 'ws-5-2' : 'ws-5-8';
    const group = WORKSHOP_SIDEBAR_ITEMS.find(item => item.id === parent);
    const section = group?.children?.find(item => item.id === currentWorkshopInnerPart);
    const pane = document.getElementById('pane-' + parent);
    const headings = pane ? pane.querySelectorAll('h3.report-h3') : [];
    const heading = section ? headings[section.heading] : null;
    if (heading) requestAnimationFrame(() => heading.scrollIntoView({ behavior:'smooth', block:'start' }));
  }
  syncWorkshopSidebar();
}

function toggleWorkshopSidebar() {
  const isWorkshop = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') === 'workshop';
  if (!isWorkshop) {
    workshopSidebarOpen = true;
    navigateTo('workshop');
  } else {
    workshopSidebarOpen = !workshopSidebarOpen;
  }
  syncWorkshopSidebar();
}

function toggleWorkshopSidebarGroup(id) {
  if (workshopExpandedGroups.has(id)) workshopExpandedGroups.delete(id);
  else workshopExpandedGroups.add(id);
  syncWorkshopSidebar();
}

function syncWorkshopSidebar() {
  const tree = document.getElementById('workshop-sidebar-tree');
  const toggle = document.getElementById('workshop-sidebar-toggle');
  if (!tree || !toggle) return;
  const lang = (window.app && window.app.currentLang) || 'vi';
  const activeRoute = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  const isWorkshop = activeRoute === 'workshop';
  const current = currentWorkshopInnerPart || currentWorkshopStepId;
  // Auto-expand ONLY on entry into Workshop, never on every refresh or click.
  // Otherwise the user could never collapse the menu while viewing Workshop.
  if (isWorkshop && workshopSidebarLastRoute !== 'workshop') {
    workshopSidebarOpen = true;
    const parent = (current.match(/^ws-5-[23456](?=-|$)/) || [null])[0];
    if (parent) workshopExpandedGroups.add(parent);
  }
  workshopSidebarLastRoute = isWorkshop ? 'workshop' : activeRoute;
  tree.hidden = !workshopSidebarOpen;
  toggle.classList.toggle('active', isWorkshop);
  toggle.classList.toggle('expanded', workshopSidebarOpen);
  toggle.setAttribute('aria-expanded', String(workshopSidebarOpen));
  toggle.setAttribute('aria-label', workshopSidebarOpen ?
    (lang==='vi'?'Thu gọn các mục Workshop':'Collapse Workshop sections') :
    (lang==='vi'?'Mở các mục Workshop':'Expand Workshop sections'));
  const chevron = toggle.querySelector('.workshop-chevron');
  if (chevron) chevron.textContent = workshopSidebarOpen ? '▾' : '▸';
  if (!workshopSidebarOpen) return;
  tree.replaceChildren();
  WORKSHOP_SIDEBAR_ITEMS.forEach(item => {
    const group = document.createElement('div');
    group.className = 'workshop-nav-group';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'workshop-nav-link workshop-nav-parent';
    btn.classList.toggle('selected', current === item.id);
    const label = document.createElement('span');
    label.className = 'workshop-nav-title';
    label.textContent = item[lang];
    btn.append(label);
    if (item.children && item.children.length) {
      const expanded = workshopExpandedGroups.has(item.id);
      const arrow = document.createElement('span');
      arrow.className = 'workshop-nav-arrow';
      arrow.textContent = expanded ? '▾' : '▸';
      arrow.setAttribute('aria-hidden','true');
      btn.append(arrow);
      btn.setAttribute('aria-expanded', String(expanded));
      btn.setAttribute('aria-label', (lang==='vi'?'Mở/thu gọn ':'Expand/collapse ') + item[lang]);
      // Click anywhere on the FULL row to open/collapse AND visit that section.
      btn.addEventListener('click', () => {
        const willExpand = !workshopExpandedGroups.has(item.id);
        openWorkshopSidebarStep(item.id);
        if (willExpand) workshopExpandedGroups.add(item.id);
        else workshopExpandedGroups.delete(item.id);
        syncWorkshopSidebar();
      });
    } else {
      btn.addEventListener('click', () => openWorkshopSidebarStep(item.id));
    }
    group.append(btn);
    if (item.children && workshopExpandedGroups.has(item.id)) {
      const sub = document.createElement('div');
      sub.className = 'workshop-nav-children';
      item.children.forEach(child => {
        const childBtn = document.createElement('button');
        childBtn.type = 'button';
        childBtn.className = 'workshop-nav-link workshop-nav-child';
        childBtn.textContent = child[lang];
        childBtn.classList.toggle('selected', current === child.id);
        childBtn.addEventListener('click', () => openWorkshopSidebarStep(child.id));
        sub.append(childBtn);
      });
      group.append(sub);
    }
    tree.append(group);
  });
}

// Back/next controls are added only to article/detail pages, never list cards.
const BLOG_DETAIL_ORDER = ['s3-express-one-zone','aws-event-driven-architecture','aws-ec2-identity-containment'];
const EVENT_DETAIL_ORDER = ['aws-cloud-ai-day-hanoi-2026','fireside-chat-dr-werner-vogels','first-cloud-ai-journey-24-10-2026','enterprise-ai-on-aws-cloud'];
function updateDetailPager(route) {
  const isEvent = route.startsWith('events/');
  const isBlog = route.startsWith('blogs/');
  if (!isEvent && !isBlog) return;
  const slug = route.split('/')[1];
  const order = isEvent ? EVENT_DETAIL_ORDER : BLOG_DETAIL_ORDER;
  const index = order.indexOf(slug);
  if (index < 0) return;
  const view = document.getElementById(isEvent ? 'view-events-'+slug : 'view-blogs-s3-express-one-zone');
  if (!view) return;
  view.querySelectorAll('.detail-prev-next').forEach(el=>el.remove());
  const lang = (window.app && window.app.currentLang) || 'vi';
  const labels = lang==='vi' ? ['← Bài trước', 'Bài tiếp theo →'] : ['← Previous', 'Next →'];
  const bar = document.createElement('nav');
  bar.className='detail-prev-next'; bar.setAttribute('aria-label', lang==='vi'?'Chuyển bài':'Article navigation');
  [index-1,index+1].forEach((position,n)=>{
    const btn=document.createElement('button'); btn.type='button';
    btn.className='detail-pager-btn'; btn.textContent=labels[n];
    btn.disabled=position<0||position>=order.length;
    if (!btn.disabled) btn.addEventListener('click',()=>navigateTo((isEvent?'events/':'blogs/')+order[position]));
    bar.append(btn);
  });
  const container = isEvent ? (view.querySelector('[id^="event-detail-"]') || view) : document.getElementById('blog-detail-s3-express-container');
  if (container) container.append(bar);
}


function switchWorkshopTab(stepId) {
  const container = document.getElementById('workshop-content-container');
  if (!container) return;

  // Only switch to a real article panel. Sub-headings in 5.2/5.8 are
  // mapped to their parent panel by workshopSidebarStep().
  const targetId = workshopSidebarStep(stepId);
  currentWorkshopStepId = targetId;

  // The sidebar can be used from any page and after a language change.
  // Rebuild Workshop content if its target panel is not available yet.
  if (!container.querySelector('#pane-' + targetId)) {
    renderWorkshopView();
  }

  const target = container.querySelector('#pane-' + targetId);
  if (!target) {
    console.warn('Workshop section not found:', targetId);
    return;
  }
  container.querySelectorAll('.ws-module-pane').forEach(pane => {
    pane.classList.toggle('active', pane === target);
  });
  container.querySelectorAll('.ws-tab-btn').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-step') === targetId);
  });

  if (targetId !== 'ws-5-2' && targetId !== 'ws-5-8') {
    currentWorkshopInnerPart = null;
  }
  syncWorkshopSidebar();
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function copyCodeSnippet(btn) {
  const wrap = btn.closest('.code-snippet-wrap');
  if (!wrap) return;

  const code = wrap.querySelector('code');
  if (!code) return;

  const text = (code.innerText || code.textContent || '').trim();
  const originalHTML = btn.innerHTML;

  navigator.clipboard.writeText(text).then(() => {
    // Chỉ thay biểu tượng bằng dấu tích khi sao chép thành công
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    `;

    btn.style.color = '#10B981';
    btn.style.borderColor = '#10B981';
    btn.title = 'Đã sao chép!';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.color = '';
      btn.style.borderColor = '';
      btn.title = 'Sao chép';
    }, 2000);
  }).catch(err => {
    console.error('Copy failed:', err);
  });
}


function renderEvidenceBox(path, title, caption, isVi) {
  const clickTooltip = isVi ? 'Nhấp để xem ảnh phóng to' : 'Click to enlarge image';
  const tagLabel = isVi ? 'Ảnh minh chứng' : 'Evidence Screenshot';
  const placeholderNote = isVi
    ? 'Hình ảnh minh chứng sẽ được bổ sung.'
    : 'Evidence screenshot will be updated.';

  return `
    <div class="ws-evidence-box">
      <div class="ws-evidence-header">
        <span class="ws-evidence-tag">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span>${tagLabel}</span>
        </span>
        <span class="ws-evidence-path">${path}</span>
      </div>
      <div class="ws-evidence-preview" onclick="openBlogImageModal('${path}', '${title}')" title="${clickTooltip}">
        <img src="${path}" alt="${title}" class="ws-evidence-img"
             onload="this.style.display='inline-block'; const p = this.nextElementSibling; if (p) p.style.display='none';"
             onerror="this.style.display='none'; const p = this.nextElementSibling; if (p) p.style.display='flex';"
             loading="lazy" />
        <div class="ws-evidence-placeholder">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <div class="ws-placeholder-title">${title}</div>
          <div class="ws-placeholder-desc">${placeholderNote}</div>
        </div>
      </div>
      <div class="ws-evidence-caption">
        <strong>${title}:</strong> ${caption}
      </div>
    </div>
  `;
}

function renderPrevNextBar(prevId, prevTitle, nextId, nextTitle) {
  return `
    <div class="ws-prev-next-bar">
      ${prevId
        ? `<button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('${prevId}')">← ${prevTitle}</button>`
        : `<span></span>`}
      ${nextId
        ? `<button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('${nextId}')">${nextTitle} →</button>`
        : `<span></span>`}
    </div>
  `;
}



// Workshop 5.6–5.7: exact filenames confirmed from the user’s folder screenshots.
function renderWorkshopEvidence568(key, viCaption, enCaption, isVi) {
  const paths = {
    'monitor': ['5.6-monitoring/monitoring-step1.png'],
    'logs': ['5.6-monitoring/monitoring-step2.png'],
    'audit': ['5.6-monitoring/audit-waf-step1.png'],
    'cost': ['5.6-monitoring/cost-step1.png'],
    'credits': ['5.6-monitoring/cost-step2.png'],
    'cleanup1': ['5.7-cleanup/cleanup-step1.png'],
    'cleanup2': ['5.7-cleanup/cleanup-step2.png'],
    'cleanup3': ['5.7-cleanup/cleanup-step3.png'],
    'cleanup4': ['5.7-cleanup/cleanup-step4.png'],
    'architecture': ['5.6-monitoring/monitoring-cost.png']
  };
  const options = paths[key] || [];
  if (!options.length) return '';
  const base = 'assets/images/workshop/';
  const urls = options.map(x => base + x);
  const caption = isVi ? viCaption : enCaption;
  const escapeAttr = x => x.replace(/&/g, '&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const url0 = escapeAttr(urls[0]);
  const title = escapeAttr(caption);
  const alt = escapeAttr(caption);
  const safeList = escapeAttr(JSON.stringify(urls));
  return `<figure class="ws-evidence-568" style="display:block;" data-image-options='${safeList}'>
    <img src="${url0}" alt="${alt}" loading="lazy" class="report-figure-img"
      style="cursor:zoom-in;max-width:100%;"
      onclick="openBlogImageModal(this.src, this.alt)"
      onload="this.closest('figure').style.display='block'"
      onerror="workshopEvidence568Next(this)" />
    <figcaption class="report-figure-caption">${caption}</figcaption>
  </figure>`;
}
function workshopEvidence568Next(img) {
  const figure = img.closest('figure');
  if (!figure) return;
  let urls = [];
  try { urls = JSON.parse(figure.dataset.imageOptions || '[]'); } catch (_) { return; }
  const next = (Number(img.dataset.candidateIndex) || 0) + 1;
  if (next < urls.length) {
    img.dataset.candidateIndex = String(next);
    img.src = urls[next];
  } else {
    figure.style.display = 'none';
  }
}

function getWorkshopViHtml() {
  return `
    <div class="tech-report">
      <style>
        #workshop-content-container .code-snippet-header a.code-filename-link,
        #workshop-content-container .code-snippet-header a.code-filename-link:visited,
        #workshop-content-container .code-snippet-header a.code-filename-link:hover {
          color: #ffffff !important;
          text-decoration-color: rgba(255,255,255,0.65);
        }
      </style>
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
      <!-- Workshop navigation lives in the sidebar. -->

      <!-- MODULE PANES -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-overview' ? 'active' : ''}" id="pane-ws-overview">

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
        <li><a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">5.1 Giới thiệu →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.1. Giới thiệu</h1>


    </header>

    <section class="report-section">
      <h3 class="report-h3">CloudFront → ALB → ECS</h3>
      <p class="report-p">Theo dõi luồng từ trình duyệt tới DB và AI, xác định môi trường dev duy nhất.</p>

      <h3 class="report-h3">Bedrock và Guardrails</h3>
      <p class="report-p">Nova 2 Lite diễn giải yêu cầu thành tool chỉ đọc. Code ghép số liệu từ PostgreSQL và kiểm tra đầu ra trước khi trả lời.</p>

      <h2 class="report-h2">Workshop overview</h2>
      <h3 class="report-h3">AWS architecture reference</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/aws-architecture.png', 'AWS architecture reference')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/aws-architecture.png', 'AWS architecture reference')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.1-overview/aws-architecture.png" alt="AWS architecture reference" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Sơ đồ kiến trúc AWS vẽ trên draw.io bằng bộ AWS Architecture Icons, cập nhật Multi-AZ và AWS STS ngày 25/11/2026</div>
    </div>



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


<div class="code-snippet-wrap">
  <div class="code-snippet-header">
    <span class="code-filename-link" style="color:#93C5FD;">
      AWS Architecture – Luồng hoạt động hệ thống
    </span>
    <button type="button" class="btn-copy-code"
            onclick="copyCodeSnippet(this)"
            title="Sao chép" aria-label="Sao chép">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="8" y="8" width="13" height="13" rx="2"></rect>
  <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path>
</svg>

    </button>
  </div>
  <pre class="code-snippet-pre"><code class="language-text">1. Amazon CloudFront phân phối React SPA và ảnh sản phẩm từ hai bucket Amazon S3 riêng tư, qua Origin Access Control.

2. Các yêu cầu /api/* đi qua Internet Gateway tới Application Load Balancer. ALB chỉ nhận lưu lượng từ dải IP của CloudFront và kèm header bí mật.

3. Backend Spring Boot (Java 21) chạy trên Amazon ECS Fargate (ARM64), đặt ở public subnet và không dùng NAT để tiết kiệm chi phí. ECS service chạy 2 task trên 2 Availability Zone: một AZ gặp sự cố thì task ở AZ còn lại vẫn phục vụ. Mỗi lớp có security group riêng: ALB chỉ nhận từ CloudFront, ECS chỉ nhận từ ALB, RDS chỉ nhận từ ECS qua cổng 5432.

4. Dữ liệu nằm trên Amazon RDS for PostgreSQL Multi-AZ ở private subnet: có bản dự phòng ở AZ thứ hai, tự chuyển sang khi AZ chính lỗi. Dữ liệu được mã hoá bằng khoá AWS KMS. Mật khẩu do AWS Secrets Manager quản lý. Truy vấn dùng SQL tham số hoá; trừ kho bằng UPDATE có điều kiện trong transaction.</code></pre>
</div>


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

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/cloudfront-evidence.png', 'Tổng quan')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/cloudfront-evidence.png', 'Tổng quan')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.1-overview/cloudfront-evidence.png" alt="Tổng quan" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">CloudFront distribution: tên miền *.cloudfront.net, hỗ trợ HTTP/3, root object index.html</div>
    </div>


      <p class="report-p">Đối chiếu /api/products, đăng nhập và kịch bản demo trong docs/demo.md. Snapshot test ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Đây là kết quả được ghi lại, không phải lượt chạy trong báo cáo.</p>
      <p class="report-p">Các bước kiểm thử bằng lệnh và những sự cố thực tế đã gặp được ghi ở <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/diagrams/architecture-star.txt" target="_blank">docs/diagrams/architecture-star.txt</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-overview')">← Tổng quan</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">5.2 Điều kiện chuẩn bị →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.2. Điều kiện chuẩn bị</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <h3 class="report-h3">Quyền IAM</h3>
      <p class="report-p">Chuẩn bị công cụ và quyền trước khi dựng hạ tầng.</p>
      <p class="report-p">Cài Terraform ≥1.10, AWS CLI, Java 21, Node và Docker. Tạo nutrition-boundary bằng quyền quản trị. Gán nutrition-plan và nutrition-apply qua IAM Identity Center theo docs/aws-setup/README.md. Plan dùng ReadOnlyAccess và quyền state cần thiết; apply có quyền dịch vụ theo vùng và ràng buộc role nutrition-*. Cập nhật ngoại lệ Bedrock Tokyo và WAF us-east-1 theo phần cuối tài liệu.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/README.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">aws sso login --sso-session nutrition
$env:TF_VAR_owner = "&lt;tên bạn&gt;"</code></pre>
    </div>


      <h3 class="report-h3">Điều kiện chuẩn bị</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/iam-identity-center.png', 'Điều kiện chuẩn bị')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/iam-identity-center.png', 'Điều kiện chuẩn bị')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.2-prerequisites/iam-identity-center.png" alt="Điều kiện chuẩn bị" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">IAM Identity Center: hai permission set nutrition-plan (chỉ đọc) và nutrition-apply (triển khai)</div>
    </div>


      <p class="report-p">Kiểm tra profile đăng nhập và boundary trước bước bootstrap. Không ghi thông tin phiên, token hay dữ liệu đăng nhập vào báo cáo.</p>
      <p class="report-p">InvalidGrantException: phiên SSO hết hạn. Đăng nhập lại bằng aws sso login --sso-session nutrition trước khi tiếp tục.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>.</p>

      <h3 class="report-h3">Dựng tài nguyên bằng Terraform</h3>
      <p class="report-p">Khởi tạo state S3 và quy trình kiểm tra plan.</p>
      <p class="report-p">Từ gốc repo, thực hiện bootstrap theo infra/README.md. Bucket state có prevent_destroy. Điền backend.hcl từ bản example với tên bucket thực tế ở terminal riêng. CI chạy fmt và validate với backend=false; khi vận hành dev dùng init backend S3, plan -out=tfplan, đọc thay đổi rồi người dùng mới apply. Brief ghi ngân sách 100 USD. Mã bootstrap hiện chỉ quản lý bucket state, chưa có tài nguyên Budgets.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/envs/dev/versions.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/envs/dev/versions.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">backend "s3" {
  key          = "envs/dev/terraform.tfstate"
  region       = "ap-southeast-1"
  encrypt      = true
  use_lockfile = true
}
}</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/.github/workflows/ci.yml" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> .github/workflows/ci.yml</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-yaml">- name: Format check
  run: terraform fmt -check -recursive infra

- name: Validate bootstrap
  run: |
    terraform -chdir=infra/bootstrap init -backend=false -input=false
    terraform -chdir=infra/bootstrap validate

- name: Validate envs/dev
  run: |
    terraform -chdir=infra/envs/dev init -backend=false -input=false
    terraform -chdir=infra/envs/dev validate</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/README.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">terraform -chdir=infra/bootstrap init
terraform -chdir=infra/bootstrap plan -out=tfplan

# Đọc plan xong, bạn tự apply:
$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/bootstrap apply tfplan

terraform -chdir=infra/bootstrap output state_bucket</code></pre>
    </div>


      <h3 class="report-h3">Bootstrap Terraform</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/aws-budgets.png', 'Bootstrap Terraform')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/aws-budgets.png', 'Bootstrap Terraform')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.2-prerequisites/aws-budgets.png" alt="Bootstrap Terraform" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">AWS Budgets: ngân sách 100 USD, đã dùng 15,06 USD, dự báo 26,95 USD</div>
    </div>


      <p class="report-p">Kiểm tra key envs/dev/terraform.tfstate, mã hóa và use_lockfile=true. Đọc plan để phát hiện thay thế, xóa và quyền IAM trước apply.</p>
      <p class="report-p">Khóa state từng bị kẹt sau apply dở. Chỉ khi xác nhận không còn tiến trình đang dùng state, chủ repo mới dùng terraform force-unlock ; không xóa khóa đang hoạt động.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/envs/dev/versions.tf" target="_blank">infra/envs/dev/versions.tf</a>.</p>
      <p class="report-p">Ngân sách 100 USD được tạo thủ công trên Console (không nằm trong Terraform). Ngày 25/11/2026: đã dùng 15,06 USD, dự báo cả tháng 26,95 USD, trạng thái Healthy.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">← 5.1 Giới thiệu</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">5.3 Hạ tầng cốt lõi →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3. Hạ tầng cốt lõi</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Chuẩn bị mạng, cơ sở dữ liệu và xác thực làm nền cho backend. Thực hiện các bước dưới đây theo thứ tự.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/core-infra.png', '5.3 Hạ tầng cốt lõi')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/core-infra.png', '5.3 Hạ tầng cốt lõi')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/core-infra.png" alt="5.3 Hạ tầng cốt lõi" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Sơ đồ thành phần: VPC hai AZ, subnet, security group, RDS chính và bản dự phòng, Cognito</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-1');">Tạo mạng VPC</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-2');">Tạo cơ sở dữ liệu RDS</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-3');">Cấu hình Cognito</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">← 5.2 Điều kiện chuẩn bị</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">5.3.1 Tạo mạng VPC →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-1' ? 'active' : ''}" id="pane-ws-5-3-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.1. Tạo mạng VPC</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Tách luồng truy cập ALB, ECS và RDS.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Module network tạo VPC, hai public subnet và hai private-db subnet, Internet Gateway và các SG. Public subnet có tuyến ra Internet. ALB nhận prefix list origin-facing CloudFront; ECS chỉ nhận SG ALB, RDS chỉ nhận cổng 5432 từ SG ECS. S3 gateway endpoint gắn route table public và db. D15 giữ task ở public subnet có IP công khai để tiết kiệm NAT.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/network/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/network/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">data "aws_ec2_managed_prefix_list" "cloudfront" {
  name = "com.amazonaws.global.cloudfront.origin-facing"
}</code></pre>
    </div>


      <h3 class="report-h3">5.3.1-network-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step1.png', '5.3.1-network-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step1.png', '5.3.1-network-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/network-step1.png" alt="5.3.1-network-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">VPC resource map: 4 subnet ở 2 AZ (public và db), route table, Internet Gateway và S3 endpoint</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Đối chiếu VPC resource map, route table và chuỗi SG với Terraform. Không diễn giải hai subnet DB thành RDS Multi-AZ.</p>

      <h3 class="report-h3">Mạng VPC</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step2.png', 'Mạng VPC')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step2.png', 'Mạng VPC')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/network-step2.png" alt="Mạng VPC" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Security group nutrition-dev-rds: chỉ nhận PostgreSQL 5432 từ security group của ECS</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/network/main.tf" target="_blank">infra/modules/network/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">← 5.3 Hạ tầng cốt lõi</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">5.3.2 Tạo cơ sở dữ liệu RDS →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-2' ? 'active' : ''}" id="pane-ws-5-3-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.2. Tạo cơ sở dữ liệu RDS</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Dựng PostgreSQL private và quản lý schema có phiên bản.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Module rds cấu hình <strong>db.t4g.micro</strong>, 20 GB gp3, mã hóa và Multi-AZ (bản dự phòng ở AZ thứ hai, tự chuyển khi AZ chính lỗi; D33). Biến <strong>rds_multi_az</strong> trong <strong>infra/envs/dev</strong> mặc định true. Mật khẩu do RDS quản lý trong Secrets Manager, khóa mã hóa do AWS quản lý. Bật deletion protection. Spring Boot chạy migration Flyway V1–V11. V10 lưu payment_events; V11 lưu nutrition_profiles. Schema và API cũ chỉ là bản nền, đối chiếu migration và D32 khi mô tả phần mở rộng.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/rds/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/rds/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">manage_master_user_password = true
db_subnet_group_name        = aws_db_subnet_group.main.name
vpc_security_group_ids      = [var.security_group_id]
publicly_accessible         = false

# Standby copy in the second AZ with automatic failover (prod-like HA; adds instance hours
# while the app is on and doubles storage).
multi_az = var.multi_az</code></pre>
    </div>


      <h3 class="report-h3">5.3.2-database-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step1.png', '5.3.2-database-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step1.png', '5.3.2-database-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/database-step1.png" alt="5.3.2-database-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">RDS: db.t4g.micro, PostgreSQL 17.9, mã hóa KMS, Multi-AZ = Yes, secondary zone ap-southeast-1b</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Kiểm tra RDS không public, mã hóa bật và task đọc được secret theo role. Đối chiếu migration trong backend/src/main/resources/db/migration.</p>

      <h3 class="report-h3">RDS và Flyway</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step2.png', 'RDS và Flyway')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step2.png', 'RDS và Flyway')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/database-step2.png" alt="RDS và Flyway" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">RDS Connectivity & security: Publicly accessible = No, subnet group nutrition-dev-db gồm 2 subnet riêng</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Terraform không tự bật RDS đang stopped. demo-infra.ps1 up gọi start-db-instance và chờ available trước apply.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/rds/main.tf" target="_blank">infra/modules/rds/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">← 5.3.1 Tạo mạng VPC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">5.3.3 Cấu hình Cognito →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-3' ? 'active' : ''}" id="pane-ws-5-3-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.3. Cấu hình Cognito</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Cấp danh tính từ JWT và phân quyền USER / ADMIN.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Tạo User Pool và SPA client không có client secret qua module cognito. Client dùng SRP, không hosted UI. Hai nhóm USER và ADMIN được khai báo bằng Terraform. Backend kiểm issuer, token_use, client_id và hạn token; lấy sub và cognito:groups từ JWT.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/cognito/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/cognito/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_cognito_user_group" "admin" {
  name         = "ADMIN"
  user_pool_id = aws_cognito_user_pool.users.id
}

resource "aws_cognito_user_group" "user" {
  name         = "USER"
  user_pool_id = aws_cognito_user_pool.users.id
}</code></pre>
    </div>


      <h3 class="report-h3">5.3.3-cognito-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step1.png', '5.3.3-cognito-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step1.png', '5.3.3-cognito-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/cognito-step1.png" alt="5.3.3-cognito-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Cognito user pool nutrition-dev-users ở Singapore</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Theo docs/demo.md: API thiếu token trả 401, người dùng thường gọi API admin trả 403. Không chụp token hoặc dữ liệu người dùng.</p>

      <h3 class="report-h3">Đăng nhập Cognito</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step2.png', 'Đăng nhập Cognito')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step2.png', 'Đăng nhập Cognito')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/cognito-step2.png" alt="Đăng nhập Cognito" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Cognito user pool: hai nhóm ADMIN và USER</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/cognito/main.tf" target="_blank">infra/modules/cognito/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">← 5.3.2 Tạo cơ sở dữ liệu RDS</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">5.4 Triển khai ứng dụng →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4. Triển khai ứng dụng</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Triển khai backend ARM64, web React và thanh toán thử. Pipeline dùng token OIDC của GitHub, được AWS STS đổi lấy phiên AWS tạm thời của role deploy.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/deploy-app.png', '5.4 Triển khai ứng dụng')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/deploy-app.png', '5.4 Triển khai ứng dụng')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/deploy-app.png" alt="5.4 Triển khai ứng dụng" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Sơ đồ thành phần: CloudFront → S3 / ALB → 2 task ECS, ECR, GitHub Actions OIDC qua AWS STS, VNPAY</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-1');">ECS Fargate và ALB</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-2');">Frontend trên S3 và CloudFront</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-3');">CI/CD với GitHub Actions OIDC</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-4');">Thanh toán VNPAY sandbox</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">← 5.3.3 Cấu hình Cognito</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">5.4.1 ECS Fargate và ALB →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-1' ? 'active' : ''}" id="pane-ws-5-4-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.1. ECS Fargate và ALB</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Triển khai backend ARM64 với origin được giới hạn.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">ECR giữ image backend. Workflow build linux/arm64 để khớp runtime_platform. Task chạy 0,5 vCPU / 1 GB, desired count 1 trong <strong>public</strong> subnet có IP công khai. ALB listener chỉ forward khi header bí mật khớp, SG giới hạn CloudFront. Header sinh trong Terraform state, không chép vào báo cáo. Health check dùng /actuator/health.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/service/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/service/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">runtime_platform {
  operating_system_family = "LINUX"
  cpu_architecture       = "ARM64"
}</code></pre>
    </div>


      <h3 class="report-h3">5.4.1-ecs-alb-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step1.png', '5.4.1-ecs-alb-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step1.png', '5.4.1-ecs-alb-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/ecs-alb-step1.png" alt="5.4.1-ecs-alb-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">ECS service nutrition-dev-backend: 2 task đang chạy, deployment Success</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Kiểm tra task RUNNING, target healthy và tag image. CloudFront → ALB dùng HTTP do chưa có domain; đây là hạn chế được chấp nhận, chưa có HTTPS origin.</p>

      <h3 class="report-h3">ECS Fargate và ALB</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step2.png', 'ECS Fargate và ALB')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step2.png', 'ECS Fargate và ALB')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/ecs-alb-step2.png" alt="ECS Fargate và ALB" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Target group nutrition-dev-api: 2 target khỏe mạnh ở cổng 8080</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/service/main.tf" target="_blank">infra/modules/service/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">← 5.4 Triển khai ứng dụng</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">5.4.2 Frontend trên S3 và CloudFront →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-2' ? 'active' : ''}" id="pane-ws-5-4-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.2. Frontend trên S3 và CloudFront</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Phân phối SPA và ảnh từ bucket riêng tư.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Build React theo workflow deploy. Module frontend dùng OAC SigV4 để CloudFront đọc S3. Function viết lại đường dẫn SPA sang index.html, không thay lỗi API bằng HTML. Behavior /api/* tắt cache, chuyển Authorization tới ALB. Bucket ảnh tách riêng để s3 sync --delete frontend không xóa ảnh.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/frontend/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/frontend/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "\${var.name_prefix}-frontend"
  description                       = "CloudFront access to the frontend bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}</code></pre>
    </div>


      <h3 class="report-h3">5.4.2-cloudfront-frontend-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step1.png', '5.4.2-cloudfront-frontend-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step1.png', '5.4.2-cloudfront-frontend-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cloudfront-step1.png" alt="5.4.2-cloudfront-frontend-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">CloudFront behaviors: /images/* → S3 ảnh, /api/* → ALB (HTTPS only), mặc định → S3 frontend</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Mở route sâu của SPA và tải lại; kiểm tra API trả JSON và ảnh tải qua /images/*. Đối chiếu bucket chặn public.</p>

      <h3 class="report-h3">Frontend S3 và CloudFront</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step2.png', 'Frontend S3 và CloudFront')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step2.png', 'Frontend S3 và CloudFront')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cloudfront-step2.png" alt="Frontend S3 và CloudFront" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Bucket frontend: Block all public access = On, chỉ CloudFront đọc qua OAC</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Favicon không hiện trên trang thật vì CloudFront trả 403: bước build tắt thư mục <strong>public</strong> nên file icon không được tải lên S3. Đã sửa cấu hình Vite và thêm bước kiểm tra icon trong bản build production. Các sự cố khác xem <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/frontend/main.tf" target="_blank">infra/modules/frontend/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">← 5.4.1 ECS Fargate và ALB</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">5.4.3 CI/CD với GitHub Actions OIDC →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-3' ? 'active' : ''}" id="pane-ws-5-4-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.3. CI/CD với GitHub Actions OIDC</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Kiểm tra và deploy mà không lưu access key dài hạn.</p>

      <h3 class="report-h3">1. Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">ci.yml chạy Terraform fmt/validate, backend verify và frontend checks. deploy.yml chạy trên master hoặc workflow_dispatch. Workflow xin GitHub một token OIDC rồi gọi AWS STS (sts:AssumeRoleWithWebIdentity) để đổi lấy quyền tạm thời của role nutrition-dev-github-deploy; trust policy chỉ chấp nhận token của nhánh master trong repo dự án, và quyền hết hạn sau khoảng 1 giờ nên GitHub không phải lưu access key. Sau đó workflow build image ARM64, đẩy tag SHA và latest vào ECR. Nếu ECS đang tắt thì chỉ đẩy image; up dùng latest. Frontend build, sync S3 và invalidate index.html. Điền repository variables theo infra/README.md.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/github-oidc/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/github-oidc/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">    variable = "token.actions.githubusercontent.com:sub"
    values   = ["\${var.github_subject_prefix}:ref:refs/heads/\${var.deploy_branch}"]
  }
}</code></pre>
    </div>



    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step1.png', 'IAM role nutrition-dev-github-deploy')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step1.png', 'IAM role nutrition-dev-github-deploy')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cicd-step1.png" alt="IAM role nutrition-dev-github-deploy" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">IAM role nutrition-dev-github-deploy: chỉ tin GitHub OIDC cho nhánh master của repo dự án</div>
    </div>



<h3 class="report-h3">2. Kiểm tra kết quả</h3>
<p class="report-p">
  Đối chiếu workflow với một run thực tế của chủ repo; kiểm tra trust policy aud và immutable subject prefix cùng nhánh master.
</p>

<div class="report-figure">
  <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step2.png', 'CI/CD qua OIDC')">
    <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
  </p>
  <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step2.png', 'CI/CD qua OIDC')" title="Nhấp để phóng to" style="cursor: zoom-in;">
    <img src="assets/images/workshop/5.4-deployment/cicd-step2.png" alt="CI/CD qua OIDC" class="report-figure-img" loading="lazy" />
  </div>
  <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">
    GitHub Actions: workflow Deploy to AWS dev chạy thành công (backend image, frontend, publish)
  </div>
</div>



      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">PR #36 sửa OIDC trust policy theo immutable subject. Đối chiếu github_subject_prefix trong module và cấu hình hiện tại của GitHub.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/github-oidc/main.tf" target="_blank">infra/modules/github-oidc/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">← 5.4.2 Frontend trên S3 và CloudFront</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">5.4.4 Thanh toán VNPAY sandbox →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-4' ? 'active' : ''}" id="pane-ws-5-4-4">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.4. Thanh toán VNPAY sandbox</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Xác minh sandbox, phân quyền và các luồng demo.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">Bật app bằng demo-infra.ps1 up -Vnpay theo runbook. VNPAY sandbox dùng HMAC-SHA512, IPN chỉ cập nhật đơn khi chữ ký và số tiền đúng. Return URL chỉ đọc. Đơn bỏ dở tự hủy sau 15 phút và trả kho đúng một lần. V10 ghi payment_events, API admin lọc/phân trang nhật ký; không lưu chữ ký hay thông tin bí mật. Chạy các kịch bản docs/demo.md, gồm fail-closed và COD.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/payments/VnpaySigner.java" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> backend/src/main/java/com/nutrition/payments/VnpaySigner.java</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-java">static String canonical(Map&lt;String, String&gt; params) {
  return new TreeMap&lt;&gt;(params)
      .entrySet().stream()
      .filter(e -&gt; e.getValue() != null &amp;&amp; !e.getValue().isEmpty())
      .filter(e -&gt; !e.getKey().equals(HASH) &amp;&amp; !e.getKey().equals(HASH_TYPE))
      .map(e -&gt; encode(e.getKey()) + "=" + encode(e.getValue()))
      .collect(Collectors.joining("&amp;"));
}</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> scripts/demo-infra.ps1</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">.\scripts\demo-infra.ps1 up -Vnpay          # also enable VNPAY sandbox payments (D27)
.\scripts\demo-infra.ps1 up -Vnpay -Waf     # also put AWS WAF in front of CloudFront</code></pre>
    </div>


      <h3 class="report-h3">5.4.4-payments-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step1.png', '5.4.4-payments-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step1.png', '5.4.4-payments-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/payments-step1.png" alt="5.4.4-payments-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Đơn #10 thanh toán qua VNPAY sandbox: Đã đặt, Đã thanh toán VNPAY</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Theo PROGRESS ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Lệnh nguồn trong CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 và npm run test:e2e. Cần ghi biên bản thử web đã đăng nhập, hồ sơ, gợi ý và VNPAY vì PROGRESS còn để bước này mở.</p>


<div class="report-figure">
  <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step2.png', 'Nhật ký thanh toán VNPAY')">
    <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
  </p>
  <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step2.png', 'Nhật ký thanh toán VNPAY')" title="Nhấp để phóng to" style="cursor: zoom-in;">
    <img src="assets/images/workshop/5.4-deployment/payments-step2.png" alt="Minh chứng nhật ký thanh toán VNPAY sandbox" class="report-figure-img" loading="lazy" />
  </div>
  <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">
    Minh chứng kiểm tra kết quả thanh toán VNPAY sandbox.
  </div>
</div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Sau khi thanh toán thử bằng thẻ NCB, đơn đứng ở trạng thái "Đang chờ VNPAY xác nhận": log ALB cho thấy VNPAY trả mã 00 về Return URL nhưng không gọi IPN. Nguyên nhân là tài khoản sandbox chưa đăng ký IPN URL; sau khi khai báo https://&lt;cloudfront&gt;/api/payments/vnpay/ipn với VNPAY, đơn #10 chuyển sang "Đã thanh toán" và nhật ký thanh toán ghi nhận IPN. Các sự cố khác xem <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/payments/VnpaySigner.java" target="_blank">backend/src/main/java/com/nutrition/payments/VnpaySigner.java</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">← 5.4.3 CI/CD với GitHub Actions OIDC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">5.5 AI tra cứu Bedrock →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5. AI tra cứu với Amazon Bedrock</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Cấu hình Bedrock tại Tokyo rồi kiểm tra tool, Guardrail và bộ prompt. Phần bonus bổ sung hồ sơ và gợi ý tính bằng code.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-ai.png', '5.5 AI tra cứu với Amazon Bedrock')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-ai.png', '5.5 AI tra cứu với Amazon Bedrock')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-ai.png" alt="5.5 AI tra cứu với Amazon Bedrock" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Sơ đồ thành phần: ECS gọi Bedrock ở Tokyo qua Guardrails, số liệu lấy từ PostgreSQL</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-1');">Bật Nova 2 Lite và Guardrails</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-2');">Đánh giá AI</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-3');">Gợi ý bữa ăn (Bonus)</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">← 5.4.4 Thanh toán VNPAY sandbox</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">5.5.1 Bật Nova 2 Lite và Guardrails →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-1' ? 'active' : ''}" id="pane-ws-5-5-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.1. Bật Nova 2 Lite và Guardrails</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Gọi Nova 2 Lite và kiểm chứng độ an toàn theo bộ prompt.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">D18 đặt BEDROCK_REGION=ap-northeast-1, model amazon.nova-2-lite-v1:0, profile jp.amazon.nova-2-lite-v1:0. Guardrail cùng vùng. searchProducts là tool duy nhất; backend kiểm schema và truy vấn SQL tham số hóa. Intent search, facts, compare, plan dùng DB để ghép số liệu. D32 tính mục tiêu và gợi ý bằng code, không gửi dữ liệu cơ thể cho model. Quota chat 30 câu/ngày/người.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/guardrail/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/guardrail/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_bedrock_guardrail" "chat" {
  # Must match the region the backend calls Bedrock in (BEDROCK_REGION, D18).
  region      = var.region
  name        = "\${var.name_prefix}-chat"
  description = "Food catalog search: no medical advice, no prompt attacks."

  blocked_input_messaging   = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."
  blocked_outputs_messaging = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."</code></pre>
    </div>


      <h3 class="report-h3">5.5.1-bedrock-guardrails-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png', '5.5.1-bedrock-guardrails-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png', '5.5.1-bedrock-guardrails-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png" alt="5.5.1-bedrock-guardrails-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Guardrail nutrition-dev-chat ở Tokyo: chặn lời khuyên y tế và prompt attack</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Bộ prompts.json hiện có 45 câu. Ngày 21/11/2026: an toàn 17/17, tra cứu 27/28 (ngưỡng 85%), 7 câu P01–P07 đều đạt. L01 dao động vì model bỏ category, cần theo dõi. docs/ai-eval.md còn mô tả các lượt 30/38 câu trước đó; dùng PROGRESS.md và bộ prompt hiện hành để đối chiếu. Eval gọi model có phí, không thuộc CI.</p>

      <h3 class="report-h3">AI tra cứu và Guardrails</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI tra cứu và Guardrails')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI tra cứu và Guardrails')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-quotas.png" alt="AI tra cứu và Guardrails" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Service Quotas: Nova 2 Lite cross-region 8.000.000 token mỗi phút</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Quota Singapore của tài khoản bằng 0. D18 chuyển sang Tokyo; theo dõi quota L-C6F5908D và L-210172B5. AccessDenied với Guardrail cần bedrock:ApplyGuardrail ở Tokyo trong policy và boundary.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">← 5.5 AI tra cứu Bedrock</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">5.5.2 Đánh giá AI →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-2' ? 'active' : ''}" id="pane-ws-5-5-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.2. Đánh giá AI</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Gọi Nova 2 Lite và kiểm chứng độ an toàn theo bộ prompt.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>

    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> docs/ai-eval.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">$env:AWS_PROFILE = "nutrition-apply"
$env:BEDROCK_REGION = "ap-northeast-1"                 # D18: Tokyo
$env:BEDROCK_MODEL_ID = "amazon.nova-2-lite-v1:0"
$env:BEDROCK_INFERENCE_PROFILE_ID = "jp.amazon.nova-2-lite-v1:0"
$env:BEDROCK_GUARDRAIL_ID = "&lt;terraform output bedrock_guardrail_id&gt;"   # tùy chọn
$env:BEDROCK_GUARDRAIL_VERSION = "1"                                    # tùy chọn

cd backend
./mvnw.cmd test -Pbedrock-eval</code></pre>
    </div>


      <h3 class="report-h3">5.5.2-ai-evaluation-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png', '5.5.2-ai-evaluation-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png', '5.5.2-ai-evaluation-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png" alt="5.5.2-ai-evaluation-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Bộ đánh giá với model thật (-Pbedrock-eval): BUILD SUCCESS ngày 25/11/2026</div>
    </div>


      <h3 class="report-h3">Kiểm tra kết quả</h3>
      <p class="report-p">Bộ prompts.json hiện có 45 câu. Ngày 21/11/2026: an toàn 17/17, tra cứu 27/28 (ngưỡng 85%), 7 câu P01–P07 đều đạt. L01 dao động vì model bỏ category, cần theo dõi. docs/ai-eval.md còn mô tả các lượt 30/38 câu trước đó; dùng PROGRESS.md và bộ prompt hiện hành để đối chiếu. Eval gọi model có phí, không thuộc CI.</p>
      <p class="report-p">Theo PROGRESS ngày 21/11/2026: backend 86, frontend 145, E2E + axe 57. Lệnh nguồn trong CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 và npm run test:e2e. Cần ghi biên bản thử web đã đăng nhập, hồ sơ, gợi ý và VNPAY vì PROGRESS còn để bước này mở.</p>

      <h3 class="report-h3">AI tra cứu và Guardrails</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI tra cứu và Guardrails')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI tra cứu và Guardrails')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-quotas.png" alt="AI tra cứu và Guardrails" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Service Quotas: Nova 2 Lite cross-region 8.000.000 token mỗi phút</div>
    </div>


      <h3 class="report-h3">Lỗi đã ghi nhận</h3>
      <p class="report-p">Quota Singapore của tài khoản bằng 0. D18 chuyển sang Tokyo; theo dõi quota L-C6F5908D và L-210172B5. AccessDenied với Guardrail cần bedrock:ApplyGuardrail ở Tokyo trong policy và boundary.</p>
      <p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">← 5.5.1 Bật Nova 2 Lite và Guardrails</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-3')">5.5.3 Gợi ý bữa ăn (Bonus) →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-3' ? 'active' : ''}" id="pane-ws-5-5-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.3. Gợi ý bữa ăn (Bonus)</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Kiểm tra hồ sơ và gợi ý bữa tính từ dữ liệu DB.</p>

      <h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
      <p class="report-p">D32 bổ sung hồ sơ và gợi ý bữa ăn. Backend lấy danh tính từ JWT sub. API GET/PUT/DELETE /api/me/profile lưu hồ sơ và sự đồng ý; GET /api/me/targets tính mục tiêu, GET /api/me/recommendations gợi ý bữa. Mifflin-St Jeor × hệ số vận động là phép tính trong code. Mục tiêu giảm −15%, giữ nguyên hoặc tăng cơ +10%, không thấp hơn năng lượng nghỉ. Tuổi ngoài 18–65, BMI ngoài 17–35, mang thai/cho con bú hoặc bệnh cần giám sát không nhận mục tiêu cá nhân.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/profile/RecommendationService.java" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> backend/src/main/java/com/nutrition/profile/RecommendationService.java</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Sao chép
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-java">public class RecommendationService {
  /** Share of the day's targets each meal aims for. */
  public enum Meal {
    BREAKFAST(0.25),
    LUNCH(0.375),
    DINNER(0.375);</code></pre>
    </div>


      <h3 class="report-h3">5.5.3-meal-recommendations-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png', '5.5.3-meal-recommendations-step1')">
        <i class="fas fa-search-plus"></i> Nhấp vào hình để phóng to / tương tác thu phóng
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png', '5.5.3-meal-recommendations-step1')" title="Nhấp để phóng to" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png" alt="5.5.3-meal-recommendations-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Gợi ý bữa trưa theo hồ sơ: số liệu tính từ DB, so với mục tiêu của bữa</div>
    </div>


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

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">← 5.5.2 Đánh giá AI</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6')">5.6 Giám sát & Chi phí →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" id="pane-ws-5-6">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.6. Giám sát, bảo mật và chi phí</h2>
<p class="report-p">Theo dõi sức khỏe ứng dụng, ghi dấu vết quản trị và đối chiếu chi phí. WAF là cấu hình tùy chọn chỉ bật theo buổi demo.</p>
${renderWorkshopEvidence568('architecture','Sơ đồ thành phần: CloudWatch Logs → Alarm → SNS, CloudTrail → S3 logs, Budgets','Sơ đồ thành phần: CloudWatch Logs → Alarm → SNS, CloudTrail → S3 logs, Budgets',true)}



<h4 class="report-h4">Content</h4>
<ul class="report-list">
  <li>
    <a href="#/workshop" onclick="switchWorkshopTab('ws-5-6-1');return false;">
      Alarm và log CloudWatch
    </a>
  </li>
  <li>
    <a href="#/workshop" onclick="switchWorkshopTab('ws-5-6-2');return false;">
      CloudTrail, ALB logs và WAF
    </a>
  </li>
  <li>
    <a href="#/workshop" onclick="switchWorkshopTab('ws-5-6-3');return false;">
      Ước tính và tối ưu chi phí
    </a>
  </li>
</ul>

<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-3')">← Mục trước</button><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-1')">Mục tiếp theo →</button></div>
</section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-1' ? 'active' : ''}" id="pane-ws-5-6-1">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.6.1. Alarm và log CloudWatch</h2>

<p class="report-p">Theo dõi lỗi ứng dụng và ghi lại hoạt động quản trị.</p>
<h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
<p class="report-p">CloudWatch Logs giữ log ứng dụng 14 ngày. Bảy alarm theo dõi ALB 5xx, target healthy, CPU/RAM ECS, CPU và dung lượng RDS, cùng log ERROR. Alarm gửi SNS; người nhận phải xác nhận subscription. Các alarm ALB/ECS phụ thuộc app_running; alarm RDS dùng cách xử lý missing data phù hợp trạng thái dừng. Khóa AWS quản lý bảo vệ RDS/secret; ngân sách 100 USD theo brief vẫn cần ảnh xác nhận tại phần điều kiện chuẩn bị.</p>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">infra/modules/alarms/main.tf</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text">  alarm_name          = "&#36;{var.name_prefix}-api-5xx"
  alarm_description   = "API returned 5 or more 5xx responses in 5 minutes."
  namespace           = "AWS/ApplicationELB"
  metric_name         = "HTTPCode_Target_5XX_Count"
  dimensions          = { LoadBalancer = var.alb_arn_suffix }
  statistic           = "Sum"
  period              = 300
  evaluation_periods  = 1
  threshold           = 5</code></pre></div>
${renderWorkshopEvidence568('monitor','CloudWatch: 7 alarm đều ở trạng thái OK','CloudWatch: 7 alarm đều ở trạng thái OK',true)}
<h3 class="report-h3">Kiểm tra kết quả</h3>
<p class="report-p">Đối chiếu trạng thái alarm với app_running; xác nhận SNS subscription, CloudTrail logging và object log S3. WAF có thể vắng mặt khi tắt để giảm phí.</p>
${renderWorkshopEvidence568('logs','Bucket log: thư mục alb/ (access log ALB) và cloudtrail/','Bucket log: thư mục alb/ (access log ALB) và cloudtrail/',true)}
<h3 class="report-h3">Lỗi đã ghi nhận</h3>
<p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
<p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/alarms/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/alarms/main.tf</a>.</p>
<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6')">← Mục trước</button><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-2')">Mục tiếp theo →</button></div>
</section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-2' ? 'active' : ''}" id="pane-ws-5-6-2">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.6.2. CloudTrail, ALB logs và WAF</h2>

<p class="report-p">Theo dõi lỗi ứng dụng và ghi lại hoạt động quản trị.</p>
<h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
<p class="report-p">CloudTrail đa vùng và ALB access logs ghi vào bucket nutrition-dev-logs-&lt;account-id&gt;. Bucket chặn public, mã hóa SSE-S3, lifecycle xóa log sau 30 ngày. S3 gateway endpoint đã được ghi nhận available ngày 22/11/2026. WAF scope CLOUDFRONT đặt tại <strong>us-east-1</strong> và chỉ tạo khi script có -Waf. Module WAF dùng Common, Known Bad Inputs, IP Reputation và rate limit 1.000 request/5 phút/IP. SizeRestrictions_BODY chỉ đếm để không chặn upload ảnh admin tới 2 MB.</p>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">infra/modules/audit/main.tf</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text">resource "aws_cloudtrail" "main" {
  name                          = local.trail_name
  s3_bucket_name                = aws_s3_bucket.logs.id
  s3_key_prefix                 = "cloudtrail"
  is_multi_region_trail         = true
  include_global_service_events = true
  enable_log_file_validation    = true

  depends_on = [aws_s3_bucket_policy.logs]
}</code></pre></div>
${renderWorkshopEvidence568('audit','CloudTrail nutrition-dev-trail: multi-region, đang ghi log vào S3','CloudTrail nutrition-dev-trail: multi-region, đang ghi log vào S3',true)}
<h3 class="report-h3">Kiểm tra kết quả</h3>
<p class="report-p">Đối chiếu trạng thái alarm với app_running; xác nhận SNS subscription, CloudTrail logging và object log S3. WAF có thể vắng mặt khi tắt để giảm phí.</p>
${renderWorkshopEvidence568('logs','Bucket log: thư mục alb/ (access log ALB) và cloudtrail/','Bucket log: thư mục alb/ (access log ALB) và cloudtrail/',true)}
<h3 class="report-h3">Lỗi đã ghi nhận</h3>
<p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
<p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/alarms/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/alarms/main.tf</a>.</p>
<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-1')">← Mục trước</button><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-3')">Mục tiếp theo →</button></div>
</section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-3' ? 'active' : ''}" id="pane-ws-5-6-3">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.6.3. Ước tính và tối ưu chi phí</h2>

<p class="report-p">Phân biệt chi phí demo, 24/7 và production đề xuất.</p>
<h3 class="report-h3">Đối chiếu cấu hình nguồn</h3>
<p class="report-p">Ước tính USD/tháng, đối chiếu AWS Pricing Calculator ngày 25/11/2026 cho cấu hình Multi-AZ và 2 task (D33), chưa thuế, sai lệch có thể ±10%. Production là phương án tương lai chưa triển khai. Bedrock thực tế gọi tại Tokyo.</p>
<div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Dịch vụ / Cấu hình</th><th>Demo (~4h/ngày)</th><th>24/7 (Pricing Calculator)</th><th>Production đề xuất</th></tr></thead><tbody><tr><td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td><td>~11,6</td><td>42,75</td><td>~70 (Multi-AZ, db.t4g.small)</td></tr><tr><td>ECS Fargate ARM64, 0,5 vCPU / 1 GB, 2 task</td><td>~5,9</td><td>35,98</td><td>~36–72 (2–4 task, auto scaling)</td></tr><tr><td>Application Load Balancer</td><td>~3,1</td><td>18,63</td><td>~22</td></tr><tr><td>Public IPv4, 4 địa chỉ</td><td>~2,4</td><td>14,60</td><td>~15</td></tr><tr><td>Secrets Manager, 2 secret</td><td>0,85</td><td>0,85</td><td>0,85</td></tr><tr><td>Bedrock (Nova Lite làm giá tham chiếu, Tokyo)</td><td>&lt;0,7</td><td>0,70</td><td>Theo lượng dùng</td></tr><tr><td>CloudFront 1,02 · CloudWatch 1,70 · ECR 0,10 · S3 0,07 · Cognito 0 · CloudTrail 0</td><td>~2,9</td><td>2,89</td><td>~5</td></tr><tr><td>Tổng (không WAF)</td><td>~27</td><td>116,40</td><td>~150–190</td></tr><tr><td>WAF (tùy chọn, nhóm Optional)</td><td>0</td><td>9,60</td><td>~10</td></tr><tr><td>Tổng có WAF</td><td>—</td><td>126,00</td><td>~160–200</td></tr></tbody></table></div>
<p class="report-p">Cost Explorer ghi nhận <strong>6,44 USD</strong> cho 01–21/11/2026, được credit bù toàn bộ. RDS 2,77; ALB 1,29; ECS 1,21; IPv4 0,74; Bedrock 0,21; Secrets Manager 0,20 USD. Các khoản liệt kê là những khoản lớn, không phải phép cộng chi tiết toàn bộ hóa đơn. App chỉ bật khi demo nên không dùng số thực tế này để suy ra mức chạy 24/7. Số thực tế này ghi nhận trước khi bật Multi-AZ.</p>
<p class="report-p">Bảng giá AWS Pricing Calculator: <a href="https://calculator.aws/#/estimate?id=5aefaa50b7c0b549b0aef4b49215196ac9c0145d" target="_blank" rel="noopener noreferrer">estimate ngày 25/11/2026 (AWS Pricing Calculator)</a>. Cột 24/7 lấy đúng số của Calculator (Singapore, riêng Bedrock ở Tokyo). Cột Demo quy đổi từ đó cho khoảng 120 giờ chạy mỗi tháng: các khoản tính theo giờ (RDS instance, Fargate, ALB, IPv4) nhân 120/730, còn ổ đĩa RDS (5,52 USD) và các khoản theo lượng dùng giữ nguyên. Giả định tải: 50 người dùng/tháng, 5 GB CloudFront, khoảng 3.600 câu hỏi AI/tháng (1 câu/phút trong 2 giờ/ngày, 1.500 token vào, 300 token ra). Calculator chưa có Amazon Nova 2 Lite nên dùng Amazon Nova Lite làm giá tham chiếu. Estimate không tính RDS Proxy và Database Insights Advanced vì dự án không dùng.</p>
<p class="report-p">App mặc định tắt. D20 dùng up/down để chỉ giữ RDS storage, S3 và các khoản cố định khi nghỉ. D15 bỏ NAT. Từ D33, RDS Multi-AZ và 2 task chỉ tốn thêm khoảng 0,05 USD/giờ khi app bật, cộng ổ đĩa bản dự phòng khoảng 2,8 USD/tháng; quay về 1 AZ bằng hai biến <strong>rds_multi_az</strong> và <strong>api_desired_count</strong>. Fargate Spot chỉ là phương án cần đánh giá khả năng bị thu hồi, chưa xác nhận được triển khai trong module hiện tại.</p>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">scripts/demo-infra.ps1</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text">    .\\scripts\\demo-infra.ps1 down   # remove ALB + ECS service, stop RDS (~5-10 min)</code></pre></div>
${renderWorkshopEvidence568('cost','Cost Explorer tháng 11/2026, chi phí theo dịch vụ (đã loại credit)','Cost Explorer tháng 11/2026, chi phí theo dịch vụ (đã loại credit)',true)}
<h3 class="report-h3">Kiểm tra kết quả</h3>
<p class="report-p">Dùng kỳ Cost Explorer 01–21/11/2026 và kiểm tra credit tách khỏi usage. Ước tính tháng không phải hóa đơn cam kết.</p>
${renderWorkshopEvidence568('credits','Billing → Credits: tổng credit 199,99 USD, đã dùng ước tính 15,07 USD','Billing → Credits: tổng credit 199,99 USD, đã dùng ước tính 15,07 USD',true)}
<h3 class="report-h3">Lỗi đã ghi nhận</h3>
<p class="report-p">Không ghi nhận sự cố riêng cho bước này. Các sự cố thực tế của toàn dự án (khóa state Terraform, SSO hết hạn, favicon 403, mất phiên khi tải lại, RDS đang dừng, quota Bedrock) và cách xử lý được tổng hợp ở <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
<p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" rel="noopener noreferrer">scripts/demo-infra.ps1</a>.</p>
<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-2')">← Mục trước</button><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-7')">Mục tiếp theo →</button></div>
</section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" id="pane-ws-5-7">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.7. Dọn tài nguyên</h2>

<h3 class="report-h3">Tắt buổi demo</h3>
<p class="report-p">Chạy <strong>down</strong> với <strong>-Vnpay</strong> nếu cần giữ secret sandbox. Bỏ <strong>-Vnpay</strong> sẽ loại bỏ secret theo script. Down xóa ALB và ECS service, bỏ API origin CloudFront, dừng RDS; giữ dữ liệu và vẫn có phí lưu trữ. AWS tự bật RDS sau 7 ngày. Hướng dẫn infra/README.md chỉ nêu tổng quát destroy dev; quy trình cụ thể nằm ở docs/runbook.md mục 4.</p>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">scripts/demo-infra.ps1</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text">    .\\scripts\\demo-infra.ps1 down   # remove ALB + ECS service, stop RDS (~5-10 min)</code></pre></div>
${renderWorkshopEvidence568('cleanup1','ECS cluster sau khi tắt: 0 service, 0 task','ECS cluster sau khi tắt: 0 service, 0 task',true)}
<h3 class="report-h3">Kiểm tra trạng thái và chu kỳ 7 ngày</h3>
<p class="report-p">Tắt demo có giữ dữ liệu và phân biệt với destroy.</p>
${renderWorkshopEvidence568('cleanup2','EC2 Load balancers sau khi tắt (down): không còn ALB','EC2 Load balancers sau khi tắt (down): không còn ALB',true)}
${renderWorkshopEvidence568('cleanup3','RDS sau khi tắt: trạng thái Stopped','RDS sau khi tắt: trạng thái Stopped',true)}
<h3 class="report-h3">Dọn toàn bộ và diễn tập khôi phục</h3>
<p class="report-p">Full teardown theo runbook: tạo snapshot và chờ Available; người dùng chủ động bỏ deletion protection của RDS/Cognito, đọc plan xóa, destroy dev, rồi khôi phục bảo vệ khi dựng lại. Bucket bootstrap có prevent_destroy và nằm ngoài diễn tập. Biên bản khôi phục chưa có, không khẳng định đã diễn tập.</p>
<p class="report-p">Biên bản diễn tập chịu lỗi (22/11/2026): thực hiện RDS → Reboot with failover trên cấu hình Multi-AZ. AZ chính chuyển từ ap-southeast-1a sang ap-southeast-1b; database khởi động lại sau khoảng 18 giây, AWS báo hoàn tất sau khoảng 43 giây. API gián đoạn khoảng 25–35 giây rồi tự phục hồi, không mất dữ liệu, không cần thao tác tay. Chưa thực hiện diễn tập khôi phục từ snapshot; RDS vẫn có snapshot tự động hằng ngày (ảnh dưới) để khôi phục khi cần.</p>
${renderWorkshopEvidence568('cleanup4','RDS System snapshots: 9 bản sao lưu tự động hằng ngày','RDS System snapshots: 9 bản sao lưu tự động hằng ngày',true)}
<h3 class="report-h3">Lỗi đã ghi nhận</h3>
<p class="report-p">Đóng cửa sổ khi <strong>down</strong>/apply đang chạy để lại khóa state (<strong>Error acquiring the state lock</strong>). Cách xử lý: kiểm tra không còn tiến trình Terraform nào chạy và state không đổi, rồi chạy <strong>terraform force-unlock &lt;LOCK_ID&gt;</strong>. Các sự cố khác xem <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Kiểm thử và xử lý sự cố</a>.</p>
<p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" rel="noopener noreferrer">scripts/demo-infra.ps1</a>.</p>
<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6-3')">← Mục trước</button><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-8')">Mục tiếp theo →</button></div>
</section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-8' ? 'active' : ''}" id="pane-ws-5-8">
        <section class="report-section">
<div class="report-eyebrow">Technical Workshop</div><h2 class="report-h2">5.8. Kiểm thử và xử lý sự cố</h2>

<p class="report-p">Trang này hướng dẫn tự kiểm tra hệ thống sau khi triển khai (gọi API, đọc log, xem alarm), các kịch bản lỗi cần thử, và những sự cố thật đã gặp trong quá trình làm dự án cùng cách xử lý.</p>
<h3 class="report-h3">1. Kiểm thử API bằng cURL</h3>
<p class="report-p">Đặt địa chỉ ứng dụng (output <strong>app_url</strong> của Terraform) vào biến rồi chạy từng lệnh. Các lệnh dưới dùng PowerShell; <strong>curl.exe</strong> có sẵn trên Windows 10/11.</p>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">PowerShell</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text">$APP = "https://ddn09pubqlwme.cloudfront.net"

# 1. Catalog công khai: mong đợi 200 và danh sách sản phẩm
curl.exe -s "$APP/api/products?size=3"

# 2. Lọc dinh dưỡng: chỉ trả sản phẩm có đủ dữ liệu (fail-closed)
curl.exe -s "$APP/api/products?maxCalories=200&amp;minProtein=10"

# 3. Gọi API cần đăng nhập mà không có token: mong đợi 401
curl.exe -s -o NUL -w "%{http_code}&#96;n" "$APP/api/orders"

# 4. Tham số sai định dạng: mong đợi 400
curl.exe -s -o NUL -w "%{http_code}&#96;n" "$APP/api/products?sort=khong-hop-le"</code></pre></div>
<div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Kịch bản</th><th>Kết quả mong đợi</th><th>Ý nghĩa</th></tr></thead><tbody><tr><td>Catalog công khai</td><td>200, có <strong>items</strong></td><td>CloudFront → ALB → ECS → RDS thông suốt</td></tr><tr><td>Lọc calo / chất đạm</td><td>Chỉ sản phẩm <strong>nutrition_complete</strong></td><td>Nguyên tắc fail-closed</td></tr><tr><td>Không có token</td><td>401</td><td>Danh tính chỉ lấy từ JWT Cognito</td></tr><tr><td>Người dùng thường gọi /api/admin/stats</td><td>403</td><td>Phân quyền theo <strong>cognito:groups</strong></td></tr><tr><td>Tham số sai</td><td>400</td><td>Kiểm tra đầu vào ở backend</td></tr><tr><td>Đặt hàng vượt tồn kho</td><td>409 <strong>OUT_OF_STOCK</strong></td><td>Trừ kho có điều kiện trong transaction</td></tr><tr><td>Hỏi AI quá 30 câu / ngày</td><td>429</td><td>Quota theo tài khoản, chống lạm dụng Bedrock</td></tr><tr><td>Hỏi AI về chữa bệnh</td><td>Từ chối, khuyên gặp chuyên gia</td><td>Bedrock Guardrails chặn lời khuyên y tế</td></tr></tbody></table></div>
<p class="report-p">Kịch bản 403, 409, 429 và câu hỏi y tế cần đăng nhập, nên thử trực tiếp trên giao diện web theo <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/demo.md" target="_blank" rel="noopener noreferrer">docs/demo.md</a>.</p>
<h3 class="report-h3">2. Kiểm tra log và alarm trên CloudWatch</h3>
<div class="code-snippet-wrap" style="margin:1.25rem 0"><div class="code-snippet-header"><span class="code-filename">PowerShell</span><button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Sao chép" aria-label="Sao chép">⧉</button></div><pre class="code-snippet-pre"><code class="language-text"># Xem log backend 10 phút gần nhất (chỉ đọc)
aws logs tail /ecs/nutrition-dev-backend --since 10m --profile nutrition-plan --region ap-southeast-1

# Liệt kê 7 alarm và trạng thái hiện tại
aws cloudwatch describe-alarms --alarm-name-prefix nutrition-dev --query "MetricAlarms[].[AlarmName,StateValue]" --output table --profile nutrition-plan --region ap-southeast-1</code></pre></div>
<p class="report-p">Khi app đang chạy bình thường, các alarm ở trạng thái OK. Alarm <strong>nutrition-dev-api-5xx</strong> và <strong>nutrition-dev-api-error-logs</strong> gửi thư qua SNS khi có lỗi; người nhận phải bấm xác nhận subscription một lần.</p>
<h3 class="report-h3">3. Kiểm thử tự động</h3>
<div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Bộ test</th><th>Số lượng (21/11/2026)</th><th>Chạy bằng</th></tr></thead><tbody><tr><td>Backend (JUnit, Testcontainers PostgreSQL)</td><td>86</td><td><strong>./mvnw verify</strong></td></tr><tr><td>Frontend (Vitest)</td><td>145</td><td><strong>npm test</strong></td></tr><tr><td>E2E + kiểm tra truy cập axe (Playwright)</td><td>57</td><td><strong>npm run test:e2e</strong></td></tr></tbody></table></div>
<p class="report-p">GitHub Actions chạy các bộ test này ở mỗi pull request; chỉ khi xanh mới được merge và deploy.</p>
<h3 class="report-h3">4. Diễn tập chịu lỗi Multi-AZ</h3>
<p class="report-p">Ngày 22/11/2026 thực hiện RDS → Reboot with failover. AZ chính chuyển từ ap-southeast-1a sang ap-southeast-1b trong khoảng 20–45 giây; API gián đoạn khoảng nửa phút rồi tự phục hồi, không mất dữ liệu, không cần thao tác tay.</p>
<h3 class="report-h3">5. Sự cố thực tế và cách xử lý</h3>
<div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Sự cố</th><th>Nguyên nhân</th><th>Cách xử lý</th></tr></thead><tbody><tr><td>Terraform báo Error acquiring the state lock</td><td>Đóng cửa sổ khi apply đang chạy, file khóa .tflock trên S3 còn lại</td><td>Kiểm tra không còn tiến trình Terraform nào chạy, state không đổi, rồi chạy <strong>terraform force-unlock &lt;LOCK_ID&gt;</strong></td></tr><tr><td>Token has expired / InvalidGrantException khi chạy lệnh AWS</td><td>Phiên SSO hết hạn</td><td>Chạy lại aws sso login --sso-session nutrition rồi lặp lại lệnh</td></tr><tr><td>Favicon không hiện trên trang thật (CloudFront trả 403)</td><td>Bước build tắt thư mục public nên file icon không được tải lên S3</td><td>Sửa cấu hình Vite, thêm bước kiểm tra icon trong bản build production</td></tr><tr><td>Người dùng bị đăng xuất mỗi khi tải lại trang</td><td>Token Cognito chỉ giữ trong bộ nhớ</td><td>Lưu phiên vào <strong>localStorage</strong> và khôi phục khi tải trang (D34)</td></tr><tr><td>Lệnh up báo RDS chưa sẵn sàng</td><td>RDS dừng quá 7 ngày sẽ tự bật lại, hoặc đang ở trạng thái stopped</td><td>Script demo-infra.ps1 up gọi start-db-instance và chờ available trước khi apply</td></tr><tr><td>AI trả lời &quot;tạm thời chưa sẵn sàng&quot;</td><td>Tài khoản chưa có quota Bedrock cho model ở Singapore</td><td>Gọi <strong>Nova 2 Lite</strong> qua inference profile ở Tokyo (<strong>BEDROCK_REGION</strong>, D18)</td></tr></tbody></table></div>
<h3 class="report-h3">6. Bài học rút ra</h3>
<p class="report-p">Luôn chạy <strong>terraform plan</strong> và đọc kỹ phần destroy / replace trước khi apply.</p>
<p class="report-p">Không đóng cửa sổ khi apply đang chạy; nếu lỡ, kiểm tra state trước khi mở khóa.</p>
<p class="report-p">Kiểm tra trên bản build production, không chỉ trên máy dev.</p>
<p class="report-p">Bật / tắt hạ tầng theo buổi demo giúp chi phí thấp, nhưng cần script chờ RDS sẵn sàng.</p>
<p class="report-p">Nguồn: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/demo.md" target="_blank" rel="noopener noreferrer">docs/demo.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/test-plan.md" target="_blank" rel="noopener noreferrer">docs/test-plan.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/alarms/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/alarms/main.tf</a>.</p>
<div class="ws-prev-next-bar" style="margin-top: 2rem;display:flex;justify-content:space-between;"><button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-7')">← Mục trước</button></div>
</section>
      </div>
    </div>
  `;
}


function getWorkshopEnHtml() {
  return `
    <div class="tech-report">
      <style>
        #workshop-content-container .code-snippet-header a.code-filename-link,
        #workshop-content-container .code-snippet-header a.code-filename-link:visited,
        #workshop-content-container .code-snippet-header a.code-filename-link:hover {
          color: #ffffff !important;
          text-decoration-color: rgba(255,255,255,0.65);
        }
      </style>
      <!-- HEADER -->
      <header>
        <div class="report-eyebrow">Technical Workshop Guide</div>
        <h1 class="report-title">Workshop</h1>
        <p class="report-subtitle">Complete technical hands-on guide: Personalized Nutrition E-Commerce Platform on AWS.</p>
        <p class="report-intro">
          The workshop covers access permissions and Terraform through the React, Spring Boot, and PostgreSQL application on AWS. The development environment runs in Singapore; only Bedrock and Guardrail calls use Tokyo. The steps follow the project's repository configuration and commands. Actual evidence accompanies each step, and test figures and costs include their measurement periods.
        </p>
      </header>
      <!-- Workshop navigation lives in the sidebar. -->

      <!-- MODULE PANES -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-overview' ? 'active' : ''}" id="pane-ws-overview">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">Workshop</h1>
      <p class="report-subtitle">Complete technical hands-on guide: Personalized Nutrition E-Commerce Platform on AWS.</p>
      <h2 class="report-h2" style="margin-top: 1.5rem; font-size: 1.35rem; color: #1E293B;">Building a Transparent Nutrition E-Commerce Platform on AWS</h2>
    </header>

    <section class="report-section">
      <h3 class="report-h3">Overview</h3>
      <p class="report-p">The workshop covers access permissions and Terraform through the React, Spring Boot, and PostgreSQL application on AWS. The development environment runs in Singapore; only Bedrock and Guardrail calls use Tokyo.</p>
      <p class="report-p">The steps follow the project's repository configuration and commands. Actual evidence accompanies each step, and test figures and costs include their measurement periods.</p>

      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-1');">5.1 Introduction</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-2');">5.2 Prerequisites</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3');">5.3 Core Infrastructure</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4');">5.4 Application Deployment</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5');">5.5 AI Search with Amazon Bedrock</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-6');">5.6 Monitoring, Security, and Costs</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-7');">5.7 Resource Cleanup</a></li>
        <li><a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">5.1 Introduction →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.1. Introduction</h1>


    </header>

    <section class="report-section">
      <h3 class="report-h3">CloudFront → ALB → ECS</h3>
      <p class="report-p">Trace the flow from the browser to the database and AI, and identify the single development environment.</p>

      <h3 class="report-h3">Bedrock and Guardrails</h3>
      <p class="report-p">Nova 2 Lite interprets requests into read-only tools. Application code composes facts from PostgreSQL and validates the output before responding.</p>

      <h2 class="report-h2">Workshop overview</h2>
      <h3 class="report-h3">AWS architecture reference</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/aws-architecture.png', 'AWS architecture reference')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/aws-architecture.png', 'AWS architecture reference')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.1-overview/aws-architecture.png" alt="AWS architecture reference" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">AWS architecture diagram created in draw.io using AWS Architecture Icons, updated for Multi-AZ and AWS STS on November 25, 2026</div>
    </div>

     


      <p class="report-p">Since November 22, 2026 (D33), the development environment has run two ECS tasks, one per Availability Zone, and RDS Multi-AZ with a standby in the second AZ. The November 22 reboot-with-failover exercise moved the primary from ap-southeast-1a to ap-southeast-1b in approximately 20–45 seconds. The API was interrupted for about half a minute and recovered automatically with no data loss.</p>

      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>CloudFront + S3</strong></td><td>React SPA and images through OAC; a Function rewrites routes; two private buckets</td></tr>
          <tr><td><strong>ALB + ECS Fargate + ECR</strong></td><td>ALB accepts CloudFront traffic with a secret header; Spring Boot 4 / Java 21, ARM64, 0.5 vCPU / 1 GB, two tasks in two AZs</td></tr>
          <tr><td><strong>RDS PostgreSQL + Secrets Manager</strong></td><td>db.t4g.micro, 20 GB gp3, Multi-AZ (standby in the second AZ), private subnet, encryption; Flyway V1–V11</td></tr>
          <tr><td><strong>Cognito</strong></td><td>JWT sub and cognito:groups; USER / ADMIN</td></tr>
          <tr><td><strong>Bedrock + Guardrails</strong></td><td>Nova 2 Lite in Tokyo; read-only tool, data retrieved from the database by application code</td></tr>
          <tr><td><strong>CloudWatch + SNS + Budgets</strong></td><td>14-day log retention, seven alarms, email alerts; USD 100 budget</td></tr>
          <tr><td><strong>CloudTrail + S3 audit + WAF</strong></td><td>Audit and ALB logs retained for 30 days; WAF enabled only for demos; AWS-managed KMS keys</td></tr>
          <tr><td><strong>Terraform + IAM + STS + GitHub Actions</strong></td><td>S3 state with use_lockfile; SSO and permission boundary; CI/CD via OIDC, AWS STS issues temporary credentials</td></tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">Review the architecture and decisions D15/D17/D18. React and the API pass through CloudFront. Cognito issues JWTs; the ALB forwards requests to Spring Boot on ECS. The catalog, cart, and orders use RDS. The D32 recommendation engine computes results in code; the model only selects intent.</p>


<div class="code-snippet-wrap">
  <div class="code-snippet-header">
    <span class="code-filename-link" style="color:#93C5FD;">
      AWS Architecture – System Request Flow
    </span>
    <button type="button" class="btn-copy-code"
            onclick="copyCodeSnippet(this)"
            title="Copy" aria-label="Copy">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <rect x="8" y="8" width="13" height="13" rx="2"></rect>
  <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path>
</svg>

    </button>
  </div>
  <pre class="code-snippet-pre"><code class="language-text">1. Amazon CloudFront delivers the React SPA and product images from two private Amazon S3 buckets through Origin Access Control.

2. Requests to /api/* travel through the Internet Gateway to the Application Load Balancer. The ALB accepts only CloudFront origin-facing IP ranges and requires a secret header.

3. The Spring Boot backend (Java 21) runs on Amazon ECS Fargate (ARM64) in public subnets without NAT to reduce costs. The ECS service runs two tasks across two Availability Zones: if one AZ fails, the task in the other AZ can continue serving traffic. Each layer has its own security group: ALB accepts CloudFront only, ECS accepts ALB only, and RDS accepts ECS on port 5432 only.

4. Data is stored on Amazon RDS for PostgreSQL Multi-AZ in private subnets, with a standby in the second AZ and automatic failover if the primary AZ fails. AWS KMS encrypts the data, AWS Secrets Manager manages the password, queries use parameterized SQL, and inventory is decremented by conditional UPDATE within a transaction.</code></pre>
</div>


      <h3 class="report-h3">Live Application (Demo)</h3>
      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Evidence</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Application (production build on development environment)</td><td><a href="https://ddn09pubqlwme.cloudfront.net" target="_blank">https://ddn09pubqlwme.cloudfront.net</a></td></tr>
          <tr><td>Source code</td><td><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce" target="_blank">github.com/trungnguyen-VNTN/nutrition-ecommerce</a></td></tr>
          <tr><td>Full demo video (4:57)</td><td><a href="https://youtu.be/_yt_s3DTMr0" target="_blank">https://youtu.be/_yt_s3DTMr0</a></td></tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">To save costs, the application is started only for demos and assessment (demo-infra.ps1 up), and stopped (down) at other times. While stopped, the site can still open, but the API reports temporary unavailability. The demo video records the entire workflow: login, product filtering, nutrition profile, AI search, cart, checkout, and administration.</p>

      <h3 class="report-h3">Verification and Sources</h3>
      <h4 class="report-h4" style="color: #1E293B; font-weight: 600; margin-top: 1rem;">Overview</h4>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/cloudfront-evidence.png', 'Overview')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.1-overview/cloudfront-evidence.png', 'Overview')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.1-overview/cloudfront-evidence.png" alt="Overview" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">CloudFront distribution: *.cloudfront.net domain, HTTP/3 support, root object index.html</div>
    </div>


      <p class="report-p">Cross-check /api/products, login, and demo scenarios against docs/demo.md. Test snapshot on November 21, 2026: backend 86, frontend 145, E2E + axe 57. These are recorded results, not test runs performed for this report.</p>
      <p class="report-p">Command-line test procedures and actual project incidents are documented in <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/diagrams/architecture-star.txt" target="_blank">docs/diagrams/architecture-star.txt</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-overview')">← Overview</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">5.2 Prerequisites →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.2. Prerequisites</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <h3 class="report-h3">IAM Permissions</h3>
      <p class="report-p">Prepare tools and access permissions before provisioning infrastructure.</p>
      <p class="report-p">Install Terraform ≥1.10, AWS CLI, Java 21, Node, and Docker. Create nutrition-boundary using administrative privileges. Assign nutrition-plan and nutrition-apply through IAM Identity Center as documented in docs/aws-setup/README.md. The plan role uses ReadOnlyAccess and required state permissions; the apply role receives region-scoped service permissions restricted to nutrition-* roles. Update the Tokyo Bedrock and us-east-1 WAF exceptions as described at the end of the guide.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/README.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">aws sso login --sso-session nutrition
$env:TF_VAR_owner = "&lt;your name&gt;"</code></pre>
    </div>


      <h3 class="report-h3">Prerequisites</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/iam-identity-center.png', 'Prerequisites')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/iam-identity-center.png', 'Prerequisites')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.2-prerequisites/iam-identity-center.png" alt="Prerequisites" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">IAM Identity Center: two permission sets, nutrition-plan (read-only) and nutrition-apply (deployment)</div>
    </div>


      <p class="report-p">Verify the login profile and permission boundary before bootstrap. Do not include session information, tokens, or credentials in the report.</p>
      <p class="report-p">InvalidGrantException: the SSO session expired. Sign in again using aws sso login --sso-session nutrition before continuing.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>.</p>

      <h3 class="report-h3">Provisioning Infrastructure with Terraform</h3>
      <p class="report-p">Initialize S3 state and the plan review workflow.</p>
      <p class="report-p">From the repository root, bootstrap according to infra/README.md. The state bucket uses prevent_destroy. Populate backend.hcl from the example with the actual bucket name in a separate terminal. CI runs fmt and validate with backend=false; development operations use S3 backend initialization, plan -out=tfplan, review the changes, and only then manually apply. The brief specifies a USD 100 budget. The bootstrap code currently manages only the state bucket, not AWS Budgets resources.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/envs/dev/versions.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/envs/dev/versions.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">backend "s3" {
  key          = "envs/dev/terraform.tfstate"
  region       = "ap-southeast-1"
  encrypt      = true
  use_lockfile = true
}
}</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/.github/workflows/ci.yml" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> .github/workflows/ci.yml</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-yaml">- name: Format check
  run: terraform fmt -check -recursive infra

- name: Validate bootstrap
  run: |
    terraform -chdir=infra/bootstrap init -backend=false -input=false
    terraform -chdir=infra/bootstrap validate

- name: Validate envs/dev
  run: |
    terraform -chdir=infra/envs/dev init -backend=false -input=false
    terraform -chdir=infra/envs/dev validate</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/README.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">terraform -chdir=infra/bootstrap init
terraform -chdir=infra/bootstrap plan -out=tfplan

# After reviewing the plan, apply manually:
$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/bootstrap apply tfplan

terraform -chdir=infra/bootstrap output state_bucket</code></pre>
    </div>


      <h3 class="report-h3">Bootstrap Terraform</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/aws-budgets.png', 'Bootstrap Terraform')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.2-prerequisites/aws-budgets.png', 'Bootstrap Terraform')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.2-prerequisites/aws-budgets.png" alt="Bootstrap Terraform" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">AWS Budgets: USD 100 budget, USD 15.06 spent, USD 26.95 forecast</div>
    </div>


      <p class="report-p">Check the envs/dev/terraform.tfstate key, encryption, and use_lockfile=true. Read the plan for replacements, deletions, and IAM permissions before applying.</p>
      <p class="report-p">A state lock was once left behind by an interrupted apply. Only after confirming no process is using the state may the repository owner run terraform force-unlock; never remove an active lock.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/envs/dev/versions.tf" target="_blank">infra/envs/dev/versions.tf</a>.</p>
      <p class="report-p">The USD 100 budget was created manually in the Console (not in Terraform). On November 25, 2026: USD 15.06 spent, USD 26.95 forecast for the month, status Healthy.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-1')">← 5.1 Introduction</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">5.3 Core Infrastructure →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3. Core Infrastructure</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Prepare networking, databases, and authentication as the foundation for the backend. Complete the following steps in order.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/core-infra.png', '5.3 Core Infrastructure')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/core-infra.png', '5.3 Core Infrastructure')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/core-infra.png" alt="5.3 Core Infrastructure" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Component diagram: VPC across two AZs, subnets, security groups, RDS primary and standby, Cognito</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-1');">Create a VPC Network</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-2');">Create an RDS Database</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-3-3');">Configure Cognito</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-2')">← 5.2 Prerequisites</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">5.3.1 Create a VPC Network →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-1' ? 'active' : ''}" id="pane-ws-5-3-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.1. Create a VPC Network</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Separate ALB, ECS, and RDS access paths.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">The network module creates the VPC, two public subnets, two private database subnets, an Internet Gateway, and security groups. Public subnets have routes to the Internet. The ALB accepts the CloudFront origin-facing prefix list; ECS accepts only the ALB security group, and RDS accepts port 5432 only from the ECS security group. The S3 gateway endpoint attaches to the public and database route tables. D15 keeps tasks in public subnets with public IPs to avoid NAT costs.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/network/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/network/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">data "aws_ec2_managed_prefix_list" "cloudfront" {
  name = "com.amazonaws.global.cloudfront.origin-facing"
}</code></pre>
    </div>


      <h3 class="report-h3">5.3.1-network-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step1.png', '5.3.1-network-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step1.png', '5.3.1-network-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/network-step1.png" alt="5.3.1-network-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">VPC resource map: four subnets across two AZs (public and database), route tables, Internet Gateway, and S3 endpoint</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">Compare the VPC resource map, route tables, and security-group chain with Terraform. Do not interpret two DB subnets as evidence that RDS Multi-AZ is enabled.</p>

      <h3 class="report-h3">VPC Network</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step2.png', 'VPC Network')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/network-step2.png', 'VPC Network')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/network-step2.png" alt="VPC Network" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Security group nutrition-dev-rds: accepts PostgreSQL port 5432 only from the ECS security group</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">No issue was recorded specifically for this step. Actual project incidents (Terraform state lock, expired SSO, favicon 403, lost session on refresh, stopped RDS, and Bedrock quota) and their resolutions are compiled in <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/network/main.tf" target="_blank">infra/modules/network/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3')">← 5.3 Core Infrastructure</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">5.3.2 Create an RDS Database →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-2' ? 'active' : ''}" id="pane-ws-5-3-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.2. Create an RDS Database</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Deploy a private PostgreSQL database and manage versioned schema migrations.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">The RDS module configures db.t4g.micro, 20 GB gp3, encryption, and Multi-AZ (standby in a second AZ, automatic failover if the primary AZ fails; D33). The <strong>rds_multi_az</strong> variable in infra/envs/dev defaults to true. The password is managed by RDS in Secrets Manager, and an AWS-managed key provides encryption. Deletion protection is enabled. Spring Boot runs Flyway migrations V1–V11. V10 stores payment_events and V11 stores nutrition_profiles. The original schema and API are only the baseline; compare migrations and D32 when documenting extensions.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/rds/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/rds/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">manage_master_user_password = true
db_subnet_group_name        = aws_db_subnet_group.main.name
vpc_security_group_ids      = [var.security_group_id]
publicly_accessible         = false

# Standby copy in the second AZ with automatic failover (prod-like HA; adds instance hours
# while the app is on and doubles storage).
multi_az = var.multi_az</code></pre>
    </div>


      <h3 class="report-h3">5.3.2-database-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step1.png', '5.3.2-database-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step1.png', '5.3.2-database-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/database-step1.png" alt="5.3.2-database-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">RDS: db.t4g.micro, PostgreSQL 17.9, KMS encryption, Multi-AZ = Yes, secondary zone ap-southeast-1b</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">Verify that RDS is not public, encryption is enabled, and tasks can read the secret through their IAM role. Check migrations in backend/src/main/resources/db/migration.</p>

      <h3 class="report-h3">RDS and Flyway</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step2.png', 'RDS and Flyway')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/database-step2.png', 'RDS and Flyway')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/database-step2.png" alt="RDS and Flyway" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">RDS Connectivity & Security: Publicly accessible = No, subnet group nutrition-dev-db has two private subnets</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">Terraform does not automatically start a stopped RDS instance. demo-infra.ps1 up calls start-db-instance and waits until the instance is available before applying.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/rds/main.tf" target="_blank">infra/modules/rds/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-1')">← 5.3.1 Create a VPC Network</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">5.3.3 Configure Cognito →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3-3' ? 'active' : ''}" id="pane-ws-5-3-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.3.3. Configure Cognito</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Issue identities from JWTs and enforce USER / ADMIN authorization.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">Create a User Pool and SPA client without a client secret through the Cognito module. The client uses SRP rather than hosted UI. USER and ADMIN groups are declared in Terraform. The backend validates issuer, token_use, client_id, and token expiry; it takes sub and cognito:groups from the JWT.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/cognito/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/cognito/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_cognito_user_group" "admin" {
  name         = "ADMIN"
  user_pool_id = aws_cognito_user_pool.users.id
}

resource "aws_cognito_user_group" "user" {
  name         = "USER"
  user_pool_id = aws_cognito_user_pool.users.id
}</code></pre>
    </div>


      <h3 class="report-h3">5.3.3-cognito-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step1.png', '5.3.3-cognito-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step1.png', '5.3.3-cognito-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/cognito-step1.png" alt="5.3.3-cognito-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Cognito user pool nutrition-dev-users in Singapore</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">As described in docs/demo.md: a request without a token returns 401, and a regular user calling an admin API receives 403. Do not capture user tokens or personal data.</p>

      <h3 class="report-h3">Cognito Login</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step2.png', 'Cognito Login')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.3-core-infra/cognito-step2.png', 'Cognito Login')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.3-core-infra/cognito-step2.png" alt="Cognito Login" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Cognito User Pool: two groups, ADMIN and USER</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">No issue was recorded specifically for this step. Actual project incidents (Terraform state lock, expired SSO, favicon 403, lost session on refresh, stopped RDS, and Bedrock quota) and their resolutions are compiled in <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/cognito/main.tf" target="_blank">infra/modules/cognito/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-2')">← 5.3.2 Create an RDS Database</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">5.4 Application Deployment →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4. Application Deployment</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Deploy the ARM64 backend, React frontend, and sandbox payments. The pipeline uses GitHub's OIDC token, exchanged by AWS STS for temporary deploy-role credentials.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/deploy-app.png', '5.4 Application Deployment')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/deploy-app.png', '5.4 Application Deployment')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/deploy-app.png" alt="5.4 Application Deployment" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Component diagram: CloudFront → S3 / ALB → two ECS tasks, ECR, GitHub Actions OIDC through AWS STS, VNPAY</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-1');">ECS Fargate and ALB</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-2');">Frontend on S3 and CloudFront</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-3');">CI/CD with GitHub Actions OIDC</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-4-4');">VNPAY Sandbox Payments</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-3-3')">← 5.3.3 Configure Cognito</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">5.4.1 ECS Fargate and ALB →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-1' ? 'active' : ''}" id="pane-ws-5-4-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.1. ECS Fargate and ALB</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Deploy the ARM64 backend with a restricted origin.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">ECR stores the backend image. The workflow builds linux/arm64 to match runtime_platform. Tasks run with 0.5 vCPU / 1 GB; the desired count is 1 in public subnets with public IPs. The ALB listener forwards only when the secret header matches, and the security group restricts access to CloudFront. The header is generated into Terraform state and is not reproduced in the report. Health checks use /actuator/health.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/service/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/service/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">runtime_platform {
  operating_system_family = "LINUX"
  cpu_architecture       = "ARM64"
}</code></pre>
    </div>


      <h3 class="report-h3">5.4.1-ecs-alb-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step1.png', '5.4.1-ecs-alb-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step1.png', '5.4.1-ecs-alb-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/ecs-alb-step1.png" alt="5.4.1-ecs-alb-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">ECS service nutrition-dev-backend: two running tasks, deployment Success</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">Check that tasks are RUNNING, targets are healthy, and image tags match. CloudFront → ALB uses HTTP because no domain is available; this accepted limitation means there is no HTTPS origin yet.</p>

      <h3 class="report-h3">ECS Fargate and ALB</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step2.png', 'ECS Fargate and ALB')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/ecs-alb-step2.png', 'ECS Fargate and ALB')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/ecs-alb-step2.png" alt="ECS Fargate and ALB" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Target group nutrition-dev-api: two healthy targets on port 8080</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">No issue was recorded specifically for this step. Actual project incidents (Terraform state lock, expired SSO, favicon 403, lost session on refresh, stopped RDS, and Bedrock quota) and their resolutions are compiled in <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/service/main.tf" target="_blank">infra/modules/service/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4')">← 5.4 Application Deployment</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">5.4.2 Frontend on S3 and CloudFront →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-2' ? 'active' : ''}" id="pane-ws-5-4-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.2. Frontend on S3 and CloudFront</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Deliver the SPA and images from private buckets.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">Build React with the deployment workflow. The frontend module uses OAC SigV4 for CloudFront to read S3. A Function rewrites SPA paths to index.html without converting API errors into HTML. The /api/* behavior disables caching and forwards Authorization to the ALB. Images use a separate bucket so s3 sync --delete for the frontend does not delete image assets.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/frontend/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/frontend/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "\${var.name_prefix}-frontend"
  description                       = "CloudFront access to the frontend bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}</code></pre>
    </div>


      <h3 class="report-h3">5.4.2-cloudfront-frontend-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step1.png', '5.4.2-cloudfront-frontend-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step1.png', '5.4.2-cloudfront-frontend-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cloudfront-step1.png" alt="5.4.2-cloudfront-frontend-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">CloudFront behaviors: /images/* → image S3, /api/* → ALB (HTTPS only), default → frontend S3</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">Open and refresh a deep SPA route; verify the API returns JSON and images load through /images/*. Confirm the bucket blocks public access.</p>

      <h3 class="report-h3">S3 Frontend and CloudFront</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step2.png', 'S3 Frontend and CloudFront')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cloudfront-step2.png', 'S3 Frontend and CloudFront')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cloudfront-step2.png" alt="S3 Frontend and CloudFront" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Frontend bucket: Block all public access = On; only CloudFront can read through OAC</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">The favicon was missing on the deployed site because CloudFront returned 403: the build excluded the public folder, so the icon was not uploaded to S3. The Vite configuration was fixed and an icon check added to the production build. See <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a> for other incidents.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/frontend/main.tf" target="_blank">infra/modules/frontend/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-1')">← 5.4.1 ECS Fargate and ALB</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">5.4.3 CI/CD with GitHub Actions OIDC →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-3' ? 'active' : ''}" id="pane-ws-5-4-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.3. CI/CD with GitHub Actions OIDC</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Validate and deploy without storing long-lived access keys.</p>

      <h3 class="report-h3">1. Configuration Source Review</h3>
      <p class="report-p">ci.yml runs Terraform fmt/validate, backend verify, and frontend checks. deploy.yml runs on master or via workflow_dispatch. The workflow requests a GitHub OIDC token and calls AWS STS (sts:AssumeRoleWithWebIdentity) to obtain temporary credentials for nutrition-dev-github-deploy. The trust policy accepts only the token from the project's master branch; permissions expire after about one hour, so GitHub does not need a stored access key. The workflow then builds an ARM64 image and pushes SHA and latest tags to ECR. If ECS is stopped, only the image is pushed; up uses latest. The frontend is built, synchronized to S3, and index.html invalidated. Configure repository variables according to infra/README.md.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/github-oidc/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/github-oidc/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">    variable = "token.actions.githubusercontent.com:sub"
    values   = ["\${var.github_subject_prefix}:ref:refs/heads/\${var.deploy_branch}"]
  }
}</code></pre>
    </div>



    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step1.png', 'IAM role nutrition-dev-github-deploy')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step1.png', 'IAM role nutrition-dev-github-deploy')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cicd-step1.png" alt="IAM role nutrition-dev-github-deploy" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">IAM role nutrition-dev-github-deploy: trusts GitHub OIDC only for the project's master branch</div>
    </div>


    <h3 class="report-h3">2. Result Verification</h3>
<p class="report-p">
  Compare the workflow with an actual run by the repository owner; verify the trust policy aud and immutable subject prefix for the master branch.
</p>

<div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step2.png', 'CI/CD qua OIDC')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/cicd-step2.png', 'CI/CD qua OIDC')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/cicd-step2.png" alt="CI/CD qua OIDC" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">GitHub Actions: Deploy to AWS dev workflow completed successfully (backend image, frontend, publish)</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">PR #36 updated the OIDC trust policy to use an immutable subject. Compare github_subject_prefix in the module with the current GitHub configuration.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/github-oidc/main.tf" target="_blank">infra/modules/github-oidc/main.tf</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-2')">← 5.4.2 Frontend on S3 and CloudFront</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">5.4.4 VNPAY Sandbox Payments →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4-4' ? 'active' : ''}" id="pane-ws-5-4-4">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.4.4. VNPAY Sandbox Payments</h1>
    </header>

    <section class="report-section">
      <p class="report-p">Verify sandbox processing, authorization, and demo flows.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">Start the app with demo-infra.ps1 up -Vnpay according to the runbook. VNPAY sandbox uses HMAC-SHA512; IPN updates an order only when signature and amount are valid. The Return URL is read-only. Abandoned orders are cancelled after 15 minutes, and stock is restored exactly once. V10 records payment_events; admin API filters and paginates payment logs. Do not store signatures or secrets. Run the scenarios in docs/demo.md, including fail-closed and COD.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/payments/VnpaySigner.java" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> backend/src/main/java/com/nutrition/payments/VnpaySigner.java</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-java">static String canonical(Map&lt;String, String&gt; params) {
  return new TreeMap&lt;&gt;(params)
      .entrySet().stream()
      .filter(e -&gt; e.getValue() != null &amp;&amp; !e.getValue().isEmpty())
      .filter(e -&gt; !e.getKey().equals(HASH) &amp;&amp; !e.getKey().equals(HASH_TYPE))
      .map(e -&gt; encode(e.getKey()) + "=" + encode(e.getValue()))
      .collect(Collectors.joining("&amp;"));
}</code></pre>
    </div>



    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> scripts/demo-infra.ps1</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">.\scripts\demo-infra.ps1 up -Vnpay          # also enable VNPAY sandbox payments (D27)
.\scripts\demo-infra.ps1 up -Vnpay -Waf     # also put AWS WAF in front of CloudFront</code></pre>
    </div>


      <h3 class="report-h3">5.4.4-payments-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step1.png', '5.4.4-payments-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step1.png', '5.4.4-payments-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.4-deployment/payments-step1.png" alt="5.4.4-payments-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Order #10 paid through VNPAY sandbox: Placed, Paid via VNPAY</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">According to PROGRESS on November 21, 2026: backend 86, frontend 145, E2E + axe 57. Commands in CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 and npm run test:e2e. A signed-in web test report covering profile, recommendations, and VNPAY is still needed because PROGRESS lists this as open.</p>


<div class="report-figure">
  <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step2.png', 'VNPAY Payment Log')">
    <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
  </p>

  <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.4-deployment/payments-step2.png', 'VNPAY Payment Log')" title="Click to enlarge" style="cursor: zoom-in;">
    <img
      src="assets/images/workshop/5.4-deployment/payments-step2.png"
      alt="VNPAY sandbox payment verification evidence"
      class="report-figure-img"
      loading="lazy"
    />
  </div>

  <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">
    VNPAY sandbox payment verification evidence.
  </div>
</div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">After a test payment using an NCB card, the order remained in "Waiting for VNPAY confirmation": ALB logs showed VNPAY returned code 00 to the Return URL but did not call IPN. The sandbox account had not registered an IPN URL. After registering https://&lt;cloudfront&gt;/api/payments/vnpay/ipn with VNPAY, order #10 changed to "Paid", and the payment log recorded IPN. See <a href="#workshop-5-8" style="color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-underline-offset:2px;cursor:pointer;" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a> for other incidents.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/payments/VnpaySigner.java" target="_blank">backend/src/main/java/com/nutrition/payments/VnpaySigner.java</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-3')">← 5.4.3 CI/CD with GitHub Actions OIDC</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">5.5 Bedrock AI Search →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5. AI Search with Amazon Bedrock</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Configure Bedrock in Tokyo, then validate the tool, Guardrail, and prompt set. The bonus section adds profiles and code-calculated meal recommendations.</p>


    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-ai.png', '5.5 AI Search with Amazon Bedrock')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-ai.png', '5.5 AI Search with Amazon Bedrock')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-ai.png" alt="5.5 AI Search with Amazon Bedrock" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Component diagram: ECS calls Bedrock in Tokyo through Guardrails; facts come from PostgreSQL</div>
    </div>



      <h3 class="report-h3">Content</h3>
      <ul class="report-list" style="line-height: 1.8;">
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-1');">Enable Nova 2 Lite and Guardrails</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-2');">AI Evaluation</a></li>
        <li><a href="javascript:void(0);" onclick="switchWorkshopTab('ws-5-5-3');">Meal Recommendations (Bonus)</a></li>
      </ul>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-4-4')">← 5.4.4 VNPAY Sandbox Payments</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">5.5.1 Enable Nova 2 Lite and Guardrails →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-1' ? 'active' : ''}" id="pane-ws-5-5-1">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.1. Enable Nova 2 Lite and Guardrails</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Call Nova 2 Lite and verify safety using the prompt set.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">D18 sets BEDROCK_REGION=ap-northeast-1, model amazon.nova-2-lite-v1:0, and profile jp.amazon.nova-2-lite-v1:0. The Guardrail is in the same region. searchProducts is the only tool; the backend validates its schema and uses parameterized SQL queries. Search, facts, compare, and plan intents use DB data to compose factual responses. D32 calculates targets and suggestions in code without sending body data to the model. Chat quota: 30 questions per user per day.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/guardrail/main.tf" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> infra/modules/guardrail/main.tf</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-hcl">resource "aws_bedrock_guardrail" "chat" {
  # Must match the region the backend calls Bedrock in (BEDROCK_REGION, D18).
  region      = var.region
  name        = "\${var.name_prefix}-chat"
  description = "Food catalog search: no medical advice, no prompt attacks."

  blocked_input_messaging   = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."
  blocked_outputs_messaging = "Tôi chỉ hỗ trợ tra cứu thực phẩm trong cửa hàng và không đưa ra lời khuyên y tế."</code></pre>
    </div>


      <h3 class="report-h3">5.5.1-bedrock-guardrails-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png', '5.5.1-bedrock-guardrails-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png', '5.5.1-bedrock-guardrails-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-guardrails-step1.png" alt="5.5.1-bedrock-guardrails-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Guardrail nutrition-dev-chat in Tokyo: blocks medical advice and prompt attacks</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">The current prompts.json contains 45 questions. On November 21, 2026: safety 17/17, lookup 27/28 (85% threshold), all seven P01–P07 questions passed. L01 varies because the model omits category; monitor this. docs/ai-eval.md still describes previous runs of 30/38 questions; compare against PROGRESS.md and the current prompt set. Evaluation calls incur model charges and are not part of CI.</p>

      <h3 class="report-h3">AI Search and Guardrails</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI Search and Guardrails')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI Search and Guardrails')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-quotas.png" alt="AI Search and Guardrails" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Service Quotas: Nova 2 Lite cross-region 8,000,000 tokens per minute</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">The account's Singapore quota is zero. D18 moved calls to Tokyo; monitor quotas L-C6F5908D and L-210172B5. A Guardrail AccessDenied error requires bedrock:ApplyGuardrail permissions in Tokyo in both the policy and permission boundary.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5')">← 5.5 Bedrock AI Search</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">5.5.2 AI Evaluation →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-2' ? 'active' : ''}" id="pane-ws-5-5-2">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.2. AI Evaluation</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Call Nova 2 Lite and verify safety using the prompt set.</p>

      <h3 class="report-h3">Configuration Source Review</h3>

    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> docs/ai-eval.md</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-powershell">$env:AWS_PROFILE = "nutrition-apply"
$env:BEDROCK_REGION = "ap-northeast-1"                 # D18: Tokyo
$env:BEDROCK_MODEL_ID = "amazon.nova-2-lite-v1:0"
$env:BEDROCK_INFERENCE_PROFILE_ID = "jp.amazon.nova-2-lite-v1:0"
$env:BEDROCK_GUARDRAIL_ID = "&lt;terraform output bedrock_guardrail_id&gt;"   # tùy chọn
$env:BEDROCK_GUARDRAIL_VERSION = "1"                                    # tùy chọn

cd backend
./mvnw.cmd test -Pbedrock-eval</code></pre>
    </div>


      <h3 class="report-h3">5.5.2-ai-evaluation-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png', '5.5.2-ai-evaluation-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png', '5.5.2-ai-evaluation-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/ai-evaluation-step1.png" alt="5.5.2-ai-evaluation-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Evaluation using the actual model (-Pbedrock-eval): BUILD SUCCESS on November 25, 2026</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">The current prompts.json contains 45 questions. On November 21, 2026: safety 17/17, lookup 27/28 (85% threshold), all seven P01–P07 questions passed. L01 varies because the model omits category; monitor this. docs/ai-eval.md still describes previous runs of 30/38 questions; compare against PROGRESS.md and the current prompt set. Evaluation calls incur model charges and are not part of CI.</p>
      <p class="report-p">According to PROGRESS on November 21, 2026: backend 86, frontend 145, E2E + axe 57. Commands in CLAUDE.md: backend ./mvnw verify; frontend npm test -- --maxWorkers=1 and npm run test:e2e. A signed-in web test report covering profile, recommendations, and VNPAY is still needed because PROGRESS lists this as open.</p>

      <h3 class="report-h3">AI Search and Guardrails</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI Search and Guardrails')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/bedrock-quotas.png', 'AI Search and Guardrails')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/bedrock-quotas.png" alt="AI Search and Guardrails" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Service Quotas: Nova 2 Lite cross-region 8,000,000 tokens per minute</div>
    </div>


      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">The account's Singapore quota is zero. D18 moved calls to Tokyo; monitor quotas L-C6F5908D and L-210172B5. A Guardrail AccessDenied error requires bedrock:ApplyGuardrail permissions in Tokyo in both the policy and permission boundary.</p>
      <p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/ai-eval.md" target="_blank">docs/ai-eval.md</a>.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-1')">← 5.5.1 Enable Nova 2 Lite and Guardrails</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-3')">5.5.3 Meal Recommendations (Bonus) →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5-3' ? 'active' : ''}" id="pane-ws-5-5-3">

  <div class="tech-report">
    <header>
      <div class="report-eyebrow">Technical Workshop</div>
      <h1 class="report-title">5.5.3. Meal Recommendations (Bonus)</h1>

    <div class="ws-meta-row" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
    </div>

    </header>

    <section class="report-section">
      <p class="report-p">Validate profiles and DB-derived meal recommendations.</p>

      <h3 class="report-h3">Configuration Source Review</h3>
      <p class="report-p">D32 adds profiles and meal recommendations. The backend derives identity from JWT sub. GET/PUT/DELETE /api/me/profile stores a profile and consent; GET /api/me/targets calculates targets, and GET /api/me/recommendations suggests meals. Mifflin-St Jeor multiplied by activity level is computed in code. Targets use a 15% calorie deficit for loss, maintenance, or a 10% surplus for muscle gain, never below resting energy. Users outside ages 18–65 or BMI 17–35, pregnancy/breastfeeding, or medical conditions requiring supervision are not offered personal targets.</p>


    <div class="code-snippet-wrap">
      <div class="code-snippet-header">
        <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/backend/src/main/java/com/nutrition/profile/RecommendationService.java" target="_blank" class="code-filename-link"><i class="fab fa-github"></i> backend/src/main/java/com/nutrition/profile/RecommendationService.java</a>
        <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)">
          <i class="far fa-copy"></i> Copy
        </button>
      </div>
      <pre class="code-snippet-pre"><code class="language-java">public class RecommendationService {
  /** Share of the day's targets each meal aims for. */
  public enum Meal {
    BREAKFAST(0.25),
    LUNCH(0.375),
    DINNER(0.375);</code></pre>
    </div>


      <h3 class="report-h3">5.5.3-meal-recommendations-step1</h3>

    <div class="report-figure">
      <p class="report-figure-hint" style="font-size:0.85rem; color:#64748B; margin-bottom:0.5rem; cursor:pointer;" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png', '5.5.3-meal-recommendations-step1')">
        <i class="fas fa-search-plus"></i> Click the image to enlarge / zoom interactively
      </p>
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png', '5.5.3-meal-recommendations-step1')" title="Click to enlarge" style="cursor: zoom-in;">
        <img src="assets/images/workshop/5.5-bedrock/meal-recommendations-step1.png" alt="5.5.3-meal-recommendations-step1" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption" style="font-size:0.9rem; color:#475569; margin-top:0.5rem; font-style:italic;">Lunch recommendation based on the profile: values calculated from the database and compared with meal targets</div>
    </div>


      <h3 class="report-h3">Result Verification</h3>
      <p class="report-p">Create a test profile with consent. Test updates/deletion, ineligible cases, and a suggested meal containing protein, vegetables/fruit, and starch. Only in-stock products with complete nutrition data are eligible; allergens are excluded fail-closed. Gram quantities are rounded to 10 g and values recalculated from the DB. The plan intent calls the same recommendation engine; the model selects only a meal and allergens and receives no body data. PROGRESS on November 21, 2026 recorded passing automated tests, but signed-in web tests were still pending.</p>

      <p class="report-p">Signed-in web test record (November 25, 2026, customer account, AWS dev environment):</p>

      <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td>/profile: enter birth year, sex, height, weight, activity level, and Muscle Gain goal; check consent and save</td>
            <td>Target: 2,700 kcal/day, protein 96 g, carbohydrates 377 g, fat 90 g. Resting energy 1,590 kcal; BMI 20. Page displays the reminder "not medical advice".</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td>/suggestions → Lunch</td>
            <td>Meal target: 1,013 kcal · 36 g protein. Suggested items: canned tuna in water 130 g – 111.8 kcal, 25.2 g protein; kale 150 g – 52.5 kcal, 4.4 g protein; chickpeas 200 g – 756 kcal, 41 g protein. Total 920.3 kcal (91% of target), protein 70.6 g (196%).</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td>Ask the AI assistant: "Suggest lunch for me"</td>
            <td>The AI returns the same three foods, gram amounts, and figures as the Suggestions page: total 920.3 kcal (91%), accompanied by "Figures are calculated from store data and your profile. For reference only, not medical advice."</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td>Ineligible cases (pregnancy/breastfeeding, supervised medical diet, age or BMI outside the allowed range)</td>
            <td>Verified by the automated NutritionTargetsTest: the system gives the reason for ineligibility and does not calculate personal targets. The form explicitly says "A condition requiring a medically supervised diet" will trigger a recommendation to consult a professional.</td>
          </tr>
        </tbody>
      </table>
      </div>

      <p class="report-p">Step 3 demonstrates that the model does not calculate numbers itself: the plan intent calls the same engine as the website, and the backend derives every figure from PostgreSQL and the user's profile.</p>

      <h3 class="report-h3">Recorded Issues</h3>
      <p class="report-p">No error occurred in this test. One improvement was identified: the recommendation engine prioritizes sufficient calories, so protein can substantially exceed the meal target (196% here) when a protein-rich starch such as chickpeas is selected. A future version could constrain protein further.</p>
    </section>
  </div>

        <div class="ws-prev-next-bar" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-5-2')">← 5.5.2 AI Evaluation</button>
          <button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('ws-5-6')">5.6 Monitoring & Costs →</button>
        </div>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" id="pane-ws-5-6">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.6. Monitoring, Security and Costs</h2>
          <p class="report-p">Monitor application health, audit administrative activity, and review costs. WAF is optional and enabled only for selected demos.</p>


${renderWorkshopEvidence568('architecture', 'Sơ đồ giám sát CloudWatch, CloudTrail và Budgets', 'Component diagram: CloudWatch Logs → Alarm → SNS, CloudTrail → S3 logs, Budgets', false)}



<h4 class="report-h4">Content</h4>
<ul class="report-list" style="font-weight:400;">
  <li><a style="font-weight:400;" href="#/workshop" onclick="switchWorkshopTab('ws-5-6-1');return false;">CloudWatch Logs and Alarms</a></li>
  <li><a style="font-weight:400;" href="#/workshop" onclick="switchWorkshopTab('ws-5-6-2');return false;">CloudTrail, ALB Logs and WAF</a></li>
  <li><a style="font-weight:400;" href="#/workshop" onclick="switchWorkshopTab('ws-5-6-3');return false;">Cost Estimation and Optimization</a></li>
</ul>

          ${renderPrevNextBar('ws-5-5-3', '5.5.3 Meal Recommendations', 'ws-5-6-1', '5.6.1 CloudWatch')}
        </section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-1' ? 'active' : ''}" id="pane-ws-5-6-1">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.6.1. CloudWatch Logs and Alarms</h2>
          <p class="report-p">Monitor application failures and administrative activity.</p>

<h3 class="report-h3">Source Configuration</h3>
<p class="report-p">CloudWatch retains application logs for 14 days. Seven alarms monitor ALB 5xx, healthy targets, ECS CPU/RAM, RDS CPU/storage, and ERROR logs. Alarms notify SNS; recipients must confirm their subscriptions. ALB/ECS alarms depend on app_running; RDS alarms handle missing data appropriately when stopped. AWS-managed keys protect RDS and secrets; the USD 100 budget in the project brief still requires screenshot confirmation in the prerequisites.</p>

<div class="code-snippet-wrap" style="margin:1.25rem 0">
  <div class="code-snippet-header">
    <span class="code-filename">infra/modules/alarms/main.tf</span>
    <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="Copy" aria-label="Copy">⧉</button>
  </div>
  <pre class="code-snippet-pre"><code class="language-text">  alarm_name         = "&#36;{var.name_prefix}-api-5xx"
  alarm_description   = "API returned 5 or more 5xx responses in 5 minutes."
  namespace           = "AWS/ApplicationELB"
  metric_name         = "HTTPCode_Target_5XX_Count"
  dimensions          = { LoadBalancer = var.alb_arn_suffix }
  statistic           = "Sum"
  period              = 300
  evaluation_periods  = 1
  threshold           = 5</code></pre>
</div>

${renderWorkshopEvidence568('monitor','CloudWatch: 7 alarms in OK state','CloudWatch: 7 alarms in OK state',false)}

<h3 class="report-h3">Result Verification</h3>
<p class="report-p">Compare alarm states with app_running; confirm SNS subscriptions, CloudTrail logging, and S3 log objects. WAF may be absent when disabled to reduce costs.</p>

${renderWorkshopEvidence568('logs','Log bucket: alb/ (ALB access logs) and cloudtrail/ prefixes','Log bucket: alb/ (ALB access logs) and cloudtrail/ prefixes',false)}

<h3 class="report-h3">Recorded Issues</h3>
<p class="report-p">No issues were recorded specifically for this step. Project-wide incidents (Terraform state lock, expired SSO, favicon 403, session loss on refresh, stopped RDS, and Bedrock quota) and their resolutions are summarized in <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p>

<p class="report-p">Sources:
  <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>,
  <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>,
  <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/alarms/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/alarms/main.tf</a>.
</p>

${renderPrevNextBar('ws-5-6', '5.6 Overview', 'ws-5-6-2', '5.6.2 Audit / WAF')}
        </section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-2' ? 'active' : ''}" id="pane-ws-5-6-2">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.6.2. CloudTrail, ALB Logs and WAF</h2>
          <h3 class="report-h3">Source Configuration</h3>
          <p class="report-p">Multi-region CloudTrail and ALB access logs are stored in <strong>nutrition-dev-logs-&lt;account-id&gt;</strong>. The bucket blocks public access, uses SSE-S3 encryption, and deletes logs after 30 days.</p><p class="report-p">The S3 gateway endpoint was recorded as available on Nov 22, 2026. The <strong>CLOUDFRONT</strong> WAF is in <strong>us-east-1</strong> and created only with <strong>-Waf</strong>. WAF includes Common, Known Bad Inputs and IP Reputation rules, plus 1,000 requests/5 min/IP rate limiting. SizeRestrictions_BODY is count-only so 2 MB admin image uploads are not blocked.</p><p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/audit/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/audit/main.tf</a></p><div class="code-snippet-wrap"><div class="code-snippet-header"><span>HCL · CloudTrail</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div><pre><code>resource "aws_cloudtrail" "main" {
  name                          = local.trail_name
  s3_bucket_name                = aws_s3_bucket.logs.id
  s3_key_prefix                 = "cloudtrail"
  is_multi_region_trail         = true
  include_global_service_events = true
  enable_log_file_validation    = true

  depends_on = [aws_s3_bucket_policy.logs]
}</code></pre></div>${renderWorkshopEvidence568('audit', 'CloudTrail nutrition-dev-trail ghi log đa vùng', 'Multi-region CloudTrail logging', false)}
          <h3 class="report-h3">Result Verification</h3><p class="report-p">Compare alarm states with app_running; confirm the SNS subscription, CloudTrail logging, and log objects in S3. WAF may be absent when disabled to reduce costs.</p>
          ${renderWorkshopEvidence568('logs', 'S3 log bucket: ALB access logs in alb/ and CloudTrail records in cloudtrail/', 'S3 log bucket: ALB access logs in alb/ and CloudTrail records in cloudtrail/', false)}
          <h3 class="report-h3">Recorded Issues</h3>
          <p class="report-p">No issues were recorded specifically for this step. Project-wide incidents (Terraform state lock, expired SSO, favicon 403, session loss on refresh, stopped RDS, and Bedrock quota) and their resolutions are summarized in <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p><p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/audit/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/audit/main.tf</a>.</p>


          ${renderPrevNextBar('ws-5-6-1', '5.6.1 CloudWatch', 'ws-5-6-3', '5.6.3 Costs')}
        </section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6-3' ? 'active' : ''}" id="pane-ws-5-6-3">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.6.3. Cost Estimation and Optimization</h2>
          <p class="report-p">Distinguish demo, 24/7, and proposed production costs.</p>
          <h3 class="report-h3">Source Configuration</h3>
          <p class="report-p">Estimated <strong>USD/month</strong>, compared with AWS Pricing Calculator results dated Nov 25, 2026, for Multi-AZ and two ECS tasks (D33). Taxes are excluded; estimates may vary by ±10%. Production is a future proposal, not a deployed configuration. Bedrock calls are made in Tokyo.</p><div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Service / configuration</th><th>Demo (~4h/day)</th><th>24/7 (Calculator)</th><th>Production (proposed)</th></tr></thead><tbody><tr><td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td><td>~11.6</td><td>42.75</td><td>~70 (db.t4g.small)</td></tr><tr><td>ECS Fargate ARM64, 0.5 vCPU / 1 GB, 2 tasks</td><td>~5.9</td><td>35.98</td><td>~36–72</td></tr><tr><td>Application Load Balancer</td><td>~3.1</td><td>18.63</td><td>~22</td></tr><tr><td>Public IPv4, 4 addresses</td><td>~2.4</td><td>14.60</td><td>~15</td></tr><tr><td>Secrets Manager, 2 secrets</td><td>0.85</td><td>0.85</td><td>0.85</td></tr><tr><td>Bedrock (Nova Lite reference, Tokyo)</td><td>&lt;0.7</td><td>0.70</td><td>Usage-based</td></tr><tr><td>CloudFront / CloudWatch / ECR / S3 / Cognito / CloudTrail</td><td>~2.9</td><td>2.89</td><td>~5</td></tr><tr><td><strong>Total excluding WAF</strong></td><td><strong>~27</strong></td><td><strong>116.40</strong></td><td><strong>~150–190</strong></td></tr><tr><td>Optional WAF</td><td>0</td><td>9.60</td><td>~10</td></tr><tr><td><strong>Total including WAF</strong></td><td>—</td><td><strong>126.00</strong></td><td><strong>~160–200</strong></td></tr></tbody></table></div><p class="report-p">Cost Explorer recorded <strong>USD 6.44</strong> from Nov 1–21, 2026, fully offset by credits: RDS 2.77, ALB 1.29, ECS 1.21, IPv4 0.74, Bedrock 0.21 and Secrets Manager 0.20. These are major line items, not a full invoice breakdown, and predate Multi-AZ enablement.</p><p class="report-p">AWS Pricing Calculator <a href="https://calculator.aws/#/estimate?id=5aefaa50b7c0b549b0aef4b49215196ac9c0145d" target="_blank" rel="noopener noreferrer">estimate dated Nov 25, 2026 (source)</a>. The 24/7 column uses the Calculator values for Singapore, except Bedrock in Tokyo. The Demo column converts these amounts to approximately 120 active hours per month: hourly charges (RDS instance, Fargate, ALB, IPv4) are multiplied by 120/730, while RDS storage (USD 5.52) and usage-based charges remain. Assumed workload: 50 users/month, 5 GB CloudFront and about 3,600 AI questions/month (1 question/minute for 2 hours/day, 1,500 input tokens and 300 output tokens). Amazon Nova Lite is used as a pricing reference because the Calculator does not yet include Amazon Nova 2 Lite. RDS Proxy and Database Insights Advanced are excluded because the project does not use them.</p><p class="report-p">The app is off by default. From D20, <strong>up/down</strong> leaves only RDS storage, S3 and fixed costs when idle. D15 removed NAT. From D33, Multi-AZ RDS and two ECS tasks add approximately USD 0.05/hour while the app is running, plus approximately USD 2.8/month for standby storage; return to one AZ using <strong>rds_multi_az</strong> and <strong>api_desired_count</strong>. Fargate Spot remains an option requiring assessment of interruption risks; deployment in the current module has not been confirmed.</p><div class="code-snippet-wrap"><div class="code-snippet-header"><span>PowerShell · scripts/demo-infra.ps1</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div><pre><code>.\\scripts\\demo-infra.ps1 down   # remove ALB + ECS service, stop RDS (~5-10 min)</code></pre></div>${renderWorkshopEvidence568('cost', 'Cost Explorer: chi phí theo dịch vụ tháng 11/2026', 'Cost Explorer: November 2026 service costs', false)}
          <h3 class="report-h3">Result Verification</h3><p class="report-p">Use the Cost Explorer period of Nov 1–21, 2026, and verify credits separately from usage. Monthly estimates are not guaranteed invoices.</p>
          ${renderWorkshopEvidence568('credits', 'Billing → Credits: total credits USD 199.99, approximately USD 15.07 used', 'Billing → Credits: total credits USD 199.99, approximately USD 15.07 used', false)}
          <h3 class="report-h3">Recorded Issues</h3>
          <p class="report-p">No issues were recorded specifically for this step. Other project incidents and their resolutions are summarized in <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p><p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" rel="noopener noreferrer">scripts/demo-infra.ps1</a>.</p>



          ${renderPrevNextBar('ws-5-6-2', '5.6.2 Audit / WAF', 'ws-5-7', '5.7 Cleanup')}
        </section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" id="pane-ws-5-7">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.7. Resource Cleanup</h2>
          <h3 class="report-h3">Shutdown After the Demo</h3><p class="report-p">Run <strong>down</strong> with <strong>-Vnpay</strong> if the sandbox secret must be retained. Omitting <strong>-Vnpay</strong> removes the secret according to the script. Down removes the ALB and ECS service, removes the CloudFront API origin, and stops RDS; data is retained and storage charges still apply. AWS automatically restarts RDS after seven days. The infra/README.md gives only a general overview of destroy dev; the detailed procedure is in section 4 of docs/runbook.md.</p><div class="code-snippet-wrap"><div class="code-snippet-header"><span>PowerShell · scripts/demo-infra.ps1</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div><pre><code>.\\scripts\\demo-infra.ps1 down   # remove ALB + ECS service, stop RDS (~5-10 min)</code></pre></div>${renderWorkshopEvidence568('cleanup1', 'ECS: 0 service và 0 task sau khi down', 'ECS: 0 services and 0 tasks after shutdown', false)}
          <h3 class="report-h3">Verify Resource State and the Seven-Day Cycle</h3><p class="report-p">Shutting down the demo retains the data and is distinct from a full destroy.</p>${renderWorkshopEvidence568('cleanup2', 'RDS dừng sau buổi demo', 'EC2 Load Balancers after shutdown: no ALB remains', false)}
          ${renderWorkshopEvidence568('cleanup3', 'RDS: các bản snapshot tự động', 'RDS after shutdown: Stopped', false)}
          <h3 class="report-h3">Full Teardown and Recovery Drill</h3><p class="report-p">Full teardown per runbook: create a snapshot and wait until Available; deliberately disable RDS/Cognito deletion protection, inspect the Terraform destroy plan, destroy dev, then reinstate protections on re-deploy. The bootstrap bucket uses prevent_destroy and is outside the drill. <strong>No snapshot restore drill report is available; do not claim it has been completed.</strong></p><p class="report-p">The fault-tolerance drill on Nov 22, 2026 used RDS → Reboot with failover in a Multi-AZ configuration. The primary AZ changed from ap-southeast-1a to ap-southeast-1b; the database restarted after approximately 18 seconds, and AWS reported completion after approximately 43 seconds. The API was unavailable for approximately 25–35 seconds, then recovered automatically without data loss or manual intervention. A snapshot recovery drill has not been performed; RDS still has daily automated snapshots (shown below) available for recovery if required.</p>${renderWorkshopEvidence568('cleanup4', 'Minh chứng bổ sung trong quá trình dọn tài nguyên', 'RDS System Snapshots: nine daily automated backups', false)}
          <h3 class="report-h3">Recorded Issues</h3><p class="report-p">Closing the terminal during Terraform down/apply may leave a state lock. Only consider <strong>terraform force-unlock &lt;LOCK_ID&gt;</strong> after verifying that no Terraform process is active and the state is unchanged. See <a href="#/workshop" onclick="switchWorkshopTab('ws-5-8');return false;">5.8 Testing and Troubleshooting</a>.</p><p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/README.md" target="_blank" rel="noopener noreferrer">infra/README.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/scripts/demo-infra.ps1" target="_blank" rel="noopener noreferrer">scripts/demo-infra.ps1</a>.</p>





          ${renderPrevNextBar('ws-5-6-3', '5.6.3 Costs', 'ws-5-8', '5.8 Testing')}
        </section>
      </div>

      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-8' ? 'active' : ''}" id="pane-ws-5-8">
        <section class="report-section">
          <div class="report-eyebrow">Technical Workshop</div>
          <h2 class="report-h2">5.8. Testing and Troubleshooting</h2>
          <p class="report-p">A guide to post-deployment checks (API, logs, alarms), negative scenarios and incidents recorded by the group. Results below come from source documents, not newly executed tests.</p><h3 class="report-h3">1. API Verification with cURL</h3><p class="report-p">Use the Terraform <strong>app_url</strong> output instead of the sample application URL as needed; run the commands in Windows PowerShell.</p><div class="code-snippet-wrap"><div class="code-snippet-header"><span>PowerShell · API</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div><pre><code>$APP = "https://ddn09pubqlwme.cloudfront.net"
# 1. Public catalog: expect HTTP 200 and products
curl.exe -s "$APP/api/products?size=3"
# 2. Nutrition filter: only nutrition_complete items
curl.exe -s "$APP/api/products?maxCalories=200&amp;minProtein=10"
# 3. Protected orders endpoint without token: expect 401
curl.exe -s -o NUL -w "%{http_code}&#96;n" "$APP/api/orders"
# 4. Invalid sort: expect 400
curl.exe -s -o NUL -w "%{http_code}&#96;n" "$APP/api/products?sort=khong-hop-le"</code></pre></div><div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Scenario</th><th>Expected result</th><th>Purpose</th></tr></thead><tbody><tr><td>Public catalog</td><td>200, items</td><td>CloudFront → ALB → ECS → RDS</td></tr><tr><td>Calories / protein filter</td><td><strong>nutrition_complete</strong></td><td>Fail-closed</td></tr><tr><td>No auth token</td><td>401</td><td>Cognito JWT</td></tr><tr><td>Regular user → /api/admin/stats</td><td>403</td><td><strong>cognito:groups</strong></td></tr><tr><td>Invalid parameter</td><td>400</td><td>Backend validation</td></tr><tr><td>Exceed stock</td><td>409 <strong>OUT_OF_STOCK</strong></td><td>Transactional stock decrement</td></tr><tr><td>AI queries >30/day</td><td>429</td><td>Per-account quota</td></tr><tr><td>Medical advice prompt</td><td>Refused / refer to professional</td><td>Bedrock Guardrails</td></tr></tbody></table></div><p class="report-p">The 403, 409, 429 and medical prompt cases require authentication; test through the web UI following <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/demo.md" target="_blank" rel="noopener noreferrer">docs/demo.md</a>.</p><h3 class="report-h3">2. CloudWatch Logs and Alarms</h3><div class="code-snippet-wrap"><div class="code-snippet-header"><span>PowerShell · AWS CLI</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div><pre><code># Read backend logs from the past 10 minutes
aws logs tail /ecs/nutrition-dev-backend --since 10m --profile nutrition-plan --region ap-southeast-1
# Inspect seven CloudWatch alarms
aws cloudwatch describe-alarms --alarm-name-prefix nutrition-dev --query "MetricAlarms[].[AlarmName,StateValue]" --output table --profile nutrition-plan --region ap-southeast-1</code></pre></div><p class="report-p">With a healthy application, alarms show OK. nutrition-dev-api-5xx and nutrition-dev-api-error-logs notify SNS; recipients must confirm the email subscription.</p><h3 class="report-h3">3. Automated Tests</h3><div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Suite</th><th>Count (Nov 21, 2026)</th><th>Command</th></tr></thead><tbody><tr><td>Backend – JUnit / Testcontainers</td><td>86</td><td><code>./mvnw verify</code></td></tr><tr><td>Frontend – Vitest</td><td>145</td><td><code>npm test</code></td></tr><tr><td>E2E + axe – Playwright</td><td>57</td><td><code>npm run test:e2e</code></td></tr></tbody></table></div><p class="report-p">The group document says GitHub Actions executes these suites on pull requests before merging/deployment. Confirm the current state against actual workflow runs.</p><h3 class="report-h3">4. Multi-AZ Failure Drill</h3><p class="report-p">On Nov 22, 2026, RDS Reboot with failover switched primary AZ from ap-southeast-1a to ap-southeast-1b; the API recovered automatically after roughly half a minute, with no data loss or manual intervention.</p><h3 class="report-h3">5. Recorded Incidents and Resolutions</h3><div class="report-table-wrapper"><table class="report-table"><thead><tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr></thead><tbody><tr><td>Terraform state lock</td><td>Terminal closed during apply; stale .tflock in S3</td><td>Verify no active Terraform process/state changes before terraform force-unlock &lt;LOCK_ID&gt;</td></tr><tr><td>SSO expired / InvalidGrantException</td><td>Expired AWS SSO session</td><td>aws sso login --sso-session nutrition</td></tr><tr><td>CloudFront favicon 403</td><td>Vite build excluded public icon</td><td>Fix Vite build configuration and validate production build icon</td></tr><tr><td>Session lost on refresh</td><td>Cognito token kept only in memory</td><td>Persist and restore session via <strong>localStorage</strong> (D34)</td></tr><tr><td>RDS not ready on up</td><td>RDS stopped or auto-restarted after seven days</td><td>demo-infra.ps1 up starts RDS and waits for available</td></tr><tr><td>Bedrock temporarily unavailable</td><td>No model quota in Singapore</td><td>Nova 2 Lite via inference profile in Tokyo (<strong>BEDROCK_REGION</strong>, D18)</td></tr></tbody></table></div><h3 class="report-h3">6. Lessons Learned</h3><ul class="report-list"><li>Review <strong>terraform plan</strong> before apply, especially destroy/replace.</li><li>Do not close the terminal during apply; check state before unlocking.</li><li>Test the production build, not only local development.</li><li>Demo-based infrastructure scheduling saves costs but must wait for RDS readiness.</li></ul><p class="report-p">Sources: <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/runbook.md" target="_blank" rel="noopener noreferrer">docs/runbook.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/demo.md" target="_blank" rel="noopener noreferrer">docs/demo.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/test-plan.md" target="_blank" rel="noopener noreferrer">docs/test-plan.md</a>, <a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/infra/modules/alarms/main.tf" target="_blank" rel="noopener noreferrer">infra/modules/alarms/main.tf</a>.</p>
          ${renderPrevNextBar('ws-5-7', '5.7 Cleanup', '', '')}
        </section>
      </div>
    </div>
  `;
}

function renderWorkshopView() {
  const container = document.getElementById('workshop-content-container');
  if (!container) return;

  const lang = (window.app && window.app.currentLang) || 'vi';
  container.innerHTML = lang === 'en' ? getWorkshopEnHtml() : getWorkshopViHtml();
  // Restore the selected pane on each rerender; never leave an empty panel.
  const selected = container.querySelector('#pane-' + workshopSidebarStep(currentWorkshopStepId));
  if (selected) {
    container.querySelectorAll('.ws-module-pane').forEach(pane =>
      pane.classList.toggle('active', pane === selected));
  }
  syncWorkshopSidebar();
}

function setupWorkshopSteps() {
  renderWorkshopView();
}

// ==========================================
// 12. 6. SELF-ASSESSMENT
// ==========================================
function renderCriteriaTable() {
  const tbody = document.getElementById('criteria-tbody');
  if (!tbody) return;

  const isVi = app.currentLang === 'vi';
  tbody.innerHTML = app.data.criteria.map((c) => `
    <tr>
      <td style="text-align:center; font-weight:700;">${c.id}</td>
      <td><strong>${escapeHtml(isVi ? c.title_vi : c.title_en)}</strong></td>
      <td>${escapeHtml(isVi ? c.desc_vi : c.desc_en)}</td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'good' ? '#16A34A' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'good' ? '✓' : '—'}
      </td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'fair' ? '#2563EB' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'fair' ? '✓' : '—'}
      </td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'avg' ? '#D97706' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'avg' ? '✓' : '—'}
      </td>
    </tr>
  `).join('');
}

function renderSelfAssessmentInputs() {
  const lang = app.currentLang;
  setContent('assess-narrative', app.data.selfNarrative[lang] || '');
  setContent('assess-improvement', app.data.needsImprovement[lang] || '');
}

function setupSelfAssessment() {}

// ==========================================
// 13. 7. SHARING AND FEEDBACK (READ-ONLY)
// ==========================================
function renderFeedbackInputs() {
  const lang = app.currentLang;
  const fb = app.data.feedback[lang] || app.data.feedback.vi;

  setContent('fb-experience', fb.env);
  setContent('fb-satisfaction', fb.mentor);
  setContent('fb-improvements', fb.relevance);
  setContent('fb-recommendations', fb.learning);

  setContent('fb-env', fb.env);
  setContent('fb-mentor', fb.mentor);
  setContent('fb-relevance', fb.relevance);
  setContent('fb-learning', fb.learning);
}

function setupFeedback() {}

// ==========================================
// 14. SETTINGS & PRINT
// ==========================================
function setupSettingsAndPrint() {
  const btnExport = document.getElementById('btn-export-json');
  const btnPrint = document.getElementById('btn-quick-print');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app.data, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `internship-report-fcaj-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(t('toastExportJson'));
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

// ==========================================
// 15. LANGUAGE SWITCHER & SEARCH
// ==========================================
function setupLanguageSwitcher() {
  const btnVi = document.getElementById('btn-lang-vi');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnVi) {
    btnVi.addEventListener('click', () => {
      if (app.currentLang !== 'vi') {
        app.setLang('vi');
        showToast(t('toastLangSwitch'));
      }
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', () => {
      if (app.currentLang !== 'en') {
        app.setLang('en');
        showToast(t('toastLangSwitch'));
      }
    });
  }
}

function setupSearchAndMobile() {
  const searchInput = document.getElementById('sidebar-quick-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;

      if (q.includes('worklog') || q.includes('tuần') || q.includes('week') || q.includes('nhật ký')) navigateTo('worklog');
      else if (q.includes('proposal') || q.includes('đồ án') || q.includes('weather') || q.includes('đề xuất')) navigateTo('proposal');
      else if (q.includes('s3 express') || q.includes('one zone') || q.includes('amdahl') || q.includes('storage')) navigateTo('blogs/s3-express-one-zone');
      else if (q.includes('event-driven') || q.includes('race condition') || q.includes('dynamodb cas')) navigateTo('blogs/aws-event-driven-architecture');
      else if (q.includes('cô lập ec2') || q.includes('identity') || q.includes('containment') || q.includes('quarantine') || q.includes('imds')) navigateTo('blogs/aws-ec2-identity-containment');
      else if (q.includes('blog') || q.includes('bài viết')) navigateTo('blogs-posted');
      else if (q.includes('cloud and ai day') || q.includes('hanoi') || q.includes('watch party') || q.includes('sự kiện 1') || q.includes('event 1')) navigateTo('events/aws-cloud-ai-day-hanoi-2026');
  else if (q.includes('werner') || q.includes('fireside') || q.includes('renaissance') || q.includes('sự kiện 2') || q.includes('event 2')) navigateTo('events/fireside-chat-dr-werner-vogels');
  else if (q.includes('enterprise ai') || q.includes('multi-agent') || q.includes('multi agent') || q.includes('prototype to production') || q.includes('sự kiện 4') || q.includes('event 4')) navigateTo('events/enterprise-ai-on-aws-cloud');
  else if (q.includes('voice ai') || q.includes('contact center') || q.includes('kiệt trần') || q.includes('meet up') || q.includes('meetup') || q.includes('aws ram') || q.includes('ram') || q.includes('agentcore') || q.includes('kiro crew') || q.includes('pentest') || q.includes('sự kiện 3') || q.includes('event 3')) navigateTo('events/first-cloud-ai-journey-24-10-2026');
      else if (q.includes('event') || q.includes('sự kiện') || q.includes('bitexco')) navigateTo('events');
      else if (q.includes('workshop') || q.includes('s3') || q.includes('endpoint') || q.includes('thực hành')) navigateTo('workshop');
      else if (q.includes('đánh giá') || q.includes('self') || q.includes('assessment')) navigateTo('self-evaluation');
      else if (q.includes('feedback') || q.includes('góp ý') || q.includes('chia sẻ')) navigateTo('feedback');
    });
  }

  const toggleBtn = document.getElementById('btn-toggle-menu');
  const sidebar = document.getElementById('sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// External resources in place of the former Export & Print sidebar entry.
// The page markup is supplied by index.html; this removes the old navigation
// entry and settings view at runtime without affecting other report sections.
function setupFcajExternalSidebarLinks() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const oldLink = Array.from(sidebar.querySelectorAll('[data-page]')).find(el =>
    ['cai-dat', 'settings', 'export-print', 'export', 'settings-and-print'].includes(el.getAttribute('data-page')) ||
    el.querySelector('[data-i18n="navSettings"]') || el.getAttribute('data-i18n') === 'navSettings'
  ) || sidebar.querySelector('[data-i18n="navSettings"]');

  if (oldLink) {
    const host = oldLink.closest('li, .nav-item') || oldLink;
    const replacement = document.createElement(host.tagName.toLowerCase() === 'li' ? 'li' : 'div');
    replacement.id = 'fcaj-external-sidebar-links';
    replacement.className = 'fcaj-external-sidebar-links';
    // Independent third-party resources; not report chapters or posts by the student.
    replacement.style.cssText = 'margin-top:18px;padding-top:13px;border-top:1px solid rgba(148,163,184,.5);list-style:none;';
    const links = [
      { url: 'https://www.facebook.com/groups/awsstudygroupfcj', text: 'AWS Study Group FCAJ' },
      { url: 'https://cloudjourney.awsfcaj.com/', text: 'AWS Cloud Journey' }
    ];
    links.forEach(({url, text}) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'fcaj-external-resource';
      a.style.cssText = 'display:flex;align-items:center;gap:8px;margin:3px 5px;padding:9px 12px;border-radius:7px;color:inherit;text-decoration:none;font-size:13px;line-height:1.4;';
      const icon = document.createElement('span');
      icon.textContent = '↗';
      icon.setAttribute('aria-hidden', 'true');
      icon.style.opacity = '.7';
      a.appendChild(icon);
      a.appendChild(document.createTextNode(text));
      replacement.appendChild(a);
    });
    host.replaceWith(replacement);
  }
  ['view-cai-dat', 'view-settings', 'view-export-print'].forEach(id => {
    const node = document.getElementById(id);
    if (node) node.remove();
  });
}

// Clear row and column separators on Workshop tables (both themes, both languages).
function setupFcajWorkshopTableDividers() {
  if (document.getElementById('fcaj-workshop-table-dividers')) return;
  const style = document.createElement('style');
  style.id = 'fcaj-workshop-table-dividers';
  style.textContent = `
    #workshop-content-container .report-table-wrapper {
      border: 1px solid rgba(148,163,184,.55) !important;
      border-radius: 7px;
      overflow-x: auto;
    }
    #workshop-content-container table.report-table {
      border-collapse: collapse !important;
      border-spacing: 0;
      width: 100%;
    }
    #workshop-content-container table.report-table th,
    #workshop-content-container table.report-table td {
      border: 1px solid rgba(148,163,184,.48) !important;
      padding: 11px 13px;
      vertical-align: top;
    }
    #workshop-content-container table.report-table thead th {
      border-bottom: 2px solid rgba(148,163,184,.85) !important;
      font-weight: 700;
    }

    #workshop-content-container .report-p strong,
    #workshop-content-container .report-table td strong,
    #workshop-content-container .report-list li strong {
      font-weight: 800 !important;
      color: inherit !important;
      background: transparent !important;
      text-shadow: 0 0 .01px currentColor;
    }
    #workshop-content-container table.report-table tbody tr:nth-child(even) {
      background: rgba(148,163,184,.055);
    }
    /* Uniform link color in Workshop: TOC, paragraphs and source references. */
    #workshop-content-container .ws-module-pane a:link,
    #workshop-content-container .ws-module-pane a:visited,
    #workshop-content-container .ws-module-pane a:hover,
    #workshop-content-container .ws-module-pane a:active,
    #workshop-content-container .ws-module-pane a:focus-visible {
      color: #0284c7 !important;
      text-decoration-color: currentColor;
    }
    #fcaj-external-sidebar-links .fcaj-external-resource:hover {
      background: rgba(148,163,184,.14);
    }
  `;
  document.head.appendChild(style);
}

// ==========================================
// 16. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleHashChange);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
    });
  });

  setupStudentInfo();
  setupWorklog();
  setupProposal();
  setupBlogs();
  setupEvents();
  setupWorkshopSteps();
  setupSelfAssessment();
  setupFeedback();
  setupSettingsAndPrint();
  setupFcajExternalSidebarLinks();
  setupFcajWorkshopTableDividers();
  setupLanguageSwitcher();
  setupSearchAndMobile();
  document.getElementById('workshop-sidebar-toggle')?.addEventListener('click', toggleWorkshopSidebar);

  // Apply initial language from localStorage or default
  app.applyLanguage();

  // Navigate to current hash
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(currentHash);
});

// Expose functions globally for HTML onclick and event listeners
window.app = app;
window.navigateTo = navigateTo;
window.renderEventsList = renderEventsList;
window.renderEventDetail = renderEventDetail;
window.renderModernizationEventDetail = renderModernizationEventDetail;
window.renderCloudAIDayEventDetail = renderCloudAIDayEventDetail;
window.renderFiresideChatEventDetail = renderFiresideChatEventDetail;
window.renderMeetupEventDetail = renderMeetupEventDetail;
window.renderEnterpriseAIEventDetail = renderEnterpriseAIEventDetail;
window.selectWeek = selectWeek;
window.exportWorklogJson = exportWorklogJson;
window.showExportCodeModal = showExportCodeModal;
window.closeExportCodeModal = closeExportCodeModal;
window.renderBlogDetail = renderBlogDetail;
window.renderEventDrivenBlogDetail = renderEventDrivenBlogDetail;
window.renderIdentityContainmentBlogDetail = renderIdentityContainmentBlogDetail;
window.renderBlogsList = renderBlogsList;
window.renderProposalView = renderProposalView;
window.renderWorkshopView = renderWorkshopView;
window.switchWorkshopTab = switchWorkshopTab;
window.copyCodeSnippet = copyCodeSnippet;
window.openBlogImageModal = openBlogImageModal;
window.closeBlogImageModal = closeBlogImageModal;
window.toggleBlogSnippet = toggleBlogSnippet;
