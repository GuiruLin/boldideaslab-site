# 阶段 3 — BIL 设计系统方案（待 owner 确认）

日期：2026-06-10 ｜ 配套可视化预览：`design-preview.html`（浏览器直接打开）
原则：北欧极简，留白是设计的一部分，形状是品牌人格不是装饰。所有规则服务已定稿的文案。

---

## 1. 颜色 tokens

| token | 色值 | 角色与硬规则 |
| --- | --- | --- |
| `cream` | `#F5F2EA` | 基础底色，几乎每屏都有 |
| `blue` | `#002FA7` | 主色：标题文字、主按钮、形状。**不做大面积背景**（owner 决议 2026-06-10） |
| `gold` | `#C9A84C` | 强调：大数字、分割元素、次形状 |
| `red` | `#CC2936` | 只做小面积点缀：≤14px 圆点、徽标级标记；**每屏最多出现一次，永不做色块** |
| `ink` | `#1A1A1A` | 正文文字色（功能色，不计入四色） |
| `white` | `#FFFFFF` | 卡片面（功能色） |

派生只允许透明度，不允许新色值：边框 `ink/10`、`blue/12`；浅底 `blue/5`、`gold/12`。

**面积纪律（贴合 Streamtime 的转译）**：大面积只允许 `cream` 和 `white` 两种浅底，全站没有深色 section。趣味来自形状的布置、尺寸节奏和微交互，不来自色块面积。蓝是"声音最大的字"，不是"声音最大的墙"。

**清除现状违规**：紫 `#9B8EA8`、棕 `#C4956A`、绿 `#7FA48A`、`#f3f0e8`、四种深金文字色、`#002680` hover 全部删除；hover 加深一律改用透明度叠加（如 `blue` + 8% ink overlay）。

## 2. 字体 tokens

| 用途 | 英文 | 中文 | 实现 |
| --- | --- | --- | --- |
| 标题 | **Fraunces**（500/600，衬线） | **Noto Serif SC**（500/600） | `next/font/google`，CSS 变量 `--font-display` |
| 正文 | **Lora**（400/500） | **Noto Sans SC**（400/500） | `--font-body` |
| 大数字 | Fraunces 600，金色 | 同 | `--font-display` |

- 按 `html[lang]` 切换字体栈：en 页 Fraunces+Lora 在前，zh 页 Noto Serif/Sans SC 在前。
- 现状的 Inter/Georgia 兜底淘汰；首次真正用 `next/font` 加载，消除系统字体抽签。

**字号（流式）**：

| token | 值 | 用途 |
| --- | --- | --- |
| `display` | clamp(3rem, 7vw, 5.5rem) ／行高 1.06 | 首页 hero |
| `h1` | clamp(2.5rem, 5vw, 4rem) ／1.1 | 页 hero |
| `h2` | clamp(1.875rem, 3.5vw, 2.75rem) ／1.15 | section 标题 |
| `h3` | 1.375rem ／1.3 | 卡片标题 |
| `body` | 1.0625rem ／1.8 | 正文，行长上限 65ch |
| `small` | 0.875rem ／1.6 | 注脚、标签 |
| `number` | clamp(5rem, 12vw, 9rem) ／1 | 金色大数字；四周留白不少于数字高度的一半 |

eyebrow（小标签）保留全大写 + 字距，但改 `gold` 600 weight、0.14em 字距，比现状收敛。

## 3. 间距与圆角 tokens

- **8px 网格**。section 垂直内距：桌面 96px、移动 64px（"一屏一事"需要的呼吸感）。
- 内容容器 max-width 72rem；正文行长 65ch。
- **圆角只有四档**：`r-sm` 10px（小标记）、`r-md` 18px（卡片）、`r-lg` 28px（大面板/图框）、`r-full`（pill）。现状 md/lg/2xl/full 混用全部收口到这四档。
- **阴影默认为零**，用 1px `ink/10` 边框分层；只有可点击卡片 hover 时允许一档轻投影 `0 10px 30px rgba(26,26,26,0.07)`。现有重阴影、渐变条全部删除。
- **背景纹理全部删除**（蓝图网格、点阵），底色平铺 cream。

## 4. BIL 几何形状库（7 个，只用品牌色，全圆角）

形状有固定含义，在 hero、分割、卡片标记、列表符号中复用——不随机撒。

