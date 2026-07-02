# Student Work 选片名单 v2（基于逐件源码精读，2026-07-02）

数据：gallery 已发布 55 件。本版结论来自**逐个下载并精读每件作品的成品文件**（31 件真实文件全部读完；Plymouth 22 件的成品在 ai.studio，白名单未开，暂缺）。

---

## 〇、最重要的发现（先读这个）

**gallery 里挂的"作品文件"，绝大多数不是能用的 app，是 AI Studio 生成的静态"海报"（Visual Poster）**——零 JavaScript、按钮全是死的、数据全是假的，很多文件标题里自己就写着 "Visual Poster / Visual Preview"。

这直接影响网站文案的措辞红线：
- ❌ 不能写 "apps students built"（一查源码就穿帮，恰好是私校受众会做的事）
- ✅ 诚实写法："product concepts / interface designs students created with AI"（概念设计/产品原型），对真正能跑的少数作品再单独说 "working app"
- 学生的**真 app 都在 ai.studio 的 demo 链接里**（每件都有 externalDemoLink）；blob 文件只是展示海报。要最终判断"谁的 app 是真的能跑"，必须开 `ai.studio` + `aistudio.google.com` 白名单。

**31 件里唯一在浏览器里真正能跑的交互作品：Jacky（联创）的 The AI Graph。**
另有 3 份"真代码但跑不起来"的 React 源码（Boaz、Zach×2——文件是 TSX 源码存成 .html，直接打开是一墙代码文字）。

---

## 一、Manchester（25 件 → 有效 21 件）

### 值得放前面（按序）
| # | 学生 | 作品 | 实际是什么 | 分 |
|---|---|---|---|---|
| 1 | Boaz | Sync Runner（97fb0855 版） | **真游戏逻辑**：四人轮流的记忆接力赛（Simon Says 竞速），完整状态机、淘汰/胜利条件、难度递增。但文件是 React 源码，展示需用 ai.studio demo 链接 | 4 |
| 2 | owen | neurofit | 静态海报，但内容扎实：认知训练仪表盘（三段论找错、3D 旋转、决策日志）——真实认知科学素材，**与 BIL 的 Critical Thinking/Metacognition 最对味** | 3 |
| 3 | owen | cogniquest | 同上风格：Hermann 栅格错觉、bat-and-ball 经典 CRT 题、记忆组块演示。二选一或并为一条 | 3 |
| 4 | lizzie liang | Dream Box | 静态海报，纯 CSS 3D 房间投影有技术亮点；"设计自己的家"+三语切换，非游戏、个人动机，家长秒懂 | 3 |
| 5 | Gloria | Found It! | 静态海报，但"按步回溯找丢失物（Step 1 of 10）"的 UX 构思是真问题真洞察 | 3 |
| 6 | wenyu du | UniVerse | 海报最精致之一（bento 布局、分龄难度），但是平台幻想不是解决问题 | 3 |

### 可留在 gallery、不上官网
Naomi（Catch a fish 海报，有系统设计感）、Henry ×2（数学墙/塔防海报）、Patrick（GeoGuide 海报，内容与本人陈述对不上）、h（pythontype 海报）、Terence（语音助手海报）、Catherine（盲盒海报）——全部零 JS。

### 建议下架/隐藏（gallery 层面）
| 学生 | 作品 | 原因 |
|---|---|---|
| Oliver | Cosmic wave ×2 | **两份字节级相同**，删一份；CSS 里粘着一句没删的日文垃圾字符；太空侵略者克隆静态图 |
| Zach | clash of empires（09a1e40c 版） | ⚠️ **隐私**：源码里硬编码了一个真实私人邮箱当作弊后门（无限金币）。删这版，留 872fd0df 干净版（同样的真游戏逻辑，无邮箱无后门） |
| Grace Liu | Meow Jokes | 一个硬编码笑话+死按钮+满屏 emoji |
| Harry Pollitt | BLOXCRAFT | Roblox 工具幻想海报，3D 视口是空水印 |
| Oscar Sun | OmniStudio | Roblox Studio 静态临摹 |
| Angela | GeoDash Lite | **坏档**：上传的是一行 URL 不是文件 |
| Summer l | 乐理可视化 | **坏档**：同上（此前我按标题把它列为精选，撤回，待看 ai.studio 真身再定） |

## 二、London 亲子共创（8 件）

全部为静态概念设计（零 JS），Jacky 的除外。

| # | 作者 | 作品 | 实际是什么 | 分 |
|---|---|---|---|---|
| 1 | **Jacky YANG（联创，需标注）** | The AI Graph（London 版 da915e7a） | **全场唯一真交互 app**：可点击的五层"人机协作"概念图（从"你问它答"到"让两个 AI 互搏"），自研缩放/拖拽/双指触控，零外部依赖、手机可用。内容本身就是 BIL 的元认知主张 | 5 |
| 2 | **Lynn（创始人，需标注）** | Gapseeker | 概念设计：弥合"看完视频"与"真正理解"的学习工具首屏，配色即克莱因蓝，产品思考完整 | 4 |
| 3 | PAUL（credit Jacky） | AI Colleague Circle | 概念设计：多 AI 互评工作流（Visionary→Editor→Synthesis），示例对话真的演示了"批评→融合"，概念先进 | 4 |
| 4 | April | Color theory | 概念设计：调色匹配游戏，克制的编辑风排版，页脚真的在教配色原理——**与 BIL 审美最合** | 4 |
| 5 | Veronica | Everyday magic | 概念设计：魔术教学库，全场视觉完成度最高之一 | 4 |
| 6 | Rachel | Magic story box | 概念设计：儿童故事题材选择屏，一屏、无逻辑 | 3 |
| 7 | Shelly | AAT courses | 概念设计：会计学习仪表盘，题材真实（成人学员），视觉普通 | 3 |
| — | April | Pumpkin hunt | 下架：没做出来（本人注明 unable to build），纯 CSS 假游戏截图，放着有误导风险 | 2 |

Manchester 的 Jacky AI Graph（8b6cded7，D3 版）与 London 版是同一作品两次迭代——London 版更完整。gallery 保留一份即可（或作为"同一想法两次重构"的过程故事）。

## 三、Plymouth Year 9（22 件）——待补

blob 文件全部是 220 字节占位壳（"hosted on Google AI Studio"），**真身全部在 ai.studio**。这批是主力（私校 Year 9、真实校园问题、你的 4 个 featured 都在），很可能是真正能跑的 app——**待 `ai.studio` + `aistudio.google.com` 加入白名单后逐个验证**，再出 Plymouth 的最终排序。

## 四、给 owner 的行动清单

1. **gallery 清理**：删 Oliver 重复份、Zach 带邮箱版（隐私！）、Angela/Summer 坏档、April Pumpkin hunt；Grace/BLOXCRAFT/OmniStudio 建议隐藏。
2. **白名单**：让 Chat 端 Claude 把 `ai.studio`、`aistudio.google.com` 加进环境 Lynn.G 的 Allowed domains（补 Plymouth 真身 + 全员 live demo 验证）。
3. **网站措辞**：概念设计与真 app 分开说；创始人作品必须标注创始人身份。
4. Summer 的乐理 app 让她重新上传文件，或直接用她的 aistudio 链接。
