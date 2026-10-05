const express = require('express');
const app = express();
const port = 3000; // 使用標準開發埠號 3000

// 訪客計數器（記憶體儲存）
let visitorCount = 0;

// 設定靜態檔案資料夾（若有圖片可放 public 資料夾）
app.use(express.static('public'));

// 首頁路由：計算訪客並渲染個人網站
app.get('/', (req, res) => {
  // 每當有人訪問首頁時，訪客次數 +1
  visitorCount++;

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="zh-TW">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>黃家平 博士 (Dr. C.P. Huang) - 個人學經歷與成果</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <style>
      :root {
        --primary-color: #0f172a;
        --accent-color: #2563eb;
        --bg-color: #f8fafc;
      }
      body {
        background-color: var(--bg-color);
        color: #334155;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      }
      .profile-card {
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        border: 1px solid #e2e8f0;
      }
      .counter-badge {
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        border-radius: 12px;
        padding: 12px 24px;
        display: inline-block;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
      }
      .section-title {
        border-left: 4px solid var(--accent-color);
        padding-left: 12px;
        font-weight: 700;
        color: var(--primary-color);
      }
      .stat-card {
        background: #f1f5f9;
        border-radius: 12px;
        padding: 16px;
        text-align: center;
      }
      .stat-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--accent-color);
      }
    </style>
  </head>
  <body>
    <div class="container py-5">
      
      <!-- 頂部計數器卡片 -->
      <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <h4 class="m-0 text-secondary"><i class="bi bi-globe2 me-2"></i>個人學經歷網站</h4>
        <div class="counter-badge">
          <i class="bi bi-eye-fill me-2"></i>累積訪客次數：<span class="fs-5 ms-1">${visitorCount}</span>
        </div>
      </div>

      <div class="row g-4">
        <!-- 左側：個人檔案簡介 -->
        <div class="col-lg-4">
          <div class="profile-card p-4 text-center sticky-top" style="top: 20px;">
            <div class="mb-3">
              <i class="bi bi-person-circle text-primary display-1"></i>
            </div>
            <h2 class="fw-bold mb-1">黃家平 博士</h2>
            <p class="text-muted mb-3">PhD, Cranfield University</p>
            
            <hr class="my-3">
            
            <div class="text-start fs-6 space-y-2">
              <p class="mb-2"><i class="bi bi-building text-primary me-2"></i><strong>現職：</strong>醒吾科技大學 研發長</p>
              <p class="mb-2"><i class="bi bi-cpu text-primary me-2"></i><strong>專長：</strong>AI、IoT、無人載具</p>
              <p class="mb-0"><i class="bi bi-geo-alt text-primary me-2"></i><strong>地點：</strong>台灣，新北市</p>
            </div>
          </div>
        </div>

        <!-- 右側：學歷與研究成果 -->
        <div class="col-lg-8">
          
          <!-- 學歷背景 -->
          <div class="profile-card p-4 mb-4">
            <h4 class="section-title mb-4"><i class="bi bi-mortarboard-fill me-2"></i>學歷背景</h4>
            <div class="mb-3">
              <div class="d-flex justify-content-between">
                <h5 class="fw-bold mb-1">Cranfield University</h5>
                <span class="badge bg-light text-dark border"><i class="bi bi-geo-alt me-1"></i>Bedfordshire, UK</span>
              </div>
              <p class="text-secondary mb-0">PhD 博士學位</p>
            </div>
            <hr>
            <div>
              <div class="d-flex justify-content-between">
                <h5 class="fw-bold mb-1">Warwick University</h5>
                <span class="badge bg-light text-dark border"><i class="bi bi-geo-alt me-1"></i>Coventry, UK</span>
              </div>
              <p class="text-secondary mb-0">MSc & MA 雙碩士學位</p>
            </div>
          </div>

          <!-- 產學研究成果 -->
          <div class="profile-card p-4 mb-4">
            <h4 class="section-title mb-3"><i class="bi bi-award-fill me-2"></i>產學研究與專案成果</h4>
            <p class="text-muted">長期致力於政府與民間企業之技術研發，累計產學總經費突破 <strong class="text-danger">1,000 萬</strong> 元。</p>
            
            <div class="row g-3 text-center mt-2">
              <div class="col-6 col-sm-3">
                <div class="stat-card">
                  <div class="stat-number">12 件</div>
                  <small class="text-muted">國科會專案</small>
                </div>
              </div>
              <div class="col-6 col-sm-3">
                <div class="stat-card">
                  <div class="stat-number">7 件</div>
                  <small class="text-muted">產學合作案</small>
                </div>
              </div>
              <div class="col-6 col-sm-3">
                <div class="stat-card">
                  <div class="stat-number">4 件</div>
                  <small class="text-muted">專利認證</small>
                </div>
              </div>
              <div class="col-6 col-sm-3">
                <div class="stat-card">
                  <div class="stat-number">4 件</div>
                  <small class="text-muted">技術轉移</small>
                </div>
              </div>
            </div>
          </div>

          <!-- 學術論文發表 -->
          <div class="profile-card p-4">
            <h4 class="section-title mb-4"><i class="bi bi-journal-text me-2"></i>學術論文發表</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item px-0 bg-transparent py-3">
                <div class="fw-bold text-dark">Artificial Intelligence Mathematical Foundations and Models: Cross-domain Applications in UAVs and Autonomous Vehicles</div>
                <small class="text-muted">ECICE 2025, Yunlin, Taiwan (2025)</small>
              </li>
              <li class="list-group-item px-0 bg-transparent py-3">
                <div class="fw-bold text-dark">Digital Signal Processing Algorithms for Embedded Multimodal Lane-Following Autonomous Vehicle Based on Raspberry Pi 5</div>
                <small class="text-muted">EESP 2026, Kobe, Japan (2026)</small>
              </li>
              <li class="list-group-item px-0 bg-transparent py-3">
                <div class="fw-bold text-dark">以多種開發板作為物聯網創新教學課程教具設計之效能分析研究</div>
                <small class="text-muted">醒吾學報, 72期 (2025)</small>
              </li>
              <li class="list-group-item px-0 bg-transparent py-3">
                <div class="fw-bold text-dark">智慧家庭之邊際 AI 應用研究 -- 以 ASR_PRO 開發版為例</div>
                <small class="text-muted">醒吾學報, 72期 (2025)</small>
              </li>
              <li class="list-group-item px-0 bg-transparent py-3">
                <div class="fw-bold text-dark">MATLAB GUI for Mitochondrial Fluorescence Lifetime Imaging Microscopy (FLIM) Segmentation</div>
                <small class="text-muted">醒吾學報, 71期 (2025)</small>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <footer class="text-center text-muted mt-5 pt-4 border-top">
        <p class="small">© ${new Date().getFullYear()} Dr. C.P. Huang. Powered by Express.js</p>
      </footer>
    </div>
  </body>
  </html>
  `;

  res.send(htmlContent);
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`=================================`);
  console.log(`個人網站伺服器已啟動！`);
  console.log(`請造訪：http://127.0.0.1:${port}`);
  console.log(`=================================`);
});