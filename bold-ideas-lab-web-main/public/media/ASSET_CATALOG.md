# Asset Catalog (Imported from `reference_materials`)

This catalog records imported media, suggested display copy, and source mapping.

## Import rules applied
- Copied only files from `reference_materials/**/素材/**`.
- Skipped files marked with `舍弃删除` or `废弃删除`.
- Converted `.heic` files to `.jpg` for web compatibility.
- Renamed files to stable kebab-case English filenames for code use.
- For two workshop HEIC assets, conversion was re-run with `heif-convert` after black-output issues were observed in other toolchains.
- Generated matching `.webp` files for imported `.jpg` / `.png` assets for runtime use.
- Runtime files kept in `public/media/**` are `.webp` first.
- Matching JPG/PNG originals were moved to `media_backup/from_public_media/**` to keep deploy size lower.

## About

### `public/media/about/founders/lynn/profile.webp`
- Source: `关于我们/素材/创始人图片/lynn_avatar.JPG`
- Suggested title: `Lynn`
- Suggested subtitle: `Co-Founder`

### `public/media/about/founders/jacky/profile.webp`
- Source: `关于我们/素材/创始人图片/jacky_avatar.jpg`
- Suggested title: `Jacky`
- Suggested subtitle: `Co-Founder`

### `public/media/about/hero-carousel/*`
- `workshop-student-pitch-cover.webp`
  - Source: `Workshop-学生在台上Pitch（封面）.jpg`
  - Title: `Workshop`
  - Subtitle: `学生台上 Pitch 现场`
- `online-course-ai-composition-sharing.webp`
  - Source: `线上课程-学生分享自己作曲和用AI作曲的思考.png`
  - Title: `线上课程`
  - Subtitle: `学生分享作曲与 AI 作曲思考`
- `online-course-group-discussion-ai-image.webp`
  - Source: `线上课程-小组讨论学生分享画画和AI生图的感受.png`
  - Title: `线上课程`
  - Subtitle: `小组讨论 AI 生图与绘画体验`
- `workshop-mentor-jacky-sharing.webp`
  - Source: `Workshop-导师Jacky分享.jpg`
  - Title: `Workshop`
  - Subtitle: `导师 Jacky 分享`
- `workshop-mentor-lynn-sharing.webp`
  - Source: `Workshop-导师Lynn分享.jpg`
  - Title: `Workshop`
  - Subtitle: `导师 Lynn 分享`

## Programmes

### `public/media/programmes/hero/5-week-sprint-camp.webp`
- Source: `课程/素材/5周冲刺展示营.webp`
- Suggested title: `5周冲刺展示营`
- Suggested subtitle: `Coolest AI Projects`

## Work

### Student projects
- `public/media/work/projects/color-theory/cover.webp`
  - Source: `学生作品/素材/学生作品/Color_Theory.png`
  - Title: `Color Theory`
  - Subtitle: `互动学习项目`
- `public/media/work/projects/pumpkin-dread/cover.webp`
  - Source: `学生作品/素材/学生作品/Pumpkin_Dread.png`
  - Title: `Pumpkin Dread`
  - Subtitle: `AI 游戏开发项目`
- `public/media/work/projects/magic-story-box/cover.webp`
  - Source: `学生作品/素材/学生作品/Magic_Story_Box.png`
  - Title: `Magic Story Box`
  - Subtitle: `创意写作项目`
- `public/media/work/projects/everyday-magic/cover.webp`
  - Source: `学生作品/素材/学生作品/Everyday_Magic.png`
  - Title: `Everyday Magic`
  - Subtitle: `互动教程项目`

### Recognition (Spring Gala)
- `public/media/work/recognition/spring-gala/yulun-selected-work.webp`
  - Source: `学生作品/素材/学生作品/动画-Yulun.jpg`
  - Title: `Yulun Spring Gala Story`
  - Subtitle: `AI 少儿春晚入选作品`
- `public/media/work/recognition/spring-gala/niuniu-selected-work.webp`
  - Source: `学生作品/素材/学生作品/动画-妞妞.jpg`
  - Title: `Interstellar Rescue`
  - Subtitle: `AI 少儿春晚入选作品`

### Feedback screenshots
- `online-course-student-feedback-01.webp`
- `online-course-student-feedback-02.webp`
- `online-course-parent-feedback-01.webp`
- `online-course-parent-feedback-02.webp`
- `workshop-feedback-01.webp`
- `beijing-ai-community-parent-feedback.webp`

All above imported from `学生作品/素材/学生家长评价/`.

### Event photos
- `public/media/work/photos/workshop/workshop-ai-tool-coaching.webp`
  - Source: `现场照片/Workshop-现场辅导学生做AI小工具.jpg`
- `public/media/work/photos/workshop/workshop-students-thinking.webp`
  - Source: `现场照片/Workshop-现场学生思考.heic` (converted)
- `public/media/work/photos/workshop/workshop-google-ai-studio.webp`
  - Source: `现场照片/Workshop-现场学生使用googleAIStudio.heic` (converted)
- `public/media/work/photos/online-course/online-course-ai-composition-sharing.webp`
  - Source: `现场照片/线上课程-学生分享自己作曲和用AI作曲的思考 copy.png`
- `public/media/work/photos/online-course/online-course-group-discussion-ai-image.webp`
  - Source: `现场照片/线上课程-小组讨论学生分享画画和AI生图的感受 copy.png`

## Partners

### Vision Academy (programmes endorsement)
- `public/media/partners/vision-academy.webp` — runtime logo
- Original JPG kept locally at `media_backup/from_public_media/partners/vision-academy.jpg` (not deployed)

## Insights

### Conversations cover
- `public/media/insights/conversations/covers/oxford-phd-interview.webp`
  - Source: `牛剑博士对谈.jpg`
  - Title: `对谈牛津工程博士｜大学现在还有什么用？`
  - Subtitle: `大学价值与学术商业关系`

## Not imported (by rule)
- Any file containing `舍弃删除` or `废弃删除`.
