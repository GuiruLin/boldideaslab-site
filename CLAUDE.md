# CLAUDE.md — boldideaslab-site 工作規則

## 這個專案是什麼
Bold Ideas Lab（敢想實驗室）官網。Lynn（林桂茹）的 AI 教育品牌：為英國私校設計 AI literacy 與 AI design 課程。她本人不是工程師——解釋要白話、結論先行；任何改動完成後，給她能自己驗證的方式（預覽網址、打開哪裡看什麼）。

## 硬規則（違反任何一條就是返工）
1. 不用 emoji：頁面內容、代碼、commit 訊息、給她的回覆，一律不用。→ ≠ 等數學與箭頭符號可以。
2. 品牌色 token（2026-07-04 與畫廊站對齊後的定版）：米白 #F5F2EA（底色）、克萊因藍 #002FA7、金 #C9A84C、馬蒂斯紅 #CC2936（只用於精選與強調）。標題字 Fraunces、正文 Lora。不可用純黑或近黑當背景色塊，深色只用於文字。新增任何 UI 一律從這組 token 取色，不自創顏色。品牌視覺與文案的完整規範見 BRAND.md，品牌細節兩檔矛盾時以 BRAND.md 為準。
3. 對外文案 = 品牌聲音：教育者的權威感、具體不空泛、不套模板、不 AI 腔（「賦能」「總之」「值得注意的是」這類詞一律剔除）。英文用英式拼寫。文案的重大改動先給 Lynn 2-3 個版本附取捨說明讓她選，不要自行拍板。
4. 首頁與任何頁面上的數字（學生數、作品數、工作坊場次）必須來自真實資料，不可捏造。作品資料源是姊妹站 workshop-gallery-peach.vercel.app。已知計數坑：Plymouth 真實 22 件（曾因主題分區重複顯示成 26）、Manchester 顯示 25 但含 2 件重複、真實 23，London 8 件。引用任何數字前先實際數一遍。

## 專案事實
- repo：GuiruLin/boldideaslab-site。工作分支隨 session 輪替，以介面底部狀態列顯示的為準。
- 雲端環境名 "Lynn.G"；network 白名單已含 workshop-gallery-peach.vercel.app 與 *.vercel.app。
- 姊妹 repo：GuiruLin/workshop-gallery（私有；學生作品畫廊，2026-07-04 已從 CoAI Education 改為 Bold Ideas Lab 品牌）。注意：畫廊的 Vercel 專案不在 Lynn 的帳號（guiru-s-projects）下，推測掛在 Jacky 的帳號——那邊 merge 後要實際打開線上網址驗證有沒有更新。
- 更早的設計歷史（約 24 個 HTML 迭代版本、一份 Next.js 工程副本）存在 Lynn 的本機電腦上，雲端看不到；需要時請她提供。

## 工作紀律
- 動手前先看現況：把站跑起來或打開線上頁面，不要只憑描述改。
- 隨做隨 commit，訊息寫清楚改了什麼。
- 「完成」的定義：在 preview 或線上實際看到新行為，並附網址或截圖給 Lynn。build 通過不算完成。
- 同一個問題修兩次沒好就停下來，把試過什麼、卡在哪講清楚給 Lynn，不要悶頭試第三次。
- 大改設計或頁面結構之前，先給方案（最好是 2-3 個帶取捨的選項）讓 Lynn 選。

## 設計決議記錄（2026-07-05，整站改版）

### 分支與上線
- 網站設計全部在 `claude/bold-ideas-lab-redesign-0r7t1i`；治理/筆記文檔（CLAUDE.md、BRAND.md 等）在 `claude/repo-docs`（PR #2 已合進 main）。
- 網站 PR #1 開著但**未合併**：整站改好前不上線，最後一次性合併 = 一次性發布（Vercel 合進 main 即自動部署）。
- 預覽（分支自動更新，需 Lynn 登入 Vercel 帳號 guiru-s-projects 才看得到）：`https://boldideaslab-site-qykm-git-claude-bold-d171ea-guiru-s-projects.vercel.app/<page>`。另一個 Vercel 專案 `boldideaslab-site`（rootDirectory 指向舊資料夾）構建失敗，上線前要理清配置。