| # | 名 | 几何 | 色 | 含义/用途 |
| --- | --- | --- | --- | --- |
| 1 | 十边 | 圆角十边形（SVG） | 蓝描边 | **思维力**标记：判断有很多面 |
| 2 | 拱 | 半圆（平底） | 金实心 | **创作力**标记：正在升起的作品；section 分割元素 |
| 3 | 声带 | pill 胶囊 | 蓝实心 | **表达力**标记；列表符号（小号） |
| 4 | 块 | 圆角方块 | 蓝/金实心 | hero 字符间穿插的基础块；图片框 |
| 5 | 角 | 四分之一圆 | 蓝实心 | 证据卡角部咬合元素 |
| 6 | 拱窗 | 上圆下方矩形 | 蓝描边/照片遮罩 | 真实照片的统一裁切形 |
| 7 | 点 | 小圆 ≤14px | **红（全站唯一红形）** | 句号级强调，每屏最多一个 |

CSS 即可实现 1 以外的全部（border-radius 配方写进组件库）；十边形用一个共享 SVG。

## 5. 微交互规范

**Hero 形态（2026-06-10 owner 定稿，Streamtime 首屏转译）**：slogan（定稿标题「AI 在教育里的第三种声音。/ The third voice on AI in education.」）居中在上；品牌名 BOLD IDEAS LAB 做成超大 Fraunces 字母坐在首屏底边，字母只用克莱因蓝一色，词间与收尾穿插金拱、蓝 pill、金描边十边与红点；落位后字母保留 ±3.5° 微旋转与轻微基线起伏——比 Streamtime 收敛，静谧极简但有趣味。

| 对象 | 行为 | 参数 |
| --- | --- | --- |
| hero 品牌字母 | 载入时从散落（±70px、±14°）聚合到位，落位后保留微姿态 | 800ms，逐字 stagger 40ms，只播一次 |
| hero 几何块 | 同上稍慢落位 | 1000ms |
| 卡片 hover | 上浮 3px + 边框转 `blue/30` + 一档轻投影 | 200ms ease-out |
| 形状标记 hover | 位移 3px 或旋转 6° | 250ms cubic-bezier(0.2,0,0,1) |
| 链接 hover | 下划线由 30% 透明度变实 | 150ms |
| 按钮 hover | 上浮 2px，色块加 8% ink 叠加 | 200ms |
| 全局 | `prefers-reduced-motion: reduce` 时全部动画关闭 | — |

| Menu 瀑布 | 顶栏 Menu 点开后，问句药丸逐个下落成竖列（白丸为主 + 一金一蓝，队尾金拱 + 红点） | 300ms/项，stagger 55ms |

**顶栏形态（2026-06-12 owner 定稿，Streamtime 顶栏转译）**：无通栏底色，浮动芯片——白圆片 logo + 蓝色 Menu 丸在左，白底描边 "Shall we talk?" 丸在右；横排导航取消，问句导航全部收进 Menu 瀑布，桌面与移动同构。

不做：视差、粒子、光效、marquee、滚动劫持。

## 6. Tailwind 配置映射（阶段 4 实装）

```ts
theme: {
  colors: { cream:"#F5F2EA", blue:"#002FA7", gold:"#C9A84C",
            red:"#CC2936", ink:"#1A1A1A", white:"#fff", transparent:"transparent" },
  borderRadius: { sm:"10px", md:"18px", lg:"28px", full:"9999px" },
  fontFamily: { display:["var(--font-display)"], body:["var(--font-body)"] },
  // 字号/间距按第 2、3 节 token 写入 fontSize / spacing extend
}
```

颜色表收窄为白名单（不继承 Tailwind 默认调色板），从机制上杜绝调色板外颜色再次出现。

---

## 大面板形态（2026-06-10 修订）

立场陈述等重点屏不用深色面板：米白/白底，克莱因蓝 display 大字，收尾句金色，周边以 2-3 个形状作呼吸点。原方案的"蓝底 cream 字"面板废弃。

## 待 owner 确认的取舍

1. 英文标题字体 **Fraunces**（已选它做预览；备选 Libre Caslon Display，更古典但字重少）
2. **零阴影 + 边框分层**的扁平方向（预览里可对比 hover 的唯一一档投影）
3. 形状库 7 个的含义分配（尤其三力 = 十边/拱/声带 的对应关系）
4. 红点「每屏最多一次」这条纪律
