# CLAUDE.md — boldideaslab-site 工作規則

## 這個專案是什麼
Bold Ideas Lab（敢想實驗室）官網。Lynn（林桂茹）的 AI 教育品牌：為英國私校設計 AI literacy 與 AI design 課程。她本人不是工程師——解釋要白話、結論先行；任何改動完成後，給她能自己驗證的方式（預覽網址、打開哪裡看什麼）。

## 硬規則（違反任何一條就是返工）
1. 不用 emoji：頁面內容、代碼、commit 訊息、給她的回覆，一律不用。→ ≠ 等數學與箭頭符號可以。
2. 品牌色 token（2026-07-04 與畫廊站對齊後的定版）：米白 #F5F2EA（底色）、克萊因藍 #002FA7、金 #C9A84C、馬蒂斯紅 #CC2936（只用於精選與強調）。標題字 Fraunces、正文 Lora。不可用純黑或近黑當背景色塊，深色只用於文字。新增任何 UI 一律從這組 token 取色，不自創顏色。
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