### 設計語言（全站統一）
- 所有頁面重建到首頁那套 `components/redesign/` 系統：`t-display/t-h2/t-h3/t-eyebrow` 字級、米白/白交替 section、`Btn`、`Reveal`、品牌形狀（Arch/Decagon/Dot/Pill/Quad/Block）。
- legacy layout（`app/(legacy)/layout.tsx`）已換成首頁的積木導航 `redesign/Header` + `redesign/Footer`，所有 legacy 頁共用一套殼。
- **禁近黑背景**：舊 `FinalCta` 的 `bg-ink` 已全站移除；結尾一律米白/白居中。藍色大色塊可用（品牌色）。
- **每頁開場造型必須不同色/不同幾何**，不可每頁都同一個：programmes = 金色陳述面板；EduOS = 藍色幾何塊（大弧角 + 金拱冠）；work = 火車車廂（藍框裝內容 + 金拱車頂 + 紅黃雙輪）。
- 「造型容器」思路：內容可放進一個有品牌形狀的容器裡（畫框 → 火車），俏皮、呼應首頁；不要在文字旁邊單擺一坨無意義形狀。
- 破折號一律不用（含 en-dash 範圍號改連字號）。莫蘭迪黃 `#C9B27C` 作為 work 反饋「翻頁書」的一次性專用色。

### 各頁狀態
- **首頁**：學生作品畫廊（4 卡 + Study Compass）+ 我們做過的項目 → 已重做。數字口徑 **50+**。
- **programmes**：從招生頁改成「方法 + 實錄」頁；砍價格表/報名時間線；Coolest 是「已結課的衝刺課程」不是「備賽」；「和學校一起做」含 Plymouth 案例。
- **EduOS**：願景頁，講清「現在 vs 未來」，誠實標「在建中」。
- **work（學生作品）**：火車 hero → 作品**按來源分區**（Plymouth College·私校合作 / 線下工作坊·曼城與倫敦）→ Study Compass 獨立國際展示 → Recognition 春晚 → 完整畫廊入口 → 反饋翻頁書（莫蘭迪黃）→ 現場照片輪播 → 結尾。
- **about** 早前已重做；**contact / insights** 尚未重做。

### work 作品策展（給學校高層 + 家長）
- 精選 4 件 + 1 國際展示，都能打開、都有真實 app 截圖封面：
  - Plymouth：**Bullying Reporter**（Lexi，app 內名 SPEAKUP）、**Guess Who**（Frederick，app 內名 Classmate Connect & Guess）
  - 工作坊：**CogniQuest**（Owen，曼城，認知實驗室）、**Pumpkin Dread**（April，倫敦，生存農場遊戲）
  - 國際展示：**Study Compass**（Gloria，Coolest Projects，連 coolestprojects.org）
- GeoGuide 因打不開已棄用。排除成人/創始人作品（Jacky 的 AI Graph、Lynn 的 Gapseeker 等）。
- 家長/學生反饋：微信原文譯成英文，做成統一對話/翻頁書，不放原始截圖。

### 圖片流程（重要）
- **AI 不能把聊天裡貼的圖存成檔案**；截圖要 Lynn 自己上傳到 repo（GitHub 網頁 Upload 到對應分支的 `public/media/...`）或發檔案。
- Lynn 常傳超大原圖（20MB+、名字帶空格/中文）→ 我用 `sharp` 壓成 ~1600px webp（q80，約 50-200KB）、改乾淨檔名、刪原圖。

### 對外署名
- 以 BIL 名義談成/交付的一切（學校、GGE、官網連到的站）對外統一署 Bold Ideas Lab；CoAI 是 Jacky 的社群品牌，兩邊分開。畫廊站 footer 從 CoAI 改 BIL 由 Jacky 那邊處理（畫廊 repo 不在本 session 授權範圍）。
